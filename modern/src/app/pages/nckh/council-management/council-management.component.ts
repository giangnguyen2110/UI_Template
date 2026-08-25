import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { 
  ScientificCouncil, 
  CouncilMember, 
  CouncilType, 
  CouncilRole, 
  CouncilStatus, 
  TopicProposal, 
  TopicStatus,
  RegistrationRound, 
  UserProfile 
} from '../../../core/models/nckh.model';

@Component({
  selector: 'app-council-management',
  templateUrl: './council-management.component.html',
  styleUrls: ['./council-management.component.scss'],
  standalone: false
})
export class CouncilManagementComponent implements OnInit {
  currentUser!: UserProfile;
  councils: ScientificCouncil[] = [];
  proposals: TopicProposal[] = [];
  rounds: RegistrationRound[] = [];

  // Bộ lọc tìm kiếm
  searchTerm: string = '';
  selectedCouncilType: string = 'ALL';
  selectedFaculty: string = 'ALL';
  selectedStatus: string = 'ALL';

  // Phân trang 5 mục / trang
  page = 1;
  pageSize = 5;
  readonly Math = Math;

  // Form Tạo / Chỉnh sửa Hội đồng
  isEditMode = false;
  editingCouncilId?: string;
  councilForm: Partial<ScientificCouncil> = {
    code: '',
    name: '',
    councilType: 'XET_DUYET_HO_SO',
    roundId: '',
    roundName: '',
    faculty: 'Khoa Công nghệ thông tin',
    decisionNumber: '',
    decisionDate: new Date().toISOString().split('T')[0],
    meetingDate: '',
    meetingLocation: 'Phòng Hội thảo A204 - Tòa nhà Trung tâm',
    status: 'DA_BAN_HANH',
    members: [],
    assignedProposalIds: [],
    notes: ''
  };

  // Thành viên thêm trong Form
  newMember: CouncilMember = {
    id: '',
    fullName: '',
    academicTitle: 'Tiến sĩ',
    roleInCouncil: 'UY_VIEN',
    workUnit: 'Khoa Công nghệ thông tin',
    email: '',
    phone: ''
  };

  // Hội đồng đang xem chi tiết
  selectedCouncil?: ScientificCouncil;

  // Thông báo Alert
  alertMessage = '';
  alertType = 'success';

  constructor(
    public nckhDataService: NckhDataService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
      }
    });

    this.nckhDataService.councils$.subscribe(c => {
      this.councils = c;
    });

    this.nckhDataService.proposals$.subscribe(p => {
      this.proposals = p;
    });

    this.nckhDataService.rounds$.subscribe(r => {
      this.rounds = r;
    });
  }

  // Danh mục Khoa
  get facultiesList(): string[] {
    const list = new Set<string>();
    this.councils.forEach(c => { if (c.faculty) list.add(c.faculty); });
    list.add('Khoa Công nghệ thông tin');
    list.add('Khoa Cơ khí - Động lực');
    list.add('Khoa Điện - Điện tử');
    list.add('Khoa Quản trị - Kinh tế quốc tế');
    list.add('Khoa Công nghệ Hóa học & Thực phẩm');
    list.add('Khoa Ngoại ngữ');
    list.add('Khoa Luật');
    return Array.from(list);
  }

  // Lọc danh sách Hội đồng
  get filteredCouncils(): ScientificCouncil[] {
    return this.councils.filter(c => {
      if (this.searchTerm && this.searchTerm.trim() !== '') {
        const term = this.searchTerm.toLowerCase().trim();
        const matchName = c.name?.toLowerCase().includes(term);
        const matchCode = c.code?.toLowerCase().includes(term);
        const matchDecision = c.decisionNumber?.toLowerCase().includes(term);
        if (!matchName && !matchCode && !matchDecision) return false;
      }

      if (this.selectedCouncilType !== 'ALL') {
        if (c.councilType !== this.selectedCouncilType) return false;
      }

      if (this.selectedFaculty !== 'ALL') {
        if (c.faculty !== this.selectedFaculty) return false;
      }

      if (this.selectedStatus !== 'ALL') {
        if (c.status !== this.selectedStatus) return false;
      }

      return true;
    });
  }

  get pagedCouncils(): ScientificCouncil[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.filteredCouncils.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCouncils.length / this.pageSize) || 1;
  }

  get pages(): number[] {
    const total = this.totalPages;
    const res: number[] = [];
    for (let i = 1; i <= total; i++) {
      res.push(i);
    }
    return res;
  }

  setPage(p: number) {
    if (p < 1 || p > this.totalPages) return;
    this.page = p;
  }

  onFilterChange() {
    this.page = 1;
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedCouncilType = 'ALL';
    this.selectedFaculty = 'ALL';
    this.selectedStatus = 'ALL';
    this.page = 1;
  }

  // --- MODAL TẠO & SỬA HỘI ĐỒNG ---
  openCreateCouncilModal(content: TemplateRef<any>) {
    this.isEditMode = false;
    this.editingCouncilId = undefined;
    const count = this.councils.length + 1;
    this.councilForm = {
      code: `HĐ-${new Date().getFullYear()}-B02-0${count}`,
      name: `Hội đồng Xét duyệt Đề tài NCKH Lĩnh vực CNTT (Đợt ${count})`,
      councilType: 'XET_DUYET_HO_SO',
      roundId: this.rounds[0]?.id || '',
      roundName: this.rounds[0]?.name || '',
      faculty: 'Khoa Công nghệ thông tin',
      decisionNumber: `${Math.floor(120 + count * 15)}/QĐ-ĐHNT-KHCN`,
      decisionDate: new Date().toISOString().split('T')[0],
      meetingDate: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0] + ' 08:30',
      meetingLocation: 'Phòng Hội thảo A204 - Tòa nhà Trung tâm',
      status: 'DA_BAN_HANH',
      members: [
        {
          id: `cm-${Date.now()}-1`,
          fullName: 'PGS.TS. Trần Văn Hùng',
          academicTitle: 'Phó Giáo sư, Tiến sĩ',
          roleInCouncil: 'CHU_TICH',
          workUnit: 'Hội đồng Khoa học & Đào tạo',
          email: 'chutichhd@gmail.com',
          phone: '0918 222 333'
        },
        {
          id: `cm-${Date.now()}-2`,
          fullName: 'TS. Lê Hoàng Nam',
          academicTitle: 'Tiến sĩ',
          roleInCouncil: 'UY_VIEN_PHAN_BIEN_1',
          workUnit: 'Khoa Công nghệ thông tin',
          email: 'truongkhoa@gmail.com',
          phone: '0903 111 222'
        },
        {
          id: `cm-${Date.now()}-3`,
          fullName: 'ThS. Nguyễn Thị Thu',
          academicTitle: 'Thạc sĩ Quản lý KHCN',
          roleInCouncil: 'THU_KY',
          workUnit: 'Phòng Khoa học & Công nghệ',
          email: 'pkhcn@gmail.com',
          phone: '0909 888 999'
        }
      ],
      assignedProposalIds: [],
      notes: 'Thành lập Hội đồng đánh giá theo Quy chế NCKH DNTU (PRD FR-17).'
    };
    this.resetNewMemberInput();
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  openEditCouncilModal(content: TemplateRef<any>, council: ScientificCouncil) {
    this.isEditMode = true;
    this.editingCouncilId = council.id;
    this.councilForm = {
      ...council,
      members: [...council.members],
      assignedProposalIds: [...(council.assignedProposalIds || [])]
    };
    this.resetNewMemberInput();
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }

  openDetailCouncilModal(content: TemplateRef<any>, council: ScientificCouncil) {
    this.selectedCouncil = council;
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  resetNewMemberInput() {
    this.newMember = {
      id: '',
      fullName: '',
      academicTitle: 'Tiến sĩ',
      roleInCouncil: 'UY_VIEN',
      workUnit: 'Khoa Công nghệ thông tin',
      email: '',
      phone: ''
    };
  }

  addMemberToForm() {
    if (!this.newMember.fullName || this.newMember.fullName.trim() === '') {
      alert('Vui lòng nhập họ và tên của Thành viên Hội đồng.');
      return;
    }

    const memberToAdd: CouncilMember = {
      ...this.newMember,
      id: `cm-${Date.now()}`
    };

    this.councilForm.members = [...(this.councilForm.members || []), memberToAdd];
    this.resetNewMemberInput();
  }

  removeMemberFromForm(index: number) {
    if (this.councilForm.members) {
      this.councilForm.members.splice(index, 1);
    }
  }

  toggleProposalSelection(propId: string) {
    if (!this.councilForm.assignedProposalIds) {
      this.councilForm.assignedProposalIds = [];
    }
    const idx = this.councilForm.assignedProposalIds.indexOf(propId);
    if (idx > -1) {
      this.councilForm.assignedProposalIds.splice(idx, 1);
    } else {
      this.councilForm.assignedProposalIds.push(propId);
    }
  }

  isProposalAssignedToForm(propId: string): boolean {
    return this.councilForm.assignedProposalIds?.includes(propId) || false;
  }

  saveCouncil() {
    if (!this.councilForm.name || !this.councilForm.code || !this.councilForm.decisionNumber) {
      alert('Vui lòng nhập đầy đủ các thông tin bắt buộc (Tên HĐ, Mã HĐ, Số Quyết định).');
      return;
    }

    if (!this.councilForm.members || this.councilForm.members.length === 0) {
      alert('Hội đồng phải có ít nhất 1 thành viên (Chủ tịch / Thư ký).');
      return;
    }

    if (this.isEditMode && this.editingCouncilId) {
      this.nckhDataService.updateCouncil(this.editingCouncilId, this.councilForm);
      this.alertType = 'success';
      this.alertMessage = `Đã cập nhật thành công thông tin Hội đồng "${this.councilForm.name}".`;
    } else {
      this.nckhDataService.createCouncil(this.councilForm);
      this.alertType = 'success';
      this.alertMessage = `Đã thành lập và ban hành Quyết định Hội đồng "${this.councilForm.name}" thành công!`;
    }

    this.modalService.dismissAll();
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  deleteCouncil(council: ScientificCouncil) {
    if (confirm(`Bạn có chắc chắn muốn xóa Hội đồng "${council.name}" (Mã: ${council.code})?`)) {
      this.nckhDataService.deleteCouncil(council.id);
      this.alertType = 'warning';
      this.alertMessage = `Đã xóa Hội đồng "${council.name}".`;
      setTimeout(() => { this.alertMessage = ''; }, 5000);
    }
  }

  toggleCouncilStatus(council: ScientificCouncil) {
    const nextStatus: CouncilStatus = 
      council.status === 'DA_BAN_HANH' ? 'DANG_HOP' : 
      (council.status === 'DANG_HOP' ? 'DA_HOAN_THANH' : 'DA_BAN_HANH');
    
    this.nckhDataService.updateCouncil(council.id, { status: nextStatus });
    this.alertType = 'info';
    this.alertMessage = `Đã chuyển trạng thái Hội đồng sang: ${this.getCouncilStatusBadge(nextStatus).text}`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // --- HELPERS HIỂN THỊ ---
  getCouncilTypeBadge(type: CouncilType): { text: string; class: string } {
    switch (type) {
      case 'XET_DUYET_HO_SO':
        return { text: 'Bước 02: HĐ Xét duyệt sơ bộ hồ sơ', class: 'badge bg-primary-subtle text-primary' };
      case 'XET_DUYET_THUYET_MINH':
        return { text: 'Bước 04: HĐ Xét duyệt Thuyết minh', class: 'badge bg-info-subtle text-info' };
      case 'NGHIEM_THU':
        return { text: 'Bước 07: HĐ Đánh giá Nghiệm thu', class: 'badge bg-danger-subtle text-danger' };
      default:
        return { text: 'Hội đồng Khoa học', class: 'badge bg-light text-dark' };
    }
  }

  getCouncilStatusBadge(status: CouncilStatus): { text: string; class: string } {
    switch (status) {
      case 'DANG_THANH_LAP':
        return { text: 'Đang dự thảo', class: 'badge bg-secondary-subtle text-secondary' };
      case 'DA_BAN_HANH':
        return { text: 'Đã ban hành QĐ', class: 'badge bg-success-subtle text-success' };
      case 'DANG_HOP':
        return { text: 'Đang tổ chức họp', class: 'badge bg-warning text-dark' };
      case 'DA_HOAN_THANH':
        return { text: 'Đã hoàn thành đánh giá', class: 'badge bg-info text-white' };
      default:
        return { text: 'Không xác định', class: 'badge bg-light text-dark' };
    }
  }

  getMemberRoleTitle(role: CouncilRole): string {
    switch (role) {
      case 'CHU_TICH': return 'Chủ tịch Hội đồng';
      case 'PHO_CHU_TICH': return 'Phó Chủ tịch';
      case 'UY_VIEN_PHAN_BIEN_1': return 'Ủy viên Phản biện 1';
      case 'UY_VIEN_PHAN_BIEN_2': return 'Ủy viên Phản biện 2';
      case 'UY_VIEN': return 'Ủy viên Hội đồng';
      case 'THU_KY': return 'Thư ký Khoa học';
      default: return 'Thành viên';
    }
  }

  getMemberRoleBadgeClass(role: CouncilRole): string {
    switch (role) {
      case 'CHU_TICH': return 'bg-danger text-white';
      case 'PHO_CHU_TICH': return 'bg-warning text-dark';
      case 'UY_VIEN_PHAN_BIEN_1': return 'bg-primary text-white';
      case 'UY_VIEN_PHAN_BIEN_2': return 'bg-info text-white';
      case 'THU_KY': return 'bg-success text-white';
      default: return 'bg-secondary-subtle text-secondary';
    }
  }

  getProposalsForCouncil(assignedIds?: string[]): TopicProposal[] {
    if (!assignedIds || assignedIds.length === 0) return [];
    return this.proposals.filter(p => assignedIds.includes(p.id));
  }

  getPhaseBadge(status: TopicStatus): { text: string; class: string } {
    switch (status) {
      case 'NHAP':
      case 'CHO_KHOA_DUYET':
      case 'CHO_GVHD_DUYET':
      case 'TRA_CHINH_SUA':
      case 'CHO_DUYET_LAI':
        return { text: 'B01: Đăng ký đề tài', class: 'badge bg-secondary-subtle text-secondary' };
      case 'CHO_HOI_DONG_XET_DUYET_HO_SO':
      case 'DANG_XET_DUYET_HO_SO':
      case 'DAT_XET_DUYET_HO_SO':
        return { text: 'B02: Phê duyệt sơ bộ', class: 'badge bg-primary-subtle text-primary' };
      case 'CHO_NOP_THUYET_MINH':
      case 'DANG_XET_DUYET_THUYET_MINH':
        return { text: 'B03: Viết thuyết minh', class: 'badge bg-info-subtle text-info' };
      case 'DANG_THUC_HIEN':
        return { text: 'B06: BC tiến độ ½ TG', class: 'badge bg-warning-subtle text-warning' };
      case 'CHO_NGHIEM_THU':
      case 'DANG_NGHIEM_THU':
      case 'DA_NGHIEM_THU':
      case 'HOAN_TAT_BUOC_07':
        return { text: 'B07: Nghiệm thu đề tài', class: 'badge bg-danger-subtle text-danger' };
      case 'YEU_CAU_CHINH_SUA_NGHIEM_THU':
        return { text: 'B07: Chỉnh sửa góp ý HĐNT', class: 'badge bg-warning text-dark' };
      case 'DA_CONG_NHAN_KET_QUA':
      case 'LUU_HO_SO':
      case 'TRIEN_KHAI_UNG_DUNG':
        return { text: 'B08-B09: Hoàn thành', class: 'badge bg-success-subtle text-success' };
      default:
        return { text: 'Quy trình NCKH', class: 'badge bg-light text-dark' };
    }
  }
}
