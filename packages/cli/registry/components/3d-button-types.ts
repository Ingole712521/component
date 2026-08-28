export interface Motion3DButtonProps {
  children: React.ReactNode;
  variant?: "lift" | "press" | "slide" | "flip" | "glow";
  color?: "blue" | "purple" | "green" | "orange" | "red";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface GSAP3DButtonProps {
  children: React.ReactNode;
  variant?: "cube" | "neon" | "isometric" | "extruded";
  color?: "blue" | "purple" | "green" | "orange" | "red";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface FramerMotion3DButtonProps {
  children: React.ReactNode;
  variant?: "spring" | "depth" | "rotate";
  color?: "blue" | "purple" | "green" | "orange" | "red";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface CSSModuleClasses {
  [key: string]: string;
}
