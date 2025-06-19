
interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (baseUrl: string = 'https://codeboost.dev'): string => {
  const urls: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/tools`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about`,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/privacy`,
      changefreq: 'yearly',
      priority: 0.5
    },
    // Tool detail pages
    {
      loc: `${baseUrl}/tools/code-explainer/details`,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tools/ai-code-generator/details`,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tools/bug-fixer/details`,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tools/regex-generator/details`,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tools/code-translator/details`,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tools/pseudocode-generator/details`,
      changefreq: 'monthly',
      priority: 0.8
    },
    // Tool application pages
    {
      loc: `${baseUrl}/tools/code-explainer`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/tools/ai-code-generator`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/tools/bug-fixer`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/tools/regex-generator`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/tools/code-translator`,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/tools/pseudocode-generator`,
      changefreq: 'weekly',
      priority: 0.9
    }
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'monthly'}</changefreq>
    <priority>${url.priority || 0.5}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const downloadSitemap = () => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
