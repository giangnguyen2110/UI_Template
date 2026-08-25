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

  // --- BỘ LỌC TÌM KIẾM ĐA CHIỀU CHO ĐỀ TÀI TOÀN TRƯỜNG ---
  searchTerm: string = '';
  selectedFaculty: string = 'ALL';
  selectedTarget: string = 'ALL';
  selectedType: string = 'ALL';
  selectedPhase: string = 'ALL';
  selectedRound: string = 'ALL';
  selectedCancelFilter: string = 'ALL'; // 'ALL' | 'YEU_CAU_HUY' | 'DA_HUY'

  // Phân trang (5 hồ sơ / trang)
  page = 1;
  pageSize = 5;
  readonly Math = Math;

  // --- BIẾN PHỤC VỤ MODAL XEM BIỂU MẪU HÀNH CHÍNH & QUYẾT ĐỊNH ---
  selectedProposalForBm?: TopicProposal;
  previewBmCode: string = 'BM01A';

  // --- BIẾN PHỤC VỤ HỦY ĐỀ TÀI CHO P.KHCN ---
  selectedProposalForCancel?: TopicProposal;
  cancelDecisionNumber: string = 'QĐ-HUY-2026-025';
  cancelPkhcnNotes: string = '';

  // Mock dữ liệu biểu mẫu nâng cao cho preview
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

  get isPkhcnOrAdmin(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'P_KHCN' || this.currentUser.role === 'ADMIN');
  }

  get isAllSchoolRoute(): boolean {
    return this.router.url.includes('danh-sach-toan-truong');
  }

  get isFacultyRoute(): boolean {
    return this.router.url.includes('de-tai-don-vi');
  }

  get pageHeading(): string {
    if (this.isAllSchoolRoute) return 'Danh sách Đề tài Toàn trường';
    if (this.isFacultyRoute) return 'Danh sách Đề tài Thuộc Đơn vị / Khoa';
    return 'Xét duyệt Hồ sơ Đăng ký Đề tài (Bước 01)';
  }

  get pageSubheading(): string {
    if (this.isAllSchoolRoute) return 'Theo dõi, tra cứu và quản lý toàn bộ các hồ sơ đề tài NCKH trong toàn trường.';
    if (this.isFacultyRoute) return 'Tổng hợp các hồ sơ đề tài thuộc thẩm quyền quản lý của đơn vị.';
    return 'Xét duyệt hồ sơ đăng ký đề tài tuyến đầu từ Giảng viên / Sinh viên.';
  }

  loadProposals() {
    if (this.isAllSchoolRoute) {
      this.proposalsToReview = this.nckhDataService.getProposals();
    } else if (this.isFacultyRoute || this.currentUser.role === 'TRUONG_KHOA') {
      this.proposalsToReview = this.nckhDataService.getProposalsForFaculty();
    } else if (this.currentUser.role === 'GIANG_VIEN_HD') {
      this.proposalsToReview = this.nckhDataService.getProposalsForAdvisor();
    } else if (this.currentUser.role === 'CHU_TICH_HD' || this.currentUser.role === 'HOI_DONG_MEMBER' || this.currentUser.role === 'THU_KY_HD') {
      const councilStatuses = [
        'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO', 
        'DANG_XET_DUYET_THUYET_MINH', 'DANG_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'
      ];
      this.proposalsToReview = this.nckhDataService.getProposals().filter(p => councilStatuses.includes(p.status));
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

      // 5. Cancel filter riêng biệt
      if (this.selectedCancelFilter !== 'ALL') {
        if (this.selectedCancelFilter === 'YEU_CAU_HUY') {
          if (p.status !== 'YEU_CAU_HUY' && !p.cancelRequest?.isRequested) return false;
        } else if (this.selectedCancelFilter === 'DA_HUY') {
          if (p.status !== 'DA_HUY') return false;
        }
      }

      // 6. Phase filter
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

      // 7. Round filter
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
    this.selectedFaculty = 'ALL';
    this.selectedTarget = 'ALL';
    this.selectedType = 'ALL';
    this.selectedPhase = 'ALL';
    this.selectedRound = 'ALL';
    this.selectedCancelFilter = 'ALL';
    this.page = 1;
  }

  // --- XÁC ĐỊNH MÃ VÀ TÊN BIỂU MẪU TƯƠNG ỨNG CỦA ĐỀ TÀI ---
  getFormCodeForProposal(p: TopicProposal): { code: string; label: string; icon: string; btnClass: string } {
    const s = p.status;
    if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI'].includes(s)) {
      const code = p.target === 'SINH_VIEN' ? 'BM01B' : 'BM01A';
      return { code, label: `Xem ${code}`, icon: 'ri-file-text-line', btnClass: 'btn-soft-info' };
    }
    if (['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'DAT_XET_DUYET_HO_SO'].includes(s)) {
      return { code: 'BM03', label: 'Xem BM02/03', icon: 'ri-file-list-3-line', btnClass: 'btn-soft-primary' };
    }
    if (['CHO_NOP_THUYET_MINH', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
      const code = p.target === 'SINH_VIEN' ? 'BM04B' : 'BM04A';
      return { code, label: `Xem ${code}`, icon: 'ri-article-line', btnClass: 'btn-soft-info' };
    }
    if (s === 'DANG_THUC_HIEN') {
      return { code: 'BM08', label: 'Xem BM08', icon: 'ri-file-chart-line', btnClass: 'btn-soft-warning' };
    }
    if (s === 'YEU_CAU_CHINH_SUA_NGHIEM_THU') {
      return { code: 'BM13', label: 'Xem BM13', icon: 'ri-file-edit-line', btnClass: 'btn-soft-warning' };
    }
    if (['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'].includes(s)) {
      return { code: 'BM09', label: 'Xem BM09', icon: 'ri-book-open-line', btnClass: 'btn-soft-danger' };
    }
    if (s === 'YEU_CAU_HUY' || s === 'DA_HUY') {
      const code = p.target === 'SINH_VIEN' ? 'BM01B' : 'BM01A';
      return { code, label: `Xem ${code}`, icon: 'ri-file-text-line', btnClass: 'btn-soft-secondary' };
    }
    if (['DA_CONG_NHAN_KET_QUA', 'LUU_HO_SO', 'TRIEN_KHAI_UNG_DUNG'].includes(s)) {
      return { code: 'BM15', label: 'Xem BM15', icon: 'ri-award-line', btnClass: 'btn-soft-success' };
    }
    return { code: 'BM01A', label: 'Xem BM01', icon: 'ri-file-text-line', btnClass: 'btn-soft-primary' };
  }

  // --- MỞ MODAL XEM BIỂU MẪU HÀNH CHÍNH & RA QUYẾT ĐỊNH CHO P.KHCN ---
  openBmModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForBm = prop;
    this.previewBmCode = this.getFormCodeForProposal(prop).code;
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
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
    this.modalService.dismissAll();
    if (ok) {
      this.alertType = 'warning';
      this.alertMessage = `Đã phê duyệt Quyết định hủy đề tài "${this.selectedProposalForCancel.title}" (Số QĐ: ${this.cancelDecisionNumber}) thành công!`;
    }
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  // --- CÁC HÀNH ĐỘNG QUYẾT ĐỊNH TRỰC TIẾP TRONG MODAL BIỂU MẪU CHO P.KHCN ---
  quickApproveFromBmModal() {
    if (!this.selectedProposalForBm) return;
    const ok = this.nckhDataService.approveProposal(this.selectedProposalForBm.id, 'P.KHCN đã xem biểu mẫu và phê duyệt hồ sơ.');
    this.modalService.dismissAll();
    if (ok) {
      this.alertType = 'success';
      this.alertMessage = `P.KHCN đã phê duyệt hồ sơ "${this.selectedProposalForBm.title}" sau khi xem biểu mẫu!`;
    }
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
    this.alertMessage = `P.KHCN đã xác nhận và tiếp nhận Báo cáo tiến độ BM08 cho đề tài "${this.selectedProposalForBm.title}"!`;
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
    this.alertMessage = `P.KHCN đã xác nhận hoàn tất Báo cáo Giải trình BM13 cho đề tài "${this.selectedProposalForBm.title}"!`;
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
    this.alertMessage = `P.KHCN đã phát thông báo Thanh lý Hợp đồng BM14 cho đề tài "${this.selectedProposalForBm.title}"!`;
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
    this.alertMessage = `P.KHCN đã công bố Quyết định Công nhận kết quả BM15 cho đề tài "${this.selectedProposalForBm.title}"!`;
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
        return { text: 'B02: Phê duyệt sơ bộ', class: 'badge bg-primary-subtle text-primary' };
      case 'CHO_NOP_THUYET_MINH':
      case 'DANG_XET_DUYET_THUYET_MINH':
        return { text: 'B03: Viết thuyết minh', class: 'badge bg-info-subtle text-info' };
      case 'DANG_THUC_HIEN':
        return { text: 'B06: BC tiến độ ½ TG', class: 'badge bg-warning-subtle text-warning' };
      case 'CHO_NGHIEM_THU':
      case 'DANG_NGHIEM_THU':
      case 'DA_NGHIEM_THU':
      case 'HOAN_TAT_BUOC_07':
        return { text: 'B07: Nghiệm thu đề tài', class: 'badge bg-danger-subtle text-danger' };
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU':
        return { text: 'B07: Chỉnh sửa góp ý HĐNT', class: 'badge bg-warning text-dark' };
      case 'YEU_CAU_HUY':
        return { text: 'Yêu cầu hủy đề tài', class: 'badge bg-danger-subtle text-danger border border-danger' };
      case 'DA_HUY':
        return { text: 'Đã hủy đề tài', class: 'badge bg-dark text-white' };
      case 'DA_CONG_NHAN_KET_QUA':
      case 'LUU_HO_SO':
      case 'TRIEN_KHAI_UNG_DUNG':
        return { text: 'B08-B09: Hoàn thành', class: 'badge bg-success-subtle text-success' };
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
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO': return 'badge bg-primary-subtle text-primary';
      case 'DANG_XET_DUYET_HO_SO': return 'badge bg-primary text-white';
      case 'DAT_XET_DUYET_HO_SO': return 'badge bg-success-subtle text-success';
      case 'CHO_NOP_THUYET_MINH': return 'badge bg-info text-white';
      case 'DANG_XET_DUYET_THUYET_MINH': return 'badge bg-warning text-dark';
      case 'DANG_THUC_HIEN': return 'badge bg-primary text-white';
      case 'CHO_NGHIEM_THU': return 'badge bg-danger text-white';
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
