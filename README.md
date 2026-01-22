# Bark Hair - Sustainable Luxury Salon Website

A modern, user-friendly website redesign for [Bark Hair](https://barkhair.com.au), a boutique LGBTQIA+ inclusive hair salon in Acton, Canberra focusing on sustainable beauty and premium styling.

**Live Site**: [bark-hair.vercel.app](https://bark-hair-ayy3rscn3-seammedias-projects.vercel.app)

## Project Overview

This project is a complete website redesign aimed at creating a more modern, accessible, and user-friendly experience for Bark Hair's clients. The new design emphasizes the salon's commitment to sustainable luxury, LGBTQIA+ inclusivity, and eco-conscious practices while providing an elegant browsing experience.

### Key Features

- **Modern Design** - Clean, minimalist aesthetic with elegant typography
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Before/After Spotlight Effect** - Interactive hero image with mouse-tracking reveal effect
- **Smooth Animations** - Subtle hover effects and transitions for enhanced UX
- **Sticky Navigation** - Transparent on hero, changes to brand pink on scroll
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
│       ├── after-hair.png         # Hero after image (styled)
│       ├── before-hair.jpeg       # Hero before image (unstyled)
│       ├── client-stylist.png     # Gallery image
│       ├── consultation.png       # Gallery image
│       ├── hair-cutting.png       # Gallery image
│       ├── hair-dryer.png         # About section image
│       ├── mens-cut.png           # Gallery image
│       ├── products.png           # Gallery image
│       └── salon-styling.png      # About section image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Fixed navigation with scroll effect
│   │   ├── Hero.tsx               # Hero with before/after spotlight
│   │   ├── About.tsx              # About Us + Sustainable Salon sections
│   │   ├── Services.tsx           # 6 service cards with pricing
│   │   └── Footer.tsx             # Contact, hours, social links
│   ├── constants/
│   │   └── index.ts               # Nav items, stats, services data
│   ├── App.tsx                    # Main app with Gallery & Newsletter
│   ├── index.css                  # Global styles, Tailwind imports
│   └── main.tsx                   # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Website Sections

### 1. Navigation
- Fixed navbar with centered logo
- Transparent on hero section
- Changes to brand pink (#EDE1D9) on scroll with backdrop blur
- Mobile hamburger menu
- "Book Now" CTA linking to Phorest

### 2. Hero Section
- Full-height hero with headline and CTAs
- **Before/After Spotlight Effect**: Mouse-tracking circular reveal
  - Default: Shows styled "after" hair
  - On hover: Circular spotlight follows cursor revealing "before" image
  - CSS filters on before image for dramatic effect (darker, higher contrast)
  - Custom cursor indicator circle

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
| Bark Pink | `#EDE1D9` | Primary brand color, backgrounds, navbar |
| Black | `#171717` | Primary text, buttons, headings |
| White | `#FFFFFF` | Card backgrounds, text on dark |
| Neutral 50 | `#FAFAFA` | Light section backgrounds |
| Neutral 400 | `#A3A3A3` | Secondary text |
| Neutral 500 | `#737373` | Muted text, descriptions |
| Neutral 900 | `#171717` | Dark backgrounds (About section) |
| Rose 400 | `#FB7185` | Accent hover states, icons |

### Typography

- **Headings**: Playfair Display (serif, italic variants for emphasis)
- **Body**: Plus Jakarta Sans (sans-serif, clean and modern)
- **Labels**: Uppercase with wide letter-spacing (tracking-widest)

### Special Effects

- **Arch Mask**: Custom clip-path for hero image container
- **Soft Gradient**: Radial gradient for hero background
- **Spotlight Reveal**: CSS mask with radial-gradient following mouse position
- **Hover Transitions**: 500ms ease-in-out for smooth interactions

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

### Before/After Spotlight Effect (Hero.tsx)
```tsx
// Mouse position tracking
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// CSS mask follows cursor position
style={{
  maskImage: `radial-gradient(circle 80px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 100%)`,
}}

// Before image has dramatic filters
style={{
  filter: 'brightness(0.7) contrast(1.2) saturate(0.8)',
}}
```

### Scroll-based Navbar Color Change (Navbar.tsx)
```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Conditional classes
className={scrolled ? 'bg-bark-pink/95 backdrop-blur-md' : 'bg-transparent'}
```

### Custom Tailwind Color (tailwind.config.js)
```js
colors: {
  bark: {
    pink: '#EDE1D9',
  },
}
```

## Contributing

This is a client project. For any changes or suggestions, please contact the project maintainers.

## License

All rights reserved. This project is proprietary and confidential.

---

Built with care for Bark Hair Salon | Acton, Canberra | LGBTQIA+ Inclusive | Sustainable Beauty
