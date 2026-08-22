import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { RegistrationRound, TopicProposal, UserProfile, DirectAssignmentTopic, TopicTarget, TopicType } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-round-management',
  templateUrl: './round-management.component.html',
  styleUrls: ['./round-management.component.scss'],
  standalone: false
})
export class RoundManagementComponent implements OnInit {
  currentUser!: UserProfile;
  rounds: RegistrationRound[] = [];
  proposals: TopicProposal[] = [];

  // Model Form Tạo / Sửa Đợt
  isEditMode = false;
  editingRoundId?: string;
  roundForm: Partial<RegistrationRound> = {
    name: '',
    code: '',
    academicYear: '2026-2027',
    target: 'GIANG_VIEN',
    type: 'TUYEN_CHON',
    status: 'DA_CONG_BO',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
    description: '',
    directTopics: []
  };

  // Temp direct topic input
  newDirectTopic: DirectAssignmentTopic = {
    id: '',
    code: '',
    name: '',
    field: 'Công nghệ thông tin & Trí tuệ nhân tạo',
    description: '',
    expectedOutcome: '',
    assignedFaculty: 'Khoa Công nghệ thông tin',
    budgetEst: 30000000,
    submissionDeadline: ''
  };

  // Selected round for adding direct topic or viewing details
  selectedRound?: RegistrationRound;

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
      }
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
    });

    this.nckhDataService.proposals$.subscribe(p => {
      this.proposals = p;
    });
  }

  getProposalsCountForRound(roundId: string): number {
    return this.proposals.filter(p => p.roundId === roundId).length;
  }

  getApprovedCountForRound(roundId: string): number {
    return this.proposals.filter(p => p.roundId === roundId && p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO').length;
  }

  // --- MODAL TẠO / SỬA ĐỢT ---
  openCreateRoundModal(content: TemplateRef<any>) {
    this.isEditMode = false;
    this.editingRoundId = undefined;
    const year = new Date().getFullYear();
    const nextIndex = this.rounds.length + 1;
    this.roundForm = {
      name: `Đợt ${nextIndex}: Đăng ký đề tài NCKH Cấp Trường năm ${year}`,
      code: `DOT-${year}-${String(nextIndex).padStart(2, '0')}`,
      academicYear: `${year}-${year + 1}`,
      target: 'GIANG_VIEN',
      type: 'TUYEN_CHON',
      status: 'DA_CONG_BO',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      description: 'Phòng Khoa học & Công nghệ thông báo tiếp nhận hồ sơ đăng ký đề tài NCKH cấp trường theo biểu mẫu quy định.',
      directTopics: []
    };
    this.modalService.open(content, { size: 'lg', centered: true, backdrop: 'static' });
  }

  openEditRoundModal(content: TemplateRef<any>, round: RegistrationRound) {
    this.isEditMode = true;
    this.editingRoundId = round.id;
    this.roundForm = JSON.parse(JSON.stringify(round));
    this.modalService.open(content, { size: 'lg', centered: true, backdrop: 'static' });
  }

  onTargetChange(target: TopicTarget) {
    this.roundForm.target = target;
    const year = new Date().getFullYear();
    const targetLabel = target === 'GIANG_VIEN' ? 'Giảng viên' : 'Sinh viên';
    if (!this.isEditMode) {
      this.roundForm.name = `Đợt ${this.rounds.length + 1}: Đăng ký đề tài NCKH (${targetLabel}) năm ${year}`;
    }
  }

  addDirectTopicToForm() {
    if (!this.newDirectTopic.name || !this.newDirectTopic.code) {
      alert('Vui lòng nhập Mã và Tên đề tài giao trực tiếp!');
      return;
    }
    this.newDirectTopic.id = `dt-${Date.now()}`;
    this.newDirectTopic.submissionDeadline = this.roundForm.endDate || '';
    if (!this.roundForm.directTopics) {
      this.roundForm.directTopics = [];
    }
    this.roundForm.directTopics.push({ ...this.newDirectTopic });
    
    // Reset temp
    this.newDirectTopic = {
      id: '',
      code: `DTT-${Date.now().toString().slice(-4)}`,
      name: '',
      field: 'Công nghệ thông tin & Trí tuệ nhân tạo',
      description: '',
      expectedOutcome: '01 Bài báo Scopus/ACI + Phần mềm thử nghiệm',
      assignedFaculty: 'Khoa Công nghệ thông tin',
      budgetEst: 30000000,
      submissionDeadline: ''
    };
  }

  removeDirectTopicFromForm(index: number) {
    this.roundForm.directTopics?.splice(index, 1);
  }

  saveRound() {
    if (!this.roundForm.name || !this.roundForm.code) {
      alert('Vui lòng nhập Tên đợt và Mã đợt đăng ký.');
      return;
    }

    if (this.isEditMode && this.editingRoundId) {
      this.nckhDataService.updateRound(this.editingRoundId, this.roundForm);
      this.alertType = 'success';
      this.alertMessage = `Đã cập nhật thành công thông tin đợt "${this.roundForm.name}"!`;
    } else {
      this.nckhDataService.createRound(this.roundForm);
      this.alertType = 'success';
      this.alertMessage = `Đã tạo và công bố thành công Đợt đăng ký mới "${this.roundForm.name}"!`;
    }

    this.modalService.dismissAll();
    setTimeout(() => { this.alertMessage = ''; }, 5000);
  }

  toggleRoundStatus(round: RegistrationRound) {
    const newStatus = round.status === 'DA_CONG_BO' ? 'DA_DONG' : 'DA_CONG_BO';
    const statusText = newStatus === 'DA_CONG_BO' ? 'Mở lại đợt' : 'Đóng đợt';
    if (confirm(`Bạn có chắc chắn muốn ${statusText} "${round.name}"?`)) {
      this.nckhDataService.updateRound(round.id, { status: newStatus });
      this.alertType = 'info';
      this.alertMessage = `Đã thay đổi trạng thái đợt thành: ${newStatus === 'DA_CONG_BO' ? 'Đang mở' : 'Đã đóng'}.`;
      setTimeout(() => { this.alertMessage = ''; }, 4000);
    }
  }

  deleteRound(round: RegistrationRound) {
    if (confirm(`Bạn có chắc chắn muốn xóa đợt đăng ký "${round.name}"? Các đề tài đã nộp trong đợt vẫn sẽ được lưu trữ.`)) {
      this.nckhDataService.deleteRound(round.id);
      this.alertType = 'warning';
      this.alertMessage = `Đã xóa đợt đăng ký "${round.name}".`;
      setTimeout(() => { this.alertMessage = ''; }, 4000);
    }
  }
}
