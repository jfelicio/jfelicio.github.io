# Codebase Summary: jfelicio.github.io

## Project Overview
This is a **personal portfolio/curriculum vitae website** for João Felício, hosted on GitHub Pages. The site is built using a **Bootstrap-based static HTML template** (Start Bootstrap Freelancer theme v6.0.1) with minimal Jekyll configuration. It serves as a professional CV/portfolio showcasing the owner's experience, education, skills, achievements, volunteering, and projects.

## Technology Stack

### Frontend
- **HTML5**: Single-page application structure
- **Bootstrap 4.4.1**: CSS framework for responsive design
- **jQuery 3.4.1**: DOM manipulation and event handling
- **jQuery Easing 1.4.1**: Smooth scrolling animations
- **Font Awesome 5.12.1**: Icon library
- **Google Fonts**: Montserrat and Lato font families
- **Custom CSS**: Based on Start Bootstrap Freelancer theme

### Backend/Server-Side
- **PHP**: Contact form email handler (two versions exist)
- **Jekyll**: Minimal configuration (theme: jekyll-theme-cayman) - appears to be legacy/unused

### Third-Party Integrations
- **LinkedIn Badge API**: Embedded LinkedIn profile widget

## Project Structure

```
jfelicio.github.io/
├── _config.yml              # Jekyll configuration (minimal, theme only)
├── index.html               # Main HTML file (single-page application)
├── README.md                # Basic project description
├── css/
│   └── styles.css           # Complete Bootstrap + custom styles (~10,000+ lines)
├── js/
│   └── scripts.js           # Main JavaScript file (jQuery-based interactions)
├── assets/
│   ├── img/
│   │   ├── avataaars.svg    # Avatar image
│   │   └── portfolio/       # Portfolio section images (6 placeholder images)
│   │       ├── cabin.png
│   │       ├── cake.png
│   │       ├── circus.png
│   │       ├── game.png
│   │       ├── safe.png
│   │       └── submarine.png
│   └── mail/
│       ├── contact_me.js    # Contact form AJAX handler
│       ├── contact_me.php    # PHP email handler (more secure version)
│       └── jqBootstrapValidation.js  # Form validation library
└── mail/
    └── contact_me.php       # PHP email handler (simpler version)
```

## Key Features

### 1. Navigation
- Fixed-top responsive navbar with smooth scroll behavior
- Three main sections: About, Portfolio, Contact
- Mobile-responsive hamburger menu
- Active section highlighting via scrollspy

### 2. Masthead/Header
- Hero section with avatar image (avataaars.svg)
- Name: "João Felício"
- Title: "Industrial Engineer - Software Consultant"
- Star icon dividers

### 3. About Section
- Two-column layout with biographical information
- Contains placeholder text (needs content update)
- Download CV button linking to Google Drive PDF
- Primary color background (teal/cyan)

### 4. Portfolio Section
- Grid layout with 6 portfolio items (Bootstrap cards)
- Each item opens a modal dialog:
  1. **Experience** (cabin.png)
  2. **Education** (cake.png)
  3. **Skills** (circus.png)
  4. **Achievements** (game.png)
  5. **Volunteering** (safe.png)
  6. **Projects** (submarine.png)
- Modals contain placeholder Lorem ipsum text (needs content)

### 5. Contact Section
- Contact form with validation:
  - Name (required)
  - Email Address (required, validated)
  - Phone Number (required)
  - Message (required)
- Uses `jqBootstrapValidation.js` for client-side validation
- AJAX submission to PHP backend
- Success/error message display
- Form reset after submission

### 6. Footer
- Three-column layout:
  - Location (placeholder address)
  - LinkedIn profile badge (embedded widget)
  - About section (template attribution)
- Copyright notice: "Copyright © João Felício 2020"

## JavaScript Functionality (`js/scripts.js`)

1. **Smooth Scrolling**: jQuery easing for anchor link navigation
2. **Scroll-to-Top Button**: Appears after scrolling 100px (mobile only)
3. **Responsive Menu**: Auto-closes on navigation link click
4. **Scrollspy**: Highlights active navbar section based on scroll position
5. **Navbar Shrink**: Adds `navbar-shrink` class when scrolled past 100px
6. **Floating Labels**: Form input focus/blur animations

## Contact Form Implementation

### Client-Side (`assets/mail/contact_me.js`)
- Uses `jqBootstrapValidation` plugin
- AJAX POST to `contact_me.php`
- Prevents duplicate submissions (disables button during request)
- Shows success/error alerts
- Resets form after submission

### Server-Side (Two Versions)

**Version 1** (`mail/contact_me.php`):
- Simple implementation
- Basic validation
- Sends to: `joaopfelicio@gmail.com`
- Less secure (no input sanitization)

**Version 2** (`assets/mail/contact_me.php`):
- More secure with input sanitization (`strip_tags`, `htmlspecialchars`)
- Email validation
- Proper error handling (HTTP 500 on failure)
- Placeholder email address (needs configuration)

## Styling

- **Primary Color**: Teal/Cyan (#1abc9c)
- **Secondary Color**: Dark Blue (#2c3e50)
- **Fonts**: 
  - Headings: Montserrat
  - Body: Lato
- **Responsive Breakpoints**: Bootstrap 4 standard (xs, sm, md, lg, xl)
- **Custom Components**: Dividers with star icons, portfolio modals, floating labels

## Current State & Issues

### Content Issues
1. **Placeholder Text**: Multiple sections contain Lorem ipsum or template text:
   - About section has test text
   - All portfolio modals have placeholder content
   - Footer location is placeholder
   - Footer "About Freelancer" section is template default

2. **Incomplete Information**:
   - Portfolio modals need actual content for Experience, Education, Skills, etc.
   - Contact form PHP needs email configuration

### Technical Notes
- Two different PHP contact form handlers exist (consolidation recommended)
- Jekyll configuration is minimal and may not be actively used
- Site appears to be static HTML with PHP for contact form only
- LinkedIn badge integration is present but may need configuration

## Dependencies (CDN)

- jQuery 3.4.1
- Bootstrap 4.4.1 (JS bundle)
- jQuery Easing 1.4.1
- Font Awesome 5.12.1
- Google Fonts (Montserrat, Lato)
- LinkedIn Badge API

## Deployment

- **Platform**: GitHub Pages
- **Repository**: jfelicio.github.io (GitHub Pages convention)
- **Build**: Static HTML (no build process required)
- **PHP**: Contact form requires PHP-capable server (GitHub Pages doesn't support PHP - form may not work)

## Recommendations for Future Development

1. **Content Updates**: Replace all placeholder text with actual information
2. **Contact Form**: 
   - Use a third-party service (Formspree, Netlify Forms) since GitHub Pages doesn't support PHP
   - Or migrate to a serverless function (AWS Lambda, Vercel, etc.)
3. **Jekyll Migration**: Either fully adopt Jekyll for easier content management or remove Jekyll config
4. **Image Optimization**: Consider WebP format and lazy loading for portfolio images
5. **Accessibility**: Add ARIA labels, improve keyboard navigation
6. **SEO**: Add meta descriptions, Open Graph tags, structured data
7. **Analytics**: Consider adding Google Analytics or similar
8. **Modernization**: Consider migrating to a modern framework (React, Vue) or static site generator (Next.js, Gatsby)

## File Count Summary

- **HTML**: 1 file (index.html)
- **CSS**: 1 file (styles.css - ~10,000+ lines)
- **JavaScript**: 3 files (scripts.js, contact_me.js, jqBootstrapValidation.js)
- **PHP**: 2 files (duplicate contact handlers)
- **Images**: 7 files (1 SVG avatar + 6 PNG portfolio images)
- **Config**: 1 file (_config.yml)

## License

The template is based on Start Bootstrap Freelancer v6.0.1, which is MIT licensed. Custom modifications are owned by João Felício.

