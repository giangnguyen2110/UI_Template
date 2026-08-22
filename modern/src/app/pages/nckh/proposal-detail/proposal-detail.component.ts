import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { TopicProposal, TopicStatus, UserProfile } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.scss'],
  standalone: false
})
export class ProposalDetailComponent implements OnInit {
  proposalId!: string;
  proposal?: TopicProposal;
  currentUser!: UserProfile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public nckhDataService: NckhDataService
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
      }
    });

    this.route.params.subscribe(params => {
      this.proposalId = params['id'];
      this.loadProposal();
    });

    this.nckhDataService.proposals$.subscribe(() => {
      this.loadProposal();
    });
  }

  loadProposal() {
    this.proposal = this.nckhDataService.getProposalById(this.proposalId);
  }

  getStatusBadge(status?: TopicStatus): string {
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

  getCurrentStepNumber(): number {
    if (!this.proposal) return 1;
    switch (this.proposal.status) {
      case 'NHAP':
      case 'CHO_KHOA_DUYET':
      case 'CHO_GVHD_DUYET':
      case 'TRA_CHINH_SUA':
      case 'CHO_DUYET_LAI':
        return 1;
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO':
      case 'DANG_XET_DUYET_HO_SO':
      case 'DAT_XET_DUYET_HO_SO':
      case 'KHONG_DAT_XET_DUYET_HO_SO':
        return 2;
      case 'CHO_NOP_THUYET_MINH':
        return 3;
      case 'DANG_XET_DUYET_THUYET_MINH':
        return 4;
      case 'DANG_THUC_HIEN':
        return 6;
      case 'CHO_NGHIEM_THU':
      case 'DANG_NGHIEM_THU':
      case 'DA_NGHIEM_THU':
      case 'HOAN_TAT_BUOC_07':
        return 7;
      case 'DA_CONG_NHAN_KET_QUA':
        return 8;
      case 'LUU_HO_SO':
      case 'TRIEN_KHAI_UNG_DUNG':
        return 9;
      default:
        return 1;
    }
  }
}
