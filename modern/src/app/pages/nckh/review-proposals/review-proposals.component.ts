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

  // Phân trang (5 hồ sơ / trang)
  page = 1;
  pageSize = 5;
  readonly Math = Math;

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

      // 5. Phase filter
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
    this.selectedFaculty = 'ALL';
    this.selectedTarget = 'ALL';
    this.selectedType = 'ALL';
    this.selectedPhase = 'ALL';
    this.selectedRound = 'ALL';
    this.page = 1;
  }

  canApproveOrReturn(p: TopicProposal): boolean {
    if (this.isAllSchoolRoute) return false;
    if (this.currentUser.role === 'ADMIN' || this.currentUser.role === 'P_KHCN') {
      return p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_GVHD_DUYET' || p.status === 'CHO_DUYET_LAI';
    }
    if (this.currentUser.role === 'TRUONG_KHOA') {
      return p.target === 'GIANG_VIEN' && (p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_DUYET_LAI') && p.faculty === this.currentUser.unit;
    }
    if (this.currentUser.role === 'GIANG_VIEN_HD') {
      return p.target === 'SINH_VIEN' && p.status === 'CHO_GVHD_DUYET' && (p.advisorId === this.currentUser.id || p.advisorEmail === this.currentUser.email);
    }
    return false;
  }

  openDetailModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposal = prop;
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  openReturnModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposal = prop;
    this.returnReason = '';
    this.modalService.open(content, { centered: true });
  }

  openApproveModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposal = prop;
    this.approvalNote = '';
    this.modalService.open(content, { centered: true });
  }

  confirmApprove() {
    if (!this.selectedProposal) return;
    const ok = this.nckhDataService.approveProposal(this.selectedProposal.id, this.approvalNote);
    this.modalService.dismissAll();
    if (ok) {
      this.alertType = 'success';
      this.alertMessage = `Đã duyệt thành công đề tài "${this.selectedProposal.title}". Hồ sơ đã tự động chuyển sang tập xét duyệt Hội đồng Bước 02!`;
    } else {
      this.alertType = 'danger';
      this.alertMessage = 'Duyệt hồ sơ không thành công.';
    }
    setTimeout(() => { this.alertMessage = ''; }, 6000);
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
      default: return 'badge bg-light text-dark';
    }
  }

  openReasonModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForReason = prop;
    this.modalService.open(content, { size: 'md', centered: true });
  }
}
