#!/usr/bin/env node
// Reconciles the three places that list this site's routes, so they cannot
// drift silently:
//   1. src/routes.ts          - the canonical list (ROUTE_PATHS)
//   2. src/App.tsx            - what the router actually renders
//   3. public/sitemap.xml     - what we submit to search engines
// Also parses the JSON-LD in index.html and checks the offer catalog points at
// routes that exist.
//
//   node scripts/check-routes.mjs

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.log(`  FAIL  ${msg}`);
};
const pass = (msg) => console.log(`  ok    ${msg}`);

// 1. routes.ts -> ROUTE_PATHS
const routesSrc = read('src/routes.ts');
const slugs = [...routesSrc.matchAll(/^\s*'([a-z0-9-]+)',$/gm)].map((m) => m[1]);
const routePaths = ['/', ...slugs.map((s) => `/services/${s}`)];
console.log(`routes.ts: ${routePaths.length} routes`);

// 2. App.tsx -> rendered paths
const appPaths = [...read('src/App.tsx').matchAll(/<Route path="([^"]+)"/g)].map((m) => m[1]);
console.log(`App.tsx:   ${appPaths.length} routes`);

// 3. sitemap.xml -> submitted paths
const sitemap = read('public/sitemap.xml');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapPaths = locs.map((l) => l.replace('https://barkhair.com.au', '') || '/');
console.log(`sitemap:   ${sitemapPaths.length} urls\n`);

const show = (label, list) => (list.length ? `  FAIL  ${label}: ${list.join(', ')}` : null);

for (const [a, b, aName, bName] of [
  [routePaths, appPaths, 'routes.ts', 'App.tsx'],
  [routePaths, sitemapPaths, 'routes.ts', 'sitemap.xml'],
]) {
  const missing = a.filter((p) => !b.includes(p));
  const extra = b.filter((p) => !a.includes(p));
  if (missing.length || extra.length) {
    fail(`${aName} vs ${bName}: missing from ${bName} [${missing.join(', ') || '-'}] extra in ${bName} [${extra.join(', ') || '-'}]`);
  } else {
    pass(`${aName} and ${bName} agree (${a.length} routes)`);
  }
}

// canonical host consistency
if (locs.some((l) => !l.startsWith('https://barkhair.com.au/'))) {
  fail('sitemap has a loc outside the https://barkhair.com.au canonical host');
} else {
  pass('sitemap uses the canonical host throughout');
}
const robots = read('public/robots.txt');
if (!robots.includes('Sitemap: https://barkhair.com.au/sitemap.xml')) {
  fail('robots.txt does not point at the canonical sitemap URL');
} else {
  pass('robots.txt points at the canonical sitemap URL');
}

// index.html JSON-LD
const html = read('index.html');
const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
if (!blocks.length) fail('index.html has no JSON-LD block');
for (const [i, b] of blocks.entries()) {
  let data;
  try {
    data = JSON.parse(b[1]);
  } catch (e) {
    fail(`JSON-LD block ${i + 1} does not parse: ${e.message}`);
    continue;
  }
  pass(`JSON-LD block ${i + 1} parses (${Array.isArray(data) ? data.length + ' nodes' : data['@type']})`);
  const offers = data.hasOfferCatalog?.itemListElement ?? [];
  const badUrls = offers
    .map((o) => o.itemOffered?.url?.replace('https://barkhair.com.au', ''))
    .filter((u) => u && !routePaths.includes(u));
  if (badUrls.length) fail(`JSON-LD offer catalog points at non-routes: ${badUrls.join(', ')}`);
  else if (offers.length) pass(`JSON-LD offer catalog: ${offers.length} services, all matching real routes`);
}
// one <link rel="canonical"> is per-route (Seo.tsx) - a static one would be wrong
if (/rel="canonical"/.test(html)) {
  fail('index.html has a static canonical - an SPA serves this file for every route, so it would point all routes at one URL');
} else {
  pass('no static canonical in index.html (set per route by src/components/Seo.tsx)');
}

console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
process.exit(failures ? 1 : 0);
