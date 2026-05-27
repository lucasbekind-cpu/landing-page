---
description: Lưu giữ ngữ cảnh hiện tại và nhật ký kỹ thuật vào Memory Bank
---

# Quy trình Lưu Ngữ Cảnh (Save Context Workflow)

Khi được học viên yêu cầu hoặc khi chuẩn bị kết thúc một phiên làm việc dài, AI Agent phải tuân thủ nghiêm ngặt quy trình sao lưu trạng thái dự án để đảm bảo phiên làm việc tiếp theo có thể tiếp tục một cách mượt mà và không mất dữ liệu:

1. **Đảm bảo thư mục Memory Bank tồn tại**:
   Nếu thư mục `memory_bank/` chưa có ở thư mục gốc, hãy tự động khởi tạo:
   ```bash
   mkdir -p memory_bank
   ```

2. **Tổng hợp và đúc kết thông tin phiên làm việc**:
   Tóm tắt các yêu cầu của học viên, các nhiệm vụ đã thực hiện thành công, và hiện trạng mã nguồn hiện tại của dự án.

3. **Cập nhật trạng thái Ngữ cảnh hoạt động (`memory_bank/active_context.md`)**:
   Ghi đè hoàn toàn tệp này bằng một snapshot mới nhất, bao gồm 3 phần chính bắt buộc:
   - **Tiêu điểm hiện tại (Current Focus)**: Nhiệm vụ đang được triển khai dở dang hoặc sắp thực hiện.
   - **Các tệp đang mở / chỉnh sửa (Active Files)**: Các file chính liên quan trực tiếp đến tiến trình.
   - **Các bước tiếp theo ngay lập tức (Next Immediate Steps)**: Chỉ dẫn cụ thể, rõ ràng cho AI phiên sau để bắt tay vào làm việc được ngay.

4. **Ghi nhật ký vào Nhật ký hoạt động (`memory_bank/daily_logs.md`)**:
   *Đây là bước cực kỳ quan trọng*. AI Agent phải nối (append) thông tin lịch sử của phiên vào cuối file:
   - Thêm tiêu đề H2 (`##`) với ngày tháng và thời gian hiện tại.
   - Thêm tiêu đề H3 (`### Các việc đã làm xong`) để liệt kê chi tiết các tính năng đã code xong, bugs đã fix hoặc file đã tạo.
   - Thêm tiêu đề H3 (`### Quyết định Kỹ thuật & Ràng buộc`) để ghi lại các lựa chọn công nghệ, biến môi trường `.env` vừa cấu hình, API tích hợp (ví dụ: Web3Forms) hoặc kiến trúc CSS/JS được áp dụng.

5. **Đồng bộ hóa phiên bản (Git Commit)**:
   Tự động lưu trữ và đồng bộ hóa thư mục Memory Bank vào Git:
   ```bash
   git add memory_bank/
   git commit -m "docs(memory): save context and daily logs"
   ```

6. **Báo cáo kết quả lưu trữ cho Học viên**:
   Gửi thông báo ngắn gọn xác nhận rằng toàn bộ dữ liệu ngữ cảnh đã được chụp nhanh (snapshot) và lưu trữ an toàn vào Memory Bank, sẵn sàng cho phiên làm việc tiếp theo.
