# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Jie Jack Fan built with Next.js 15, TypeScript, and Tailwind CSS. The site includes a home page with professional information and a photography gallery section.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm lint
```

Development server runs on [http://localhost:3000](http://localhost:3000)

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router and React 19
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS 4 with CSS variables for theming
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives
- **Icons**: Lucide React

### Directory Structure
```
app/
  layout.tsx              # Root layout with Geist fonts
  page.tsx                # Home page with work experience, projects, education
  photography/
    page.tsx              # Photography gallery grid
    [id]/page.tsx         # Individual photo detail pages
components/ui/            # shadcn/ui components (Avatar, Badge, Card)
lib/
  utils.ts               # cn() utility for class merging
public/
  photos/                # Photo assets
```

### Key Patterns

**Import Aliases**: Uses `@/` prefix for all imports (e.g., `@/components/ui/card`)

**Photo Content Management**: Photos are defined as static arrays directly in the page files ([app/photography/page.tsx](app/photography/page.tsx) and [app/photography/[id]/page.tsx](app/photography/[id]/page.tsx)). Each photo object includes:
- `id`, `src`, `title`, `description`
- `location`, `camera`, `lens`, `settings` (for detail pages)

To add new photos, update both arrays in these files.

**Dynamic Routes**: The photography detail page uses Next.js 15's async params pattern:
```typescript
interface PhotoPageProps {
  params: Promise<{ id: string }>
}
export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  // ...
}
```

**Component Library**: Uses shadcn/ui components installed via CLI. Configuration in [components.json](components.json). To add new components, use: `npx shadcn@latest add [component-name]`

**Styling Utilities**: The `cn()` function in [lib/utils.ts](lib/utils.ts) combines clsx and tailwind-merge for conditional and conflict-free class merging.

### Navigation Structure
- Header component duplicated across pages with links to Home (/) and Photography (/photography)
- Photography gallery uses Next.js Image component with optimized loading
- Detail pages include prev/next navigation between photos

## Deployment Notes

The site is configured for deployment at jackkkfan.com. Metadata and OpenGraph tags are set in [app/layout.tsx](app/layout.tsx).
