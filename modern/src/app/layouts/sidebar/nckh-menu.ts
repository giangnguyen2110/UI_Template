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

  // NÚT 1: TRANG CHỦ
  const homeGroup: MenuItem = {
    id: 10,
    label: 'Trang chủ',
    icon: 'ri-home-4-line',
    isCollapsed: false,
    subItems: [
      {
        id: 11,
        label: 'Cổng 5 Module Tổng quan',
        link: '/',
        parentId: 10
      },
      {
        id: 12,
        label: 'Bàn làm việc NCKH (Module 1)',
        link: '/nckh/dashboard',
        parentId: 10
      }
    ]
  };

  // NÚT 3: CÁC MODULE KHÁC
  const otherModulesGroup: MenuItem = {
    id: 30,
    label: 'Các module khác',
    icon: 'ri-apps-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 31,
        label: 'Module 2: Nghiệm thu sản phẩm',
        link: '/',
        parentId: 30,
        badge: {
          variant: 'badge bg-secondary-subtle text-secondary',
          text: 'Sắp mở'
        }
      },
      {
        id: 32,
        label: 'Module 3: Chuyển giao công nghệ',
        link: '/',
        parentId: 30,
        badge: {
          variant: 'badge bg-secondary-subtle text-secondary',
          text: 'Sắp mở'
        }
      },
      {
        id: 33,
        label: 'Module 4: Đề tài cấp Nhà nước/Tỉnh',
        link: '/',
        parentId: 30,
        badge: {
          variant: 'badge bg-secondary-subtle text-secondary',
          text: 'Sắp mở'
        }
      },
      {
        id: 34,
        label: 'Module 5: Tổ chức Hội nghị/Hội thảo',
        link: '/',
        parentId: 30,
        badge: {
          variant: 'badge bg-secondary-subtle text-secondary',
          text: 'Sắp mở'
        }
      }
    ]
  };

  // NÚT 4: HỒ SƠ VÀ TÀI KHOẢN
  const accountGroup: MenuItem = {
    id: 40,
    label: 'Hồ sơ và tài khoản',
    icon: 'ri-user-settings-line',
    isCollapsed: true,
    subItems: [
      {
        id: 41,
        label: 'Thông tin cá nhân',
        link: '/pages/profile',
        parentId: 40
      },
      {
        id: 42,
        label: 'Đơn vị / Khoa trực thuộc',
        link: '/nckh/dashboard',
        parentId: 40
      },
      {
        id: 43,
        label: 'Cài đặt mật khẩu & Bảo mật',
        link: '/pages/profile',
        parentId: 40
      },
      {
        id: 44,
        label: 'Hướng dẫn quy trình NCKH (9 Bước)',
        link: '/nckh/dashboard',
        parentId: 40
      }
    ]
  };

  // NÚT 2: NGHIỆP VỤ CỦA TỪNG ROLE (BƯỚC 01)
  let roleBusinessGroup: MenuItem;

  switch (role) {
    case 'GIANG_VIEN':
      roleBusinessGroup = {
        id: 20,
        label: 'Nghiệp vụ Giảng viên',
        icon: 'ri-briefcase-line',
        isCollapsed: false,
        subItems: [
          {
            id: 21,
            label: 'Đợt đăng ký đang mở',
            link: '/nckh/cac-dot-dang-ky',
            parentId: 20
          },
          {
            id: 22,
            label: 'Đề tài của tôi (Tối đa 2)',
            link: '/nckh/de-tai-cua-toi',
            parentId: 20
          },
          {
            id: 23,
            label: 'Đăng ký đề tài mới (BM01A)',
            link: '/nckh/dang-ky-moi',
            parentId: 20
          }
        ]
      };
      return [commonTitle, homeGroup, roleBusinessGroup, otherModulesGroup, accountGroup];

    case 'SINH_VIEN':
      roleBusinessGroup = {
        id: 20,
        label: 'Nghiệp vụ Sinh viên',
        icon: 'ri-graduation-cap-line',
        isCollapsed: false,
        subItems: [
          {
            id: 21,
            label: 'Đợt đăng ký sinh viên',
            link: '/nckh/cac-dot-dang-ky',
            parentId: 20
          },
          {
            id: 22,
            label: 'Đề tài của tôi (Tối đa 2)',
            link: '/nckh/de-tai-cua-toi',
            parentId: 20
          },
          {
            id: 23,
            label: 'Đăng ký đề tài SV (BM01B)',
            link: '/nckh/dang-ky-moi',
            parentId: 20
          }
        ]
      };
      return [commonTitle, homeGroup, roleBusinessGroup, otherModulesGroup, accountGroup];

    case 'TRUONG_KHOA':
      roleBusinessGroup = {
        id: 20,
        label: 'Nghiệp vụ Trưởng Khoa',
        icon: 'ri-award-line',
        isCollapsed: false,
        subItems: [
          {
            id: 21,
            label: 'Duyệt hồ sơ GV (Bước 01)',
            link: '/nckh/xet-duyet-ho-so',
            parentId: 20,
            badge: {
              variant: 'badge bg-danger',
              text: 'Cần duyệt'
            }
          },
          {
            id: 22,
            label: 'Hồ sơ đề tài Khoa CNTT',
            link: '/nckh/de-tai-don-vi',
            parentId: 20
          },
          {
            id: 23,
            label: 'Đợt đăng ký NCKH',
            link: '/nckh/cac-dot-dang-ky',
            parentId: 20
          }
        ]
      };
      return [commonTitle, homeGroup, roleBusinessGroup, otherModulesGroup, accountGroup];

    case 'P_KHCN':
      roleBusinessGroup = {
        id: 20,
        label: 'Nghiệp vụ P.KHCN',
        icon: 'ri-building-line',
        isCollapsed: false,
        subItems: [
          {
            id: 21,
            label: 'Quản lý Đợt đăng ký',
            link: '/nckh/quan-ly-dot',
            parentId: 20
          },
          {
            id: 22,
            label: 'Danh mục Đề tài Giao trực tiếp',
            link: '/nckh/quan-ly-dot',
            parentId: 20
          },
          {
            id: 23,
            label: 'Hồ sơ toàn trường (Bước 01)',
            link: '/nckh/danh-sach-toan-truong',
            parentId: 20
          },
          {
            id: 24,
            label: 'Hội đồng xét duyệt (Bước 02)',
            link: '/nckh/danh-sach-toan-truong',
            parentId: 20
          }
        ]
      };
      return [commonTitle, homeGroup, roleBusinessGroup, otherModulesGroup, accountGroup];

    // Đối với các vai trò còn lại: giữ nguyên menu gốc của template như lúc đầu mới mua
    case 'GIANG_VIEN_HD':
    case 'CHU_TICH_HD':
    case 'HOI_DONG_MEMBER':
    case 'THU_KY_HD':
    case 'ADMIN':
    default:
      return MENU;
  }
}
