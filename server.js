// Local dev server — serves static files + API routes
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [key, ...val] = line.split('=');
    if (key && val.length) process.env[key.trim()] = val.join('=').trim();
  });
}

const PORT = process.env.PORT || 4000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.wav': 'audio/wav',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  // CORS preflight — must be before API routing
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  // API routes
  if (req.url.startsWith('/api/')) {
    // Collect body chunks as Buffer (handles large audio payloads)
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', async () => {
      const rawBody = Buffer.concat(chunks).toString('utf8');
      try {
        req.body = JSON.parse(rawBody || '{}');
      } catch {
        req.body = {};
      }

      const apiRes = {
        statusCode: 200,
        _headers: {},
        _sent: false,
        status(code) { this.statusCode = code; return this; },
        json(data) {
          if (this._sent) return;
          this._sent = true;
          res.writeHead(this.statusCode, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            ...this._headers
          });
          res.end(JSON.stringify(data));
        },
        setHeader(k, v) { this._headers[k] = v; }
      };

      const route = req.url.replace('/api/', '').split('?')[0];
      try {
        // Clear require cache so edits are picked up
        const modulePath = require.resolve(`./api/${route}.js`);
        delete require.cache[modulePath];

        const handler = require(`./api/${route}.js`);
        await handler(req, apiRes);
      } catch (err) {
        console.error(`[API /${route}] ERROR:`, err.message || err);
        if (!apiRes._sent) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: err.message }));
        }
      }
    });
    return;
  }

  // Static files
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

// Allow large request bodies (10MB for audio)
server.maxHeadersCount = 0;

server.listen(PORT, () => {
  console.log(`\n🍔 McDonald's Voice Order — Dev Server`);
  console.log(`   http://localhost:${PORT}\n`);
  console.log(`   API Key: ${process.env.SARVAM_API_KEY ? '✅ loaded' : '❌ missing'}`);
  console.log(`   Kitchen: http://localhost:${PORT}/kitchen.html\n`);
});
