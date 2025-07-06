import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from '../assets/logo.png';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ivory py-16 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="Ragam Elyssia Logo" className="h-8 w-auto ml-3 object-contain drop-shadow-md inline-block align-middle" />
            {/* <span className="font-playfair text-2xl font-bold text-charcoal tracking-wide">Ragam Elyssia</span> */}
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
            Copyrights © { currentYear } Ragam Elyssia. Crafted for the discerning.
          </p>
        </div>
      </div>
    </footer>
  );
} 