import { MenuItem } from './menu.model';
import { UserRole } from '../../core/models/nckh.model';
import { MENU } from './menu';

export function getMenuForRole(role?: UserRole): MenuItem[] {
  if (!role) return MENU;

  const commonTitle: MenuItem = {
    id: 1,
    label: 'DANH MỤC CHỨC NĂNG',
    isTitle: true
  };

  // 1. TRANG CHỦ (Trỏ trực tiếp đến Trang chủ / Tổng quan, không có dropdown)
  const homeItem: MenuItem = {
    id: 10,
    label: 'Trang chủ',
    icon: 'ri-home-4-line',
    link: '/'
  };

  // Xác định các subItem của Phân hệ NCKH Cấp trường theo đúng Role
  const schoolNckhSubItems: MenuItem[] = [];

  if (role === 'GIANG_VIEN' || role === 'SINH_VIEN') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Danh sách đề tài của tôi',
        link: '/nckh/de-tai-cua-toi',
        parentId: 20
      },
      {
        id: 22,
        label: 'Danh sách đợt đăng ký',
        link: '/nckh/cac-dot-dang-ky',
        parentId: 20
      }
    );
  } else if (role === 'TRUONG_KHOA') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Danh sách đề tài khoa',
        link: '/nckh/de-tai-don-vi',
        parentId: 20,
        badge: {
          variant: 'badge bg-danger',
          text: 'Cần duyệt'
        }
      },
      {
        id: 22,
        label: 'Danh sách đợt đăng ký',
        link: '/nckh/cac-dot-dang-ky',
        parentId: 20
      }
    );
  } else if (role === 'GIANG_VIEN_HD') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Duyệt hồ sơ SV hướng dẫn',
        link: '/nckh/xet-duyet-ho-so',
        parentId: 20,
        badge: {
          variant: 'badge bg-danger',
          text: 'Cần duyệt'
        }
      },
      {
        id: 22,
        label: 'Danh sách đợt đăng ký',
        link: '/nckh/cac-dot-dang-ky',
        parentId: 20
      }
    );
  } else if (role === 'P_KHCN') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Quản lý Đợt đăng ký',
        link: '/nckh/quan-ly-dot',
        parentId: 20
      },
      {
        id: 22,
        label: 'Thành lập & Quản lý Hội đồng',
        link: '/nckh/quan-ly-hoi-dong',
        parentId: 20,
        badge: {
          variant: 'badge bg-primary',
          text: 'Mới'
        }
      },
      {
        id: 23,
        label: 'Quản lý đề tài toàn trường',
        link: '/nckh/danh-sach-toan-truong',
        parentId: 20
      }
    );
  } else if (role === 'CHU_TICH_HD' || role === 'HOI_DONG_MEMBER' || role === 'THU_KY_HD') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Hội đồng thẩm định đề tài',
        link: '/nckh/xet-duyet-ho-so',
        parentId: 20,
        badge: {
          variant: 'badge bg-warning',
          text: 'Đang thẩm định'
        }
      },
      {
        id: 22,
        label: 'Đề tài đã đánh giá',
        link: '/nckh/danh-sach-toan-truong',
        parentId: 20,
        badge: {
          variant: 'badge bg-success-subtle text-success',
          text: 'Pass/Fail'
        }
      },
      {
        id: 23,
        label: 'Danh sách đợt đăng ký',
        link: '/nckh/cac-dot-dang-ky',
        parentId: 20
      }
    );
  } else if (role === 'ADMIN') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Quản lý tài khoản & Phân quyền',
        link: '/nckh/quan-ly-tai-khoan',
        parentId: 20
      },
      {
        id: 22,
        label: 'Tiếp nhận & Xử lý Blacklist',
        link: '/nckh/quan-ly-blacklist',
        parentId: 20,
        badge: {
          variant: 'badge bg-danger',
          text: 'Chờ duyệt'
        }
      }
    );
  }

  // 2. HOẠT ĐỘNG NGHIÊN CỨU KHOA HỌC CẤP TRƯỜNG (Trỏ xuống)
  const nckhSchoolItem: MenuItem = {
    id: 20,
    label: 'Hoạt động nghiên cứu khoa học cấp trường',
    icon: 'ri-flask-line',
    isCollapsed: false,
    subItems: schoolNckhSubItems
  };

  // 3. HOẠT ĐỘNG NGHIỆM THU SẢN PHẨM NCKH
  const acceptanceItem: MenuItem = {
    id: 30,
    label: 'Hoạt động nghiệm thu sản phẩm nghiên cứu khoa học',
    icon: 'ri-checkbox-circle-line',
    link: '/pages/coming-soon',
    badge: {
      variant: 'badge bg-secondary-subtle text-secondary',
      text: 'Sắp mở'
    }
  };

  // 4. QUY TRÌNH THỰC HIỆN CHUYỂN GIAO CÔNG NGHỆ VÀ DỊCH VỤ
  const transferItem: MenuItem = {
    id: 40,
    label: 'Quy trình thực hiện chuyển giao công nghệ và dịch vụ',
    icon: 'ri-shake-hands-line',
    link: '/pages/coming-soon',
    badge: {
      variant: 'badge bg-secondary-subtle text-secondary',
      text: 'Sắp mở'
    }
  };

  // 5. QUẢN LÝ THỰC HIỆN ĐỀ TÀI CẤP NHÀ NƯỚC, CẤP TỈNH, BỘ, NGÀNH
  const stateProjectItem: MenuItem = {
    id: 50,
    label: 'Quản lý thực hiện đề tài cấp nhà nước, cấp tỉnh, bộ, ngành',
    icon: 'ri-government-line',
    link: '/pages/coming-soon',
    badge: {
      variant: 'badge bg-secondary-subtle text-secondary',
      text: 'Sắp mở'
    }
  };

  // 6. LƯU ĐỒ TỔ CHỨC HỘI NGHỊ, HỘI THẢO
  const conferenceItem: MenuItem = {
    id: 60,
    label: 'Lưu đồ tổ chức hội nghị, hội thảo',
    icon: 'ri-presentation-line',
    link: '/pages/coming-soon',
    badge: {
      variant: 'badge bg-secondary-subtle text-secondary',
      text: 'Sắp mở'
    }
  };

  // 7. TRANG QUẢN TRỊ ADMIN (NẾU LÀ ADMIN HOẶC P.KHCN)
  const adminItem: MenuItem = {
    id: 90,
    label: 'Cấu hình hệ thống & Phân quyền',
    icon: 'ri-settings-4-line',
    link: '/nckh/quan-ly-dot',
    badge: {
      variant: 'badge bg-info',
      text: 'Hệ thống'
    }
  };

  // 8. TÀI KHOẢN & CÁ NHÂN
  const userSectionTitle: MenuItem = {
    id: 100,
    label: 'TÀI KHOẢN & HỆ THỐNG',
    isTitle: true
  };

  const profileItem: MenuItem = {
    id: 101,
    label: 'Hồ sơ cá nhân',
    icon: 'ri-user-line',
    link: '/pages/profile'
  };

  const logoutItem: MenuItem = {
    id: 102,
    label: 'Đăng xuất',
    icon: 'ri-logout-box-r-line',
    link: '/auth/logout/basic'
  };

  const menuItems: MenuItem[] = [
    commonTitle,
    homeItem,
    nckhSchoolItem,
    acceptanceItem,
    transferItem,
    stateProjectItem,
    conferenceItem
  ];

  if (role === 'ADMIN' || role === 'P_KHCN') {
    menuItems.push(adminItem);
  }

  // Bổ sung Hồ sơ & Đăng xuất cho TẤT CẢ các role
  menuItems.push(userSectionTitle, profileItem, logoutItem);

  return menuItems;
}
