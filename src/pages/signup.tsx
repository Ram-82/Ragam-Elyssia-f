import React, { useState } from 'react';
import { Eye, EyeOff, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'wouter';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup submitted:', formData);
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-stone-200/20 backdrop-blur-3xl"></div>
      
      <div className="relative w-full max-w-md">
        {/* Main container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-stone-200/50 p-8 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-stone-300 rounded-2xl mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-white rounded-xl"></div>
            </div>
            <h1 className="text-3xl font-light text-stone-800 tracking-wide" style={{fontFamily: 'Playfair Display, serif'}}>
              Join Us
            </h1>
            <p className="text-stone-500 text-sm font-light">
              Create your account to get started
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 pr-12 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 pr-12 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-amber-200 to-stone-300 hover:from-amber-300 hover:to-stone-400 text-stone-800 font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg cursor-pointer text-center"
            >
              Create Account
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-stone-200/50">
            <p className="text-center text-sm text-stone-500">
              Already have an account?{' '}
              <a href="/login" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-stone-300/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-stone-200/30 to-amber-200/30 rounded-full blur-xl"></div>
      </div>
      <footer className="bg-ivory py-16 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-playfair text-2xl font-bold text-charcoal mb-4 tracking-wide">
                Ragam Elyssia
              </div>
              <p className="font-inter text-warm-gray text-sm leading-relaxed">
                Ultra-luxury event planning and concierge services for discerning clientele worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold text-charcoal mb-4 tracking-wide">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block font-inter text-warm-gray hover:text-charcoal transition-colors text-sm">About</Link>
                <Link href="/services" className="block font-inter text-warm-gray hover:text-charcoal transition-colors text-sm">Services</Link>
                <Link href="/consultation" className="block font-inter text-warm-gray hover:text-charcoal transition-colors text-sm">Consultation</Link>
                <Link href="/contact" className="block font-inter text-warm-gray hover:text-charcoal transition-colors text-sm">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold text-charcoal mb-4 tracking-wide">Contact</h4>
              <div className="space-y-3 font-inter text-warm-gray text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-gold" />
                  +91 9632069662
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-gold" />
                  ragamelyssia@gmail.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-gold" />
                  Based in India. Serving Global Clients.
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gold/10 mt-12 pt-8 text-center">
            <p className="font-inter text-warm-gray text-sm">
              © 2024 Ragam Elyssia. Crafted for the discerning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}