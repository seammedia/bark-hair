# Bark Hair - Sustainable Luxury Salon Website

A modern, user-friendly website redesign for [Bark Hair](https://barkhair.com.au), a boutique LGBTQIA+ inclusive hair salon in Acton, Canberra focusing on sustainable beauty and premium styling.

**Live Site**: [bark-hair.vercel.app](https://bark-hair.vercel.app)

## Project Overview

This project is a complete website redesign aimed at creating a more modern, accessible, and user-friendly experience for Bark Hair's clients. The new design emphasizes the salon's commitment to sustainable luxury, LGBTQIA+ inclusivity, and eco-conscious practices while providing an elegant browsing experience.

### Key Features

- **Modern Design** - Clean, minimalist aesthetic with elegant typography
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Lavender Purple Branding** - Distinctive purple navbar matching brand logo
- **Smooth Animations** - Subtle hover effects and transitions for enhanced UX
- **Sticky Navigation** - Purple navbar with logo, changes opacity on scroll
- **Booking Integration** - Direct links to Kitomba booking system
- **Social Media Integration** - Links to Instagram and Facebook
- **SEO Optimized** - Structured for search engine visibility
- **Performance Focused** - Fast loading times with optimized assets

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Playfair Display (serif headings) + EB Garamond (body text) + Drupadi (Bark Hair branding)
- **Icons**: Lucide React
- **Hosting**: Vercel (auto-deploy on push)
- **Version Control**: GitHub

## Project Structure

```
bark-hair/
├── public/
│   ├── favicon.svg
│   ├── Drupadi-Regular.otf          # Custom font for "Bark Hair" branding
│   └── img/
│       ├── bark-hair-wordmark.png    # "BARK HAIR" logo, transparent (espresso brown)
│       ├── bark-hair-monogram.png    # "BH" monogram, transparent
│       ├── faith.jpg / chloe.jpg / vi.jpg / ruby.jpg  # Team photos (polaroid style)
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
│   │   ├── Services.tsx             # 8 service cards with gender neutral pricing
│   │   ├── Team.tsx                 # Team member cards with profiles
│   │   └── Footer.tsx               # Contact, hours, social links
│   ├── constants/
│   │   └── index.ts                 # Nav items, stats, services, team data
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
- Fixed navbar with the BARK HAIR wordmark centred on desktop (BH monogram on mobile)
- Soft Lavender background (#DDC5F1) - matches the new brand palette
- Dark text for nav links for readability on light lavender
- Mobile hamburger menu (dark icon); the mobile overlay includes the Book Now button
- "Book Now" CTA button (black bg, white text) linking to Kitomba (hidden in the mobile header to keep the centred logo clear)
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
11 service categories with pricing, plus Gender Neutral Pricing message:

**Gender Neutral Pricing Blurb**: Prominent card explaining that pricing is based on hair length/time, not gender. Emphasizes safe space messaging for LGBTQIA+ community.

| Service | Starting Price |
|---------|---------------|
| Haircuts | From $80 |
| Blow Drys | From $55 |
| Barbering | From $50 |
| Colouring Services | From $55 |
| Hair Botox | From $300 |
| Nanoplasty | From $350 |
| Perm | From $200 |
| Hair Extensions | Consultation Required |
| Tracks | Consultation Required |
| Executive Head & Face Shave | From $80 |
| Hair Systems | Consultation Required |

**Future Enhancement**: Dedicated pages with detailed info for Hair Extensions, Nanoplasty, Hair Botox, Hair Systems, and Executive Shave.

### 6. Team Section
Dedicated section showcasing all team members with expandable cards:

| Name | Title | Notes |
|------|-------|-------|
| Em | Founder & Creative Director | Precision cuts, lived-in colour, customised extensions, 27 years |
| Laila | Master Stylist \| Curl & Blonde Specialist | Curly hair cutting, colour, natural texture |
| Ally | Creative Stylist \| Vivid Colour & Barbering | Creative vivid colouring, modern barbering, 14 years |
| Ruby | Senior Stylist \| Vivid Colours & Reds | Promoted from Emerging Senior Stylist, Sep 2026 |
| Faith | Master Stylist & Curl Specialist | Added Sep 2026; title confirmed by Tamara 18 Sep 2026 |
| Jess | First Year Apprentice | Added Nov 2026 (replaced Chloe), photo `jess.jpg` |
| Vi | 1st Year Apprentice | Added Sep 2026 |
| Tamara | Bark Salon Coordinator | Day-to-day salon flow, bookings, client experience |
| Evelyn | Tea & Tidy | Added Nov 2026 (replaced Beatrix), photo `evelyn.jpg` |

**Notes**:
- Jen (Happiness Receptionist) was removed in Feb 2026 at Tamara's request.
- Chloe and Beatrix were removed in Nov 2026 at Tamara's request; Jess and Evelyn added.
- Reet was removed in Jul 2026.
- Sally (Cosmetic Registered Nurse) was removed on 18 Sep 2026 at Emma's request. Her card and registration number were deleted from `constants/index.ts`, and the registration-number rendering block was removed from `Team.tsx`.
- Faith, Chloe, and Vi titles were originally inferred from their bios (Emma supplied descriptions but not titles). Tamara confirmed Faith ("Master Stylist & Curl Specialist") and Chloe ("First Year Apprentice") on 18 Sep 2026; Vi's title remains inferred.
- Evelyn has no separate card or photo; she is intentionally part of Beatrix's bio.

**Team Card Features**:
- Each card shows short description by default
- "Read more" button expands to show full bio (swaps text, no repetition)
- "Read less" collapses back to short description
- Placeholder initials in Drupadi font if a member has no photo (all current members have photos)

### 7. Gallery Section
- 4-image grid with hover zoom effects
- Staggered layout (offset images)
- "View Full Instagram Feed" link

### 8. Newsletter Section
- Email subscription form
- "Experience the art of conscious hair care" heading

### 9. Footer
- Contact information
- Business hours
- Social media links (Instagram, Facebook)
- Copyright 2026

## Design System

### Brand Colors (Sep 2026 rebrand)

| Color | Hex | Usage |
|-------|-----|-------|
| Soft Lavender | `#DDC5F1` | **Primary brand color**, navbar and section backgrounds (`bark-purple` / `bark-lavender`) |
| Espresso Brown | `#421D06` | Logo, accents, headings, links (`bark-copper` / `bark-espresso`) |
| Pure White | `#FEFEFE` | Card and page backgrounds (`bark-white`) |
| Lavender Wash | `#F7F1FC` | Very light backgrounds and selection (`bark-cream`) |
| Lavender Tint | `#F1E9FB` | Soft section backgrounds (`bark-pink`) |
| Black | `#000000` | Primary text, buttons, headings |
| Neutral 800 | `#262626` | Nav link text on lavender bg |
| Neutral 900 | `#171717` | Dark backgrounds (About section) |

The old copper (`#a65523`) and warm cream/pink (`#f2e6de`, `#EDE1D9`) palette was retired on 18 Sep 2026. `bark-copper` is now an alias for espresso brown, so every existing `text-bark-copper` / `bg-bark-pink` class picked up the new colours without touching component files. Only three hardcoded hexes existed outside the Tailwind config: `src/index.css` (selection + focus ring) and `src/components/Reviews.tsx` (star rating).

### Previous Palette (retired Sep 2026)

Kept for reference only. Do not reintroduce.

| Color | Hex |
|-------|-----|
| Bark Copper | `#a65523` |
| Bark Cream | `#f2e6de` |
| Bark Pink | `#EDE1D9` |
| Bark Beige | `#ebe2d8` |
| Bark Tan | `#cec5ae` |
| Bark Olive | `#aea27f` |
| Bark Blue | `#2596be` |

### Typography

- **Headings**: Playfair Display (serif, italic variants for emphasis)
- **Body**: EB Garamond (serif, elegant and readable)
- **Bark Hair Branding**: Drupadi (custom font for "Bark Hair" text throughout site)
- **Labels**: Uppercase with wide letter-spacing (tracking-widest)

### Logo
The Sep 2026 brand supplies two transparent PNGs, both rendered in espresso brown:
- **Wordmark**: `/img/bark-hair-wordmark.png` ("BARK HAIR", ~7.2:1). Used in the navbar (desktop), footer, and all 12 service page footers.
- **Monogram**: `/img/bark-hair-monogram.png` ("BH", ~2.35:1). Used in the mobile navbar and as the source for the favicon.
- **Favicon**: `/favicon.png` (512px) + `/apple-touch-icon.png` (180px), generated as the monogram on a soft lavender rounded square.
- Both PNGs were extracted from Emma's 3000x3000 JPG exports by keying out the flat `#DDC5F1` background (see "Making a flat-background logo transparent" below). The old `/img/images.jpeg` logo, `/img/Bark HAir.avif`, and `/favicon.svg` were removed.
- **Responsive usage**: the wordmark is 7.2:1, so it is `hidden md:block` in the navbar and swaps to the compact monogram on mobile. Navbar heights are `h-10` (wordmark) / `h-9` (monogram). Service page footers use `h-9 md:h-12 mx-auto`.

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
- **Provider**: Kitomba
- **URL**: https://apps.kitomba.com/bookings/barkhair
- Used for all "Book Now" buttons and service arrows (30 links across 15 files)
- **Note**: Migrated from Timely (`bookings.gettimely.com/barkhair2/bb/book`) to Kitomba in Jun 2026 at Emma's request

### Social Media
- **Instagram**: https://www.instagram.com/bark_hair/
- **Facebook**: https://www.facebook.com/BarkHair

### Analytics
- **Provider**: Vercel Web Analytics
- **Package**: `@vercel/analytics` - `<Analytics />` rendered inside `<Router>` in `src/App.tsx`
- **Dashboard**: https://vercel.com/seammedias-projects/bark-hair/analytics (Analytics tab)
- **Timeline**: the code was shipped Jun 2026, but the dashboard toggle was NOT turned on, so nothing was ever recorded. It was actually enabled on 19 Sep 2026, and collection starts from that date.
- **Important**: Only collects data from the moment it is enabled - there is NO historical data, and no backfill. Do not claim "traffic since Jun 2026".
- Reports visitors, page views, top pages, referrers, and device split. Privacy-friendly, no cookie banner required.
- **Status, verified 25 Sep 2026**: working. `webAnalytics.hasData === true`, `enabledAt` 2026-09-19 10:31 AEST, and the API returns **432 visitors / 685 pageviews** for 19-25 Sep with a row for every day and no gaps. The insights script serves `200` at `/_vercel/insights/script.js`.
- **Not enabled**: Speed Insights (`speedInsights.hasData === false`), so there is no field Core Web Vitals data for this site. Do not present Lighthouse/lab scores as field CWV.
- **Dimension gotcha**: use `requestPath`, not `route`, for "which pages" reporting. See "Web Analytics: Which Dimensions Actually Work on This SPA" under Technical Learnings.

## Business Information

**Bark Hair Salon**
- **Address**: Carpark, Kingsley St, Acton ACT 2610
- **Phone**: 0433 414 463
- **Email**: admin@barkhair.com.au

**Hours** (displayed Tue first, Mon last to emphasise first open day):
| Day | Hours |
|-----|-------|
| Tuesday | 10am - 8pm |
| Wednesday | 10am - 8pm |
| Thursday | 10am - 8:30pm |
| Friday | 9am - 5pm |
| Saturday | 8:30am - 1:30pm |
| Sunday | We Rest |
| Monday | We Rest |

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

### Custom Tailwind Config (tailwind.config.js)
```js
fontFamily: {
  sans: ['EB Garamond', 'Garamond', 'Georgia', 'serif'],
  serif: ['Playfair Display', 'Georgia', 'serif'],
  bark: ['Drupadi', 'serif'],  // For "Bark Hair" branding
},
colors: {
  bark: {
    cream: '#f2e6de',
    copper: '#a65523',  // Logo color, tagline accent
    olive: '#aea27f',
    beige: '#ebe2d8',
    tan: '#cec5ae',
    purple: '#ddc5f1',  // Primary brand color - navbar
    pink: '#EDE1D9',    // Secondary brand color
    blue: '#2596be',    // Accent color
  },
}
```

### Custom Font Setup (index.css)
```css
@font-face {
  font-family: 'Drupadi';
  src: url('/Drupadi-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.font-bark {
  font-family: 'Drupadi', serif;
}
```

## Recent Changes Log

| Date | Change |
|------|--------|
| Sep 2026 | Added `HairSalon` JSON-LD to `index.html` (NAP, hours, `sameAs`, ReserveAction to Kitomba, 12-service offer catalog) and a per-route canonical via `src/components/Seo.tsx`. Added `src/routes.ts` as the single route list + `scripts/check-routes.mjs` to reconcile it (25 Sep) |
| Sep 2026 | `vercel.json`: 308 redirect from `www.barkhair.com.au` to the apex, so the two hosts no longer serve identical content (25 Sep) |
| Sep 2026 | Committed the whole backlog - the repo had not been committed since Feb 2026 while Vercel deployed from the working tree (25 Sep) |
| Sep 2026 | Tamara: Vi's title -> "First Year Apprentice" (matching Chloe); Perm price -> "Consultation Required", plus a consultation badge and a "Book a Consultation" hero button on the Perm page (25 Sep) |
| Sep 2026 | Added `public/sitemap.xml` (13 routes, reconciled against the router) and `public/robots.txt`. Both previously returned the SPA's HTML with a `200` (25 Sep) |
| Sep 2026 | Verified Web Analytics is actually collecting and documented which dimensions work on this SPA (25 Sep) |
| Sep 2026 | **Enabled Web Analytics in the Vercel dashboard** (19 Sep) - the Jun 2026 code was never actually collecting; no historical data exists |
| Sep 2026 | Team titles confirmed by Tamara: Faith -> "Master Stylist & Curl Specialist", Chloe -> "First Year Apprentice" (18 Sep) |
| Sep 2026 | **Full visual rebrand**: swapped old copper/cream palette for Soft Lavender `#DDC5F1` / Espresso Brown `#421D06` / Pure White `#FEFEFE` (Emma's request) |
| Sep 2026 | Replaced logo with new BARK HAIR wordmark (desktop) + BH monogram (mobile); added new PNG favicon and apple-touch-icon; removed old `images.jpeg` and `favicon.svg` |
| Sep 2026 | Team: removed Sally; promoted Ruby to Senior Stylist with a new blurb; added Faith, Chloe and Vi; added Evelyn to Beatrix's bio |
| Sep 2026 | Hair Extensions page: removed Tapes (no longer offered) and all Jadore branding |
| Sep 2026 | Updated staff photos: new Ruby photo, added Faith, Chloe and Vi (extracted from polaroid photos) |
| Sep 2026 | Navbar: wide wordmark centred on desktop, monogram on mobile, mobile Book Now moved into the hamburger menu |
| Jun 2026 | Switched booking link from Timely to Kitomba (apps.kitomba.com/bookings/barkhair) - 30 links across 15 files (Emma's request) |
| Feb 2026 | Removed Jen from team section (Tamara's request) |
| Feb 2026 | Reordered footer hours: Tue first, Mon last (to show first open day prominently) |
| Feb 2026 | Added "first in Canberra for Nanoplasty" copy to Nanoplasty page hero |
| Feb 2026 | Replaced 5 placeholder Google reviews with real client reviews provided by Tamara |
| Feb 2026 | Updated contact email from hello@ to admin@barkhair.com.au |
| Feb 2026 | Fixed "See the workflow" dead button - replaced with Instagram link |
| Feb 2026 | Fixed SEO meta tags - corrected location from Paddington/Brisbane to Acton/Canberra |
| Feb 2026 | Added Google Maps place link using full Maps URL (0x0:0xf5fe7ecc4af3e1bd) |
| Feb 2026 | Created dedicated service pages for all 12 services |
| Feb 2026 | Fixed SPA routing for /services/* paths (vercel.json rewrites) |
| Feb 2026 | Added Nanoplasty, Hair Botox, Extensions, Hair Systems, Barbering, etc. detail pages |
| Feb 2026 | Removed "Specialist" wording from all service pages per Emma's request |
| Feb 2026 | Added Em (Founder & Creative Director) as first team member |
| Feb 2026 | Added 3 new services: Tracks, Executive Head & Face Shave, Hair Systems |
| Feb 2026 | Changed all red/rose accent colours to brown (bark-copper) |
| Feb 2026 | Updated team descriptions with Emma's provided content for all 9 members |
| Feb 2026 | Fixed expandable cards - now swaps short/long text instead of repeating |
| Feb 2026 | Added Gender Neutral Pricing blurb with safe space messaging |
| Feb 2026 | Split Haircuts/Blow Drys/Barbering into 3 separate service cards |
| Feb 2026 | Created dedicated Team section with expandable profile cards |
| Feb 2026 | Added TEAM_MEMBERS data to constants with short/long descriptions |
| Feb 2026 | Added Drupadi font for "Bark Hair" branding throughout site |
| Feb 2026 | Changed body font from Plus Jakarta Sans to EB Garamond |
| Feb 2026 | Updated "creativity" color to copper (#a65523) for better contrast |
| Feb 2026 | Added full brand color palette to Tailwind config |
| Feb 2026 | Renamed "About Us" section to "Meet the Team" with stylist preview text |
| Feb 2026 | Added booking clarification to Services section |
| Jan 2026 | Updated navbar to lavender purple (#ddc4f0) |
| Jan 2026 | Added Bark Hair logo image to navbar |
| Jan 2026 | Changed hero image to salon interior photo |
| Jan 2026 | Updated headline to "Where care meets creativity" |
| Jan 2026 | Changed floating card to "Sustainable Salon" |
| Jan 2026 | Removed before/after spotlight effect |
| Jan 2026 | Updated nav link colors for purple background |

## Client Feedback History

### Emma's Requests (18 Sep 2026) - Rebrand
Email subject "Fwd: Website up date" from Bark Hair Admin (Tamara and Em), 7 attachments (4 HEIC staff photos, 2 logo JPGs, 1 Brand Color Palette PDF). All four items completed and deployed:
1. Update logo and colours to the new brand (Soft Lavender / Espresso Brown / Pure White).
2. Remove Sally from staff; promote Ruby to Senior Stylist with a new blurb; add blurbs for Faith, Chloe and Vi; fold Evelyn into Beatrix's bio.
3. Extensions Services: remove Tapes (no longer offered) and remove Jadore Hair (brand no longer used).
4. Update Ruby's profile photo and add photos for Faith, Chloe and Vi.

**Open questions raised in the reply**: Faith/Chloe/Vi job titles were not supplied, so they were inferred. Tamara confirmed Faith ("Master Stylist & Curl Specialist") and Chloe ("First Year Apprentice") on 18 Sep 2026; Vi's title is still inferred. The new photos are polaroids shot on a white surface (white frame on white background), unlike the existing lavender/teal-frame polaroids on cream.

**Stats request (18 Sep 2026)**: Emma asked for the website "hits" for the last month. Investigation found Web Analytics had never actually been enabled (code only), so there was no history. It was enabled 19 Sep 2026 and a snapshot was promised once data builds. The only available past-month figure was Vercel Edge Requests (~59.83K, 25 Aug - 19 Sep 2026).

### Tamara's Requests (25 Sep 2026)
Two emails in the "Website up date" thread, both from Tamara (`admin@barkhair.com.au`), same day:
1. 11:07 - Vi's title read "1st Year Apprentice" while Chloe's read "First Year Apprentice"; asked for both to spell "First" rather than use the numeral.
2. 12:01 - Set Perms to "Consultation Required" instead of a price.

Both completed and deployed the same day: Vi's title -> "First Year Apprentice", Perm `price` -> "Consultation Required" in `src/constants/index.ts`, plus the "Consultation Required" badge and a "Book a Consultation" hero button on `src/pages/Perm.tsx` to match Extensions and Hair Systems.

**Changed beyond the literal request**: the Perm hero button was "Book Now" and became "Book a Consultation". Disclosed in the reply so Tamara can veto it.

**Raised in the reply, not changed**: Chloe's bio body text still reads "Half-way through her 1st year apprenticeship" (Emma's original supplied wording). The note covered the titles only, so this was queried rather than silently rewritten.

### Tamara's Requests (Feb 2026)
- Remove Jen from team section entirely (photo and blurb)
- Reorder footer hours: Tuesday first, Monday last (emphasise first open day)
- Add copy to Nanoplasty page: Bark Hair is one of the first salons in Canberra to train in and offer Nanoplasty - no more having to leave ACT to travel interstate
- Replace placeholder Google reviews with 5 real reviews (Alisha Doughman, Michelle Stone, Taaliyah Foster, Jenny Blair, Ryan Kellow)

### Emma's Requests (Feb 2026 - various)
- Fix contact email to admin@barkhair.com.au
- "See the workflow" button was dead - replaced with Instagram link
- Google reviews to be added to site (placeholder built; real reviews later provided by Tamara)
- Google Place ID provided as full Maps URL (not standard ChIJ format)
- SEO should emphasise LGBTQIA+, sustainability, Canberra location
- ExecutiveShave rewording requested by Ally
- Hair Tattooing consultation removal + Easy Add-On note
- Hair Systems colour customisation wording
- Remove "Specialist" from all service pages - all stylists can do most services
- Provided full page content for: Haircuts, Blow Drys, Barbering, Hair Tattooing, Colouring, Vivid Colour, Hair Botox, Nanoplasty, Perm, Hair Extensions

### Emma's Feedback (4 Feb 2026)
- Em's profile was missing - added as Founder & Creative Director
- Change red font colour to brown (copper) throughout site
- Add new services: Tracks, Executive Head & Face Shave, Hair Systems
- Update team descriptions with correct content provided
- Fix "Read more" to swap text instead of repeating
- Request for future: dedicated pages for Hair Extensions/Nano/Hair Botox/Hair Systems/Shave

### Emma's Feedback (3 Feb 2026)
- Add gender neutral pricing blurb - important for safe space messaging
- Split Haircuts/Blow Drys/Barbering into separate service cards (not all in one)
- Add Team page with all stylist profiles and specialties
- Provided detailed descriptions for all 9 team members

### Emma's Feedback (27 Jan 2026)
- Writing felt too AI-generated - needed authentic Bark Hair voice
- "Bark Hair" text must use the Bark Hair font (Drupadi) throughout
- Logo at top was too small
- Requested font files and brand colors be provided

### Emma's Feedback (26 Jan 2026)
- Use Bark Hair logo on front/top
- Use brand purple for top bar (keeping black in middle section)
- Replace hover effect with strong salon imagery
- Change tagline from "All for the sake of your beauty" to "Where care meets creativity"

### Design Decisions
- Gender neutral pricing is prominently displayed with LGBTQIA+ safe space messaging
- Services are now granular (12 separate cards) for better booking UX
- Team cards expand/collapse to show short or long descriptions (no text repetition)
- All accent colours use bark-copper (#a65523) instead of rose/red for brand consistency
- Team photos are deliberately instax prints shot lying on a table, uncropped and not straightened. New photos must match: convert HEIC with `sips`, centre-crop to a square (see "Extracting Staff Photos from Polaroid Shots"), no face crop or straightening. Initials only show if `image` is empty.
- "Creativity" in tagline uses copper color (#a65523) to stand out from background
- Services section clarifies that clicking leads to online booking
- New salon photography can be swapped in when available
- Google reviews are hardcoded (Google Maps scraping is blocked programmatically) - update Reviews.tsx when new reviews come in

## Writing Style Guide

- **No em dashes**: Never use em dashes (—) in any writing. Use regular dashes (-) or rewrite the sentence instead.
- **Gender neutral language**: Pricing based on hair length/time, not gender identity
- **Inclusive messaging**: Emphasize safe space for LGBTQIA+ community
- **Authentic voice**: Avoid AI-sounding copy - use warm, welcoming tone

## Deployment Notes

### Vercel CLI Setup (if not using GitHub auto-deploy)

1. Install Node.js from https://nodejs.org
2. Install Vercel CLI: `sudo npm install -g vercel`
3. Login: `vercel login`
4. Deploy: `cd /path/to/bark-hair && vercel --prod`

### Troubleshooting

- If `npm install -g` fails with permission errors, use `sudo npm install -g`
- If Vercel CLI shows token error, run `vercel login` to re-authenticate
- For GitHub push issues, ensure git credentials are configured or use GitHub Desktop

## Technical Learnings & Gotchas

### Edit Tool Requires Prior Read
- Always `Read` a file before using `Edit` in the same session - otherwise the Edit tool throws "File has not been read yet"
- If unsure, `Read` all relevant files at the start of each session

### index.html Whitespace Mismatch
- index.html uses tab indentation; Edit tool can fail due to whitespace differences
- Safest fix: use the `Write` tool to rewrite the entire file rather than Edit for partial changes

### SPA Routing on Vercel
- React Router (client-side routing) requires a `vercel.json` rewrites config or all non-root paths return 404
- Add to `vercel.json`: `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }` (the deployed file points at `/`, not `/index.html` - both work, but copy the file, not this note)
- Real files in the build root (`sitemap.xml`, `robots.txt`, `favicon.png`, `img/*`) are still served normally - Vercel resolves the filesystem before applying rewrites. Only unmatched paths hit the catch-all.

### Google Maps Reviews Cannot Be Scraped
- Google Maps blocks programmatic scraping of reviews
- Solution: build a hardcoded Reviews component and ask the client to supply real review text
- When new reviews come in, update the `reviews` array in `src/components/Reviews.tsx`

### Google Place ID Format
- The Bark Hair Google Maps URL uses the format `0x0:0xf5fe7ecc4af3e1bd` which is NOT a standard `ChIJ...` Place ID
- Use the full Maps URL directly for links rather than trying to construct a Place ID widget

### "See the Workflow" Button
- Was a placeholder with no video content behind it - replaced with Instagram link
- If a video ever becomes available, update `Hero.tsx` to link to the video URL

### Footer Hours Order
- Hours are displayed Tue first, Mon last to emphasise Tuesday as the first open day
- Do not revert to Mon-Sun calendar order - this is intentional per client preference

### Team Member Removal
- To remove a team member, delete their object from the `TEAM_MEMBERS` array in `src/constants/index.ts`
- No other files need updating (the Team component loops over this array)

### Contact Email
- Correct email is `admin@barkhair.com.au` - not hello@ or any other variant

### Hero Image: Arch Mask Incompatible with Group Photos
- The `arch-mask` CSS class uses `clip-path: ellipse(50% 100% at 50% 100%)` and curved top border-radius
- This portrait-shaped arch clips the sides and top of landscape group photos, cutting team members out of frame
- Fix: Remove `arch-mask` class entirely, use `rounded-[40px]` for soft corners instead
- Change aspect ratio from portrait `aspect-[4/5]` to landscape `aspect-[4/3]` for group/team photos
- Remove any `max-w-lg` constraint on the container to allow full column width
- Use `object-center` (not `object-top`) so the full group is centred and visible

### Swapping the Hero Image
- Copy new image file to `public/img/[filename]` in the bark-hair project
- Update the `src` attribute in `Hero.tsx` (the `<img>` tag inside the team image container)
- Deploy with `vercel --prod --yes` from the project root

### Custom Domain: Wix DNS to Vercel
- Register domain on Vercel side first: `vercel domains add barkhair.com.au` and `vercel domains add www.barkhair.com.au`
- In Wix DNS panel, keep the A record pointing to `76.76.21.21` (Vercel's IP)
- Delete any extra A records Wix added by default (185.230.63.186, 185.230.63.107 are Wix's own servers)
- Change the CNAME for `www` from `cdn1.wixdns.net` to `cname.vercel-dns.com`
- DNS propagation can take up to 48 hours; Vercel dashboard shows "Valid Configuration" when ready

### Service Card Descriptions: Colouring vs Vivid Colour
- Keep Colouring and Vivid Colour descriptions clearly distinct - no overlap
- Colouring card should mention: root refresh, balayage, highlights, full colour transformations
- Do NOT mention "vivid" or "bold colours" in the Colouring card - that is Vivid Colour's territory
- Mixing the two makes clients think they are the same service

### Ruby's Title Word Order
- Correct title: "Emerging Senior Stylist" (not "Senior Emerging Stylist")
- Lives in `TEAM_MEMBERS` array in `src/constants/index.ts`

### Hair Tattooing (Tracks) Pricing
- Price is "From $25" - NOT "Consultation Required"
- Update in `SERVICES` array in `src/constants/index.ts` if it ever reverts

### Booking Link Lives in 30 Places Across 15 Files
- The booking URL is hardcoded directly into the `href` of every "Book Now" button - there is NO single shared constant for it
- Files: `Navbar.tsx`, `Hero.tsx`, `Services.tsx`, and all 12 service pages in `src/pages/` (some pages have 2-3 buttons each), totalling 30 occurrences
- To change it, do a global find-and-replace, never file-by-file (you will miss some). On macOS:
  ```bash
  OLD='old-url' && NEW='new-url'
  grep -rl "$OLD" src/ | while read -r f; do sed -i '' "s#${OLD}#${NEW}#g" "$f"; done
  ```
- Verify after: `grep -rc "old" src/` should be 0 and `grep -rc "new" src/` should be 30
- **Future improvement**: extract the booking URL into a single constant in `src/constants/index.ts` so it only needs changing in one place

### Booking Provider Migration History
- Provider has changed twice: **Phorest -> Timely -> Kitomba** (current, Jun 2026)
- Current URL: `https://apps.kitomba.com/bookings/barkhair`
- Before swapping providers, verify the new booking page is genuinely the salon's (the Kitomba page returns Bark Hair's own phone `0433414463` and `admin@barkhair.com.au`) and that the booking flow (services/staff) is fully configured on the provider's end before going live

### Verifying a Deploy on This SPA
- This is a client-rendered SPA, so booking links and the analytics script are NOT in the static HTML - they live in the JS bundle
- Do not grep the homepage HTML to confirm a content/link change; grep the JS bundle instead:
  ```bash
  HTML=$(curl -s https://barkhair.com.au/)
  JS=$(echo "$HTML" | grep -oE '/assets/index-[A-Za-z0-9_-]+\.js' | head -1)
  curl -s "https://barkhair.com.au${JS}" | grep -c 'string-to-check'
  ```
- The `tsc && vite build` step is a good first gate (catches type errors); the module count printed by Vite increments when a new dependency like `@vercel/analytics` is correctly imported
- **Strongest check - content-hash match.** The bundle filename is a hash of its contents. If the `/assets/index-*.js` the live site serves has the same name *and* byte size as the local `dist/` build, the exact bundle you built is what is live:
  ```bash
  npm run build && ls -l dist/assets/index-*.js
  curl -s https://barkhair.com.au/ | grep -oE '/assets/index-[A-Za-z0-9_-]+\.js' | head -1
  ```
- **Count before and after, with context.** Grep the live bundle for the changed strings and compare counts, then print surrounding context to prove the string sits on the record you meant (e.g. `{name:"Vi",title:"First Year Apprentice"`). A bare "the string is present" proves nothing - it may match a different page or a bio.
- Do not verify a copy change with `curl -o /dev/null -w '%{http_code}'`. Every SPA route returns `200` with the same shell.

### Vercel Web Analytics (Vite + React, not Next.js)
- This is a Vite app, so use the React import: `import { Analytics } from '@vercel/analytics/react';` and render `<Analytics />` inside `<Router>` in `src/App.tsx` (inside Router so route changes on `/services/*` are tracked)
- Two-part setup: (1) the code/package, AND (2) Web Analytics enabled in the Vercel dashboard. Code alone does nothing if the dashboard toggle is off
- Verify it's actually collecting: `curl -s -o /dev/null -w "%{http_code}" https://barkhair.com.au/_vercel/insights/script.js` should return `200` (a `404` means it is NOT enabled in the dashboard)
- Analytics only collects from the moment it is enabled - there is no way to backfill historical traffic
- Enabling is done in the dashboard (Analytics tab -> Enable -> confirm the plan modal). Enabling is what makes `/_vercel/insights/script.js` return `200`; until then the site still POSTs to the ingest endpoint but Vercel discards the data.

### Querying Web Analytics Programmatically (Web Analytics API)
- Endpoints (OData filter syntax, `by` for grouping): `GET https://api.vercel.com/v1/query/web-analytics/visits/count` and `.../visits/aggregate`. `pviews`/`visitors` come back in `data`.
- Required params: `projectId` (`prj_n4uWEGKKw59Yuymq9zZWpKgqP4eH`) and `teamId` (`team_UlZr47w5lK1PbKoNeGB9s7IB`). `since`/`until` accept ISO dates.
- Auth: send the Vercel CLI's stored token as an `Authorization: Bearer <token>` header (where it lives is in the private client notes, not this public repo). `vercel whoami` proves it is valid.
- `count` ignores `from`/`to`. The parameters are **`since`/`until`**; wrong names fall back silently to the project creation date, which looks like a much bigger number than you asked for.
- If the feature is off, the API returns `{"error":{"code":"web_analytics_not_enabled"}}` rather than an empty result - that is the tell that the dashboard toggle is off.
- The website must NOT be checked by grepping the homepage HTML (SPA, see above). Check collection with `curl -s -o /dev/null -w "%{http_code}" https://barkhair.com.au/_vercel/insights/script.js`.
- There is no CLI subcommand for Web Analytics (`vercel metrics` is Speed Insights/observability only).

### Vercel Traffic Numbers When Analytics Has No History
- Observability (`/observability`, Query Builder) keeps only a few hours of data (max preset range ~4 hours), so it cannot be used for a monthly report.
- The Usage page (`/usage`) is the only month-scale number: it showed Edge Requests ~59.83K and Fast Data Transfer 32GB for 25 Aug - 19 Sep 2026.
- Edge Requests include assets (images, JS, CSS) and bots, so they are NOT page views or visitors. If reporting to a client, label them as "hits/requests" and note what they include - do not present them as visitors.

### Web Analytics: Which Dimensions Actually Work on This SPA
- Verified 25 Sep 2026 against the live project. Working dimensions: `requestPath` (per-page), `referrerHostname`, `deviceType`, `osName`, `browserName`, `country`, `environment`, `day`.
- `by=route` returns a single row with `route: ""`. That is expected, not a bug: `route` is an optional *custom* dimension, only populated when you pass a `route` prop to `<Analytics />`. We do not, so use **`requestPath`** for "which pages get the most views".
- Client-side navigation IS counted. The served `/_vercel/insights/script.js` patches `pushState`/`popstate`, so React Router transitions fire a pageview carrying the new pathname. (Passing a `route` prop sets `disableAutoTrack: true`, which would switch that off - so adding one is not a free win.)
- Speed Insights is a separate toggle and is NOT enabled (`speedInsights.hasData === false`). There is no field Core Web Vitals data. Never quote a lab PageSpeed/Lighthouse number as field CWV.
- Allowed `by` values, from the 400 error message: `hour, day, week, month, year, country, deviceType, environment, requestPath, referrerHostname, osName, browserName, route, utmSource, utmMedium, utmCampaign, utmContent, utmTerm, flags`. Anything else (e.g. `referrer`, `device`) returns `400 bad_request`.
- Everything is production traffic only (`environment: "production"`), so preview deploys do not pollute the numbers.

### Sitemap and robots.txt (added 25 Sep 2026)
- Both live in `public/` so Vite copies them to the build root unmodified: `public/sitemap.xml`, `public/robots.txt`.
- `sitemap.xml` lists all 13 routes. Validate it by **parsing** it and reconciling against the router every time a route is added:
  ```bash
  python3 - <<'EOF'
  import re, xml.etree.ElementTree as ET
  ns='{http://www.sitemaps.org/schemas/sitemap/0.9}'
  root=ET.parse('public/sitemap.xml').getroot()
  sm={u.findtext(ns+'loc').replace('https://barkhair.com.au','') or '/' for u in root.findall(ns+'url')}
  rt=set(re.findall(r'<Route path="([^"]+)"', open('src/App.tsx').read()))
  print('only in sitemap:', sorted(sm-rt) or 'none')
  print('only in router:', sorted(rt-sm) or 'none')
  EOF
  ```
  Last run: 13 URLs, 13 routes, 0 orphans either way, 0 duplicates.
- `lastmod` is real rather than a blanket date: `2026-09-25` for `/` and `/services/perm` (changed that day), `2026-09-18` for the rest (last content edit was the rebrand).
- `robots.txt` is allow-all plus the sitemap line on the canonical host (`https://barkhair.com.au`, no `www`). Keep the host identical to the sitemap `<loc>` entries.
- **Before this existed**, `/sitemap.xml` and `/robots.txt` returned `200` with the SPA's HTML because the catch-all rewrite swallowed them. A `200` there proved nothing. Always check the content type and the first bytes.
- Verify the live files after deploy:
  ```bash
  curl -sSI https://barkhair.com.au/sitemap.xml | grep -i content-type   # application/xml
  curl -sSI https://barkhair.com.au/robots.txt  | grep -i content-type   # text/plain; charset=utf-8
  ```
  Both are served with the correct type, so the rewrite is leaving them alone.
- Both are now done (25 Sep 2026). The canonical is per-route in `src/components/Seo.tsx` rather than static in `index.html` - see "Canonical on an SPA" below for why a static tag would have been actively harmful. The JSON-LD is a `HairSalon` block in `index.html`: see "JSON-LD Structure".

### Serving Static Files Alongside an SPA Rewrite
- Vercel resolves the filesystem before applying `vercel.json` rewrites, so real files in the build root (`sitemap.xml`, `robots.txt`, `favicon.png`, `apple-touch-icon.png`, `img/*`, `assets/*`) are served normally, and the catch-all only handles unmatched routes.
- This is the same mechanism behind the missing-asset trap below: an unmatched path never 404s, it silently returns the app shell.
- Consequence for testing: `curl -I` status codes cannot distinguish "file exists" from "rewrite caught it". Check `content-type` / `size_download`, or parse the body.

### Deploy Command Used (confirmed working)
- `vercel --prod --yes` from the project root
- Project is linked to `seammedias-projects/bark-hair` (see `.vercel/project.json`) and auto-aliases to `https://barkhair.com.au`
- Logged in as the `seammedia` Vercel account

### Canonical on an SPA (why there is no static tag)
- This site serves **one `index.html` for all 13 routes** (the `vercel.json` catch-all). A static `<link rel="canonical" href="https://barkhair.com.au/">` would therefore tell Google that every service page is a duplicate of the homepage - worse than having no canonical at all, and the kind of change that quietly deindexes pages.
- The canonical is set per route instead, in `src/components/Seo.tsx`, from `canonicalUrl()` in `src/routes.ts`. Googlebot renders JavaScript and honours a canonical added that way; `sitemap.xml` states the same canonical set without needing JS.
- `canonicalUrl()` falls back to `${SITE_ORIGIN}/` for any path that is not in `ROUTE_PATHS`, so a typo or an unknown path does not declare a canonical for a URL that does not exist. Trailing-slash variants (`/services/perm/`) strip to the real route and consolidate onto it.
- `og:url` is deliberately absent. Social scrapers do not execute JavaScript, so a JS-set value would never be read, and a static one would mislabel every service page as the homepage. Leaving it out lets scrapers use the real URL.
- Verified 25 Sep 2026 by loading all 13 routes plus unknown and trailing-slash paths in headless Chromium and reading `link[rel=canonical]` out of the rendered DOM, including a client-side `pushState` navigation. All matched. Do not verify this with `curl` - the tag does not exist in the HTML.

### JSON-LD Structure (HairSalon)
- One `<script type="application/ld+json">` block in `index.html`, `@type: "HairSalon"`, with `@id: https://barkhair.com.au/#salon`.
- Contains: name, description, slogan, url, image (`/img/team-hero.jpg`), logo, `telephone` (+61433414463), email, `priceRange`, `currenciesAccepted`, postal address, `areaServed` (Canberra + ACT), four `openingHoursSpecification` groups (Tue/Wed 10-20, Thu 10-20:30, Fri 09-17, Sat 08:30-13:30), three `sameAs` links, a `ReserveAction` pointing at the Kitomba booking URL, and a 12-item `hasOfferCatalog` mapping each service to its `/services/*` page.
- **`geo` is deliberately omitted.** The only location handle the client has given is a Google Maps URL in a non-standard `0x0:0xf5fe7ecc4af3e1bd` form that does not resolve to a normal `ChIJ...` place ID, so there are no trustworthy coordinates. Do not invent them - add `geo` once the client supplies a Plus Code or lat/long.
- Schema sits in `index.html`, so it is present for all routes and parseable without JavaScript. Keep it statically verifiable rather than injecting it per route.
- Validated by parsing, not by eye: `node scripts/check-routes.mjs` counts the blocks that parse and checks every offer URL matches a real route.

### Reconciling Routes (`npm run check:routes`)
- Three things must agree and drift silently: `src/routes.ts` (the canonical list), `src/App.tsx` (what the router renders), and `public/sitemap.xml` (what is submitted). A fourth consumer, `Seo.tsx`, derives canonicals from `routes.ts`.
- `npm run check:routes` (i.e. `node scripts/check-routes.mjs`) reconciles all of them, parses the JSON-LD, checks the offer catalog points at real routes, asserts the sitemap uses the canonical host, checks `robots.txt` points at the canonical sitemap, and asserts there is **no** static canonical in `index.html`. Run it before every deploy.
- Last run: `routes.ts` 13, `App.tsx` 13, sitemap 13, all agreeing; 1 JSON-LD block parsing; 12 offers all matching routes.

### www to Apex Redirect
- `www.barkhair.com.au` and the apex both resolved and served identical content with no redirect between them - duplicate content with no signal about which is canonical.
- Fixed in `vercel.json` with a host-conditional redirect, which keeps it declared in the repo rather than as dashboard state:
  ```json
  { "source": "/(.*)", "has": [{ "type": "host", "value": "www.barkhair.com.au" }],
    "destination": "https://barkhair.com.au/$1", "permanent": true }
  ```
- Redirects are evaluated before rewrites and before the filesystem, so `/sitemap.xml` and `/robots.txt` on the `www` host redirect too.
- Verified: `/`, `/services/perm`, `/sitemap.xml` and `/robots.txt` on `www` all return `308` to the apex equivalent.

### public/ Is Served Verbatim (junk ships to production)
- Vite copies everything in `public/` into the build root, and Vercel serves it. There is no filtering, so anything dropped there is publicly reachable - including files nothing references.
- Current state: `public/` is ~39 MB. Eight `*.HEIC` photo originals (~12 MB) are live at `/img/<name>.HEIC` with `content-type: image/heic`, plus two unused team photos from removed members (`reet.jpg`, `sally.jpg`, ~3 MB), plus a stray `Screenshot ...png`. None of them are referenced anywhere in `src/`.
- This does not affect rendering or Core Web Vitals (nothing loads them), but it inflates the deploy and leaves client source photos publicly downloadable. Worth cleaning up, with the originals moved somewhere durable first - the older HEICs in `public/img/` are not duplicated in the client folder.
- `*.HEIC` is gitignored so the originals stay out of history either way.

### Making a Flat-Background Logo Transparent
- Client logos usually arrive as JPG on a flat background with no transparency. Do not use `sips` (no alpha keying).
- Python + Pillow/NumPy approach that works well for a two-colour logo: estimate the background from a known-flat interior region, pick the darkest sampled pixel as the foreground, then project every pixel onto the bg -> fg vector to get per-pixel alpha: `alpha = clip(dot(pixel-bg, fg-bg) / |fg-bg|^2, 0, 1)`. Output RGBA with the fg colour and that alpha for clean anti-aliased edges.
- Pitfall 1: sampling the corners can hit a white border/margin, giving a wrong background. Sample an interior region that is definitely background.
- Pitfall 2: stray anti-aliased/noisy pixels at the image edge inflate the crop bounding box to the full image. Use `cv2.connectedComponentsWithStats` and drop the component whose bbox spans >90% of the image (the border ring), then take the bbox of the remaining components.
- Generate a favicon from the monogram by compositing it onto a rounded lavender square at 512px and 180px.

### Extracting Staff Photos from Polaroid Shots
- This client supplies staff photos as pictures of polaroids lying on a table, shot at an angle (existing photos use lavender/teal/pink frames on a cream surface; the Sep 2026 batch uses white frames on a white surface).
- To match the existing site style, crop the raw photo to a centred square (3024x3024) rather than straightening - the Team grid uses `aspect-square` with `object-cover object-top`, and the existing cards are all raw polaroid shots.
- To locate the inner photo for a straightened version (if ever needed): Canny edge detect -> dilate/close -> `findContours` -> `approxPolyDP` to a 4-point polygon -> `getPerspectiveTransform` + `warpPerspective`. This extracted clean, straight inner photos for all four Sep 2026 images.
- The warp approach is reliable but breaks the polaroid aesthetic; only use it if the client asks for clean headshots.
- A grid overlay (lines every 10% + labels) rendered over a downscaled image is a fast way to eyeball corners if manual coordinates are needed.

### Wide Horizontal Logo in a Centred Navbar
- The new wordmark is ~7.2:1. A centred 40px wordmark is ~290px wide, which overflows a 375px mobile header once the hamburger and Book Now button are placed.
- Solution used: `hidden md:block` wordmark for desktop, `md:hidden` monogram for mobile (both absolutely centred), and the header "Book Now" is `hidden md:inline-block`. The mobile Book Now button was added to the hamburger overlay so the mobile header stays uncluttered.
- The old square logo (`images.jpeg`) had built-in padding, which is why a large `h-20 md:h-24` square fit. Tightly-cropped transparent PNGs have no such padding, so visual width equals the element width.

### Removing a Service Method or Brand
- When a service changes, grep both the service page copy AND the constants/FAQ arrays: `grep -rni "tape\|jadore" src/`.
- Hair Extensions now offers K-Tips and Wefts only (Invisible Tapes removed). The "The Hair" section was de-branded from "Jadore 100% Human Hair" to "100% Human Hair" and the Jadore references in its FAQs were genericised. Run the same grep after editing to confirm zero hits.

### Removing a Team Member
- Deleting the object from `TEAM_MEMBERS` in `src/constants/index.ts` is enough for the UI. Also remove any type-specific rendering tied to that member (Sally's `registrationNumber` block was removed from `Team.tsx` because no member has that key anymore and TypeScript would flag the property access).

### SPA Rewrite Masks Missing Assets (returns 200 for /img/*)
- Because of the `vercel.json` catch-all rewrite, a deleted image path does not 404 - it returns `index.html` with a 200. Do not use `curl -I` 200/404 to confirm an asset was removed.
- Instead, verify the JS bundle (see "Verifying a Deploy on This SPA") and check that the image files you DO reference return 200 with a sensible `size_download`, e.g. `curl -s -o /dev/null -w '%{http_code} %{size_download}B' https://barkhair.com.au/img/bark-hair-wordmark.png`.

## Contributing

This is a client project. For any changes or suggestions, please contact the project maintainers.

## License

All rights reserved. This project is proprietary and confidential.

---

Built with care for Bark Hair Salon | Acton, Canberra | LGBTQIA+ Inclusive | Sustainable Beauty
