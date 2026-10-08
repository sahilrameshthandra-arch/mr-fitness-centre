"use client";

import { ScaleIcon, DumbbellIcon, UserCheckIcon, ZapIcon, UsersIcon, ArrowRightIcon, CheckIcon } from "./Icons";
import { Button } from "./Button";
import { GOALS } from "@/app/lib/constants";

const goalIcons = {
  scale: ScaleIcon,
  dumbbell: DumbbellIcon,
  "user-check": UserCheckIcon,
  zap: ZapIcon,
  users: UsersIcon,
};

export function Goals() {
  return (
    <section
      id="goals"
      className="section bg-background"
      aria-labelledby="goals-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Choose Your Goal</span>
          <h2 id="goals-heading">What Do You Want to Achieve?</h2>
          <p>Every journey starts with a goal. Pick yours and we'll build the path together.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS.map((goal, index) => (
            <article
              key={goal.id}
              className={`relative card group ${goal.bgColor} ${goal.borderColor} p-6 md:p-8 overflow-hidden animate-fade-in animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {(() => {
                    const Icon = goalIcons[goal.icon as keyof typeof goalIcons];
                    return <Icon size={28} aria-hidden="true" />;
                  })()}
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-2">
                  {goal.title}
                </h3>
                <p className="text-primary font-medium mb-4">{goal.subtitle}</p>
                <p className="text-muted-foreground mb-6">{goal.description}</p>

                <ul className="space-y-3 mb-8" role="list">
                  {["Customized workout plan", "Nutrition guidance", "Progress tracking", "Expert support"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckIcon size={16} className="text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {goal.cta}
                  <ArrowRightIcon size={18} />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Not sure where to start?</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}