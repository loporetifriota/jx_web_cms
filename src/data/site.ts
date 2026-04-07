export interface SiteLink {
  label: string
  href: string
}

export interface SiteConfig {
  footerLinks: SiteLink[]
  companyName: string
  companyAddress: string
  companyPhone: string
  servicePermit: string
  gameReleasePermit: string
}

export const siteConfig: SiteConfig = {
  footerLinks: [
    { label: 'Giới Thiệu', href: 'https://vennguyenkyuc.vn/gioi-thieu' },
    { label: 'Điều Khoản', href: 'https://vennguyenkyuc.vn/dieu-khoan' },
    { label: 'Bảo vệ tài khoản', href: 'https://vennguyenkyuc.vn/bao-ve-tai-khoan' },
    { label: 'Hỗ trợ', href: 'https://vennguyenkyuc.vn/ho-tro' },
  ],
  companyName: 'Công ty TNHH Dịch vụ Bách Gia',
  companyAddress: '230/30 Phan Huy Ích, Phường An Hội Tây, Thành phố Hồ Chí Minh, Việt Nam.',
  companyPhone: '0823057899',
  servicePermit:
    'Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 117/QĐ-PTTH&TTĐT do Cục phát thanh Truyền hình và Thông tin điện tử cấp ngày 30/07/2025.',
  gameReleasePermit:
    'Quyết định phát hành trò chơi điện tử G1 trên mạng số 03/QĐ-PTTH&TTĐT do Cục phát thanh Truyền hình và Thông tin điện tử cấp ngày 06/01/2026.',
}
