import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { TopicProposal, TopicStatus, UserProfile, RegistrationRound } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-review-proposals',
  templateUrl: './review-proposals.component.html',
  styleUrls: ['./review-proposals.component.scss'],
  standalone: false
})
export class ReviewProposalsComponent implements OnInit {
  currentUser!: UserProfile;
  proposalsToReview: TopicProposal[] = [];
  rounds: RegistrationRound[] = [];
  selectedProposal?: TopicProposal;
  returnReason = '';
  selectedProposalForReason?: TopicProposal;
  approvalNote = '';

  alertMessage = '';
  alertType = 'success';

  // --- BỘ LỌC TÌM KIẾM ĐA CHIỀU CHO ĐỀ TÀI TOÀN TRƯỜNG & HỘI ĐỒNG ---
  searchTerm: string = '';
  selectedFaculty: string = 'ALL';
  
  // Tờ trình xuất Excel & Gửi P.KHCN của Trưởng Khoa
  deanSubmissionReportNumber: string = '08/TTr-K.CNTT-NCKH';
  currentDateFormatted: string = new Date().toLocaleDateString('vi-VN');
  deanSubmissionNotes: string = 'Kính gửi Phòng Khoa học & Công nghệ: Khoa Công nghệ thông tin đã tổ chức rà soát sơ duyệt, các đề tài trong danh sách đủ điều kiện chuyên môn và tuân thủ đúng Quy chế NCKH Nhà trường. Kính trình Phòng KHCN tổng hợp và thành lập Hội đồng xét duyệt sơ bộ.';
  isDeanSubmittedToPkhcn: boolean = false;
  selectedTarget: string = 'ALL';
  selectedType: string = 'ALL';
  selectedPhase: string = 'ALL';
  selectedRound: string = 'ALL';

  // Phân trang (5 hồ sơ / trang)
  page = 1;
  pageSize = 5;
  readonly Math = Math;

  // --- BIẾN PHỤC VỤ MODAL XEM BIỂU MẪU HÀNH CHÍNH & QUYẾT ĐỊNH ---
  selectedProposalForBm?: TopicProposal;
  previewBmCode: string = 'BM02';


  activeMemberTab = 'summary'; // 'summary' | 'chutich' | 'phanbien1' | 'phanbien2' | 'uyvien' | 'thuky'

  // Dữ liệu đánh giá của toàn bộ thành viên Hội đồng
  councilEvaluationData = {
    councilName: 'Hội đồng Khoa học & Công nghệ Đánh giá Đề tài NCKH',
    decisionNumber: '118/QĐ-ĐHNT-KHCN',
    meetingDate: '25/08/2026',
    meetingLocation: 'Phòng Hội thảo A204 - Tòa nhà Trung tâm DNTU',
    
    summary: {
      attendees: 'Đủ 05/05 thành viên theo Quyết định thành lập Hội đồng số 118/QĐ-ĐHNT-KHCN.',
      votingResult: '05/05 Phiếu ĐỒNG Ý THÔNG QUA (Tỷ lệ: 100%).',
      averageScore: 93.6,
      conclusion: 'Nhất trí thông qua kết quả nghiên cứu của đề tài. Đề nghị Chủ nhiệm phối hợp Phòng KHCN hoàn tất các thủ tục công nhận kết quả.',
      recommendation: 'Khen thưởng Đề tài đạt loại Xuất sắc theo Quy chế Khoa học & Công nghệ Nhà trường.',
      secretarySigned: true,
      secretarySignedAt: '25/08/2026 10:35',
      chairmanSigned: true,
      chairmanSignedAt: '25/08/2026 10:45'
    },
    
    // 1. CHỦ TỊCH HỘI ĐỒNG
    chutich: {
      name: 'PGS.TS. Trần Văn Hùng',
      role: 'Chủ tịch Hội đồng',
      title: 'Phó Giáo sư, Tiến sĩ',
      unit: 'Hội đồng Khoa học & Đào tạo',
      score: 95,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Đề tài có tính cấp thiết cao, phương pháp nghiên cứu tiên tiến, sản phẩm đáp ứng vượt mức kỳ vọng.',
      criteriaScores: [19, 24, 24, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 09:30'
    },

    // 2. PHẢN BIỆN 1
    phanbien1: {
      name: 'TS. Lê Hoàng Nam',
      role: 'Ủy viên Phản biện 1',
      title: 'Tiến sĩ Khoa học Máy tính',
      unit: 'Khoa Công nghệ thông tin',
      score: 93,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Nội dung và thuật toán được thiết kế chặt chẽ. Đã thử nghiệm thực nghiệm có độ tin cậy cao.',
      criteriaScores: [18, 23, 24, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 09:45'
    },

    // 3. PHẢN BIỆN 2
    phanbien2: {
      name: 'TS. Vũ Minh Tuấn',
      role: 'Ủy viên Phản biện 2',
      title: 'Tiến sĩ Kỹ thuật Phần mềm',
      unit: 'ĐH Bách Khoa (Chuyên gia thỉnh giảng)',
      score: 92,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Sản phẩm phần mềm và mô hình AI hoạt động trơn tru. Đề nghị nhóm tiếp tục phát triển bài báo quốc tế.',
      criteriaScores: [18, 23, 23, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 10:00'
    },

    // 4. ỦY VIÊN HỘI ĐỒNG
    uyvien: {
      name: 'TS. Nguyễn Văn Bình',
      role: 'Ủy viên Hội đồng',
      title: 'Tiến sĩ Kỹ thuật',
      unit: 'Khoa Cơ khí - Động lực',
      score: 94,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Dự toán kinh phí hợp lý, hồ sơ đầy đủ minh chứng thực nghiệm.',
      criteriaScores: [19, 24, 23, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 10:15'
    },

    // 5. THƯ KÝ HỘI ĐỒNG
    thuky: {
      name: 'ThS. Đỗ Anh Khoa',
      role: 'Thư ký Hội đồng',
      title: 'Thạc sĩ Khoa học',
      unit: 'Khoa Công nghệ thông tin',
      score: 94,
      result: 'ĐẠT (XUẤT SẮC)',
      comment: 'Tổng hợp 5/5 phiếu đánh giá hợp lệ. 100% thành viên Hội đồng nhất trí thông qua nghiệm thu.',
      criteriaScores: [19, 23, 24, 14, 14],
      isSigned: true,
      signedAt: '25/08/2026 10:30'
    }
  };


  // --- PHÂN QUYỀN TRÊN PHIẾU ĐÁNH GIÁ HỘI ĐỒNG ---

  get isDean(): boolean {
    return !!this.currentUser && this.currentUser.role === 'TRUONG_KHOA';
  }

  get isDeanOrAdmin(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'TRUONG_KHOA' || this.currentUser.role === 'ADMIN');
  }

  get isFacultyRole(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'TRUONG_KHOA' || this.currentUser.role === 'GIANG_VIEN_HD');
  }

  get isChairman(): boolean {
    return !!this.currentUser && this.currentUser.role === 'CHU_TICH_HD';
  }

  get isSecretary(): boolean {
    return !!this.currentUser && this.currentUser.role === 'THU_KY_HD';
  }

  get isMember(): boolean {
    return !!this.currentUser && this.currentUser.role === 'HOI_DONG_MEMBER';
  }

  get canEditSummaryFields(): boolean {
    return this.isSecretary || this.isPkhcnOrAdmin;
  }

  get canSignAsSecretary(): boolean {
    return this.isSecretary || this.isPkhcnOrAdmin;
  }

  get canSignAsChairman(): boolean {
    return this.isChairman || this.isPkhcnOrAdmin;
  }

  canEditPersonalTab(tabKey: string): boolean {
    // Nếu Thư ký đã tạo Phiếu tổng hợp / Biên bản -> Khóa toàn bộ các bên
    if (this.selectedProposalForBm?.hasConsolidatedMinutes) return false;
    if (this.isPkhcnOrAdmin) return true;
    if (this.isChairman && tabKey === 'chutich') return true;
    if (this.isSecretary && tabKey === 'thuky') return true;
    if (this.isMember && (tabKey === 'phanbien1' || tabKey === 'phanbien2' || tabKey === 'uyvien')) return true;
    return false;
  }

  updateTotalScore(memberKey: 'chutich' | 'phanbien1' | 'phanbien2' | 'uyvien' | 'thuky') {
    const member = this.councilEvaluationData[memberKey];
    const total = member.criteriaScores.reduce((sum: number, val: number) => sum + (Number(val) || 0), 0);
    member.score = total;
    member.result = total >= 90 ? 'ĐẠT (XUẤT SẮC)' : (total >= 70 ? 'ĐẠT' : 'KHÔNG ĐẠT');
    
    const d = this.councilEvaluationData;
    const avg = (d.chutich.score + d.phanbien1.score + d.phanbien2.score + d.uyvien.score + d.thuky.score) / 5;
    d.summary.averageScore = Math.round(avg * 10) / 10;
  }

  signSecretary() {
    this.councilEvaluationData.summary.secretarySigned = true;
    this.councilEvaluationData.summary.secretarySignedAt = new Date().toLocaleString('vi-VN');
    if (this.selectedProposalForBm) {
      this.selectedProposalForBm.hasConsolidatedMinutes = true;
      this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
        hasConsolidatedMinutes: true
      });
    }
    this.alertType = 'success';
    this.alertMessage = 'Thư ký Hội đồng đã ký số và chốt Phiếu tổng hợp Hội đồng! Toàn bộ phiếu đánh giá cá nhân đã được khóa cố định theo quy định.';
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }

  signChairman() {
    this.councilEvaluationData.summary.chairmanSigned = true;
    this.councilEvaluationData.summary.chairmanSignedAt = new Date().toLocaleString('vi-VN');
    if (this.selectedProposalForBm) {
      this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
        hasConsolidatedMinutes: true,
        councilResult: this.councilEvaluationData.summary.averageScore >= 80 ? 'PASS' : (this.councilEvaluationData.summary.averageScore >= 65 ? 'PASS_WITH_REVISION' : 'FAIL'),
        councilScoreAverage: this.councilEvaluationData.summary.averageScore
      });
    }
    this.alertType = 'success';
    this.alertMessage = 'Chủ tịch Hội đồng đã ký số phê duyệt kết quả đánh giá thành công! Dữ liệu đã tự động đồng bộ sang Thư ký và toàn bộ Hội đồng.';
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }

  signPersonalSheet(memberKey: 'chutich' | 'phanbien1' | 'phanbien2' | 'uyvien' | 'thuky') {
    const m = this.councilEvaluationData[memberKey];
    m.isSigned = true;
    m.signedAt = new Date().toLocaleString('vi-VN');
    this.alertType = 'success';
    this.alertMessage = `${m.name} (${m.role}) đã ký số xác thực phiếu đánh giá cá nhân thành công!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  openCouncilEvaluationModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForBm = prop;
    this.activeMemberTab = 'summary';
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  openCouncilEvaluationModalFromBm(content: TemplateRef<any>) {
    this.modalService.dismissAll();
    this.activeMemberTab = 'summary';
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  saveEvaluation() { this.saveCouncilEvaluation(); }
  saveCouncilEvaluation() {
    this.alertType = 'success';
    this.alertMessage = 'Đã lưu và cập nhật Phiếu đánh giá của Hội đồng Khoa học thành công!';
    this.modalService.dismissAll();
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }

  // --- BIẾN PHỤC VỤ HỦY ĐỀ TÀI CHO P.KHCN ---
  selectedProposalForCancel?: TopicProposal;
  cancelDecisionNumber: string = 'QĐ-HUY-2026-025';
  cancelPkhcnNotes: string = '';
  cancelReasonType: 'KHACH_QUAN' | 'CHU_QUAN' = 'CHU_QUAN';
  requestAdminBlacklist: boolean = true;

  // Mock dữ liệu biểu mẫu chuẩn
  mockBm02 = {
    councilMemberName: 'PGS.TS. Trần Văn Hùng',
    councilRole: 'Chủ tịch Hội đồng',
    evaluationDate: '25/08/2026',
    criteria: [
      { no: 1, name: 'Tính cấp thiết và ý nghĩa khoa học / thực tiễn của đề tài', maxScore: 20, score: 19, comment: 'Đề tài giải quyết bài toán cấp bách về chuyển đổi số và ứng dụng AI.' },
      { no: 2, name: 'Mục tiêu nghiên cứu rõ ràng, nội dung và sản phẩm dự kiến cụ thể', maxScore: 25, score: 24, comment: 'Mục tiêu khả thi, sản phẩm đầu ra có bài báo quốc tế và phần mềm demo.' },
      { no: 3, name: 'Phương pháp tiếp cận và kỹ thuật nghiên cứu phù hợp', maxScore: 25, score: 23, comment: 'Sử dụng các mô hình học sâu tiên tiến nhất hiện nay.' },
      { no: 4, name: 'Năng lực chuyên môn của Chủ nhiệm và nhóm nghiên cứu', maxScore: 15, score: 15, comment: 'Nhóm có kinh nghiệm công bố khoa học tốt.' },
      { no: 5, name: 'Tính hợp lý của dự toán kinh phí và thời gian thực hiện', maxScore: 15, score: 14, comment: 'Dự toán phù hợp với quy chế tài chính NCKH của Nhà trường.' }
    ],
    totalScore: 95,
    conclusion: 'ĐỒNG Ý THÔNG QUA HỒ SƠ ĐĂNG KÝ (ĐẠT)',
    recommendation: 'Đề nghị Nhà trường phê duyệt cho Chủ nhiệm triển khai viết Thuyết minh đề cương BM04 chi tiết.'
  };

  mockBm06 = {
    councilMemberName: 'TS. Lê Hoàng Nam',
    councilRole: 'Ủy viên Phản biện 1',
    evaluationDate: '26/08/2026',
    criteria: [
      { no: 1, name: 'Tổng quan tình hình nghiên cứu trong và ngoài nước', maxScore: 15, score: 14, comment: 'Tổng quan đầy đủ, cập nhật các tài liệu nghiên cứu mới nhất.' },
      { no: 2, name: 'Tính mới, tính sáng tạo và giá trị khoa học của thuyết minh', maxScore: 15, score: 14, comment: 'Đề xuất hướng tiếp cận có tính sáng tạo cao.' },
      { no: 3, name: 'Nội dung nghiên cứu chi tiết và kế hoạch triển khai từng tháng', maxScore: 30, score: 28, comment: 'Kế hoạch phân bổ theo từng quý rất logic và khả thi.' },
      { no: 4, name: 'Chỉ tiêu chất lượng sản phẩm & Địa chỉ ứng dụng thực tiễn', maxScore: 25, score: 24, comment: 'Cam kết 01 bài báo SCIE và quy trình công nghệ hoàn chỉnh.' },
      { no: 5, name: 'Dự toán kinh phí chi tiết theo từng hạng mục quy định', maxScore: 15, score: 13, comment: 'Các khoản chi thù lao và vật tư hợp lý theo định mức.' }
    ],
    totalScore: 93,
    conclusion: 'THÔNG QUA THUYẾT MINH (ĐẠT LOẠI XUẤT SẮC)',
    recommendation: 'Chủ nhiệm hoàn thiện bản ký hợp đồng pháp lý BM05 để triển khai thực hiện.'
  };

  mockBm11 = {
    councilMemberName: 'PGS.TS. Trần Văn Hùng',
    councilRole: 'Chủ tịch Hội đồng Nghiệm thu',
    evaluationDate: '28/08/2026',
    criteria: [
      { no: 1, name: 'Mức độ hoàn thành khối lượng công việc và nội dung nghiên cứu', maxScore: 30, score: 29, comment: 'Hoàn thành 100% các nội dung đã đăng ký trong thuyết minh BM04.' },
      { no: 2, name: 'Chất lượng báo cáo tổng kết và tính khoa học của kết quả', maxScore: 25, score: 24, comment: 'Báo cáo tổng kết 95 trang trình bày bài bản, số liệu thực nghiệm tin cậy.' },
      { no: 3, name: 'Sản phẩm công bố khoa học & Sản phẩm ứng dụng thực tế', maxScore: 30, score: 29, comment: 'Đạt 01 bài báo quốc tế SCIE Q2 và 01 phần mềm Web demo hoạt động ổn định.' },
      { no: 4, name: 'Hiệu quả kinh tế - xã hội, ứng dụng thực tiễn và chuyển giao', maxScore: 15, score: 14, comment: 'Đã thử nghiệm thực tế với kết quả đo đạc chính xác cao.' }
    ],
    totalScore: 96,
    conclusion: 'NGHIỆM THU ĐẠT LOẠI XUẤT SẮC (96/100 ĐIỂM)',
    recommendation: 'Đề nghị Hiệu trưởng ban hành Quyết định công nhận kết quả BM15 và làm thủ tục thanh lý hợp đồng BM14.'
  };

  mockBm04 = {
    overviewDomestic: 'Các nghiên cứu trong nước về trí tuệ nhân tạo và xử lý dữ liệu y tế chủ yếu sử dụng CNN truyền thống với độ chính xác trung bình 85-88%.',
    overviewAbroad: 'Xu hướng quốc tế ứng dụng Vision Transformer kết hợp dữ liệu đa trung tâm giúp đạt độ chính xác trên 94%.',
    researchMethodsDetail: 'Transfer Learning trên mô hình ViT tiền huấn luyện, hàm mất mát Focal Loss và tối ưu hóa TensorRT.',
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
    ]
  };

  mockBm08 = {
    progressPercent: 65,
    completedContents: 'Đã hoàn thành thu thập dữ liệu 5.000 ảnh y tế và huấn luyện mô hình Vision Transformer cơ bản đạt độ chính xác thử nghiệm 89.5%.',
    intermediateProducts: '01 Bộ dữ liệu ảnh y tế chuẩn hóa; 01 Bản thảo bài báo khoa học đã nộp cho Tạp chí chuyên ngành.',
    budgetExpended: 22000000,
    difficultiesAndRequests: 'Cần thêm thời gian tối ưu hóa tốc độ suy luận mô hình trên phần cứng nhúng.',
    planNextPhase: 'Hoàn thiện module Web demo, đóng gói Docker API và tiến hành viết báo cáo tổng kết nghiệm thu.',
    submittedAt: '15/03/2027 10:20',
    deanApprovedAt: '16/03/2027 14:00'
  };

  mockBm09 = {
    summaryContent: 'Đề tài đã hoàn thành xuất sắc các nội dung nghiên cứu theo thuyết minh BM04. Mô hình AI đạt độ chính xác 93.8% trên tập kiểm thử độc lập.',
    productComparisons: [
      { productType: 'Bài báo khoa học', planned: '01 bài báo tạp chí chuyên ngành', actual: '01 bài báo đăng trên Tạp chí Khoa học & Công nghệ', status: 'ĐẠT VƯỢT MỨC' },
      { productType: 'Phần mềm Web Demo', planned: '01 Web demo phân loại ảnh', actual: '01 Hệ thống phần mềm Web hoàn chỉnh đóng gói Docker', status: 'ĐẠT' },
      { productType: 'Báo cáo tổng kết', planned: '01 quyển báo cáo khoa học', actual: '01 quyển báo cáo tổng kết 92 trang kèm phụ lục mã nguồn', status: 'ĐẠT' }
    ],
    selfAssessment: 'Đạt loại Xuất sắc'
  };

  mockBm13 = {
    explanationItems: [
      { 
        request: 'Bổ sung tài liệu hướng dẫn cài đặt phần mềm demo vào phụ lục', 
        response: 'Đã bổ sung Phụ lục 3: Tài liệu hướng dẫn cài đặt và cấu hình Docker container chi tiết từng bước.' 
      },
      { 
        request: 'Làm rõ hơn phần kết luận và hướng mở rộng nghiên cứu đa trung tâm', 
        response: 'Đã cập nhật mục 5.2 tại trang 82-84 nêu rõ giải pháp mở rộng tập dữ liệu đa trung tâm.' 
      }
    ]
  };

  mockBm15 = {
    decisionNumber: '350/QĐ-DNTU-KHCN',
    decisionDate: '18/08/2027',
    signer: 'Hiệu trưởng Trường Đại học Công nghệ Đồng Nai',
    rank: 'Xuất sắc (92/100 điểm)',
    rewardNotice: 'Khen thưởng Chủ nhiệm và Nhóm nghiên cứu theo Quy chế KHCN hiện hành',
    certificateNumber: 'GCN-NCKH-2027-028'
  };

  constructor(
    public nckhDataService: NckhDataService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
        if (this.currentUser.role === 'TRUONG_KHOA') {
          this.selectedFaculty = this.currentUser.unit || 'Khoa Công nghệ thông tin';
        }
        this.loadProposals();
      }
    });

    this.nckhDataService.proposals$.subscribe(() => {
      this.loadProposals();
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
    });
  }


  get isStudentOrLecturer(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'GIANG_VIEN' || this.currentUser.role === 'SINH_VIEN');
  }

  get isPkhcnOrAdmin(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'P_KHCN' || this.currentUser.role === 'ADMIN');
  }


  // --- CHỨC NĂNG XUẤT EXCEL & TRÌNH P.KHCN CỦA TRƯỞNG KHOA ---
  openDeanExportModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  get facultyProposalsForReport(): TopicProposal[] {
    const fac = this.currentUser?.unit || 'Khoa Công nghệ thông tin';
    return this.nckhDataService.getProposals().filter(p => p.faculty === fac && p.status !== 'DA_HUY');
  }

  get facultyTotalBudget(): number {
    return this.facultyProposalsForReport.reduce((sum, p) => sum + (p.budgetTotal || 0), 0);
  }


  // --- XUẤT FILE EXCEL DANH SÁCH ĐỀ TÀI THEO BỘ LỌC HIỆN TẠI ---
  exportFilteredToExcel() {
    const list = this.filteredProposals;
    if (!list || list.length === 0) {
      this.alertType = 'warning';
      this.alertMessage = 'Không có đề tài nào phù hợp với bộ lọc hiện tại để xuất Excel!';
      setTimeout(() => { this.alertMessage = ''; }, 4000);
      return;
    }

    const facName = this.isDean ? (this.currentUser?.unit || 'Khoa') : (this.selectedFaculty !== 'ALL' ? this.selectedFaculty : 'Toan_Truong');
    let csvContent = '\uFEFF'; // UTF-8 BOM cho Excel tiếng Việt
    csvContent += `TRƯỜNG ĐẠI HỌC CÔNG NGHỆ ĐỒNG NAI\n`;
    csvContent += `DANH SÁCH ĐỀ TÀI NCKH (XUẤT THEO BỘ LỌC TÌM KIẾM)\n`;
    csvContent += `Đơn vị: ${facName} - Ngày xuất: ${new Date().toLocaleDateString('vi-VN')} ${new Date().toLocaleTimeString('vi-VN')}\n`;
    csvContent += `Tổng số: ${list.length} đề tài - Tổng kinh phí: ${list.reduce((sum, p) => sum + (p.budgetTotal || 0), 0)} VNĐ\n\n`;
    csvContent += `STT,Mã Đề Tài,Tên Đề Tài NCKH,Chủ Nhiệm,Mã GV/SV,Khoa / Đơn Vị,Đối Tượng,Hình Thức,Kinh Phí (VNĐ),Giai Đoạn Quy Trình,Trạng Thái Ký Số\n`;

    list.forEach((p, idx) => {
      const titleEscaped = `"${(p.title || '').replace(/"/g, '""')}"`;
      const authorEscaped = `"${(p.authorName || '').replace(/"/g, '""')}"`;
      const codeEscaped = `"${p.code || ''}"`;
      const authorId = `"${p.authorIdentifierCode || ''}"`;
      const facultyEscaped = `"${(p.faculty || '').replace(/"/g, '""')}"`;
      const targetText = p.target === 'SINH_VIEN' ? 'Sinh viên' : 'Giảng viên';
      const typeText = p.type === 'TUYEN_CHON' ? 'Tuyển chọn' : 'Giao trực tiếp';
      const statusEscaped = `"${(p.statusText || '').replace(/"/g, '""')}"`;
      const signText = p.signedPdfFile?.signatureStatus === 'DA_KY' ? 'Đã ký số' : 'Chưa ký';
      csvContent += `${idx + 1},${codeEscaped},${titleEscaped},${authorEscaped},${authorId},${facultyEscaped},${targetText},${typeText},${p.budgetTotal || 0},${statusEscaped},${signText}\n`;
    });

    const totalBudget = list.reduce((sum, p) => sum + (p.budgetTotal || 0), 0);
    csvContent += `\n,,,,,,,,TỔNG CỘNG:,${totalBudget} VNĐ,\n\n`;
    if (this.isDean) {
      csvContent += `,,,,,,,TRƯỞNG KHOA XÁC NHẬN\n`;
      csvContent += `,,,,,,,${this.currentUser?.fullName || 'TS. Lê Hoàng Nam'}\n`;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    const fileNameClean = `Danh_sach_de_tai_NCKH_${facName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    link.setAttribute('download', fileNameClean);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.alertType = 'success';
    this.alertMessage = `Đã xuất thành công file Excel cho ${list.length} đề tài theo bộ lọc!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  downloadFacultyExcel() {
    const list = this.facultyProposalsForReport;
    const facName = this.currentUser?.unit || 'Khoa Công nghệ thông tin';
    
    // Tạo nội dung CSV định dạng UTF-8
    let csvContent = '\uFEFF'; // UTF-8 BOM
    csvContent += `TRƯỜNG ĐẠI HỌC CÔNG NGHỆ ĐỒNG NAI\n`;
    csvContent += `DANH SÁCH TỔNG HỢP ĐỀ TÀI NCKH - ${facName.toUpperCase()}\n`;
    csvContent += `Tờ trình số: ${this.deanSubmissionReportNumber} - Ngày lập: ${new Date().toLocaleDateString('vi-VN')}\n\n`;
    csvContent += `STT,Mã Đề Tài,Tên Đề Tài NCKH,Chủ Nhiệm,Đối Tượng,Kinh Phí (VNĐ),Giai Đoạn Quy Trình,Đánh Giá Của Khoa\n`;

    list.forEach((p, idx) => {
      const titleEscaped = `"${p.title.replace(/"/g, '""')}"`;
      const authorEscaped = `"${p.authorName} (${p.authorIdentifierCode})"`;
      const targetText = p.target === 'SINH_VIEN' ? 'Sinh viên' : 'Giảng viên';
      const statusEscaped = `"${p.statusText}"`;
      csvContent += `${idx + 1},${p.code},${titleEscaped},${authorEscaped},${targetText},${p.budgetTotal},${statusEscaped},Đạt yêu cầu\n`;
    });

    csvContent += `\n,,,TỔNG CỘNG KINH PHÍ:,${this.facultyTotalBudget} VNĐ,,\n\n`;
    csvContent += `,,,TRƯỞNG KHOA XÁC NHẬN\n`;
    csvContent += `,,,${this.currentUser?.fullName || 'TS. Lê Hoàng Nam'}\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Danh_sach_de_tai_NCKH_${facName.replace(/\s+/g, '_')}_2026.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.alertType = 'success';
    this.alertMessage = 'Đã xuất file Excel danh sách đề tài của Khoa thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  confirmSubmitToPkhcn() {
    const list = this.facultyProposalsForReport;
    const facName = this.currentUser?.unit || 'Khoa Công nghệ thông tin';

    list.forEach(p => {
      if (p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_DUYET_LAI') {
        this.nckhDataService.updateProposal(p.id, {
          status: 'CHO_HOI_DONG_XET_DUYET_HO_SO',
          statusText: 'Khoa đã duyệt - Chờ Hội đồng xét duyệt sơ bộ (Bước 02)',
          auditLogs: [
            ...(p.auditLogs || []),
            {
              id: `log-dean-submit-${Date.now()}`,
              action: `Trưởng Khoa xuất danh sách Excel và chính thức gửi Tờ trình số ${this.deanSubmissionReportNumber} lên Phòng KHCN`,
              actorName: this.currentUser?.fullName || 'Trưởng Khoa',
              actorRole: 'Trưởng Khoa',
              timestamp: new Date().toLocaleString('vi-VN'),
              comment: this.deanSubmissionNotes
            }
          ]
        });
      }
    });

    this.isDeanSubmittedToPkhcn = true;
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Trưởng Khoa đã xuất file Excel và gửi thành công Tờ trình tổng hợp danh sách ${list.length} đề tài của Khoa lên Phòng Khoa học & Công nghệ!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }


  currentEvaluationBmCode: string = 'BM02';

  // --- BỘ NHỚ LƯU VỊ TRÍ CUỘN KHI ĐỌC BIỂU MẪU DÀI (NHƯ THUYẾT MINH BM04) ---
  scrollPositions: { [proposalId: string]: number } = {};

  onPdfModalScroll(event: any, propId?: string) {
    if (propId && event?.target) {
      this.scrollPositions[propId] = event.target.scrollTop;
    }
  }

  // --- BIẾN PHỤC VỤ CẢNH BÁO & NHẮC NHỞ CHO THƯ KÝ HỘI ĐỒNG ---
  selectedMissingMemberInfo = {
    memberName: 'TS. Vũ Minh Tuấn',
    memberRole: 'Ủy viên Phản biện 2',
    councilName: 'Hội đồng Phê duyệt Thuyết minh Đề tài NCKH Năm 2026',
    proposalCode: '',
    proposalTitle: ''
  };

  handleSecretaryOpenSummaryModal(
    confirmModalRef: TemplateRef<any>, 
    missingModalRef: TemplateRef<any>, 
    evalModalRef: TemplateRef<any>, 
    prop: TopicProposal, 
    bmCode: string
  ) {
    this.selectedProposalForBm = prop;
    this.currentEvaluationBmCode = bmCode;

    // 1. Kiểm tra nếu đề tài còn thiếu thành viên chưa làm phiếu đánh giá cá nhân
    if ((prop as any).hasMissingEvaluation || prop.code === 'DT-GV-2026-015') {
      this.selectedMissingMemberInfo = {
        memberName: (prop as any).missingMemberName || 'TS. Vũ Minh Tuấn',
        memberRole: (prop as any).missingMemberRole || 'Ủy viên Phản biện 2',
        councilName: (prop as any).councilName || 'Hội đồng Phê duyệt Thuyết minh Đề tài NCKH Năm 2026',
        proposalCode: prop.code,
        proposalTitle: prop.title
      };
      this.modalService.open(missingModalRef, { size: 'md', centered: true });
      return;
    }

    // 2. Nếu đã đủ thành viên nhưng chưa khóa -> Mở popup cảnh báo trước khi chốt biên bản
    if (!prop.hasConsolidatedMinutes) {
      this.modalService.open(confirmModalRef, { size: 'md', centered: true });
    } else {
      // Đã khóa -> Mở thẳng modal xem kết quả tổng hợp
      this.activeMemberTab = 'summary';
      this.modalService.open(evalModalRef, { size: 'xl', centered: true, scrollable: true });
    }
  }

  sendReminderToMember() {
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã gửi thông báo nhắc nhở khẩn cấp đến ${this.selectedMissingMemberInfo.memberName} (${this.selectedMissingMemberInfo.memberRole}) yêu cầu hoàn thành phiếu đánh giá cá nhân cho đề tài ${this.selectedMissingMemberInfo.proposalCode}!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  confirmSecretaryOpenAndLock(evalModalRef: TemplateRef<any>) {
    this.modalService.dismissAll();
    if (this.selectedProposalForBm) {
      this.selectedProposalForBm.hasConsolidatedMinutes = true;
      this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
        hasConsolidatedMinutes: true
      });
    }
    this.activeMemberTab = 'summary';
    this.modalService.open(evalModalRef, { size: 'xl', centered: true, scrollable: true });
    this.alertType = 'warning';
    this.alertMessage = 'Đã mở Phiếu tổng hợp Hội đồng và KHÓA CỐ ĐỊNH toàn bộ phiếu đánh giá cá nhân của các thành viên khác!';
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }


  // --- DANH SÁCH ĐỀ TÀI PHÂN CÔNG THEO 3 LOẠI HỘI ĐỒNG THẨM ĐỊNH ---
  // 1. Hội đồng Phê duyệt sơ bộ (Bước 02: BM02/03)
  get councilProposalsPreliminary(): TopicProposal[] {
    const preliminaryStatuses = ['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO'];
    return this.filteredProposals.filter(p => preliminaryStatuses.includes(p.status) || p.status === 'CHO_DUYET_LAI');
  }

  // 2. Hội đồng Phê duyệt thuyết minh (Bước 04: BM06/07)
  get councilProposalsOutline(): TopicProposal[] {
    const outlineStatuses = ['CHO_NOP_THUYET_MINH', 'DANG_XET_DUYET_THUYET_MINH'];
    return this.filteredProposals.filter(p => outlineStatuses.includes(p.status));
  }

  // 3. Hội đồng Nghiệm thu (Bước 07: BM11/12)
  get councilProposalsAcceptance(): TopicProposal[] {
    const acceptanceStatuses = ['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'YEU_CAU_CHINH_SUA_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'];
    return this.filteredProposals.filter(p => acceptanceStatuses.includes(p.status));
  }

selectedCouncilResultFilter: string = 'ALL';

  // --- DANH SÁCH ĐỀ TÀI HỘI ĐỒNG ĐÃ ĐÁNH GIÁ (PASS / FAIL) ---
  get councilEvaluatedProposals(): TopicProposal[] {
    return this.filteredProposals.filter(p => !!p.councilResult || p.hasConsolidatedMinutes);
  }

  get countPassEvaluated(): number {
    return this.councilEvaluatedProposals.filter(p => p.councilResult === 'PASS').length;
  }

  get countPassWithRevisionEvaluated(): number {
    return this.councilEvaluatedProposals.filter(p => p.councilResult === 'PASS_WITH_REVISION').length;
  }

  get countFailEvaluated(): number {
    return this.councilEvaluatedProposals.filter(p => p.councilResult === 'FAIL').length;
  }

openCouncilSummaryTab(confirmModalRef?: TemplateRef<any>, missingModalRef?: TemplateRef<any>) {
    if (!this.selectedProposalForBm) return;
    
    // Nếu là Thư ký -> Kiểm tra điều kiện đủ thành viên và cảnh báo khóa
    if (this.isSecretary) {
      if ((this.selectedProposalForBm as any).hasMissingEvaluation || this.selectedProposalForBm.code === 'DT-GV-2026-015') {
        this.selectedMissingMemberInfo = {
          memberName: (this.selectedProposalForBm as any).missingMemberName || 'TS. Vũ Minh Tuấn',
          memberRole: (this.selectedProposalForBm as any).missingMemberRole || 'Ủy viên Phản biện 2',
          councilName: (this.selectedProposalForBm as any).councilName || 'Hội đồng Phê duyệt Thuyết minh Đề tài NCKH Năm 2026',
          proposalCode: this.selectedProposalForBm.code,
          proposalTitle: this.selectedProposalForBm.title
        };
        if (missingModalRef) {
          this.modalService.open(missingModalRef, { size: 'md', centered: true });
        }
        return;
      }

      if (!this.selectedProposalForBm.hasConsolidatedMinutes && confirmModalRef) {
        this.modalService.open(confirmModalRef, { size: 'md', centered: true });
        return;
      }
    }

    // Với Chủ tịch, Thành viên, hoặc Thư ký khi đã khóa -> Chuyển thẳng sang tab summary
    this.activeMemberTab = 'summary';
  }

openPersonalEvaluationModalFromBm(content: TemplateRef<any>) {
    if (!this.selectedProposalForBm) return;
    this.modalService.dismissAll();
    const docCode = this.previewBmCode || '';
    let evalCode = 'BM02';
    if (docCode.includes('BM04')) evalCode = 'BM06';
    else if (docCode.includes('BM09') || docCode.includes('BM10') || docCode.includes('BM13')) evalCode = 'BM11';

    this.openPersonalEvaluationModal(content, this.selectedProposalForBm, evalCode, this.selectedProposalForBm.hasConsolidatedMinutes);
  }

  openPersonalEvaluationModal(content: TemplateRef<any>, prop: TopicProposal, bmCode: string, isReadOnly: boolean = false) {
    this.selectedProposalForBm = prop;
    this.currentEvaluationBmCode = bmCode;

    // Tự động kích hoạt tab cá nhân phù hợp với role của user đang đăng nhập
    if (this.currentUser.role === 'CHU_TICH_HD') {
      this.activeMemberTab = 'chutich';
    } else if (this.currentUser.role === 'THU_KY_HD') {
      this.activeMemberTab = 'thuky';
    } else if (this.currentUser.role === 'HOI_DONG_MEMBER') {
      this.activeMemberTab = 'uyvien';
    } else {
      this.activeMemberTab = 'summary';
    }

    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }


  get isCouncilRole(): boolean {
    return !!this.currentUser && (
      this.currentUser.role === 'CHU_TICH_HD' || 
      this.currentUser.role === 'HOI_DONG_MEMBER' || 
      this.currentUser.role === 'THU_KY_HD'
    );
  }

  get isAllSchoolRoute(): boolean {
    return this.router.url.includes('danh-sach-toan-truong');
  }

  get isFacultyRoute(): boolean {
    return this.router.url.includes('de-tai-don-vi');
  }

  get pageHeading(): string {
    if (this.isAllSchoolRoute) return 'Danh mục Đề tài Toàn trường';
    if (this.isFacultyRoute || this.currentUser?.role === 'TRUONG_KHOA') return 'Danh sách đề tài khoa';
    if (this.isCouncilRole) return 'Hội đồng thẩm định đề tài';
    return 'Xét duyệt Hồ sơ Đăng ký Đề tài (Bước 01)';
  }

  get pageSubheading(): string {
    if (this.isAllSchoolRoute) return 'Theo dõi, tra cứu và quản lý toàn bộ các hồ sơ đề tài NCKH trong toàn trường.';
    if (this.isFacultyRoute) return 'Tổng hợp các hồ sơ đề tài thuộc thẩm quyền quản lý của đơn vị.';
    if (this.isCouncilRole) return 'Danh sách các đề tài NCKH được phân công cho Hội đồng Khoa học thẩm định và đánh giá chuyên môn (Sơ duyệt, Thuyết minh, Nghiệm thu).';
    return 'Xét duyệt hồ sơ đăng ký đề tài tuyến đầu từ Giảng viên / Sinh viên.';
  }

  loadProposals() {
    if (this.isAllSchoolRoute) {
      const all = this.nckhDataService.getProposals();
      this.proposalsToReview = this.isPkhcnOrAdmin ? all : all.filter(p => p.status !== 'DA_HUY' && p.status !== 'YEU_CAU_HUY');
    } else if (this.isFacultyRoute || this.currentUser.role === 'TRUONG_KHOA') {
      this.proposalsToReview = this.nckhDataService.getProposalsForFaculty();
    } else if (this.currentUser.role === 'GIANG_VIEN_HD') {
      this.proposalsToReview = this.nckhDataService.getProposalsForAdvisor();
    } else if (this.isCouncilRole) {
      const councilStatuses = [
        'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO', 
        'DANG_XET_DUYET_THUYET_MINH', 'CHO_NOP_THUYET_MINH', 'CHO_NGHIEM_THU', 
        'DANG_NGHIEM_THU', 'YEU_CAU_CHINH_SUA_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'
      ];
      const matched = this.nckhDataService.getProposals().filter(p => councilStatuses.includes(p.status));
      this.proposalsToReview = matched.length > 0 ? matched : this.nckhDataService.getProposals().filter(p => p.status !== 'DA_HUY' && p.status !== 'YEU_CAU_HUY');
    } else {
      // P.KHCN hoặc Admin
      this.proposalsToReview = this.nckhDataService.getProposals();
    }
  }

  get facultiesList(): string[] {
    const list = new Set<string>();
    this.nckhDataService.getProposals().forEach(p => {
      if (p.faculty) list.add(p.faculty);
    });
    list.add('Khoa Công nghệ thông tin');
    list.add('Khoa Cơ khí - Động lực');
    list.add('Khoa Điện - Điện tử');
    list.add('Khoa Quản trị - Kinh tế quốc tế');
    list.add('Khoa Công nghệ Hóa học & Thực phẩm');
    list.add('Khoa Công nghệ Môi trường');
    list.add('Khoa Ngoại ngữ');
    list.add('Khoa Luật');
    return Array.from(list);
  }

  get totalCancelRequestCount(): number {
    return this.proposalsToReview.filter(p => p.status === 'YEU_CAU_HUY' || p.cancelRequest?.isRequested).length;
  }

  get filteredProposals(): TopicProposal[] {
    return this.proposalsToReview.filter(p => {
      // 1. Search term
      if (this.searchTerm && this.searchTerm.trim() !== '') {
        const term = this.searchTerm.toLowerCase().trim();
        const matchTitle = p.title?.toLowerCase().includes(term);
        const matchCode = p.code?.toLowerCase().includes(term);
        const matchAuthor = p.authorName?.toLowerCase().includes(term);
        const matchIdentifier = p.authorIdentifierCode?.toLowerCase().includes(term);
        if (!matchTitle && !matchCode && !matchAuthor && !matchIdentifier) {
          return false;
        }
      }

      // 2. Faculty filter
      if (this.selectedFaculty !== 'ALL') {
        if (p.faculty !== this.selectedFaculty) return false;
      }

      // 3. Target filter
      if (this.selectedTarget !== 'ALL') {
        if (p.target !== this.selectedTarget) return false;
      }

      // 4. Type filter
      if (this.selectedType !== 'ALL') {
        if (p.type !== this.selectedType) return false;
      }

      // 5. Phase & Status filter
      if (this.selectedPhase !== 'ALL') {
        if (this.selectedPhase === 'B01') {
          const b01Statuses = ['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI'];
          if (!b01Statuses.includes(p.status)) return false;
        } else if (this.selectedPhase === 'B02') {
          const b02Statuses = ['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO'];
          if (!b02Statuses.includes(p.status)) return false;
        } else if (this.selectedPhase === 'B03') {
          const b03Statuses = ['CHO_NOP_THUYET_MINH', 'DANG_XET_DUYET_THUYET_MINH'];
          if (!b03Statuses.includes(p.status)) return false;
        } else if (this.selectedPhase === 'B06') {
          if (p.status !== 'DANG_THUC_HIEN') return false;
        } else if (this.selectedPhase === 'B07') {
          const b07Statuses = ['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'];
          if (!b07Statuses.includes(p.status)) return false;
        } else if (this.selectedPhase === 'BM13') {
          if (p.status !== 'YEU_CAU_CHINH_SUA_NGHIEM_THU') return false;
        } else if (this.selectedPhase === 'YEU_CAU_HUY') {
          if (p.status !== 'YEU_CAU_HUY' && !p.cancelRequest?.isRequested) return false;
        } else if (this.selectedPhase === 'DA_HUY') {
          if (p.status !== 'DA_HUY') return false;
        } else if (this.selectedPhase === 'DONE') {
          const doneStatuses = ['DA_CONG_NHAN_KET_QUA', 'LUU_HO_SO', 'TRIEN_KHAI_UNG_DUNG'];
          if (!doneStatuses.includes(p.status)) return false;
        }
      }

      // 6. Round filter
      if (this.selectedRound !== 'ALL') {
        if (p.roundId !== this.selectedRound && p.roundName !== this.selectedRound) return false;
      }

      return true;
    });
  }

  get pagedProposals(): TopicProposal[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.filteredProposals.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProposals.length / this.pageSize) || 1;
  }

  get pages(): number[] {
    const total = this.totalPages;
    const res: number[] = [];
    for (let i = 1; i <= total; i++) {
      res.push(i);
    }
    return res;
  }

  setPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.page = p;
  }

  onFilterChange() {
    this.page = 1;
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedFaculty = this.currentUser?.role === 'TRUONG_KHOA' ? (this.currentUser.unit || 'Khoa Công nghệ thông tin') : 'ALL';
    this.selectedTarget = 'ALL';
    this.selectedType = 'ALL';
    this.selectedPhase = 'ALL';
    this.selectedRound = 'ALL';
    this.page = 1;
  }

  // --- XÁC ĐỊNH MÃ VÀ TÊN BIỂU MẪU TƯƠNG ỨNG CỦA ĐỀ TÀI THEO GIAI ĐOẠN ---
  getFormCodeForProposal(p: TopicProposal): { code: string; label: string; icon: string; btnClass: string } | null {
    const s = p.status;
    
    // Giai đoạn Sơ duyệt (Bước 02): BM02 / BM03
    if (['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO'].includes(s)) {
      return { code: 'BM02', label: 'Xem BM02', icon: 'ri-file-list-3-line', btnClass: 'btn-soft-primary' };
    }

    // Giai đoạn Thuyết minh (Bước 03 - 04): BM06 / BM07
    if (['CHO_NOP_THUYET_MINH', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
      return { code: 'BM06', label: 'Xem BM06', icon: 'ri-file-shield-line', btnClass: 'btn-soft-info' };
    }

    // Giai đoạn Báo cáo tiến độ ½ thời gian (Bước 06): BM08
    // CHỈ CÓ TRƯỞNG KHOA VÀ P.KHCN MỚI ĐƯỢC XEM FILE BÁO CÁO GIỮA KỲ BM08
    if (s === 'DANG_THUC_HIEN') {
      const isAuthor = this.currentUser && (this.currentUser.role === 'GIANG_VIEN' || this.currentUser.role === 'SINH_VIEN');
      if (this.isDean || this.isPkhcnOrAdmin || isAuthor) {
        return { code: 'BM08', label: 'Xem BM08', icon: 'ri-file-chart-line', btnClass: 'btn-soft-warning' };
      }
      return null;
    }

    // Giai đoạn Nghiệm thu (Bước 07): BM11 / BM12
    if (['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'].includes(s)) {
      return { code: 'BM11', label: 'Xem BM11', icon: 'ri-medal-line', btnClass: 'btn-soft-danger' };
    }

    // Giai đoạn Chỉnh sửa sau nghiệm thu (Bước 07): BM13
    if (s === 'YEU_CAU_CHINH_SUA_NGHIEM_THU') {
      return { code: 'BM13', label: 'Xem BM13', icon: 'ri-file-edit-line', btnClass: 'btn-soft-warning' };
    }

    // Đề tài hủy: BM01
    if (s === 'YEU_CAU_HUY' || s === 'DA_HUY') {
      const code = p.target === 'SINH_VIEN' ? 'BM01B' : 'BM01A';
      return { code, label: `Xem ${code}`, icon: 'ri-file-text-line', btnClass: 'btn-soft-secondary' };
    }

    // Giai đoạn Công nhận kết quả (Bước 08): BM15
    if (['DA_CONG_NHAN_KET_QUA', 'LUU_HO_SO', 'TRIEN_KHAI_UNG_DUNG'].includes(s)) {
      return { code: 'BM15', label: 'Xem BM15', icon: 'ri-award-line', btnClass: 'btn-soft-success' };
    }

    // Giai đoạn Đăng ký (Bước 01): BM01A / BM01B
    const defaultCode = p.target === 'SINH_VIEN' ? 'BM01B' : 'BM01A';
    return { code: defaultCode, label: `Xem ${defaultCode}`, icon: 'ri-file-text-line', btnClass: 'btn-soft-primary' };
  }

  // --- MỞ MODAL XEM BIỂU MẪU HỒ SƠ DO GIẢNG VIÊN / SINH VIÊN NỘP ---
  openBmModal(content: TemplateRef<any>, prop: TopicProposal, forceDocCode?: string) {
    this.selectedProposalForBm = prop;
    if (forceDocCode) {
      this.previewBmCode = forceDocCode;
    } else {
      this.previewBmCode = this.getAuthorSubmittedDocForProposal(prop);
    }
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });

    // Khôi phục vị trí cuộn trang khi mở lại file dài như Thuyết minh BM04
    setTimeout(() => {
      const scrollElem = document.getElementById('pdfModalScrollContainer');
      if (scrollElem && this.scrollPositions[prop.id]) {
        scrollElem.scrollTop = this.scrollPositions[prop.id];
      }
    }, 250);
  }

  getAuthorSubmittedDocForProposal(p: TopicProposal): string {
    const s = p.status;
    const isStudent = p.target === 'SINH_VIEN';

    // 1. Sơ duyệt (Bước 02 / Bước 01): Hồ sơ đăng ký đề tài của GV/SV (BM01A / BM01B)
    if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO', 'KHONG_DAT_XET_DUYET_HO_SO'].includes(s)) {
      return isStudent ? 'BM01B' : 'BM01A';
    }

    // 2. Thuyết minh (Bước 03 - Bước 04): Bản Thuyết minh đề tài NCKH (BM04A / BM04B)
    if (['CHO_NOP_THUYET_MINH', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
      return isStudent ? 'BM04B' : 'BM04A';
    }

    // 3. Tiến độ (Bước 06): Báo cáo giữa kỳ (BM08)
    if (s === 'DANG_THUC_HIEN') {
      return 'BM08';
    }

    // 4. Giải trình sau nghiệm thu: BM13
    if (s === 'YEU_CAU_CHINH_SUA_NGHIEM_THU') {
      return 'BM13';
    }

    // 5. Nghiệm thu (Bước 07): Báo cáo tổng kết nghiệm thu đề tài (BM09)
    if (['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07', 'KHONG_DAT_NGHIEM_THU'].includes(s)) {
      return 'BM09';
    }

    // Mặc định
    return isStudent ? 'BM01B' : 'BM01A';
  }

  // --- HỦY ĐỀ TÀI CHO P.KHCN ---
  openCancelModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForCancel = prop;
    this.cancelDecisionNumber = `QĐ-HUY-2026-0${Math.floor(10 + Math.random() * 89)}`;
    this.cancelPkhcnNotes = 'Phòng Khoa học & Công nghệ đồng ý chấp thuận đơn đề nghị xin hủy đề tài NCKH theo báo cáo của Chủ nhiệm và ý kiến của Khoa.';
    this.modalService.open(content, { size: 'md', centered: true });
  }

  confirmCancelProposal() {
    if (!this.selectedProposalForCancel) return;
    const ok = this.nckhDataService.cancelProposal(
      this.selectedProposalForCancel.id,
      this.cancelPkhcnNotes,
      this.cancelDecisionNumber
    );
    
    // Nếu là lý do chủ quan vi phạm quy chế -> Tự động gửi kiến nghị lên Admin đưa vào Blacklist 1 năm
    if (this.cancelReasonType === 'CHU_QUAN' && this.requestAdminBlacklist) {
      this.nckhDataService.requestBlacklist({
        userId: this.selectedProposalForCancel.authorId,
        userFullName: this.selectedProposalForCancel.authorName,
        userIdentifierCode: this.selectedProposalForCancel.authorIdentifierCode,
        userRole: this.selectedProposalForCancel.target === 'SINH_VIEN' ? 'SINH_VIEN' : 'GIANG_VIEN',
        userUnit: this.selectedProposalForCancel.faculty,
        proposalId: this.selectedProposalForCancel.id,
        proposalCode: this.selectedProposalForCancel.code,
        proposalTitle: this.selectedProposalForCancel.title,
        cancelReason: this.cancelPkhcnNotes || 'Vi phạm cam kết tiến độ và quy chế NCKH',
        cancelReasonType: 'CHU_QUAN',
        decisionNumber: this.cancelDecisionNumber
      });
    }

    this.modalService.dismissAll();
    if (ok) {
      this.alertType = 'warning';
      this.alertMessage = `Đã phê duyệt Quyết định hủy đề tài "${this.selectedProposalForCancel.title}" (Số QĐ: ${this.cancelDecisionNumber}) và chuyển kiến nghị Blacklist 1 năm lên Admin!`;
    }
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  // --- CÁC HÀNH ĐỘNG QUYẾT ĐỊNH TRỰC TIẾP TRONG MODAL BIỂU MẪU ---
  quickApproveFromBmModal() {
    if (!this.selectedProposalForBm) return;
    const ok = this.nckhDataService.approveProposal(this.selectedProposalForBm.id, 'Phê duyệt hồ sơ sau khi xem xét biểu mẫu.');
    this.modalService.dismissAll();
    if (ok) {
      this.alertType = 'success';
      this.alertMessage = `Đã phê duyệt hồ sơ "${this.selectedProposalForBm.title}" thành công!`;
    }
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  
  deanApproveBm08() {
    if (!this.selectedProposalForBm) return;
    this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
      status: 'DANG_THUC_HIEN',
      statusText: 'Khoa đã duyệt BM08 - Đã gửi P.KHCN tiếp nhận',
      auditLogs: [
        ...(this.selectedProposalForBm.auditLogs || []),
        {
          id: `log-bm08-${Date.now()}`,
          action: 'Trưởng Khoa phê duyệt Báo cáo tiến độ BM08 và chuyển lên Phòng KHCN',
          actorName: this.currentUser?.fullName || 'Trưởng Khoa',
          actorRole: 'Trưởng Khoa',
          timestamp: new Date().toLocaleString('vi-VN'),
          comment: 'Khoa đã kiểm tra tiến độ nghiên cứu, sản phẩm trung gian đạt yêu cầu và chuyển P.KHCN tiếp nhận.'
        }
      ]
    });
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Trưởng Khoa đã phê duyệt Báo cáo tiến độ BM08 cho đề tài "${this.selectedProposalForBm.title}" và chuyển tiếp lên P.KHCN!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  pkhcnReceiveBm08() {
    if (!this.selectedProposalForBm) return;
    this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
      status: 'DANG_THUC_HIEN',
      statusText: 'P.KHCN đã tiếp nhận & lưu hồ sơ Báo cáo tiến độ BM08',
      auditLogs: [
        ...(this.selectedProposalForBm.auditLogs || []),
        {
          id: `log-bm08-${Date.now()}`,
          action: 'Phòng KHCN xác nhận tiếp nhận và lưu hồ sơ Báo cáo tiến độ BM08',
          actorName: this.currentUser?.fullName || 'Phòng KHCN',
          actorRole: 'P.KHCN',
          timestamp: new Date().toLocaleString('vi-VN'),
          comment: 'Phòng KHCN đã tiếp nhận báo cáo tiến độ hợp lệ từ Khoa.'
        }
      ]
    });
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Phòng KHCN đã tiếp nhận và lưu hồ sơ Báo cáo tiến độ BM08 cho đề tài "${this.selectedProposalForBm.title}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  quickReceiveBm08FromModal() {
    if (!this.selectedProposalForBm) return;
    this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
      status: 'DANG_THUC_HIEN',
      statusText: 'Đã tiếp nhận Báo cáo tiến độ ½ thời gian (BM08)'
    });
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã xác nhận và tiếp nhận Báo cáo tiến độ BM08 cho đề tài "${this.selectedProposalForBm.title}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  quickApproveBm13FromModal() {
    if (!this.selectedProposalForBm) return;
    this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
      status: 'DA_NGHIEM_THU',
      statusText: 'Đã xác nhận giải trình BM13 & Đạt nghiệm thu'
    });
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã xác nhận hoàn tất Báo cáo Giải trình BM13 cho đề tài "${this.selectedProposalForBm.title}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  quickNoticeBm14FromModal() {
    if (!this.selectedProposalForBm) return;
    this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
      status: 'HOAN_TAT_BUOC_07',
      statusText: 'Đã thanh lý hợp đồng (BM14) - Chờ công nhận kết quả'
    });
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã phát thông báo Thanh lý Hợp đồng BM14 cho đề tài "${this.selectedProposalForBm.title}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  quickNoticeBm15FromModal() {
    if (!this.selectedProposalForBm) return;
    this.nckhDataService.updateProposal(this.selectedProposalForBm.id, {
      status: 'DA_CONG_NHAN_KET_QUA',
      statusText: 'Đã công nhận kết quả đề tài (BM15)'
    });
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã công bố Quyết định Công nhận kết quả BM15 cho đề tài "${this.selectedProposalForBm.title}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  openReturnModalFromBmModal(returnModalRef: TemplateRef<any>) {
    this.selectedProposal = this.selectedProposalForBm;
    this.returnReason = '';
    this.modalService.dismissAll();
    this.modalService.open(returnModalRef, { centered: true });
  }

  confirmReturn() {
    if (!this.selectedProposal) return;
    if (!this.returnReason || this.returnReason.trim() === '') {
      alert('Bắt buộc phải nhập lý do yêu cầu chỉnh sửa (PRD FR-22).');
      return;
    }

    const ok = this.nckhDataService.returnProposal(this.selectedProposal.id, this.returnReason);
    this.modalService.dismissAll();
    if (ok) {
      this.alertType = 'warning';
      this.alertMessage = `Đã trả hồ sơ "${this.selectedProposal.title}" về cho chủ nhiệm đề tài chỉnh sửa kèm lý do.`;
    } else {
      this.alertType = 'danger';
      this.alertMessage = 'Trả hồ sơ không thành công.';
    }
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  getPhaseBadge(status: TopicStatus): { text: string; class: string } {
    switch (status) {
      case 'NHAP':
      case 'CHO_KHOA_DUYET':
      case 'CHO_GVHD_DUYET':
      case 'TRA_CHINH_SUA':
      case 'CHO_DUYET_LAI':
        return { text: 'B01: Đăng ký đề tài', class: 'badge bg-secondary-subtle text-secondary' };
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO':
      case 'DANG_XET_DUYET_HO_SO':
      case 'DAT_XET_DUYET_HO_SO':
        return { text: 'B02: Sơ duyệt (BM02/03)', class: 'badge bg-primary-subtle text-primary' };
      case 'CHO_NOP_THUYET_MINH':
      case 'DANG_XET_DUYET_THUYET_MINH':
        return { text: 'B04: Thuyết minh (BM06/07)', class: 'badge bg-info-subtle text-info' };
      case 'DANG_THUC_HIEN':
        return { text: 'B06: BC tiến độ (BM08)', class: 'badge bg-warning-subtle text-warning' };
      case 'CHO_NGHIEM_THU':
      case 'DANG_NGHIEM_THU':
      case 'DA_NGHIEM_THU':
      case 'HOAN_TAT_BUOC_07':
        return { text: 'B07: Nghiệm thu (BM11/12)', class: 'badge bg-danger-subtle text-danger' };
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU':
        return { text: 'B07: Giải trình HĐNT (BM13)', class: 'badge bg-warning text-dark' };
      case 'YEU_CAU_HUY':
        return { text: 'Yêu cầu hủy đề tài', class: 'badge bg-danger-subtle text-danger border border-danger' };
      case 'DA_HUY':
        return { text: 'Đã hủy đề tài', class: 'badge bg-dark text-white' };
      case 'DA_CONG_NHAN_KET_QUA':
      case 'LUU_HO_SO':
      case 'TRIEN_KHAI_UNG_DUNG':
        return { text: 'B08-B09: Hoàn thành (BM15)', class: 'badge bg-success-subtle text-success' };
      default:
        return { text: 'Quy trình NCKH', class: 'badge bg-light text-dark' };
    }
  }

  getStatusBadge(status: TopicStatus): string {
    switch (status) {
      case 'NHAP': return 'badge bg-secondary-subtle text-secondary';
      case 'CHO_KHOA_DUYET': return 'badge bg-warning-subtle text-warning';
      case 'CHO_GVHD_DUYET': return 'badge bg-warning-subtle text-warning';
      case 'TRA_CHINH_SUA': return 'badge bg-danger-subtle text-danger';
      case 'CHO_DUYET_LAI': return 'badge bg-info-subtle text-info';
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO': return 'badge bg-primary-subtle text-primary border border-primary';
      case 'DANG_XET_DUYET_HO_SO': return 'badge bg-primary text-white';
      case 'DAT_XET_DUYET_HO_SO': return 'badge bg-success-subtle text-success';
      case 'CHO_NOP_THUYET_MINH': return 'badge bg-info text-white';
      case 'DANG_XET_DUYET_THUYET_MINH': return 'badge bg-info-subtle text-info border border-info';
      case 'DANG_THUC_HIEN': return 'badge bg-primary text-white';
      case 'CHO_NGHIEM_THU': return 'badge bg-danger-subtle text-danger border border-danger';
      case 'DANG_NGHIEM_THU': return 'badge bg-danger text-white';
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU': return 'badge bg-warning text-dark';
      case 'DA_NGHIEM_THU': return 'badge bg-success text-white';
      case 'DA_CONG_NHAN_KET_QUA': return 'badge bg-success text-white';
      case 'YEU_CAU_HUY': return 'badge bg-danger-subtle text-danger border border-danger';
      case 'DA_HUY': return 'badge bg-dark text-white';
      default: return 'badge bg-light text-dark';
    }
  }

  openReasonModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForReason = prop;
    this.modalService.open(content, { size: 'md', centered: true });
  }
}
