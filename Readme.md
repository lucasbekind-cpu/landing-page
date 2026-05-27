# 🚀 Landing Page Generator - Hệ Thống 5 Bước Kiến Tạo & Triển Khai Thực Chiến

Chào mừng bạn đến với **Landing Page Generator Workspace**! Đây là môi trường học tập Git chuẩn hóa, được thiết kế đặc biệt giúp học viên (Students) kết hợp cùng AI Coding Agent (Antigravity, Claude, Cursor,...) lập trình ra các trang Landing Page tĩnh có thẩm mỹ đỉnh cao (Premium UI/UX), chuẩn CRO (Tối ưu hóa tỷ lệ chuyển đổi) và bảo mật tuyệt đối.

Hệ thống kế thừa tinh hoa thiết kế, cấu trúc lưới phễu thuyết phục và các tương tác chuyển động hiện đại từ các trang sản phẩm nổi tiếng như **noti.vn** và **lucasvn.com**.

---

## 🗺️ Quy Trình 5 Bước Trực Quan Từ Ý Tưởng Đến Xuất Bản

Quy trình thiết kế và phát triển được chia nhỏ thành 5 giai đoạn độc lập. Ở mỗi giai đoạn, bạn chỉ cần sao chép các mẫu Prompt (Thẻ lệnh) tương ứng dưới đây và gửi cho AI Agent của bạn để tiến hành làm việc:

```text
 Giai đoạn 1: Khảo sát ý tưởng (Input)            -> Sinh file projects/[tên-dự-án]/first_input.md
       │
       ▼
 Giai đoạn 2: Thiết kế hệ thống (Design System)   -> Sinh file projects/[tên-dự-án]/design_system.md & Ảnh tham chiếu
       │
       ▼
 Giai đoạn 3: Soạn thảo copywriting CRO (Outline) -> Sinh file projects/[tên-dự-án]/outline.md (Lưới phễu 8 phần)
       │
       ▼
 Giai đoạn 4: Lập trình & Xem trước (Code & Local) -> Sinh index.html, style.css, main.js & Chạy local server HTTP
       │
       ▼
 Giai đoạn 5: Triển khai lên Internet (Deploy)    -> Đưa web lên Netlify Drop hoặc GitHub Pages hoàn toàn MIỄN PHÍ
```

---

## ✍️ Hướng Dẫn Chi Tiết Từng Bước & Mẫu Prompt Cho AI Agent

### 📋 Bước 1: Khảo Sát Ý Tưởng Đầu Vào (Intake Page)
Mọi quy trình bắt đầu bằng việc tạo hồ sơ dự án để định hình sản phẩm. Bạn hãy tạo một thư mục dự án của mình dưới đường dẫn `projects/[tên-dự-án]/` (viết liền không dấu), sau đó tạo file `first_input.md` bên trong thư mục đó.

> [!IMPORTANT]
> **Cổng Kiểm soát Chất lượng 1 (Quality Gate 1):**
> File `first_input.md` **bắt buộc** phải chứa đầy đủ 5 thông tin cốt lõi sau:
> 1. **Thương hiệu**: Tên doanh nghiệp/thương hiệu của bạn.
> 2. **Sản phẩm & Dịch vụ**: Mô tả chi tiết giá trị sử dụng và lợi thế bán hàng độc nhất (USP).
> 3. **Website tham khảo**: Địa chỉ URL của web đối thủ hoặc web mẫu (Học viên **phải tự điền**, AI **tuyệt đối không** được điền hộ).
> 4. **Ngôn ngữ chính**: Tiếng Việt hoặc Tiếng Anh.
> 5. **Phong cách website**: Định hướng thẩm mỹ mong muốn (ví dụ: Premium Light Mode nền trắng sáng sủa, Sleek Dark Mode kính mờ neon...).
> 
> *Quy tắc an toàn:* Nếu bạn thiếu bất kỳ thông tin nào trên đây, AI Agent của bạn bắt buộc phải dừng lại và yêu cầu bạn bổ sung, không được tự ý đoán bừa để làm tiếp!

#### 📥 Mẫu lệnh gửi AI ở Bước 1:
```markdown
Chào AI, tôi muốn bắt đầu xây dựng một dự án Landing Page mới theo Quy trình 5 Bước chuẩn của không gian làm việc này.
Tôi đã tạo thư mục dự án tại `projects/[tên-dự-án-của-bạn]/` và điền đầy đủ thông tin khảo sát vào file `first_input.md`.

Hãy đọc tệp `projects/[tên-dự-án-của-bạn]/first_input.md`, phân tích bối cảnh thương hiệu, kiểm duyệt xem đã đạt yêu cầu "Cổng kiểm soát chất lượng 1" chưa. Nếu đã hoàn hảo, hãy xác nhận sẵn sàng để chuyển sang Bước 2!
```

---

### 🎨 Bước 2: Thiết Kế Hệ Thống Bản Sắc Giao Diện (Design System)
Sau khi AI xác nhận hồ sơ đầu vào đạt chuẩn, bạn sẽ yêu cầu AI xây dựng ngôn ngữ mỹ thuật hệ thống để đảm bảo giao diện đồng bộ, không bị lỗi pha tạp màu sắc.

> [!TIP]
> **Quy tắc Mỹ thuật Nâng cao:**
> - Nếu bạn chọn phong cách sáng (Light Mode), hệ thống biến CSS bắt buộc phải dùng bảng màu sáng sạch sẽ, chữ tối màu độ tương phản cao, **cấm** pha tạp các khối nền đen của Dark Mode.
> - Toàn bộ các tiêu đề, nhãn mục trong file thiết kế hệ thống phải được dịch và viết bằng **đúng ngôn ngữ chính** đã chọn ở Bước 1.

#### 📥 Mẫu lệnh gửi AI ở Bước 2:
```markdown
Tuyệt vời, thông tin đầu vào đã được duyệt. Hãy tiến hành Bước 2:
1. Dựa trên phong cách tôi yêu cầu kết hợp với các nguyên lý thẩm mỹ nâng cao tại tài liệu `Skills/LandingPage_Skills.md`, hãy tạo file quy chuẩn giao diện `projects/[tên-dự-án-của-bạn]/design_system.md`.
2. Tệp thiết kế phải định nghĩa rõ: Bảng màu hệ thống (màu nền chính, nền phụ, màu thẻ, viền, chữ chính/phụ và điểm nhấn HEX/HSL), Typography (Outfit cho headings + Inter cho body), các nút bấm (CTAs) và các linh kiện UI.
3. Toàn bộ chú thích và nhãn mục phải viết bằng ngôn ngữ chính đã đăng ký ở Bước 1.
4. Đồng thời, hãy tạo ra một hình ảnh bảng định hướng thiết kế thương hiệu trực quan (Visual Style Tile) đặt tên là `[tên_dự_án]_design_board.png` và lưu ngay cạnh file thiết kế hệ thống để làm tài liệu tham chiếu.

Khi hoàn tất, hãy thông báo để tôi mở file ra xem xét và tinh chỉnh!
```

---

### 📝 Bước 3: Soạn Thảo Copywriting Lưới Phễu 8 Phần CRO (Content Outline)
Sau khi bạn đã chốt và ưng ý với bảng màu/font chữ ở Bước 2, hãy ra lệnh cho AI soạn thảo toàn bộ câu chữ bán hàng đắt giá. AI sẽ phân bổ nội dung qua **8 phần thuyết phục chuẩn CRO** từ đầu trang xuống chân trang.

> [!IMPORTANT]
> **Đặc tả Video nhúng mặc định:**
> Ở **Phần 2 (Hero Section)** của outline, cột trực quan bên phải sẽ luôn được cấu hình gợi ý sử dụng một **trình phát video nhúng YouTube mặc định** (`https://www.youtube.com/watch?v=RIrJz7NOdKw`) thay vì hình ảnh tĩnh thông thường để tăng tỷ lệ giữ chân khách hàng.

#### 📥 Mẫu lệnh gửi AI ở Bước 3:
```markdown
Hệ thống thiết kế giao diện đã được tôi duyệt! Hãy chuyển sang Bước 3:
1. Đọc kỹ file `first_input.md` và `design_system.md` của dự án.
2. Hãy soạn thảo toàn bộ văn bản bán hàng (copywriting) chi tiết và lưu vào file `projects/[tên-dự-án-của-bạn]/outline.md`.
3. Nội dung bắt buộc phải viết 100% bằng ngôn ngữ chính, không sử dụng nội dung placeholder (chữ giả Lorem Ipsum), phân bổ chặt chẽ qua cấu trúc Lưới 8 phần thuyết phục CRO của `Skills/LandingPage_Skills.md`:
   - Phần 1: Navbar (Thanh điều hướng + CTA nhanh)
   - Phần 2: Hero (Tiêu đề H1 có gradient-text, USP, nút bấm đôi, nhãn micro-trust, và cột bên phải nhúng trình phát video YouTube mặc định https://www.youtube.com/watch?v=RIrJz7NOdKw)
   - Phần 3: Impact Counter & Logo Marquee (Số liệu đếm số tự động + Dải logo chạy vô tận)
   - Phần 4: Selected Services Grid (Danh mục giải pháp + Có Featured Card nổi bật điều hướng hành vi)
   - Phần 5: Community & Social Proof (Khối chứng thực hiệu quả + Tick list perks)
   - Phần 6: Storytelling & Skills Matrix (Câu chuyện nỗi đau kế toán cũ & sứ mệnh làm khiên bảo vệ tài chính + Chứng chỉ + Bản đồ năng lực chuyên môn)
   - Phần 7: Blog Grid (Lời khuyên chuyên môn tăng uy tín chuyên gia)
   - Phần 8: Lead Form (Form thu thập đăng ký tư vấn)

Khi viết xong, hãy dừng lại để tôi kiểm duyệt câu chữ trong file outline.md trước khi chúng ta lập trình!
```

---

### 💻 Bước 4: Lập Trình Hoàn Thiện & Preview Cục Bộ (Code & Preview)
Khi câu chữ bán hàng đã được bạn tinh chỉnh hoàn hảo trong `outline.md`, hãy ra lệnh cho AI lập trình toàn diện trang web tĩnh.

> [!WARNING]
> **Khắc phục lỗi Trình phát YouTube (Error 153):**
> Trình phát video YouTube nhúng sẽ báo lỗi *Error 153* nếu mở trực tiếp tệp HTML từ ổ cứng bằng giao thức tệp cục bộ (`file://`). 
> **AI Agent bắt buộc** phải khởi chạy một máy chủ static web cục bộ HTTP (ví dụ cổng `8000`: `python3 -m http.server 8000`) và hướng dẫn bạn truy cập qua **`http://localhost:8000`** để xem video hoạt động hoàn hảo!

#### 📥 Mẫu lệnh gửi AI ở Bước 4:
```markdown
Nội dung outline.md đã hoàn chỉnh! Hãy tiến hành Bước 4 lập trình toàn diện theo chỉ dẫn kỹ thuật tại `steps/step4.md`:
1. Hãy tự động đọc tệp `.env` ở thư mục gốc của không gian làm việc để lấy mã API key `web3forms_Api`.
2. Lập trình chất lượng cao bằng Vanilla Static Web Stack (HTML5 + CSS3 + JS ES6 thuần, KHÔNG sử dụng các thư viện build phức tạp) và ghi vào 3 file:
   - `projects/[tên-dự-án-của-bạn]/index.html` (Nhúng thẻ input ẩn Web3Forms với access key đọc được từ .env, bọc iframe YouTube trong container `.hero-video-inner` chuẩn 16:9).
   - `projects/[tên-dự-án-của-bạn]/style.css` (Cấu hình hệ thống biến CSS, đổ bóng card tinh tế, dải logo endless marquee và responsive thích ứng di động).
   - `projects/[tên-dự-án-của-bạn]/main.js` (Hamburger menu di động, số liệu đếm số tự động cuộn hiển thị, gửi form đăng ký AJAX Fetch bất đồng bộ Web3Forms không reload trang và hiện Toast thông báo thành công trong 5 giây).
3. Do YouTube chặn chạy video trên giao thức tệp cục bộ (`file://`), sau khi code xong, hãy tự động khởi chạy một máy chủ cục bộ HTTP (ví dụ chạy cổng 8000 qua lệnh `python3 -m http.server 8000` hoặc tương đương) chạy ngầm tại thư mục dự án và chạy lệnh Terminal mở địa chỉ `http://localhost:8000` trên trình duyệt để tôi trực tiếp trải nghiệm sản phẩm thực tế!
```

---

### 🚀 Bước 5: Triển Khai Landing Page Lên Internet Miễn Phí (Deploy)
Khi trang Landing Page đã chạy hoàn hảo trên máy tính của bạn, hãy đưa sản phẩm của mình lên internet để chia sẻ với mọi người hoàn toàn miễn phí.

#### 📥 Mẫu lệnh gửi AI ở Bước 5:
```markdown
Mọi thứ đã chạy hoàn hảo! Hãy tiến hành Bước 5 theo hướng dẫn tại `steps/step5.md`: hướng dẫn tôi chi tiết các bước để deploy trang Landing Page này lên mạng Internet miễn phí bằng Netlify Drop hoặc GitHub Pages để tôi có thể chia sẻ sản phẩm thực tế của mình!
```

---

## 🧠 Quy Trình Duy Trì Ngữ Cảnh Thông Minh (Memory Bank Continuity)

Không gian làm việc này được tích hợp cơ chế tự động khôi phục và lưu giữ trí nhớ (`Memory Bank`) thông qua các tệp kịch bản trong thư mục `.agents/workflows/`:

- **/load_context (Khôi phục trí nhớ)**: 
  - *Khi nào dùng*: Khuyên dùng khi bạn mở một phiên trò chuyện mới hoặc chuyển đổi giữa các tác vụ.
  - *Hành vi*: AI Agent sẽ tự động đọc thư mục `memory_bank/` (`project_brief.md`, `active_context.md`, `daily_logs.md`) tại thư mục gốc để khôi phục chính xác trạng thái dự án, lập báo cáo tiến độ và **chờ sự đồng ý của bạn** trước khi thực hiện bất kỳ lệnh lập trình nào.
- **/save_context (Sao lưu trạng thái)**:
  - *Khi nào dùng*: Khi bạn chuẩn bị kết thúc phiên làm việc dài hoặc muốn đóng băng trạng thái để chia sẻ cho phiên sau.
  - *Hành vi*: AI sẽ tổng hợp kết quả, cập nhật tệp `active_context.md` để ghi chú các bước tiếp theo, append lịch sử chi tiết vào nhật ký `daily_logs.md` và hướng dẫn bạn chạy lệnh Git đồng bộ an toàn lên GitHub.

---

## 🛡️ Lá Chắn Bảo Mật Thông Tin (Security Shields)

Để đảm bảo các thông tin nhạy cảm của bạn không bao giờ bị rò rỉ ra thế giới bên ngoài:
- **Tệp `.gitignore`**: Đã được thiết lập sẵn tại thư mục gốc để tự động chặn các file `.env` chứa token bí mật không bị commit vào Git.
- **Git cục bộ**: Khi push code lên GitHub, AI sẽ hướng dẫn bạn thiết lập cấu hình Git cục bộ (`git config --local user.name` và `git config --local user.email`) để tránh lộ thông tin tài khoản cá nhân trên lịch sử commit chung.

---

## 🛠️ Quy Định Chất Lượng Kỹ Thuật (Quality Gates)

Để đảm bảo chất lượng đầu ra đạt chuẩn chuyên nghiệp:
- **Đóng gói dự án**: Toàn bộ tệp tin của bạn phải nằm gọn gàng trong thư mục con tương ứng tại `projects/`. Giữ cho thư mục gốc luôn sạch sẽ.
- **Tính đáp ứng (Responsive)**: Co giãn mượt mà trên cả Mobile (dưới 768px), Tablet (768px - 1024px) và Desktop (trên 1024px). Vùng bấm tối thiểu trên điện thoại là 44px.
- **Cấm đặt Placeholders**: Không sử dụng đường dẫn file tuyệt đối cục bộ trên máy tính của bạn cho các liên kết hình ảnh hay mã nhúng, đảm bảo mã nguồn có tính tổng quan tối đa khi di chuyển sang máy tính khác.

*Chúc các bạn học viên có những trải nghiệm lập trình giao diện tuyệt vời và ra mắt những sản phẩm Landing Page đột phá cùng AI Agent của mình!*
