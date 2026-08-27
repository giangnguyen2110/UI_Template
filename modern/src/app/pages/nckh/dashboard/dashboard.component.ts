import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbNavModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NckhDataService, DEMO_USERS } from '../../../core/services/nckh-data.service';
import { UserProfile, TopicProposal, RegistrationRound, UserRole } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-nckh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModalModule,
    NgbTooltipModule
  ]
})
export class NckhDashboardComponent implements OnInit {
  currentUser: UserProfile = DEMO_USERS[0];
  demoUsers = DEMO_USERS;
  rounds: RegistrationRound[] = [];
  proposals: TopicProposal[] = [];
  myProposals: TopicProposal[] = [];
  pendingReviews: TopicProposal[] = [];

  activeQuota = 0; // Đề tài đang đợi xử lý của người dùng (tối đa 2)

  // Phân trang danh sách hồ sơ (5 hồ sơ / trang)
  dashboardProposalPage = 1;
  dashboardProposalPageSize = 5;
  readonly Math = Math;

  get pagedDashboardProposals(): TopicProposal[] {
    const startIndex = (this.dashboardProposalPage - 1) * this.dashboardProposalPageSize;
    return this.proposals.slice(startIndex, startIndex + this.dashboardProposalPageSize);
  }

  get totalDashboardProposalPages(): number {
    return Math.ceil(this.proposals.length / this.dashboardProposalPageSize) || 1;
  }

  get dashboardProposalPages(): number[] {
    const total = this.totalDashboardProposalPages;
    const res: number[] = [];
    for (let i = 1; i <= total; i++) {
      res.push(i);
    }
    return res;
  }

  setDashboardProposalPage(p: number) {
    if (p < 1 || p > this.totalDashboardProposalPages) return;
    this.dashboardProposalPage = p;
  }

  // Danh mục Tin tức & Bài viết mới
  newsArticles = [
    {
      id: 'news-1',
      title: 'Thông báo Kêu gọi Đăng ký Đề tài NCKH Cấp Trường Đợt 1 năm 2026',
      category: 'Thông báo KHCN',
      categoryClass: 'bg-primary-subtle text-primary',
      date: '22/08/2026',
      author: 'Phòng Khoa học & Công nghệ',
      views: 1420,
      summary: 'Phòng KHCN chính thức mở cổng tiếp nhận hồ sơ đăng ký đề tài NCKH cấp Trường năm học 2026-2027 cho toàn thể Giảng viên và Sinh viên với nhiều chính sách hỗ trợ kinh phí mới.',
      image: 'assets/images/small/img-1.jpg',
      badge: 'Mới nhất'
    },
    {
      id: 'news-2',
      title: 'Hội nghị Khoa học Quốc tế về Trí tuệ Nhân tạo và Công nghệ Mới ICAT-2026',
      category: 'Hội nghị - Hội thảo',
      categoryClass: 'bg-info-subtle text-info',
      date: '18/08/2026',
      author: 'Khoa Công nghệ thông tin',
      views: 890,
      summary: 'Hội nghị thường niên quy tụ hơn 250 nhà khoa học, giáo sư quốc tế trình bày các công trình đột phá trong lĩnh vực AI, Edge IoT, Big Data và An toàn thông tin.',
      image: 'assets/images/small/img-2.jpg',
      badge: 'Sắp diễn ra'
    },
    {
      id: 'news-3',
      title: 'Quy chế Khen thưởng Bài báo Công bố Quốc tế Scopus/WoS theo Nghị quyết mới',
      category: 'Chính sách & Quy định',
      categoryClass: 'bg-success-subtle text-success',
      date: '10/08/2026',
      author: 'Hội đồng KH&ĐT DNTU',
      views: 2150,
      summary: 'Tăng mức kinh phí hỗ trợ và khen thưởng lên tới 50.000.000 VNĐ cho mỗi bài báo thuộc nhóm Q1/Q2 nhằm khuyến khích giảng viên và sinh viên hội nhập quốc tế.',
      image: 'assets/images/small/img-3.jpg',
      badge: 'Chính sách'
    }
  ];

  // Danh mục Bài báo Khoa học Công bố
  publishedPapers = [
    {
      id: 'paper-1',
      title: 'Deep Learning Approaches for Real-time Air Quality Monitoring using IoT Edge Devices',
      journal: 'IEEE Access (SCIE - Q1, Impact Factor: 3.9)',
      authors: 'ThS. Nguyễn Thị Hạnh, TS. Lê Hoàng Nam, Trần Văn Minh',
      year: '2026',
      doi: '10.1109/ACCESS.2026.042819',
      citations: 16,
      badge: 'Scopus Q1',
      badgeClass: 'bg-success-subtle text-success'
    },
    {
      id: 'paper-2',
      title: 'Optimization of Microgrid Energy Management using Hybrid Genetic Algorithm and Machine Learning',
      journal: 'Energy Reports (Elsevier - SCIE, Q1, IF: 4.9)',
      authors: 'PGS.TS. Trần Văn Hùng, ThS. Phạm Hải Đăng',
      year: '2026',
      doi: '10.1016/j.egyr.2026.11.042',
      citations: 32,
      badge: 'WoS Q1',
      badgeClass: 'bg-primary-subtle text-primary'
    },
    {
      id: 'paper-3',
      title: 'A Secure Blockchain-based Framework for Academic Credential Verification in Higher Education',
      journal: 'Journal of Systems Architecture (Elsevier - Q2)',
      authors: 'TS. Vũ Minh Tuấn, ThS. Đỗ Anh Khoa',
      year: '2026',
      doi: '10.1016/j.sysarc.2026.10284',
      citations: 9,
      badge: 'Scopus Q2',
      badgeClass: 'bg-info-subtle text-info'
    },
    {
      id: 'paper-4',
      title: 'Nghiên cứu giải pháp bảo mật dữ liệu trên nền tảng điện toán đám mây cho doanh nghiệp vừa và nhỏ',
      journal: 'Tạp chí Khoa học & Công nghệ DNTU (ISSN: 2615-9589)',
      authors: 'ThS. Đỗ Anh Khoa, TS. Lê Hoàng Nam',
      year: '2026',
      doi: '10.5482/dntujst.2026.08',
      citations: 5,
      badge: 'Tạp chí Trong nước',
      badgeClass: 'bg-warning-subtle text-warning'
    }
  ];

  // Danh mục Nhà nghiên cứu Khoa học
  researchersList = [
    {
      id: 'res-1',
      name: 'PGS.TS. Trần Văn Hùng',
      academicTitle: 'Phó Giáo sư, Tiến sĩ',
      unit: 'Hội đồng Khoa học & Đào tạo',
      field: 'Hệ thống Năng lượng & Tự động hóa',
      publications: 48,
      hIndex: 15,
      avatar: 'assets/images/users/avatar-7.jpg',
      email: 'tvhung@dntu.edu.vn',
      group: 'Trưởng nhóm Nghiên cứu Năng lượng Tái tạo'
    },
    {
      id: 'res-2',
      name: 'TS. Lê Hoàng Nam',
      academicTitle: 'Tiến sĩ Khoa học Máy tính',
      unit: 'Khoa Công nghệ thông tin',
      field: 'Trí tuệ nhân tạo, Thị giác máy tính',
      publications: 31,
      hIndex: 11,
      avatar: 'assets/images/users/avatar-1.jpg',
      email: 'lhnam@dntu.edu.vn',
      group: 'Trưởng nhóm Nghiên cứu AI & IoT'
    },
    {
      id: 'res-3',
      name: 'TS. Vũ Minh Tuấn',
      academicTitle: 'Tiến sĩ Kỹ thuật Phần mềm',
      unit: 'ĐH Bách Khoa (Chuyên gia thỉnh giảng)',
      field: 'IoT, An toàn thông tin, Blockchain',
      publications: 24,
      hIndex: 9,
      avatar: 'assets/images/users/avatar-6.jpg',
      email: 'vmtuan@dntu.edu.vn',
      group: 'Chuyên gia Cố vấn An ninh mạng'
    },
    {
      id: 'res-4',
      name: 'ThS. Nguyễn Thị Hạnh',
      academicTitle: 'Thạc sĩ Khoa học',
      unit: 'Khoa Công nghệ thông tin',
      field: 'Mạng cảm biến, AI trong quan trắc môi trường',
      publications: 14,
      hIndex: 6,
      avatar: 'assets/images/users/avatar-3.jpg',
      email: 'nthanh@dntu.edu.vn',
      group: 'Nhà nghiên cứu chính nhóm AI'
    }
  ];

  // Danh mục Biểu mẫu & Hướng dẫn Quy trình
  formsAndGuidelines = [
    {
      code: 'BM01A',
      name: 'Phiếu đăng ký đề tài NCKH cấp Trường (Dành cho Giảng viên)',
      type: 'Biểu mẫu Đăng ký',
      fileFormat: 'DOCX / PDF',
      fileSize: '128 KB',
      step: 'Bước 01',
      badgeClass: 'bg-primary-subtle text-primary'
    },
    {
      code: 'BM01B',
      name: 'Phiếu đăng ký đề tài NCKH cấp Trường (Dành cho Sinh viên)',
      type: 'Biểu mẫu Đăng ký',
      fileFormat: 'DOCX / PDF',
      fileSize: '125 KB',
      step: 'Bước 01',
      badgeClass: 'bg-info-subtle text-info'
    },
    {
      code: 'BM04A',
      name: 'Bản thuyết minh đề tài NCKH & Dự toán chi tiết (Giảng viên)',
      type: 'Biểu mẫu Thuyết minh',
      fileFormat: 'DOCX / PDF',
      fileSize: '245 KB',
      step: 'Bước 03',
      badgeClass: 'bg-warning-subtle text-warning'
    },
    {
      code: 'BM08',
      name: 'Báo cáo tình hình thực hiện & tiến độ ½ thời gian đề tài NCKH',
      type: 'Biểu mẫu Tiến độ',
      fileFormat: 'DOCX / PDF',
      fileSize: '115 KB',
      step: 'Bước 06',
      badgeClass: 'bg-primary-subtle text-primary'
    },
    {
      code: 'BM09',
      name: 'Báo cáo tổng kết đề tài NCKH & Danh mục sản phẩm công bố',
      type: 'Biểu mẫu Nghiệm thu',
      fileFormat: 'DOCX / PDF',
      fileSize: '310 KB',
      step: 'Bước 07',
      badgeClass: 'bg-danger-subtle text-danger'
    },
    {
      code: 'BM13',
      name: 'Báo cáo giải trình chỉnh sửa sau phiên họp Hội đồng nghiệm thu',
      type: 'Biểu mẫu Giải trình',
      fileFormat: 'DOCX / PDF',
      fileSize: '98 KB',
      step: 'Bước 07',
      badgeClass: 'bg-secondary-subtle text-secondary'
    }
  ];

  // 9 Bước quy trình
  workflowOverviewSteps = [
    { id: 1, code: 'B1', title: 'Đăng ký đề tài', bm: 'BM01A/B', desc: 'Nộp hồ sơ & Duyệt sơ bộ cấp Khoa/GVHD' },
    { id: 2, code: 'B2', title: 'Phê duyệt sơ bộ', bm: 'BM02, BM03', desc: 'HĐ Xét duyệt hồ sơ đăng ký' },
    { id: 3, code: 'B3', title: 'Viết thuyết minh', bm: 'BM04A/B', desc: 'Chủ nhiệm nộp Thuyết minh chi tiết' },
    { id: 4, code: 'B4', title: 'Phê duyệt TM', bm: 'BM06, BM07', desc: 'HĐ Thẩm định thuyết minh & dự toán' },
    { id: 5, code: 'B5', title: 'Ký hợp đồng', bm: 'BM05, HĐ', desc: 'QĐ Giao nhiệm vụ & Ký hợp đồng pháp lý' },
    { id: 6, code: 'B6', title: 'BC tiến độ ½ TG', bm: 'BM08', desc: 'Thực hiện nghiên cứu & Báo cáo tiến độ' },
    { id: 7, code: 'B7', title: 'Nghiệm thu đề tài', bm: 'BM09 - BM14', desc: 'Nộp BC, HĐ Nghiệm thu & Giải trình BM13' },
    { id: 8, code: 'B8', title: 'QĐ công nhận KQ', bm: 'BM15', desc: 'Quyết định công nhận kết quả NCKH' },
    { id: 9, code: 'B9', title: 'Triển khai & Lưu HS', bm: 'Lưu trữ', desc: 'Triển khai ứng dụng thực tế & Lưu hồ sơ' },
  ];

  selectedProposalIdForTimeline: string = '';

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

    if (this.myProposals.length > 0) {
      if (!this.selectedProposalIdForTimeline || !this.myProposals.find(p => p.id === this.selectedProposalIdForTimeline)) {
        this.selectedProposalIdForTimeline = this.myProposals[0].id;
      }
    } else {
      this.selectedProposalIdForTimeline = '';
    }

    if (this.currentUser.role === 'TRUONG_KHOA') {
      this.pendingReviews = this.nckhDataService.getProposalsForFaculty();
    } else if (this.currentUser.role === 'GIANG_VIEN_HD') {
      this.pendingReviews = this.nckhDataService.getProposalsForAdvisor();
    } else if (this.currentUser.role === 'P_KHCN' || this.currentUser.role === 'CHU_TICH_HD' || this.currentUser.role === 'ADMIN') {
      this.pendingReviews = this.proposals.filter(p => p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO');
    }
  }

  get activeTimelineProposal(): TopicProposal | null {
    if (!this.myProposals || this.myProposals.length === 0) return null;
    return this.myProposals.find(p => p.id === this.selectedProposalIdForTimeline) || this.myProposals[0];
  }

  getDashboardStepState(stepNumber: number): 'COMPLETED' | 'IN_PROGRESS' | 'PENDING' {
    const prop = this.activeTimelineProposal;
    if (!prop) {
      return stepNumber === 1 ? 'IN_PROGRESS' : 'PENDING';
    }

    const s = prop.status;

    // Step 1: Đăng ký đề tài & Duyệt cấp Khoa/GVHD
    if (stepNumber === 1) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI'].includes(s)) {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 2: Phê duyệt sơ bộ BM02 & BM03
    if (stepNumber === 2) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI'].includes(s)) {
        return 'PENDING';
      }
      if (['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO'].includes(s)) {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 3: Viết thuyết minh BM04
    if (stepNumber === 3) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO'].includes(s)) {
        return 'PENDING';
      }
      if (['CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO'].includes(s)) {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 4: Phê duyệt Thuyết minh BM06 & BM07
    if (stepNumber === 4) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO'].includes(s)) {
        return 'PENDING';
      }
      if (s === 'DANG_XET_DUYET_THUYET_MINH') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 5: Ký hợp đồng & QĐ giao việc BM05
    if (stepNumber === 5) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
        return 'PENDING';
      }
      return 'COMPLETED';
    }

    // Step 6: Thực hiện & Báo cáo tiến độ BM08
    if (stepNumber === 6) {
      if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI', 'CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO', 'CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO', 'DANG_XET_DUYET_THUYET_MINH'].includes(s)) {
        return 'PENDING';
      }
      if (s === 'DANG_THUC_HIEN') {
        return 'IN_PROGRESS';
      }
      return 'COMPLETED';
    }

    // Step 7: Nghiệm thu & Chỉnh sửa BM13
    if (stepNumber === 7) {
      if (s === 'CHO_NGHIEM_THU' || s === 'DANG_NGHIEM_THU' || s === 'YEU_CAU_CHINH_SUA_NGHIEM_THU') {
        return 'IN_PROGRESS';
      }
      if (['DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07', 'DA_CONG_NHAN_KET_QUA', 'TRIEN_KHAI_UNG_DUNG', 'LUU_HO_SO'].includes(s)) {
        return 'COMPLETED';
      }
      return 'PENDING';
    }

    // Step 8: QĐ công nhận kết quả BM15
    if (stepNumber === 8) {
      if (['DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'].includes(s)) {
        return 'IN_PROGRESS';
      }
      if (['DA_CONG_NHAN_KET_QUA', 'TRIEN_KHAI_UNG_DUNG', 'LUU_HO_SO'].includes(s)) {
        return 'COMPLETED';
      }
      return 'PENDING';
    }

    // Step 9: Triển khai & Lưu hồ sơ
    if (stepNumber === 9) {
      if (['TRIEN_KHAI_UNG_DUNG', 'LUU_HO_SO'].includes(s)) {
        return 'COMPLETED';
      }
      if (s === 'DA_CONG_NHAN_KET_QUA') {
        return 'IN_PROGRESS';
      }
      return 'PENDING';
    }

    return 'PENDING';
  }

  getProposalStepCode(p: TopicProposal): string {
    const s = p.status;
    if (['NHAP', 'CHO_KHOA_DUYET', 'CHO_GVHD_DUYET', 'TRA_CHINH_SUA', 'CHO_DUYET_LAI'].includes(s)) return 'B1';
    if (['CHO_HOI_DONG_XET_DUYET_HO_SO', 'DANG_XET_DUYET_HO_SO'].includes(s)) return 'B2';
    if (['CHO_NOP_THUYET_MINH', 'DAT_XET_DUYET_HO_SO'].includes(s)) return 'B3';
    if (s === 'DANG_XET_DUYET_THUYET_MINH') return 'B4';
    if (s === 'DANG_THUC_HIEN') return 'B6';
    if (['CHO_NGHIEM_THU', 'DANG_NGHIEM_THU', 'YEU_CAU_CHINH_SUA_NGHIEM_THU'].includes(s)) return 'B7';
    if (['DA_NGHIEM_THU', 'HOAN_TAT_BUOC_07'].includes(s)) return 'B8';
    if (['DA_CONG_NHAN_KET_QUA', 'TRIEN_KHAI_UNG_DUNG', 'LUU_HO_SO'].includes(s)) return 'B9';
    return 'B1';
  }

  viewProposalDetail(propId: string) {
    this.router.navigate(['/nckh/de-tai', propId]);
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

  downloadFormAlert(formCode: string, formName: string) {
    alert(`Đang tải về biểu mẫu ${formCode}: ${formName}`);
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
