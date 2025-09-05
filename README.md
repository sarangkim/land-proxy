# Land Info Proxy Server

This is a simple Node.js proxy server to relay requests to the Korean public data API
for building floor information (`건축물대장 API`), useful when calling from browser apps
like GitHub Pages, avoiding CORS issues.

## Deployment (Render.com)

1. Upload this project to GitHub.
2. Go to Render and create a "Web Service".
3. Set:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Add Environment Variable:
   - `SERVICE_KEY`: (Your decoding public API key)

Then access the server using:
```
https://your-app-name.onrender.com/api/building?sigunguCd=11500&bjdongCd=5700&bun=0572&ji=0010
```