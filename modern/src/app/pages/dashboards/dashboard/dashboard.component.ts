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

  ngOnInit(): void {
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
