"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon, LoaderIcon } from "./Icons";
import { Button } from "./Button";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    alt: "Modern gym interior with strength equipment",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1571009859130-bd2f0a19c4e9?w=1200&q=80",
    alt: "Free weights area with dumbbells and barbells",
    category: "Free Weights",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    alt: "Cardio machines with entertainment screens",
    category: "Cardio",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    alt: "Group fitness class in session",
    category: "Group Classes",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80",
    alt: "Personal training session",
    category: "Personal Training",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80",
    alt: "Functional training area with kettlebells",
    category: "Functional",
  },
  {
    src: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&q=80",
    alt: "Yoga studio space",
    category: "Yoga Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=1200&q=80",
    alt: "Locker room and facilities",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=80",
    alt: "Gym reception and lounge area",
    category: "Reception",
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

  const filteredImages = activeCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="section bg-background" aria-labelledby="gallery-heading">
      <div className="container">
        <header className="section-header mb-10 md:mb-12">
          <span className="label">Gallery</span>
          <h2 id="gallery-heading">Inside MR Fitness Center</h2>
          <p>Explore our facility, equipment, and training spaces through real photos.</p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Gallery categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`gallery-panel-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          id={`gallery-panel-${activeCategory.toLowerCase()}`}
          role="tabpanel"
          aria-label={`${activeCategory} photos`}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <article
              key={image.src}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View ${image.alt}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              {!imageLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <LoaderIcon size={32} className="animate-spin text-muted-foreground" />
                </div>
              )}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded[index] ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                onLoad={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
              />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">{image.category}</p>
                  <p className="font-semibold text-foreground">{image.alt}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform" aria-label="Expand image">
                  <ExpandIcon size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No images in this category yet.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more? Visit us for a tour!
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("trial")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book a Visit
            <ChevronRightIcon size={18} />
          </Button>
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous image"
            >
              <ChevronLeftIcon size={28} />
            </button>

            <div className="relative max-w-5xl max-h-[90vh] w-full px-4">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
                sizes="90vw"
              />
              <div className="mt-4 text-center text-white/80">
                <p className="text-sm text-primary uppercase tracking-wider">{filteredImages[lightboxIndex].category}</p>
                <p className="text-lg font-medium">{filteredImages[lightboxIndex].alt}</p>
                <p className="text-sm mt-1">{lightboxIndex + 1} / {filteredImages.length}</p>
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next image"
            >
              <ChevronRightIcon size={28} />
            </button>

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Close gallery"
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}