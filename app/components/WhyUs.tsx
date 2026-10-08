"use client";

import { DumbbellIcon, UserCheckIcon, UsersIcon, TargetIcon, ShieldIcon, AwardIcon, ChevronRightIcon } from "./Icons";
import { Button } from "./Button";

const features = [
  {
    icon: UserCheckIcon,
    title: "Expert Coaching",
    description: "Certified trainers who customize every session to your goals, correct your form, and keep you accountable.",
    highlight: "Personalized guidance",
  },
  {
    icon: DumbbellIcon,
    title: "Serious Equipment",
    description: "Commercial-grade strength machines, free weights up to 50kg, functional training tools, and cardio equipment.",
    highlight: "No waiting for machines",
  },
  {
    icon: TargetIcon,
    title: "Goal-Focused Programs",
    description: "Structured 12-24 week programs for weight loss, muscle gain, strength, and transformation with nutrition included.",
    highlight: "Measurable progress",
  },
  {
    icon: UsersIcon,
    title: "Supportive Community",
    description: "Train alongside motivated members in group classes or solo. The energy pushes you further than training alone.",
    highlight: "Positive atmosphere",
  },
  {
    icon: ShieldIcon,
    title: "Clean & Safe",
    description: "Spotless facility, sanitized equipment, spacious layout, and trainers always present for spotting and safety.",
    highlight: "Hygiene priority",
  },
  {
    icon: AwardIcon,
    title: "Proven Results",
    description: "4.9★ Google rating from 132+ reviews. Members consistently achieve their fitness goals with our guidance.",
    highlight: "Trusted by members",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="section bg-background"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Why MR Fitness Center</span>
          <h2 id="why-heading">More Than Just a Workout</h2>
          <p>We combine expert coaching, serious equipment, and a supportive environment to deliver real, lasting results.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="card p-6 md:p-8 group relative overflow-hidden animate-fade-in animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} aria-hidden="true" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-normal text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  <span>{feature.highlight}</span>
                  <ChevronRightIcon size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 relative rounded-3xl bg-gradient-to-r from-primary to-primary-hover p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-center opacity-10" aria-hidden="true" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-normal text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Book your complimentary trial workout. No pressure, no commitment — just experience what training at MR Fitness Center feels like.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open(`https://wa.me/919773432221`, "_blank")}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}