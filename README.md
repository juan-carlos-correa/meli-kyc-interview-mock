# MercadoLibre - Technical Interview Project

This is a full-stack technical interview project focused on building a KYC (Know Your Customer) verification system.

## Project Structure

```
meli-interview-mock/
├── server/              # Backend API (Express + TypeScript)
│   ├── data/           # Raw data files
│   └── index.ts        # API endpoints
├── client/             # Frontend (React + TypeScript + Vite)
│   ├── src/
│   │   ├── components/ui/  # Pre-built UI components
│   │   └── App.tsx         # Main application
│   ├── COMPONENTS.md       # UI component reference
│   └── README.md           # Frontend-specific docs
└── package.json        # Root package.json for running both
```

## Quick Start

### Prerequisites
- Node.js (v20.19+ recommended, v20.13+ minimum)
- npm

### Installation

Install all dependencies (both server and client):
```bash
npm install
```

### Running the Application

**Option 1: Run both server and client together** (Recommended)
```bash
npm run dev
```

This will start:
- Backend API on `http://localhost:8080`
- Frontend app on `http://localhost:5173`

**Option 2: Run separately**

Terminal 1 - Backend:
```bash
cd server
npm run dev
```

Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

## What's Provided

### Backend API
- Express server with TypeScript
- API endpoint(s) serving data
- CORS enabled for local development
- Hot reload with `tsx watch`

**Server runs on:** `http://localhost:8080`

### Frontend Setup
- React 19 with TypeScript
- Vite for fast development
- Tailwind CSS v4 with MercadoLibre branding
- TanStack Query for data fetching (optional)
- API proxy configured (`/api/*` → `http://localhost:8080`)

**Client runs on:** `http://localhost:5173`

### Pre-built UI Components

MercadoLibre-styled components are available in `client/src/components/ui/`:
- **Button** - Primary, secondary, and ghost variants
- **Card** - Flexible card layout with header/content/footer
- **Banner** - Alert/notification component (info, success, warning, error)

📖 **See `client/COMPONENTS.md` for usage examples**

### Design System

The project uses MercadoLibre's brand colors:
- Primary Yellow: `#FFE600`
- Primary Blue: `#3483FA`
- Custom Tailwind utilities: `bg-meli-yellow`, `bg-meli-blue`, etc.

See `client/TAILWIND_V4_SETUP.md` for Tailwind v4 configuration details.

## Interview Requirements

**Requirements will be provided during the interview.**

The interviewer will explain:
- What features to build
- Specific functionality requirements
- Evaluation criteria
- Time expectations

## Available Resources

### Documentation
- `client/README.md` - Frontend setup and structure
- `client/COMPONENTS.md` - UI component quick reference
- `client/src/components/ui/README.md` - Detailed component documentation
- `client/TAILWIND_V4_SETUP.md` - Tailwind CSS v4 guide

### Tech Stack

**Backend:**
- Node.js + Express
- TypeScript
- CORS enabled

**Frontend:**
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- TanStack Query (installed, optional to use)

### Useful Commands

```bash
# Install dependencies
npm install

# Run both server and client
npm run dev

# Run tests (if applicable)
npm test

# Lint client code
cd client && npm run lint

# Build client for production
cd client && npm run build
```

## Notes

- The project is pre-configured and ready to use
- All UI components are built and tested
- TypeScript is configured for both frontend and backend
- Hot reload is enabled for rapid development
- CORS is configured for local development

## Tips

- Read the component documentation before building features
- Use TypeScript for type safety
- The provided UI components follow MercadoLibre's design system
- Focus on clean, maintainable code
- Ask questions if anything is unclear

Good luck! 🚀
