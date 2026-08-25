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
  TopicType,
  TopicStatus
} from '../../../core/models/nckh.model';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss'],
  standalone: false
})
export class ProposalFormComponent implements OnInit {
  isEditMode = false;
  isReadOnly = false;
  proposalId?: string;
  currentUser!: UserProfile;
  rounds: RegistrationRound[] = [];
  selectedRound?: RegistrationRound;
  directTopics: DirectAssignmentTopic[] = [];
  isRoundFixed = false;
  pendingRoundId?: string;
  pendingDirectTopicId?: string;

  currentStep = 1;
  activePhaseTab = 1; // 1 to 9 (tương ứng 9 Bước quy trình PRD)
  reviewComment = '';

  readonly workflowSteps = [
    { id: 1, code: 'B01', title: 'Đăng ký đề tài', fullName: 'B01: Đăng ký đề tài (BM01)' },
    { id: 2, code: 'B02', title: 'Phê duyệt sơ bộ', fullName: 'B02: Phê duyệt sơ bộ (BM02 & BM03)' },
    { id: 3, code: 'B03', title: 'Viết thuyết minh', fullName: 'B03: Viết thuyết minh (BM04)' },
    { id: 4, code: 'B04', title: 'Phê duyệt TM', fullName: 'B04: Phê duyệt thuyết minh (BM06 & BM07)' },
    { id: 5, code: 'B05', title: 'Ký hợp đồng', fullName: 'B05: Ký hợp đồng & QĐ Giao việc (BM05)' },
    { id: 6, code: 'B06', title: 'BC tiến độ ½ TG', fullName: 'B06: Báo cáo tiến độ ½ thời gian (BM08)' },
    { id: 7, code: 'B07', title: 'Nghiệm thu đề tài', fullName: 'B07: Nghiệm thu đề tài (Nộp BC, Chỉnh sửa HĐNT & Thanh lý HĐ)' },
    { id: 8, code: 'B08', title: 'QĐ công nhận KQ', fullName: 'B08: Quyết định công nhận kết quả (BM15)' },
    { id: 9, code: 'B09', title: 'Triển khai & Lưu HS', fullName: 'B09: Triển khai ứng dụng & Lưu hồ sơ' }
  ];

  // Workflow Data cho toàn bộ 9 bước quy trình
  evalBm02Scores = { criteria1: 20, criteria2: 25, criteria3: 20, criteria4: 15, criteria5: 10, conclusion: 'DAT', notes: 'Hồ sơ đạt yêu cầu chuyên môn, tính cấp thiết và tính khả thi cao.' };
  evalBm06Scores = { score: 88, conclusion: 'THUC_HIEN', notes: 'Thuyết minh đề tài chi tiết, các mục tiêu và sản phẩm đầu ra rõ ràng, đúng tiến độ cam kết.' };
  evalBm11Scores = { score: 92, rank: 'XUAT_SAC', notes: 'Đề tài hoàn thành vượt mức sản phẩm đăng ký với 01 bài báo khoa học và phần mềm hoạt động tốt.' };
  minutesBm03 = { content: 'Hội đồng thống nhất đánh giá hồ sơ Đạt yêu cầu và đề nghị Chủ nhiệm đề tài tiến hành nộp Thuyết minh chi tiết BM04.', isSecretarySigned: true, isPresidentSigned: true };
  minutesBm07 = { content: 'Hội đồng nhất trí thông qua thuyết minh đề tài với kết luận: Thực hiện. Đề nghị P.KHCN hoàn tất thủ tục giao nhiệm vụ và ký Hợp đồng NCKH.', isSecretarySigned: true, isPresidentSigned: true };
  minutesBm12 = { content: 'Hội đồng nghiệm thu thống nhất đánh giá đề tài xếp loại Xuất sắc (92/100 điểm). Đề nghị Nhà trường ban hành Quyết định công nhận kết quả (BM15).', isSecretarySigned: true, isPresidentSigned: true };
  progressBm08 = { progressPercent: 65, statusSummary: 'Đã hoàn thành thu thập dữ liệu và huấn luyện mô hình cơ bản. Đang thử nghiệm tối ưu độ chính xác.', issues: 'Không có vướng mắc đáng kể.', submittedAt: '2027-01-15' };
  summaryBm09 = { finalSummary: 'Toàn bộ nội dung nghiên cứu theo thuyết minh BM04 đã được thực hiện đầy đủ.', papers: '01 bài báo khoa học trên Tạp chí chuyên ngành (Scopus/ACI).', software: '01 Hệ thống phần mềm web demo đã đóng gói Docker.', submittedAt: '2027-07-20' };
  explanationBm13 = { content: 'Đã bổ sung và giải trình đầy đủ các điểm lưu ý theo kết luận tại Biên bản họp Hội đồng nghiệm thu BM12.', isApproved: true };
  finalStatusChoice: 'TRIEN_KHAI_UNG_DUNG' | 'LUU_HO_SO' = 'TRIEN_KHAI_UNG_DUNG';

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
    budgetSchoolFunded: 30000000,
    auditLogs: []
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
          this.proposal.authorName = u.fullName;
          this.proposal.authorEmail = u.email;
          this.proposal.authorIdentifierCode = u.identifierCode;
          this.proposal.authorPhone = u.phone || '0912 345 678';
          this.proposal.authorAcademicTitle = u.academicTitle || 'Giảng viên';

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

    this.route.queryParams.subscribe(qParams => {
      if (qParams['roundId']) {
        this.pendingRoundId = qParams['roundId'];
        this.isRoundFixed = true;
      }
      if (qParams['directTopicId']) {
        this.pendingDirectTopicId = qParams['directTopicId'];
      }
      this.applyPendingParams();
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
      this.applyPendingParams();
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.proposalId = params['id'];
        this.loadExistingProposal(params['id']);
      } else {
        this.isEditMode = false;
        this.isReadOnly = false;
      }
    });

    this.nckhDataService.proposals$.subscribe(() => {
      if (this.proposalId) {
        this.loadExistingProposal(this.proposalId);
      }
    });
  }

  loadExistingProposal(id: string) {
    const existing = this.nckhDataService.getProposalById(id);
    if (existing) {
      this.proposal = JSON.parse(JSON.stringify(existing));
      this.isEditMode = true;
      
      // Determine if read-only
      const isAuthor = this.currentUser && this.currentUser.id === existing.authorId;
      const isEditableStatus = existing.status === 'NHAP' || existing.status === 'TRA_CHINH_SUA';
      this.isReadOnly = !(isAuthor && isEditableStatus);

      const round = this.rounds.find(r => r.id === this.proposal.roundId);
      if (round) this.selectRound(round);

      this.activePhaseTab = this.getCurrentStepNumber();
    }
  }

  applyPendingParams() {
    if (this.rounds.length === 0) return;

    if (this.pendingRoundId) {
      const matched = this.rounds.find(x => x.id === this.pendingRoundId);
      if (matched) {
        this.selectRound(matched);
        this.isRoundFixed = true;
        if (matched.target && !this.isEditMode) {
          this.proposal.target = matched.target;
        }
      }
    } else if (!this.proposal.roundId && !this.isEditMode) {
      const defaultRound = this.proposal.target === 'SINH_VIEN' 
        ? this.rounds.find(x => x.target === 'SINH_VIEN') || this.rounds[0]
        : this.rounds.find(x => x.target === 'GIANG_VIEN') || this.rounds[0];
      if (defaultRound) this.selectRound(defaultRound);
    }

    if (this.pendingDirectTopicId && this.directTopics.length > 0 && !this.isEditMode) {
      const dt = this.directTopics.find(x => x.id === this.pendingDirectTopicId);
      if (dt) {
        this.proposal.type = 'GIAO_TRUC_TIEP';
        this.onDirectTopicSelect(dt);
      }
    }
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
    if (this.isReadOnly) return;
    this.proposal.type = type;
    if (type === 'GIAO_TRUC_TIEP' && this.directTopics.length > 0) {
      this.onDirectTopicSelect(this.directTopics[0]);
    }
  }

  onDirectTopicSelect(dt: DirectAssignmentTopic) {
    if (this.isReadOnly) return;
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
    if (this.isReadOnly) return;
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
    if (this.isReadOnly) return;
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
    if (this.isReadOnly) return;
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

  enableEditMode() {
    if (this.isStepEditable(1)) {
      this.isReadOnly = false;
    }
  }

  goBack() {
    this.router.navigate(['/nckh/de-tai-cua-toi']);
  }

  // Giả lập Ký số & Upload PDF
  simulateDigitalSignature() {
    if (this.isReadOnly) return;
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

  // --- REVIEW ACTIONS (Dành cho Cán bộ xét duyệt Tuyến đầu Bước 01) ---
  canReview(): boolean {
    if (!this.proposal || !this.currentUser || !this.proposalId) return false;
    const status = this.proposal.status;
    const role = this.currentUser.role;

    // Trưởng Khoa chỉ duyệt hồ sơ Giảng viên thuộc Khoa mình
    if (role === 'TRUONG_KHOA') {
      return this.proposal.target === 'GIANG_VIEN' && 
             (status === 'CHO_KHOA_DUYET' || status === 'CHO_DUYET_LAI') && 
             this.proposal.faculty === this.currentUser.unit;
    }

    // Giảng viên hướng dẫn chỉ duyệt hồ sơ Sinh viên mình hướng dẫn
    if (role === 'GIANG_VIEN_HD') {
      return this.proposal.target === 'SINH_VIEN' && 
             status === 'CHO_GVHD_DUYET' && 
             (this.proposal.advisorId === this.currentUser.id || this.proposal.advisorEmail === this.currentUser.email);
    }

    // P.KHCN hoặc Admin có quyền duyệt
    if (role === 'P_KHCN' || role === 'ADMIN') {
      return status === 'CHO_KHOA_DUYET' || status === 'CHO_GVHD_DUYET' || status === 'CHO_DUYET_LAI';
    }

    return false;
  }

  approveProposal() {
    if (!this.proposalId) return;
    const comment = this.reviewComment || 'Hồ sơ đầy đủ, đạt yêu cầu thẩm định chuyên môn.';
    const res = this.nckhDataService.approveProposal(this.proposalId, comment);
    if (res) {
      this.alertType = 'success';
      this.alertMessage = 'Đã phê duyệt hồ sơ đề tài thành công!';
    }
    this.reviewComment = '';
  }

  rejectProposal() {
    if (!this.proposalId) return;
    const comment = this.reviewComment || 'Hồ sơ cần bổ sung, chỉnh sửa lại một số nội dung.';
    const res = this.nckhDataService.returnProposal(this.proposalId, comment);
    if (res) {
      this.alertType = 'warning';
      this.alertMessage = 'Đã gửi yêu cầu chỉnh sửa hồ sơ về cho Chủ nhiệm đề tài.';
    }
    this.reviewComment = '';
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
    if (!this.proposal || !this.proposal.status) return 1;
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
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU':
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

  getStepState(stepNumber: number): 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' {
    const current = this.getCurrentStepNumber();
    if (stepNumber < current) return 'COMPLETED';
    if (stepNumber === current) return 'IN_PROGRESS';
    return 'PENDING';
  }

  isStepEditable(stepNumber: number): boolean {
    return this.getStepState(stepNumber) === 'IN_PROGRESS';
  }

  selectPhaseTab(step: number) {
    this.activePhaseTab = step;
  }

  submitBm02Evaluation() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Phiếu đánh giá hồ sơ (BM02) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  signBm03Minutes() {
    this.alertType = 'success';
    this.alertMessage = 'Đã ký duyệt Biên bản họp Hội đồng xét duyệt hồ sơ (BM03)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitBm04Outline() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Thuyết minh đề tài & Dự toán chi tiết (BM04) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitBm06Evaluation() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Phiếu đánh giá thuyết minh (BM06) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  signBm07Minutes() {
    this.alertType = 'success';
    this.alertMessage = 'Đã ký duyệt Biên bản xét duyệt thuyết minh (BM07)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  issueBm05Decision() {
    this.alertType = 'success';
    this.alertMessage = 'Đã ban hành Quyết định giao nhiệm vụ (BM05) & ký Hợp đồng NCKH!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitBm08Progress() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Báo cáo tiến độ giữa kỳ (BM08) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitBm09Summary() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Báo cáo tổng kết đề tài & Danh mục sản phẩm (BM09)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitBm11Evaluation() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Phiếu đánh giá nghiệm thu (BM11) thành công!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  signBm12Minutes() {
    this.alertType = 'success';
    this.alertMessage = 'Đã ký hoàn tất Biên bản họp Hội đồng nghiệm thu (BM12)!';
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  submitBm13Explanation() {
    this.alertType = 'success';
    this.alertMessage = 'Đã nộp Báo cáo giải trình sau nghiệm thu (BM13) thành công!';
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: 'DA_NGHIEM_THU',
        statusText: 'Đã hoàn tất giải trình BM13 & Đạt nghiệm thu'
      });
      if (this.proposal) {
        this.proposal.status = 'DA_NGHIEM_THU';
        this.proposal.statusText = 'Đã hoàn tất giải trình BM13 & Đạt nghiệm thu';
      }
    }
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  issueBm15Decision() {
    this.alertType = 'success';
    this.alertMessage = 'Đã công bố Quyết định công nhận kết quả đề tài NCKH (BM15)!';
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: 'DA_CONG_NHAN_KET_QUA',
        statusText: 'Đã công nhận kết quả (BM15)'
      });
    }
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  updateFinalStatus(status: 'TRIEN_KHAI_UNG_DUNG' | 'LUU_HO_SO') {
    this.finalStatusChoice = status;
    const statusText = status === 'TRIEN_KHAI_UNG_DUNG' ? 'Triển khai ứng dụng' : 'Lưu hồ sơ lưu trữ';
    if (this.proposalId) {
      this.nckhDataService.updateProposal(this.proposalId, {
        status: status,
        statusText: statusText
      });
    }
    this.alertType = 'success';
    this.alertMessage = `Đã cập nhật trạng thái cuối của đề tài: ${statusText}!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }
}
