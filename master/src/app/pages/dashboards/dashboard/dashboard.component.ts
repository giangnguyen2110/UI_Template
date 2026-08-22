import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast-service';
import { NckhDataService, DEMO_USERS } from 'src/app/core/services/nckh-data.service';
import { UserProfile, UserRole, RegistrationRound, TopicProposal } from 'src/app/core/models/nckh.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  currentUser: UserProfile = DEMO_USERS[0];
  demoUsers = DEMO_USERS;
  rounds: RegistrationRound[] = [];
  proposals: TopicProposal[] = [];

  constructor(
    public toastService: ToastService,
    public nckhDataService: NckhDataService
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
      }
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
    });

    this.nckhDataService.proposals$.subscribe(p => {
      this.proposals = p;
    });

    this.breadCrumbItems = [
      { label: 'Hệ thống NCKH' },
      { label: 'Trang chủ 5 Module', active: true }
    ];

    if (sessionStorage.getItem('toast')) {
      this.toastService.show('Đăng nhập thành công vào Hệ thống Quản lý NCKH.', { classname: 'bg-success text-center text-white', delay: 4000 });
      sessionStorage.removeItem('toast');
    }
  }

  switchRole(role: UserRole) {
    this.nckhDataService.switchRole(role);
  }
}
