export interface SidebarItem {
  name: string;
  href: string;
  badge?: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarSections: SidebarSection[] = [
  {
    title: "Getting started",
    items: [
      { name: "Introduction", href: "/docs" },
      { name: "Installation", href: "/docs#installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Button", href: "/docs/components/button" },
      { name: "Ripple Button", href: "/docs/components/ripple-button" },
      { name: "Water Fill Button", href: "/docs/components/water-fill-button" },
      { name: "Orbit Logo Button", href: "/docs/components/orbit-logo-button" },
      { name: "Animated Button", href: "/docs/components/animated-button" },
      { name: "3D Buttons", href: "/docs/components/3d-buttons" },
      { name: "Lift 3D Button", href: "/docs/components/3d-buttons/lift" },
      { name: "Cube 3D Button", href: "/docs/components/3d-buttons/cube" },
      { name: "Spring 3D Button", href: "/docs/components/3d-buttons/spring" },
      { name: "3D Buttons Showcase", href: "/docs/components/3d-buttons/showcase" },
      { name: "Card", href: "/docs/components/card" },
      { name: "Input", href: "/docs/components/input" },
      { name: "Badge", href: "/docs/components/badge" },
      { name: "Loader", href: "/docs/components/loader" },
      { name: "Loading Screen", href: "/docs/components/loading-screen" },
      { name: "Pricing", href: "/docs/components/pricing" },
      { name: "Timeline", href: "/docs/components/timeline" },
      { name: "Payment Status", href: "/docs/components/payment-status-pill" },
      { name: "Smart Wrap Text", href: "/docs/components/smart-wrap-text" },
      { name: "Tech Marquee", href: "/docs/components/tech-marquee" },
    ],
  },
  {
    title: "Motion",
    items: [
      { name: "Floating Dock", href: "/docs/components/floating-dock" },
      { name: "Text Reveal", href: "/docs/components/text-reveal" },
      { name: "Scroll Reveal", href: "/docs/components/scroll-reveal" },
      { name: "Flip Card", href: "/docs/components/flip-card" },
      { name: "Gradient Text", href: "/docs/components/gradient-text" },
      { name: "Spotlight Card", href: "/docs/components/spotlight-card" },
      { name: "3D Image Ring", href: "/docs/components/3d-image-ring" },
      { name: "Carousel", href: "/docs/components/carousel" },
      { name: "Page Transition", href: "/docs/components/page-transition" },
      { name: "SVG Path Transition", href: "/docs/components/svg-path-page-transition" },
    ],
  },
  {
    title: "GSAP",
    items: [
      { name: "GSAP Button", href: "/docs/components/gsap-button" },
      { name: "GSAP Card", href: "/docs/components/gsap-card" },
      { name: "GSAP Input", href: "/docs/components/gsap-input" },
      { name: "GSAP Badge", href: "/docs/components/gsap-badge" },
      { name: "GSAP Alert", href: "/docs/components/gsap-alert" },
      { name: "GSAP Modal", href: "/docs/components/gsap-modal" },
      { name: "Auth Card", href: "/docs/components/auth-card" },
      { name: "Mouse Tracker", href: "/docs/components/mouse-tracker" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { name: "Floating Navbar", href: "/docs/components/navbar-floating" },
      { name: "Glass Navbar", href: "/docs/components/navbar-glass" },
      { name: "Mega Navbar", href: "/docs/components/navbar-mega" },
    ],
  },
];

export const sidebarItems = sidebarSections;
