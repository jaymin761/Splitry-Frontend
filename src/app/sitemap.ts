import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://splitry.com/',
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: 'https://splitry.com/about',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://splitry.com/faq',
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://splitry.com/contact',
      priority: 0.5,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://splitry.com/privacy-policy',
      priority: 0.5,
      changeFrequency: 'yearly',
    },
    {
      url: 'https://splitry.com/terms',
      priority: 0.5,
      changeFrequency: 'yearly',
    },
  ];
}
