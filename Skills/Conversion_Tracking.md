# 📊 Hướng Dẫn Cài Đặt Google Tag Manager & Đo Lường Chuyển Đổi (Conversion Tracking)

Chào mừng bạn đến với tài liệu hướng dẫn **Đo lường Chuyển đổi (Conversion Tracking)**. Để một trang Landing Page hoạt động hiệu quả và mang lại doanh thu, việc thiết kế đẹp và nội dung thuyết phục là chưa đủ. Bạn bắt buộc phải đo lường được hành vi của khách hàng: *Có bao nhiêu người đã vào trang? Có bao nhiêu người bấm nút CTA? Và chính xác có bao nhiêu người đã gửi form đăng ký thành công?*

Để quản lý toàn bộ các mã theo dõi (Meta Pixel, Google Analytics, Google Ads, TikTok Pixel...) một cách tập trung mà không làm nặng code của website, chúng ta sử dụng **Google Tag Manager (GTM)**.

---

## 🛠️ 1. Hướng Dẫn Cài Đặt Trực Tiếp Google Tag Manager (GTM-KNKBQR6H)

Hãy mở tệp tin cấu trúc giao diện chính của bạn (`index.html`) và tiến hành nhúng hai đoạn mã tiêu chuẩn của container **GTM-KNKBQR6H** theo đúng hai vị trí quy chuẩn dưới đây:

### Vị trí 1: Nhúng vào thẻ `<head>` (Càng cao càng tốt)
Đoạn mã JavaScript này giúp kích hoạt GTM ngay khi trang web bắt đầu tải để ghi nhận lượt truy cập của người dùng mà không làm chậm giao diện.

👉 **Cách làm:** Hãy tìm đến thẻ mở `<head>` trong file `index.html` của bạn, và dán đoạn mã sau vào **ngay bên dưới thẻ `<head>`** (ở vị trí cao nhất có thể, trước toàn bộ các thẻ link CSS hay script khác):

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNKBQR6H');</script>
<!-- End Google Tag Manager -->
```

### Vị trí 2: Nhúng vào thẻ `<body>` (Ngay sau thẻ mở <body>)
Đoạn mã noscript này đóng vai trò là lá chắn dự phòng, giúp kích hoạt các mã đo lường trong trường hợp trình duyệt của người dùng tắt JavaScript.

👉 **Cách làm:** Tìm đến thẻ mở `<body>` trong file `index.html` và dán đoạn mã sau vào **ngay phía sau thẻ mở `<body>`**:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNKBQR6H"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## ⚡ 2. Cách Đo Lường Sự Kiện Đăng Ký Form Thành Công Gửi Lên GTM (Đo lường Chuẩn Senior)

Khi người dùng gửi form đăng ký tư vấn thành công, chúng ta sử dụng phương thức **`dataLayer.push`** của Google để bắn một sự kiện tùy chỉnh (Custom Event) lên GTM. Điều này giúp bạn dễ dàng cài đặt các chiến dịch tối ưu hóa chuyển đổi quảng cáo trên Facebook Ads, Google Ads hay TikTok Ads thông qua GTM.

### 👉 Hướng dẫn tích hợp vào mã JavaScript (`main.js`):
Trong file `main.js` của bạn, tại sự kiện gửi form AJAX thành công đến Web3Forms, hãy bổ sung thêm lệnh bắn sự kiện lên GTM như sau:

```javascript
// Đoạn mã mẫu trong main.js khi gửi form AJAX thành công
if (response.status === 200 && result.success) {
    // 1. Hiển thị thông báo Toast thành công
    showToast();
    
    // 2. [THÊM MỚI] Bắn sự kiện chuyển đổi lên Google Tag Manager dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'lead_form_success',          // Tên sự kiện tùy chỉnh bắt trên GTM
        'form_id': 'contact-form',            // ID của biểu mẫu đăng ký
        'conversion_value': 100000            // Giá trị chuyển đổi tượng trưng (nếu có)
    });
    
    // 3. Xóa sạch dữ liệu đã nhập trong form
    contactForm.reset();
}
```

### 🎯 Cách bắt sự kiện này trên trình quản lý Google Tag Manager:
Khi bạn hoặc chuyên viên Marketing đăng nhập vào tài khoản GTM để cấu hình sự kiện chuyển đổi cho quảng cáo Facebook/Google:
1. **Tạo Trình kích hoạt (Trigger)**: Chọn loại trình kích hoạt là **Sự kiện Tùy chỉnh (Custom Event)**.
2. **Tên Sự kiện (Event Name)**: Nhập chính xác tên sự kiện đã khai báo trong code là `lead_form_success`.
3. **Liên kết Thẻ (Tag)**: Liên kết trigger này với thẻ pixel tương ứng (ví dụ: *Facebook Pixel Lead Tag*, *Google Ads Conversion Tag*) để tự động tối ưu hóa tệp khách hàng tiềm năng.

---

## 🛡️ 3. Quy Tắc Vàng Kiểm Tra Chất Lượng Cài Đặt (Quality Gates)

Học viên và AI Agent phải tự động kiểm tra chéo các tiêu chí sau trước khi bàn giao:
- [ ] **Đúng vị trí**: Thẻ `<script>` GTM nằm trên cùng của `<head>` và thẻ `<noscript>` nằm ngay sau thẻ mở `<body>`.
- [ ] **Không trùng lặp**: Chỉ cài đặt một bộ container duy nhất (`GTM-KNKBQR6H`), không cài lặp lại nhiều lần gây sai lệch số liệu.
- [ ] **Hoạt động ổn định**: Mở chế độ xem trước (Preview Mode) của GTM, tiến hành điền thử Form đăng ký trên trang xem sự kiện `lead_form_success` có được kích hoạt thành công trên màn hình Tag Assistant hay không.
