# AltılıBahis — Six-Fold Bet Payout Calculator

Free TJK six-fold bet payout calculator. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CLARITY_ID=
```

## Build

```bash
npm run build
npm start
```

## Deploy to GitHub + Vercel

### 1. GitHub

```bash
git init
git add -A
git commit -m "Initial commit: AltılıBahis payout calculator"
```

Create a new empty repository on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Add environment variables from `.env.example`
5. Click **Deploy**

Or with CLI:

```bash
npx vercel
npx vercel --prod
```

## Media notes

Hero video: `public/images/horse-sprite.mp4`  
FAQ video: `public/images/horse-sprite-3.mp4`  

Compress videos before production for best Lighthouse scores (target under 5MB each).
