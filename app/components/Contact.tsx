"use client";

import { PhoneIcon, MessageCircleIcon, MailIcon, MapPinIcon, ClockIcon, ChevronRightIcon } from "./Icons";
import { Button, LinkButton } from "./Button";
import { BUSINESS, FAQ } from "@/app/lib/constants";

export function Contact() {
  return (
    <section
      id="contact"
      className="section bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <header className="section-header mb-12 md:mb-16">
          <span className="label">Get in Touch</span>
          <h2 id="contact-heading">Visit or Contact Us</h2>
          <p>We'd love to hear from you. Drop by, call, or message — whatever works best for you.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="card p-6 md:p-8">
              <h3 className="font-display text-xl font-normal text-foreground mb-6">Visit Us</h3>
              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <MapPinIcon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{BUSINESS.name}</p>
                    <p className="text-muted-foreground">{BUSINESS.address.street}</p>
                    <p className="text-muted-foreground">{BUSINESS.address.landmark}</p>
                    <p className="text-muted-foreground">{BUSINESS.address.city} {BUSINESS.address.pincode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-6 border-t border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <ClockIcon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Operating Hours</p>
                    <div className="text-sm text-muted-foreground space-y-1 mt-1">
                      <p>Monday – Saturday: {BUSINESS.hours.weekdays}</p>
                      <p>Sunday: {BUSINESS.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </address>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <LinkButton
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                variant="call"
                className="h-20 justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <PhoneIcon size={24} />
                  <span>Call Now</span>
                </div>
              </LinkButton>
              <LinkButton
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                variant="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 justify-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <MessageCircleIcon size={24} />
                  <span>WhatsApp</span>
                </div>
              </LinkButton>
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <h3 className="font-display text-xl font-normal text-foreground mb-6">Send a Message</h3>
            <form className="space-y-5" action="#" method="POST">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 9xxxxxxxxx"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="membership">Membership Enquiry</option>
                  <option value="trial">Free Trial Booking</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
                <ChevronRightIcon size={18} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative rounded-3xl overflow-hidden">
            <iframe
              title="MR Fitness Center Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.8298!3d19.0012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97f34b5b5b5%3A0x123456789!2sMR%20Fitness%20Center!5e0!3m2!1sen!2sin!4v123456789!5m2!1sen!2sin`}
              className="w-full h-96 md:h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}