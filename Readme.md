# 📬 Veteran Space for Reintegration “Brothers of Honor”

**🌐 Live Site:** [https://pobratym.info](https://pobratym.info)

This project implements a responsive, multi-section static website for the Ukrainian veteran organization **"Brothers of Honor"**, with dynamic Facebook news integration and a user-friendly design.

---

## ✨ Features

### 🏠 Landing Page

- Clean, informative homepage representing the organization and its mission.
- Built with plain HTML, CSS, and JavaScript — no backend.

### 📱 Responsive Design

- Layout and styles adapt to desktop, tablet, and mobile devices.
- Mobile UX improvements: some elements are hidden on small screens.

### 📚 Sections

- **About Us**: Mission and goals of the organization.
- **Values**: Key principles displayed with icons (`css/values.css`).
- **News**: Live Facebook feed using Meta Graph API (`js/API.js`) with a photo/video slider.
- **Partners**: Logos of partner organizations (initially hidden via CSS).
- **Projects**: Descriptions and photos of core initiatives.
- **Contacts**: Phone, email, address, Facebook link.

### 🔄 Facebook API Integration

- Uses `fetchFacebookPosts()` to retrieve latest posts via the Facebook Graph API.
- Displays media in an auto-scrolling slider.
- Includes API error handling.

### 🧭 Smooth Scroll Navigation

- Smooth transitions between sections on menu click (`js/script.js`).
- Correct offset based on header height.

### 🔍 SEO & Open Graph

- SEO-friendly meta tags and Open Graph tags for link sharing.
- Structured data using Schema.org.

### 🖋 Branding & UI

- Custom **e-Ukraine** fonts (`css/font.css`).
- SVG icons for values, contact info, and coat of arms.

### 🧾 Legal & Developer Info

- Links to organizational documents (statute, ownership) in the footer.
- Developer contact and GitHub profile also in the footer.

---

## 📁 Project Structure

<img width="480" height="488" alt="image" src="https://github.com/user-attachments/assets/3f7d4cb6-e2df-45e0-95c6-9485d27d7ee4" />
