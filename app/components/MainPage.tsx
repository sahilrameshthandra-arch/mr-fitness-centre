"use client";

import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { TrustStats } from "./TrustStats";
import { Goals } from "./Goals";
import { Training, Programs, Facilities } from "./Training";
import { WhyUs } from "./WhyUs";
import { Reviews } from "./Reviews";
import { Trainers } from "./Trainers";
import { Gallery } from "./Gallery";
import { FreeTrial } from "./FreeTrial";
import { Contact } from "./Contact";
import { FAQSection } from "./FAQ";
import { Footer } from "./Footer";

export function MainPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        <Hero />
        <TrustStats />
        <Goals />
        <Training />
        <Programs />
        <Facilities />
        <WhyUs />
        <Reviews />
        <Trainers />
        <Gallery />
        <FreeTrial />
        <Contact />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}