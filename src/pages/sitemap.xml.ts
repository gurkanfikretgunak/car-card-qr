// Enhanced sitemap.xml for better SEO
const baseUrl = 'https://carcardqr.web.app'; // Update with your actual domain
const currentDate = new Date().toISOString().split('T')[0];

// Define all pages with their metadata
const pages = [
  {
    path: '/',
    pathEn: '/en/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/splash',
    pathEn: '/en/splash',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    path: '/main',
    pathEn: '/en/main',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    path: '/qr-generator',
    pathEn: '/en/qr-generator',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  }
];

// Generate sitemap XML
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Add each page with both Turkish and English versions
  pages.forEach(page => {
    // Turkish version
    sitemap += `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${baseUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.pathEn}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.path}" />`;
    
    // Add image if it's the main page
    if (page.path === '/' || page.path === '/splash') {
      sitemap += `
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>Araç Kart - QR Kod İletişim Sistemi</image:title>
      <image:caption>Park halindeki araçlar için QR kod iletişim sistemi</image:caption>
    </image:image>`;
    }
    
    sitemap += `
  </url>`;

    // English version
    sitemap += `
  <url>
    <loc>${baseUrl}${page.pathEn}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="tr" href="${baseUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.pathEn}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.path}" />`;
    
    // Add image if it's the main page
    if (page.pathEn === '/en/' || page.pathEn === '/en/splash') {
      sitemap += `
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>Car Card - QR Code Communication System</image:title>
      <image:caption>QR code communication system for parked vehicles</image:caption>
    </image:image>`;
    }
    
    sitemap += `
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

export async function GET() {
  const sitemap = generateSitemap();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
