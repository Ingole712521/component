# 3D Button Component Library

A modern, fully customizable 3D button component library built with React, TypeScript, Tailwind CSS, and multiple animation libraries (GSAP & Framer Motion).

## 📦 Components

This library includes three distinct 3D button implementations:

### 1. **Motion3DButton** - CSS-based 3D animations
### 2. **GSAP3DButton** - GSAP-powered 3D animations
### 3. **FramerMotion3DButton** - Framer Motion spring physics

---

## 🚀 Installation

No additional installation needed! The components are already in your project. Just import them:

```tsx
import { 
  Motion3DButton, 
  GSAP3DButton, 
  FramerMotion3DButton 
} from "@/components/3d-buttons";
```

---

## 📖 Usage Examples

### Motion3DButton (CSS-based)

```tsx
<Motion3DButton 
  variant="lift" 
  color="blue" 
  size="md"
  onClick={() => console.log("Clicked!")}
>
  Click Me
</Motion3DButton>
```

**Available Props:**
- `variant`: "lift" | "press" | "slide" | "flip" | "glow"
- `color`: "blue" | "purple" | "green" | "orange" | "red"
- `size`: "sm" | "md" | "lg"
- `onClick`: () => void
- `className`: string (for custom styles)
- `disabled`: boolean

---

### GSAP3DButton (GSAP animations)

```tsx
<GSAP3DButton 
  variant="cube" 
  color="purple" 
  size="lg"
  onClick={() => console.log("Clicked!")}
>
  <span>🚀</span> Launch
</GSAP3DButton>
```

**Available Props:**
- `variant`: "cube" | "neon" | "isometric" | "extruded"
- `color`: "blue" | "purple" | "green" | "orange" | "red"
- `size`: "sm" | "md" | "lg"
- `onClick`: () => void
- `className`: string
- `disabled`: boolean

---

### FramerMotion3DButton (Framer Motion)

```tsx
<FramerMotion3DButton 
  variant="spring" 
  color="green" 
  size="md"
  onClick={() => console.log("Clicked!")}
>
  Spring Button
</FramerMotion3DButton>
```

**Available Props:**
- `variant`: "spring" | "depth" | "rotate"
- `color`: "blue" | "purple" | "green" | "orange" | "red"
- `size`: "sm" | "md" | "lg"
- `onClick`: () => void
- `className`: string
- `disabled`: boolean

---

## 🎨 Color Options

All buttons support 5 gradient color schemes:

- **blue**: Blue to Cyan gradient
- **purple**: Purple to Pink gradient
- **green**: Green to Emerald gradient
- **orange**: Orange to Red gradient
- **red**: Red to Rose gradient

---

## 📏 Size Options

Three standardized sizes:

- **sm**: px-4 py-2 text-sm
- **md**: px-6 py-3 text-base
- **lg**: px-8 py-4 text-lg

---

## 💡 Complete Example Page

```tsx
import { 
  Motion3DButton, 
  GSAP3DButton, 
  FramerMotion3DButton 
} from "@/components/3d-buttons";

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Motion3D Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Motion3D Buttons
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Motion3DButton variant="lift" color="blue">Lift</Motion3DButton>
          <Motion3DButton variant="press" color="purple">Press</Motion3DButton>
          <Motion3DButton variant="slide" color="green">Slide</Motion3DButton>
          <Motion3DButton variant="flip" color="orange">Flip</Motion3DButton>
          <Motion3DButton variant="glow" color="red">Glow</Motion3DButton>
        </div>
      </section>

      {/* GSAP3D Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          GSAP3D Buttons
        </h2>
        <div className="flex gap-4 flex-wrap">
          <GSAP3DButton variant="cube" color="blue">Cube</GSAP3DButton>
          <GSAP3DButton variant="neon" color="purple">Neon</GSAP3DButton>
          <GSAP3DButton variant="isometric" color="green">Isometric</GSAP3DButton>
          <GSAP3DButton variant="extruded" color="orange">Extruded</GSAP3DButton>
        </div>
      </section>

      {/* Framer Motion Buttons */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Framer Motion Buttons
        </h2>
        <div className="flex gap-4 flex-wrap">
          <FramerMotion3DButton variant="spring" color="blue">Spring</FramerMotion3DButton>
          <FramerMotion3DButton variant="depth" color="purple">Depth</FramerMotion3DButton>
          <FramerMotion3DButton variant="rotate" color="green">Rotate</FramerMotion3DButton>
        </div>
      </section>
    </div>
  );
}
```

---

## 🎯 Features

✅ Fully responsive design
✅ Multiple animation variants
✅ Customizable colors and sizes
✅ Disabled state support
✅ Smooth 3D transformations
✅ Accessible keyboard navigation
✅ TypeScript support with full type definitions
✅ No external dependencies (uses existing GSAP & Framer Motion)
✅ Tailwind CSS integration
✅ CSS Modules for scoped styling

---

## 🔧 Customization

You can customize buttons further using the `className` prop:

```tsx
<Motion3DButton 
  variant="lift" 
  color="blue"
  className="my-custom-shadow hover:shadow-xl"
>
  Custom Styled
</Motion3DButton>
```

---

## 📝 Notes

- All buttons use `transform-style: preserve-3d` for true 3D effects
- GSAP buttons require GSAP to be installed (already in your project)
- Framer Motion buttons require Framer Motion (already in your project)
- Buttons are fully accessible with proper focus states
- Use `disabled` prop to disable buttons

---

## 🎨 Best Practices

1. Choose appropriate size for your use case (sm for inline, lg for CTAs)
2. Use contrasting colors for better visibility
3. Add icons inside buttons for better visual communication
4. Don't overuse 3D effects - use them strategically
5. Test on different devices for performance

---

## 📄 File Structure

```
components/3d-buttons/
├── index.ts                      # Main export file
├── types.ts                      # TypeScript interfaces
├── styles.module.css             # Shared CSS styles
├── Motion3DButton.tsx            # CSS-based 3D buttons
├── GSAP3DButton.tsx              # GSAP-powered 3D buttons
├── FramerMotion3DButton.tsx      # Framer Motion 3D buttons
└── README.md                     # This documentation
```

---

## 🙌 Created By

This 3D button library was created as a separate component library, independent of the existing button components in the project.

---

## 📞 Support

For issues or questions, check the component source code or reach out to the maintainer.
