# 📋 Bước 1: Khảo Sát Ý Tưởng Đầu Vào (first_input.md)

Bước đầu tiên và quan trọng nhất trong quy trình là thiết lập tài liệu **Ý tưởng đầu vào (first_input.md)**. Tài liệu này cung cấp toàn bộ bối cảnh thương hiệu, sản phẩm và phong cách để định hình trang Landing Page.

---

## 🔍 Quy Tắc Kiểm Soát Chất Lượng Bắt Buộc (Quality Gate)

Theo tài liệu [LandingPage_Skills.md](../Skills/LandingPage_Skills.md), AI Agent của bạn **bắt buộc** phải dừng quy trình lại và yêu cầu bạn bổ sung nếu phát hiện tệp tin `first_input.md` bị thiếu bất kỳ thông tin nào trong **5 mục bắt buộc** sau **(AI TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ Ý ĐIỀN THAY)**:

1. **Thương hiệu**: Tên thương hiệu/doanh nghiệp rõ ràng.
2. **Sản phẩm / Dịch vụ**: Mô tả chi tiết sản phẩm cung cấp kèm theo USP (Lợi thế bán hàng độc nhất).
3. **Website tham khảo**: Địa chỉ URL của website mẫu để định hình cấu trúc phần và phong cách. **(Học viên bắt buộc phải tự điền, AI không tự điền thay)**.
4. **Ngôn ngữ**: Ngôn ngữ hiển thị chính (Tiếng Việt, Tiếng Anh, hoặc Song ngữ).
5. **Phong cách website**: Định hướng thẩm mỹ (Ví dụ: Sáng sủa, tối màu, tối giản, tương lai futuristic, editorial...).

---

## 📝 Mẫu Template Khởi Tạo `first_input.md`

Hãy copy toàn bộ nội dung mẫu dưới đây, tạo file `first_input.md` ở thư mục dự án của bạn (ví dụ: `projects/[ten-du-an]/first_input.md` hoặc tại thư mục gốc trong quá trình khảo sát) và điền đầy đủ thông tin:

```markdown
# 📋 Thông Tin Khảo Sát Đầu Vào

- **Thương hiệu**: [Nhập tên thương hiệu của bạn]
- **Sản phẩm & Dịch vụ**: [Mô tả chi tiết sản phẩm, dịch vụ và USP cốt lõi]
- **Website tham khảo**: [Nhập URL website tham chiếu, ví dụ: https://lucasvn.com/ hoặc https://noti.vn/]
- **Ngôn ngữ chính**: [Tiếng Việt / Tiếng Anh / Đa ngôn ngữ]
- **Phong cách website**: [Ví dụ: Sáng sủa, màu xanh dương chủ đạo, nền trắng, điểm xuyết vàng hổ phách]

---

## 1. Khách Hàng Mục Tiêu
- **Loại khách hàng chính**: [Mô tả quy mô, ngành nghề khách hàng]
- **Nỗi đau lớn nhất (Pains)**: 
  - [Nỗi đau 1]
  - [Nỗi đau 2]
- **Mong muốn cốt lõi (Gains)**:
  - [Mong muốn 1]
  - [Mong muốn 2]

## 2. Các Yếu Tố Then Chốt Bán Hàng (KSPs)
- **KSP 1**: [Ví dụ: Uy tín pháp lý chuyên sâu, chịu trách nhiệm bồi thường]
- **KSP 2**: [Ví dụ: Chi phí trọn gói rõ ràng, không phát sinh chi phí ẩn]
- **KSP 3**: [Ví dụ: Trải nghiệm an tâm, chủ động liên hệ hỗ trợ]
```

---

## 🎯 Hướng Dẫn Thực Hiện Cho Học Viên

1. Tạo file `first_input.md` dựa theo mẫu trên.
2. Điền đầy đủ thông tin và lưu file lại.
3. Gửi câu lệnh sau cho AI Agent của bạn:
   > *"Tôi đã hoàn thành tệp `first_input.md`. Hãy kiểm tra xem đã đầy đủ 5 thông tin bắt buộc theo đúng quy tắc `LandingPage_Skills.md` chưa. Nếu đã hoàn hảo, hãy xác nhận để chúng ta chuyển sang Bước 2."*
