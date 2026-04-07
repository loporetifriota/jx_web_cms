# JX Web CMS

Frontend Vue 3 cho trang chủ Vẹn Nguyên Ký Ức, được tách dần từ nền WordPress/Elementor sang codebase component-based dễ bảo trì hơn.

## Tech stack
- Vue 3 + TypeScript
- Vite
- Vue Router
- Swiper

## Yêu cầu môi trường
- Node.js `>=18.20.8` (xem thêm `.nvmrc`)
- npm đi kèm Node

## Cài đặt và chạy local
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
npm run preview
```

## Cấu trúc thư mục chính
- `src/components/` - UI components theo từng khu vực (`layout`, `home`, `shared`)
- `src/views/` - trang cấp route
- `src/data/` - dữ liệu tĩnh và config nội dung
- `src/assets/legacy-css/` - CSS legacy tạm thời từ hệ cũ (entry chính: `index.css`)

## Legacy migration note
Dự án đang trong giai đoạn migration dần từ class/stylesheet legacy (`ast-*`, `elementor-*`, `e-con-*`) sang cấu trúc semantic nội bộ. Khi refactor:
1. Ưu tiên giữ ổn định UI hiện tại.
2. Tách trách nhiệm component và data trước.
3. Chỉ gỡ CSS legacy khi đã có style thay thế rõ ràng.
