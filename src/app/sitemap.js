const URL = "https://webmavic.com"; 

const urls = [
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



export default function sitemap() {
    // return urls
  return urls.map((url) => ({
    url: url.url,
    lastModified: new Date().toISOString(),
    priority: url.priority,
    changeFrequency: url.priority >= 0.8 ? 'yearly' : 'monthly',
  }));
        
}
