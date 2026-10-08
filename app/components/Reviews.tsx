"use client";

import { StarIcon, MessageCircleIcon, ChevronRightIcon, ChevronLeftIcon } from "./Icons";
import { REVIEWS } from "@/app/lib/constants";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section
      id="reviews"
      className="section bg-muted/30"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Member Stories</span>
          <h2 id="reviews-heading">Real People. Real Results.</h2>
          <p>Don't just take our word for it. Hear from members who transformed their fitness with us.</p>
        </header>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="region"
              aria-roledescription="carousel"
              aria-label="Member reviews"
            >
              {REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Review ${review.id} of ${REVIEWS.length}`}
                >
                  <div className="card p-8 md:p-10 h-full">
                    <div className="flex items-center gap-1 mb-6" role="img" aria-label={`${review.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          size={22}
                          className={i < review.rating ? "text-accent fill-current" : "text-muted-foreground/30"}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-xl">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MessageCircleIcon size={14} aria-hidden="true" />
                          {review.source} • {review.date}
                        </p>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors focus-visible-ring"
              aria-label="Previous review"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Review indicators">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-card border border-border hover:bg-muted transition-colors focus-visible-ring"
              aria-label="Next review"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {REVIEWS.length}+ reviews on Google • {BUSINESS.rating.google}★ average
            </p>
            <a
              href="#"
              className="text-primary font-semibold hover:underline flex items-center justify-center gap-1 mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read All Reviews
              <ChevronRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { BUSINESS } from "@/app/lib/constants";