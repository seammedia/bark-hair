# Bark Hair - Sustainable Luxury Salon Website

A modern, user-friendly website redesign for [Bark Hair](https://barkhair.com.au), a boutique LGBTQIA+ inclusive hair salon in Acton, Canberra focusing on sustainable beauty and premium styling.

**Live Site**: [bark-hair.vercel.app](https://bark-hair-6399rctsq-seammedias-projects.vercel.app)

## Project Overview

This project is a complete website redesign aimed at creating a more modern, accessible, and user-friendly experience for Bark Hair's clients. The new design emphasizes the salon's commitment to sustainable luxury, LGBTQIA+ inclusivity, and eco-conscious practices while providing an elegant browsing experience.

### Key Features

- **Modern Design** - Clean, minimalist aesthetic with elegant typography
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Lavender Purple Branding** - Distinctive purple navbar matching brand logo
- **Smooth Animations** - Subtle hover effects and transitions for enhanced UX
- **Sticky Navigation** - Purple navbar with logo, changes opacity on scroll
- **Booking Integration** - Direct links to Phorest booking system
- **Social Media Integration** - Links to Instagram and Facebook
- **SEO Optimized** - Structured for search engine visibility
- **Performance Focused** - Fast loading times with optimized assets

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Playfair Display (serif headings) + Plus Jakarta Sans (body text)
- **Icons**: Lucide React
- **Hosting**: Vercel (auto-deploy on push)
- **Version Control**: GitHub

## Project Structure

```
bark-hair/
├── public/
│   ├── favicon.svg
│   └── img/
│       ├── images.jpeg              # Bark Hair logo (lavender bg)
│       ├── salon-hero.png           # Hero image (salon interior)
│       ├── after-hair.png           # Gallery image
│       ├── before-hair.jpeg         # Gallery image
│       ├── client-stylist.png       # Gallery image
│       ├── consultation.png         # Gallery image
│       ├── hair-cutting.png         # Gallery image
│       ├── hair-dryer.png           # About section image
│       ├── mens-cut.png             # Gallery image
│       ├── products.png             # Gallery image
│       └── salon-styling.png        # About section image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Fixed navigation with logo and purple bg
│   │   ├── Hero.tsx                 # Hero with salon image
│   │   ├── About.tsx                # About Us + Sustainable Salon sections
│   │   ├── Services.tsx             # 6 service cards with pricing
│   │   └── Footer.tsx               # Contact, hours, social links
│   ├── constants/
│   │   └── index.ts                 # Nav items, stats, services data
│   ├── App.tsx                      # Main app with Gallery & Newsletter
│   ├── index.css                    # Global styles, Tailwind imports
│   └── main.tsx                     # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Website Sections

### 1. Navigation
- Fixed navbar with centered Bark Hair logo image
- Lavender purple background (#ddc4f0) - matches brand logo
- Dark text for nav links for readability on light purple
- Mobile hamburger menu (dark icon)
- "Book Now" CTA button (black bg, white text) linking to Phorest
- Slight opacity/blur effect on scroll

### 2. Hero Section
- Full-height hero with headline and CTAs
- **Headline**: "Where care meets creativity"
- Arched image container with salon interior photo
- "Sustainable Salon" floating card with "Eco-friendly" label
- Book Now button + See the workflow video button

### 3. About Us Section
- Brand story and mission
- Stats grid: LGBTQIA+ Inclusive | 100s Happy Clients | 95% Waste Recycled
- Arched image gallery with local salon photos

### 4. Sustainable Salon Section
- 95% waste recycling commitment
- Hair Booms - oil spill absorption
- Plastic recycling - all 7 types into glasses frames
- Ponytails - 80,000 donated for medical wigs
- $3 per visit sustainability fee

### 5. Services Section
6 service categories with pricing:

| Service | Starting Price |
|---------|---------------|
| Haircuts & Blow Drys | From $80 |
| Colouring Services | From $55 |
| Hair Botox | From $300 |
| Nanoplasty | From $350 |
| Perm | From $200 |
| Hair Extensions | Consultation Required |

### 6. Gallery Section
- 4-image grid with hover zoom effects
- Staggered layout (offset images)
- "View Full Instagram Feed" link

### 7. Newsletter Section
- Email subscription form
- "Experience the art of conscious hair care" heading

### 8. Footer
- Contact information
- Business hours
- Social media links (Instagram, Facebook)
- Copyright 2026

## Design System

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Bark Purple | `#ddc4f0` | **Primary brand color**, navbar background |
| Bark Pink | `#EDE1D9` | Secondary backgrounds, soft gradient |
| Bark Blue | `#2596be` | Accent color (available in config) |
| Black | `#171717` | Primary text, buttons, headings |
| White | `#FFFFFF` | Card backgrounds, button text |
| Neutral 800 | `#262626` | Nav link text on purple bg |
| Neutral 900 | `#171717` | Dark backgrounds (About section) |
| Rose 300 | `#FDA4AF` | Hover states on purple navbar |
| Rose 500 | `#F43F5E` | Accent hover states |

### Typography

- **Headings**: Playfair Display (serif, italic variants for emphasis)
- **Body**: Plus Jakarta Sans (sans-serif, clean and modern)
- **Labels**: Uppercase with wide letter-spacing (tracking-widest)

### Logo
- **File**: `/img/images.jpeg`
- **Format**: JPEG with lavender purple background
- **Text**: "BARK HAIR" in copper/brown color
- **Height in navbar**: 48px (h-12)

### Special Effects

- **Arch Mask**: Custom clip-path for hero image container
- **Soft Gradient**: Radial gradient for hero background
- **Hover Transitions**: 500ms ease-in-out for smooth interactions
- **Backdrop Blur**: Applied to navbar on scroll

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/seammedia/bark-hair.git

# Navigate to project directory
cd bark-hair

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment on Vercel:

1. Push code to GitHub repository (`main` branch)
2. Vercel auto-detects changes and deploys
3. Preview deployments created for pull requests

### Manual Deployment

```bash
# Deploy to production
vercel --prod
```

### GitHub Repository
https://github.com/seammedia/bark-hair

### Vercel Project
Connected to `seammedias-projects/bark-hair`

## External Integrations

### Booking System
- **Provider**: Phorest
- **URL**: https://phorest.com/book/salons/barkhairptyltd
- Used for all "Book Now" buttons and service arrows

### Social Media
- **Instagram**: https://www.instagram.com/bark_hair/
- **Facebook**: https://www.facebook.com/BarkHair

## Business Information

**Bark Hair Salon**
- **Address**: Carpark, Kingsley St, Acton ACT 2610
- **Phone**: 0433 414 463
- **Email**: hello@barkhair.com.au

**Hours**:
| Day | Hours |
|-----|-------|
| Monday | We Rest |
| Tuesday | 10am - 8pm |
| Wednesday | 10am - 8pm |
| Thursday | 10am - 8:30pm |
| Friday | 9am - 5pm |
| Saturday | 8:30am - 1:30pm |
| Sunday | We Rest |

## Key Implementation Notes

### Navbar with Logo (Navbar.tsx)
```tsx
// Logo image in center
<div className="absolute left-1/2 -translate-x-1/2">
  <img src="/img/images.jpeg" alt="Bark Hair" className="h-12" />
</div>

// Purple background with dark text
<nav className={`fixed w-full z-50 transition-all duration-300
  ${scrolled ? 'bg-bark-purple/95 backdrop-blur-md shadow-sm py-4' : 'bg-bark-purple py-6'}`}>

// Nav links - dark text on light purple
<a className="text-sm font-medium text-neutral-800 hover:text-rose-500
  transition-colors uppercase tracking-widest">

// Book Now button - black bg, white text
<a className="bg-black text-white text-xs font-bold uppercase
  tracking-widest px-8 py-3 rounded-full hover:bg-neutral-800">
```

### Hero Section (Hero.tsx)
```tsx
// Headline
<h2 className="text-6xl md:text-8xl font-serif leading-[1.1] text-neutral-900">
  Where <span className="italic">care</span> <br />
  meets <br />
  <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">creativity</span>
</h2>

// Hero image - salon interior
<img
  src="/img/salon-hero.png"
  alt="Bark Hair Salon"
  className="absolute inset-0 w-full h-full object-cover"
/>

// Floating card
<p className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-1">Eco-friendly</p>
<p className="text-xl font-serif font-bold text-neutral-900 leading-tight">Sustainable <br />Salon</p>
```

### Custom Tailwind Colors (tailwind.config.js)
```js
colors: {
  bark: {
    pink: '#EDE1D9',    // Secondary brand color
    purple: '#ddc4f0',  // Primary brand color - navbar
    blue: '#2596be',    // Accent color
  },
}
```

## Recent Changes Log

| Date | Change |
|------|--------|
| Jan 2026 | Updated navbar to lavender purple (#ddc4f0) |
| Jan 2026 | Added Bark Hair logo image to navbar |
| Jan 2026 | Changed hero image to salon interior photo |
| Jan 2026 | Updated headline to "Where care meets creativity" |
| Jan 2026 | Changed floating card to "Sustainable Salon" |
| Jan 2026 | Removed before/after spotlight effect |
| Jan 2026 | Updated nav link colors for purple background |

## Contributing

This is a client project. For any changes or suggestions, please contact the project maintainers.

## License

All rights reserved. This project is proprietary and confidential.

---

Built with care for Bark Hair Salon | Acton, Canberra | LGBTQIA+ Inclusive | Sustainable Beauty
