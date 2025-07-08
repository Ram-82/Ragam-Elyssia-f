import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";
import { User as UserIcon, ChevronDown } from "lucide-react";
import logo from '../assets/logo.png';
import { useUser } from "@/context/UserContext";
import { useLocation } from 'wouter';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const { user, loading, logout } = useUser() as { user: any, loading: boolean, logout: () => void };
  const [, setLocation] = useLocation();

  // Desktop dropdown outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    }
    if (desktopDropdownOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [desktopDropdownOpen]);

  // Mobile dropdown outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target as Node)) {
        setMobileDropdownOpen(false);
      }
    }
    if (mobileDropdownOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileDropdownOpen]);

  return (
    <nav className="fixed top-0 w-full bg-ivory z-50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Ragam Elyssia Logo" className="h-10 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200" />

            <span className="font-playfair text-2xl font-bold text-charcoal tracking-wide">Ragam Elyssia</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center flex-wrap gap-x-8 gap-y-2">
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
              {user ? (
                <div className="relative" ref={desktopDropdownRef}>
                  <button
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold/30 shadow hover:shadow-md transition-all"
                    onClick={() => setDesktopDropdownOpen((v) => !v)}
                  >
                    <UserIcon className="h-6 w-6 text-gold" />
                    <span className="font-inter text-charcoal text-sm font-medium">{user.fullName?.split(' ')[0] || 'Profile'}</span>
                    <ChevronDown className="h-4 w-4 text-gold" />
                  </button>
                  {desktopDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gold/20 rounded-lg shadow-lg z-50 py-2">
                      <button
                        className="block w-full text-left px-4 py-2 text-charcoal font-inter text-sm transition-colors rounded-md
                          hover:bg-gold/20 hover:text-gold focus:bg-gold/20 focus:text-gold active:bg-gold/40"
                        onClick={() => { setDesktopDropdownOpen(false); setLocation('/dashboard'); }}
                        tabIndex={0}
                      >
                        Dashboard
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-red-600 font-inter text-sm transition-colors rounded-md
                          hover:bg-gold/20 hover:text-gold focus:bg-gold/20 focus:text-gold active:bg-gold/40"
                        onClick={() => { setDesktopDropdownOpen(false); logout(); }}
                        tabIndex={0}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login">
                  <Button className="bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 px-8 py-5 font-inter tracking-wide font-semibold">
                    Login / Signup
                  </Button>
                </Link>
              )}
            </div>
          </div>
          {/* Hamburger for Mobile */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold"
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
            <Link href="/" className="text-charcoal font-inter text-sm py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>Home</Link>
            <div className="border-b border-gold/10 mb-5" />
            <Link href="/about" className="text-charcoal font-inter text-sm py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>About</Link>
            <div className="border-b border-gold/10 mb-5" />
            <Link href="/services" className="text-charcoal font-inter text-sm py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>Services</Link>
            <div className="border-b border-gold/10 mb-5" />
            <Link href="/contact" className="text-charcoal font-inter text-sm py-1 w-full mb-3" onClick={() => setDrawerOpen(false)}>Contact</Link>
        
            <Link href="/consultation" onClick={() => setDrawerOpen(false)}>
              <Button className="w-full bg-gold text-sm text-charcoal hover:bg-gold-dark transition-all duration-300 py-6 font-inter tracking-wide mb-5">
                Book Consultation
              </Button>
            </Link>
            {user ? (
              <div className="relative mb-5" ref={mobileDropdownRef}>
                <button
                  className="flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold/30 shadow hover:shadow-md transition-all w-full"
                  onClick={() => setMobileDropdownOpen((v) => !v)}
                >
                  <UserIcon className="h-6 w-6 text-gold" />
                  <span className="font-inter text-charcoal text-sm font-medium">{user.fullName?.split(' ')[0] || 'Profile'}</span>
                  <ChevronDown className="h-4 w-4 text-gold" />
                </button>
                {mobileDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white border border-gold/20 rounded-lg shadow-lg z-50 py-2" style={{ minWidth: 160 }}>
                    <button
                      className="block w-full text-left px-4 py-2 text-charcoal font-inter text-sm transition-colors rounded-md
                        hover:bg-gold/20 hover:text-gold focus:bg-gold/20 focus:text-gold active:bg-gold/40"
                      onClick={() => { setMobileDropdownOpen(false); setDrawerOpen(false); setLocation('/dashboard'); }}
                      tabIndex={0}
                    >
                      Dashboard
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-red-600 font-inter text-sm transition-colors rounded-md
                        hover:bg-gold/20 hover:text-gold focus:bg-gold/20 focus:text-gold active:bg-gold/40"
                      onClick={() => { setMobileDropdownOpen(false); setDrawerOpen(false); logout(); }}
                      tabIndex={0}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" onClick={() => setDrawerOpen(false)}>
                <Button className="w-full bg-gold text-sm text-charcoal hover:bg-gold-dark transition-all duration-300 py-6 font-inter tracking-wide mb-5">
                  Login / Signup
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
} 