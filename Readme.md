Results Site: https://pobratym.info

This project implements the following:

Landing page for a veteran organization The site contains information about the organization "Veteran Space for Reintegration "Brothers of Honor"", its values, news, partners, projects and contacts.

Responsive design All styles (css/style.css and other CSS files) ensure correct display on different devices (desktop, tablet, mobile).

Multi-section structure

About us: description of the organization's mission and activities. Values: block with key principles, each with an icon (css/values.css). News: automatic loading of the latest posts from Facebook via Meta Graph API (js/API.js), with support for a photo/video slider. Partners: logos of partner organizations (section hidden by default via CSS). Our projects: description and photos of the main initiatives. Contacts: phone, address, email, Facebook. Automatic news loading from Facebook

Uses fetchFacebookPosts to retrieve posts via Facebook Graph API. Displaying photos/videos as a slider, automatic scrolling of slides. API error handling. Smooth scroll navigation

Smooth transition to sections when clicking on menu items (js/script.js). Header height is taken into account for correct positioning. SEO and Open Graph

Meta tags for search engines and social networks. Schema.org structured data for the organization. Brand fonts

Connection of e-Ukraine custom fonts (css/font.css). Documentation

Link to the statute, non-profit statement and ownership structure in the footer. Developer contacts

The footer contains the developer's contacts and a link to GitHub. Icons and graphics

SVG icons are used for sections (e.g., coat of arms, icons of values, contacts). No unnecessary elements on mobile

Some menu and navigation elements are hidden on small screens for user convenience. Core files:

index.html — page structure.

API.js — loading news from Facebook. script.js — smooth navigation. CSS files for each block: style.css, header.css, about.css, values.css, news.css, partners.css, projects.css, contacts.css, footer.css, font.css. The project is completely static, does not use server logic, but integrates with the Facebook API for dynamic content.