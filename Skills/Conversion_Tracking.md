# 📊 Hướng Dẫn Cài Đặt Google Tag Manager & Đo Lường Chuyển Đổi (Conversion Tracking)

Chào mừng bạn đến với tài liệu hướng dẫn **Đo lường Chuyển đổi (Conversion Tracking)**. Để một trang Landing Page hoạt động hiệu quả và mang lại doanh thu, việc thiết kế đẹp và nội dung thuyết phục là chưa đủ. Bạn bắt buộc phải đo lường được hành vi của khách hàng: *Có bao nhiêu người đã vào trang? Có bao nhiêu người bấm nút CTA? Và chính xác có bao nhiêu người đã gửi form đăng ký thành công?*

Để quản lý toàn bộ các mã theo dõi (Meta Pixel, Google Analytics, Google Ads, TikTok Pixel...) một cách tập trung mà không làm nặng code của website, chúng ta sử dụng **Google Tag Manager (GTM)**.

---

## 🛠️ 1. Quy Tắc Yêu Cầu Nhập Mã GTM (GTM ID Input Quality Gate)

Để đảm bảo hệ thống đo lường hoạt động chính xác với đúng tài khoản của học viên, AI Agent **bắt buộc** phải tuân thủ quy tắc kiểm soát chất lượng sau:

> [!WARNING]
> **CỔNG KIỂM SOÁT CHẤT LƯỢNG GTM (GTM QUALITY GATE):**
> 1. **Cấm tự đoán hoặc tự điền GTM ID**: AI Agent tuyệt đối **không** được tự ý điền mã GTM ngẫu nhiên hoặc mặc định vào dự án khi học viên yêu cầu cài đặt.
> 2. **Yêu cầu cung cấp hoặc đọc từ `.env`**: AI Agent phải yêu cầu học viên khai báo mã GTM Container ID (Ví dụ: `GTM-KNKBQR6H`) trong file `.env` ở thư mục gốc dưới biến `gtm_id=GTM-XXXXXXXX`.
> 3. **Tự động trích xuất**: AI Agent sẽ đọc file `.env`, trích xuất giá trị `gtm_id` và thay thế vào các đoạn mã nhúng tương ứng trong `index.html`.
> 4. **Dừng lại nếu thiếu**: Nếu file `.env` chưa có cấu hình `gtm_id`, AI Agent phải dừng quy trình cài đặt và hiển thị yêu cầu: *"Vui lòng bổ sung biến `gtm_id=Mã-GTM-Của-Bạn` (Ví dụ: `gtm_id=GTM-KNKBQR6H`) vào file `.env` để tôi tiến hành tích hợp tự động!"*

---

## 🛠️ 2. Hướng Dẫn Cài Đặt Trực Tiếp Google Tag Manager

Hãy mở tệp tin cấu trúc giao diện chính của bạn (`index.html`) và tiến hành nhúng hai đoạn mã tiêu chuẩn của container (sử dụng mã GTM trích xuất từ `.env`, ví dụ: **GTM-KNKBQR6H**) theo đúng hai vị trí quy chuẩn dưới đây:

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

### 🎯 3. Hướng Dẫn Từng Bước Cấu Hình Google Tag Manager (GTM) Để Bắt Sự Kiện `lead_form_success` & Gửi Về Google Ads

Để đo lường chuyển đổi và gửi dữ liệu về Google Ads thành công, học viên cần cấu hình **Trình kích hoạt (Trigger)** và **Thẻ (Tag)** trong trang quản trị GTM theo các bước chuẩn hóa sau:

#### 📌 Bước 3.1: Tạo Trình Kích Hoạt Bắt Sự Kiện (Custom Event Trigger)
Trình kích hoạt này đóng vai trò lắng nghe khi nào sự kiện `lead_form_success` được bắn từ tệp `main.js` lên `dataLayer`.

1. Đăng nhập vào [Google Tag Manager](https://tagmanager.google.com/).
2. Chọn mục **Trình kích hoạt (Triggers)** ở thanh menu bên trái -> Nhấp **Mới (New)**.
3. Đặt tên Trình kích hoạt: `Custom Event - Lead Form Success`.
4. Nhấp vào vùng **Cấu hình trình kích hoạt (Trigger Configuration)** -> Chọn loại trình kích hoạt là **Sự kiện tùy chỉnh (Custom Event)**.
5. Tại ô **Tên sự kiện (Event name)**: Nhập chính xác là `lead_form_success`.
6. Tại phần *Trình kích hoạt này kích hoạt trên*, chọn **Tất cả sự kiện tùy chỉnh (All Custom Events)**.
7. Nhấp **Lưu (Save)**.

#### 📌 Bước 3.2: Tạo Thẻ Liên Kết Chuyển Đổi (Conversion Linker Tag - Bắt Buộc)
Thẻ liên kết chuyển đổi giúp lưu trữ dữ liệu lượt nhấp trong cookie của bên thứ nhất, đảm bảo việc theo dõi chuyển đổi hoạt động chính xác trên mọi trình duyệt (đặc biệt là Safari/iOS).

1. Chọn mục **Thẻ (Tags)** ở menu bên trái -> Nhấp **Mới (New)**.
2. Đặt tên Thẻ: `Conversion Linker`.
3. Nhấp vào vùng **Cấu hình thẻ (Tag Configuration)** -> Chọn loại thẻ là **Liên kết chuyển đổi (Conversion Linker)**.
4. Tại phần **Kích hoạt (Triggering)**: Chọn trình kích hoạt mặc định là **Initialization - All Pages** (hoặc **All Pages**).
5. Nhấp **Lưu (Save)**.

#### 📌 Bước 3.3: Tạo Thẻ Theo Dõi Chuyển Đổi Google Ads (Google Ads Conversion Tracking)
Thẻ này sẽ lấy thông tin chuyển đổi gửi thẳng về tài khoản Google Ads của học viên mỗi khi form được gửi thành công.

1. Chọn mục **Thẻ (Tags)** ở menu bên trái -> Nhấp **Mới (New)**.
2. Đặt tên Thẻ: `Google Ads - Lead Conversion`.
3. Nhấp vào vùng **Cấu hình thẻ (Tag Configuration)** -> Chọn loại thẻ là **Theo dõi chuyển đổi của Google Ads (Google Ads Conversion Tracking)**.
4. Nhập các thông số cấu hình bắt buộc từ tài khoản Google Ads của bạn:
   - **ID chuyển đổi (Conversion ID)**: Nhập dãy số Conversion ID được cấp trong tài khoản Google Ads (Ví dụ: `123456789`).
   - **Nhãn chuyển đổi (Conversion Label)**: Nhập chuỗi ký tự nhãn chuyển đổi tương ứng của hành động gửi form (Ví dụ: `AbCdEfGhIjKlMnOpQrStUv`).
     *(Mẹo: Học viên có thể lấy 2 thông số này trong tài khoản Google Ads bằng cách vào mục **Công cụ và cài đặt -> Lượt chuyển đổi -> Chọn hành động chuyển đổi -> Thiết lập thẻ -> Sử dụng Trình quản lý thẻ của Google**).*
5. Tại phần **Kích hoạt (Triggering)**: Nhấp chọn trình kích hoạt **Custom Event - Lead Form Success** đã tạo ở Bước 3.1.
6. Nhấp **Lưu (Save)**.

#### 📌 Bước 3.4: Xuất Bản Để Kích Hoạt Cấu Hình (Publish)
1. Nhấp nút **Gửi (Submit)** ở góc trên bên phải màn hình GTM.
2. Nhập tên phiên bản (ví dụ: `Tích hợp Google Ads Lead Conversion`) -> Nhấp **Xuất bản (Publish)** để đưa cấu hình vào hoạt động thực tế.

---

## 🛡️ 3. Quy Tắc Vàng Kiểm Tra Chất Lượng Cài Đặt (Quality Gates)

Học viên và AI Agent phải tự động kiểm tra chéo các tiêu chí sau trước khi bàn giao:
- [ ] **Đúng vị trí**: Thẻ `<script>` GTM nằm trên cùng của `<head>` và thẻ `<noscript>` nằm ngay sau thẻ mở `<body>`.
- [ ] **Không trùng lặp**: Chỉ cài đặt một bộ container duy nhất (`GTM-KNKBQR6H`), không cài lặp lại nhiều lần gây sai lệch số liệu.
- [ ] **Hoạt động ổn định**: Mở chế độ xem trước (Preview Mode) của GTM, tiến hành điền thử Form đăng ký trên trang xem sự kiện `lead_form_success` có được kích hoạt thành công trên màn hình Tag Assistant hay không.
