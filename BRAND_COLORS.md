# Brand Color Palette

## Official Brand Colors
These are the ONLY colors that should be used throughout the website for brand consistency.

### Primary Colors (Coolors Palette)
- **Primary Dark**: `#111111` - Main background color
- **Accent Lime**: `#d9ff2e` - Primary accent color for buttons and highlights
- **Secondary Green**: `#4f7a00` - Secondary accent color
- **Neutral Gray**: `#9ca3af` - Text and subtle elements
- **Light White**: `#ffffff` - Light backgrounds and high-contrast text

### Color Usage Guidelines
- **Backgrounds**: Use `#111111` for dark sections, `#ffffff` for light sections
- **Text**: Use `#ffffff` on dark backgrounds, `#111111` on light backgrounds
- **Accents**: Use `#d9ff2e` for primary buttons and highlights (dark text on lime)
- **Secondary Elements**: Use `#4f7a00` for secondary buttons and elements (white text on dark green)
- **Subtle Text**: Use `#9ca3af` for less important text elements

### Accessibility
All color combinations meet WCAG contrast ratio requirements:
- White text on dark background: 21:1 contrast ratio
- Dark text on lime background: 4.5:1+ contrast ratio
- White text on dark green background: 4.5:1+ contrast ratio
- Lime accents provide excellent contrast on dark backgrounds

### Implementation
Colors are defined in `tailwind.config.js` and used throughout the application via Tailwind CSS classes.
