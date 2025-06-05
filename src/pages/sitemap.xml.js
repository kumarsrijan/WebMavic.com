const URL = "https://webmavic.com"; // Updated to your actual production domain

// Comprehensive list of all website routes with appropriate priorities
let urls = [
  // Main pages - highest priority
  { url: `${URL}/`, priority: 1.0 },
  { url: `${URL}/contact`, priority: 0.9 },
  { url: `${URL}/about`, priority: 0.9 },

  // Primary service pages - high priority
  { url: `${URL}/web-development`, priority: 0.8 },
  { url: `${URL}/web-design`, priority: 0.8 },
  { url: `${URL}/app-development`, priority: 0.8 },
  { url: `${URL}/seo`, priority: 0.8 },
  { url: `${URL}/graphic-design`, priority: 0.8 },
  { url: `${URL}/copywriting`, priority: 0.8 },

  // Team and FAQ pages - medium-high priority
  { url: `${URL}/team`, priority: 0.7 },
  { url: `${URL}/faq`, priority: 0.7 },
];

function generateSiteMap() {
  const date = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(({ url, priority }) => {
          return `
          <url>
            <loc>${url}</loc>
            <lastmod>${date}</lastmod>
            <priority>${priority}</priority>
          </url>
        `;
        })
        .join("")}
    </urlset>
  `;
}

export async function getServerSideProps({ req, res }) {
  // Generate the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // This component is not used, but Next.js requires a default export
  return null;
}
