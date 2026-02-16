# UI Components Quick Reference

> **📋 Interview Reference**: This document provides complete usage examples for all available UI components. Use these components to build the KYC verification features.

## Getting Started

All components are located in `src/components/ui/` and can be imported from the barrel export:

```tsx
import { Button, Card, Banner, Stepper } from "./components/ui";
```

## API Endpoint

The messy KYC data is available at:
```
GET http://localhost:8080/api/kyc/raw
```

## Component Overview

### 🔘 Button Component

**File**: `src/components/ui/Button.tsx`

Three variants with multiple sizes and full-width support.

```tsx
// Variants
<Button variant="primary">Primary</Button>     // Blue (default)
<Button variant="secondary">Secondary</Button> // Yellow
<Button variant="ghost">Ghost</Button>         // Transparent with border

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>  // Default
<Button size="lg">Large</Button>

// Other props
<Button fullWidth>Full Width</Button>
<Button disabled>Disabled</Button>
```

---

### 🗂️ Card Component

**File**: `src/components/ui/Card.tsx`

Flexible card with subcomponents for structured layouts.

```tsx
<Card hover padding="md">
  <CardHeader>
    <CardTitle>Title Here</CardTitle>
  </CardHeader>
  <CardContent>Your content here...</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Props**:

- `hover` - Adds hover shadow effect
- `padding` - `'none' | 'sm' | 'md' | 'lg'`

---

### 🔔 Banner Component

**File**: `src/components/ui/Banner.tsx`

Alert/notification component with semantic variants.

```tsx
<Banner variant="info">Info message</Banner>
<Banner variant="success">Success message</Banner>
<Banner variant="warning">Warning message</Banner>
<Banner variant="error">Error message</Banner>

// With title, description, and close button
<Banner variant="warning" onClose={() => setShow(false)}>
  <BannerTitle>Warning Title</BannerTitle>
  <BannerDescription>
    Detailed warning message here...
  </BannerDescription>
</Banner>
```

---

### 📊 Stepper Component

**File**: `src/components/ui/Stepper.tsx`

Visual progress indicator for multi-step flows.

```tsx
const steps = [
  { id: '1', label: 'Personal Info', description: 'Basic details' },
  { id: '2', label: 'Documents', description: 'Upload ID' },
  { id: '3', label: 'Verification', description: 'Review' },
];

<Stepper steps={steps} currentStep={2} />
<Stepper steps={steps} currentStep={1} variant="compact" />
```

**Features**:

- Completed steps show checkmark
- Current step is highlighted with ring
- Upcoming steps are grayed out
- Optional descriptions
- Compact variant available

---

## MercadoLibre Design Tokens

### Colors

```tsx
// Primary colors
bg-meli-yellow   // #FFE600
bg-meli-blue     // #3483FA

// Semantic colors
bg-success       // #00A650 (green)
bg-warning       // #F7B500 (orange)
bg-error         // #F23D4F (red)

// Gray scale
bg-meli-gray-50  // Lightest
bg-meli-gray-100
...
bg-meli-gray-900 // Darkest
```

### Shadows

```tsx
shadow - meli; // Subtle
shadow - meli - md; // Medium
shadow - meli - lg; // Large (hover states)
shadow - meli - xl; // Extra large
```

### Border Radius

```tsx
rounded - meli; // 6px
```

---

## Example: Complete KYC Form Layout

```tsx
function KYCForm() {
  const [step, setStep] = useState(1);

  const steps = [
    { id: "1", label: "Info", description: "Personal details" },
    { id: "2", label: "Docs", description: "Upload ID" },
    { id: "3", label: "Done", description: "Complete" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Progress */}
      <Stepper steps={steps} currentStep={step} />

      {/* Alert */}
      <Banner variant="info">
        <BannerTitle>Secure Process</BannerTitle>
        <BannerDescription>
          Your data is encrypted and secure.
        </BannerDescription>
      </Banner>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>{/* Form fields here */}</CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="ghost">Back</Button>
          <Button variant="primary">Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
```

---

## TypeScript Support

All components are fully typed. Import types as needed:

```tsx
import {
  Button,
  type ButtonProps,
  Card,
  type CardProps,
  Banner,
  type BannerProps,
  Stepper,
  type StepperProps,
  type Step,
} from "./components/ui";
```

---

## Running the Demo

To see all components in action:

```bash
cd client
npm run dev
```

Visit `http://localhost:5173` to view the complete showcase with all variants and examples.
