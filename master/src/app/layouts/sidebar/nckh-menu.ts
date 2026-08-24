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

  // 1. TRANG CHỦ (Trỏ xuống -> Tổng quan)
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
      }
    ]
  };

  // Xác định link Danh sách đề tài & Danh sách đợt đăng ký theo Role
  let topicLink = '/nckh/de-tai-cua-toi';
  let roundLink = '/nckh/cac-dot-dang-ky';
  let topicBadge: any = undefined;

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

  // 2. HOẠT ĐỘNG NGHIÊN CỨU KHOA HỌC CẤP TRƯỜNG (Trỏ xuống -> Danh sách đề tài, Danh sách đợt đăng ký)
  const nckhSchoolItem: MenuItem = {
    id: 20,
    label: 'Hoạt động nghiên cứu khoa học cấp trường',
    icon: 'ri-flask-line',
    isCollapsed: false,
    subItems: [
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
    ]
  };

  // 3. HOẠT ĐỘNG NGHIỆM THU SẢN PHẨM NCKH
  const acceptanceItem: MenuItem = {
    id: 30,
    label: 'Hoạt động nghiệm thu sản phẩm nghiên cứu khoa học',
    icon: 'ri-checkbox-circle-line',
    link: '/',
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
    link: '/',
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
    link: '/',
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
    link: '/',
    badge: {
      variant: 'badge bg-secondary-subtle text-secondary',
      text: 'Sắp mở'
    }
  };

  return [
    commonTitle,
    homeItem,
    nckhSchoolItem,
    acceptanceItem,
    transferItem,
    stateProjectItem,
    conferenceItem
  ];
}
