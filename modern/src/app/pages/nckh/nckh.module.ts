import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { NckhRoutingModule } from './nckh-routing.module';
import { NckhDashboardComponent } from './dashboard/dashboard.component';
import { MyProposalsComponent } from './my-proposals/my-proposals.component';
import { ProposalFormComponent } from './proposal-form/proposal-form.component';
import { ReviewProposalsComponent } from './review-proposals/review-proposals.component';
import { RoundManagementComponent } from './round-management/round-management.component';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';

@NgModule({
  declarations: [
    NckhDashboardComponent,
    MyProposalsComponent,
    ProposalFormComponent,
    ReviewProposalsComponent,
    RoundManagementComponent,
    ProposalDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModalModule,
    NgbTooltipModule,
    NckhRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NckhModule {}
