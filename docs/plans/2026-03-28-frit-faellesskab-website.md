# Frit Fællesskab Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static Astro website for the Danish political party Frit Fællesskab with homepage, party program overview + chapter pages, and contact page.

**Architecture:** Static Astro site (SSG) with no JS framework. Party program content stored in a TypeScript data file, pages generated via `getStaticPaths()`. Global CSS using custom properties following the brand guide. Hero section with background image and dark overlay (70-80vh). Placeholder forms for membership signup and newsletter.

**Tech Stack:** Astro 5, TypeScript, CSS custom properties, Google Fonts (Cormorant + Jost)

---

## Brand Guide Reference (from visuel-identitet.jsx)

**Colors:**
- Fællesskab Rød: `#B22234`
- Frihed Blå: `#2C5282`
- Natur Grøn: `#2D6A4F`
- Tekst Sort: `#1A1A1A`
- Brødtekst: `#444444`
- Sekundær Tekst: `#555555`
- Skillelinje: `#E8E6E1`
- Baggrund Alt: `#F3F1EC`
- Baggrund: `#FAFAF7`

**Fonts:**
- Primary: Cormorant (serif) - headings, body text (weight 300/400/600)
- Secondary: Jost (sans-serif) - nav, labels, buttons (weight 400/500/600/700)

**Logo:** Three vertical bars (red/blue/green) + "FRIT FÆLLESSKAB" in Jost 700 uppercase

---

## File Structure

```
frit-faellesskab/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero.jpg          ← User adds this manually
│   ├── data/
│   │   └── partiprogram.ts
│   ├── styles/
│   │   └── global.css
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ValueCard.astro
│   │   ├── ProgramCard.astro
│   │   └── SignupForm.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── kontakt.astro
│       └── partiprogram/
│           ├── index.astro
│           └── [...slug].astro
└── docs/
    └── plans/
```

---

### Task 1: Scaffold Astro project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`

**Step 1: Initialize Astro project**

Run:
```bash
cd "C:/Users/askeu/Desktop/Frit Fællesskab"
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict
```

If the directory is not empty, accept overwrite for config files only. Do NOT overwrite docs/.

**Step 2: Install dependencies**

Run:
```bash
npm install
```

Expected: Astro and dependencies installed.

**Step 3: Verify it runs**

Run:
```bash
npm run dev
```

Expected: Dev server starts at localhost:4321.

**Step 4: Commit**

```bash
git init
git add package.json astro.config.mjs tsconfig.json src/ public/ .gitignore
git commit -m "chore: scaffold Astro project"
```

---

### Task 2: Global styles and CSS custom properties

**Files:**
- Create: `src/styles/global.css`

**Step 1: Create global.css with all brand variables and base styles**

```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Jost:wght@300;400;500;600;700&display=swap');

/* Brand tokens */
:root {
  /* Primary */
  --color-red: #B22234;
  --color-blue: #2C5282;
  --color-green: #2D6A4F;

  /* Neutral */
  --color-dark: #1A1A1A;
  --color-text: #444444;
  --color-muted: #555555;
  --color-border: #E8E6E1;
  --color-bg-alt: #F3F1EC;
  --color-bg: #FAFAF7;

  /* Fonts */
  --font-serif: 'Cormorant', Georgia, serif;
  --font-sans: 'Jost', sans-serif;

  /* Spacing */
  --container-max: 860px;
  --container-wide: 1100px;
  --container-pad: 32px;
}

/* Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-serif);
  color: var(--color-dark);
  background: var(--color-bg);
  line-height: 1.75;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--color-blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Utility */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.container--wide {
  max-width: var(--container-wide);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

/* Section label (chapter number) */
.section-label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: 12px;
}

/* Section title */
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 36px);
  font-weight: 300;
  color: var(--color-dark);
  line-height: 1.3;
  margin-bottom: 24px;
}

/* Body text */
.body-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-text);
  font-weight: 300;
}

/* Divider: three colored bars */
.divider-tri {
  display: flex;
  gap: 3px;
  margin: 32px 0;
}

.divider-tri span {
  width: 40px;
  height: 2px;
}

.divider-tri span:nth-child(1) { background: var(--color-red); }
.divider-tri span:nth-child(2) { background: var(--color-blue); }
.divider-tri span:nth-child(3) { background: var(--color-green); }

/* Button base */
.btn {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 32px;
  border: 2px solid;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn--primary {
  border-color: var(--color-red);
  color: var(--color-red);
  background: transparent;
}

.btn--primary:hover {
  background: var(--color-red);
  color: #fff;
  text-decoration: none;
}

.btn--primary-filled {
  border-color: var(--color-red);
  color: #fff;
  background: var(--color-red);
}

.btn--primary-filled:hover {
  background: #8a1a28;
  border-color: #8a1a28;
  text-decoration: none;
}

.btn--secondary {
  border-color: var(--color-green);
  color: var(--color-green);
  background: transparent;
}

.btn--secondary:hover {
  background: var(--color-green);
  color: #fff;
  text-decoration: none;
}
```

**Step 2: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add global styles with brand tokens"
```

---

### Task 3: Layout component

**Files:**
- Create: `src/layouts/Layout.astro`

**Step 1: Create Layout.astro**

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Frit Fællesskab — Frihed. Tryghed. Fællesskab.' } = Astro.props;
---

<!doctype html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title} | Frit Fællesskab</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  @import '../styles/global.css';
</style>
```

**Step 2: Create favicon.svg (the three-bar logo icon)**

Create `public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect x="6" y="4" width="5" height="24" fill="#B22234"/>
  <rect x="13.5" y="4" width="5" height="24" fill="#2C5282"/>
  <rect x="21" y="4" width="5" height="24" fill="#2D6A4F"/>
</svg>
```

**Step 3: Commit**

```bash
git add src/layouts/Layout.astro public/favicon.svg
git commit -m "feat: add Layout component and favicon"
```

---

### Task 4: Header component

**Files:**
- Create: `src/components/Header.astro`

**Step 1: Create Header.astro with responsive nav**

```astro
---
const pathname = Astro.url.pathname;

const navItems = [
  { href: '/', label: 'Forside' },
  { href: '/partiprogram', label: 'Partiprogram' },
  { href: '/kontakt', label: 'Kontakt' },
];
---

<header class="header">
  <div class="header__inner container--wide">
    <a href="/" class="header__logo" aria-label="Frit Fællesskab forside">
      <div class="header__logo-bars">
        <span></span><span></span><span></span>
      </div>
      <span class="header__logo-text">FRIT FÆLLESSKAB</span>
    </a>

    <button class="header__toggle" aria-label="Åbn menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <nav class="header__nav" aria-label="Hovednavigation">
      {navItems.map(item => (
        <a
          href={item.href}
          class:list={['header__link', { active: pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) }]}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
</header>

<script>
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav?.classList.toggle('open');
  });
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(250, 250, 247, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-border);
  }

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }

  .header__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .header__logo-bars {
    display: flex;
    gap: 3px;
  }

  .header__logo-bars span {
    width: 4px;
    height: 22px;
  }

  .header__logo-bars span:nth-child(1) { background: var(--color-red); }
  .header__logo-bars span:nth-child(2) { background: var(--color-blue); }
  .header__logo-bars span:nth-child(3) { background: var(--color-green); }

  .header__logo-text {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.04em;
    color: var(--color-dark);
  }

  .header__nav {
    display: flex;
    gap: 32px;
  }

  .header__link {
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 500;
    color: var(--color-muted);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color 0.2s;
  }

  .header__link:hover,
  .header__link.active {
    color: var(--color-dark);
    text-decoration: none;
  }

  .header__toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .header__toggle span {
    width: 20px;
    height: 2px;
    background: var(--color-dark);
    transition: transform 0.2s;
  }

  @media (max-width: 640px) {
    .header__toggle { display: flex; }

    .header__nav {
      display: none;
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
      flex-direction: column;
      padding: 24px var(--container-pad);
      gap: 20px;
    }

    .header__nav.open { display: flex; }
  }
</style>
```

**Step 2: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add responsive Header component"
```

---

### Task 5: Footer component

**Files:**
- Create: `src/components/Footer.astro`

**Step 1: Create Footer.astro**

```astro
---
const year = new Date().getFullYear();
---

<footer class="footer">
  <div class="footer__inner container--wide">
    <div class="footer__brand">
      <div class="footer__logo">
        <div class="footer__logo-bars">
          <span></span><span></span><span></span>
        </div>
        <span class="footer__logo-text">FRIT FÆLLESSKAB</span>
      </div>
      <p class="footer__slogan">Frihed. Tryghed. Fællesskab.</p>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      <a href="/partiprogram">Partiprogram</a>
      <a href="/kontakt">Kontakt</a>
    </nav>

    <p class="footer__copy">&copy; {year} Frit Fællesskab</p>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-dark);
    padding: 48px 0;
    margin-top: 80px;
  }

  .footer__inner {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    text-align: center;
  }

  .footer__logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer__logo-bars {
    display: flex;
    gap: 3px;
  }

  .footer__logo-bars span {
    width: 3px;
    height: 18px;
  }

  .footer__logo-bars span:nth-child(1) { background: var(--color-red); }
  .footer__logo-bars span:nth-child(2) { background: var(--color-blue); }
  .footer__logo-bars span:nth-child(3) { background: var(--color-green); }

  .footer__logo-text {
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 13px;
    color: var(--color-bg);
    letter-spacing: 0.04em;
  }

  .footer__slogan {
    font-family: var(--font-serif);
    font-size: 14px;
    font-weight: 300;
    font-style: italic;
    color: var(--color-bg);
    opacity: 0.6;
    margin-top: 8px;
  }

  .footer__nav {
    display: flex;
    gap: 24px;
  }

  .footer__nav a {
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 400;
    color: var(--color-bg);
    opacity: 0.5;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .footer__nav a:hover {
    opacity: 1;
    text-decoration: none;
  }

  .footer__copy {
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--color-bg);
    opacity: 0.35;
  }
</style>
```

**Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: add Footer component"
```

---

### Task 6: Hero component

**Files:**
- Create: `src/components/Hero.astro`

**Step 1: Create Hero.astro with background image and overlay**

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<section class="hero">
  <Image
    src={heroImage}
    alt=""
    class="hero__image"
    widths={[640, 960, 1280, 1920]}
    sizes="100vw"
    loading="eager"
  />
  <div class="hero__overlay"></div>
  <div class="hero__content container">
    <div class="hero__bars">
      <span></span><span></span><span></span>
    </div>
    <h1 class="hero__title">Frihed. Tryghed.<br />Fællesskab.</h1>
    <p class="hero__subtitle">
      Et parti der forener personlig frihed og social tryghed med forpligtelsen over for dansk kultur, dansk natur og det fællesskab, der binder os sammen.
    </p>
    <div class="hero__actions">
      <a href="/partiprogram" class="btn btn--primary" style="border-color:#fff;color:#fff;">Læs partiprogrammet</a>
      <a href="#bliv-medlem" class="btn btn--primary-filled">Bliv medlem</a>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 75vh;
    min-height: 500px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .hero__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 26, 0.55) 0%,
      rgba(26, 26, 26, 0.7) 100%
    );
  }

  .hero__content {
    position: relative;
    z-index: 1;
    padding-top: 64px;
  }

  .hero__bars {
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
  }

  .hero__bars span {
    width: 32px;
    height: 3px;
  }

  .hero__bars span:nth-child(1) { background: var(--color-red); }
  .hero__bars span:nth-child(2) { background: var(--color-blue); }
  .hero__bars span:nth-child(3) { background: var(--color-green); }

  .hero__title {
    font-family: var(--font-serif);
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 300;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .hero__subtitle {
    font-family: var(--font-serif);
    font-size: clamp(16px, 2vw, 20px);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    max-width: 520px;
    line-height: 1.6;
    margin-bottom: 36px;
  }

  .hero__actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    .hero { height: 85vh; }
    .hero__actions { flex-direction: column; }
    .hero__actions .btn { text-align: center; }
  }
</style>
```

Note: This component expects `src/assets/hero.jpg` to exist. The user must add their image there before building.

**Step 2: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero component with background image"
```

---

### Task 7: ValueCard and SignupForm components

**Files:**
- Create: `src/components/ValueCard.astro`
- Create: `src/components/SignupForm.astro`

**Step 1: Create ValueCard.astro for the three core values section**

```astro
---
interface Props {
  color: 'red' | 'blue' | 'green';
  title: string;
  description: string;
}

const { color, title, description } = Astro.props;

const colorMap = {
  red: 'var(--color-red)',
  blue: 'var(--color-blue)',
  green: 'var(--color-green)',
};
---

<div class="value-card">
  <div class="value-card__bar" style={`background: ${colorMap[color]}`}></div>
  <h3 class="value-card__title">{title}</h3>
  <p class="value-card__desc">{description}</p>
</div>

<style>
  .value-card {
    flex: 1;
    min-width: 240px;
  }

  .value-card__bar {
    width: 32px;
    height: 3px;
    margin-bottom: 20px;
  }

  .value-card__title {
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 10px;
  }

  .value-card__desc {
    font-family: var(--font-serif);
    font-size: 15px;
    line-height: 1.75;
    color: var(--color-text);
    font-weight: 300;
  }
</style>
```

**Step 2: Create SignupForm.astro (placeholder)**

```astro
---
interface Props {
  variant: 'medlem' | 'nyhedsbrev';
}

const { variant } = Astro.props;
const isMedlem = variant === 'medlem';
---

<form class="signup-form" onsubmit="event.preventDefault(); alert('Tak for din interesse! Formularen er endnu ikke aktiv.');">
  <h3 class="signup-form__title">
    {isMedlem ? 'Bliv medlem' : 'Nyhedsbrev'}
  </h3>
  <p class="signup-form__desc">
    {isMedlem
      ? 'Tilmeld dig som medlem af Frit Fællesskab og vær med til at forme fremtidens Danmark.'
      : 'Modtag nyheder og opdateringer fra Frit Fællesskab direkte i din indbakke.'}
  </p>
  <div class="signup-form__fields">
    {isMedlem && (
      <input type="text" placeholder="Fulde navn" class="signup-form__input" required />
    )}
    <input type="email" placeholder="E-mailadresse" class="signup-form__input" required />
    <button type="submit" class:list={['btn', isMedlem ? 'btn--primary-filled' : 'btn--secondary']}>
      {isMedlem ? 'Bliv medlem' : 'Tilmeld'}
    </button>
  </div>
</form>

<style>
  .signup-form {
    padding: 40px;
    background: var(--color-bg-alt);
    border-radius: 4px;
  }

  .signup-form__title {
    font-family: var(--font-serif);
    font-size: 24px;
    font-weight: 300;
    color: var(--color-dark);
    margin-bottom: 12px;
  }

  .signup-form__desc {
    font-family: var(--font-serif);
    font-size: 15px;
    color: var(--color-text);
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 24px;
    max-width: 480px;
  }

  .signup-form__fields {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .signup-form__input {
    font-family: var(--font-sans);
    font-size: 14px;
    padding: 12px 16px;
    border: 1px solid var(--color-border);
    background: #fff;
    color: var(--color-dark);
    flex: 1;
    min-width: 200px;
  }

  .signup-form__input:focus {
    outline: 2px solid var(--color-blue);
    outline-offset: -1px;
    border-color: transparent;
  }

  @media (max-width: 640px) {
    .signup-form { padding: 24px; }
    .signup-form__fields { flex-direction: column; }
    .signup-form__input { min-width: 100%; }
  }
</style>
```

**Step 3: Commit**

```bash
git add src/components/ValueCard.astro src/components/SignupForm.astro
git commit -m "feat: add ValueCard and SignupForm components"
```

---

### Task 8: ProgramCard component

**Files:**
- Create: `src/components/ProgramCard.astro`

**Step 1: Create ProgramCard.astro**

```astro
---
interface Props {
  number: string;
  title: string;
  summary: string;
  slug: string;
}

const { number, title, summary, slug } = Astro.props;
---

<a href={`/partiprogram/${slug}`} class="program-card">
  <span class="program-card__number">{number}</span>
  <div>
    <h3 class="program-card__title">{title}</h3>
    <p class="program-card__summary">{summary}</p>
  </div>
</a>

<style>
  .program-card {
    display: flex;
    gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid var(--color-border);
    text-decoration: none;
    transition: padding-left 0.2s;
  }

  .program-card:hover {
    padding-left: 8px;
    text-decoration: none;
  }

  .program-card__number {
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 600;
    color: var(--color-red);
    min-width: 28px;
    padding-top: 2px;
  }

  .program-card__title {
    font-family: var(--font-sans);
    font-size: 16px;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 6px;
  }

  .program-card__summary {
    font-family: var(--font-serif);
    font-size: 15px;
    line-height: 1.7;
    color: var(--color-text);
    font-weight: 300;
  }
</style>
```

**Step 2: Commit**

```bash
git add src/components/ProgramCard.astro
git commit -m "feat: add ProgramCard component"
```

---

### Task 9: Party program data file

**Files:**
- Create: `src/data/partiprogram.ts`

**Step 1: Create the data file with all 14 chapters**

Each chapter has: number, slug, title, summary (for the overview page), and content (the full text from the PDF, as plain paragraphs). Extract all text from the PDF into this data structure.

```typescript
export interface Chapter {
  number: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];  // Array of paragraphs
  subheadings?: { title: string; paragraphs: string[] }[];
}

export const chapters: Chapter[] = [
  {
    number: '01',
    slug: 'vision',
    title: 'Vision',
    summary: 'Den skandinaviske samfundsmodel er en historisk unik balance mellem personlig frihed, social lighed og høj gensidig tillid.',
    content: [
      'Den skandinaviske samfundsmodel er en historisk unik og skrøbelig balance mellem personlig frihed, social lighed og høj gensidig tillid. Denne balance er ikke opstået af sig selv. Den er vokset ud af en bestemt kultur, bestemte institutioner og en stærk social kontrakt mellem borgere, der deler sprog, historie og grundlæggende værdier.',
      'Denne model er i dag truet fra to sider. Fra religiøs konservatisme, særligt i form af islamisk påvirkning, der importerer patriarkalske normer, kollektivistisk ærkultur og en verdensanskuelse, som er uforenelig med nordisk individuel frihed og ligestilling. Og fra amerikanisering, der importerer markedsradikalisme, nedbrydning af velfærdsstaten, kommerciel kulturel dominans og en polariserende identitetspolitik, som underminerer den pragmatiske og tillidsbaserede danske offentlighed.',
      'Frit Fællesskab eksisterer for at beskytte og videreudvikle den nordiske model. Vi forener socialliberal insisteren på individuelle rettigheder, lige muligheder og en stærk velfærdsstat med en nationalkonservativ forpligtelse over for dansk kultur, danske institutioner og den sammenhængskraft, der gør friheden mulig.',
      'Vi tror på, at personlig frihed og kulturel bevarelse ikke er modsætninger. De er hinandens forudsætninger.',
    ],
  },
  // ... ALL 14 chapters extracted from PDF
  // This file will contain the complete content from partiprogram.pdf
  // Each chapter should faithfully reproduce the text from the PDF
];
```

The implementing engineer should extract ALL text from the PDF for each chapter. Chapters with subheadings (like chapter 5 "Skat og afgifter" which has "Skat på arbejde og kapital", "Afgifter dækker omkostninger", etc.) should use the `subheadings` field.

**Step 2: Commit**

```bash
git add src/data/partiprogram.ts
git commit -m "feat: add party program data from PDF"
```

---

### Task 10: Homepage (index.astro)

**Files:**
- Create: `src/pages/index.astro`

**Step 1: Create the homepage**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import Hero from '../components/Hero.astro';
import ValueCard from '../components/ValueCard.astro';
import ProgramCard from '../components/ProgramCard.astro';
import SignupForm from '../components/SignupForm.astro';
import { chapters } from '../data/partiprogram';
---

<Layout title="Forside" description="Frit Fællesskab — et parti for frihed, tryghed og fællesskab. Beskyttelse og videreudvikling af den nordiske model.">
  <Header />
  <main>
    <Hero />

    {/* Kerneværdier */}
    <section class="values">
      <div class="container">
        <p class="section-label">Kerneværdier</p>
        <h2 class="section-title">Hvad vi står for</h2>
        <div class="values__grid">
          <ValueCard
            color="red"
            title="Fællesskab"
            description="Den sociale kontrakt og den kulturelle sammenhængskraft, der binder samfundet sammen. Velfærdsstaten som frihedsprojekt."
          />
          <ValueCard
            color="blue"
            title="Frihed"
            description="Individuel frihed, retssikkerhed og lige muligheder. Enhver borger har ret til at leve sit liv, som de vil, inden for fællesskabets rammer."
          />
          <ValueCard
            color="green"
            title="Natur"
            description="Beskyttelse af dansk natur, rent drikkevand og biodiversitet. Forankret i konkret kærlighed til det nære, ikke i abstrakt aktivisme."
          />
        </div>
      </div>
    </section>

    {/* Partiprogram-teaser */}
    <section class="program-teaser">
      <div class="container">
        <p class="section-label">Partiprogram</p>
        <h2 class="section-title">Vores politik</h2>
        <p class="body-text" style="margin-bottom: 32px; max-width: 580px;">
          Læs om vores holdninger til alt fra velfærd og skat til klima, uddannelse og digitalisering.
        </p>
        {chapters.slice(0, 5).map(chapter => (
          <ProgramCard
            number={chapter.number}
            title={chapter.title}
            summary={chapter.summary}
            slug={chapter.slug}
          />
        ))}
        <div style="margin-top: 32px;">
          <a href="/partiprogram" class="btn btn--primary">Se hele programmet</a>
        </div>
      </div>
    </section>

    {/* Bliv medlem */}
    <section id="bliv-medlem" class="signup-section">
      <div class="container">
        <div class="signup-grid">
          <SignupForm variant="medlem" />
          <SignupForm variant="nyhedsbrev" />
        </div>
      </div>
    </section>
  </main>
  <Footer />
</Layout>

<style>
  .values {
    padding: 80px 0;
    border-bottom: 1px solid var(--color-border);
  }

  .values__grid {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  .program-teaser {
    padding: 80px 0;
    border-bottom: 1px solid var(--color-border);
  }

  .signup-section {
    padding: 80px 0;
  }

  .signup-grid {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  .signup-grid > :global(*) {
    flex: 1;
    min-width: 300px;
  }

  @media (max-width: 640px) {
    .values, .program-teaser, .signup-section {
      padding: 48px 0;
    }
  }
</style>
```

**Step 2: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add homepage with hero, values, program teaser, and signup"
```

---

### Task 11: Party program pages

**Files:**
- Create: `src/pages/partiprogram/index.astro`
- Create: `src/pages/partiprogram/[...slug].astro`

**Step 1: Create overview page**

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import ProgramCard from '../../components/ProgramCard.astro';
import { chapters } from '../../data/partiprogram';
---

<Layout title="Partiprogram" description="Læs Frit Fællesskabs partiprogram — vores politik for frihed, tryghed og fællesskab.">
  <Header />
  <main>
    <section class="program-header">
      <div class="container">
        <p class="section-label">Partiprogram</p>
        <h1 class="section-title" style="font-size: clamp(32px, 5vw, 48px);">Partiprogram</h1>
        <div class="divider-tri"><span></span><span></span><span></span></div>
        <p class="body-text" style="max-width: 580px;">
          Frit Fællesskabs partiprogram i 14 kapitler. Klik på et kapitel for at læse mere.
        </p>
      </div>
    </section>

    <section class="program-list">
      <div class="container">
        {chapters.map(chapter => (
          <ProgramCard
            number={chapter.number}
            title={chapter.title}
            summary={chapter.summary}
            slug={chapter.slug}
          />
        ))}
      </div>
    </section>
  </main>
  <Footer />
</Layout>

<style>
  .program-header {
    padding-top: 120px;
    padding-bottom: 40px;
  }

  .program-list {
    padding-bottom: 80px;
  }
</style>
```

**Step 2: Create dynamic chapter page**

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { chapters } from '../../data/partiprogram';

export function getStaticPaths() {
  return chapters.map(chapter => ({
    params: { slug: chapter.slug },
    props: { chapter },
  }));
}

const { chapter } = Astro.props;

const currentIndex = chapters.findIndex(c => c.slug === chapter.slug);
const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
---

<Layout title={chapter.title} description={chapter.summary}>
  <Header />
  <main>
    <article class="chapter">
      <div class="container">
        <a href="/partiprogram" class="chapter__back">&larr; Tilbage til partiprogram</a>
        <p class="section-label">{chapter.number}</p>
        <h1 class="chapter__title">{chapter.title}</h1>
        <div class="divider-tri"><span></span><span></span><span></span></div>

        <div class="chapter__content">
          {chapter.subheadings
            ? chapter.subheadings.map(sub => (
                <div class="chapter__sub">
                  <h2 class="chapter__sub-title">{sub.title}</h2>
                  {sub.paragraphs.map(p => <p class="body-text">{p}</p>)}
                </div>
              ))
            : chapter.content.map(p => <p class="body-text">{p}</p>)
          }
        </div>

        <nav class="chapter__nav">
          {prev && (
            <a href={`/partiprogram/${prev.slug}`} class="chapter__nav-link chapter__nav-link--prev">
              <span class="chapter__nav-label">&larr; Forrige</span>
              <span class="chapter__nav-title">{prev.number} {prev.title}</span>
            </a>
          )}
          {next && (
            <a href={`/partiprogram/${next.slug}`} class="chapter__nav-link chapter__nav-link--next">
              <span class="chapter__nav-label">Næste &rarr;</span>
              <span class="chapter__nav-title">{next.number} {next.title}</span>
            </a>
          )}
        </nav>
      </div>
    </article>
  </main>
  <Footer />
</Layout>

<style>
  .chapter {
    padding-top: 120px;
    padding-bottom: 40px;
  }

  .chapter__back {
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 500;
    color: var(--color-muted);
    text-decoration: none;
    display: inline-block;
    margin-bottom: 32px;
  }

  .chapter__back:hover {
    color: var(--color-dark);
  }

  .chapter__title {
    font-family: var(--font-serif);
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 300;
    color: var(--color-dark);
    line-height: 1.2;
  }

  .chapter__content {
    margin-top: 40px;
  }

  .chapter__content :global(.body-text) {
    margin-bottom: 20px;
  }

  .chapter__sub {
    margin-bottom: 40px;
  }

  .chapter__sub-title {
    font-family: var(--font-sans);
    font-size: 16px;
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: 16px;
  }

  .chapter__nav {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-top: 64px;
    padding-top: 32px;
    border-top: 1px solid var(--color-border);
    flex-wrap: wrap;
  }

  .chapter__nav-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .chapter__nav-link--next {
    margin-left: auto;
    text-align: right;
  }

  .chapter__nav-label {
    font-family: var(--font-sans);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  .chapter__nav-title {
    font-family: var(--font-serif);
    font-size: 16px;
    font-weight: 400;
    color: var(--color-dark);
  }
</style>
```

**Step 3: Commit**

```bash
git add src/pages/partiprogram/
git commit -m "feat: add partiprogram overview and chapter pages"
```

---

### Task 12: Contact page

**Files:**
- Create: `src/pages/kontakt.astro`

**Step 1: Create kontakt.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Kontakt" description="Kontakt Frit Fællesskab.">
  <Header />
  <main>
    <section class="kontakt">
      <div class="container">
        <p class="section-label">Kontakt</p>
        <h1 class="section-title" style="font-size: clamp(32px, 5vw, 48px);">Kontakt os</h1>
        <div class="divider-tri"><span></span><span></span><span></span></div>
        <div class="kontakt__content">
          <p class="body-text">
            Har du spørgsmål, ideer eller ønsker du at engagere dig i Frit Fællesskab? Vi hører gerne fra dig.
          </p>
          <div class="kontakt__info">
            <div class="kontakt__item">
              <h3 class="kontakt__label">E-mail</h3>
              <p class="body-text">kontakt@fritfaellesskab.dk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</Layout>

<style>
  .kontakt {
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .kontakt__content {
    margin-top: 40px;
    max-width: 520px;
  }

  .kontakt__info {
    margin-top: 40px;
  }

  .kontakt__item {
    padding: 24px 0;
    border-top: 1px solid var(--color-border);
  }

  .kontakt__label {
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 8px;
  }
</style>
```

**Step 2: Commit**

```bash
git add src/pages/kontakt.astro
git commit -m "feat: add contact page"
```

---

### Task 13: Add hero placeholder and verify build

**Step 1: Create a placeholder image**

Create `src/assets/hero.jpg` — use a small placeholder. The user will replace this with their own image.

Run:
```bash
npx astro build
```

Expected: Build succeeds, static files generated in `dist/`.

**Step 2: Visual verification**

Run:
```bash
npm run dev
```

Verify in browser:
- [ ] Homepage loads with hero, values, program teaser, signup forms
- [ ] Header navigation works, fixed at top with blur
- [ ] Mobile menu toggles on small screens
- [ ] `/partiprogram` shows all 14 chapters
- [ ] Clicking a chapter opens the full text
- [ ] Previous/next navigation works between chapters
- [ ] `/kontakt` displays correctly
- [ ] Footer appears on all pages
- [ ] Fonts load (Cormorant and Jost)
- [ ] Colors match brand guide

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete Frit Fællesskab website v1"
```
