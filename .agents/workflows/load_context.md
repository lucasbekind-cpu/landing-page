---
description: Khôi phục bộ nhớ làm việc và ngữ cảnh từ Memory Bank khi bắt đầu phiên học
---

# Quy trình Tải Ngữ Cảnh (Load Context Workflow)

Khi bắt đầu một phiên làm việc mới, chuyển đổi nhiệm vụ hoặc khi người dùng nhập câu lệnh yêu cầu "load context", AI Agent **bắt buộc** phải tuân thủ tuần tự các bước dưới đây để khôi phục chính xác trạng thái dự án mà không tự ý phỏng đoán:

1. **Kiểm tra sự tồn tại của Memory Bank**:
   Kiểm tra thư mục `memory_bank/` tại thư mục gốc của không gian làm việc bằng lệnh liệt kê:
   ```bash
   ls -la memory_bank/
   ```

2. **Đọc tệp Ngữ cảnh hoạt động (`memory_bank/active_context.md`)**:
   Đọc tệp này bằng công cụ xem tệp để biết chính xác phiên làm việc trước dừng lại ở đâu, những file nào đang mở/được chỉnh sửa, các vướng mắc kỹ thuật (blockers) là gì, và các bước tiếp theo cần thực hiện là gì.

3. **Đọc tệp Nhật ký hoạt động (`memory_bank/daily_logs.md`)**:
   Đọc phần nhật ký gần nhất ở dưới cùng để nắm được tiến trình lịch sử, các quyết định kỹ thuật quan trọng và các tác vụ đã hoàn thành trước đó.

4. **Đọc tệp Tóm tắt dự án (`memory_bank/project_brief.md`)**:
   Tìm hiểu mục tiêu tổng quan, sản phẩm/dịch vụ, phong cách thiết kế và các ràng buộc đặc tả để đảm bảo không đi lệch khỏi định hướng ban đầu của học viên.

5. **Xác thực trạng thái thực tế của Mã nguồn**:
   Đọc nhanh các file quan trọng gần nhất để đảm bảo thông tin ghi trong `active_context.md` khớp hoàn toàn với thực tế code trên ổ đĩa.

6. **Tạo Báo cáo Khôi phục gửi Học viên**:
   Viết báo cáo ngắn gọn tóm tắt cho học viên:
   - 🎯 **Mục tiêu Khôi phục**: Những gì AI hiểu về nhiệm vụ hiện tại dựa trên `active_context.md`.
   - 📝 **Lịch sử Gần nhất**: Tóm tắt 1 câu về những gì đã được hoàn thành ở phiên trước.
   - 🚀 **Các bước Tiếp theo**: Liệt kê các đầu việc sẽ thực hiện ngay lập tức trong phiên này.

7. **Yêu cầu phê duyệt**:
   Gửi câu hỏi chính thức cho học viên: *"Mọi thông tin ngữ cảnh khôi phục đã chính xác chưa? Tôi có thể tiến hành các bước tiếp theo ngay lập tức không?"* (AI Agent tuyệt đối không tự ý viết code tiếp trước khi nhận được sự đồng ý của học viên).
