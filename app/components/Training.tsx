"use client";

import { ChevronRightIcon } from "./Icons";
import { Button } from "./Button";
import { SERVICES, PROGRAMS, FACILITIES } from "@/app/lib/constants";

const serviceIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  dumbbell: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v16"/><path d="M18 4v16"/><path d="M2 12h20"/><circle cx="6" cy="4" r="2"/><circle cx="18" cy="4" r="2"/><circle cx="6" cy="20" r="2"/><circle cx="18" cy="20" r="2"/></svg>,
  "heart-pulse": () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 12.21 3 7 7 0 0 0 3 12.79"/><path d="M21 3v7h-7"/><path d="M14 2l2 2 4-4"/><path d="M21 9v6h-6"/></svg>,
  zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  "boxing-glove": () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 10.5V6a6 6 0 0 0-12 0v4.5"/><path d="M10 16v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M14 14v4"/><path d="M8 16H4"/><path d="M16 16h4"/></svg>,
  music: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  leaf: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 6.1 17 2.9 17 2.9S11 8 11 12a7 7 0 0 1 0 8Z"/><path d="M2 12c0-3.5 2.5-7 7-7"/></svg>,
  "user-check": () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 22 9"/></svg>,
  scale: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="M7 12a5 5 0 0 1 10 0"/><path d="M5 18a3 3 0 0 1 6 0"/><path d="M19 18a3 3 0 0 1-6 0"/></svg>,
  "trending-up": () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  users: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  apple: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.5 2 5.73 3.87 4.08 6.5A6.5 6.5 0 0 0 2 12.5c0 3.6 2.4 6.6 5.5 7.89.07.03.14.05.21.07.13-.05.2-.07.27-.07C16.6 19.1 19 16.1 19 12.5a6.5 6.5 0 0 0-2.08-6 6.84 6.84 0 0 0-4.92-4.5A6.5 6.5 0 0 0 12 2z"/><path d="M12 6v3"/><path d="M10.5 14.5a2.5 2.5 0 0 1 3 0"/></svg>,
};

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const Icon = serviceIcons[service.icon] || serviceIcons.dumbbell;
  const isCoaching = service.category === "coaching";
  const isProgram = service.category === "program";
  const isGroup = service.category === "group";

  return (
    <article className="card group p-6 hover:bg-card">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{service.name}</h3>
      <p className="text-muted-foreground text-sm">{service.description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
        <span>Learn more</span>
        <ChevronRightIcon size={16} />
      </div>
      {(isCoaching || isProgram) && (
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">{isCoaching ? "Coaching" : "Program"}</span>
          {isGroup && <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent">Group</span>}
        </div>
      )}
    </article>
  );
}

function ProgramCard({ program }: { program: typeof PROGRAMS[0] }) {
  return (
    <article className="card p-6 md:p-8 relative overflow-hidden">
      {program.popular && (
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-display text-2xl font-normal text-foreground mb-1">{program.name}</h3>
        <p className="text-muted-foreground">Duration: {program.duration}</p>
      </div>
      <ul className="space-y-3 mb-8" role="list">
        {program.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
            <svg className="flex-shrink-0 mt-0.5 text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={program.popular ? "primary" : "outline"}
        className="w-full"
        onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
      >
        {program.cta}
        <ChevronRightIcon size={18} />
      </Button>
    </article>
  );
}

function FacilityItem({ facility }: { facility: typeof FACILITIES[0] }) {
  return (
    <article className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{facility.name}</h4>
        <p className="text-sm text-muted-foreground">{facility.description}</p>
      </div>
    </article>
  );
}

export function Training() {
  return (
    <section
      id="training"
      className="section bg-muted/30"
      aria-labelledby="training-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Training Options</span>
          <h2 id="training-heading">How You Want to Train</h2>
          <p>From strength to mobility, group energy to personal focus — we have the right format for you.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mb-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
          >
            View All Training Options
            <ChevronRightIcon size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section
      id="programs"
      className="section bg-background"
      aria-labelledby="programs-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Structured Programs</span>
          <h2 id="programs-heading">Result-Driven Programs</h2>
          <p>Science-backed training phases with nutrition, tracking, and expert coaching built in.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  return (
    <section
      id="facilities"
      className="section bg-muted/30"
      aria-labelledby="facilities-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Facilities</span>
          <h2 id="facilities-heading">Everything You Need</h2>
          <p>Modern equipment, dedicated zones, and premium amenities for a complete training experience.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FACILITIES.map((facility) => (
            <FacilityItem key={facility.name} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}