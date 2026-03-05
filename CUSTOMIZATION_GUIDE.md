# 🎨 Customization Guide

Learn how to customize the portfolio to match your personal brand and style.

## Table of Contents

1. [Content Customization](#content-customization)
2. [Style & Theme Customization](#style--theme-customization)
3. [Component Customization](#component-customization)
4. [Adding New Sections](#adding-new-sections)
5. [Performance Tuning](#performance-tuning)

---

## Content Customization

### Update Personal Information

Edit `src/app/shared/services/portfolio.service.ts`:

```typescript
private developer: Developer = {
  name: 'Your Full Name',
  tagline: 'Your Professional Tagline',
  summary: `Your professional summary here...`,
  email: 'your.email@example.com',
  phone: '+1 (XXX) XXX-XXXX',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile/',
  profileImage: '/img/your-profile.jpg'
};
```

### Update Data Arrays

#### Skills

```typescript
private skills: Skill[] = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java']
  },
  {
    category: 'Frontend',
    skills: ['Angular', 'React', 'Vue.js', 'HTML/CSS']
  },
  // Add more skills...
];
```

**Pro tip**: To customize skill icons, edit `getSkillIcon()` in `skills.component.ts`:

```typescript
getSkillIcon(skillName: string): string {
  const iconMap: { [key: string]: string } = {
    'Python': '🐍',
    'JavaScript': '⚡',
    'React': '⚛️',
    // Add your custom icons
  };
  return iconMap[skillName] || '✨';
}
```

#### Projects

```typescript
private projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief project description',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/project',
    liveUrl: 'https://project-demo.com/',
    image: '/img/projects/project-1.jpg'  // Optional
  },
  // Add more projects...
];
```

#### Experience

```typescript
private experience: Experience[] = [
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
      'Responsibility 2',
      'Responsibility 3'
    ]
  },
  // Add more experiences...
];
```

#### Certifications

```typescript
private certifications: Certification[] = [
  {
    id: 1,
    title: 'Certification Name',
    issuer: 'Issuer Name',
    date: 'Jan 2024'
  },
  // Add more certifications...
];
```

### Update Social Links

Edit `portfolio.service.ts` to add/remove social platforms in the service, then update components:

In `navbar.component.ts`:
```typescript
socialLinks = [
  { icon: 'github', url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile/', label: 'LinkedIn' },
  { icon: 'twitter', url: 'https://twitter.com/handled', label: 'Twitter' }
];
```

---

## Style & Theme Customization

### Color Theme

Edit `src/styles/variables.scss` to change the entire color scheme:

```scss
// Primary color (accent color)
$color-primary: #00d4ff;           // Cyan - change this
$color-primary-dark: #00a8cc;      // Darker cyan

// Secondary color (alternate accent)
$color-secondary: #ff006e;         // Hot pink - change this
$color-secondary-dark: #d60056;    // Darker hot pink

// Background colors
$color-bg-primary: #0a0e27;        // Dark blue background
$color-bg-secondary: #16213e;      // Navy background
$color-bg-tertiary: #1a2847;       // Light navy

// Text colors
$color-text-primary: #e4e4e7;      // Off white text
$color-text-secondary: #a1a1aa;    // Light gray text
$color-text-tertiary: #71717a;     // Medium gray text
```

**Example: Change to Purple Theme**

```scss
$color-primary: #9f7aea;           // Purple
$color-primary-dark: #7c3aed;      // Dark purple
$color-secondary: #ec4899;         // Pink
$color-secondary-dark: #be185d;    // Dark pink
```

### Light Theme

Create a light theme variant by modifying color variables:

```scss
// Light theme colors
$color-bg-primary: #ffffff;
$color-bg-secondary: #f5f5f5;
$color-text-primary: #1a1a1a;
$color-text-secondary: #666666;
$color-primary: #0066cc;
$color-secondary: #ff0066;
```

### Custom Fonts

Replace the default font in `src/styles/global.scss`:

```scss
// Before: Inter font
$font-family-primary: 'Inter', -apple-system, ...;

// After: Use your favorite font
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
$font-family-primary: 'Poppins', -apple-system, ...;
```

**Popular font combinations:**
- Poppins + Fira Code
- Playfair Display + Lato
- Merriweather + Source Code Pro
- Raleway + JetBrains Mono

### Spacing & Sizing

Adjust spacing scale in `variables.scss`:

```scss
// Current spacing (1rem base)
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;

// Make spacing tighter or looser
$spacing-md: 0.875rem;  // Tighter
$spacing-lg: 1.75rem;   // More spacious
```

### Border Radius

Change rounded corners globally:

```scss
// Current values
$radius-lg: 0.75rem;
$radius-xl: 1rem;

// Go flat (no border-radius)
$radius-lg: 0;
$radius-xl: 0;

// Go super rounded
$radius-lg: 2rem;
$radius-xl: 3rem;
```

### Animation Speed

Adjust animation timing in `variables.scss`:

```scss
// Current speeds
$transition-fast: 150ms ease-in-out;
$transition-base: 300ms ease-in-out;
$transition-slow: 500ms ease-in-out;

// Make animations faster
$transition-base: 150ms ease-in-out;
$transition-slow: 300ms ease-in-out;

// Make animations slower
$transition-base: 500ms ease-out;
$transition-slow: 800ms ease-out;
```

---

## Component Customization

### Hide Sections

Comment out unused sections in `app.html`:

```html
<app-navbar></app-navbar>
<main class="main-content">
  <app-hero></app-hero>
  <app-about></app-about>
  <app-skills></app-skills>
  <!-- <app-certifications></app-certifications> --> <!-- Hidden -->
  <app-github></app-github>
  <app-contact></app-contact>
</main>
<app-footer></app-footer>
```

### Customize Component Text

Each component has UI text that can be customized.

**Example: Hero Section**

Edit `src/app/components/hero/hero.component.html`:

```html
<!-- Change button text -->
<button class="btn btn-primary" (click)="scrollToProjects()">
  My Projects <!-- Changed from "View My Work" -->
  <span>↓</span>
</button>
```

### Component-Specific Styling

Each component has its own `.scss` file. Customize individual components:

`src/app/components/hero/hero.component.scss`:

```scss
.hero {
  min-height: 100vh;  // Change hero height
  padding-top: 80px;
  // Add custom styles
}
```

### Add/Remove Animations

In component SCSS files, add or remove animation classes:

```scss
// Disable animation
.hero-content {
  animation: none;  // Removes slideUp animation
}

// Add custom animation
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-content {
  animation: fadeInScale 0.5s ease-out;
}
```

---

## Adding New Sections

### Step 1: Create Component

```bash
ng generate component components/testimonials --skip-tests
```

### Step 2: Design Model/Data

Update `portfolio.service.ts`:

```typescript
export interface Testimonial {
  id: number;
  author: string;
  position: string;
  text: string;
  image: string;
}

private testimonials: Testimonial[] = [
  {
    id: 1,
    author: 'John Doe',
    position: 'CEO at Company',
    text: 'Great work on the project!',
    image: '/img/testimonials/john.jpg'
  }
];

getTestimonials = signal(this.testimonials);
```

### Step 3: Create Template

`testimonials.component.html`:

```html
<section id="testimonials" class="testimonials section">
  <div class="container">
    <h2 class="section-title">Testimonials</h2>

    <div class="testimonials-grid">
      <div *ngFor="let testimonial of testimonials()" class="testimonial-card">
        <p class="testimonial-text">"{{ testimonial.text }}"</p>
        <div class="testimonial-author">
          <div class="author-info">
            <h4>{{ testimonial.author }}</h4>
            <p>{{ testimonial.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Step 4: Add Styles

`testimonials.component.scss`:

```scss
@import '../../styles/variables.scss';

.testimonials {
  background: linear-gradient(135deg, rgba($color-primary, 0.05) 0%, rgba($color-secondary, 0.05) 100%);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-2xl;
}

.testimonial-card {
  background: $color-bg-secondary;
  border: 1px solid $color-border;
  border-radius: $radius-xl;
  padding: $spacing-2xl;
  @include smooth-transition(all);

  &:hover {
    border-color: $color-primary;
    box-shadow: $shadow-glow;
  }
}
```

### Step 5: Add to Main App

Update `app.html`:

```html
<app-projects></app-projects>
<app-testimonials></app-testimonials>  <!-- Added -->
<app-experience></app-experience>
```

Update `app.ts`:

```typescript
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  imports: [
    // ... other components
    TestimonialsComponent
  ]
})
```

---

## Performance Tuning

### Image Optimization

1. Use optimized images (WebP, compressed PNGs/JPGs)
2. Resize to appropriate dimensions (profile pic: ~300x300px)
3. Use `NgOptimizedImage` in components

```typescript
import { NgOptimizedImage } from '@angular/common';

// Already used in hero component
```

### Bundle Size Analysis

```bash
ng build --stats-json
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/DeveloperProfile/browser/stats.json
```

### Lazy Loading Routes (Future)

If adding routing:

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) }
];
```

### Code Splitting

Components are already standalone and small - good for tree-shaking!

### Minification

Already handled by Angular build (`npm run build`).

### CSS Optimization

- Unused CSS is automatically removed
- Consider PurgeCSS for additional cleanup
- Inline critical CSS for faster FCP

---

## Accessibility Improvements

### Add ARIA Labels

In components, add accessibility attributes:

```html
<!-- Before -->
<button class="nav-link">About</button>

<!-- After -->
<button class="nav-link" aria-label="Navigate to about section">About</button>
```

### Color Contrast

Ensure text has sufficient contrast:
- WCAG AA: 4.5:1 ratio for normal text
- WCAG AAA: 7:1 ratio for enhanced

Test with [Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Screen Reader Support

Update components with semantic HTML:

```html
<!-- Use semantic tags -->
<nav></nav>
<main></main>
<section></section>
<article></article>
<footer></footer>

<!-- Add meaningful alt text -->
<img alt="Shiva Kumar profile picture" src="..." />

<!-- Use proper heading hierarchy -->
<h1>Main title</h1>
<h2>Section title</h2>
<h3>Subsection title</h3>
```

---

## SEO Optimization

### Meta Tags

Update `index.html`:

```html
<meta name="description" content="Shiva Kumar - .NET Full Stack Developer specializing in Enterprise Applications">
<meta name="keywords" content="developer, angular, dotnet, web development">
<meta name="author" content="Shiva Kumar">

<!-- OpenGraph -->
<meta property="og:title" content="Shiva Kumar - Developer Portfolio">
<meta property="og:description" content="Full Stack Developer Portfolio">
<meta property="og:image" content="https://yourdomain.com/img/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### Structured Data

Add JSON-LD schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Shiva Kumar",
  "url": "https://yourdomain.com",
  "image": "https://yourdomain.com/img/shivaPic.jpeg",
  "jobTitle": ".NET Full Stack Developer",
  "sameAs": [
    "https://www.linkedin.com/in/shivasunke/",
    "https://github.com/DotNetFusion"
  ]
}
</script>
```

### Robots & Sitemap

Add `robots.txt` in `public/`:

```
User-agent: *
Allow: /
Disallow: /private/
```

---

## Dark Mode Toggle (Optional)

To add light/dark mode toggle:

### Step 1: Create Theme Service

`src/app/shared/services/theme.service.ts`:

```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  toggleTheme() {
    this.isDark.update(dark => !dark);
    document.documentElement.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
  }
}
```

### Step 2: Add CSS Variables

In `global.scss`:

```scss
:root[data-theme="light"] {
  --color-bg-primary: #ffffff;
  --color-text-primary: #000000;
}

:root[data-theme="dark"] {
  --color-bg-primary: #0a0e27;
  --color-text-primary: #e4e4e7;
}
```

### Step 3: Add Toggle Button

In `navbar.component.html`:

```html
<button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
  {{ theme.isDark() ? '☀️' : '🌙' }}
</button>
```

---

## Final Checklist

- [ ] All personal information updated
- [ ] Profile image replaced
- [ ] All links tested and working
- [ ] Colors and fonts customized
- [ ] All sections reviewed and customized
- [ ] Tested on mobile and desktop
- [ ] Performance checked
- [ ] Accessibility verified
- [ ] SEO optimized
- [ ] Ready for deployment!

---

**Need help?** Check the main README.md and other documentation files!

Happy customizing! 🎨✨
