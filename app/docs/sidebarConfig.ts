export interface SidebarItem {
  name: string;
  href: string;
  active?: boolean;
  version?: string;
  badge?: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarItems: SidebarSection[] = [
  {
    title: "Getting Started",
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
      { name: "Pricing", href: "/docs/components/pricing", badge: "NEW" },
      { name: "Water Fill Button", href: "/docs/components/water-fill-button", badge: "NEW" },
      { name: "Orbit Logo Button", href: "/docs/components/orbit-logo-button", badge: "NEW" },
      { name: "Card", href: "/docs/components/card" },
      { name: "Loader", href: "/docs/components/loader", badge: "NEW" },
      { name: "Input", href: "/docs/components/input" },
      { name: "Badge", href: "/docs/components/badge" },
      { name: "Timeline", href: "/docs/components/timeline" },
      { name: "Payment Status", href: "/docs/components/payment-status-pill", badge: "NEW" },
      { name: "Tech Marquee", href: "/docs/components/tech-marquee", badge: "NEW" },
      { name: "Lift 3D Button", href: "/docs/components/3d-buttons/lift", badge: "NEW" },
      { name: "Cube 3D Button", href: "/docs/components/3d-buttons/cube", badge: "NEW" },
      { name: "Spring 3D Button", href: "/docs/components/3d-buttons/spring", badge: "NEW" },
      { name: "3D Buttons Showcase", href: "/docs/components/3d-buttons/showcase", badge: "NEW" },
      { name: "Page Transition", href: "/docs/components/page-transition", badge: "NEW" },
    ],
  },
  {
    title: "Animations",
    items: [
      { name: "Floating Dock", href: "/docs/components/floating-dock" },
      { name: "Text Reveal", href: "/docs/components/text-reveal" },
      { name: "Scroll Reveal", href: "/docs/components/scroll-reveal", badge: "NEW" },
      { name: "Flip Card", href: "/docs/components/flip-card" },
      { name: "Gradient Text", href: "/docs/components/gradient-text" },
      { name: "Spotlight Card", href: "/docs/components/spotlight-card" },
      { name: "3D Image Ring", href: "/docs/components/3d-image-ring", badge: "NEW" },
      { name: "Animated Button", href: "/docs/components/animated-button", badge: "NEW" },
      { name: "Page Transition", href: "/docs/components/page-transition", badge: "NEW" },
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
      { name: "Mouse Tracker", href: "/docs/components/mouse-tracker", badge: "NEW" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { name: "Floating Navbar", href: "/docs/components/navbar-floating" },
      { name: "Glass Navbar", href: "/docs/components/navbar-glass" },
    ],
  },
];

