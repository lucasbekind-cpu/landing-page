# 🚀 Landing Page Generator - Interactive Student Workspace

Chào mừng bạn đến với **Landing Page Generator Workspace**! Đây là môi trường Git tiêu chuẩn được thiết kế đặc biệt để giúp học viên hợp tác cùng AI Coding Agent (như Antigravity hoặc Claude) xây dựng các trang Landing Page tuyệt đẹp, chuẩn CRO và tối ưu hóa trải nghiệm người dùng (UX/UI).

Không gian làm việc này kế thừa tinh hoa thiết kế hiện đại từ các sản phẩm thực tế như **noti.vn** và **lucasvn.com**.

---

## 🗺️ Quy trình 4 Bước Trực quan

Quy trình xây dựng Landing Page được đóng gói thành 4 giai đoạn rõ ràng. Hãy copy các mẫu prompt tương ứng ở dưới và gửi cho AI của bạn để bắt đầu từng bước!

```
 Giai đoạn 1: Khảo sát ý tưởng (Input)
       │
       ▼
 Giai đoạn 2: Thiết kế hệ thống (Design System) -> Sinh file projects/[tên-dự-án]/design_system.md
       │
       ▼
 Giai đoạn 3: Soạn thảo nội dung (CRO Outline)   -> Sinh file projects/[tên-dự-án]/outline.md
       │
       ▼
 Giai đoạn 4: Lập trình & Xem kết quả (Code)     -> Sinh các file index.html, style.css, main.js & Mở trình duyệt
       │
       ▼
 Giai đoạn 5: Triển khai lên Internet (Deploy)   -> Deploy miễn phí lên Netlify Drop hoặc GitHub Pages
```

---

## ✍️ Hướng dẫn Từng bước & Mẫu Prompt cho AI

Để bắt đầu, hãy mở một cuộc hội thoại mới với AI Agent của bạn ngay tại không gian làm việc này và làm theo các bước:

### 🏷️ Bước 1: Cung cấp Thông tin Dự án
Sao chép mẫu bên dưới, điền thông tin dự án của bạn và gửi cho AI:

```markdown
Chào AI, tôi muốn bắt đầu xây dựng một Landing Page mới theo Quy trình 4 Bước chuẩn của workspace.
Dưới đây là thông tin đầu vào của tôi (Bước 1):
1. Sản phẩm & Dịch vụ: [Ví dụ: Dịch vụ tư vấn tuyển dụng AI tự động cho SMEs]
2. Phong cách giao diện mong muốn: [Ví dụ: Premium Dark Mode với hiệu ứng neon và kính mờ glassmorphism]
3. Ngôn ngữ chính: [Ví dụ: Tiếng Việt]

Hãy phân tích thông tin đầu vào này và xác nhận bạn đã sẵn sàng chuyển sang Bước 2 (Tạo Design System).
```

---

### 🎨 Bước 2: Tạo Design System
Sau khi AI xác nhận, hãy yêu cầu AI thiết kế giao diện bằng prompt sau:

```markdown
Hãy tiến hành Bước 2: Dựa trên thông tin tôi cung cấp ở Bước 1 kết hợp với chỉ dẫn phong cách tại `LandingPage_Skills.md`, hãy tạo một thư mục dự án mới bên trong thư mục `projects/` với tên dự án viết liền không dấu.
Sau đó, hãy tạo file `projects/[tên-dự-án]/design_system.md` mô tả chi tiết:
- Bảng màu chủ đạo (Color Palette) kèm hiệu ứng phát sáng (glow)
- Typography (Cặp font chữ Google Fonts được chọn)
- Các UI Components (Nút bấm, thẻ hiển thị, inputs)
- Chuyển động (Animations) và cấu trúc lưới.

Khi hoàn thành, hãy thông báo cho tôi để tôi vào kiểm tra và sửa đổi nếu cần!
```
> [!TIP]
> **Lưu ý cho Học viên:** Bạn có thể mở trực tiếp thư mục [projects/](projects/) vừa tạo để tùy chỉnh các mã màu HEX/HSL hoặc font chữ theo ý thích cá nhân của mình!

---

### 📝 Bước 3: Soạn thảo Nội dung chuẩn CRO
Khi đã chốt hệ thống thiết kế giao diện, hãy yêu cầu AI lên khung nội dung:

```markdown
Tuyệt vời, thiết kế đã được duyệt. Hãy chuyển sang Bước 3: Phân bổ và soạn thảo copywriting nội dung chi tiết theo cấu trúc lưới 8 phần chuẩn của tài liệu `LandingPage_Skills.md`.
Hãy tạo file `projects/[tên-dự-án]/outline.md` chứa toàn bộ copywriting chuẩn CRO tương ứng với ngôn ngữ đã chọn.

Khi viết xong, hãy dừng lại để tôi kiểm duyệt câu chữ trong file outline.md trước khi lập trình.
```
> [!IMPORTANT]
> **Cấu trúc 8 phần thuyết phục:** File outline sẽ tự động phân bổ nội dung qua các phần: Navbar ➔ Hero cuốn hút ➔ Số liệu thống kê & Marquee logo ➔ Lưới sản phẩm/dịch vụ ➔ Social Proof / Cộng đồng ➔ Câu chuyện thương hiệu & Tag kỹ năng ➔ Blog chia sẻ uy tín ➔ Form đăng ký FormSubmit.

---

### 💻 Bước 4: Lập trình Hoàn thiện & Xem Kết quả (Code & Preview)
Sau khi bạn đã ưng ý với nội dung của `outline.md`, hãy sao chép prompt sau gửi cho AI Agent để viết code hoàn chỉnh:

```markdown
Nội dung outline.md đã hoàn chỉnh! Hãy tiến hành Bước 4 theo hướng dẫn tại `steps/step4.md`:
1. Đọc tệp `.env` ở thư mục gốc để lấy mã API key `web3forms_Api`.
2. Sử dụng Vanilla Static Web Stack (HTML5, CSS3, JS thuần) để lập trình và lưu thành 3 file chất lượng cao:
   - `projects/[tên-dự-án]/index.html` (HTML ngữ nghĩa chuẩn SEO, tự động nhúng mã Web3Forms ẩn từ .env).
   - `projects/[tên-dự-án]/style.css` (Phong cách Premium Light Mode, co giãn mượt mà responsive).
   - `projects/[tên-dự-án]/main.js` (Hiệu ứng cuộn reveal, menu hamburger, đếm số, và sự kiện AJAX Fetch submit gửi form Web3Forms mượt mà).
3. Sau khi tạo xong, hãy tự động chạy lệnh Terminal mở file index.html trên trình duyệt để hiển thị sản phẩm thực tế cho tôi xem!
```

---

### 🚀 Bước 5: Triển khai Landing Page (Deploy)
Sau khi trang Landing Page đã chạy hoàn hảo trên máy tính của bạn, hãy sao chép prompt sau gửi cho AI Agent để bắt đầu đưa sản phẩm lên mạng Internet:

```markdown
Mọi thứ đã chạy hoàn hảo! Hãy tiến hành Bước 5 theo hướng dẫn tại `steps/step5.md`: hướng dẫn tôi chi tiết các bước để deploy trang Landing Page này lên mạng Internet miễn phí bằng Netlify Drop hoặc GitHub Pages để tôi có thể chia sẻ sản phẩm thực tế của mình!
```

---

## 🛠️ Quy định Kỹ thuật (Dành cho Học viên & AI)

Để đảm bảo chất lượng sản phẩm đầu ra, hãy luôn kiểm tra chéo các tiêu chí:
- **Đóng gói dự án**: Toàn bộ tệp tin tạo ra phải nằm gọn gàng trong thư mục con tương ứng tại `projects/`. Không tạo file rác ở thư mục ngoài.
- **Tính đáp ứng (Responsive)**: Co giãn mượt mà trên mọi kích thước màn hình thiết bị di động, máy tính bảng và máy tính để bàn.
- **Tương tác mượt mà**: Menu trượt mượt mà, hiệu ứng lướt nhẹ nhàng, tạo cảm giác cao cấp và chuyên nghiệp khi trải nghiệm.

*Chúc các bạn học viên xây dựng được những Landing Page đột phá cùng AI Agent của mình!*
