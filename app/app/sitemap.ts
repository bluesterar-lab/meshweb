import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://screenmesh.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // 如果未来有产品详情页，可以在此数组中继续添加
  ]
}
