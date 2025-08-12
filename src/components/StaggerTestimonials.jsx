"use client"

import React, { useState, useEffect } from 'react';

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
    testimonial: "Yu Law Firm provided exceptional representation during my divorce. Their compassionate approach made a difficult time bearable.",
    by: "Sarah M., Houston",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "I'm confident my family's future is secure thanks to Yu Law Firm's expert estate planning services.",
    by: "Robert K., Dallas",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "I was lost in the immigration process before I found Yu Law Firm. Can't thank them enough for their guidance!",
    by: "Maria L., Austin",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "Yu Law Firm's business law expertise made our company formation seamless. Can't recommend them enough!",
    by: "David C., San Antonio",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars for their personal injury representation, I'd give 12.",
    by: "Jennifer R., Fort Worth",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND YU LAW FIRM!!!! They saved us countless hours and stress.",
    by: "Michael T., El Paso",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing to hire a lawyer, but now that we're with Yu Law Firm, we're never going back.",
    by: "Lisa W., Arlington",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "I would be lost without Yu Law Firm's detailed legal analysis. The value they provide is EASILY 100X what we paid.",
    by: "James P., Plano",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "Yu Law Firm is just the best legal representation. Period.",
    by: "Amanda S., Irving",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "I switched to Yu Law Firm 3 years ago and never looked back. Outstanding service every time.",
    by: "Carlos M., Garland",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a law firm like Yu Law Firm for YEARS. So glad I finally found one!",
    by: "Patricia H., Grand Prairie",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 11,
    testimonial: "Their approach is so clear and straightforward, we understood our legal options in minutes.",
    by: "Thomas B., McKinney",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 12,
    testimonial: "Yu Law Firm's client support is unparalleled. They're always there when we need them most.",
    by: "Michelle D., Frisco",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 13,
    testimonial: "The results we've seen since hiring Yu Law Firm are off the charts! Highly recommended.",
    by: "Kevin J., Richardson",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 14,
    testimonial: "Yu Law Firm has revolutionized how we handle our legal matters. It's a game-changer!",
    by: "Nicole A., Lewisville",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 15,
    testimonial: "The comprehensive approach of Yu Law Firm is impressive. They handle everything seamlessly.",
    by: "Ryan G., Carrollton",
    imgSrc: "https://i.pravatar.cc/150?img=16"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how Yu Law Firm stays current with legal developments. They're always one step ahead.",
    by: "Stephanie F., Denton",
    imgSrc: "https://i.pravatar.cc/150?img=17"
  },
  {
    tempId: 17,
    testimonial: "The value we've received from Yu Law Firm is incredible. Worth every penny and more.",
    by: "Brandon L., Allen",
    imgSrc: "https://i.pravatar.cc/150?img=18"
  },
  {
    tempId: 18,
    testimonial: "Yu Law Firm's expertise is so comprehensive, yet easy to understand. It's the perfect balance.",
    by: "Rachel N., Mesquite",
    imgSrc: "https://i.pravatar.cc/150?img=19"
  },
  {
    tempId: 19,
    testimonial: "We've tried other law firms, but Yu Law Firm stands out in terms of reliability and results.",
    by: "Christopher E., Cedar Hill",
    imgSrc: "https://i.pravatar.cc/150?img=20"
  }
];

const TestimonialCard = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
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
        height: cardSize,
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
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white"
        }}
      />
      <StarRating rating={5} isCenter={isCenter} />
      <h3 className={cn(
        "text-base sm:text-xl font-medium font-acherus",
        isCenter ? "text-white" : "text-gray-900"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic font-acherus",
        isCenter ? "text-white/90" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials = () => {
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
