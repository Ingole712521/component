# 3D Button Library - Usage Examples

## Basic Import

```tsx
import { 
  Motion3DButton, 
  GSAP3DButton, 
  FramerMotion3DButton 
} from "@/components/3d-buttons";
```

---

## Example 1: Call to Action Button

```tsx
<Motion3DButton 
  variant="lift" 
  color="green" 
  size="lg"
  onClick={handleSubscribe}
>
  Subscribe Now
</Motion3DButton>
```

---

## Example 2: Form Submit Button

```tsx
<FramerMotion3DButton 
  variant="spring" 
  color="blue" 
  size="md"
  type="submit"
  disabled={isSubmitting}
>
  {isSubmitting ? "Submitting..." : "Submit"}
</FramerMotion3DButton>
```

---

## Example 3: Navigation Button with Icon

```tsx
<GSAP3DButton 
  variant="cube" 
  color="purple" 
  size="md"
  onClick={() => router.push('/dashboard')}
>
  <span>📊</span> Dashboard
</GSAP3DButton>
```

---

## Example 4: Danger Action (Delete)

```tsx
<Motion3DButton 
  variant="press" 
  color="red" 
  size="md"
  onClick={handleDelete}
>
  🗑️ Delete Item
</Motion3DButton>
```

---

## Example 5: Special Feature Button

```tsx
<GSAP3DButton 
  variant="neon" 
  color="blue" 
  size="lg"
  onClick={handleSpecialAction}
>
  ✨ Premium Feature
</GSAP3DButton>
```

---

## Example 6: Button Group

```tsx
<div className="flex gap-4">
  <Motion3DButton variant="lift" color="blue" onClick={handleSave}>
    Save
  </Motion3DButton>
  
  <FramerMotion3DButton variant="spring" color="green" onClick={handleExport}>
    Export
  </FramerMotion3DButton>
  
  <GSAP3DButton variant="extruded" color="orange" onClick={handleShare}>
    Share
  </GSAP3DButton>
</div>
```

---

## Example 7: Responsive Button Sizes

```tsx
<div className="flex flex-col sm:flex-row gap-4">
  <Motion3DButton variant="lift" color="blue" size="sm">
    Mobile
  </Motion3DButton>
  
  <Motion3DButton variant="lift" color="purple" size="md">
    Tablet
  </Motion3DButton>
  
  <Motion3DButton variant="lift" color="green" size="lg">
    Desktop
  </Motion3DButton>
</div>
```

---

## Example 8: Loading State

```tsx
<Motion3DButton 
  variant="glow" 
  color="blue" 
  size="md"
  disabled={isLoading}
  onClick={handleLoad}
>
  {isLoading ? (
    <>
      <span className="animate-spin">⏳</span> Loading...
    </>
  ) : (
    'Load Data'
  )}
</Motion3DButton>
```

---

## Example 9: Full Width Button

```tsx
<Motion3DButton 
  variant="lift" 
  color="purple" 
  size="lg"
  className="w-full"
  onClick={handleAction}
>
  Get Started Free
</Motion3DButton>
```

---

## Example 10: Custom Styling

```tsx
<Motion3DButton 
  variant="slide" 
  color="blue" 
  size="lg"
  className="shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300"
  onClick={handleClick}
>
  Custom Styled Button
</Motion3DButton>
```

---

## Tips for Best Results

1. **Contrast**: Use bright colors on dark backgrounds for maximum impact
2. **Spacing**: Give buttons room to breathe with adequate padding/margins
3. **Icons**: Add emoji or icon components for better visual communication
4. **Hierarchy**: Use different sizes and variants to establish visual hierarchy
5. **Accessibility**: Always include proper ARIA labels when needed
6. **Performance**: Don't overuse 3D effects - reserve them for important actions

---

## Common Use Cases

### Landing Page CTAs
```tsx
<Motion3DButton variant="lift" color="green" size="lg">
  Start Free Trial
</Motion3DButton>
```

### Form Actions
```tsx
<FramerMotion3DButton variant="spring" color="blue" type="submit">
  Submit Form
</FramerMotion3DButton>
```

### Card Actions
```tsx
<GSAP3DButton variant="cube" color="purple" size="sm">
  Learn More
</GSAP3DButton>
```

### Modal Actions
```tsx
<div className="flex gap-4 justify-end">
  <Motion3DButton variant="press" color="gray" onClick={handleCancel}>
    Cancel
  </Motion3DButton>
  <Motion3DButton variant="lift" color="blue" onClick={handleConfirm}>
    Confirm
  </Motion3DButton>
</div>
```

### Pricing Page Buttons
```tsx
<GSAP3DButton variant="neon" color="green" size="lg" className="w-full">
  Choose Pro Plan
</GSAP3DButton>
```

---

## Performance Notes

- All buttons are optimized for performance
- CSS-based animations (Motion3D) are the lightest
- GSAP buttons require GSAP library (already installed)
- Framer Motion buttons use spring physics (already installed)
- Consider using CSS-based variants for simpler use cases

---

## Browser Support

All modern browsers that support:
- CSS Grid & Flexbox
- CSS Transforms (3D)
- CSS Gradients
- ES6+ JavaScript

Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
