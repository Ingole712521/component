"use client";

import React from "react";

interface LoaderProps {
  className?: string;
}

export default function Loader({ className = "" }: LoaderProps) {
  return (
    <>
      <style>{`
        .equalizer-loader-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .equalizer-loader {
          display: inline-flex;
          align-items: flex-end;
          gap: 8px;
        }

        .equalizer-bar {
          width: 18px;
          height: 26px;
          border-radius: 6px;
          background: #ff7a1a;
          transform-origin: bottom center;
          animation: equalizer-pulse 1s ease-in-out infinite;
        }

        .equalizer-bar:nth-child(1) {
          background: #ff9100;
          animation-duration: 0.9s;
          animation-delay: 0s;
        }

        .equalizer-bar:nth-child(2) {
          background: #ff7a1a;
          animation-duration: 1.05s;
          animation-delay: 0.1s;
        }

        .equalizer-bar:nth-child(3) {
          background: #ff5c3c;
          animation-duration: 0.95s;
          animation-delay: 0.2s;
        }

        .equalizer-bar:nth-child(4) {
          background: #ff3f5e;
          animation-duration: 1.1s;
          animation-delay: 0.3s;
        }

        .equalizer-bar:nth-child(5) {
          background: #ff2d7a;
          animation-duration: 0.9s;
          animation-delay: 0.4s;
        }

        @keyframes equalizer-pulse {
          0%, 100% {
            transform: scaleY(0.45);
          }
          40% {
            transform: scaleY(1);
          }
          60% {
            transform: scaleY(0.7);
          }
        }
      `}</style>

      <div className={`equalizer-loader-wrapper ${className}`}>
        <div className="equalizer-loader">
          <div className="equalizer-bar" />
          <div className="equalizer-bar" />
          <div className="equalizer-bar" />
          <div className="equalizer-bar" />
          <div className="equalizer-bar" />
        </div>
      </div>
    </>
  );
}

