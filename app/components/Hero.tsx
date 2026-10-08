"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon, MessageCircleIcon, PhoneIcon, CheckIcon } from "./Icons";
import { Button, LinkButton } from "./Button";
import { BUSINESS } from "@/app/lib/constants";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/50 via-transparent to-transparent dark:from-primary/10 dark:via-transparent" aria-hidden="true" />
      
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-center bg-cover opacity-5" aria-hidden="true" />

      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-semibold mb-6 animate-fade-in"
              style={{ animationDelay: "200ms" }}
              role="status"
              aria-live="polite"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              4.9★ Google Rating • 132 Reviews
            </div>

            <h1
              id="hero-title"
              className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-foreground mb-6 animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              Train With Purpose.
              <br />
              <span className="text-primary">Transform With Consistency.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "400ms" }}>
              Strength training, personal coaching and goal-focused fitness in Lower Parel, Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "500ms" }}>
              <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}>
                Book Free Trial
              </Button>
              <LinkButton
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <MessageCircleIcon size={20} />
                WhatsApp Us
              </LinkButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-8 animate-slide-up" style={{ animationDelay: "600ms" }}>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary-light text-primary">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">{BUSINESS.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary-light text-primary">
                  <MessageCircleIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">Instant Reply</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-slide-up" style={{ animationDelay: "700ms" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckIcon size={16} className="text-primary" />
                <span>No joining fee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckIcon size={16} className="text-primary" />
                <span>Free trial available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckIcon size={16} className="text-primary" />
                <span>Certified trainers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckIcon size={16} className="text-primary" />
                <span>6 AM – 11 PM</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "400ms" }}>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_50%,var(--primary)_50%)] opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl font-display text-primary/50">MR</div>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-2">Your Fitness Journey Starts Here</h3>
                  <p className="text-muted-foreground">Professional coaching • Modern equipment • Supportive community</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-center gap-4">
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-border min-w-[160px] text-center">
                  <p className="font-display text-4xl text-primary">4.9</p>
                  <p className="text-sm text-muted-foreground">Google Rating</p>
                </div>
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-border min-w-[160px] text-center">
                  <p className="font-display text-4xl text-primary">132+</p>
                  <p className="text-sm text-muted-foreground">Happy Members</p>
                </div>
                <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-border min-w-[160px] text-center">
                  <p className="font-display text-4xl text-primary">6AM</p>
                  <p className="text-sm text-muted-foreground">Early Opening</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-48 h-48 md:w-64 md:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowRightIcon size={24} className="text-muted-foreground/50" />
      </div>
    </section>
  );
}