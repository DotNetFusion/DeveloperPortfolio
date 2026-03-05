# 🚀 Setup & Installation Guide

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (v11.x or higher) - Usually comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Angular CLI** (optional but recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/DotNetFusion/DeveloperPortfolio.git
cd DeveloperPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Angular framework and dependencies
- Angular router
- Reactive forms
- Build tools
- Testing frameworks

### 3. Verify Installation

```bash
npm -v        # Should be v11.11.0 or higher
node -v       # Should be v18.x or higher
ng version    # Should show Angular version 21.x.x
```

## 🏃 Running the Project Locally

### Development Server

Start the development server with hot module replacement:

```bash
npm start
```

Or using Angular CLI directly:

```bash
ng serve
```

Output:
```
✔ Compiled successfully.
  Application bundle generation complete.

Initial Chunk Files:
  bundle.css   XXX bytes
  bundle.js    XXXXX bytes

Application running on: http://localhost:4200/
```

**Access the application**: Open your browser and navigate to `http://localhost:4200/`

### Development with SSR (Server-Side Rendering)

To test the SSR build locally:

```bash
npm run build
npm run serve:ssr:DeveloperProfile
```

The SSR version will be available at `http://localhost:4000/`

## 📦 Building for Production

### Create Production Build

```bash
npm run build
```

This will:
- Compile TypeScript
- Bundle JavaScript
- Minify CSS
- Generate optimized assets
- Create the `dist/` directory

### Output Structure

```
dist/
├── DeveloperProfile/          # Browser build
│   ├── index.html
│   ├── styles.css
│   ├── main.js
│   └── ...
└── DeveloperProfile/server/   # SSR build
    ├── server.mjs
    └── ...
```

## ✅ Testing

### Run Unit Tests

```bash
npm test
```

This will:
- Run Vitest test suite
- Display coverage reports
- Watch for file changes

### Test a Specific Component

```bash
npm test -- src/app/components/hero/hero.component.spec.ts
```

## 🔧 Development Commands

### Generate a New Component

```bash
ng generate component components/my-component
```

This creates:
- `my-component.component.ts`
- `my-component.component.html`
- `my-component.component.scss`
- `my-component.component.spec.ts`

**Note**: The `angular.json` is configured to use SCSS by default.

### Generate a Service

```bash
ng generate service shared/services/my-service
```

### Format Code with Prettier

```bash
npx prettier --write src/
```

### Lint with ESLint (if configured)

```bash
ng lint
```

## 📝 Editing Content

### Update Developer Information

Edit `src/app/shared/services/portfolio.service.ts`:

```typescript
private developer: Developer = {
  name: 'Your Name',
  tagline: 'Your Tagline',
  summary: 'Your professional summary',
  email: 'your.email@example.com',
  phone: '+1 XXX XXX XXXX',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile/',
  profileImage: '/img/your-profile.jpg'
};
```

### Add/Edit Skills

Edit the `skills` array in `portfolio.service.ts`:

```typescript
{
  category: 'Frontend',
  skills: ['Angular', 'TypeScript', 'HTML', 'CSS/SCSS']
}
```

### Add/Edit Projects

Edit the `projects` array in `portfolio.service.ts`:

```typescript
{
  id: 1,
  title: 'Project Name',
  description: 'Project description',
  techStack: ['Tech1', 'Tech2"],
  github: 'https://github.com/...',
  liveUrl: 'https://project-url.com/'
}
```

### Add/Edit Experience

Edit the `experience` array in `portfolio.service.ts`:

```typescript
{
  id: 1,
  company: 'Company Name',
  position: 'Job Title',
  startDate: 'Jan 2024',
  endDate: 'Present',
  current: true,
  location: 'City, Country',
  responsibilities: [
    'Responsibility 1',
    'Responsibility 2'
  ]
}
```

### Add/Edit Certifications

Edit the `certifications` array in `portfolio.service.ts`:

```typescript
{
  id: 1,
  title: 'Certification Name',
  issuer: 'Issuer Name',
  date: 'Month Year'
}
```

### Change Profile Picture

1. Place your profile image in `src/img/`
2. Update `profileImage` path in `portfolio.service.ts`
3. Image formats: JPG, PNG, WebP (recommended)
4. Image size: ~300x300px recommended

## 🎨 Customizing Styles

### Global Style Variables

Edit `src/styles/variables.scss`:

```scss
// Change primary color
$color-primary: #00d4ff;

// Change background
$color-bg-primary: #0a0e27;

// Add new colors
$color-custom: #your-color;
```

### Component Styles

Each component has its own SCSS file. Edit the component's `.scss` file to customize its appearance.

Example: `src/app/components/hero/hero.component.scss`

## 🚨 Troubleshooting

### Port 4200 Already in Use

```bash
# Use a different port
ng serve --port 4201
```

### Module Not Found Error

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails with SCSS Error

Ensure SCSS is properly imported in `angular.json`:

```json
"styles": ["src/styles.scss"]
```

### Hot Module Replacement Not Working

Restart the dev server:

```bash
# Stop current server (Ctrl+C)
npm start
```

### Slow Build/Compilation

1. Close unnecessary applications
2. Clear Angular cache:
   ```bash
   ng cache clean
   ```
3. Use development configuration:
   ```bash
   ng serve --configuration development
   ```

## 📚 Useful Resources

- [Angular Documentation](https://angular.io)
- [Angular CLI Cheat Sheet](https://angular.io/cli)
- [SCSS Documentation](https://sass-lang.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Netlify Documentation](https://docs.netlify.com/)

## 🔐 Environment Variables

Create a `.env` file in the root directory (if needed for API calls):

```
# Contact Form API (example)
NG_APP_CONTACT_API_URL=https://your-api.com/contact
```

Access in code:

```typescript
const apiUrl = process.env['NG_APP_CONTACT_API_URL'];
```

## ✨ Next Steps

1. Customize the content with your information
2. Replace profile image
3. Test locally with `npm start`
4. Build production version with `npm run build`
5. Deploy to Netlify (see DEPLOYMENT_GUIDE.md)

## 📞 Support & Questions

For issues or questions:
- Create a GitHub issue
- Check existing documentation
- Review Angular official docs

---

**Happy coding! 🎉**
