import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calendar, Users, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-ivory/95 backdrop-blur-sm z-50 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="font-playfair text-2xl font-bold text-charcoal tracking-wide">
              Ragam Elyssia
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Home</Link>
              <Link href="/about" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">About</Link>
              <Link href="/services" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Services</Link>
              <Link href="/contact" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Contact</Link>
              <Link href="/consultation">
                <Button className="bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 px-8 py-3 font-inter tracking-wide">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/919632069662?text=Hello! I'm interested in Ragam Elyssia's luxury services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Sparkles className="text-gold mx-auto h-12 w-12 mb-6" />
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-8 leading-tight tracking-wide">
              Ultra-Luxury
              <span className="block text-gold italic">Event Planning</span>
              <span className="block text-charcoal">&amp; Concierge Services</span>
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-warm-gray mb-12 max-w-2xl mx-auto leading-relaxed">
              Where dreams meet flawless execution in the realm of extraordinary experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-charcoal text-ivory hover:bg-charcoal/90 px-12 py-4 text-lg font-inter tracking-wide">
                  View Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/consultation">
                <Button size="lg" variant="outline" className="border-2 border-gold text-charcoal hover:bg-gold hover:border-gold px-12 py-4 text-lg font-inter tracking-wide">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
              Our Philosophy
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="font-cormorant text-xl md:text-2xl text-charcoal text-center leading-relaxed italic mb-8">
              "At Ragam Elyssia, luxury is not an aesthetic—it's an emotion. It whispers, it doesn't shout."
            </p>
            <p className="font-inter text-lg text-warm-gray text-center leading-relaxed max-w-3xl mx-auto">
              We believe true luxury is silent excellence—a presence that speaks without needing to explain. 
              Every experience we design is immersive, intentional, and unrepeatable. From the first interaction 
              to the final flourish, we create sacred moments that feel as effortless as they are unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
              Our Craft
            </h2>
            <p className="font-cormorant text-xl text-warm-gray max-w-2xl mx-auto">
              Bespoke experiences tailored to discerning clientele
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1">
                <Users className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Private Events</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Intimate celebrations crafted with meticulous attention to every detail
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1">
                <Sparkles className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Fashion &amp; Brand Activations</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Sophisticated brand experiences that resonate and inspire
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1">
                <Calendar className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Concierge Experiences</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Personalized luxury services beyond ordinary expectations
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1">
                <MapPin className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Destination Planning</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Extraordinary journeys to the world's most exclusive venues
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            Begin Your Journey
          </h2>
          <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-cream/90">
            Let us craft an extraordinary experience that transcends expectations
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-dark px-12 py-4 text-lg font-inter tracking-wide">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
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