import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { TopicProposal, TopicStatus, UserProfile } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.scss'],
  standalone: false
})
export class MyProposalsComponent implements OnInit {
  currentUser!: UserProfile;
  myProposals: TopicProposal[] = [];
  filteredProposals: TopicProposal[] = [];
  currentFilter = 'ALL';
  activeQuota = 0;
  alertMessage = '';
  alertType = 'success';
  selectedProposalForReason?: TopicProposal;

  // Phân trang (5 hồ sơ / trang)
  page = 1;
  pageSize = 5;
  readonly Math = Math;

  constructor(
    public nckhDataService: NckhDataService,
    private router: Router,
    private modalService: NgbModal
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
  }

  loadProposals() {
    this.myProposals = this.nckhDataService.getMyProposals();
    this.activeQuota = this.nckhDataService.getActivePendingCount();
    this.filterByStatus(this.currentFilter);
  }

  filterByStatus(filter: string) {
    this.currentFilter = filter;
    this.page = 1; // Reset về trang 1 khi lọc
    if (filter === 'ALL') {
      this.filteredProposals = this.myProposals;
    } else if (filter === 'B01') {
      this.filteredProposals = this.myProposals.filter(p => 
        p.status === 'NHAP' || p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_GVHD_DUYET' || p.status === 'TRA_CHINH_SUA' || p.status === 'CHO_DUYET_LAI'
      );
    } else if (filter === 'B03') {
      this.filteredProposals = this.myProposals.filter(p => 
        p.status === 'CHO_NOP_THUYET_MINH' || p.status === 'DANG_XET_DUYET_THUYET_MINH' || p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO' || p.status === 'DAT_XET_DUYET_HO_SO'
      );
    } else if (filter === 'B06') {
      this.filteredProposals = this.myProposals.filter(p => p.status === 'DANG_THUC_HIEN');
    } else if (filter === 'B07') {
      this.filteredProposals = this.myProposals.filter(p => 
        p.status === 'CHO_NGHIEM_THU' || p.status === 'DANG_NGHIEM_THU' || p.status === 'DA_NGHIEM_THU' || p.status === 'HOAN_TAT_BUOC_07' || p.status === 'DA_CONG_NHAN_KET_QUA'
      );
    } else if (filter === 'BM13') {
      this.filteredProposals = this.myProposals.filter(p => p.status === 'YEU_CAU_CHINH_SUA_NGHIEM_THU');
    }
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

  submitProposal(prop: TopicProposal) {
    const res = this.nckhDataService.submitProposal(prop.id);
    if (res.success) {
      this.alertType = 'success';
      this.alertMessage = res.message;
    } else {
      this.alertType = 'danger';
      this.alertMessage = res.message;
    }
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }

  deleteProposal(id: string) {
    if (confirm('Bạn có chắc chắn muốn xóa hồ sơ nháp này?')) {
      const ok = this.nckhDataService.deleteProposal(id);
      if (ok) {
        this.alertType = 'success';
        this.alertMessage = 'Đã xóa hồ sơ nháp thành công.';
        setTimeout(() => { this.alertMessage = ''; }, 4000);
      }
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

  canEditProposal(p: TopicProposal): boolean {
    if (p.status !== 'NHAP' && p.status !== 'TRA_CHINH_SUA') return false;
    return p.authorId === this.currentUser?.id || this.currentUser?.role === 'ADMIN' || this.currentUser?.role === 'GIANG_VIEN' || this.currentUser?.role === 'SINH_VIEN';
  }

  canDeleteProposal(p: TopicProposal): boolean {
    if (p.status !== 'NHAP') return false;
    return p.authorId === this.currentUser?.id || this.currentUser?.role === 'ADMIN';
  }

  openReasonModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForReason = prop;
    this.modalService.open(content, { size: 'md', centered: true });
  }
}
