import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalUrl } from '../routes';

// Sets a self-referencing canonical per route.
//
// Why JavaScript rather than a tag in index.html: this is a client-rendered
// SPA, so one index.html serves all 13 routes. A static canonical would tell
// Google that every service page is a duplicate of the homepage, which is worse
// than having no canonical at all. Googlebot renders JavaScript and honours a
// canonical added this way; the routes are also listed in sitemap.xml, which
// states the same canonical set without needing JS.
//
// og:url is deliberately NOT set here. Social scrapers do not execute
// JavaScript, so a JS-set og:url would never be read, and a static one in
// index.html would mislabel every service page as the homepage. Leaving it out
// lets scrapers use the real URL.
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const href = canonicalUrl(pathname);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    if (link.href !== href) {
      link.href = href;
    }
  }, [pathname]);

  return null;
};

export default Seo;
