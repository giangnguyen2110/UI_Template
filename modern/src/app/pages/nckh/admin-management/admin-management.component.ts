import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { NckhDataService } from '../../../core/services/nckh-data.service';
import { UserProfile, UserRole, BlacklistRecord } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss'],
  standalone: false
})
export class AdminManagementComponent implements OnInit {
  currentUser!: UserProfile;
  activeTab: 'users' | 'blacklist' = 'users';

  // Dữ liệu người dùng
  users: UserProfile[] = [];
  searchTerm: string = '';
  selectedRoleFilter: string = 'ALL';
  selectedUnitFilter: string = 'ALL';
  selectedStatusFilter: string = 'ALL';

  // Dữ liệu Blacklist
  blacklistRecords: BlacklistRecord[] = [];
  selectedBlacklistFilter: string = 'ALL';
  selectedBlacklistRecord?: BlacklistRecord;

  // Modals & Forms
  selectedUser?: UserProfile;
  newRole: UserRole = 'GIANG_VIEN';
  newRoleTitle: string = 'Giảng viên';
  newUnit: string = 'Khoa Công nghệ thông tin';
  newAcademicTitle: string = 'Thạc sĩ';

  // Create User Form
  createUserData: Partial<UserProfile> = {
    fullName: '',
    email: '',
    identifierCode: '',
    role: 'GIANG_VIEN',
    roleTitle: 'Giảng viên',
    unit: 'Khoa Công nghệ thông tin',
    academicTitle: 'Thạc sĩ',
    phone: ''
  };

  // Blacklist Approval Form
  blacklistDecisionNumber: string = 'QĐ-KL-2026-';
  blacklistAdminNotes: string = 'Đồng ý phê duyệt hình thức kỷ luật: Đưa vào danh sách Blacklist hạn chế tham gia NCKH trong vòng 01 năm theo Điều 28 Quy chế NCKH Nhà trường.';
  
  // Alert
  alertMessage = '';
  alertType = 'success';

  // Phân trang
  pageUsers = 1;
  pageSizeUsers = 7;
  pageBlacklist = 1;
  pageSizeBlacklist = 5;
  readonly Math = Math;

  readonly rolesList: { value: UserRole; label: string }[] = [
    { value: 'GIANG_VIEN', label: 'Giảng viên' },
    { value: 'SINH_VIEN', label: 'Sinh viên' },
    { value: 'TRUONG_KHOA', label: 'Trưởng Khoa' },
    { value: 'GIANG_VIEN_HD', label: 'Giảng viên hướng dẫn' },
    { value: 'P_KHCN', label: 'Chuyên viên P.KHCN' },
    { value: 'CHU_TICH_HD', label: 'Chủ tịch Hội đồng' },
    { value: 'HOI_DONG_MEMBER', label: 'Thành viên Hội đồng' },
    { value: 'THU_KY_HD', label: 'Thư ký Hội đồng' },
    { value: 'ADMIN', label: 'Quản trị viên (Admin)' }
  ];

  readonly unitsList: string[] = [
    'Khoa Công nghệ thông tin',
    'Khoa Điện - Điện tử',
    'Khoa Ngoại ngữ',
    'Khoa Kinh tế - Quản trị',
    'Khoa Cơ điện - Điện tử',
    'Phòng Khoa học & Công nghệ',
    'Hội đồng Khoa học & Đào tạo',
    'Trung tâm CNTT & Thư viện'
  ];

  constructor(
    public nckhDataService: NckhDataService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) this.currentUser = u;
    });

    this.nckhDataService.users$.subscribe(list => {
      this.users = list;
    });

    this.nckhDataService.blacklist$.subscribe(list => {
      this.blacklistRecords = list;
    });

    // Check route query params to activate tab
    this.route.url.subscribe(url => {
      const path = url.map(segment => segment.path).join('/');
      if (path.includes('blacklist')) {
        this.activeTab = 'blacklist';
      } else {
        this.activeTab = 'users';
      }
    });
  }

  // --- GETTERS FILTERED USERS ---
  get filteredUsers(): UserProfile[] {
    return this.users.filter(u => {
      // 1. Search term
      if (this.searchTerm && this.searchTerm.trim() !== '') {
        const term = this.searchTerm.toLowerCase().trim();
        const matchName = u.fullName.toLowerCase().includes(term);
        const matchEmail = u.email.toLowerCase().includes(term);
        const matchCode = u.identifierCode.toLowerCase().includes(term);
        if (!matchName && !matchEmail && !matchCode) return false;
      }

      // 2. Role filter
      if (this.selectedRoleFilter !== 'ALL' && u.role !== this.selectedRoleFilter) {
        return false;
      }

      // 3. Unit filter
      if (this.selectedUnitFilter !== 'ALL' && u.unit !== this.selectedUnitFilter) {
        return false;
      }

      // 4. Status filter
      if (this.selectedStatusFilter === 'ACTIVE' && (u.accountStatus !== 'ACTIVE' || u.isBlacklisted)) return false;
      if (this.selectedStatusFilter === 'PENDING' && u.accountStatus !== 'PENDING_APPROVAL') return false;
      if (this.selectedStatusFilter === 'LOCKED' && u.accountStatus !== 'LOCKED') return false;
      if (this.selectedStatusFilter === 'BLACKLIST' && !u.isBlacklisted) return false;

      return true;
    });
  }

  get pagedUsers(): UserProfile[] {
    const start = (this.pageUsers - 1) * this.pageSizeUsers;
    return this.filteredUsers.slice(start, start + this.pageSizeUsers);
  }

  get totalUserPages(): number {
    return Math.ceil(this.filteredUsers.length / this.pageSizeUsers) || 1;
  }

  get userPageNumbers(): number[] {
    return Array.from({ length: this.totalUserPages }, (_, i) => i + 1);
  }

  // --- GETTERS FILTERED BLACKLIST ---
  get filteredBlacklist(): BlacklistRecord[] {
    return this.blacklistRecords.filter(r => {
      if (this.selectedBlacklistFilter === 'ALL') return true;
      return r.status === this.selectedBlacklistFilter;
    });
  }

  get pagedBlacklist(): BlacklistRecord[] {
    const start = (this.pageBlacklist - 1) * this.pageSizeBlacklist;
    return this.filteredBlacklist.slice(start, start + this.pageSizeBlacklist);
  }

  get totalBlacklistPages(): number {
    return Math.ceil(this.filteredBlacklist.length / this.pageSizeBlacklist) || 1;
  }

  get blacklistPageNumbers(): number[] {
    return Array.from({ length: this.totalBlacklistPages }, (_, i) => i + 1);
  }

  // --- STATS ---
  get countPendingApprovals(): number {
    return this.users.filter(u => u.accountStatus === 'PENDING_APPROVAL').length;
  }

  get countActiveUsers(): number {
    return this.users.filter(u => u.accountStatus === 'ACTIVE' && !u.isBlacklisted).length;
  }

  get countBlacklistedUsers(): number {
    return this.users.filter(u => u.isBlacklisted).length;
  }

  get countPendingBlacklistRequests(): number {
    return this.blacklistRecords.filter(r => r.status === 'PENDING_ADMIN').length;
  }

  // --- USER ACTIONS ---
  openRoleModal(content: TemplateRef<any>, user: UserProfile) {
    this.selectedUser = user;
    this.newRole = user.role;
    this.newRoleTitle = user.roleTitle;
    this.newUnit = user.unit;
    this.newAcademicTitle = user.academicTitle || '';
    this.modalService.open(content, { size: 'md', centered: true });
  }

  onRoleChange() {
    const found = this.rolesList.find(r => r.value === this.newRole);
    if (found) {
      this.newRoleTitle = found.label;
    }
  }

  saveRoleChange() {
    if (!this.selectedUser) return;
    this.nckhDataService.changeUserRole(
      this.selectedUser.id,
      this.newRole,
      this.newRoleTitle,
      this.newUnit,
      this.newAcademicTitle
    );
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã cập nhật quyền thành công cho tài khoản "${this.selectedUser.fullName}" thành vai trò "${this.newRoleTitle}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  approveUser(user: UserProfile) {
    this.nckhDataService.approveUser(user.id);
    this.alertType = 'success';
    this.alertMessage = `Đã phê duyệt và kích hoạt mở quyền thành công cho tài khoản "${user.fullName}"!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  toggleLockUser(user: UserProfile) {
    if (user.accountStatus === 'LOCKED') {
      this.nckhDataService.unlockUser(user.id);
      this.alertType = 'success';
      this.alertMessage = `Đã mở khóa tài khoản cho "${user.fullName}"!`;
    } else {
      this.nckhDataService.lockUser(user.id);
      this.alertType = 'warning';
      this.alertMessage = `Đã khóa quyền truy cập hệ thống của tài khoản "${user.fullName}"!`;
    }
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  openCreateUserModal(content: TemplateRef<any>) {
    this.createUserData = {
      fullName: '',
      email: '',
      identifierCode: `GV${Math.floor(1000 + Math.random() * 9000)}`,
      role: 'GIANG_VIEN',
      roleTitle: 'Giảng viên',
      unit: 'Khoa Công nghệ thông tin',
      academicTitle: 'Thạc sĩ',
      phone: ''
    };
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  confirmCreateUser() {
    if (!this.createUserData.fullName || !this.createUserData.email) {
      alert('Vui lòng nhập đầy đủ Họ tên và Email tài khoản.');
      return;
    }
    const created = this.nckhDataService.createUser(this.createUserData);
    this.modalService.dismissAll();
    this.alertType = 'success';
    this.alertMessage = `Đã tạo mới và kích hoạt tài khoản "${created.fullName}" (${created.identifierCode}) thành công!`;
    setTimeout(() => { this.alertMessage = ''; }, 4000);
  }

  // --- BLACKLIST ACTIONS ---
  openApproveBlacklistModal(content: TemplateRef<any>, record: BlacklistRecord) {
    this.selectedBlacklistRecord = record;
    this.blacklistDecisionNumber = `QĐ-KL-2026-0${Math.floor(10 + Math.random() * 89)}`;
    this.blacklistAdminNotes = 'Admin đồng ý phê duyệt hình thức kỷ luật Blacklist 01 năm theo đề nghị chính thức của Phòng KHCN.';
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  confirmApproveBlacklist() {
    if (!this.selectedBlacklistRecord) return;
    this.nckhDataService.adminApproveBlacklist(
      this.selectedBlacklistRecord.id,
      this.blacklistAdminNotes,
      this.blacklistDecisionNumber
    );
    this.modalService.dismissAll();
    this.alertType = 'danger';
    this.alertMessage = `Đã phê duyệt đưa cá nhân "${this.selectedBlacklistRecord.userFullName}" vào Blacklist (Hạn chế nộp đề tài NCKH 01 năm đến ngày ${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString('vi-VN')}) theo Quyết định số ${this.blacklistDecisionNumber}!`;
    setTimeout(() => { this.alertMessage = ''; }, 6000);
  }

  rejectBlacklist(record: BlacklistRecord) {
    const reason = prompt('Nhập lý do miễn phạt / từ chối yêu cầu Blacklist:', 'Chấp thuận lý do giải trình giảm nhẹ của đơn vị.');
    if (reason !== null) {
      this.nckhDataService.adminRejectBlacklist(record.id, reason);
      this.alertType = 'info';
      this.alertMessage = `Đã miễn phạt / từ chối đưa "${record.userFullName}" vào Blacklist.`;
      setTimeout(() => { this.alertMessage = ''; }, 4000);
    }
  }

  revokeBlacklist(record: BlacklistRecord) {
    const reason = prompt('Nhập số Quyết định xóa án / gỡ hạn chế Blacklist sớm:', 'QĐ-XOA-2026-012');
    if (reason !== null) {
      this.nckhDataService.adminRevokeBlacklist(record.id, `Đã gỡ Blacklist trước hạn theo ${reason}`);
      this.alertType = 'success';
      this.alertMessage = `Đã gỡ Blacklist thành công cho "${record.userFullName}". Tài khoản đã được phục hồi quyền đăng ký NCKH bình thường!`;
      setTimeout(() => { this.alertMessage = ''; }, 5000);
    }
  }

  openBlacklistDetailModal(content: TemplateRef<any>, record: BlacklistRecord) {
    this.selectedBlacklistRecord = record;
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  getRoleBadgeClass(role: UserRole): string {
    switch (role) {
      case 'GIANG_VIEN': return 'bg-primary-subtle text-primary';
      case 'SINH_VIEN': return 'bg-info-subtle text-info';
      case 'TRUONG_KHOA': return 'bg-success-subtle text-success';
      case 'GIANG_VIEN_HD': return 'bg-warning-subtle text-warning';
      case 'P_KHCN': return 'bg-danger-subtle text-danger';
      case 'CHU_TICH_HD': return 'bg-purple-subtle text-purple';
      case 'HOI_DONG_MEMBER': return 'bg-secondary-subtle text-secondary';
      case 'THU_KY_HD': return 'bg-dark-subtle text-dark';
      case 'ADMIN': return 'bg-dark text-white';
      default: return 'bg-primary text-white';
    }
  }
}
