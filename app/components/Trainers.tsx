"use client";

import Image from "next/image";
import { InstagramIcon, FacebookIcon, ChevronRightIcon } from "./Icons";
import { Button } from "./Button";
import { TRAINERS } from "@/app/lib/constants";

export function Trainers() {
  return (
    <section
      id="trainers"
      className="section bg-muted/30"
      aria-labelledby="trainers-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Our Coaches</span>
          <h2 id="trainers-heading">Meet Your Trainers</h2>
          <p>Certified professionals dedicated to your success. Expertise, empathy, and results.</p>
        </header>

        {TRAINERS.length === 0 || !TRAINERS[0].photo ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
              <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-3">
              Trainer Profiles Coming Soon
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We're currently updating our trainer profiles with photos, certifications, and specialties. Check back soon!
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Free Trial to Meet Them
              <ChevronRightIcon size={18} />
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRAINERS.map((trainer, index) => (
              <article
                key={trainer.id}
                className="card group overflow-hidden animate-fade-in animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {trainer.photo ? (
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={trainer.photo}
                      alt={trainer.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="8" r="5"/><path d="M20 21c0-3.07-1.63-5.58-4-7.08"/><path d="M4 21c0-3.07 1.63-5.58 4-7.08"/></svg>
                      </div>
                      <p className="text-muted-foreground">Photo coming soon</p>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-xl font-normal text-foreground mb-1">{trainer.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{trainer.role}</p>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-3">{trainer.bio}</p>
                  
                  {trainer.specialties && trainer.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Specialties">
                      {trainer.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          role="listitem"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}

                  {trainer.certifications && trainer.certifications.length > 0 && (
                    <div className="mb-5">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Certifications</p>
                      <div className="flex flex-wrap gap-1.5">
                        {trainer.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2.5 py-1 text-xs font-medium rounded bg-muted text-muted-foreground"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {trainer.social.instagram && (
                      <a
                        href={trainer.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={`${trainer.name} on Instagram`}
                      >
                        <InstagramIcon size={20} />
                      </a>
                    )}
                    {trainer.social.facebook && (
                      <a
                        href={trainer.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={`${trainer.name} on Facebook`}
                      >
                        <FacebookIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
          >
            Train With Our Experts
            <ChevronRightIcon size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}