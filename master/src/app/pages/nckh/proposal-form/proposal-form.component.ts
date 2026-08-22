import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NckhDataService, DEMO_USERS } from '../../../core/services/nckh-data.service';
import { 
  TopicProposal, 
  RegistrationRound, 
  DirectAssignmentTopic, 
  ResearchMember, 
  UserProfile, 
  TopicTarget, 
  TopicType 
} from '../../../core/models/nckh.model';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss'],
  standalone: false
})
export class ProposalFormComponent implements OnInit {
  isEditMode = false;
  proposalId?: string;
  currentUser!: UserProfile;
  rounds: RegistrationRound[] = [];
  selectedRound?: RegistrationRound;
  directTopics: DirectAssignmentTopic[] = [];

  currentStep = 1;

  // Form Model
  proposal: Partial<TopicProposal> = {
    title: '',
    roundId: '',
    type: 'TUYEN_CHON',
    target: 'GIANG_VIEN',
    field: 'Công nghệ thông tin & Trí tuệ nhân tạo',
    faculty: 'Khoa Công nghệ thông tin',
    durationMonths: 12,
    startDateExpected: '2026-10-01',
    endDateExpected: '2027-09-30',
    necessity: '',
    objectives: '',
    mainContents: '',
    methods: '',
    expectedProducts: '',
    applicability: '',
    members: [],
    budgetTotal: 30000000,
    budgetSchoolFunded: 30000000
  };

  // Temp member input
  newMember: ResearchMember = {
    id: '',
    fullName: '',
    identifierCode: '',
    unit: 'Khoa Công nghệ thông tin',
    roleInProject: 'Thành viên nghiên cứu chính'
  };

  // List of potential advisors (for students)
  advisorsList = DEMO_USERS.filter(u => u.role === 'GIANG_VIEN' || u.role === 'GIANG_VIEN_HD' || u.role === 'TRUONG_KHOA');

  alertMessage = '';
  alertType = 'success';
  isSimulatingSign = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public nckhDataService: NckhDataService
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
        if (!this.isEditMode) {
          this.proposal.target = (u.role === 'SINH_VIEN' ? 'SINH_VIEN' : 'GIANG_VIEN') as TopicTarget;
          this.proposal.faculty = u.unit || 'Khoa Công nghệ thông tin';
          if (u.role === 'SINH_VIEN') {
            this.proposal.advisorId = 'u-gvhd-01';
            this.proposal.advisorName = 'ThS. Phạm Hải Đăng';
            this.proposal.advisorEmail = 'gvhd@gmail.com';
            this.proposal.advisorTitle = 'Thạc sĩ';
            this.proposal.durationMonths = 6;
            this.proposal.budgetTotal = 10000000;
            this.proposal.budgetSchoolFunded = 10000000;
          }
        }
      }
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
      if (this.rounds.length > 0 && !this.proposal.roundId) {
        const defaultRound = this.proposal.target === 'SINH_VIEN' 
          ? this.rounds.find(x => x.target === 'SINH_VIEN') || this.rounds[0]
          : this.rounds.find(x => x.target === 'GIANG_VIEN') || this.rounds[0];
        this.selectRound(defaultRound);
      }
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.proposalId = params['id'];
        const existing = this.nckhDataService.getProposalById(params['id']);
        if (existing) {
          this.proposal = JSON.parse(JSON.stringify(existing));
          const round = this.rounds.find(r => r.id === this.proposal.roundId);
          if (round) this.selectRound(round);
        }
      }
    });
  }

  selectRound(round: RegistrationRound) {
    this.selectedRound = round;
    this.proposal.roundId = round.id;
    this.proposal.roundName = round.name;
    this.directTopics = round.directTopics || [];
  }

  onRoundChange(event: any) {
    const roundId = event.target.value;
    const r = this.rounds.find(x => x.id === roundId);
    if (r) this.selectRound(r);
  }

  onTypeChange(type: TopicType) {
    this.proposal.type = type;
    if (type === 'GIAO_TRUC_TIEP' && this.directTopics.length > 0) {
      this.onDirectTopicSelect(this.directTopics[0]);
    }
  }

  onDirectTopicSelect(dt: DirectAssignmentTopic) {
    this.proposal.directTopicId = dt.id;
    this.proposal.title = dt.name;
    this.proposal.field = dt.field;
    this.proposal.faculty = dt.assignedFaculty;
    this.proposal.necessity = dt.description;
    this.proposal.expectedProducts = dt.expectedOutcome;
    this.proposal.budgetTotal = dt.budgetEst;
    this.proposal.budgetSchoolFunded = dt.budgetEst;
  }

  onAdvisorChange(event: any) {
    const advId = event.target.value;
    const adv = this.advisorsList.find(a => a.id === advId);
    if (adv) {
      this.proposal.advisorId = adv.id;
      this.proposal.advisorName = adv.fullName;
      this.proposal.advisorEmail = adv.email;
      this.proposal.advisorTitle = adv.academicTitle || 'Giảng viên';
    }
  }

  addMember() {
    if (!this.newMember.fullName || !this.newMember.identifierCode) {
      alert('Vui lòng nhập Họ tên và Mã định danh (Mã GV/SV) của thành viên!');
      return;
    }
    this.newMember.id = `m-${Date.now()}`;
    if (!this.proposal.members) this.proposal.members = [];
    this.proposal.members.push({ ...this.newMember });
    this.newMember = {
      id: '',
      fullName: '',
      identifierCode: '',
      unit: 'Khoa Công nghệ thông tin',
      roleInProject: 'Thành viên nghiên cứu chính'
    };
  }

  removeMember(index: number) {
    this.proposal.members?.splice(index, 1);
  }

  setStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Giả lập Ký số & Upload PDF
  simulateDigitalSignature() {
    this.isSimulatingSign = true;
    setTimeout(() => {
      const isGV = this.proposal.target === 'GIANG_VIEN';
      const formCode = isGV ? 'BM01A' : 'BM01B';
      this.proposal.signedPdfFile = {
        fileName: `${formCode}_${this.currentUser.identifierCode}_Signed.pdf`,
        fileSize: '1.6 MB',
        uploadedAt: new Date().toLocaleString('vi-VN'),
        signatureStatus: 'DA_KY',
        signedBy: `${this.currentUser.fullName} (Mã số: ${this.currentUser.identifierCode} - Chứng thư số DNTU CA hợp lệ)`
      };
      this.isSimulatingSign = false;
      this.alertType = 'success';
      this.alertMessage = 'Đã hoàn tất Ký số và đính kèm file BM01 thành công!';
    }, 800);
  }

  saveDraft() {
    if (!this.proposal.title) {
      alert('Vui lòng nhập Tên đề tài trước khi lưu nháp.');
      return;
    }

    if (this.isEditMode && this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, this.proposal);
      this.alertType = 'success';
      this.alertMessage = 'Đã cập nhật hồ sơ nháp thành công!';
    } else {
      const created = this.nckhDataService.createProposal(this.proposal);
      this.proposalId = created.id;
      this.isEditMode = true;
      this.alertType = 'success';
      this.alertMessage = 'Đã lưu hồ sơ nháp thành công!';
    }
    setTimeout(() => { this.router.navigate(['/nckh/de-tai-cua-toi']); }, 1000);
  }

  submitProposal() {
    if (!this.proposal.title) {
      alert('Vui lòng nhập Tên đề tài.');
      this.currentStep = 1;
      return;
    }

    if (!this.proposal.signedPdfFile || this.proposal.signedPdfFile.signatureStatus !== 'DA_KY') {
      alert('Bạn phải thực hiện ký số và tải lên bản PDF BM01 đã ký trước khi nộp hồ sơ.');
      this.currentStep = 4;
      return;
    }

    let id = this.proposalId;
    if (this.isEditMode && id) {
      this.nckhDataService.updateProposal(id, this.proposal);
    } else {
      const created = this.nckhDataService.createProposal(this.proposal);
      id = created.id;
    }

    const res = this.nckhDataService.submitProposal(id!);
    if (res.success) {
      this.alertType = 'success';
      this.alertMessage = res.message;
      setTimeout(() => {
        this.router.navigate(['/nckh/de-tai-cua-toi']);
      }, 1200);
    } else {
      this.alertType = 'danger';
      this.alertMessage = res.message;
    }
  }
}
