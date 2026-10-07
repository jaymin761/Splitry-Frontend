import { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

// Update these when a page's content meaningfully changes (not on every build),
// so search engines can trust lastModified.
const pages: { path: string; lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', lastModified: '2026-10-07', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', lastModified: '2026-10-07', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq', lastModified: '2026-10-07', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', lastModified: '2026-10-07', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy-policy', lastModified: '2026-10-05', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/terms', lastModified: '2026-10-05', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, priority, changeFrequency }) => ({
    url: path === '/' ? `${absoluteUrl('/')}/` : absoluteUrl(path),
    lastModified: new Date(lastModified),
    priority,
    changeFrequency,
  }));
}
