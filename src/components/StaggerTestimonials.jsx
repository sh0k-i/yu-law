"use client"

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import testimonialsData from '../data/testimonials.json';

const SQRT_5000 = Math.sqrt(5000);

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// ChevronLeft and ChevronRight icons as SVG components
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

// Star icon component
const StarIcon = ({ filled = true, className = "" }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

// Star rating component
const StarRating = ({ rating = 5, isCenter = false }) => (
  <div className="flex items-center gap-1 mb-3">
    {[1, 2, 3, 4, 5].map((star) => (
      <StarIcon
        key={star}
        filled={star <= rating}
        className={cn(
          "w-4 h-4",
          isCenter ? "text-yellow-300" : "text-yellow-500"
        )}
      />
    ))}
  </div>
);

// Transform JSON data to match component format
const testimonials = testimonialsData.map((item, index) => ({
  tempId: item.id,
  originalId: item.id,
  subject: item.subject,
  by: item.name,
  imgSrc: `https://i.pravatar.cc/150?img=${(index % 8) + 1}`
}));

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize,
  t,
  originalTestimonial
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 border-2 p-8 transition-all duration-500 ease-in-out cursor-pointer",
        isCenter 
          ? "z-10 text-white border-brand-red" 
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-brand-red/50 hover:shadow-[0_25px_50px_-12px_rgba(171,21,34,0.25)]"
      )}
      style={{
        width: cardSize,
        height: '350px',
        backgroundColor: isCenter ? '#AB1522' : 'white',
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #e5e7eb" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-200"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      {/* <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white"
        }}
      /> */}
      <StarRating rating={5} isCenter={isCenter} />
      <h3 
        className={cn(
          "text-lg sm:text-2xl font-lancea mb-4",
          isCenter ? "text-white" : "text-brand-black"
        )}
      >
        {testimonial.subject}
      </h3>
      
      {/* Read Review Button - Anchored at bottom above name */}
      <div className="absolute bottom-16 left-8 right-8">
        <Link
          to={`/reviews?review=${originalTestimonial.id}`}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-acherus font-medium transition-colors duration-200 border-b pb-1",
            isCenter 
              ? "text-white hover:text-white/80 border-white/30 hover:border-white" 
              : "text-brand-red hover:text-brand-red/80 border-brand-red/30 hover:border-brand-red"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          Read Full Review
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      <p className={cn(
        "absolute bottom-8 left-8 right-8 text-base font-acherus font-medium",
        isCenter ? "text-white/90" : "text-brand-gray"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials = () => {
  const { t } = useTranslation();
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random(), originalId: item.originalId });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random(), originalId: item.originalId });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-brand-cream/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        // Find original testimonial data for the link
        const originalTestimonial = testimonialsData.find(t => t.id === testimonial.originalId) || testimonialsData[index % testimonialsData.length];
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            originalTestimonial={originalTestimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
            t={t}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-brand-red hover:text-white hover:border-brand-red",
            "focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-brand-red hover:text-white hover:border-brand-red",
            "focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
