# 💻 Bước 4: Lập Trình Hoàn Thiện & Preview (index.html, style.css, main.js)

Đây là bước cuối cùng trong quy trình, chuyển đổi toàn bộ **Bản sắc thiết kế (Bước 2 - `design_system.md`)** và **Khung nội dung chuẩn CRO (Bước 3 - `outline.md`)** thành một sản phẩm Landing Page thực tế, hoạt động hoàn hảo trên trình duyệt.

---

## 🛠️ Lựa Chọn Tech Stack: Đơn Giản Nhất, Tốc Độ Tối Đa

Để đảm bảo quy trình triển khai (deploy) diễn ra đơn giản nhất có thể—**chỉ cần đẩy toàn bộ mã nguồn lên server là chạy ngay lập tức** mà không cần qua bất kỳ khâu biên dịch (compile) hay build script phức tạp nào—chúng ta thống nhất sử dụng **Vanilla Static Web Stack**:

-   **HTML5 (Ngữ nghĩa chuẩn)**: Tạo cấu trúc cây DOM chuẩn SEO, tải nhanh và nhẹ.
-   **Vanilla CSS3 (Biến CSS & Responsive)**: Xử lý toàn bộ giao diện, hiệu ứng kính mờ (glassmorphism), bóng đổ mềm mại, và co giãn mượt mà trên Mobile/Tablet/Desktop.
-   **Vanilla ES6 JavaScript**: Xử lý các tương tác động (cuộn trang mượt mà, bật tắt menu hamburger, hiệu ứng số chạy đếm ngược, cuộn reveal).
-   **Độ tương thích**: 100% tương thích với mọi dịch vụ lưu trữ tĩnh (Apache, Nginx, Vercel, Netlify, Cloudflare Pages, GitHub Pages) mà không cần cài đặt `node_modules`.

---

## 📨 Tích Hợp Form Thu Thập Khách Hàng (Web3Forms API)

Landing Page sẽ sử dụng dịch vụ **Web3Forms** (web3forms.com) để thu thập thông tin khách hàng đăng ký gửi trực tiếp về email mà không cần viết code backend (serverless).

### Quy định triển khai cho AI Agent:
1. **Đọc tệp môi trường (`.env`):** AI Agent **bắt buộc** phải tự động đọc giá trị `web3forms_Api` được lưu trữ tại file `.env` ở thư mục gốc của không gian làm việc.
2. **Tự động nhúng API Key:** AI Agent sẽ tự động điền giá trị API Key này vào trong thẻ input ẩn tại form đăng ký trong file `index.html`:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
       <!-- Tự động nhúng API key từ .env -->
       <input type="hidden" name="access_key" value="1f629fc3-29dd-4793-86b5-8fdfd945373d">
       
       <!-- Cấu hình tùy chọn gửi thành công -->
       <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
       <input type="hidden" name="subject" value="Khách hàng đăng ký tư vấn - The Smile">
       
       <!-- Các trường thông tin nhập liệu -->
       ...
   </form>
   ```
3. **Xử lý bất đồng bộ (AJAX Fetch) trong `main.js`**:
   - Viết sự kiện lắng nghe `submit` trên form.
   - Gửi yêu cầu bằng `fetch` tới API Web3Forms dưới dạng JSON.
   - Hiển thị hộp thoại thông báo thành công (Toast notification) cực đẹp ngay trên giao diện Light Mode mà không bị reload lại trang.

---

## 🎯 Hướng Dẫn Thực Hiện Cho Học Viên

1. Đảm bảo bạn đã chốt nội dung `outline.md` và thiết kế `design_system.md` tại thư mục dự án của mình.
2. Gửi câu lệnh sau cho AI Agent của bạn để tự động lập trình và xem trước:
   > *"Hãy tiến hành Bước 4: Đọc file `.env` ở thư mục gốc lấy API key `web3forms_Api`. Sau đó tổng hợp `design_system.md` và `outline.md` để viết code hoàn chỉnh chất lượng cao vào 3 file: `projects/[tên-dự-án]/index.html` (nhúng mã Web3Forms ẩn), `projects/[tên-dự-án]/style.css` (Premium Light Mode), và `projects/[tên-dự-án]/main.js` (xử lý sự kiện gửi form AJAX Web3Forms mượt mà). Khi viết xong, hãy chạy lệnh Terminal tự động mở file index.html trên trình duyệt để tôi preview kết quả!"*
