export interface PostItem {
  title: string
  href: string
  date: string
}

export const tabs = ['Tin Tức', 'Sự Kiện', 'Tính Năng', 'Hướng Dẫn'] as const

export type TabKey = (typeof tabs)[number]

const samplePosts: PostItem[] = [
  { title: 'Cẩm Nang Các Điểm Lưu Rương', href: 'https://vennguyenkyuc.vn/5866-2', date: '07/02/2026' },
  { title: 'Đua Top AlPha Test: Đóng Nạp – Tặng Trọn Bộ Hành Trang Khởi Sự', href: 'https://vennguyenkyuc.vn/dua-top-alpha-test-tang-bo-hanh-trang-khoi-su', date: '07/02/2026' },
  { title: 'Lộ Trình Đua Top Alpha Test 1: Hoàn Trả 100% Xu Nạp', href: 'https://vennguyenkyuc.vn/lo-trinh-dua-top-alpha-test-1', date: '06/02/2026' },
  { title: 'Cẩm Nang Tân Thủ', href: 'https://vennguyenkyuc.vn/cam-nang-tan-thu', date: '06/02/2026' },
  { title: 'Tổng Quan Máy Chủ Vẹn Nguyên Ký Ức', href: 'https://vennguyenkyuc.vn/tong-quan-may-chu-ven-nguyen-ky-uc', date: '05/02/2026' },
  { title: 'Đua Top Open Test – Hoàn Trả 100% Xu Nạp', href: 'https://vennguyenkyuc.vn/dua-top-open-test-hoan-tra-100-xu-nap', date: '05/02/2026' },
  { title: 'Tổng Hợp Hướng Dẫn Test Thử Nghiệm', href: 'https://vennguyenkyuc.vn/tong-hop-huong-dan-test-thu-nghiem', date: '19/01/2026' },
  { title: 'Giới thiệu môn phái: Thúy Yên Môn', href: 'https://vennguyenkyuc.vn/gioi-thieu-mon-phai-thuy-yen-mon', date: '15/01/2026' },
]

export const tabPosts: Record<TabKey, PostItem[]> = {
  'Tin Tức': samplePosts,
  'Sự Kiện': samplePosts,
  'Tính Năng': samplePosts,
  'Hướng Dẫn': samplePosts,
}
