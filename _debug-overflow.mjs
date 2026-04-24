// Quick script to find which DOM elements overflow the mobile viewport
import puppeteer from 'puppeteer';

const PHONE_WIDTH = 393; // iPhone 16 Pro CSS width

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: PHONE_WIDTH, height: 852, deviceScaleFactor: 3 });

  // Load the built file directly
  await page.goto(`file://${process.cwd()}/_site/en/index.html`, { waitUntil: 'domcontentloaded' });

  // Find all elements wider than the viewport
  const overflows = await page.evaluate((vw) => {
    const results = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width > vw) {
        const tag = el.tagName.toLowerCase();
        const cls = el.className ? `.${el.className.toString().split(' ').join('.')}` : '';
        const id = el.id ? `#${el.id}` : '';
        results.push({
          selector: `${tag}${id}${cls}`,
          width: Math.round(rect.width),
          scrollWidth: el.scrollWidth,
          offsetLeft: Math.round(rect.left),
        });
      }
    });
    return results;
  }, PHONE_WIDTH);

  // Also check document and body
  const docInfo = await page.evaluate(() => ({
    htmlScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    htmlClientWidth: document.documentElement.clientWidth,
    bodyClientWidth: document.body.clientWidth,
  }));

  console.log('\n=== Document dimensions ===');
  console.log(JSON.stringify(docInfo, null, 2));

  console.log(`\n=== Elements wider than ${PHONE_WIDTH}px ===`);
  if (overflows.length === 0) {
    console.log('None found!');
  } else {
    overflows.forEach(o => {
      console.log(`  ${o.selector}  →  width: ${o.width}px, scrollWidth: ${o.scrollWidth}px, left: ${o.offsetLeft}px`);
    });
  }

  await browser.close();
})();

