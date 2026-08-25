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

  // 1. TRANG CHỦ (Giảng viên & Sinh viên gộp làm 1 vào Trang chủ)
  let homeItem: MenuItem;
  if (role === 'GIANG_VIEN' || role === 'SINH_VIEN') {
    homeItem = {
      id: 10,
      label: 'Trang chủ',
      icon: 'ri-home-4-line',
      link: '/nckh/dashboard'
    };
  } else {
    homeItem = {
      id: 10,
      label: 'Trang chủ',
      icon: 'ri-home-4-line',
      isCollapsed: false,
      subItems: [
        {
          id: 11,
          label: 'Tổng quan',
          link: '/',
          parentId: 10
        },
        {
          id: 12,
          label: 'Bàn làm việc NCKH',
          link: '/nckh/dashboard',
          parentId: 10
        }
      ]
    };
  }

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
        label: 'Xét duyệt hồ sơ Khoa (B01)',
        link: '/nckh/xet-duyet-ho-so',
        parentId: 20,
        badge: {
          variant: 'badge bg-danger',
          text: 'Cần duyệt'
        }
      },
      {
        id: 22,
        label: 'Đề tài thuộc đơn vị',
        link: '/nckh/de-tai-don-vi',
        parentId: 20
      },
      {
        id: 23,
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
      },
      {
        id: 24,
        label: 'Hồ sơ xét duyệt',
        link: '/nckh/xet-duyet-ho-so',
        parentId: 20
      }
    );
  } else if (role === 'CHU_TICH_HD' || role === 'HOI_DONG_MEMBER' || role === 'THU_KY_HD') {
    schoolNckhSubItems.push(
      {
        id: 21,
        label: 'Hồ sơ Hội đồng thẩm định',
        link: '/nckh/xet-duyet-ho-so',
        parentId: 20,
        badge: {
          variant: 'badge bg-warning',
          text: 'Hội đồng'
        }
      },
      {
        id: 22,
        label: 'Danh sách Hội đồng Khoa học',
        link: '/nckh/quan-ly-hoi-dong',
        parentId: 20
      },
      {
        id: 23,
        label: 'Danh mục đề tài toàn trường',
        link: '/nckh/danh-sach-toan-truong',
        parentId: 20
      },
      {
        id: 24,
        label: 'Danh sách đợt đăng ký',
        link: '/nckh/cac-dot-dang-ky',
        parentId: 20
      }
    );
  } else if (role === 'ADMIN') {
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
        parentId: 20
      },
      {
        id: 23,
        label: 'Quản lý đề tài toàn trường',
        link: '/nckh/danh-sach-toan-truong',
        parentId: 20
      },
      {
        id: 24,
        label: 'Xét duyệt hồ sơ',
        link: '/nckh/xet-duyet-ho-so',
        parentId: 20
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

  // 7. HỒ SƠ NGƯỜI DÙNG (Trỏ xuống)
  const profileItem: MenuItem = {
    id: 70,
    label: 'Hồ sơ người dùng',
    icon: 'ri-user-settings-line',
    isCollapsed: false,
    subItems: [
      {
        id: 71,
        label: 'Thông tin cá nhân',
        link: '/pages/profile',
        parentId: 70
      },
      {
        id: 72,
        label: 'Cài đặt tài khoản & Bảo mật',
        link: '/pages/profile-setting',
        parentId: 70
      }
    ]
  };

  // 8. ĐĂNG XUẤT (Dưới cùng)
  const logoutItem: MenuItem = {
    id: 80,
    label: 'Đăng xuất',
    icon: 'ri-logout-box-r-line text-danger',
    link: '/auth/login'
  };

  return [
    commonTitle,
    homeItem,
    nckhSchoolItem,
    acceptanceItem,
    transferItem,
    stateProjectItem,
    conferenceItem,
    profileItem,
    logoutItem
  ];
}
