// Canonical route list for the site.
//
// Kept in one place because three things must agree, and drift between them is
// silent: App.tsx renders these paths, Seo.tsx derives the canonical URL from
// the current pathname, and public/sitemap.xml must list exactly the same set.
// scripts/check-routes.mjs reconciles all three.

export const SITE_ORIGIN = 'https://barkhair.com.au';

export const SERVICE_SLUGS = [
  'haircuts',
  'blow-drys',
  'barbering',
  'hair-tattooing',
  'executive-shave',
  'colouring',
  'vivid-colour',
  'hair-botox',
  'nanoplasty',
  'perm',
  'hair-extensions',
  'hair-systems',
] as const;

export const ROUTE_PATHS: string[] = [
  '/',
  ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
];

// The site is a client-rendered SPA: Vercel serves the same index.html for every
// route, so a static <link rel="canonical"> would point all 13 routes at the
// homepage. Set it per route instead. Unknown paths (and trailing-slash
// variants) fall back to the homepage rather than declaring a canonical for a
// URL that does not exist.
export const canonicalUrl = (pathname: string): string => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return ROUTE_PATHS.includes(clean) ? `${SITE_ORIGIN}${clean}` : `${SITE_ORIGIN}/`;
};
