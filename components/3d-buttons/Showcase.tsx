"use client";

import React from "react";
import {
  Motion3DButton,
  GSAP3DButton,
  FramerMotion3DButton,
} from "./index";

export default function Button3DShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            3D Button Component Library
          </h1>
          <p className="text-xl text-gray-400">
            A collection of stunning 3D animated buttons
          </p>
        </header>

        {/* Motion3D Buttons Section */}
        <section className="mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-2">
              Motion3D Buttons
            </h2>
            <p className="text-gray-400 mb-8">
              CSS-based 3D animations with smooth transitions
            </p>

            {/* Lift Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Lift Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <Motion3DButton variant="lift" color="blue" size="sm">
                  Small
                </Motion3DButton>
                <Motion3DButton variant="lift" color="purple" size="md">
                  Medium
                </Motion3DButton>
                <Motion3DButton variant="lift" color="green" size="lg">
                  Large
                </Motion3DButton>
                <Motion3DButton variant="lift" color="orange" size="md">
                  Orange
                </Motion3DButton>
                <Motion3DButton variant="lift" color="red" size="md">
                  Red
                </Motion3DButton>
              </div>
            </div>

            {/* Press Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Press Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <Motion3DButton variant="press" color="blue" size="md">
                  Press Me
                </Motion3DButton>
                <Motion3DButton variant="press" color="purple" size="md">
                  Click Here
                </Motion3DButton>
                <Motion3DButton variant="press" color="green" size="md">
                  Submit
                </Motion3DButton>
              </div>
            </div>

            {/* Slide Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Slide Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <Motion3DButton variant="slide" color="blue" size="md">
                  Slide Effect
                </Motion3DButton>
                <Motion3DButton variant="slide" color="purple" size="lg">
                  Hover Me
                </Motion3DButton>
              </div>
            </div>

            {/* Flip Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Flip Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <Motion3DButton variant="flip" color="orange" size="md">
                  Flip 3D
                </Motion3DButton>
                <Motion3DButton variant="flip" color="green" size="md">
                  Amazing!
                </Motion3DButton>
              </div>
            </div>

            {/* Glow Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Glow Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <Motion3DButton variant="glow" color="blue" size="md">
                  Glowing Blue
                </Motion3DButton>
                <Motion3DButton variant="glow" color="purple" size="md">
                  Glowing Purple
                </Motion3DButton>
                <Motion3DButton variant="glow" color="red" size="lg">
                  Glowing Red
                </Motion3DButton>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Disabled State
              </h3>
              <div className="flex flex-wrap gap-4">
                <Motion3DButton variant="lift" color="blue" disabled size="md">
                  Disabled
                </Motion3DButton>
                <Motion3DButton variant="press" color="purple" disabled size="md">
                  Cannot Click
                </Motion3DButton>
              </div>
            </div>
          </div>
        </section>

        {/* GSAP3D Buttons Section */}
        <section className="mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-2">
              GSAP3D Buttons
            </h2>
            <p className="text-gray-400 mb-8">
              Powered by GSAP for advanced 3D transformations
            </p>

            {/* Cube Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Cube Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <GSAP3DButton variant="cube" color="blue" size="sm">
                  Cube
                </GSAP3DButton>
                <GSAP3DButton variant="cube" color="purple" size="md">
                  3D Cube
                </GSAP3DButton>
                <GSAP3DButton variant="cube" color="green" size="lg">
                  Large Cube
                </GSAP3DButton>
              </div>
            </div>

            {/* Neon Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Neon Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <GSAP3DButton variant="neon" color="blue" size="md">
                  Neon Blue
                </GSAP3DButton>
                <GSAP3DButton variant="neon" color="purple" size="md">
                  Neon Purple
                </GSAP3DButton>
                <GSAP3DButton variant="neon" color="green" size="md">
                  Neon Green
                </GSAP3DButton>
              </div>
            </div>

            {/* Isometric Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Isometric Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <GSAP3DButton variant="isometric" color="orange" size="md">
                  Isometric
                </GSAP3DButton>
                <GSAP3DButton variant="isometric" color="purple" size="lg">
                  3D View
                </GSAP3DButton>
              </div>
            </div>

            {/* Extruded Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Extruded Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <GSAP3DButton variant="extruded" color="blue" size="md">
                  Extruded
                </GSAP3DButton>
                <GSAP3DButton variant="extruded" color="red" size="md">
                  Deep 3D
                </GSAP3DButton>
              </div>
            </div>
          </div>
        </section>

        {/* Framer Motion Buttons Section */}
        <section className="mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-2">
              Framer Motion 3D Buttons
            </h2>
            <p className="text-gray-400 mb-8">
              Spring physics and smooth animations with Framer Motion
            </p>

            {/* Spring Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Spring Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <FramerMotion3DButton variant="spring" color="blue" size="sm">
                  Bouncy
                </FramerMotion3DButton>
                <FramerMotion3DButton variant="spring" color="purple" size="md">
                  Springy
                </FramerMotion3DButton>
                <FramerMotion3DButton variant="spring" color="green" size="lg">
                  Super Spring
                </FramerMotion3DButton>
              </div>
            </div>

            {/* Depth Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Depth Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <FramerMotion3DButton variant="depth" color="blue" size="md">
                  Deep 3D
                </FramerMotion3DButton>
                <FramerMotion3DButton variant="depth" color="orange" size="md">
                  Z-Axis
                </FramerMotion3DButton>
              </div>
            </div>

            {/* Rotate Variant */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">
                Rotate Variant
              </h3>
              <div className="flex flex-wrap gap-4">
                <FramerMotion3DButton variant="rotate" color="purple" size="md">
                  Rotating
                </FramerMotion3DButton>
                <FramerMotion3DButton variant="rotate" color="green" size="md">
                  3D Rotate
                </FramerMotion3DButton>
              </div>
            </div>
          </div>
        </section>

        {/* Mixed Usage Examples */}
        <section className="mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-2">
              Mixed Usage Examples
            </h2>
            <p className="text-gray-400 mb-8">
              Different button types used together
            </p>

            <div className="flex flex-wrap gap-6 items-center justify-center">
              <Motion3DButton variant="lift" color="blue" size="lg">
                Primary Action
              </Motion3DButton>
              <GSAP3DButton variant="cube" color="purple" size="lg">
                Secondary Action
              </GSAP3DButton>
              <FramerMotion3DButton variant="spring" color="green" size="lg">
                Tertiary Action
              </FramerMotion3DButton>
            </div>

            <div className="flex flex-wrap gap-6 items-center justify-center mt-8">
              <Motion3DButton variant="glow" color="red" size="md">
                ⚠️ Danger
              </Motion3DButton>
              <GSAP3DButton variant="neon" color="blue" size="md">
                ✨ Special
              </GSAP3DButton>
              <FramerMotion3DButton variant="depth" color="orange" size="md">
                🎯 Focus
              </FramerMotion3DButton>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-16">
          <p className="text-lg">
            Created with ❤️ using React, TypeScript, Tailwind CSS, GSAP & Framer Motion
          </p>
          <p className="mt-2">
            Import from: <code className="bg-gray-800 px-3 py-1 rounded">@/components/3d-buttons</code>
          </p>
        </footer>
      </div>
    </div>
  );
}
