"use client"

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

const testimonials = [
  {
    tempId: 0,
    testimonial: "Liezyl helped me after a very traumatic car accident. She set me up right away with excellent medical care and was very attentive to me and my needs. I would recommend her time and time again!...",
    by: "Hannah R.",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "She is truly an outstanding attorney and advocate. I had the pleasure of working with Attorney Liezyl from Yu Law Firm, and I cannot speak highly enough of her professionalism, dedication, and expertise...",
    by: "Yohannis G.",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Made me feel like they were truly on my side and cared. I was fortunate enough to work with Yu Law Firm and Attorney Liezyl after a car accident, and they were truly incredible...",
    by: "Erika C.",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "Impressed by the dedication and professionalism of Atty Liezyl. I am truly impressed by the dedication and professionalism of Atty. Liezyl Marasigan from Yu Law Firm. She responded quickly to my call and immediately took action on my concern...",
    by: "Lynne",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "I 100% recommend for other small business. The Yu Law Firm was so helpful with helping me create and draft a contract that was not only to best interest of my clients but for the protection and well being of my small business...",
    by: "Tanya F.",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "I will definitely be a returning client. A great law firm with exceptional customer service. Attorney Masinag is prompt to return phone calls and e-mails with personalized attention and detail to my needs...",
    by: "T. Tovar",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Yu Law Firm has made my case trouble-free that I didn't have to worry about a single thing throughout the process as a first timer of having to deal with legal experts about my accident in my previous workplace...",
    by: "Arian H.",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Atty. Liezyl was very helpful and knowledgeable in the process of creating and drafting a business contract. Not only did she find a way to include my primary focal points but also prompted me...",
    by: "Tanya A.",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "Attorney Liezyl exhibited a profound understanding of family law and its complexities. Her expertise was apparent in her strategic handling of my case, ensuring that every decision made was well-informed and in my best interest...",
    by: "Christina D.",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
];

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize,
  t
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
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
      <h3 className={cn(
        "text-base sm:text-xl font-medium font-acherus",
        isCenter ? "text-white" : "text-gray-900"
      )}>
        "{t(`testimonials.items.${testimonial.tempId}.text`, testimonial.testimonial)}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-acherus",
        isCenter ? "text-white/90" : "text-gray-600"
      )}>
        - {t(`testimonials.items.${testimonial.tempId}.by`, testimonial.by)}
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
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
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
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
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
