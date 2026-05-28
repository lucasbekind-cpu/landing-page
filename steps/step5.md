# 🚀 Bước 5: Triển Khai Landing Page (Deploy Lên Internet Miễn Phí)

Chúc mừng bạn đã hoàn thành việc thiết kế, nội dung CRO và lập trình hoàn thiện Landing Page của mình! Ở bước cuối cùng này, bạn sẽ học cách đưa trang Landing Page tĩnh (Static Website) của mình lên mạng internet hoàn toàn miễn phí để khách hàng có thể truy cập và đăng ký tư vấn.

Vì Landing Page của chúng ta được xây dựng hoàn chỉnh bằng **Vanilla Static Web Stack (HTML5/CSS3/JS)** nên việc triển khai cực kỳ đơn giản, nhẹ nhàng và tải nhanh tuyệt đối.

---

## 🛠️ 2 Giải Pháp Deploy Miễn Phí Dễ Dàng Nhất Cho Học Viên

Dưới đây là 2 phương án deploy miễn phí hàng đầu được thiết kế riêng phù hợp với từng mức độ kỹ năng của học viên:

### 🌟 Phương Án 1: Netlify Drop (Dễ nhất - Xong trong 10 giây!)
*Dành cho: Học viên muốn đưa website lên mạng ngay lập tức mà không cần cài đặt Git, Command Line hay cấu hình phức tạp.*

Netlify là nền tảng máy chủ đám mây cực mạnh cho web tĩnh. Họ cung cấp tính năng **Netlify Drop** cho phép kéo thả thư mục chứa code để xuất bản website trong vài giây.

#### Các bước thực hiện:
1. Truy cập trang web: [Netlify Drop](https://app.netlify.com/drop) (Bạn không cần đăng nhập vẫn làm được, nhưng nên tạo tài khoản miễn phí để quản lý website lâu dài).
2. Mở trình quản lý file trên máy tính của bạn (Finder trên Mac hoặc File Explorer trên Windows).
3. Tìm đến thư mục dự án của bạn (Ví dụ: `projects/the-smile/`).
4. **Kéo toàn bộ thư mục `the-smile`** (hoặc thư mục dự án của bạn) thả trực tiếp vào ô kéo thả trên trang Netlify Drop.
5. **Xong!** Netlify sẽ cấp cho bạn một đường dẫn URL ngẫu nhiên dạng `https://ten-ngau-nhien.netlify.app/` hoạt động trực tiếp 100% toàn cầu.
6. *Mẹo nâng cao*: Đăng nhập tài khoản Netlify miễn phí, vào mục **Site Configuration -> General -> Change Site Name** để đổi tên miền ngắn gọn theo ý thích (Ví dụ: `https://thesmile-ketoan.netlify.app`).

---

### 🐙 Phương Án 2: GitHub Pages (Chuyên nghiệp - Tự động cập nhật qua Git)
*Dành cho: Học viên muốn rèn luyện kỹ năng sử dụng Git chuẩn dự án và tự động hóa cập nhật website mỗi khi thay đổi code.*

GitHub Pages cho phép bạn lưu trữ trang tĩnh miễn phí trực tiếp từ kho chứa mã nguồn (GitHub Repository) của bạn.

#### Các bước thực hiện:
1. **Đưa code lên GitHub:** Khởi tạo repository trên tài khoản GitHub của bạn và đẩy toàn bộ mã nguồn của không gian làm việc này lên GitHub.
2. **Cấu hình trên GitHub:**
   - Truy cập vào Repository của bạn trên GitHub.
   - Nhấp chọn tab **Settings (Cài đặt)** ở thanh menu phía trên.
   - Ở thanh menu bên trái, tìm và nhấp chọn mục **Pages (Trang)**.
3. **Thiết lập nhánh Deploy:**
   - Tại mục *Build and deployment -> Source*, chọn **Deploy from a branch**.
   - Tại mục *Branch*, chọn nhánh chính của bạn (thường là `main` hoặc `master`).
   - Chọn thư mục là `/ (root)` hoặc chọn thư mục `/docs` (nếu bạn chuyển dự án vào docs).
   - Nhấp nút **Save (Lưu)**.
4. **Nhận kết quả:**
   - Chờ khoảng 1 - 2 phút để GitHub tự động xây dựng máy chủ tĩnh.
   - F5 lại trang, GitHub sẽ cung cấp cho bạn một đường dẫn URL dạng: `https://[ten-tai-khoan-github].github.io/[ten-repository]/projects/the-smile/`
   - *Ưu điểm tuyệt đối*: Mỗi khi bạn chỉnh sửa CSS/HTML trên máy tính và chạy lệnh `git commit` & `git push`, website trên internet của bạn sẽ **tự động cập nhật** sau 30 giây!

> [!CAUTION]
> **QUY TẮC BẢO MẬT & ĐẨY CODE LÊN GITHUB (DEPLOY NOTE):**
> AI Agent tuyệt đối **không được tự động đẩy (push) mã nguồn lên GitHub** hoặc thực hiện các lệnh Git push nếu **chưa nhận được yêu cầu cụ thể và trực tiếp** từ học viên. Điều này nhằm tránh các xung đột mã nguồn ngoài ý muốn và giữ toàn quyền kiểm soát kho lưu trữ cho học viên.

---

## 🎯 Cổng Đăng Ký Web3Forms của bạn vẫn hoạt động chứ?

- **Hoạt động hoàn hảo!** Dịch vụ Web3Forms xử lý thu thập dữ liệu bằng AJAX Fetch trực tiếp từ client-side qua mã API Key bạn đã nhúng ở file HTML.
- Khi người dùng gửi form trên URL đã deploy (Netlify hoặc GitHub Pages), dữ liệu sẽ lập tức được bắn thẳng về hòm thư Email đăng ký Web3Forms của bạn mà không cần bất kỳ cấu hình máy chủ phụ trợ nào!

---

## 🏁 Học Viên Hãy Làm Theo Hướng Dẫn Sau Để Hoàn Thành Khóa Học:

1. Lựa chọn một trong hai phương án trên (khuyên dùng **Netlify Drop** cho nhanh hoặc **GitHub Pages** nếu muốn tối ưu quy trình Git).
2. Deploy thành công dự án của mình.
3. Copy đường link URL trực tiếp đã deploy thành công và gửi cho giảng viên/người hướng dẫn để nhận đánh giá tối ưu chuyển đổi CRO thực tế!

*Chúc các bạn học viên ra mắt sản phẩm Landing Page đầu tay thật bùng nổ và mang lại chuyển đổi đột phá!*
