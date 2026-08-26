import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbModal, NgbDropdownModule, NgbNavModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService, DEMO_USERS } from '../../../core/services/nckh-data.service';
import { 
  TopicProposal, 
  RegistrationRound, 
  DirectAssignmentTopic, 
  ResearchMember, 
  UserProfile, 
  TopicTarget, 
  TopicType,
  TopicStatus
} from '../../../core/models/nckh.model';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModalModule,
    NgbTooltipModule
  ]
})
export class ProposalFormComponent implements OnInit {
  isEditMode = false;
  isReadOnly = false;
  proposalId?: string;
  currentUser!: UserProfile;
  rounds: RegistrationRound[] = [];
  selectedRound?: RegistrationRound;
  directTopics: DirectAssignmentTopic[] = [];
  isRoundFixed = false;
  pendingRoundId?: string;
  pendingDirectTopicId?: string;

  currentStep = 1;
  activePhaseTab = 1; // 1 to 9 (tương ứng 9 Bước quy trình PRD)
  reviewComment = '';

  readonly workflowSteps = [
    { id: 1, code: 'B01', title: 'Đăng ký đề tài', fullName: 'B01: Đăng ký đề tài (BM01A/BM01B)' },
    { id: 2, code: 'B02', title: 'Phê duyệt sơ bộ', fullName: 'B02: Phê duyệt sơ bộ (BM02 & BM03)' },
    { id: 3, code: 'B03', title: 'Viết thuyết minh', fullName: 'B03: Viết thuyết minh & Dự toán (BM04)' },
    { id: 4, code: 'B04', title: 'Phê duyệt TM', fullName: 'B04: Phê duyệt thuyết minh (BM06 & BM07)' },
    { id: 5, code: 'B05', title: 'Ký hợp đồng', fullName: 'B05: Thông báo QĐ Giao việc & Hợp đồng (BM05)' },
    { id: 6, code: 'B06', title: 'BC tiến độ ½ TG', fullName: 'B06: Báo cáo tiến độ ½ thời gian (BM08)' },
    { id: 7, code: 'B07', title: 'Nghiệm thu đề tài', fullName: 'B07: Nghiệm thu & Chỉnh sửa BM13 & Thanh lý BM14' },
    { id: 8, code: 'B08', title: 'QĐ công nhận KQ', fullName: 'B08: Thông báo QĐ công nhận kết quả (BM15)' },
    { id: 9, code: 'B09', title: 'Triển khai & Lưu HS', fullName: 'B09: Triển khai ứng dụng & Lưu hồ sơ' }
  ];

  // ===== DỮ LIỆU CÁC BIỂU MẪU ĐIỆN TỬ TƯƠNG TÁC =====

  // 1. BM02: Phiếu đánh giá hồ sơ đề tài NCKH (Hội đồng Bước 02 chấm)
  bm02Form = {
    criteria1: 20, // Tính cấp thiết & tính mới (max 25)
    criteria2: 25, // Tính khả thi & mục tiêu rõ ràng (max 25)
    criteria3: 20, // Phương pháp nghiên cứu phù hợp (max 20)
    criteria4: 15, // Năng lực của chủ nhiệm & nhóm (max 15)
    criteria5: 10, // Dự toán kinh phí hợp lý (max 15)
    conclusion: 'DAT' as 'DAT' | 'KHONG_DAT',
    notes: 'Hồ sơ có tính cấp thiết cao, phương pháp nghiên cứu chặt chẽ, dự toán kinh phí phù hợp với định mức Nhà trường.',
    reviewerName: 'PGS.TS. Trần Văn Hùng',
    reviewerRole: 'Chủ tịch Hội đồng',
    signedDate: '2026-09-05 09:30',
    isSubmitted: true
  };

  get bm02TotalScore(): number {
    return (this.bm02Form.criteria1 || 0) + 
           (this.bm02Form.criteria2 || 0) + 
           (this.bm02Form.criteria3 || 0) + 
           (this.bm02Form.criteria4 || 0) + 
           (this.bm02Form.criteria5 || 0);
  }

  // 2. BM03: Biên bản họp Hội đồng xét duyệt hồ sơ (Thư ký lập & Chủ tịch ký)
  bm03Form = {
    meetingDate: '2026-09-05 08:30',
    location: 'Phòng Hội thảo A204 - Tòa nhà Trung tâm DNTU',
    attendees: 'PGS.TS. Trần Văn Hùng (Chủ tịch), TS. Lê Hoàng Nam (Ủy viên PB1), ThS. Đỗ Anh Khoa (Thư ký)',
    summaryVotes: '3/3 Phiếu ĐẠT (100% thành viên đồng ý thông qua)',
    conclusion: 'DAT' as 'DAT' | 'KHONG_DAT' | 'CHINH_SUA',
    generalAssessment: 'Hội đồng nhất trí thông qua hồ sơ đăng ký và đề nghị Chủ nhiệm tiến hành xây dựng Thuyết minh chi tiết (BM04).',
    isSecretarySigned: true,
    secretarySignedAt: '2026-09-05 10:15',
    isPresidentSigned: true,
    presidentSignedAt: '2026-09-05 11:00',
    isPublishedByPkhcn: true
  };

  // 3. BM04A/B: Thuyết minh đề cương nghiên cứu chi tiết & Dự toán kinh phí (Chủ nhiệm nộp)
  bm04Form = {
    overviewDomestic: 'Các nghiên cứu trong nước về chẩn đoán ảnh y tế chủ yếu sử dụng mô hình CNN truyền thống, độ chính xác dao động 85-88%.',
    overviewAbroad: 'Xu hướng quốc tế đang ứng dụng Vision Transformer kết hợp dữ liệu đa trung tâm giúp đạt độ chính xác trên 94%.',
    researchMethodsDetail: 'Sử dụng Transfer Learning trên mô hình ViT tiền huấn luyện, tối ưu hóa hàm mất mát Focal Loss và chuẩn hóa TensorRT.',
    implementationPlan: [
      { month: 'Tháng 01 - 03', content: 'Thu thập và tiền xử lý bộ dữ liệu 5.000 ảnh y tế chuẩn hóa', outcome: 'Dataset ảnh gán nhãn y khoa' },
      { month: 'Tháng 04 - 08', content: 'Thiết kế mô hình Transformer và thử nghiệm huấn luyện trên GPU', outcome: 'Model AI đạt độ chính xác > 92%' },
      { month: 'Tháng 09 - 12', content: 'Đóng gói REST API, lập trình Web demo và viết báo cáo tổng kết', outcome: '01 Web App demo & 01 Bài báo Scopus' }
    ],
    budgetItems: [
      { category: '1. Thù lao nghiên cứu chuyên môn & phân tích dữ liệu', amount: 18000000 },
      { category: '2. Thu thập, chuẩn hóa mẫu dữ liệu y tế', amount: 6000000 },
      { category: '3. Thuê máy chủ tính toán GPU huấn luyện', amount: 5000000 },
      { category: '4. Chi phí đăng bài báo trên Tạp chí chuyên ngành', amount: 4000000 },
      { category: '5. Văn phòng phẩm & hội thảo nghiệm thu', amount: 2000000 }
    ],
    expectedProductsDetail: '- 01 Bài báo khoa học trên Tạp chí chuyên ngành quốc tế uy tín.\n- 01 Phần mềm Web demo phân loại ảnh y tế trực tuyến.\n- Báo cáo tổng kết đề tài và tài liệu hướng dẫn chuyển giao.',
    isAuthorSigned: true,
    signedAt: '2026-09-18 15:40'
  };

  get bm04TotalBudget(): number {
    return this.bm04Form.budgetItems.reduce((acc, item) => acc + (item.amount || 0), 0);
  }

  // 4. BM05: Thông báo Quyết định Giao nhiệm vụ & Hợp đồng NCKH (P.KHCN đăng tải thông báo từ bản ký ngoài)
  bm05Notice = {
    decisionNumber: '128/QĐ-DNTU-KHCN',
    decisionDate: '2026-10-05',
    signer: 'Hiệu trưởng Trường Đại học Công nghệ Đồng Nai',
    contractCode: 'HĐ-NCKH-2026-042',
    contractSignDate: '2026-10-06',
    approvedBudget: 35000000,
    duration: '12 tháng (Từ 01/10/2026 đến 30/09/2027)',
    publishedBy: 'Phòng Khoa học & Công nghệ',
    publishDate: '2026-10-06 09:00',
    noticeText: 'Phòng Khoa học & Công nghệ trân trọng thông báo Quyết định giao nhiệm vụ và Hợp đồng nghiên cứu khoa học cấp Trường đã được hoàn tất ký kết giữa Nhà trường và Chủ nhiệm đề tài.'
  };

  // 5. BM06: Phiếu đánh giá Thuyết minh đề tài (Hội đồng Bước 04 chấm)
  bm06Form = {
    criteria1: 23, // Mục tiêu & Nội dung nghiên cứu (max 25)
    criteria2: 22, // Phương pháp nghiên cứu & Giải pháp kỹ thuật (max 25)
    criteria3: 18, // Kế hoạch triển khai & Khả năng thực hiện (max 20)
    criteria4: 18, // Sản phẩm dự kiến & Giá trị ứng dụng (max 20)
    criteria5: 9,  // Dự toán kinh phí hợp lý, tiết kiệm (max 10)
    conclusion: 'THUC_HIEN' as 'THUC_HIEN' | 'CHINH_SUA' | 'KHONG_THUC_HIEN',
    notes: 'Thuyết minh đề tài chuẩn bị công phu, kế hoạch chi tiết từng tháng, dự toán phân bổ hợp lý theo quy định.',
    reviewerName: 'TS. Vũ Minh Tuấn',
    reviewerRole: 'Ủy viên Phản biện 1',
    signedDate: '2026-09-28 14:30',
    isSubmitted: true
  };

  get bm06TotalScore(): number {
    return (this.bm06Form.criteria1 || 0) + 
           (this.bm06Form.criteria2 || 0) + 
           (this.bm06Form.criteria3 || 0) + 
           (this.bm06Form.criteria4 || 0) + 
           (this.bm06Form.criteria5 || 0);
  }

  // 6. BM07: Biên bản họp Hội đồng xét duyệt thuyết minh (Thư ký lập & Chủ tịch ký)
  bm07Form = {
    meetingDate: '2026-09-28 14:00',
    location: 'Phòng Họp B102 - Tòa nhà Trung tâm DNTU',
    attendees: 'PGS.TS. Trần Văn Hùng (Chủ tịch), TS. Vũ Minh Tuấn (Phản biện), ThS. Nguyễn Thị Thu (Thư ký)',
    averageScore: 90,
    conclusion: 'THUC_HIEN' as 'THUC_HIEN' | 'CHINH_SUA' | 'KHONG_THUC_HIEN',
    budgetRecommendation: 'Đề nghị cấp kinh phí 35.000.000 VNĐ đúng mức dự toán.',
    generalAssessment: 'Hội đồng nhất trí thông qua thuyết minh đề tài với kết luận: THỰC HIỆN. Đề nghị Nhà trường phê duyệt ký Hợp đồng NCKH.',
    isSecretarySigned: true,
    secretarySignedAt: '2026-09-28 16:00',
    isPresidentSigned: true,
    presidentSignedAt: '2026-09-28 16:45',
    isPublishedByPkhcn: true
  };

  // 7. BM08: Báo cáo tiến độ thực hiện đề tài ½ thời gian (Chủ nhiệm lập -> Khoa duyệt -> P.KHCN tiếp nhận)
  bm08Form = {
    progressPercent: 65,
    completedContents: 'Đã hoàn thành thu thập dữ liệu 5.000 ảnh y tế và huấn luyện mô hình Vision Transformer cơ bản đạt độ chính xác thử nghiệm 89.5%.',
    intermediateProducts: '01 Bộ dữ liệu ảnh y tế chuẩn hóa; 01 Bản thảo bài báo khoa học đã nộp cho Tạp chí chuyên ngành.',
    budgetExpended: 22000000,
    difficultiesAndRequests: 'Cần thêm thời gian tối ưu hóa tốc độ suy luận mô hình trên phần cứng nhúng.',
    planNextPhase: 'Hoàn thiện module Web demo, đóng gói Docker API và tiến hành viết báo cáo tổng kết nghiệm thu.',
    submittedAt: '2027-03-15 10:20',
    isAuthorSigned: true,
    authorSignedAt: '2027-03-15 10:20',
    isDeanApproved: true,
    deanApprovedAt: '2027-03-16 14:00',
    isPkhcnReceived: true,
    pkhcnReceivedAt: '2027-03-17 09:30'
  };

  // 8. BM09: Báo cáo tổng kết đề tài & Bảng đối chiếu sản phẩm & Đơn đề nghị nghiệm thu (Chủ nhiệm nộp)
  bm09Form = {
    summaryReportTitle: 'Báo cáo tổng kết Đề tài Nghiên cứu Khoa học Cấp Trường năm 2026-2027',
    summaryContent: 'Đề tài đã hoàn thành xuất sắc các nội dung nghiên cứu theo thuyết minh BM04. Mô hình AI đạt độ chính xác 93.8% trên tập kiểm thử độc lập.',
    productComparisons: [
      { productType: 'Bài báo khoa học', planned: '01 bài báo tạp chí chuyên ngành', actual: '01 bài báo đăng trên Tạp chí Khoa học & Công nghệ', status: 'ĐẠT VƯỢT MỨC' },
      { productType: 'Phần mềm Web Demo', planned: '01 Web demo phân loại ảnh', actual: '01 Hệ thống phần mềm Web hoàn chỉnh đóng gói Docker', status: 'ĐẠT' },
      { productType: 'Báo cáo tổng kết', planned: '01 quyển báo cáo khoa học', actual: '01 quyển báo cáo tổng kết 92 trang kèm phụ lục mã nguồn', status: 'ĐẠT' }
    ],
    selfAssessment: 'Đạt loại Xuất sắc',
    isAuthorSigned: true,
    signedAt: '2027-07-20 09:15'
  };

  // 9. BM10: Thông báo Quyết định Thành lập Hội đồng Nghiệm thu (P.KHCN đăng tải từ QĐ ký ngoài)
  bm10Notice = {
    decisionNumber: '215/QĐ-DNTU-HĐNT',
    decisionDate: '2027-08-01',
    councilName: 'Hội đồng Đánh giá & Nghiệm thu Đề tài NCKH Lĩnh vực CNTT & AI',
    meetingDate: '2027-08-10 08:30',
    location: 'Hội trường A204 & Trực tuyến MS Teams',
    president: 'PGS.TS. Trần Văn Hùng',
    secretary: 'ThS. Đỗ Anh Khoa',
    reviewers: 'TS. Vũ Minh Tuấn (PB1), TS. Lê Hoàng Nam (PB2)',
    publishedBy: 'Phòng Khoa học & Công nghệ',
    publishDate: '2027-08-01 10:00',
    noticeText: 'Phòng Khoa học & Công nghệ thông báo Quyết định của Nhà trường về việc thành lập Hội đồng Đánh giá và Nghiệm thu chính thức đề tài NCKH.'
  };

  // 10. BM11: Phiếu đánh giá Nghiệm thu đề tài (Hội đồng Bước 07 chấm)
  bm11Form = {
    criteria1: 28, // Mức độ hoàn thành mục tiêu & nội dung (max 30)
    criteria2: 28, // Chất lượng sản phẩm khoa học & bài báo (max 30)
    criteria3: 23, // Giá trị khoa học & khả năng ứng dụng thực tiễn (max 25)
    criteria4: 13, // Hình thức & chất lượng báo cáo tổng kết (max 15)
    rank: 'XUAT_SAC' as 'XUAT_SAC' | 'DAT' | 'CHUA_DAT',
    notes: 'Sản phẩm hoàn thành vượt mức cam kết ban đầu, bài báo có hàm lượng khoa học cao, phần mềm demo chạy ổn định.',
    reviewerName: 'PGS.TS. Trần Văn Hùng',
    reviewerRole: 'Chủ tịch Hội đồng',
    signedDate: '2027-08-10 10:45',
    isSubmitted: true
  };

  get bm11TotalScore(): number {
    return (this.bm11Form.criteria1 || 0) + 
           (this.bm11Form.criteria2 || 0) + 
           (this.bm11Form.criteria3 || 0) + 
           (this.bm11Form.criteria4 || 0);
  }

  // 11. BM12: Biên bản họp Hội đồng đánh giá nghiệm thu (Thư ký lập & Chủ tịch ký)
  bm12Form = {
    meetingDate: '2027-08-10 08:30',
    location: 'Phòng Hội thảo A204',
    attendees: 'PGS.TS. Trần Văn Hùng (Chủ tịch), TS. Vũ Minh Tuấn (PB1), TS. Lê Hoàng Nam (PB2), ThS. Đỗ Anh Khoa (Thư ký)',
    averageScore: 92,
    rank: 'XUAT_SAC' as 'XUAT_SAC' | 'DAT' | 'CHUA_DAT',
    conclusion: 'DAT_NGHIEM_THU' as 'DAT_NGHIEM_THU' | 'YEU_CAU_CHINH_SUA' | 'KHONG_DAT',
    requireExplanation: false,
    editRequests: 'Bổ sung thêm tài liệu hướng dẫn cài đặt phần mềm demo và hoàn thiện phần kết luận hướng phát triển tương lai.',
    isSecretarySigned: true,
    secretarySignedAt: '2027-08-10 11:30',
    isPresidentSigned: true,
    presidentSignedAt: '2027-08-10 12:00',
    isPublishedByPkhcn: true
  };

  // 12. BM13: Báo cáo giải trình & chỉnh sửa hồ sơ sau nghiệm thu (Chủ nhiệm nộp khi BM12 yêu cầu sửa)
  bm13Form = {
    explanationItems: [
      { 
        request: 'Bổ sung tài liệu hướng dẫn cài đặt phần mềm demo vào phụ lục', 
        response: 'Đã bổ sung Phụ lục 3: Tài liệu hướng dẫn cài đặt và cấu hình Docker container chi tiết từng bước.' 
      },
      { 
        request: 'Làm rõ hơn phần kết luận và hướng mở rộng nghiên cứu đa trung tâm', 
        response: 'Đã cập nhật mục 5.2 tại trang 82-84 nêu rõ giải pháp mở rộng tập dữ liệu đa trung tâm.' 
      }
    ],
    isAuthorSigned: true,
    signedAt: '2027-08-14 16:00',
    isPkhcnApproved: true,
    pkhcnApprovalNote: 'Phòng KHCN xác nhận Chủ nhiệm đã hoàn thành giải trình và chỉnh sửa đầy đủ theo đúng góp ý của Hội đồng nghiệm thu.'
  };

  // 13. BM14: Thông báo Thanh lý Hợp đồng NCKH (P.KHCN đăng tải từ biên bản ký ngoài)
  bm14Notice = {
    liquidationNumber: 'TLHĐ-2027-042',
    liquidationDate: '2027-08-15',
    totalBudgetPaid: 35000000,
    statusText: 'Đã hoàn thành 100% nghĩa vụ Hợp đồng và bàn giao đầy đủ sản phẩm',
    publishedBy: 'Phòng Khoa học & Công nghệ',
    publishDate: '2027-08-15 09:00',
    noticeText: 'Phòng Khoa học & Công nghệ thông báo Biên bản thanh lý Hợp đồng NCKH đã được các bên đại diện ký kết và lưu trữ hồ sơ theo quy định.'
  };

  // 14. BM15: Thông báo Quyết định Công nhận Kết quả đề tài NCKH (P.KHCN đăng tải từ QĐ ký ngoài)
  bm15Notice = {
    decisionNumber: '350/QĐ-DNTU-KHCN',
    decisionDate: '2027-08-18',
    signer: 'Hiệu trưởng Trường Đại học Công nghệ Đồng Nai',
    rank: 'Xuất sắc (92/100 điểm)',
    rewardNotice: 'Khen thưởng Chủ nhiệm và Nhóm nghiên cứu theo Quy chế KHCN hiện hành',
    certificateNumber: 'GCN-NCKH-2027-028',
    publishedBy: 'Phòng Khoa học & Công nghệ',
    publishDate: '2027-08-18 10:30',
    noticeText: 'Phòng Khoa học & Công nghệ trân trọng thông báo Quyết định của Hiệu trưởng về việc Công nhận kết quả đề tài NCKH Cấp Trường và cấp Giấy chứng nhận hoàn thành đề tài.'
  };

  finalStatusChoice: 'TRIEN_KHAI_UNG_DUNG' | 'LUU_HO_SO' = 'TRIEN_KHAI_UNG_DUNG';

  // Form Model BM01 gốc
  proposal: Partial<TopicProposal> = {
    title: '',
    roundId: '',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Công nghệ thông tin & Trí tuệ nhân tạo',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 12,
    startDateExpected: '2026-10-01',
    endDateExpected: '2027-09-30',
    necessity: '',
    objectives: '',
    mainContents: '',
    methods: '',
    expectedProducts: '',
    applicability: '',
    members: [],
    budgetTotal: 30000000,
    budgetSchoolFunded: 30000000,
    auditLogs: []
  };

  // Temp member input BM01
  newMember: ResearchMember = {
    id: '',
    fullName: '',
    identifierCode: '',
    unit: 'Khoa Công nghệ thông tin',
    roleInProject: 'Thành viên nghiên cứu chính'
  };

  // Temp BM04 Plan input
  newPlanItem = { month: '', content: '', outcome: '' };
  newBudgetItem = { category: '', amount: 0 };
  newExplanationItem = { request: '', response: '' };

  // List of potential advisors (for students)
  advisorsList = DEMO_USERS.filter(u => u.role === 'GIANG_VIEN' || u.role === 'GIANG_VIEN_HD' || u.role === 'TRUONG_KHOA');

  alertMessage = '';
  alertType = 'success';
  isSimulatingSign = false;

  // Modal Preview BM
  previewBmCode = 'BM01';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public nckhDataService: NckhDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
        if (!this.isEditMode) {
          this.proposal.target = (u.role === 'SINH_VIEN' ? 'SINH_VIEN' : 'GIANG_VIEN') as TopicTarget;
          this.proposal.faculty = u.unit || 'Khoa Công nghệ thông tin';
          this.proposal.authorName = u.fullName;
          this.proposal.authorEmail = u.email;
          this.proposal.authorIdentifierCode = u.identifierCode;
          this.proposal.authorPhone = u.phone || '0912 345 678';
          this.proposal.authorAcademicTitle = u.academicTitle || 'Giảng viên';

          if (u.role === 'SINH_VIEN') {
            this.proposal.advisorId = 'u-gvhd-01';
            this.proposal.advisorName = 'TS. Nguyễn Văn A';
            this.proposal.advisorTitle = 'Tiến sĩ';
            this.proposal.advisorEmail = 'gvhd@gmail.com';
          }
        }
      }
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
      if (this.rounds.length > 0 && !this.proposal.roundId) {
        this.onRoundChange(this.rounds[0].id);
      }
    });

    this.route.queryParams.subscribe(params => {
      if (params['roundId']) {
        this.pendingRoundId = params['roundId'];
        this.isRoundFixed = true;
        if (this.rounds.length > 0 && this.pendingRoundId) {
          this.onRoundChange(this.pendingRoundId);
        }
      }
      if (params['directTopicId']) {
        this.pendingDirectTopicId = params['directTopicId'];
      }
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.proposalId = params['id'];
        this.isEditMode = true;
        if (this.proposalId) {
          this.loadProposal(this.proposalId);
        }
      }
    });
  }

  loadProposal(id: string) {
    const existing = this.nckhDataService.getProposalById(id);
    if (existing) {
      this.proposal = JSON.parse(JSON.stringify(existing));
      if (this.proposal.roundId) {
        this.onRoundChange(this.proposal.roundId);
      }
      this.syncPhaseByStatus(existing.status);
    }
  }

  syncPhaseByStatus(status: TopicStatus) {
    switch (status) {
      case 'NHAP':
      case 'CHO_KHOA_DUYET':
      case 'CHO_GVHD_DUYET':
      case 'TRA_CHINH_SUA':
      case 'CHO_DUYET_LAI':
        this.activePhaseTab = 1;
        break;
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO':
      case 'DANG_XET_DUYET_HO_SO':
      case 'DAT_XET_DUYET_HO_SO':
      case 'KHONG_DAT_XET_DUYET_HO_SO':
        this.activePhaseTab = 2;
        break;
      case 'CHO_NOP_THUYET_MINH':
        this.activePhaseTab = 3;
        break;
      case 'DANG_XET_DUYET_THUYET_MINH':
        this.activePhaseTab = 4;
        break;
      case 'DANG_THUC_HIEN':
        this.activePhaseTab = 6;
        break;
      case 'CHO_NGHIEM_THU':
      case 'DANG_NGHIEM_THU':
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU':
      case 'DA_NGHIEM_THU':
      case 'HOAN_TAT_BUOC_07':
        this.activePhaseTab = 7;
        break;
      case 'DA_CONG_NHAN_KET_QUA':
        this.activePhaseTab = 8;
        break;
      case 'TRIEN_KHAI_UNG_DUNG':
      case 'LUU_HO_SO':
        this.activePhaseTab = 9;
        break;
      default:
        this.activePhaseTab = 1;
        break;
    }
  }

  getStepState(stepNumber: number): 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' {
    const s = this.proposal.status || 'NHAP';
    
    // Step 1: Đăng ký BM01
    if (stepNumber === 1) {
      if (s === 'NHAP' || s === 'CHO_KHOA_DUYET' || s === 'CHO_GVHD_DUYET' || s === 'TRA_CHINH_SUA' || s === 'CHO_DUYET_LAI') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 2: Phê duyệt sơ bộ BM02 & BM03
    if (stepNumber === 2) {
      if (s === 'NHAP' || s === 'CHO_KHOA_DUYET' || s === 'CHO_GVHD_DUYET' || s === 'TRA_CHINH_SUA' || s === 'CHO_DUYET_LAI') {
        return 'PENDING';
      }
      if (s === 'CHO_HOI_DONG_XET_DUYET_HO_SO' || s === 'DANG_XET_DUYET_HO_SO') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 3: Viết thuyết minh BM04
    if (stepNumber === 3) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO'].includes(s)) {
        return 'PENDING';
      }
      if (s === 'CHO_NOP_THUYET_MINH' || s === 'DAT_XET_DUYET_HO_SO') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 4: Phê duyệt Thuyết minh BM06 & BM07
    if (stepNumber === 4) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO'].includes(s)) {
        return 'PENDING';
      }
      if (s === 'DANG_XET_DUYET_THUYET_MINH') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 5: Ký hợp đồng & QĐ giao việc BM05
    if (stepNumber === 5) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
        return 'PENDING';
      }
      return 'COMPLETED';
    }

    // Step 6: Thực hiện & Báo cáo tiến độ BM08
    if (stepNumber === 6) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
        return 'PENDING';
      }
      if (s === 'DANG_THUC_HIEN') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 7: Nghiệm thu & Chỉnh sửa BM13
    if (stepNumber === 7) {
      if (s === 'CHO_NGHIEM_THU' || s === 'DANG_NGHIEM_THU' || s === 'YEU_CAU_CHINH_SUA_NGHIEM_THU') {
        return 'IN_PROGRESS';
      }
      if (['DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07', 'DA_CONG_NHAN_KET_QUA', 'TRIEN_KHAI_UNG_DUNG', 'LUU_HO_SO'].includes(s)) {
        return 'COMPLETED';
      }
      return 'PENDING';
    }

    // Step 8: QĐ công nhận kết quả BM15
    if (stepNumber === 8) {
      if (s === 'DA_CONG_NHAN_KET_QUA') {
        return 'COMPLETED';
      }
      if (s === 'DA_NGHIEM_THU' || s === 'HOAN_TAT_BUOC_07') {
        return 'IN_PROGRESS';
      }
      if (['TRIEN_KHAI_UNG_DUNG', 'LUU_HO_SO'].includes(s)) {
        return 'COMPLETED';
      }
      return 'PENDING';
    }

    // Step 9: Triển khai & Lưu hồ sơ
    if (stepNumber === 9) {
      if (s === 'TRIEN_KHAI_UNG_DUNG' || s === 'LUU_HO_SO') {
        return 'COMPLETED';
      }
      if (s === 'DA_CONG_NHAN_KET_QUA') {
        return 'IN_PROGRESS';
      }
      return 'PENDING';
    }

    return 'PENDING';
  }

  isStepEditable(stepNumber: number): boolean {
    return this.getStepState(stepNumber) === 'IN_PROGRESS';
  }

  selectPhaseTab(stepId: number) {
    this.activePhaseTab = stepId;
  }

  setStep(step: number) {
    this.currentStep = step;
  }

  onRoundChange(roundId: string) {
    this.proposal.roundId = roundId;
    const r = this.rounds.find(x => x.id === roundId);
    if (r) {
      this.selectedRound = r;
      this.proposal.roundName = r.name;
      this.proposal.target = r.target;
      this.directTopics = r.directTopics || [];
      if (this.pendingDirectTopicId) {
        this.selectDirectTopic(this.pendingDirectTopicId);
      }
    }
  }

  selectDirectTopic(topicId: string) {
    const dt = this.directTopics.find(t => t.id === topicId);
    if (dt) {
      this.proposal.directTopicId = dt.id;
      this.proposal.type = 'GIAO_TRUC_TIEP';
      this.proposal.title = dt.name;
      this.proposal.field = dt.field;
      this.proposal.faculty = dt.assignedFaculty;
      this.proposal.budgetTotal = dt.budgetEst;
      this.proposal.budgetSchoolFunded = dt.budgetEst;
      this.proposal.mainContents = dt.description;
      this.proposal.expectedProducts = dt.expectedOutcome;
    }
  }

  // --- THÊM & XÓA THÀNH VIÊN BM01 ---
  addMember() {
    if (!this.newMember.fullName || !this.newMember.identifierCode) {
      alert('Vui lòng nhập đầy đủ Tên và Mã định danh thành viên.');
      return;
    }
    const memberToAdd: ResearchMember = {
      ...this.newMember,
      id: `mem-${Date.now()}`
    };
    this.proposal.members = [...(this.proposal.members || []), memberToAdd];
    this.newMember = {
      id: '',
      fullName: '',
      identifierCode: '',
      unit: this.proposal.faculty || 'Khoa Công nghệ thông tin',
      roleInProject: 'Thành viên nghiên cứu chính'
    };
  }

  removeMember(index: number) {
    if (this.proposal.members) {
      this.proposal.members.splice(index, 1);
    }
  }

  // --- BM04 KẾ HOẠCH & DỰ TOÁN ---
  addPlanItem() {
    if (!this.newPlanItem.month || !this.newPlanItem.content) {
      alert('Vui lòng nhập mốc thời gian và nội dung kế hoạch.');
      return;
    }
    this.bm04Form.implementationPlan.push({ ...this.newPlanItem });
    this.newPlanItem = { month: '', content: '', outcome: '' };
  }

  removePlanItem(idx: number) {
    this.bm04Form.implementationPlan.splice(idx, 1);
  }

  addBudgetItem() {
    if (!this.newBudgetItem.category || !this.newBudgetItem.amount) {
      alert('Vui lòng nhập danh mục và số tiền dự toán.');
      return;
    }
    this.bm04Form.budgetItems.push({ ...this.newBudgetItem });
    this.newBudgetItem = { category: '', amount: 0 };
  }

  removeBudgetItem(idx: number) {
    this.bm04Form.budgetItems.splice(idx, 1);
  }

  // --- BM13 GIẢI TRÌNH ---
  addExplanationItem() {
    if (!this.newExplanationItem.request || !this.newExplanationItem.response) {
      alert('Vui lòng nhập yêu cầu của HĐ và nội dung giải trình tiếp thu.');
      return;
    }
    this.bm13Form.explanationItems.push({ ...this.newExplanationItem });
    this.newExplanationItem = { request: '', response: '' };
  }

  removeExplanationItem(idx: number) {
    this.bm13Form.explanationItems.splice(idx, 1);
  }

  // --- KÝ SỐ MÔ PHỎNG BM01 ---
  simulateSignPdf() {
    this.isSimulatingSign = true;
    setTimeout(() => {
      const now = new Date();
      const dateStr = now.toLocaleDateString('vi-VN') + ' ' + now.toLocaleTimeString('vi-VN');
      this.proposal.signedPdfFile = {
        fileName: `${this.proposal.target === 'GIANG_VIEN' ? 'BM01A' : 'BM01B'}_DeTai_${(this.proposal.authorName || 'User').replace(/\s+/g, '')}_Signed.pdf`,
        fileSize: '2.1 MB',
        uploadedAt: dateStr,
        signatureStatus: 'DA_KY',
        signedBy: `${this.proposal.authorName} (${this.currentUser.email}) - Chữ ký điện tử xác thực lúc ${dateStr}`
      };
      this.isSimulatingSign = false;
      this.alertType = 'success';
      this.alertMessage = 'Đã ký số điện tử thành công vào biểu mẫu!';
      setTimeout(() => { this.alertMessage = ''; }, 4000);
    }, 1200);
  }

  // --- LƯU NHÁP & NỘP BM01 ---
  saveDraft() {
    if (!this.proposal.title) {
      alert('Vui lòng nhập Tên đề tài nghiên cứu.');
      return;
    }
    this.proposal.status = 'NHAP';
    this.proposal.statusText = 'Đang soạn thảo';
    if (this.isEditMode && this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, { ...this.proposal });
    } else {
      const created = this.nckhDataService.createProposal(this.proposal);
      this.proposalId = created.id;
      this.isEditMode = true;
    }
    this.alertType = 'info';
    this.alertMessage = 'Đã lưu bản nháp hồ sơ đề tài thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitProposal() {
    if (!this.proposal.title || !this.proposal.roundId || !this.proposal.necessity || !this.proposal.objectives) {
      alert('Vui lòng điền đầy đủ các thông tin bắt buộc trước khi nộp hồ sơ.');
      return;
    }
    if (!this.proposal.signedPdfFile || this.proposal.signedPdfFile.signatureStatus !== 'DA_KY') {
      alert('Vui lòng tải lên tệp Phiếu đăng ký đề tài đã ký ở Bước 4 trước khi nộp chính thức.');
      return;
    }

    const nextStatus: TopicStatus = this.proposal.target === 'SINH_VIEN' ? 'CHO_GVHD_DUYET' : 'CHO_KHOA_DUYET';
    this.proposal.status = nextStatus;
    this.proposal.statusText = this.proposal.target === 'SINH_VIEN' ? 'Đang đợi GVHD duyệt (BM01B)' : 'Đang đợi Khoa duyệt (BM01A)';
    
    if (this.isEditMode && this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        ...this.proposal
      });
    } else {
      this.nckhDataService.createProposal(this.proposal);
    }

    this.alertType = 'success';
    this.alertMessage = 'Đã nộp hồ sơ đề tài thành công! Hồ sơ đã được chuyển đến tuyến xét duyệt.';
    setTimeout(() => {
      this.router.navigate(['/nckh/de-tai-cua-toi']);
    }, 1500);
  }

  // --- CÁC HÀM XỬ LÝ BIỂU MẪU TƯƠNG TÁC TỪNG BƯỚC ---

  // BM02
  submitBm02Evaluation() {
    this.bm02Form.isSubmitted = true;
    this.bm02Form.signedDate = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = `Đã lưu & nộp Phiếu đánh giá hồ sơ BM02 thành công (${this.bm02TotalScore}/100 điểm - Kết luận: ${this.bm02Form.conclusion === 'DAT' ? 'ĐẠT' : 'KHÔNG ĐẠT'})!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM03
  signBm03Minutes() {
    this.bm03Form.isSecretarySigned = true;
    this.bm03Form.isPresidentSigned = true;
    this.bm03Form.presidentSignedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Đã ký duyệt Biên bản họp Hội đồng xét duyệt sơ bộ hồ sơ (BM03)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM04
  submitBm04Outline() {
    this.bm04Form.isAuthorSigned = true;
    this.bm04Form.signedAt = new Date().toLocaleString('vi-VN');
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: 'DANG_XET_DUYET_THUYET_MINH',
        statusText: 'Đã nộp Thuyết minh (BM04) - Chờ HĐ Bước 04 thẩm định'
      });
      if (this.proposal) {
        this.proposal.status = 'DANG_XET_DUYET_THUYET_MINH';
        this.proposal.statusText = 'Đã nộp Thuyết minh (BM04) - Chờ HĐ Bước 04 thẩm định';
      }
    }
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Thuyết minh đề cương & Dự toán chi tiết (BM04) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM06
  submitBm06Evaluation() {
    this.bm06Form.isSubmitted = true;
    this.bm06Form.signedDate = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = `Đã nộp Phiếu đánh giá Thuyết minh BM06 thành công (${this.bm06TotalScore}/100 điểm - Kết luận: ${this.bm06Form.conclusion})!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM07
  signBm07Minutes() {
    this.bm07Form.isSecretarySigned = true;
    this.bm07Form.isPresidentSigned = true;
    this.bm07Form.presidentSignedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Đã ký hoàn tất Biên bản họp xét duyệt Thuyết minh đề tài (BM07)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM08
  submitBm08Progress() {
    this.bm08Form.isAuthorSigned = true;
    this.bm08Form.submittedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Chủ nhiệm đã ký số và nộp Báo cáo tiến độ ½ thời gian (BM08)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  deanApproveBm08() {
    this.bm08Form.isDeanApproved = true;
    this.bm08Form.deanApprovedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Trưởng Khoa đã ký xác nhận Báo cáo tiến độ BM08 của đơn vị!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM09
  submitBm09Summary() {
    this.bm09Form.isAuthorSigned = true;
    this.bm09Form.signedAt = new Date().toLocaleString('vi-VN');
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: 'CHO_NGHIEM_THU',
        statusText: 'Đã nộp Báo cáo tổng kết (BM09) - Chờ Hội đồng nghiệm thu'
      });
      if (this.proposal) {
        this.proposal.status = 'CHO_NGHIEM_THU';
        this.proposal.statusText = 'Đã nộp Báo cáo tổng kết (BM09) - Chờ Hội đồng nghiệm thu';
      }
    }
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Báo cáo tổng kết đề tài & Đơn đề nghị nghiệm thu (BM09) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM11
  submitBm11Evaluation() {
    this.bm11Form.isSubmitted = true;
    this.bm11Form.signedDate = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = `Đã nộp Phiếu đánh giá Nghiệm thu BM11 (${this.bm11TotalScore}/100 điểm - Xếp loại: ${this.bm11Form.rank})!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM12
  signBm12Minutes() {
    this.bm12Form.isSecretarySigned = true;
    this.bm12Form.isPresidentSigned = true;
    this.bm12Form.presidentSignedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = 'Đã ký hoàn tất Biên bản họp Hội đồng Nghiệm thu (BM12)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // BM13
  submitBm13Explanation() {
    this.bm13Form.isAuthorSigned = true;
    this.bm13Form.signedAt = new Date().toLocaleString('vi-VN');
    this.bm13Form.isPkhcnApproved = true;
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: 'DA_NGHIEM_THU',
        statusText: 'Đã hoàn tất giải trình BM13 & Đạt nghiệm thu'
      });
      if (this.proposal) {
        this.proposal.status = 'DA_NGHIEM_THU';
        this.proposal.statusText = 'Đã hoàn tất giải trình BM13 & Đạt nghiệm thu';
      }
    }
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Báo cáo giải trình sau nghiệm thu (BM13) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // Thông báo từ P.KHCN
  publishPkhcnNotice(type: 'BM05' | 'BM10' | 'BM14' | 'BM15') {
    this.alertType = 'success';
    if (type === 'BM05') {
      this.alertMessage = 'Phòng KHCN đã phát thông báo Quyết định giao nhiệm vụ & Hợp đồng (BM05)!';
    } else if (type === 'BM10') {
      this.alertMessage = 'Phòng KHCN đã phát thông báo Quyết định thành lập HĐ Nghiệm thu (BM10)!';
    } else if (type === 'BM14') {
      this.alertMessage = 'Phòng KHCN đã phát thông báo Biên bản thanh lý Hợp đồng NCKH (BM14)!';
    } else if (type === 'BM15') {
      this.alertMessage = 'Phòng KHCN đã công bố Quyết định công nhận kết quả đề tài (BM15)!';
      if (this.proposalId) {
        this.nckhDataService.updateProposal(this.proposalId, {
          status: 'DA_CONG_NHAN_KET_QUA',
          statusText: 'Đã công nhận kết quả (BM15)'
        });
        if (this.proposal) {
          this.proposal.status = 'DA_CONG_NHAN_KET_QUA';
          this.proposal.statusText = 'Đã công nhận kết quả (BM15)';
        }
      }
    }
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  updateFinalStatus(status: 'TRIEN_KHAI_UNG_DUNG' | 'LUU_HO_SO') {
    this.finalStatusChoice = status;
    const statusText = status === 'TRIEN_KHAI_UNG_DUNG' ? 'Triển khai ứng dụng' : 'Lưu hồ sơ lưu trữ';
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: status,
        statusText: statusText
      });
      if (this.proposal) {
        this.proposal.status = status;
        this.proposal.statusText = statusText;
      }
    }
    this.alertType = 'success';
    this.alertMessage = `Đã cập nhật trạng thái cuối của đề tài: ${statusText}!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // --- MODAL XEM TRƯỚC VĂN BẢN HÀNH CHÍNH (PREVIEW / PRINT) ---
  openPreviewModal(content: TemplateRef<any>, bmCode: string) {
    this.previewBmCode = bmCode;
    this.modalService.open(content, { size: 'lg', centered: true, scrollable: true });
  }
}
