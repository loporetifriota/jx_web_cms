export interface MenuItem {
  label: string
  href: string
  external?: boolean
}

export interface ActionMenuItem {
  href: string
  image: string
  alt: string
  external?: boolean
  size?: 'normal' | 'large'
  highlighted?: boolean
}

export interface PopupButton {
  href: string
  image: string
  alt: string
  external?: boolean
}

export const headerMenu: MenuItem[] = [
  { label: 'TRANG CHỦ', href: '/' },
  { label: 'TIN TỨC', href: 'https://vennguyenkyuc.vn/tin-tuc', external: true },
  { label: 'SỰ KIỆN', href: 'https://vennguyenkyuc.vn/su-kien', external: true },
  { label: 'HƯỚNG DẪN', href: 'https://vennguyenkyuc.vn/huong-dan', external: true },
  { label: 'TÍNH NĂNG', href: 'https://vennguyenkyuc.vn/tinh-nang', external: true },
  { label: 'CỘNG ĐỒNG', href: 'https://vennguyenkyuc.vn/cong-dong', external: true },
]

export const actionMenu: ActionMenuItem[] = [
  { href: 'https://vennguyenkyuc.vn/huong-dan-cai-dat-game', image: '/images/taigame-btn-f9dafc5a.gif', alt: 'Tải game', external: true, size: 'large' },
  { href: 'https://id.vennguyenkyuc.vn', image: '/images/napthe-btn-1-6f3b3af8.png', alt: 'Nạp thẻ', external: true, size: 'large', highlighted: true },
  { href: 'https://id.vennguyenkyuc.vn/sign-up', image: '/images/dangky-btn-905b7528.jpg', alt: 'Đăng ký', external: true },
  { href: 'https://id.vennguyenkyuc.vn/', image: '/images/ql-tk-70f42256.jpg', alt: 'Quản lý tài khoản', external: true },
  { href: 'https://vennguyenkyuc.vn/cong-dong', image: '/images/cn-btn-fb840027.jpg', alt: 'Cộng đồng', external: true },
  { href: 'https://vennguyenkyuc.vn/phuc-loi', image: '/images/pl-btn-0e21a6dc.jpg', alt: 'Phúc lợi', external: true },
  { href: 'https://vennguyenkyuc.vn/huong-dan-thoi-gian', image: '/images/time-hd-79eb75eb.jpg', alt: 'Hướng dẫn thời gian', external: true },
]

export const popupButtons: PopupButton[] = [
  { href: 'https://id.vennguyenkyuc.vn/homepage/atm-banking', image: '/images/7-3b6462d2.png', alt: 'Nạp thẻ', external: true },
  { href: '/huong-dan-cai-dat-game', image: '/images/6-a7d43abc.png', alt: 'Tải game' },
  { href: 'https://id.vennguyenkyuc.vn/sign-up', image: '/images/5-8496bd05.png', alt: 'Đăng ký', external: true },
  { href: 'https://vennguyenkyuc.vn/server-moi', image: '/images/4.1-34112f37.png', alt: 'Server mới', external: true },
  { href: 'https://vennguyenkyuc.vn/ho-tro', image: '/images/3.1-b7bb2960.png', alt: 'Hỗ trợ', external: true },
  { href: 'https://vennguyenkyuc.vn/trung-gian', image: '/images/2-2-5bb6cc2a.png', alt: 'Trung gian', external: true },
]
