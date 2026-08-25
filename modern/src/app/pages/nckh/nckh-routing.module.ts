import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NckhDashboardComponent } from './dashboard/dashboard.component';
import { MyProposalsComponent } from './my-proposals/my-proposals.component';
import { ProposalFormComponent } from './proposal-form/proposal-form.component';
import { ReviewProposalsComponent } from './review-proposals/review-proposals.component';
import { RoundManagementComponent } from './round-management/round-management.component';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: NckhDashboardComponent },
  { path: 'de-tai-cua-toi', component: MyProposalsComponent },
  { path: 'dang-ky-moi', component: ProposalFormComponent },
  { path: 'chinh-sua/:id', component: ProposalFormComponent },
  { path: 'xet-duyet-ho-so', component: ReviewProposalsComponent },
  { path: 'cac-dot-dang-ky', component: RoundManagementComponent },
  { path: 'quan-ly-dot', component: RoundManagementComponent },
  { path: 'de-tai-don-vi', component: ReviewProposalsComponent },
  { path: 'danh-sach-toan-truong', component: ReviewProposalsComponent },
  { path: 'chi-tiet/:id', component: ProposalFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NckhRoutingModule {}
