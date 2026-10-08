"use client";

import { useState } from "react";
import { CheckIcon, MessageCircleIcon, PhoneIcon, MailIcon, MapPinIcon, LoaderIcon, ArrowRightIcon } from "./Icons";
import { Button, LinkButton } from "./Button";
import { BUSINESS } from "@/app/lib/constants";

export function FreeTrial() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    preferredTime: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.goal) newErrors.goal = "Please select a goal";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In production, replace with actual API call
    // const response = await fetch('/api/trial', { method: 'POST', body: JSON.stringify(formData) });
    
    setFormState("success");
    setFormData({ name: "", phone: "", email: "", goal: "", preferredTime: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (formState === "success") {
    return (
      <section id="trial" className="section bg-background" aria-labelledby="trial-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mb-6">
              <CheckIcon size={32} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-4">
              Trial Booked Successfully!
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Thank you! Our team will contact you within 24 hours to confirm your free trial session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setFormState("idle")}
              >
                Book Another
              </Button>
              <LinkButton
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleIcon size={20} />
                WhatsApp Now
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="trial" className="section bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" aria-labelledby="trial-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <header className="section-header lg:text-left mb-10 md:mb-12">
              <span className="label">Free Trial</span>
              <h2 id="trial-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground">
                Experience MR Fitness Center
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Book your complimentary workout session. No pressure, no commitment — just experience the difference.
              </p>
            </header>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <CheckIcon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Complimentary Session</h3>
                  <p className="text-muted-foreground">Full access to facilities and equipment during your trial</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <CheckIcon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Trainer Consultation</h3>
                  <p className="text-muted-foreground">Meet a certified trainer to discuss your goals and get a mini-assessment</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <CheckIcon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">No Obligation</h3>
                  <p className="text-muted-foreground">No pressure to join. Experience first, decide later.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <CheckIcon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Timing</h3>
                  <p className="text-muted-foreground">Available 6 AM – 10 PM, 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                variant="call"
                size="lg"
                className="flex-1 min-w-[200px] justify-center"
              >
                <PhoneIcon size={20} />
                Call to Book
              </LinkButton>
              <LinkButton
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                variant="whatsapp"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] justify-center"
              >
                <MessageCircleIcon size={20} />
                WhatsApp to Book
              </LinkButton>
            </div>
          </div>

          <div className="relative">
            <div className="card p-6 md:p-8 sticky top-24">
              <h3 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-2">Book Your Free Trial</h3>
              <p className="text-muted-foreground mb-6">Fill the form and we'll confirm your slot within 2 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.name ? "border-red-500" : "border-border hover:border-primary/50"
                    }`}
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={formState === "loading"}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.phone ? "border-red-500" : "border-border hover:border-primary/50"
                    }`}
                    placeholder="+91 9xxxxxxxxx"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    disabled={formState === "loading"}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.email ? "border-red-500" : "border-border hover:border-primary/50"
                    }`}
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={formState === "loading"}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-foreground mb-2">
                    Primary Goal <span className="text-primary">*</span>
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.goal ? "border-red-500" : "border-border hover:border-primary/50"
                    }`}
                    aria-invalid={errors.goal ? "true" : "false"}
                    aria-describedby={errors.goal ? "goal-error" : undefined}
                    disabled={formState === "loading"}
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Lose Weight</option>
                    <option value="muscle-gain">Build Muscle</option>
                    <option value="strength">Strength & Conditioning</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="group-fitness">Group Fitness</option>
                    <option value="general">General Fitness</option>
                  </select>
                  {errors.goal && (
                    <p id="goal-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.goal}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    disabled={formState === "loading"}
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Early Morning (6-8 AM)</option>
                    <option value="mid-morning">Mid Morning (8-11 AM)</option>
                    <option value="afternoon">Afternoon (12-4 PM)</option>
                    <option value="evening">Evening (5-8 PM)</option>
                    <option value="late-evening">Late Evening (8-10 PM)</option>
                    <option value="flexible">Flexible / Any Time</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Any injuries, medical conditions, or specific requests?"
                    disabled={formState === "loading"}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <>
                      <LoaderIcon size={20} className="animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      Book Free Trial
                      <ArrowRightIcon size={18} />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted by MR Fitness Center. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}