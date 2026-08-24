const cartData = [
  { id: 1, img: 'assets/images/products/img-1.png', product: "Branded T-Shirts", quantity: 10, price: 32 },
  { id: 2, img: 'assets/images/products/img-2.png', product: "Bentwood Chair", quantity: 5, price: 18 },
  { id: 3, img: 'assets/images/products/img-3.png', product: "Borosil Paper Cup", quantity: 3, price: 250 },
  { id: 4, img: 'assets/images/products/img-6.png', product: "Gray Styled T-Shirt", quantity: 1, price: 1250 },
  { id: 5, img: 'assets/images/products/img-5.png', product: "Stillbird Helmet", quantity: 2, price: 495 },
];

const allNotification = [
  {
    id: 1,
    title: "Phòng Khoa học & Công nghệ",
    desc: "Đã chính thức mở Đợt 1 Đăng ký đề tài NCKH cấp Trường năm học 2026-2027.",
    img: "assets/images/users/avatar-5.jpg",
    icon: "bx-badge-check",
    time: "Vừa xong",
    checkboxId: "all-notification-check01",
    state: false
  },
  {
    id: 2,
    title: "TS. Lê Hoàng Nam (Trưởng Khoa)",
    desc: "Đã phê duyệt hồ sơ đề tài 'Nghiên cứu ứng dụng Deep Learning' (BM01A).",
    img: "assets/images/users/avatar-1.jpg",
    icon: "bx-badge-check",
    time: "15 phút trước",
    checkboxId: "all-notification-check02",
    state: false
  },
  {
    id: 3,
    title: "Hội đồng Khoa học",
    desc: "Quyết định thành lập Hội đồng xét duyệt hồ sơ đề tài Bước 02 đã được ban hành.",
    img: "assets/images/users/avatar-7.jpg",
    icon: "bx-badge-check",
    time: "2 giờ trước",
    checkboxId: "all-notification-check03",
    state: false
  },
  {
    id: 4,
    title: "Hệ thống Quản lý NCKH",
    desc: "Nhắc nhở: Hạn chót nộp bản ký số PDF cho Đợt 1 là 30/08/2026.",
    img: "assets/images/users/avatar-8.jpg",
    icon: "bx-badge-check",
    time: "1 ngày trước",
    checkboxId: "all-notification-check04",
    state: false
  },
];

const messages = [
  {
    id: 1,
    avatar: "assets/images/users/avatar-1.jpg",
    name: "TS. Lê Hoàng Nam (Trưởng Khoa)",
    message: "Khoa đã hoàn tất xét duyệt hồ sơ đề tài của Thầy/Cô và chuyển tiếp lên P.KHCN.",
    time_ago: "20 phút trước",
    checkboxId: "all-notification-check01",
    state: false
  },
  {
    id: 2,
    avatar: "assets/images/users/avatar-5.jpg",
    name: "Nguyễn Thị Thu (Chuyên viên P.KHCN)",
    message: "Đề nghị Thầy/Cô kiểm tra lại dự toán kinh phí và tải lên bản ký số hoàn chỉnh BM01A.",
    time_ago: "1 giờ trước",
    checkboxId: "all-notification-check02",
    state: false
  },
  {
    id: 3,
    avatar: "assets/images/users/avatar-4.jpg",
    name: "ThS. Phạm Hải Đăng (GV Hướng dẫn)",
    message: "Thầy đã xem qua bản nháp BM01B của nhóm sinh viên, các em cập nhật lại mục tiêu nghiên cứu nhé.",
    time_ago: "3 giờ trước",
    checkboxId: "all-notification-check03",
    state: false
  },
  {
    id: 4,
    avatar: "assets/images/users/avatar-7.jpg",
    name: "PGS.TS. Trần Văn Hùng (Chủ tịch HĐ)",
    message: "Kế hoạch họp Hội đồng thẩm định hồ sơ Bước 02 dự kiến sẽ tổ chức vào thứ Sáu tuần này.",
    time_ago: "1 ngày trước",
    checkboxId: "all-notification-check04",
    state: false
  }
];

export {
  cartData,
  allNotification,
  messages
};
