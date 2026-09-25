import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toAbsolute = (p) => path.resolve(__dirname, p);

const routesToPrerender = [
  '/',
  '/about',
  '/services',
  '/doctors',
  '/gallery',
  '/promos'
];

async function generateSSG() {
  console.log('🚀 Starting Static Site Generation (SSG) Pre-rendering...\n');

  const templatePath = toAbsolute('dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Make sure client build finishes first.');
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import('./dist/server/entry-server.js');

  for (const url of routesToPrerender) {
    const { html: appHtml } = render(url);

    // Extract hoisted head elements (<title>, <meta ...>, <link ...>, <script type="application/ld+json">)
    const titleMatch = appHtml.match(/<title>[\s\S]*?<\/title>/i);
    const metaMatches = appHtml.match(/<meta[^>]*>/gi) || [];
    const linkMatches = appHtml.match(/<link[^>]*>/gi) || [];
    const scriptMatches = appHtml.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi) || [];

    // Remove head elements from body appHtml so they don't stay inside <div id="root">
    let cleanBodyHtml = appHtml
      .replace(/<title>[\s\S]*?<\/title>/gi, '')
      .replace(/<meta[^>]*>/gi, '')
      .replace(/<link rel="canonical"[^>]*>/gi, '')
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

    let pageHtml = template;

    // Replace template title with route title
    if (titleMatch) {
      pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, titleMatch[0]);
    }

    // Replace template default description if route description is present
    if (metaMatches.some(m => m.includes('name="description"'))) {
      pageHtml = pageHtml.replace(/<meta name="description"[^>]*>/i, '');
    }

    // Inject dynamic meta, link, script tags before </head>
    const injectedHead = [
      ...metaMatches,
      ...linkMatches,
      ...scriptMatches
    ].join('\n    ');

    if (injectedHead) {
      pageHtml = pageHtml.replace('</head>', `    ${injectedHead}\n  </head>`);
    }

    // Inject rendered body html inside <div id="root"></div>
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${cleanBodyHtml}</div>`);

    // Determine output file path
    const filePath = url === '/' 
      ? 'dist/index.html' 
      : `dist${url}/index.html`;

    const dir = path.dirname(toAbsolute(filePath));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), pageHtml);
    console.log(`  ✓ Pre-rendered: ${url} -> ${filePath}`);
  }

  console.log('\n🎉 SSG Pre-rendering completed successfully!');
}

generateSSG().catch((err) => {
  console.error('❌ Error during SSG Pre-rendering:', err);
  process.exit(1);
});
