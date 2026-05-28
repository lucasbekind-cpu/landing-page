tôi muốn nó thành 1 cái git khá common cho học viên sử dụng flow sẽ là :
Step 1: Người dùng được yêu cầu nhập mô tả về landing page:
- Sản phẩm & Dịch vụ của họ là gì?
- Phong cách website (Dark/Light, Minimalist/Futuristic...)
- Ngôn ngữ website Tiếng Việt / Tiếng Anh

Step 2: Tạo design System
- Dựa vào input, AI sẽ dựa vào skill trên để tạo ra bảng demo phong cách (styles, components, animations, grid system) sẽ được tạo ra 
- Cho phép người dùng chỉnh sửa cho phù hợp

Step 3: Các hạng mục (sections của landind page)
- Phân bổ nội dung hợp lý qua các sections
- Tạo nội dung chuẩn CRO
- tạo 1 file outline.md với các section
- Cho phép người dùng chỉnh sửa outline.md

Step 4: Sau khi có nội dung và design System, tiến hành code 1 landing page hoàn chỉnh dạng html / css / js
Sau đó mở trình duyệt lên để xem kết quả

Lưu ý chung: tất cả phải để vào 1 thư mục con trong thư mục projects

---
Phase 2: Tính năng conversion tracking & Deploy Note
- Đọc tệp `.env` trích xuất `gtm_id` để nhúng an toàn container GTM.
- Bắn sự kiện chuyển đổi (Custom Event): Sau khi người dùng gửi form thành công qua AJAX, kích hoạt lệnh `window.dataLayer.push({ 'event': 'lead_form_success' })` trong `main.js` để GTM có thể bắt được và theo dõi lượt chuyển đổi.
- Quy tắc Deploy lên GitHub: AI Agent **chỉ thực hiện việc đẩy (push) mã nguồn lên kho lưu trữ GitHub khi học viên/người dùng yêu cầu cụ thể**.
