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

  alertMessage = '';
  alertType = 'success';

  constructor(
    public nckhDataService: NckhDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      this.currentUser = u;
      this.loadProposals();
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
    } else {
      // P.KHCN hoặc Admin xem toàn bộ hồ sơ đang chờ xét duyệt
      this.proposalsToReview = this.nckhDataService.getProposals().filter(p => 
        p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_GVHD_DUYET' || p.status === 'CHO_DUYET_LAI' || p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO'
      );
    }
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
}
