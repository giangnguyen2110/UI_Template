import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    public nckhDataService: NckhDataService,
    private router: Router
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
    this.myProposals = this.nckhDataService.getMyProposals();
    this.activeQuota = this.nckhDataService.getActivePendingCount();
    this.filterByStatus(this.currentFilter);
  }

  filterByStatus(filter: string) {
    this.currentFilter = filter;
    if (filter === 'ALL') {
      this.filteredProposals = this.myProposals;
    } else if (filter === 'NHAP') {
      this.filteredProposals = this.myProposals.filter(p => p.status === 'NHAP');
    } else if (filter === 'PENDING') {
      this.filteredProposals = this.myProposals.filter(p => 
        p.status === 'CHO_KHOA_DUYET' || p.status === 'CHO_GVHD_DUYET' || p.status === 'CHO_DUYET_LAI'
      );
    } else if (filter === 'REJECTED') {
      this.filteredProposals = this.myProposals.filter(p => p.status === 'TRA_CHINH_SUA');
    } else if (filter === 'APPROVED') {
      this.filteredProposals = this.myProposals.filter(p => 
        p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO' || p.status === 'DANG_XET_DUYET_HO_SO' || p.status === 'DAT_XET_DUYET_HO_SO'
      );
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
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO': return 'badge bg-success-subtle text-success';
      case 'DANG_XET_DUYET_HO_SO': return 'badge bg-primary-subtle text-primary';
      case 'DAT_XET_DUYET_HO_SO': return 'badge bg-success text-white';
      default: return 'badge bg-light text-dark';
    }
  }
}
