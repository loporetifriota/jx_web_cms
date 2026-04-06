export interface MenuItem {
  label: string
  href: string
}

export const headerMenu: MenuItem[] = [
  { label: 'TRANG CHỦ', href: '/' },
  { label: 'TIN TỨC', href: '/tin-tuc' },
  { label: 'SỰ KIỆN', href: '/su-kien' },
  { label: 'HƯỚNG DẪN', href: '/huong-dan' },
  { label: 'TÍNH NĂNG', href: '/tinh-nang' },
  { label: 'CỘNG ĐỒNG', href: '/cong-dong' },
]

export const actionMenu = [
  { href: '/huong-dan-cai-dat-game', image: '/images/taigame-btn-f9dafc5a.gif', alt: 'Tải game', className: 'menu-item large' },
  { href: 'https://id.vennguyenkyuc.vn', image: '/images/napthe-btn-1-6f3b3af8.png', alt: 'Nạp thẻ', className: 'menu-item large red' },
  { href: 'https://id.vennguyenkyuc.vn', image: '/images/dangky-btn-905b7528.jpg', alt: 'Đăng ký', className: 'menu-item' },
  { href: 'https://id.vennguyenkyuc.vn/', image: '/images/ql-tk-70f42256.jpg', alt: 'Quản lý tài khoản', className: 'menu-item' },
  { href: '#', image: '/images/cn-btn-fb840027.jpg', alt: 'Cộng đồng', className: 'menu-item' },
  { href: '#', image: '/images/pl-btn-0e21a6dc.jpg', alt: 'Phúc lợi', className: 'menu-item' },
  { href: '#', image: '/images/time-hd-79eb75eb.jpg', alt: 'Hướng dẫn thời gian', className: 'menu-item' },
]

export interface PopupButton {
  href: string
  image: string
  alt: string
  external?: boolean
}

export const popupButtons: PopupButton[] = [
  { href: 'https://id.vennguyenkyuc.vn/homepage/atm-banking', image: '/images/7-3b6462d2.png', alt: 'Nạp thẻ' },
  { href: '/huong-dan-cai-dat-game', image: '/images/6-a7d43abc.png', alt: 'Tải game' },
  { href: 'https://id.vennguyenkyuc.vn/sign-up', image: '/images/5-8496bd05.png', alt: 'Đăng ký' },
  { href: 'SERVER_MOI', image: '/images/4.1-34112f37.png', alt: 'Server mới' },
  { href: 'https://zalo.me/123456789', image: '/images/3.1-b7bb2960.png', alt: 'Hỗ trợ', external: true },
  { href: 'tel:0909090', image: '/images/2-2-5bb6cc2a.png', alt: 'Trung gian' },
]
