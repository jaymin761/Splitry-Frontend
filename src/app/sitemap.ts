import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://splitry.com/',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://splitry.com/privacy-policy',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://splitry.com/terms',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
