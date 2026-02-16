# KYC Verification - Frontend

React + TypeScript + Vite application for KYC (Know Your Customer) verification.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── ui/              # Pre-built UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Banner.tsx
│   │       ├── Stepper.tsx
│   │       └── README.md    # Component documentation
│   ├── App.tsx              # Main application (your work goes here)
│   └── main.tsx
├── COMPONENTS.md            # Quick reference for UI components
└── TAILWIND_V4_SETUP.md     # Tailwind CSS v4 configuration
```

## Available Resources

### UI Components

Pre-built MercadoLibre-styled components are available in `src/components/ui/`:

- **Button** - Primary, secondary, and ghost variants
- **Card** - Flexible card layout with header, content, footer
- **Banner** - Alert/notification component (info, success, warning, error)
- **Stepper** - Multi-step progress indicator

📖 **See `COMPONENTS.md` for complete usage examples**

### API Endpoint

The backend API serves messy KYC data at:

```
GET /api/kyc/raw
```

The Vite dev server is configured to proxy `/api/*` requests to the backend at `http://localhost:8080`

This endpoint returns intentionally inconsistent data with:

- Varying field names (e.g., `first_name` vs `fname` vs `FirstName`)
- Mixed types (strings and numbers for IDs)
- Inconsistent nesting structures
- Missing confidence scores in some documents

## Your Task

Build a multi-step KYC verification form in `src/App.tsx` that:

1. **Fetches and normalizes** the messy data from the API
2. **Displays a multi-step form** using the provided UI components
3. **Handles data inconsistencies** gracefully
4. **Shows appropriate warnings** for low confidence scores or missing data
5. **Provides good UX** for the verification process

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development
- **Tailwind CSS v4** for styling
- **TanStack Query** for data fetching (optional, already installed)

## Styling

This project uses **Tailwind CSS v4** with MercadoLibre's brand colors:

- Primary Yellow: `bg-meli-yellow` (#FFE600)
- Primary Blue: `bg-meli-blue` (#3483FA)
- Semantic colors: `bg-success`, `bg-warning`, `bg-error`

See `TAILWIND_V4_SETUP.md` for details on the v4 configuration.

## Tips

- Use TypeScript to define proper types for the normalized KYC data
- Consider how to handle missing or malformed data
- Think about validation requirements for KYC
- Use the provided components to maintain consistent styling

## Questions?

- Component usage: See `COMPONENTS.md`
- Tailwind setup: See `TAILWIND_V4_SETUP.md`
- Component implementation: Check `src/components/ui/` source files

Good luck! 🚀
