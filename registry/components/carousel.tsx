"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlideProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export function CarouselSlide({
  children,
  className = "",
  isActive = false,
}: CarouselSlideProps) {
  return (
    <motion.div
      className={`relative flex-shrink-0 ${className}`}
      animate={{
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      }}
    >
      <div
        className={`
          w-full h-full rounded-2xl overflow-hidden
          transition-shadow duration-300
          ${
            isActive
              ? "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5),0_10px_30px_-10px_rgba(0,0,0,0.3)]"
              : "shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)]"
          }
        `}
      >
        {children}
      </div>
    </motion.div>
  );
}

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  slideWidth?: number;
  slideHeight?: number;
  gap?: number;
  className?: string;
}

export function Carousel({
  items,
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  slideWidth = 300,
  slideHeight = 400,
  gap = 20,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = items.length;
  const extendedItems = [...items, ...items, ...items];

  const getSlidePosition = useCallback(
    (index: number) => {
      const centerOffset = (slideWidth + gap) * (totalSlides + index);
      return centerOffset;
    },
    [slideWidth, gap, totalSlides]
  );

  const goToSlide = useCallback(
    (index: number) => {
      let newIndex = index;
      if (newIndex < 0) {
        newIndex = totalSlides - 1;
      } else if (newIndex >= totalSlides) {
        newIndex = 0;
      }
      setCurrentIndex(newIndex);
    },
    [totalSlides]
  );

  const handlePrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const threshold = slideWidth / 4;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500) {
      if (velocity > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    } else if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
  };

  useEffect(() => {
    if (autoPlay && !isDragging) {
      const interval = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isDragging, handleNext]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]);

  const calculateOffset = () => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const centerPosition = containerWidth / 2 - slideWidth / 2;
    return centerPosition - getSlidePosition(currentIndex);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ height: slideHeight + 60 }}
      >
        <motion.div
          className="flex items-center absolute"
          style={{
            gap: `${gap}px`,
            height: slideHeight,
            top: "30px",
          }}
          animate={{
            x: calculateOffset(),
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {extendedItems.map((item, index) => {
            const actualIndex = index % totalSlides;

            return (
              <CarouselSlide
                key={`${item.id}-${index}`}
                isActive={
                  index >= totalSlides &&
                  index < totalSlides * 2 &&
                  actualIndex === currentIndex
                }
                className="cursor-grab active:cursor-grabbing"
              >
                <div
                  style={{
                    width: slideWidth,
                    height: slideHeight,
                  }}
                >
                  {item.content}
                </div>
              </CarouselSlide>
            );
          })}
        </motion.div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={handlePrevious}
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              bg-white/10 backdrop-blur-sm
              border border-white/20
              flex items-center justify-center
              text-white
              hover:bg-white/20 hover:scale-110
              active:scale-95
              transition-all duration-200
              shadow-lg
            "
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              bg-white/10 backdrop-blur-sm
              border border-white/20
              flex items-center justify-center
              text-white
              hover:bg-white/20 hover:scale-110
              active:scale-95
              transition-all duration-200
              shadow-lg
            "
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    : "bg-white/30 hover:bg-white/50"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface CardSlideProps {
  title: string;
  description?: string;
  image?: string;
  gradient?: string;
  className?: string;
}

export function CardSlide({
  title,
  description,
  image,
  gradient = "from-zinc-800 to-zinc-900",
  className = "",
}: CardSlideProps) {
  return (
    <div
      className={`
        w-full h-full relative overflow-hidden rounded-2xl
        bg-gradient-to-br ${gradient}
        ${className}
      `}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-zinc-300 text-sm line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
}

export function ImageSlide({
  src,
  alt,
  overlay = true,
}: {
  src: string;
  alt: string;
  overlay?: boolean;
}) {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl bg-zinc-900">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      )}
    </div>
  );
}
