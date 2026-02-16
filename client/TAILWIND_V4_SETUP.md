# Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4**, which introduces significant changes from v3.

## Key Differences from v3

### 1. CSS-Based Configuration
Tailwind v4 uses **CSS variables** for theme configuration instead of JavaScript config files.

**Old (v3):**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'meli-yellow': '#FFE600',
      }
    }
  }
}
```

**New (v4):**
```css
/* index.css */
@theme {
  --color-meli-yellow: #ffe600;
}
```

### 2. PostCSS Plugin Package
The PostCSS plugin has moved to a separate package: `@tailwindcss/postcss`

**Installation:**
```bash
npm install -D tailwindcss @tailwindcss/postcss autoprefixer
```

**postcss.config.js:**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 3. Import Syntax
Use a single `@import` instead of multiple `@tailwind` directives.

**Old (v3):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**New (v4):**
```css
@import "tailwindcss";
```

## MercadoLibre Theme Configuration

Our custom theme is defined in `src/index.css`:

```css
@theme {
  /* Brand colors */
  --color-meli-yellow: #ffe600;
  --color-meli-blue: #3483fa;
  --color-meli-blue-dark: #2968c8;
  --color-meli-blue-light: #4189fb;
  
  /* Gray scale */
  --color-meli-gray-50: #f5f5f5;
  --color-meli-gray-100: #eeeeee;
  /* ... more grays */
  
  /* Semantic colors */
  --color-success: #00a650;
  --color-warning: #f7b500;
  --color-error: #f23d4f;
  --color-info: #3483fa;
  
  /* Border radius */
  --radius-meli: 6px;
  
  /* Shadows */
  --shadow-meli: 0 1px 2px 0 rgb(0 0 0 / 0.1);
  --shadow-meli-md: 0 2px 4px 0 rgb(0 0 0 / 0.12);
  --shadow-meli-lg: 0 4px 8px 0 rgb(0 0 0 / 0.15);
  --shadow-meli-xl: 0 6px 16px 0 rgb(0 0 0 / 0.2);
}
```

## Usage in Components

The usage in JSX/TSX remains the same:

```tsx
<div className="bg-meli-yellow text-meli-blue rounded-meli shadow-meli">
  MercadoLibre styled component
</div>
```

## Benefits of v4

1. **Faster builds** - Better performance with the new engine
2. **Smaller CSS** - More efficient output
3. **CSS-native** - Theme configuration in CSS is more standards-compliant
4. **Better IntelliSense** - Improved IDE support for custom properties
5. **No config file needed** - Simpler project structure

## Files Structure

```
client/
├── postcss.config.js       # PostCSS with @tailwindcss/postcss
├── src/
│   └── index.css          # @import + @theme configuration
└── package.json           # tailwindcss + @tailwindcss/postcss
```

## Migration from v3

If migrating an existing project:

1. Install new package:
   ```bash
   npm install -D @tailwindcss/postcss
   ```

2. Update `postcss.config.js`:
   ```js
   export default {
     plugins: {
       '@tailwindcss/postcss': {},  // Changed from 'tailwindcss'
       autoprefixer: {},
     },
   }
   ```

3. Update CSS imports:
   ```css
   @import "tailwindcss";  // Replaces @tailwind directives
   ```

4. Convert theme to CSS variables:
   ```css
   @theme {
     --color-custom: #123456;
     --radius-custom: 8px;
   }
   ```

5. Delete `tailwind.config.js` (optional, v4 can still use it for content paths)

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
