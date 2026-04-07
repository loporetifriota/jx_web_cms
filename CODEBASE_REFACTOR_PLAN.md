# Codebase Refactor Plan

## Mục tiêu

Kéo codebase từ trạng thái "dựng giao diện nhanh" sang trạng thái dễ bảo trì hơn, với ranh giới trách nhiệm rõ hơn, cấu hình nhất quán hơn và giảm phụ thuộc vào markup/CSS legacy.

## Ưu tiên 1: Chặn lỗi nền tảng trước

### 1. Đồng bộ môi trường build
- Thêm `engines.node` vào `package.json`.
- Thêm `.nvmrc` hoặc ghi rõ Node version trong `README`.
- Cập nhật `README.md` vì hiện vẫn là template mặc định, không có hướng dẫn chạy project thật.

### 2. Xử lý router và menu cho đúng contract
- `src/data/menu.ts` đang khai báo nhiều link nội bộ.
- `src/router/index.ts` chỉ có `/`.
- Cần chọn 1 trong 2 hướng:
  1. Tạo route thật cho từng mục.
  2. Nếu chưa có page, chuyển các link đó thành external hoặc placeholder có kiểm soát, không để user click vào route chết.

### 3. Dọn placeholder production-risk
- Sửa hoặc bỏ các giá trị giả trong `src/data/menu.ts`:
  - `SERVER_MOI`
  - `https://zalo.me/123456789`
  - `tel:0909090`
  - các `href: '#'`
- Các giá trị này làm code khó tin cậy và khó phân biệt đâu là logic thật, đâu là dữ liệu tạm.

## Ưu tiên 2: Tách trách nhiệm rõ hơn

### 4. Tách content/config khỏi component
- `src/components/layout/AppFooter.vue` đang hard-code toàn bộ legal text và footer links.
- Nên tạo `src/data/site.ts` hoặc `src/config/site.ts` chứa:
  - company info
  - legal licenses
  - footer links
  - contact links
- Lợi ích: sửa nội dung không phải sửa template.

### 5. Bỏ presentation ra khỏi data
- `src/data/menu.ts` đang để `className: 'menu-item large red'`.
- Đây là coupling sai lớp: data không nên biết CSS implementation.
- Nên đổi sang semantic flags như:
  - `variant: 'primary' | 'secondary'`
  - `size: 'normal' | 'large'`
  - `highlighted: boolean`

### 6. Chuẩn hóa model TypeScript
- `src/data/posts.ts` đang dùng `string[]` và `Record<string, PostItem[]>`.
- Nên thay bằng:
  - `const tabs = ['Tin Tức', 'Sự Kiện', 'Tính Năng', 'Hướng Dẫn'] as const`
  - `type TabKey = typeof tabs[number]`
  - `Record<TabKey, PostItem[]>`
- Tương tự cho menu links: phân biệt `internal` và `external`.

## Ưu tiên 3: Giảm coupling với legacy CSS

### 7. Khoanh vùng CSS legacy thành lớp "compatibility"
- `src/main.ts` đang import rất nhiều CSS legacy.
- Đây là dấu hiệu app đang phụ thuộc global side effects.
- Nên chia làm 2 nhóm:
  - CSS nền thực sự còn cần
  - CSS chỉ phục vụ một section cụ thể
- Sau đó gom vào thư mục như `src/styles/legacy/` và comment rõ file nào còn tạm giữ vì lý do gì.

### 8. Giảm class `elementor-*`, `ast-*`, `e-con-*` trong Vue templates
- `src/views/HomeView.vue` và `src/components/layout/AppHeader.vue` đang dày đặc class từ theme cũ.
- Không cần xóa một lượt, nhưng nên refactor theo chiến lược:
  1. Giữ lại class legacy nào bắt buộc để giao diện không vỡ.
  2. Bọc mỗi section bằng class semantic mới của project.
  3. Chuyển style dần sang class semantic mới.
- Ví dụ:
  - `home-main-section`
  - `news-section`
  - `site-header-shell`
  - `site-header-nav`

### 9. Tách layout style lớn khỏi component quá dài
- `src/components/layout/AppHeader.vue` dài khoảng 500 dòng.
- `src/views/HomeView.vue` dài khoảng 266 dòng.
- Với file kiểu này, maintain khó vì template, responsive logic và style override nằm lẫn nhau.
- Nên tách:
  - `AppHeader.vue` + `AppHeader.css` hoặc `AppHeader.module.css`
  - hoặc tách component con: `DesktopHeaderNav`, `MobileHeaderBar`, `MobileHeaderPanel`

## Ưu tiên 4: Làm component semantic hơn

### 10. Refactor `AppHeader` thành component nhỏ hơn
- `src/components/layout/AppHeader.vue` đang ôm:
  - logo
  - desktop nav
  - mobile nav
  - search UI
  - responsive overrides
- Nên tách ít nhất thành:
  - `HeaderLogo`
  - `HeaderNav`
  - `HeaderSearch`
  - `MobileMenu`
- Như vậy mỗi file có trách nhiệm rõ, dễ test và dễ đổi layout.

### 11. `HomeView` đang là page composer nhưng vẫn chứa nhiều layout CSS nặng
- `src/views/HomeView.vue` có rất nhiều style layout và `:deep(...)`.
- Page nên chủ yếu compose section, không nên ôm quá nhiều override chi tiết.
- Nên di chuyển phần style của từng section về component section tương ứng.

### 12. `FeatureShowcase` đang có state nhưng cấu trúc UI chưa rõ vai trò
- `src/components/home/FeatureShowcase.vue`
- `feature-preview` đang `display: none`, nghĩa là state `activeImage` hiện gần như không tạo giá trị giao diện rõ ràng.
- Cần kiểm tra intent:
  1. Nếu thực sự có preview lớn, hiển thị nó đúng cách.
  2. Nếu không cần, bỏ state active và chuyển về render tĩnh.
- Tránh giữ logic không phục vụ UI.

### 13. `ActionMenu` cần semantic API tốt hơn
- `src/components/home/ActionMenu.vue` đang render theo `className` từ data.
- Nên để component quyết định class từ props/data semantic, không lấy nguyên chuỗi class từ source data.

### 14. `FloatingSidebar` cần xử lý hành vi thật
- `src/components/home/FloatingSidebar.vue` có `top-button-overlay` nhưng chỉ là `href="#"`.
- Nếu đây là nút "back to top", cần đổi thành handler thật.
- Nếu chưa dùng, bỏ đi để tránh dead UI.

### 15. `NewsTabs` nên khai báo accessibility đầy đủ hơn
- `src/components/home/NewsTabs.vue`
- Hiện mới có `role="tab"` và `aria-selected`, nhưng chưa có:
  - `id`
  - `aria-controls`
  - `role="tabpanel"`
- Không phải ưu tiên số 1, nhưng nếu muốn code sạch và chuẩn hơn thì nên làm.

## Ưu tiên 5: Dọn dependency và tooling

### 16. Bỏ dependency chưa dùng
- `src/main.ts` đang mount `createPinia()`, nhưng repo chưa có store thực tế.
- Nếu chưa dùng state manager, bỏ `pinia`.
- Tránh để bootstrap có khái niệm thừa.

### 17. Thêm linting
- TS strict đã bật trong `tsconfig.app.json`, đây là tốt.
- Nhưng vẫn nên thêm ESLint cho:
  - Vue template rules
  - unused imports
  - accessibility cơ bản
  - consistency rules
- TS chỉ chặn một phần, không thay thế lint được.

### 18. Thêm smoke tests tối thiểu
- Không cần full test suite ngay.
- Chỉ cần các check đầu tiên:
  - render `HomeView`
  - tab chuyển bài viết
  - header mobile toggle hoạt động
  - route home render không lỗi

## Ưu tiên 6: Tài liệu hóa kiến trúc

### 19. Viết lại `README` theo project thật
- Tối thiểu cần có:
  - mục tiêu repo
  - stack
  - Node version
  - cách chạy
  - cách build
  - cấu trúc thư mục
  - quy ước dữ liệu tĩnh và asset

### 20. Ghi rõ chiến lược "legacy migration"
- Vì repo này rõ ràng đang chuyển từ WordPress/Elementor/Astra sang Vue.
- Nên có 1 note ngắn:
  - phần nào là legacy import
  - phần nào đã refactor
  - nguyên tắc refactor tiếp
- Nếu không, người sau sẽ tiếp tục copy class legacy vô hạn.

## Đánh giá theo file

### `package.json`
- Chưa sạch.
- Vấn đề: thiếu `engines`, dependency thừa, scripts quá ít.

### `README.md`
- Chưa dùng được.
- Cần viết lại hoàn toàn.

### `src/main.ts`
- Đơn giản nhưng noisy vì import quá nhiều CSS global.
- Cần dọn bootstrap.

### `src/router/index.ts`
- Quá mỏng so với menu hiện tại.
- Contract app chưa rõ.

### `src/views/HomeView.vue`
- Đúng vai trò page composer, nhưng đang ôm quá nhiều layout override.
- Cần giảm CSS và `:deep`.

### `src/components/layout/AppHeader.vue`
- Là file cần refactor mạnh nhất.
- Dài, nhiều trách nhiệm, phụ thuộc legacy class cao.

### `src/components/layout/AppFooter.vue`
- Dễ đọc, nhưng content bị hard-code.
- Nên chuyển content ra config.

### `src/components/home/ActionMenu.vue`
- Chấp nhận được về độ ngắn.
- Vấn đề chính là API data sai lớp.

### `src/components/home/FeatureShowcase.vue`
- Code ngắn, nhưng intent UI chưa rõ; state có dấu hiệu thừa.

### `src/components/home/NewsTabs.vue`
- Khá ổn cho component nhỏ.
- Nên siết typing và accessibility.

### `src/components/shared/PostList.vue`
- Sạch nhất trong nhóm hiện tại.
- Có thể giữ làm mẫu cho cách viết component nhỏ.

### `src/data/menu.ts`
- Cần làm lại model.
- Đang lẫn data thật, placeholder và presentation.

### `src/data/posts.ts`
- Chấp nhận được, nhưng typing chưa chặt.

### `src/data/features.ts`
- Ổn hơn `menu.ts`, chỉ cần thêm typing mạnh hơn và semantic naming nếu mở rộng.

## Tóm tắt ngắn

- Readability: `6/10`
- Clean architecture: `4/10`
- Maintainability ngắn hạn: `6/10`
- Maintainability dài hạn: `3.5/10`

Code này ổn cho giai đoạn dựng giao diện nhanh, nhưng chưa ổn cho giai đoạn phát triển tiếp có kiểm soát.

## Bước tiếp theo hợp lý nhất

1. Refactor pass 1 không đổi UI: dọn `README`, `package.json`, `router`, `data models`, bỏ placeholder, bỏ `pinia`.
2. Refactor pass 2: tách `AppHeader.vue` và giảm phụ thuộc legacy CSS.
3. Refactor pass 3: chuẩn hóa content/config và thêm lint + smoke test.
