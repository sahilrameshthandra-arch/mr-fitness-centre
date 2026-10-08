"use client";

import { StarIcon, UsersIcon, ClockIcon, AwardIcon, ShieldIcon, TargetIcon } from "./Icons";
import { BUSINESS } from "@/app/lib/constants";

const stats = [
  {
    icon: StarIcon,
    value: "4.9",
    suffix: "/5",
    label: "Google Rating",
    description: "Based on 132+ verified reviews",
  },
  {
    icon: UsersIcon,
    value: "132+",
    label: "Happy Members",
    description: "Real people, real results",
  },
  {
    icon: ClockIcon,
    value: "17",
    suffix: " hrs",
    label: "Daily Hours",
    description: "Mon-Sat 6AM-11PM, Sun 9AM-1PM",
  },
  {
    icon: AwardIcon,
    value: "10+",
    label: "Training Programs",
    description: "Strength, Cardio, CrossFit & more",
  },
  {
    icon: ShieldIcon,
    value: "100%",
    label: "Certified Trainers",
    description: "Expert guidance every session",
  },
  {
    icon: TargetIcon,
    value: "5",
    label: "Goal Categories",
    description: "Lose Weight, Build Muscle & more",
  },
];

export function TrustStats() {
  return (
    <section
      className="section-sm bg-muted/50 border-y border-border"
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center p-4 md:p-6 animate-fade-in animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary-light text-primary mx-auto mb-4">
                <stat.icon size={24} className="md:size-28" aria-hidden="true" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-normal text-foreground">
                {stat.value}
                <span className="font-sans text-xl md:text-2xl font-medium">{stat.suffix}</span>
              </div>
              <h3 className="font-semibold text-foreground mt-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}