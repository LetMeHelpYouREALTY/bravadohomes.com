'use client'

import { useState } from 'react'
import { useDomainConfig } from '../hooks/use-domain-config'
import OptimizedImage, { FALLBACK_IMAGES } from './optimized-image'

interface GalleryImage {
  src: string
  alt: string
  thumbnail: string
  index: number
}

export default function PhotoGallery() {
  const config = useDomainConfig()
  const email = config.contact.email
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Optimized, diverse images with proper framing and fallbacks
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Bravado Community Exterior - Modern Luxury Homes North Las Vegas",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 0
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Modern Two-Story Home - Contemporary Design with Premium Finishes",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 1
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Luxury Home Exterior - Spanish Mission Style Architecture",
      thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 2
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Elegant Home Entry - Traditional Two-Story Design",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 3
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Gourmet Kitchen - Premium Appliances and Modern Design",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 4
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Spacious Living Room - Open Concept Design with Natural Light",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 5
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Master Bedroom Suite - Luxury Primary Bedroom with En-Suite",
      thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 6
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Luxury Bathroom - Modern Spa-Like Master Bathroom",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 7
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Backyard Patio - Outdoor Living and Entertainment Space",
      thumbnail: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 8
    },
    {
      src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Bravado Community Aerial View - Master-Planned Neighborhood",
      thumbnail: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
      index: 9
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="photo-gallery mb-12" data-image-count={galleryImages.length} role="region" aria-label="Photo Gallery">
      {/* Gallery Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Explore the Stunning Homes and Beautiful Community at Bravado
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
          From modern exteriors to luxurious interiors, discover why Bravado is the perfect place to call home in North Las Vegas. 
          Experience the exceptional quality and attention to detail that defines our luxury new construction homes.
        </p>
        
        {/* Gallery Flags */}
        <div className="gallery_flags mb-6">
          <span className="gallery_flags_icon custom-flag1-icon flag-dark-purple inline-block px-3 py-1 rounded-full text-white text-sm font-bold mr-2">
            Two Stunning Models
          </span>
          <span className="gallery_flags_icon custom-flag2-icon flag-light-purple inline-block px-3 py-1 rounded-full text-white text-sm font-bold">
            Tour Today!
          </span>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="tel:+17025001955" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            📞 Schedule a Tour: (702) 500-1955
          </a>
          <a href="/floor-plans" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
            🏠 View Floor Plans
          </a>
          <a href="/community" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
            🏘️ Explore Community
          </a>
        </div>
      </div>

      {/* Main Gallery */}
      <div id="main-gallery" className="carousel slide" data-ride="carousel" data-interval="false">
        {/* Navigation Arrows */}
        <button 
          className="carousel-control-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-r-lg transition-all"
          onClick={prevSlide}
          type="button"
        >
          <span className="arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.159 8.409" className="w-6 h-6">
              <g data-name="Group 1218" fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M7.5 4.205h-7" data-name="Shape 2056" strokeLinejoin="round" />
                <path d="M4.5 7.705l3-3.5-3-3.5" data-name="Shape 2057" />
              </g>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button 
          className="carousel-control-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-l-lg transition-all"
          onClick={nextSlide}
          type="button"
        >
          <span className="arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.159 8.409" className="w-6 h-6">
              <g data-name="Group 1218" fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M0.5 4.205h7" data-name="Shape 2056" strokeLinejoin="round" />
                <path d="M3.5 0.705l-3 3.5 3 3.5" data-name="Shape 2057" />
              </g>
            </svg>
          </span>
          <span className="sr-only">Next</span>
        </button>

        {/* Carousel Content */}
        <div className="carousel-inner relative overflow-hidden rounded-lg">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`carousel-item relative ${index === currentSlide ? 'active' : ''}`}
              data-index={index}
            >
              <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 lg:h-96">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center rounded-lg shadow-lg"
                  priority={index === 0}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw"
                  fallbackSrc={FALLBACK_IMAGES.exterior}
                />
                {/* Image Overlay with Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.alt.split(' - ')[0]}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {image.alt.split(' - ')[1] || 'Premium luxury home features'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div id="thumbnail-list" className="mt-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Gallery Navigation</h3>
          <p className="text-gray-600 text-sm">Click any thumbnail to view full image</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className={`thumbnail relative overflow-hidden rounded-lg transition-all group ${
                index === currentSlide ? 'active ring-3 ring-blue-600 ring-offset-2 scale-105' : 'opacity-75 hover:opacity-100 hover:scale-105'
              }`}
              onClick={() => goToSlide(index)}
              data-target="#main-gallery"
              data-slide-to={index}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <OptimizedImage
                  src={image.thumbnail}
                  alt={`${image.alt} thumbnail`}
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                  fallbackSrc={FALLBACK_IMAGES.default}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-1 left-1 right-1">
                  <span className="bg-white/90 text-black text-xs font-bold px-1 rounded">
                    {index + 1}
                  </span>
                </div>
              </div>
              <span className="sr-only">Slide {index + 1} of {galleryImages.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Info & Additional CTAs */}
      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Bravado in Person?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            These images showcase just a glimpse of the luxury and quality you'll find at Bravado. 
            Schedule your personal tour today to see these stunning homes and community features up close.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17025001955" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
              📞 Call Dr. Jan: (702) 500-1955
            </a>
            <a href={`mailto:${email}`} className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors shadow-lg">
              📧 Email for Tour Info
            </a>
            <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg">
              📋 Contact Form
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
          <p>Showing {currentSlide + 1} of {galleryImages.length} professional images</p>
          <span className="hidden sm:block">•</span>
          <p>Professional photography by Century Communities</p>
          <span className="hidden sm:block">•</span>
          <p>Updated daily with new listings</p>
        </div>
      </div>
    </div>
  )
}
