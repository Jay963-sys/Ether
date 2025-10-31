import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://myethawallet.com';
  const now = new Date();

  const routes = [
    '/',
    '/home',
    '/how-it-works',
    '/buy',
    '/staking',
    '/wallet',
    '/connect',
    '/connect/mnemonic',
    '/connect/private-key',
    '/connect/keystore',
  ];

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.6,
  }));
}


