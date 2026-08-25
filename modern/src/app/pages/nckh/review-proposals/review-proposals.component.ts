import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { TopicProposal, TopicStatus, UserProfile } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-review-proposals',
  templateUrl: './review-proposals.component.html',
  styleUrls: ['./review-proposals.component.scss'],
  standalone: false
})
export class ReviewProposalsComponent implements OnInit {
  currentUser!: UserProfile;
  proposalsToReview: TopicProposal[] = [];
  selectedProposal?: TopicProposal;
  returnReason = '';
  approvalNote = '';
  selectedProposalForReason?: TopicProposal;

  alertMessage = '';
  alertType = 'success';

  constructor(
    public nckhDataService: NckhDataService,
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
    if (this.currentUser.role === 'TRUONG_KHOA') {
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
      // P.KHCN hoặc Admin xem toàn bộ hồ sơ đang chờ xử lý
      this.proposalsToReview = this.nckhDataService.getProposals();
    }
  }

  canApproveOrReturn(p: TopicProposal): boolean {
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

  getStatusBadge(status: TopicStatus): string {
    switch (status) {
      case 'CHO_KHOA_DUYET': return 'badge bg-warning-subtle text-warning';
      case 'CHO_GVHD_DUYET': return 'badge bg-warning-subtle text-warning';
      case 'CHO_DUYET_LAI': return 'badge bg-info-subtle text-info';
      case 'TRA_CHINH_SUA': return 'badge bg-danger-subtle text-danger';
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO': return 'badge bg-success-subtle text-success';
      default: return 'badge bg-light text-dark';
    }
  }

  openReasonModal(content: TemplateRef<any>, prop: TopicProposal) {
    this.selectedProposalForReason = prop;
    this.modalService.open(content, { size: 'md', centered: true });
  }
}
