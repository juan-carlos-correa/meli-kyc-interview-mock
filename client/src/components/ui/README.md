# MercadoLibre UI Components

A set of base Tailwind CSS components styled with MercadoLibre's brand identity for the KYC interview project.

## Brand Colors

- **Primary Yellow**: `#FFE600` (meli-yellow)
- **Primary Blue**: `#3483FA` (meli-blue)
- **Success**: `#00A650`
- **Warning**: `#F7B500`
- **Error**: `#F23D4F`

## Components

### Button

A versatile button component with three variants and multiple sizes.

#### Variants

- `primary` - Blue background, white text (default)
- `secondary` - Yellow background, dark text
- `ghost` - Transparent with blue border

#### Sizes

- `sm` - Small (px-3 py-1.5)
- `md` - Medium (px-4 py-2) (default)
- `lg` - Large (px-6 py-3)

#### Props

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  // ...extends ButtonHTMLAttributes
}
```

#### Usage

```tsx
import { Button } from './components/ui';

<Button variant="primary">Click Me</Button>
<Button variant="secondary" size="lg">Large Secondary</Button>
<Button variant="ghost" fullWidth>Full Width Ghost</Button>
```

---

### Card

A flexible card component with optional hover effects and multiple subcomponents.

#### Components

- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title heading
- `CardContent` - Main content area
- `CardFooter` - Footer section with top border

#### Props

```typescript
interface CardProps {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  // ...extends HTMLAttributes
}
```

#### Usage

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui";

<Card hover padding="md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

---

### Banner

An alert/notification component with four semantic variants and optional close button.

#### Variants

- `info` - Blue (informational)
- `success` - Green (positive feedback)
- `warning` - Yellow (caution)
- `error` - Red (errors/critical)

#### Components

- `Banner` - Main container
- `BannerTitle` - Bold title text
- `BannerDescription` - Description text

#### Props

```typescript
interface BannerProps {
  variant?: "info" | "success" | "warning" | "error";
  onClose?: () => void;
  // ...extends HTMLAttributes
}
```

#### Usage

```tsx
import { Banner, BannerTitle, BannerDescription } from "./components/ui";

<Banner variant="warning" onClose={() => setShow(false)}>
  <BannerTitle>Warning</BannerTitle>
  <BannerDescription>
    This is a warning message that can be dismissed.
  </BannerDescription>
</Banner>;
```

---

## Tailwind Configuration

The project uses a custom Tailwind config with MercadoLibre-specific values:

### Custom Border Radius

- `rounded-meli` - 6px border radius

### Custom Shadows

- `shadow-meli` - Subtle shadow
- `shadow-meli-md` - Medium shadow
- `shadow-meli-lg` - Large shadow (for hover states)
- `shadow-meli-xl` - Extra large shadow

### Gray Scale

- `meli-gray-50` through `meli-gray-900`

## Usage Tips

1. **Import from barrel export**: Always import from `./components/ui` for cleaner imports

   ```tsx
   import { Button, Card, Banner } from "./components/ui";
   ```

2. **Compound components**: Card and Banner use compound component patterns

   ```tsx
   <Card>
     <CardHeader>
       <CardTitle>Title</CardTitle>
     </CardHeader>
     <CardContent>Content</CardContent>
   </Card>
   ```

3. **Accessibility**: All components include proper ARIA attributes and semantic HTML

4. **TypeScript**: All components are fully typed with exported type definitions

## Demo

Run the development server to see all components in action:

```bash
npm run dev
```

Navigate to `http://localhost:5173` to view the component showcase.
