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

  // 1. TRANG CHỦ (Trỏ xuống -> Tổng quan & Bàn làm việc)
  const homeItem: MenuItem = {
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

  // Xác định link Danh sách đề tài & Danh sách đợt đăng ký theo Role
  let topicLink = '/nckh/de-tai-cua-toi';
  let roundLink = '/nckh/cac-dot-dang-ky';
  let topicBadge: any = undefined;
  const isAuthorRole = (role === 'GIANG_VIEN' || role === 'SINH_VIEN');

  if (role === 'TRUONG_KHOA') {
    topicLink = '/nckh/xet-duyet-ho-so';
    topicBadge = {
      variant: 'badge bg-danger',
      text: 'Cần duyệt'
    };
  } else if (role === 'P_KHCN') {
    topicLink = '/nckh/danh-sach-toan-truong';
    roundLink = '/nckh/quan-ly-dot';
  } else if (role === 'CHU_TICH_HD' || role === 'HOI_DONG_MEMBER' || role === 'THU_KY_HD') {
    topicLink = '/nckh/danh-sach-toan-truong';
  }

  const schoolNckhSubItems: MenuItem[] = [
    {
      id: 21,
      label: 'Danh sách đề tài',
      link: topicLink,
      parentId: 20,
      badge: topicBadge
    },
    {
      id: 22,
      label: 'Danh sách đợt đăng ký',
      link: roundLink,
      parentId: 20
    }
  ];

  if (isAuthorRole) {
    schoolNckhSubItems.push({
      id: 23,
      label: role === 'SINH_VIEN' ? 'Đăng ký đề tài SV (BM01B)' : 'Đăng ký đề tài mới (BM01A)',
      link: '/nckh/dang-ky-moi',
      parentId: 20
    });
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
