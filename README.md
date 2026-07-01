# Jubilant City SDN BHD - Website

Professional single-page website for Jubilant City SDN BHD, a global import-export trading company.

## Company Information

- **Company Name**: Jubilant City SDN BHD
- **Registration**: 200501035441 / 717586-U
- **Address**: 25-1, Jalan 2/105, Taman Midah Cheras, 56000 Kuala Lumpur, Malaysia
- **Phone**: +60 13-313 7419 (Andy Chaeh)
- **Email**: jubilantcity.acc@gmail.com

## Website Features

### Design
- **Color Scheme**: Professional red and gray palette matching company logo
- **Responsive Design**: Fully mobile-friendly and works on all devices
- **Modern Layout**: Clean, professional single-page design
- **Fast Loading**: Optimized images and efficient code

### Sections
1. **Navigation Bar** - Sticky header with smooth scrolling
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **About Section** - Company overview and key information
4. **Services Section** - Six core service offerings
5. **Why Choose Us** - Four key differentiators
6. **Contact Section** - Contact information and inquiry form
7. **Footer** - Quick links and company details

### Services Highlighted
- Import & Export Solutions
- Agent Services
- General Trading
- Transportation Services
- Wholesale & Retail Operations
- Custom Solutions

## File Structure

```
jubilant-website/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── logo.jpg            # Company logo
├── hero.jpg            # Hero section image
├── services.jpg        # Services section image
└── warehouse.jpg       # About section image
```

## How to Deploy

### Option 1: Local Testing
1. Extract the ZIP file to your desired location
2. Open `index.html` in any web browser
3. The website will load and function completely offline

### Option 2: Web Hosting
1. Upload all files to your web hosting server (FTP/SFTP)
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `logo.jpg`
   - `hero.jpg`
   - `services.jpg`
   - `warehouse.jpg`
3. Visit your domain URL in a browser

### Option 3: Popular Hosting Services
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository or upload files
- **GitHub Pages**: Push to GitHub and enable Pages
- **Bluehost/HostGator**: Upload via File Manager or FTP
- **AWS S3**: Upload files and enable static website hosting

## Customization Guide

### Change Colors
Edit the CSS variables in `styles.css` (lines 8-16):
```css
:root {
    --primary-red: #D32F2F;
    --dark-red: #B71C1C;
    /* ... other colors ... */
}
```

### Update Company Information
Edit the contact section in `index.html`:
- Phone number (line ~280)
- Email address (line ~285)
- Physical address (lines ~290-293)
- Company registration number (line ~297)

### Replace Images
Replace image files in the same directory:
- `logo.jpg` - Company logo
- `hero.jpg` - Main hero section image
- `services.jpg` - Services section image
- `warehouse.jpg` - About section image

Keep the same filenames to avoid updating HTML references.

### Add More Services
Duplicate a service card in the HTML and modify:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Name</h3>
    <p>Service description here...</p>
</div>
```

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Fully Responsive**: Works on devices from 320px to 4K screens
- **Fast Loading**: Optimized images and minimal CSS/JS
- **Accessibility**: Semantic HTML and proper contrast ratios
- **SEO Friendly**: Proper meta tags and structured content

## Features

✅ Sticky Navigation Bar
✅ Smooth Scrolling
✅ Mobile Hamburger Menu
✅ Contact Form (Email Integration)
✅ Hover Animations
✅ Lazy Loading Images
✅ Intersection Observer Effects
✅ Professional Typography
✅ Gradient Backgrounds
✅ Icon Integration (Font Awesome)

## Contact Form

The contact form integrates with the default email client:
1. User fills in name, email, subject, and message
2. Clicking "Send Message" opens their email client
3. Pre-filled with subject and message content
4. User can review and send from their email account

**Note**: For server-side form submission, you'll need to add backend functionality or use a third-party service like Formspree, Netlify Forms, or EmailJS.

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)**: No dependencies required
- **Font Awesome**: Icon library (CDN)
- **Responsive Design**: Mobile-first approach

## SEO Optimization

- Semantic HTML structure
- Meta description and viewport tags
- Proper heading hierarchy
- Image alt text
- Mobile-friendly design
- Fast loading times

## Support & Maintenance

For updates or modifications:
1. Edit the respective HTML, CSS, or JS files
2. Test changes locally in a browser
3. Upload updated files to your hosting
4. Clear browser cache if changes don't appear

## License

This website is created for Jubilant City SDN BHD. All rights reserved.

---

**Created**: 2026
**Company**: Jubilant City SDN BHD
**Registration**: 200501035441 / 717586-U
