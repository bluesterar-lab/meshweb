import type { Metadata } from 'next'
import './globals.css'

// 1. 核心 SEO 与 Geo 优化元数据
export const metadata: Metadata = {
  title: 'Mining Screen Mesh Expert | HWZ Industrial Technology',
  description: 'Leading provider of advanced mining screens, anti-clogging screens, dewatering screens, and industrial machinery. Exporting premium mesh solutions to Australia and worldwide.',
  keywords: ['mining screen mesh', 'polyurethane screen', 'woven wire mesh', 'anti-clogging screen', 'vibrating screen', 'mining machinery', 'Australia screen mesh supplier', 'HWZ Industrial Technology', 'Biditech'],
  authors: [{ name: 'HWZ Industrial Technology' }],
  creator: 'HWZ Industrial Technology',
  metadataBase: new URL('https://screenmesh.org'),
  openGraph: {
    type: 'website',
    locale: 'en_AU', // Geo优化：明确指向澳大利亚英语市场
    url: '/',
    title: 'Premium Mining Screen Mesh & Machinery | HWZ',
    description: 'Leading manufacturer of industrial mining screens and washing machinery. Serving Australia, Southeast Asia, and Africa with robotic-welded premium screens.',
    siteName: 'HWZ Industrial Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mining Screen Mesh Expert | HWZ',
    description: 'Premium robotic-welded mining screens for the Australian market.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // 2. 注入 JSON-LD 结构化数据 (AI 抓取的最爱)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "HWZ Industrial Technology",
    "alternateName": "Biditech Mining Screen Expert",
    "url": "https://screenmesh.org",
    "logo": "https://screenmesh.org/images/logo.jpg",
    "description": "Leading provider of advanced mining screens, industrial machinery, and automation solutions, serving the Australian mining and construction sectors.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Minhang",
      "addressRegion": "Shanghai",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-21-54385286",
      "contactType": "customer service",
      "email": "contact@biditech.cn",
      "areaServed": ["AU", "SEA", "AF"], // 明确服务区域
      "availableLanguage": ["English", "Chinese"]
    },
    // Geo 优化：告诉 AI 你的目标出口市场
    "areaServed": [
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "South Africa" },
      { "@type": "Region", "name": "Southeast Asia" }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Anti-Clogging Screen",
          "description": "Automated robotic welded anti-clogging screens for mining."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Geo 位置标签：提升本地及 B2B 国际搜索权重 */}
        <meta name="geo.region" content="CN-31" />
        <meta name="geo.placename" content="Shanghai" />
        
        {/* 渲染结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
