# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

important always responded in 日本語

### Development
```bash
pnpm dev          # Start development server at localhost:5173
pnpm build        # TypeScript check + production build
pnpm preview      # Preview production build
pnpm deploy       # Build and deploy to GitHub Pages
```

### Code Quality
```bash
pnpm lint         # Run ESLint
pnpm format       # Auto-fix linting issues with ESLint
```

### API Generation
```bash
pnpm api          # Generate API client from backend OpenAPI spec + fix Zod schemas
# This runs: pnpm generate-api && pnpm fix-zod
```

## Architecture

This is a React 19 + TypeScript frontend using Vite as the build tool. Key architectural decisions:

### API Integration
- **Orval** generates TypeScript clients from `../backend/openapi.yaml`
- Generated code lives in `src/api/` (do not edit manually)
- Uses **SWR** for data fetching with generated hooks
- **Zod** schemas provide runtime validation
- Custom script fixes Zod integer validations after generation

### Component Structure
- **shadcn/ui** components pre-installed in `src/components/ui/`
- Components use **CVA** (class-variance-authority) for variant styling
- **Radix UI** primitives provide accessibility
- **Tailwind CSS v4** with CSS variables for styling

### Routing
- React Router DOM v7 with file-based route configuration
- Routes defined in `src/routes.ts`
- Page components in `src/pages/`

### Important Patterns
- Path alias `@/*` maps to `./src/*`
- All UI components follow shadcn/ui patterns - check existing components before creating new ones
- API hooks are auto-generated - use the generated SWR hooks instead of manual fetch
- Form validation uses React Hook Form + Zod schemas from API generation

### Deployment
- Configured for GitHub Pages deployment
- Base URL automatically set for gh-pages
- PWA support available but currently disabled in vite.config.ts