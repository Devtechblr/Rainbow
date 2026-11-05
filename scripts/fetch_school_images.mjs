import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const OUT_DIR = path.resolve('public/images/school');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = `${u.origin}${redirectUrl.startsWith('/') ? '' : '/'}${redirectUrl}`;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(OUT_DIR, filename);
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 20000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = `${u.origin}${redirectUrl.startsWith('/') ? '' : '/'}${redirectUrl}`;
        }
        file.close();
        if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        return downloadImage(redirectUrl, filename).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const size = fs.statSync(filepath).size;
        console.log(`Saved: ${filename} (${size} bytes) from ${url}`);
        resolve({ filename, size, url });
      });
    });

    req.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      reject(err);
    });
    req.on('timeout', () => {
      req.destroy();
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      reject(new Error(`Timeout on ${url}`));
    });
  });
}

async function run() {
  const baseUrls = [
    'https://rainbowinnovativeacademy.com/',
    'https://rainbowinnovativeacademy.com/about-us/',
    'https://rainbowinnovativeacademy.com/gallery/',
    'https://rainbowinnovativeacademy.com/academics/',
    'https://rainbowinnovativeacademy.com/facilities/',
    'https://rainbowinnovativeacademy.com/contact-us/'
  ];

  const foundImages = new Set();
  const subpages = new Set(baseUrls);

  for (const pageUrl of baseUrls) {
    console.log(`Scanning: ${pageUrl}...`);
    try {
      const htmlBuf = await fetchUrl(pageUrl);
      const html = htmlBuf.toString('utf-8');

      // Find links to other subpages on rainbowinnovativeacademy.com
      const linkRegex = /href=["']([^"']+)["']/gi;
      let m;
      while ((m = linkRegex.exec(html)) !== null) {
        const link = m[1];
        if (link.includes('rainbowinnovativeacademy.com') || link.startsWith('/')) {
          let full = link.startsWith('http') ? link : `https://rainbowinnovativeacademy.com${link.startsWith('/') ? '' : '/'}${link}`;
          full = full.split('#')[0].split('?')[0];
          if (!full.match(/\.(jpg|jpeg|png|gif|svg|pdf|css|js|mp4)$/i)) {
            if (full.startsWith('https://rainbowinnovativeacademy.com')) {
              subpages.add(full);
            }
          }
        }
      }

      // Find image URLs
      const imgRegex = /(?:src|href|data-src)=["']([^"']+\.(?:png|jpe?g|webp|svg|gif)(?:\?[^"']*)?)["']/gi;
      while ((m = imgRegex.exec(html)) !== null) {
        const imgUrl = m[1];
        let fullImg = imgUrl.startsWith('http') ? imgUrl : `https://rainbowinnovativeacademy.com${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
        foundImages.add(fullImg);
      }
    } catch (e) {
      console.warn(`Error scanning ${pageUrl}: ${e.message}`);
    }
  }

  // Also scan any discovered subpages (up to 15 pages)
  const pageList = Array.from(subpages).slice(0, 15);
  for (const p of pageList) {
    if (baseUrls.includes(p)) continue;
    console.log(`Scanning discovered page: ${p}...`);
    try {
      const htmlBuf = await fetchUrl(p);
      const html = htmlBuf.toString('utf-8');
      const imgRegex = /(?:src|href|data-src)=["']([^"']+\.(?:png|jpe?g|webp|svg|gif)(?:\?[^"']*)?)["']/gi;
      let m;
      while ((m = imgRegex.exec(html)) !== null) {
        const imgUrl = m[1];
        let fullImg = imgUrl.startsWith('http') ? imgUrl : `https://rainbowinnovativeacademy.com${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
        foundImages.add(fullImg);
      }
    } catch (e) {
      console.warn(`Error scanning discovered page ${p}: ${e.message}`);
    }
  }

  console.log(`Found ${foundImages.size} total image URLs.`);
  fs.writeFileSync('scripts/found_images.json', JSON.stringify(Array.from(foundImages), null, 2));

  let downloadedCount = 0;
  let idx = 1;
  for (const imgUrl of foundImages) {
    // Filter out common external third-party icons (like wp-includes emoji) if any
    if (imgUrl.includes('s.w.org') || imgUrl.includes('gravatar.com')) continue;

    const u = new URL(imgUrl);
    let basename = path.basename(u.pathname);
    if (!basename || !basename.includes('.')) {
      basename = `school_img_${idx}.jpg`;
    }
    // Clean filename
    basename = basename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const filename = `${String(idx).padStart(2, '0')}_${basename}`;

    try {
      await downloadImage(imgUrl, filename);
      downloadedCount++;
      idx++;
    } catch (err) {
      console.warn(`Failed downloading ${imgUrl}: ${err.message}`);
    }
  }

  console.log(`Successfully downloaded ${downloadedCount} real school images.`);
}

run().catch(console.error);

