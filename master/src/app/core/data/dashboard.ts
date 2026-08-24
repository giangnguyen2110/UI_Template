import { ChartOptions } from "src/app/store/Crypto/crypto_model";
/**
 * Best Selling (Đề tài Nghiên cứu Nổi bật)
 */
const BestSelling = [
  {
    image: "assets/images/products/img-1.png",
    pName: 'Nghiên cứu ứng dụng AI & Deep Learning trong chẩn đoán y tế',
    date: 'Đợt 1 - 2026',
    price: '85.000.000 đ',
    orders: 'TS. Lê Hoàng Nam',
    stock: 'Khoa CNTT',
    amount: 'Đã nghiệm thu (Xuất sắc)',
  },
  {
    image: "assets/images/products/img-2.png",
    pName: 'Hệ thống IoT giám sát năng lượng và tự động hóa tòa nhà',
    date: 'Đợt 1 - 2026',
    price: '65.000.000 đ',
    orders: 'ThS. Nguyễn Thị Hạnh',
    stock: 'Khoa Điện - Điện tử',
    amount: 'Đang triển khai (B06)',
  },
  {
    image: "assets/images/products/img-3.png",
    pName: 'Vật liệu phủ Nano chống ăn mòn trong môi trường công nghiệp',
    date: 'Đợt 2 - 2026',
    price: '120.000.000 đ',
    orders: 'PGS.TS. Trần Văn Hùng',
    stock: 'Khoa Hóa học & VL',
    amount: 'Đã thông qua TM (B04)',
  },
  {
    image: "assets/images/products/img-4.png",
    pName: 'Ứng dụng Blockchain trong truy xuất nguồn gốc nông sản sạch',
    date: 'Đợt 1 - 2026',
    price: '50.000.000 đ',
    orders: 'ThS. Phạm Hải Đăng',
    stock: 'Khoa CNTT',
    amount: 'Đang chuẩn bị nghiệm thu',
  },
  {
    image: "assets/images/products/img-5.png",
    pName: 'Mô hình kinh tế tuần hoàn xử lý phụ phẩm nông nghiệp công nghệ cao',
    date: 'Đợt 2 - 2026',
    price: '95.000.000 đ',
    orders: 'TS. Vũ Minh Tuấn',
    stock: 'Khoa Quản trị - KT',
    amount: 'Đã ký hợp đồng (B05)',
  }
];

/**
 * Top Selling (Nhà Khoa học & Nhóm Nghiên cứu Tiêu biểu)
 */
const TopSelling = [
  {
    image: "assets/images/users/avatar-7.jpg",
    pName: 'PGS.TS. Trần Văn Hùng',
    subtitle: 'Chuyên gia AI & Xử lý Dữ liệu lớn',
    type: 'Khoa CNTT',
    stock: '14 Đề tài',
    amount: '1.45 Tỷ đ',
    percentage: '98',
  },
  {
    image: "assets/images/users/avatar-1.jpg",
    pName: 'TS. Lê Hoàng Nam',
    subtitle: 'Hệ thống Nhúng & Mạng cảm biến không dây',
    type: 'Khoa CNTT',
    stock: '9 Đề tài',
    amount: '820 Tr.đ',
    percentage: '94',
  },
  {
    image: "assets/images/users/avatar-3.jpg",
    pName: 'ThS. Nguyễn Thị Hạnh',
    subtitle: 'Tối ưu hóa Thuật toán & Trí tuệ tính toán',
    type: 'Khoa CNTT',
    stock: '6 Đề tài',
    amount: '480 Tr.đ',
    percentage: '91',
  },
  {
    image: "assets/images/users/avatar-9.jpg",
    pName: 'TS. Vũ Minh Tuấn',
    subtitle: 'Kinh tế Số & Quản trị Chuỗi cung ứng',
    type: 'Khoa Kinh tế',
    stock: '8 Đề tài',
    amount: '650 Tr.đ',
    percentage: '89',
  },
  {
    image: "assets/images/users/avatar-4.jpg",
    pName: 'ThS. Phạm Hải Đăng',
    subtitle: 'Bảo mật An ninh mạng & Dữ liệu lớn',
    type: 'Khoa CNTT',
    stock: '5 Đề tài',
    amount: '380 Tr.đ',
    percentage: '87',
  }
];

/**
 * Recent Selling (Hồ sơ Đăng ký Đề tài Mới nhất)
 */
const Recentelling = [
  {
    id: "#DT2026-001",
    image: "assets/images/users/avatar-3.jpg",
    customer: 'ThS. Nguyễn Thị Hạnh',
    product: 'Nghiên cứu ứng dụng Deep Learning trong nhận diện bệnh lá lúa',
    amount: '45.000.000 đ',
    vendor: 'Khoa CNTT',
    status: 'Đã duyệt Bước 01',
    rating: '5.0',
    average: "7"
  },
  {
    id: "#DT2026-002",
    image: "assets/images/users/avatar-2.jpg",
    customer: 'Trần Văn Minh (Sinh viên)',
    product: 'Xây dựng ứng dụng IoT quản lý phòng thí nghiệm thông minh',
    amount: '15.000.000 đ',
    vendor: 'Khoa CNTT',
    status: 'Đang xét duyệt',
    rating: '4.8',
    average: "5"
  },
  {
    id: "#DT2026-003",
    image: "assets/images/users/avatar-1.jpg",
    customer: 'TS. Lê Hoàng Nam',
    product: 'Nghiên cứu kiến trúc Vi mạch cho thiết bị biên thông minh Edge-AI',
    amount: '80.000.000 đ',
    vendor: 'Khoa Điện - Điện tử',
    status: 'Đã duyệt Bước 01',
    rating: '5.0',
    average: "9"
  },    
  {
    id: "#DT2026-004",
    image: "assets/images/users/avatar-4.jpg",
    customer: 'ThS. Phạm Hải Đăng',
    product: 'Giải pháp bảo mật dữ liệu định danh sinh viên bằng Blockchain',
    amount: '50.000.000 đ',
    vendor: 'Khoa CNTT',
    status: 'Đã duyệt Bước 01',
    rating: '4.9',
    average: "6"
  },   
  {
    id: "#DT2026-005",
    image: "assets/images/users/avatar-6.jpg",
    customer: 'TS. Nguyễn Thị Mai',
    product: 'Chế tạo màng bọc thực phẩm tự phân hủy sinh học từ tinh bột sắn',
    amount: '60.000.000 đ',
    vendor: 'Khoa Công nghệ Hóa học',
    status: 'Đang xét duyệt',
    rating: '4.7',
    average: "5"
  } 
];

/**
 * Stat Counter Data (4 Thẻ chỉ số tổng quan NCKH)
 */
const statData = [
  {
    title: 'TỔNG KINH PHÍ NCKH CẤP',
    value: 24.85,
    icon: 'bx-dollar-circle',
    persantage: '16.24',
    profit: 'up',
    link: 'Chi tiết phân bổ ngân sách'
  }, 
  {
    title: 'TỔNG SỐ ĐỀ TÀI ĐĂNG KÝ',
    value: 342,
    icon: 'bx-shopping-bag',
    persantage: '12.50',
    profit: 'up',
    link: 'Xem danh sách đề tài toàn trường'
  }, 
  {
    title: 'GIẢNG VIÊN & NHÀ KHOA HỌC',
    value: 185,
    icon: 'bx-user-circle',
    persantage: '8.30',
    profit: 'up',
    link: 'Danh sách cán bộ nghiên cứu'
  }, 
  {
    title: 'CÔNG BỐ & BÀI BÁO QUỐC TẾ',
    value: 128,
    icon: 'bx-wallet',
    persantage: '24.60',
    profit: 'up',
    link: 'Xem danh mục Scopus / ISI / ACI'
  }
];
  


/**
 * Stat Counder Data
 */
 const cryptostatData = [{
    title: 'TOTAL INVESTED',
    value: 2390.68,
    icon: 'ri-money-dollar-circle-fill',
    persantage: '6.24',
    profit: 'up'
  }, {
    title: 'TOTAL CHANGE',
    value: 19523.25,
    icon: 'ri-arrow-up-circle-fill',
    persantage: '3.67',
    profit: 'up'
  }, {
    title: 'DAY CHANGE',
    value: 14799.44,
    icon: 'ri-arrow-down-circle-fill',
    persantage: '4.80',
    profit: 'down'
  }
];

/**
 * BitCoin Chart
 */
 const cryptoBitcoinChart: ChartOptions = {
  series: [{
    name: "Bitcoin",
    data: [85, 68, 35, 90, 8, 11, 26, 54]
  }, ],
  chart: {
    width: 130,
    height: 50,
    type: "area",
    sparkline: {
        enabled: true,
    },
    toolbar: {
        show: false,
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1.5,
  },
  fill: {
    type: "gradient",
    gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100],
    },
  },
  colors: ["#0ab39c"]
};

/**
 * Lite Coin Chart
 */
 const cryptolitecoinChart: ChartOptions = {
  series: [{
    name: "Litecoin",
    data: [25, 50, 41, 87, 12, 36, 9, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * Eatherreum Chart
 */
 const cryptoEatherreumChart: ChartOptions = {
  series: [{
    name: "Ethereum",
    data: [36, 21, 65, 22, 35, 50, 29, 44]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * Binance Chart
 */
 const cryptoBinanceChart: ChartOptions = {
  series: [{
    name: "Binance",
    data: [30, 58, 29, 89, 12, 36, 9, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#f06548"]
};

/**
 * Dash Chart
 */
 const cryptoDashChart: ChartOptions = {
  series: [{
    name: "Dash",
    data: [24, 68, 39, 86, 29, 42, 11, 58]
}, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * Tether Chart
 */
 const cryptoTetherChart: ChartOptions = {
  series: [{
    name: "Dash",
    data: [13, 76, 12, 85, 25, 60, 9, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#0ab39c"]
};

/**
 * NEO Chart
 */
 const cryptoNeoChart: ChartOptions = {
  series: [{
    name: "Neo",
    data: [9, 66, 41, 89, 12, 36, 25, 54]
  }, ],
  chart: {
      width: 130,
      height: 46,
      type: "area",
      sparkline: {
          enabled: true,
      },
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: "smooth",
      width: 1.5,
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100, 100, 100],
      },
  },
  colors: ["#f06548"]
};

/**
 * New Currencies
 */
 const cryptoCurrencies = [
  {
    image: "assets/images/svg/crypto-icons/btc.svg",
    coinName: "Bitcoin",
    price: '48,568.025',
    change: '5.26',
    profit: 'up',
    balance: '53,914.025',
    coin: '1.25634801',
  },
  {
    image: "assets/images/svg/crypto-icons/ltc.svg",
    coinName: "Litecoin",
    price: '87,142.027',
    change: '3.07',
    profit: 'down',
    balance: '75,854.127',
    coin: '2.85472161',
  },
  {
    image: "assets/images/svg/crypto-icons/eth.svg",
    coinName: "Ethereum",
    price: '33,847.961',
    change: '7.13',
    profit: 'up',
    balance: '44,152.185',
    coin: '1.45612347',
  },
  {
    image: "assets/images/svg/crypto-icons/bnb.svg",
    coinName: "Binance",
    price: '73,654.421',
    change: '0.97',
    profit: 'up',
    balance: '48,367.125',
    coin: '0.35734601',
  },
  {
    image: "assets/images/svg/crypto-icons/usdt.svg",
    coinName: "Tether",
    price: '66,742.077',
    change: '1.08',
    profit: 'down',
    balance: '53,487.083',
    coin: '3.62912570',
  },
  {
    image: "assets/images/svg/crypto-icons/dash.svg",
    coinName: "Dash",
    price: '34,736.209',
    change: '4.52',
    profit: 'up',
    balance: '15,203.347',
    coin: '1.85412740',
  },
  {
    image: "assets/images/svg/crypto-icons/neo.svg",
    coinName: "Neo",
    price: '56,357.313',
    change: '2.87',
    profit: 'down',
    balance: '61,843.173',
    coin: '1.87732061',
  },
  {
    image: "assets/images/svg/crypto-icons/doge.svg",
    coinName: "Dogecoin",
    price: '62,357.649',
    change: '3.45',
    profit: 'up',
    balance: '54,843.173',
    coin: '0.95632087',
  }
];

/**
 * Top Performers
 */
 const cryptoTopPerformers = [
  {
    image: "assets/images/svg/crypto-icons/btc.svg",
    coinName: "Bitcoin",
    price: '18.7',
    change: '12,863.08',
    profit: 'up',
    balance: '67.21',
    percentage: '4.33',
  },
  {
    image: "assets/images/svg/crypto-icons/eth.svg",
    coinName: "Ethereum",
    price: '27.4',
    change: '08,256.04',
    profit: 'up',
    balance: '51.19',
    percentage: '5.64',
  },
  {
    image: "assets/images/svg/crypto-icons/aave.svg",
    coinName: "Avalanche",
    price: '12.9',
    change: '11,896.13',
    profit: 'down',
    balance: '59.01',
    percentage: '4.08',
  },
  {
    image: "assets/images/svg/crypto-icons/doge.svg",
    coinName: "Dogecoin",
    price: '09.5',
    change: '15,999.06',
    profit: 'up',
    balance: '74.05',
    percentage: '3.12',
  },
  {
    image: "assets/images/svg/crypto-icons/bnb.svg",
    coinName: "Binance",
    price: '14.2',
    change: '13,786.18',
    profit: 'down',
    balance: '61.05',
    percentage: '9.22',
  },
  {
    image: "assets/images/svg/crypto-icons/ltc.svg",
    coinName: "Litecoin",
    price: '09.5',
    change: '10,604.27',
    profit: 'up',
    balance: '76.12',
    percentage: '4.92',
  }
];

/**
 * News Feed
 */
 const cryptoNewsFeed = [
  {
    image: "assets/images/small/img-1.jpg",
    content: "One stop shop destination on all the latest news in crypto currencies",
    date: 'Dec 12, 2021',
    time: '09:22 AM'
  },
  {
    image: "assets/images/small/img-2.jpg",
    content: "Coin Journal is dedicated to delivering stories on the latest crypto",
    date: 'Dec 03, 2021',
    time: '12:09 PM'
  },
  {
    image: "assets/images/small/img-3.jpg",
    content: "The bitcoin-holding U.S. senator is trying to “fully integrate” crypto",
    date: 'Nov 22, 2021',
    time: '11:47 AM'
  },
  {
    image: "assets/images/small/img-6.jpg",
    content: "Cryptocurrency price like Bitcoin, Dash, Dogecoin, Ripple and Litecoin",
    date: 'Nov 18, 2021',
    time: '06:13 PM'
  }
];

/**
 * Stat Counder Data
 */
const analyticstatData = [{
  title: 'Users',
  value: 28.05,
  icon: 'users',
  persantage: '16.24',
  profit: 'up'
}, {
    title: 'Sessions',
    value: 97.66,
    icon: 'activity',
    persantage: '3.96',
    profit: 'down'
}, {
    title: 'Avg. Visit Duration',
    value: 3.40,
    icon: 'clock',
    persantage: '0.24',
    profit: 'down'
}, {
    title: 'Bounce Rate',
    value: 33.48,
    icon: 'external-link',
    persantage: '7.05',
    profit: 'up'
}
];

/**
* Top Selleing
*/
const analyticTopPages = [
  {
      page: "/themesbrand/skote-25867",
      active: '99',
      users: '25.3',
  },
  {
      page: "/dashonic/chat-24518",
      active: '86',
      users: '22.7',
  },
  {
      page: "/skote/timeline-27391",
      active: '64',
      users: '18.7',
  },
  {
      page: "/themesbrand/minia-26441",
      active: '53',
      users: '14.2',
  },
  {
      page: "/dashon/dashboard-29873",
      active: '33',
      users: '12.6',
  },
  {
      page: "/doot/chats-29964",
      active: '20',
      users: '10.9',
  },
  {
      page: "/steex/pages-29739",
      active: '10',
      users: '07.3',
  }
];


export { analyticstatData, analyticTopPages, BestSelling, TopSelling, Recentelling, statData, cryptostatData, cryptoBitcoinChart, cryptolitecoinChart, cryptoEatherreumChart, cryptoBinanceChart, cryptoDashChart, cryptoTetherChart, cryptoNeoChart, cryptoCurrencies, cryptoTopPerformers, cryptoNewsFeed };

