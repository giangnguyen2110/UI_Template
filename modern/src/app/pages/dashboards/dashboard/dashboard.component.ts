import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast-service';
import { circle, latLng, tileLayer } from 'leaflet';
import { ChartType } from './dashboard.model';
import { BestSelling, Recentelling, TopSelling, statData } from 'src/app/core/data';
import { NckhDataService, DEMO_USERS } from 'src/app/core/services/nckh-data.service';
import { UserProfile, UserRole, RegistrationRound, TopicProposal } from 'src/app/core/models/nckh.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})

/**
 * Dashboard Component (Tổng quan hệ thống)
 */
export class DashboardComponent implements OnInit {

  // Breadcrumb & NCKH state
  breadCrumbItems!: Array<{}>;
  currentUser: UserProfile = DEMO_USERS[0];
  demoUsers = DEMO_USERS;
  rounds: RegistrationRound[] = [];
  proposals: TopicProposal[] = [];

  // Template original charts & data
  analyticsChart!: ChartType;
  BestSelling: any;
  TopSelling: any;
  Recentelling: any;
  SalesCategoryChart!: ChartType;
  statData!: any;
  currentDate: any;

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

  constructor(
    public toastService: ToastService,
    public nckhDataService: NckhDataService
  ) {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.currentDate = { from: firstDay, to: lastDay };
  }

  get isStudentOrLecturer(): boolean {
    return !!this.currentUser && (this.currentUser.role === 'GIANG_VIEN' || this.currentUser.role === 'SINH_VIEN');
  }

  ngOnInit(): void {
    this.nckhDataService.currentUser$.subscribe(u => {
      if (u) {
        this.currentUser = u;
      }
    });
    // Breadcrumb
    this.breadCrumbItems = [
      { label: 'Hệ thống NCKH' },
      { label: 'Tổng quan', active: true }
    ];

    // NCKH subscriptions
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

    if (sessionStorage.getItem('toast')) {
      this.toastService.show('Đăng nhập thành công vào Hệ thống Quản lý NCKH.', { classname: 'bg-success text-center text-white', delay: 4000 });
      sessionStorage.removeItem('toast');
    }

    // Fetches template data
    this.fetchData();

    // Chart Color Data Get Function
    this._analyticsChart('["--vz-primary", "--vz-success", "--vz-danger"]');
    this._SalesCategoryChart('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]');
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

  downloadFormAlert(code: string, name: string) {
    alert(`Hệ thống đang tải xuống tệp văn bản mẫu chuẩn: [${code}] ${name}\nĐịnh dạng: Word DOCX / PDF chính thức theo Quy định Nhà trường.`);
  }

  downloadPaper(title: string) {
    alert(`Đang mở toàn văn bài báo khoa học: "${title}"\nNguồn: Thư viện số & Cổng liên kết Tạp chí Quốc tế.`);
  }

  switchRole(role: UserRole) {
    this.nckhDataService.switchRole(role);
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      let newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        let color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        } else return newValue;
      } else {
        let val = value.split(',');
        if (val.length == 2) {
          let rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
   * Sales Analytics Chart
   */
  setrevenuevalue(value: any) {
    if (value == 'all') {
      this.analyticsChart.series = [{
        name: 'Đề tài',
        type: 'area',
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
      }, {
        name: 'Kinh phí (Tr.đ)',
        type: 'bar',
        data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
      }, {
        name: 'Nghiệm thu',
        type: 'line',
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
      }];
    }
    if (value == '1M') {
      this.analyticsChart.series = [{
        name: 'Đề tài',
        type: 'area',
        data: [24, 75, 16, 98, 19, 41, 52, 34, 28, 52, 63, 67]
      }, {
        name: 'Kinh phí (Tr.đ)',
        type: 'bar',
        data: [99.25, 28.58, 98.74, 12.87, 107.54, 94.03, 11.24, 48.57, 22.57, 42.36, 88.51, 36.57]
      }, {
        name: 'Nghiệm thu',
        type: 'line',
        data: [28, 22, 17, 27, 21, 11, 5, 9, 17, 29, 12, 15]
      }];
    }
    if (value == '6M') {
      this.analyticsChart.series = [{
        name: 'Đề tài',
        type: 'area',
        data: [34, 75, 66, 78, 29, 41, 32, 44, 58, 52, 43, 77]
      }, {
        name: 'Kinh phí (Tr.đ)',
        type: 'bar',
        data: [109.25, 48.58, 38.74, 57.87, 77.54, 84.03, 31.24, 18.57, 92.57, 42.36, 48.51, 56.57]
      }, {
        name: 'Nghiệm thu',
        type: 'line',
        data: [12, 22, 17, 27, 1, 51, 5, 9, 7, 29, 12, 35]
      }];
    }
    if (value == '1Y') {
      this.analyticsChart.series = [{
        name: 'Đề tài',
        type: 'area',
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
      }, {
        name: 'Kinh phí (Tr.đ)',
        type: 'bar',
        data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
      }, {
        name: 'Nghiệm thu',
        type: 'line',
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
      }];
    }
  }

  private _analyticsChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.analyticsChart = {
      chart: {
        height: 370,
        type: "line",
        toolbar: {
          show: false,
        },
        style: {
          direction: 'ltr'
        }
      },
      stroke: {
        curve: "straight",
        dashArray: [0, 0, 8],
        width: [2, 0, 2.2],
      },
      colors: colors,
      series: [{
        name: 'Đề tài đăng ký',
        type: 'area',
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
      }, {
        name: 'Kinh phí cấp (Tr.đ)',
        type: 'bar',
        data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
      }, {
        name: 'Đề tài nghiệm thu',
        type: 'line',
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
      }],
      fill: {
        opacity: [0.1, 0.9, 1],
      },
      labels: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
      markers: {
        size: [0, 0, 0],
        strokeWidth: 2,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          "Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: -2,
          bottom: 15,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
          barHeight: "70%",
        },
      },
    };
  }

  /**
   * Sales Category
   */
  private _SalesCategoryChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.SalesCategoryChart = {
      series: [44, 55, 41, 17, 15],
      labels: ["Khoa CNTT", "Khoa Kỹ thuật", "Khoa Kinh tế", "Khoa Ngoại ngữ", "Phân hệ khác"],
      chart: {
        height: 333,
        type: "donut",
      },
      legend: {
        position: "bottom",
      },
      stroke: {
        show: false
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        },
      },
      colors: colors
    };
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.BestSelling = BestSelling;
    this.TopSelling = TopSelling;
    this.Recentelling = Recentelling;
    this.statData = statData;
  }

  /**
   * Sale Location Map
   */
  options = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        id: "mapbox/light-v9",
        tileSize: 512,
        zoomOffset: 0,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      })
    ],
    zoom: 1.1,
    center: latLng(28, 1.5)
  };

  layers = [
    circle([41.9, 12.45], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000 }),
    circle([12.05, -61.75], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000 }),
    circle([1.3, 103.8], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000 }),
  ];

  /**
   * Swiper Vertical  
   */
  Vertical = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    vertical: true
  };

  /**
   * Recent Activity
   */
  toggleActivity() {
    const recentActivity = document.querySelector('.layout-rightside-col');
    if (recentActivity != null) {
      recentActivity.classList.toggle('d-none');
    }

    if (document.documentElement.clientWidth <= 767) {
      const recentActivity = document.querySelector('.layout-rightside-col');
      if (recentActivity != null) {
        recentActivity.classList.add('d-block');
        recentActivity.classList.remove('d-none');
      }
    }
  }

  SidebarHide() {
    const recentActivity = document.querySelector('.layout-rightside-col');
    if (recentActivity != null) {
      recentActivity.classList.remove('d-block');
    }
  }
}
