import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://splitry.com/',
    },
    {
      url: 'https://splitry.com/privacy-policy',
    },
    {
      url: 'https://splitry.com/terms',
    },
    {
      url: 'https://splitry.com/faq',
    },
  ];
}
