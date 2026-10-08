"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneIcon, MessageCircleIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon, ChevronRightIcon } from "./Icons";
import { Button, LinkButton } from "./Button";
import { BUSINESS, FOOTER_LINKS, NAV_LINKS } from "@/app/lib/constants";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-white relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="relative container pt-16 pb-8 md:pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="#home"
              className="flex items-center gap-2 font-display text-3xl md:text-4xl font-normal text-white mb-6 focus-visible-ring rounded-lg px-2 py-1"
              aria-label={`${BUSINESS.name} - Home`}
            >
              <span className="text-primary">MR</span>
              <span>FITNESS</span>
            </Link>
            <p className="text-white/70 text-lg mb-8 max-w-xs">
              Expert coaching, serious equipment, and a supportive community in Lower Parel, Mumbai. Transform your fitness with purpose and consistency.
            </p>
            <div className="flex items-center gap-4">
              {BUSINESS.social.instagram && (
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/20 transition-all focus-visible-ring"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
              )}
              {BUSINESS.social.facebook && (
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary/20 transition-all focus-visible-ring"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
              )}
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:bg-[#1EB35A] transition-all focus-visible-ring"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircleIcon size={20} />
              </a>
            </div>
          </div>

          <nav aria-label="Quick Links">
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronRightIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h4 className="font-semibold text-white mb-5">Support</h4>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ChevronRightIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-semibold text-white mb-5">Contact Us</h4>
            <address className="not-italic space-y-4 text-white/70">
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={18} />
                </div>
                <span>{BUSINESS.phone}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircleIcon size={18} />
                </div>
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MailIcon size={18} />
                </div>
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={18} />
                </div>
                <span className="max-w-xs">
                  {BUSINESS.address.street}, {BUSINESS.address.landmark}, {BUSINESS.address.city} {BUSINESS.address.pincode}
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/50 text-sm">
              © {currentYear} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              Built with
              <span className="text-primary">❤</span>
              for the fitness community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}