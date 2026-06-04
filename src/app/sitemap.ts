import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: 'https://splitry.com/',
      lastModified: currentDate,
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: 'https://splitry.com/about',
      lastModified: currentDate,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://splitry.com/faq',
      lastModified: currentDate,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://splitry.com/contact',
      lastModified: currentDate,
      priority: 0.5,
      changeFrequency: 'monthly',
    },
    {
      url: 'https://splitry.com/privacy-policy',
      lastModified: currentDate,
      priority: 0.5,
      changeFrequency: 'yearly',
    },
    {
      url: 'https://splitry.com/terms',
      lastModified: currentDate,
      priority: 0.5,
      changeFrequency: 'yearly',
    },
  ];
}
