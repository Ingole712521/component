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
          gap: 10px;
        }

        .equalizer-bar {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: #ff7a1a;
          animation: equalizer-bounce 1s ease-in-out infinite;
        }

        .equalizer-bar:nth-child(1) {
          background: #ff9100;
          animation-delay: 0s;
        }

        .equalizer-bar:nth-child(2) {
          background: #ff7a1a;
          animation-delay: 0.08s;
        }

        .equalizer-bar:nth-child(3) {
          background: #ff5c3c;
          animation-delay: 0.16s;
        }

        .equalizer-bar:nth-child(4) {
          background: #ff3f5e;
          animation-delay: 0.24s;
        }

        .equalizer-bar:nth-child(5) {
          background: #ff2d7a;
          animation-delay: 0.32s;
        }

        @keyframes equalizer-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-18px);
          }
          60% {
            transform: translateY(-6px);
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

