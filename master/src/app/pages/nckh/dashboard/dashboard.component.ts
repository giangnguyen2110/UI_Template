import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NckhDataService, DEMO_USERS } from '../../../core/services/nckh-data.service';
import { UserProfile, TopicProposal, RegistrationRound, UserRole } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-nckh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class NckhDashboardComponent implements OnInit {
  currentUser: UserProfile = DEMO_USERS[0];
  demoUsers = DEMO_USERS;
  rounds: RegistrationRound[] = [];
  proposals: TopicProposal[] = [];
  myProposals: TopicProposal[] = [];
  pendingReviews: TopicProposal[] = [];

  activeQuota = 0; // Đề tài đang đợi xử lý của người dùng (tối đa 2)

  constructor(
    public nckhDataService: NckhDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
        this.loadData();
      }
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
    });

    this.nckhDataService.proposals$.subscribe(p => {
      this.proposals = p;
      this.loadData();
    });
  }

  loadData() {
    if (!this.currentUser) return;
    this.myProposals = this.nckhDataService.getMyProposals();
    this.activeQuota = this.nckhDataService.getActivePendingCount();

    if (this.currentUser.role === 'TRUONG_KHOA') {
      this.pendingReviews = this.nckhDataService.getProposalsForFaculty();
    } else if (this.currentUser.role === 'GIANG_VIEN_HD') {
      this.pendingReviews = this.nckhDataService.getProposalsForAdvisor();
    } else if (this.currentUser.role === 'P_KHCN' || this.currentUser.role === 'CHU_TICH_HD' || this.currentUser.role === 'ADMIN') {
      this.pendingReviews = this.proposals.filter(p => p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO');
    }
  }

  get isAuthorRole(): boolean {
    return this.currentUser.role === 'GIANG_VIEN' || this.currentUser.role === 'SINH_VIEN';
  }

  get isDeanRole(): boolean {
    return this.currentUser.role === 'TRUONG_KHOA';
  }

  get isAdvisorRole(): boolean {
    return this.currentUser.role === 'GIANG_VIEN_HD';
  }

  get isPkhcnRole(): boolean {
    return this.currentUser.role === 'P_KHCN';
  }

  get isCouncilPresidentRole(): boolean {
    return this.currentUser.role === 'CHU_TICH_HD';
  }

  get recentProposalsList(): TopicProposal[] {
    return this.isAuthorRole ? this.myProposals : this.proposals.slice(0, 4);
  }

  switchRole(role: UserRole) {
    this.nckhDataService.switchRole(role);
  }

  getStatusBadge(status: string): string {
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

  goToNewProposal() {
    this.router.navigate(['/nckh/dang-ky-moi']);
  }
}
