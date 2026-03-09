// Quick Start Guide - 3D Button Component Library
// Copy and paste this code into your page to get started!

import { 
  Motion3DButton, 
  GSAP3DButton, 
  FramerMotion3DButton 
} from "@/components/3d-buttons";

export default function QuickStartExample() {
  return (
    <div className="p-8 space-y-8">
      {/* Simple Examples */}
      <div className="flex gap-4">
        <Motion3DButton variant="lift" color="blue">
          Click Me
        </Motion3DButton>
        
        <GSAP3DButton variant="cube" color="purple">
          Hover Me
        </GSAP3DButton>
        
        <FramerMotion3DButton variant="spring" color="green">
          Try Me
        </FramerMotion3DButton>
      </div>

      {/* With Icons */}
      <div className="flex gap-4">
        <Motion3DButton variant="lift" color="blue" size="lg">
          <span>🚀</span> Launch
        </Motion3DButton>
        
        <GSAP3DButton variant="neon" color="purple" size="lg">
          <span>✨</span> Magic
        </GSAP3DButton>
        
        <FramerMotion3DButton variant="depth" color="orange" size="lg">
          <span>🎯</span> Target
        </FramerMotion3DButton>
      </div>

      {/* Different Sizes */}
      <div className="flex gap-4 items-center">
        <Motion3DButton variant="lift" color="blue" size="sm">
          Small
        </Motion3DButton>
        
        <Motion3DButton variant="lift" color="purple" size="md">
          Medium
        </Motion3DButton>
        
        <Motion3DButton variant="lift" color="green" size="lg">
          Large
        </Motion3DButton>
      </div>

      {/* All Color Variants */}
      <div className="flex gap-4 flex-wrap">
        <Motion3DButton variant="lift" color="blue">Blue</Motion3DButton>
        <Motion3DButton variant="lift" color="purple">Purple</Motion3DButton>
        <Motion3DButton variant="lift" color="green">Green</Motion3DButton>
        <Motion3DButton variant="lift" color="orange">Orange</Motion3DButton>
        <Motion3DButton variant="lift" color="red">Red</Motion3DButton>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Motion3DButton 
          variant="lift" 
          color="blue" 
          size="lg"
          onClick={() => alert("Clicked!")}
        >
          Submit
        </Motion3DButton>
        
        <GSAP3DButton 
          variant="extruded" 
          color="green" 
          size="lg"
          onClick={() => console.log("Saved!")}
        >
          Save Changes
        </GSAP3DButton>
        
        <FramerMotion3DButton 
          variant="spring" 
          color="red" 
          size="lg"
          onClick={() => console.log("Deleted!")}
        >
          Delete
        </FramerMotion3DButton>
      </div>

      {/* Disabled State */}
      <div className="flex gap-4">
        <Motion3DButton variant="lift" color="blue" disabled>
          Disabled
        </Motion3DButton>
        
        <GSAP3DButton variant="cube" color="purple" disabled>
          Cannot Click
        </GSAP3DButton>
        
        <FramerMotion3DButton variant="spring" color="green" disabled>
          Inactive
        </FramerMotion3DButton>
      </div>
    </div>
  );
}

// ============================================================================
// AVAILABLE VARIANTS:
// ============================================================================
// Motion3DButton: "lift" | "press" | "slide" | "flip" | "glow"
// GSAP3DButton: "cube" | "neon" | "isometric" | "extruded"
// FramerMotion3DButton: "spring" | "depth" | "rotate"
//
// COLORS: "blue" | "purple" | "green" | "orange" | "red"
// SIZES: "sm" | "md" | "lg"
// ============================================================================
