# 🚀 Deployment Guide - Netlify

This guide will walkthrough deploying your Angular Developer Portfolio to Netlify.

## Prerequisites

- GitHub account with your repository pushed
- Netlify account (free at https://netlify.com)
- Project built locally and tested

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Push to GitHub

Ensure your repository is pushed to GitHub:

```bash
git add .
git commit -m "Portfolio update"
git push origin main
```

### Step 2: Connect Netlify to GitHub

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select GitHub as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your **DeveloperPortfolio** repository

### Step 3: Configure Build Settings

Netlify will auto-detect your settings. Verify:

**Build settings:**
- **Build command**: `npm run build`
- **Publish directory**: `dist/DeveloperProfile/browser`
- **Node version**: 18.x or higher

```
Build Command: npm run build
Publish Directory: dist/DeveloperProfile/browser
Environment Variable - Node: 18.19.0
```

### Step 4: Deploy

1. Click **"Deploy site"**
2. Netlify will build and deploy automatically
3. Wait for the deployment to complete (1-2 minutes)
4. Your site URL will be generated: `https://<random-name>.netlify.app`

**Deployment is complete!** 🎉

---

## Option 2: Deploy with SSR (Server-Side Rendering)

For better SEO and performance with SSR:

### Step 1: Prepare SSR Build

The project already includes SSR configuration. Build locally:

```bash
npm run build
```

### Step 2: Create netlify.toml Configuration

The project includes `netlify.toml`. Verify it contains:

```toml
[build]
  command = "npm run build"
  publish = "dist/DeveloperProfile/browser"
  functions = "netlify/functions"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 3: Deploy to Netlify

Same as Option 1, but Netlify will:
- Build the project
- Generate SSR bundle
- Deploy to CDN

---

## Option 3: Deploy via CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Authenticate

```bash
netlify login
```

This will open a browser to authenticate your Netlify account.

### Step 3: Create Site (First Time Only)

```bash
netlify sites:create --name my-portfolio
```

### Step 4: Deploy

```bash
npm run build
netlify deploy --dir=dist/DeveloperProfile/browser --prod
```

The `--prod` flag deploys to production. Without it, it creates a preview deployment.

---

## Option 4: Manual Upload (Drag & Drop)

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Upload to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Create a new team site
3. Drag and drop the `dist/DeveloperProfile/browser/` folder
4. Netlify processes and deploys your site

---

## Post-Deployment Configuration

### Custom Domain

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `yourdomain.com`)
4. Update your domain's DNS records to point to Netlify
5. Netlify provides CNAME records to add

### SSL Certificate

1. Netlify automatically provides free SSL/TLS certificates
2. It's already enabled for your site
3. Access your site via HTTPS

### Environment Variables

If using environment variables:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add key-value pairs
3. Trigger a new deploy for changes to take effect

Example:
```
NG_APP_CONTACT_API_URL = https://your-api.com
```

### Build Hooks

To rebuild without pushing to Git:

1. Go to **Site settings** → **Build & deploy** → **Build hooks**
2. Create a new build hook
3. Use the URL to trigger rebuilds via webhook

### Continuous Deployment

Every push to your GitHub repository will:
1. Trigger a new Netlify build
2. Run tests (if configured)
3. Build the project
4. Deploy automatically

---

## Monitoring & Analytics

### Analytics

In Netlify dashboard:
1. Go to **Analytics** tab
2. View traffic, bandwidth, and performance metrics

### Error Tracking

Monitor deployment status:
1. Click your site in Netlify
2. Go to **Deploys** tab
3. View build logs and errors
4. Redeploy if needed

### Performance

To improve performance:
1. Enable **Gzip compression** (auto-enabled)
2. Use **CDN** (auto-enabled)
3. Optimize images in components
4. Use lazy loading

---

## Troubleshooting Deployment

### Build Fails

Check deployment logs:
1. Go to **Deploys** tab
2. Click the failed deploy
3. View **Deploy log**
4. Look for error messages

Common issues:
- Missing environment variables
- Node version mismatch
- Missing dependencies

**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
git push origin main
```

### Blank Page or 404

Ensure redirect is configured:

In `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Slow Performance

1. Optimize images
2. Enable compression
3. Use CDN (already enabled)
4. Minimize bundle size

Check metrics:
```bash
ng build --stats-json
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/DeveloperProfile/browser/stats.json
```

### Environment Variables Not Loading

1. Verify variables are set in Netlify dashboard
2. Trigger a new deploy
3. Check code uses correct variable names
4. Ensure build command includes environment

---

## Rollback to Previous Deploy

### Quick Rollback

1. Go to **Deploys** tab
2. Find the previous working deploy
3. Click the deploy
4. Click **"Publish deploy"**

The site will immediately serve the previous version.

---

## Advanced: Using Netlify Functions

For serverless functions (contact form backend):

### Step 1: Create Function

Create `netlify/functions/contact.js`:

```javascript
exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  
  // Process contact form data
  console.log('Contact received:', data);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Message received!' })
  };
};
```

### Step 2: Call from Angular

In contact component:

```typescript
onSubmit() {
  const payload = this.contactForm.value;
  fetch('/.netlify/functions/contact', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => console.log(data));
}
```

### Step 3: Deploy

Push to GitHub and Netlify will automatically deploy the functions.

---

## SSL/TLS Certificate

Your site automatically gets:
- Free SSL certificate from Let's Encrypt
- Auto-renewal before expiration
- HSTS enabled for security
- A+ SSL rating

Access your site via HTTPS:
```
https://yourdomain.com
```

---

## Monitoring Deployments

```bash
# Check deployment status
netlify status

# View recent deploys
netlify deploys:list

# Open site in browser
netlify open
```

---

## Performance Metrics

After deployment, monitor:

1. **Lighthouse Score** (SEO, Performance, Accessibility)
   - Use Chrome DevTools Lighthouse tab
   - Target score: 90+

2. **Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

3. **Load Time**
   - Target: < 3 seconds on 3G
   - Monitor via Netlify Analytics

---

## Custom Headers & Redirects

Modify `netlify.toml` to add:

### Headers

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

### Redirects

```toml
[[redirects]]
  from = "/resume"
  to = "/assets/resume.pdf"
  status = 301

[[redirects]]
  from = "/linkedin"
  to = "https://linkedin.com/in/yourprofile"
  status = 301
```

---

## Next Steps

1. ✅ Build and test locally
2. ✅ Push to GitHub
3. ✅ Connect Netlify
4. ✅ Configure domain
5. ✅ Monitor deployment
6. ✅ Share your portfolio!

---

## Helpful Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Angular Guide](https://docs.netlify.com/integrations/frameworks/angular/)
- [Netlify CLI Reference](https://cli.netlify.com/)
- [Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/)

---

**Your portfolio is now live! 🎉**

Share it with the world:
- LinkedIn
- GitHub
- Twitter
- Email to recruiters

Good luck! 🚀
