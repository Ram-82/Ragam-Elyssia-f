import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-ivory z-50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/src/assets/logo/logo.png" alt="Ragam Elyssia Logo" className="h-10 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200" />

            <span className="font-playfair text-2xl font-bold text-charcoal tracking-wide">Ragam Elyssia</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-black hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Home</Link>
            <Link href="/about" className="text-black hover:text-charcoal transition-colors font-inter tracking-wide text-sm">About</Link>
            <Link href="/services" className="text-black hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Services</Link>
            <Link href="/contact" className="text-black hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Contact</Link>
            <div className="flex gap-3">
              <Link href="/consultation">
                <Button className="bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 px-8 py-5 font-inter tracking-wide font-semibold">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 px-8 py-5 font-inter tracking-wide font-semibold">
                  Login / Signup
                </Button>
              </Link>
            </div>
          </div>
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Slide-out Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${drawerOpen ? 'visible' : 'invisible pointer-events-none'}`}
        style={{ background: drawerOpen ? 'rgba(0,0,0,0.3)' : 'transparent' }}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      >
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-ivory shadow-2xl transform transition-transform duration-300 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-end mt-8 pr-2 mr-6">
            <button
              className="text-black hover:text-gold-dark focus:outline-none"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-4 w-full">
            <Link href="/" className="text-charcoal font-inter text-xl py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>Home</Link>
            <div className="border-b border-gold/10 mb-5" />
            <Link href="/about" className="text-charcoal font-inter text-xl py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>About</Link>
            <div className="border-b border-gold/10 mb-5" />
            <Link href="/services" className="text-charcoal font-inter text-xl py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>Services</Link>
            <div className="border-b border-gold/10 mb-5" />
            <Link href="/contact" className="text-charcoal font-inter text-xl py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>Contact</Link>
        
            <Link href="/consultation" onClick={() => setDrawerOpen(false)}>
              <Button className="w-full bg-gold text-lg text-charcoal hover:bg-gold-dark transition-all duration-300 py-6 font-inter tracking-wide mb-5">
                Book Consultation
              </Button>
            </Link>
            <Link href="/login" onClick={() => setDrawerOpen(false)}>
            <Button className="w-full bg-gold text-lg text-charcoal hover:bg-gold-dark transition-all duration-300 py-6 font-inter tracking-wide mb-5">
            Login / Signup
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
} 