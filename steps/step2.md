# 🎨 Bước 2: Thiết Kế Bản Sắc Giao Diện (design_system.md)

Sau khi thông tin đầu vào `first_input.md` được kiểm duyệt đầy đủ và đạt yêu cầu chất lượng, bạn sẽ chuyển sang **Bước 2: Xây dựng Thiết kế Hệ thống (Design System)**. 

Mục tiêu của bước này là biến các mô tả phong cách chữ nghĩa thành một bộ quy chuẩn trực quan rõ ràng, đồng bộ cho toàn bộ giao diện Landing Page của bạn.

---

## 🎨 Các Hạng Mục Cần Có Trong `design_system.md`

AI Agent sẽ tạo ra file `projects/[ten-du-an]/design_system.md` dựa theo các nguyên lý thẩm mỹ từ [LandingPage_Skills.md](../Skills/LandingPage_Skills.md). Bản thiết kế bao gồm:

1. **Bảng Màu Thương Hiệu (Color Palette)**:
   - Màu nền chính (Background).
   - Màu khối hộp / thẻ hiển thị (Card base).
   - Màu viền tinh tế (Borders).
   - Các điểm nhấn Neon rực rỡ (Primary / Secondary / Accent Accents) kèm theo mã màu HEX/HSL chính xác.
2. **Hệ Thống Phông Chữ (Typography Mood)**:
   - Liên kết cặp phông chữ Google Fonts (Ví dụ: `Outfit` cho tiêu đề mạnh mẽ + `Inter` cho văn bản sạch sẽ).
   - Kích thước chữ (font sizes), độ dày chữ (font weights) phân tầng rõ rệt.
3. **Linh Kiện Giao Diện Chuẩn (UI Components CSS Tokens)**:
   - Thiết kế khối thẻ (.clean-card hoặc .glass-card) kèm bóng đổ đổ hoặc kính mờ.
   - Các biến thể nút bấm hành động (Primary & Secondary CTA Buttons) kèm chuyển động khi hover.
   - Thiết kế ô nhập liệu (.form-input) khi hoạt động bình thường và khi được focus.
4. **Chuyển Động Vi Tương Tác (Animations & Micro-interactions)**:
   - Hiệu ứng trượt cuộn hiển thị (Scroll Reveal).
   - Hiệu ứng quét sáng (Glow sweep) hoặc chuyển động cuộn vô tận (Marquee loop).

---

## 🎯 Hướng Dẫn Thực Hiện Cho Học Viên

1. Đảm bảo bạn đã hoàn thành **Bước 1** và AI đã xác nhận thông tin.
2. Gửi câu lệnh sau cho AI Agent của bạn để tự động sinh thiết kế:
   > *"Hãy tiến hành Bước 2: Khởi tạo thư mục dự án mới tại `projects/[tên-dự-án]/` (viết liền không dấu). Dựa trên thông tin phong cách ở Bước 1, hãy thiết lập và tạo file `projects/[tên-dự-án]/design_system.md` chứa bảng màu, font chữ, các linh kiện UI và chuyển động chi tiết. Sau khi hoàn thành, hãy tạo hình ảnh thiết kế thương hiệu trực quan làm ảnh tham chiếu lưu cạnh file đó."*
3. **Xem xét & Chỉnh sửa:** Mở trực tiếp file `design_system.md` được tạo ra trong thư mục dự án của bạn để điều chỉnh lại các mã màu hoặc linh kiện cho khớp hoàn toàn với mong muốn cá nhân trước khi chuyển sang Bước 3.
