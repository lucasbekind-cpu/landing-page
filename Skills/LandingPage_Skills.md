# Master Skills: High-Converting Landing Page Architecture

This document serves as a specialized, step-by-step master checklist and behavioral guidelines for building premium, high-converting, and visually stunning landing pages. It synthesizes the visual excellence, UX patterns, and conversion flows observed on **lucasvn.com** and **noti.vn**.

---

## 0. Quy Tắc Khảo Sát Đầu Vào Bắt Buộc (first_input Quality Gate)

Mọi quy trình xây dựng Landing Page phải bắt đầu bằng việc khảo sát thông tin đầu vào thông qua tệp `first_input.md`. AI Agent **bắt buộc** phải kiểm soát chất lượng thông tin này trước khi thực hiện bất kỳ hành động nào tiếp theo:

- **Các thông tin BẮT BUỘC người dùng phải tự cung cấp:**
  1. **Thương hiệu**: Tên thương hiệu/doanh nghiệp rõ ràng.
  2. **Sản phẩm / Dịch vụ**: Chi tiết về sản phẩm dịch vụ cung cấp, kèm theo lợi thế bán hàng độc nhất (USP) hoặc tệp khách hàng mục tiêu.
  3. **Website tham khảo**: Địa chỉ URL của website mẫu (hoặc phân tích đối thủ cạnh tranh) để định vị cấu trúc. **(AI TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ Ý ĐIỀN THAY)**.
  4. **Ngôn ngữ**: Ngôn ngữ hiển thị chính trên website (Tiếng Việt, Tiếng Anh, Song ngữ...).
  5. **Phong cách website**: Định hướng thẩm mỹ (Ví dụ: Sáng sủa, tối màu, tối giản, tương lai futuristic, editorial...).

- **Quy tắc Kiểm soát Chất lượng (Quality Gate Rule):**
  - **CẤM TỰ Ý ĐIỀN THAY (NO AUTO-FILL)**: AI Agent tuyệt đối không được tự ý phỏng đoán hoặc tự điền thay cho người dùng bất kỳ thông tin nào trong 5 mục trên.
  - **TẠM DỪNG HÀNH ĐỘNG**: Nếu phát hiện file `first_input.md` bị thiếu bất kỳ thông tin nào trong số 5 mục bắt buộc trên, AI Agent phải dừng quy trình lại ngay lập tức và yêu cầu bổ sung vào file `first_input.md`.
  - **ĐỒNG BỘ NGÔN NGỮ TUYỆT ĐỐI (Language Alignment)**: Toàn bộ tiêu đề, nhãn mục, mô tả, nội dung giải thích trong tệp `design_system.md` và `outline.md` **bắt buộc phải viết bằng đúng ngôn ngữ chính** đã khai báo tại `first_input.md` (ví dụ: yêu cầu Tiếng Việt thì viết toàn bộ bằng tiếng Việt, không dùng tiếng Anh xen kẽ trừ các thuật ngữ kỹ thuật/code).
  - **ĐỒNG BỘ PHONG CÁCH & THÀNH PHẦN (Theme Alignment)**: Phải dựa theo phong cách yêu cầu của người dùng để thiết kế hệ biến CSS và Material tương thích 100% (Ví dụ: Phong cách sáng sủa phải dùng bảng biến Light Mode nền trắng/chữ tối; cấm pha tạp các biến nền tối/chữ sáng của Dark Mode dẫn đến lỗi hiển thị).

---

## 1. Visual & Aesthetic Principles

To ensure landing pages look highly premium, state-of-the-art, and engaging:

### Typography Pairs
- **Headings**: Use `Outfit` (sans-serif) for high-impact, geometric, modern title headers.
- **Body & Controls**: Use `Inter` (sans-serif) for high readability, clean spacing, and modern UI elements.
- **Import Method**: Always preconnect and load fonts via Google Fonts:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ```

### Modern Color System & Harmonizers
AI Agent phải chọn chính xác hệ biến CSS tương thích hoàn toàn với phong cách người dùng lựa chọn:

#### Option A: Premium Dark Mode (Phong cách nền tối)
```css
:root {
  --bg-main: #090d16;                /* Obsidian Black */
  --bg-card: rgba(255, 255, 255, 0.03); /* Glass Base */
  --border-card: rgba(255, 255, 255, 0.08);
  --text-primary: #f3f4f6;           /* Frost White */
  --text-secondary: #9ca3af;         /* Slate Gray */
  --color-primary: #10b981;          /* Accent Emerald */
  --color-primary-glow: rgba(16, 185, 129, 0.15);
  --color-secondary: #06b6d4;        /* Sky Cyan */
  --glass-bg: rgba(9, 13, 22, 0.7);
  --glass-blur: blur(12px);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Option B: Premium Light Mode (Phong cách nền sáng)
```css
:root {
  --bg-main: #ffffff;                /* Pure White */
  --bg-secondary: #f8fafc;           /* Soft Slate */
  --bg-card: #ffffff;                /* Clean White Card */
  --border-card: #e2e8f0;            /* Light Border */
  --text-primary: #0f172a;           /* Deep Charcoal */
  --text-secondary: #475569;         /* Muted Slate */
  --color-primary: #1e40af;          /* Trust Royal Blue */
  --color-primary-glow: rgba(30, 64, 175, 0.05);
  --color-secondary: #0ea5e9;        /* Active Sky Blue */
  --color-accent: #facc15;           /* Amber Yellow */
  --card-shadow: 0 10px 30px rgba(30, 64, 175, 0.04);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Interactive Card Styles & Decors

#### Dark Mode (Glassmorphic)
```css
.card-theme {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

#### Light Mode (Clean Elegant Shadow)
```css
.card-theme {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
}
```

### Interactive Glassmorphism & Blob Decors
- Create subtle organic backgrounds using absolute blurred blobs and CSS gradients.
  ```html
  <div class="bg-decoration">
      <div class="bg-blob bg-blob-1"></div>
      <div class="bg-blob bg-blob-2"></div>
  </div>
  ```
  ```css
  .bg-decoration {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -2;
    overflow: hidden;
    background-color: var(--bg-main);
  }
  .bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.15;
  }
  .bg-blob-1 {
    top: -10%; left: -10%;
    width: 50vw; height: 50vw;
    background: var(--color-emerald);
  }
  .bg-blob-2 {
    bottom: -10%; right: -10%;
    width: 60vw; height: 60vw;
    background: var(--color-violet);
  }
  ```

---

## 2. Core 8-Section Grid System Checklist

A premium landing page should be structured around these 8 critical sections to balance storytelling, conversion triggers, social proof, and seamless interaction:

### Section 1: Sticky Navigation Bar
- [ ] **Glassmorphism Header**: Set `position: sticky; top: 0; backdrop-filter: var(--glass-blur); background-color: var(--glass-bg); z-index: 1000`.
- [ ] **Scrolled Effect**: Add/remove a `.scrolled` CSS class via JavaScript on scroll to toggle subtle borders and background opacity.
- [ ] **Branding & Logo**: Clean typography logo or premium SVG vector logo.
- [ ] **Responsive Menu Toggle**: Hamburger button that animates to an "X" when active.
- [ ] **Mobile Drawer**: Slide-out navbar drawer with high contrast and smooth sliding transition.
- [ ] **Optional i18n Switcher**: Clean SVG Flag buttons (VI/EN) with dropdown or inline switcher.
- [ ] **Let's Talk CTA**: Accent navigation button acting as the primary fast-pass route to the contact/lead section.

### Section 2: Interactive Hero Section
- [ ] **Grid Layout**: 2-column flex or grid on desktop; stacks vertically on mobile.
- [ ] **Floating Badges**: Pill-shaped badges at the top (e.g. `🌏 AU · NZ · SG · VN` or `⭐ n8n Official Ambassador in VN`) using minimal border, semi-transparent background, and fine text.
- [ ] **Typography Hierarchy**: Use a giant main title `<h1>` with `.gradient-text` spanning only a few words (e.g. name or core value proposition like `AI & Automation`).
- [ ] **High-Value Subtitle**: Provide a concise summary of results (e.g. *10+ years driving growth for global brands...*).
- [ ] **Action CTAs**: Pair a primary accent button (e.g. `See My Work` or `Explore Now` with interactive SVG icon) and a secondary outlined button (e.g. `Download CV` or `View Products`).
- [ ] **Micro-Trust Badges**: A row of small social proof elements directly beneath CTAs (e.g. *100K+ Members*, *5-Star Rating*, *High Security* with matching monochrome SVG icons).
- [ ] **Visual Side Column (Embedded Video)**:
  - Luôn gợi ý và sử dụng một video giới thiệu nhúng từ YouTube ở phía bên phải để tăng tỉ lệ giữ chân khách hàng (Retention Rate) và nâng cao uy tín chuyển đổi.
  - Sử dụng video mặc định: `https://www.youtube.com/watch?v=RIrJz7NOdKw` (nhúng qua thẻ `iframe` với đường dẫn nhúng: `https://www.youtube.com/embed/RIrJz7NOdKw`).
  - Khung chứa video (video-wrapper) cần được bo góc tròn mượt mà (ví dụ `border-radius: 24px`), viền tinh tế, đổ bóng mềm và responsive chuẩn tỷ lệ 16:9.

### Section 3: Impact Counters & Endless Logowall
- [ ] **Stats Counter Grid**: A horizontal grid showing micro-success metrics (years of experience, countries, brands, training hours).
- [ ] **JavaScript Count Animation**: Run an IntersectionObserver that triggers a dynamic counter animation when scrolled into view.
- [ ] **Endless Scrolling Marquee**:
  - Implement a logo wall of trusted global brands.
  - Structure a seamless loop using two identical tracks running in a horizontal CSS animation:
    ```css
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }
    ```

### Section 4: Featured Offer & Product Grid
- [ ] **Section Intro**: A clear label tag (e.g. `Sản phẩm & Dịch vụ`), prominent `<h2>` title, and descriptive subtitle.
- [ ] **Structured Card Grid**: A 3-column or asymmetrical grid:
  - *Asymmetrical Grid (noti.vn style)*: 1 double-width featured card containing large preview vector details + smaller support product cards.
- [ ] **Interactive Cards**: High-end CSS card treatments:
  - Slight upward translation on hover (`transform: translateY(-8px)`).
  - Glowing colored borders utilizing a linear-gradient edge or shadow.
  - SVG indicator arrows (`→`) that slide right on hover.

### Section 5: Social Proof / Community Split Section
- [ ] **Layout Split**: A clean 2-column layout dividing the offer or community.
- [ ] **Visual Stats Card**: A dedicated board visualizing key metrics in one card (e.g., membership counts, support hours, active experts).
- [ ] **Value Narrative**: Bold title, clear copy explaining community or customer success.
- [ ] **Tick List**: A bullet-pointed list of high-value perks with matching color checkmarks.
- [ ] **High-Impact CTA**: A solid prominent button triggering immediate user action (e.g., `Join Community` or `Start Free Trial`).

### Section 6: Storytelling & Category Tag Grid (About / Skills)
- [ ] **Personal Brand Narrative**: Explain the journey (e.g. "From Engineer to Global Strategist"), connecting background strengths to business outcomes.
- [ ] **Certification Credentials strip**: Modern horizontal list of achievements with icons (e.g., MBA degrees, Machine Learning credentials, Google Certifications).
- [ ] **Divided Skills Matrix**: Organize technical skill badges into categorized containers:
  - *Category 1 (Marketing)*: Paid Ads, SEO, Automation, CRO.
  - *Category 2 (Tech & Data)*: GA4, BigQuery, Looker Studio, Python, AI.
  - *Category 3 (Tools)*: HubSpot, Meta Ads Manager, SEMrush.
- [ ] **Modern Badges**: Clean inline-block tags with slight border, low opacity background, and soft text.

### Section 7: Authority Content / Insights (Blog Grid)
- [ ] **Blog Grid**: A 3-column layout highlighting case studies or thought leadership articles.
- [ ] **Premium Article Cards**:
  - Image header with nice cover styling.
  - Colored category tag overlays.
  - Clean title and summarized preview paragraph.
  - Modern "Read more →" interaction.

### Section 8: Lead Gate & Contact Form
- [ ] **Split Screen**:
  - **Left (Social Channels)**: Direct, large contact buttons showing professional networks (Email, LinkedIn, Phone, Site) using high-fidelity inline SVGs.
  - **Right (Form Intake)**: Clean, high-contrast validation form.
- [ ] **FormSubmit / API Action**: Secure and ready to process form details using a direct form service (e.g. `action="https://formsubmit.co/your-email"`).
- [ ] **Form Styling**: Inputs must have border-radius, background transparency, clear labels, and change border colors upon active focus.

### Conversion Tracking & Google Tag Manager Integration (GTM Quality Gate)
- [ ] **GTM ID Input Quality Gate**: Khi có yêu cầu cài đặt Google Tag Manager, AI Agent **bắt buộc** phải hướng dẫn và yêu cầu học viên khai báo GTM Container ID (Ví dụ: `GTM-KNKBQR6H`) trong file `.env` dưới dạng biến `gtm_id=GTM-XXXXXXXX`. Tuyệt đối **không** được tự ý điền mã GTM ngẫu nhiên hoặc mặc định.
- [ ] **GTM Embeds**: Nhúng mã JavaScript GTM ở vị trí cao nhất có thể trong thẻ `<head>` và mã noscript GTM ngay sau thẻ mở `<body>` trong file `index.html` sử dụng đúng biến trích xuất từ `.env`.
- [ ] **dataLayer Custom Events**: Tích hợp lệnh `window.dataLayer.push({ 'event': 'lead_form_success', 'form_id': '...', 'conversion_value': ... })` tại sự kiện gửi form AJAX thành công trong `main.js`.
- [ ] **Google Ads Conversion Mapping**: Hướng dẫn chi tiết cách cấu hình **Conversion Linker**, tạo **Custom Event Trigger**, và cài đặt **Thẻ Google Ads Conversion Tracking** sử dụng chính xác **Conversion ID** và **Conversion Label** nhận được từ Google Ads để đo lường và tối ưu hóa quảng cáo (Xem chi tiết tại [Skills/Conversion_Tracking.md](file:///Volumes/SSD-Lucas/Trainning/Landing_Page/Skills/Conversion_Tracking.md)).


---

## 3. Premium Interactive Micro-Animations (CSS/JS)

Keep the landing page feeling alive and responsive:

### Scroll Reveal Animation
- Use a lightweight IntersectionObserver script to add the class `active` to elements containing class `reveal` as they enter the screen.
  ```javascript
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => revealObserver.observe(el));
  ```
  ```css
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition-smooth);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  ```

### Dynamic Text Gradients
- Make the main keywords shine using clipping and background gradients:
  ```css
  .gradient-text {
    background: linear-gradient(135deg, var(--color-emerald) 0%, var(--color-violet) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  ```

---

## 4. Technical Quality Gates

### Responsive Breakpoints
- **Desktop**: `@media (min-width: 1024px)` -> Grid layouts, margins.
- **Tablet**: `@media (max-width: 1023px) and (min-width: 768px)` -> Adaptive spacing.
- **Mobile**: `@media (max-width: 767px)` -> Stacking columns, hamburger menu, larger tap targets.

### SEO Best Practices
- **Title Tag**: Clear branding + keyword (e.g. `BrandName — Automation & AI Solutions`).
- **Meta Description**: Compelling summary optimized for search.
- **Heading Hierarchy**: Exactly one `<h1>` per page (typically in the Hero section), with structured `<h2>` and `<h3>` tags.
- **Semantic HTML**: Utilize appropriate HTML5 structures: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
