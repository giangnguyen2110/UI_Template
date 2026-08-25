import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NckhDataService, DEMO_USERS } from '../../../core/services/nckh-data.service';
import { UserProfile, TopicProposal, RegistrationRound, UserRole } from '../../../core/models/nckh.model';

@Component({
  selector: 'app-nckh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class NckhDashboardComponent implements OnInit {
  currentUser: UserProfile = DEMO_USERS[0];
  demoUsers = DEMO_USERS;
  rounds: RegistrationRound[] = [];
  proposals: TopicProposal[] = [];
  myProposals: TopicProposal[] = [];
  pendingReviews: TopicProposal[] = [];

  activeQuota = 0; // Đề tài đang đợi xử lý của người dùng (tối đa 2)

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
    { code: 'B01', title: 'Đăng ký đề tài', bm: 'BM01A/B', desc: 'Nộp hồ sơ & Duyệt sơ bộ cấp Khoa/GVHD' },
    { code: 'B02', title: 'Phê duyệt sơ bộ', bm: 'BM02, BM03', desc: 'HĐ Xét duyệt hồ sơ đăng ký' },
    { code: 'B03', title: 'Viết thuyết minh', bm: 'BM04A/B', desc: 'Chủ nhiệm nộp Thuyết minh chi tiết' },
    { code: 'B04', title: 'Phê duyệt TM', bm: 'BM06, BM07', desc: 'HĐ Thẩm định thuyết minh & dự toán' },
    { code: 'B05', title: 'Ký hợp đồng', bm: 'BM05, HĐ', desc: 'QĐ Giao nhiệm vụ & Ký hợp đồng pháp lý' },
    { code: 'B06', title: 'BC tiến độ ½ TG', bm: 'BM08', desc: 'Thực hiện nghiên cứu & Báo cáo tiến độ' },
    { code: 'B07', title: 'Nghiệm thu đề tài', bm: 'BM09 - BM14', desc: 'Nộp BC, HĐ Nghiệm thu & Giải trình BM13' },
    { code: 'B08', title: 'QĐ công nhận KQ', bm: 'BM15', desc: 'Quyết định công nhận kết quả NCKH' },
    { code: 'B09', title: 'Triển khai & Lưu HS', bm: 'Lưu trữ', desc: 'Triển khai ứng dụng thực tế & Lưu hồ sơ' },
  ];

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

    if (this.currentUser.role === 'TRUONG_KHOA') {
      this.pendingReviews = this.nckhDataService.getProposalsForFaculty();
    } else if (this.currentUser.role === 'GIANG_VIEN_HD') {
      this.pendingReviews = this.nckhDataService.getProposalsForAdvisor();
    } else if (this.currentUser.role === 'P_KHCN' || this.currentUser.role === 'CHU_TICH_HD' || this.currentUser.role === 'ADMIN') {
      this.pendingReviews = this.proposals.filter(p => p.status === 'CHO_HOI_DONG_XET_DUYET_HO_SO');
    }
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
