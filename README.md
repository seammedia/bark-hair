# Bark Hair - Sustainable Luxury Salon Website

A modern, user-friendly website redesign for [Bark Hair](https://barkhair.com.au), a boutique hair salon in Paddington, Brisbane focusing on sustainable beauty and premium styling.

## Project Overview

This project is a complete website redesign aimed at creating a more modern, accessible, and user-friendly experience for Bark Hair's clients. The new design emphasizes the salon's commitment to sustainable luxury while providing an elegant browsing experience.

### Key Features

- **Modern Design** - Clean, minimalist aesthetic with elegant typography
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle hover effects and transitions for enhanced UX
- **SEO Optimized** - Structured for search engine visibility
- **Performance Focused** - Fast loading times with optimized assets

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif headings) + Plus Jakarta Sans (body text)
- **Icons**: Lucide React
- **Hosting**: Vercel
- **Version Control**: GitHub

## Project Structure

```
bark-hair/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Footer.tsx
│   ├── constants/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Sections

1. **Navigation** - Fixed navbar with logo, navigation links, and booking CTA
2. **Hero** - Full-height hero with headline, CTAs, and featured image
3. **About** - Brand story with statistics and image gallery
4. **Services** - Service cards with pricing and descriptions
5. **Gallery** - Instagram feed preview with hover effects
6. **Newsletter** - Email subscription section
7. **Footer** - Contact info, hours, social links, and legal

## Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#171717` | Primary text, buttons |
| White | `#FFFFFF` | Backgrounds |
| Rose 50 | `#FFF1F2` | Accent backgrounds |
| Rose 100 | `#FFE4E6` | Selection highlight |
| Rose 400 | `#FB7185` | Accent elements, icons |
| Neutral 50 | `#FAFAFA` | Section backgrounds |
| Neutral 400 | `#A3A3A3` | Secondary text |
| Neutral 500 | `#737373` | Muted text |

### Typography

- **Headings**: Playfair Display (serif, italic variants)
- **Body**: Plus Jakarta Sans (sans-serif)
- **Tracking**: Wide letter-spacing for uppercase labels

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[username]/bark-hair.git

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

This project is configured for deployment on Vercel:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel auto-detects the framework and deploys

### Environment Variables

No environment variables are required for the base deployment.

## Business Information

**Bark Hair Salon**
- **Address**: 2/227 Given Terrace, Paddington QLD 4064
- **Phone**: (07) 3162 2608
- **Email**: hello@barkhair.com.au

**Hours**:
| Day | Hours |
|-----|-------|
| Monday | Closed |
| Tuesday - Thursday | 10am - 8pm |
| Friday | 9am - 6pm |
| Saturday | 8am - 4pm |
| Sunday | Closed |

## Contributing

This is a client project. For any changes or suggestions, please contact the project maintainers.

## License

All rights reserved. This project is proprietary and confidential.

---

Built with care for Bark Hair Salon
