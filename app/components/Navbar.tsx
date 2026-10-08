"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, XIcon, PhoneIcon, MessageCircleIcon } from "./Icons";
import { Button, LinkButton } from "./Button";
import { NAV_LINKS, BUSINESS } from "@/app/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#home"
            className="flex items-center gap-2 font-display text-2xl md:text-3xl font-normal text-foreground focus-visible-ring rounded-lg px-2 py-1"
            aria-label={`${BUSINESS.name} - Home`}
          >
            <span className="text-primary">MR</span>
            <span className="text-secondary">FITNESS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, -3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LinkButton
              href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
              variant="call"
              size="sm"
              className="hidden sm:flex"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <PhoneIcon size={16} />
              <span>Call</span>
            </LinkButton>
            <LinkButton
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              variant="whatsapp"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircleIcon size={16} />
              <span>WhatsApp</span>
            </LinkButton>
            <LinkButton
              href="#trial"
              variant="primary"
              size="sm"
              className="hidden sm:flex"
            >
              Free Trial
            </LinkButton>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted focus-visible-ring"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <LinkButton
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                variant="call"
                className="w-full justify-center"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <PhoneIcon size={20} />
                <span>Call Us</span>
              </LinkButton>
              <LinkButton
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                variant="whatsapp"
                className="w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircleIcon size={20} />
                <span>WhatsApp</span>
              </LinkButton>
              <LinkButton
                href="#trial"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Book Free Trial
              </LinkButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}