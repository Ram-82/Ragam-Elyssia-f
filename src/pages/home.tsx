import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calendar, Users, MapPin, Phone, Mail } from "lucide-react";
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
              <Link href="/login">
              <Button className="bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 px-8 py-3 font-inter tracking-wide">
                 Login
                </Button>
              </Link>
              <Link href="/signup">
              <Button className="bg-gold text-charcoal hover:bg-gold-dark transition-all duration-300 px-8 py-3 font-inter tracking-wide">
               signup
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
          aria-label="Chat on WhatsApp"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex items-center justify-center border-4 border-white"
        >
          {/* WhatsApp SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.364L4 29l7.818-2.236A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.818c-1.818 0-3.591-.545-5.091-1.545l-.364-.227-4.636 1.318 1.318-4.545-.236-.364C6.545 18.591 6 16.818 6 15c0-5.455 4.545-10 10-10s10 4.545 10 10-4.545 10-10 10zm5.273-7.273c-.273-.136-1.636-.818-1.891-.909-.255-.091-.436-.136-.618.136-.182.273-.709.909-.873 1.091-.164.182-.327.205-.6.068-.273-.136-1.155-.426-2.199-1.36-.813-.726-1.362-1.623-1.523-1.896-.159-.273-.017-.42.12-.555.123-.122.273-.318.409-.477.136-.159.182-.273.273-.455.091-.182.045-.341-.023-.477-.068-.136-.618-1.491-.845-2.045-.223-.536-.45-.463-.618-.472l-.527-.009c-.182 0-.477.068-.727.341-.25.273-.955.932-.955 2.273 0 1.341.977 2.636 1.113 2.818.136.182 1.927 2.945 4.682 4.009.655.282 1.165.45 1.563.577.656.209 1.253.18 1.726.109.527-.079 1.636-.668 1.868-1.312.232-.645.232-1.197.163-1.312-.068-.114-.25-.182-.523-.318z"/>
          </svg>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative from-gray-300 via-gray-400 to-gray-600 text-center py-32 px-6">
        <div className="max-w-4xl mx-auto"> <div className="mb-6"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown text-gold mx-auto h-20 w-20 mb-8 animate-luxury-float" data-replit-metadata="client/src/pages/home.tsx:105:12" data-component-name="Crown"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg></div> <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4"> The Next Name of <span className="italic text-yellow-400">Ultra Luxury</span> </h1> <p className=" text-xl md:text-2xl mb-6"> Private Journeys. Legendary Moments. </p> <p className=" text-base md:text-lg mb-12 max-w-xl mx-auto"> Where discerning individuals discover experiences that transcend the ordinary </p> <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded shadow hover:bg-yellow-500 transition"> Begin Your Experience </button><div className="mt-12"> <div data-replit-metadata="client/src/pages/home.tsx:158:8" data-component-name="motion.div" className="absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{opacity: 1}}><div data-replit-metadata="client/src/pages/home.tsx:164:10" data-component-name="motion.div" style={{transform: 'translateY(9.94314px)'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-gold h-8 w-8" data-replit-metadata="client/src/pages/home.tsx:168:12" data-component-name="ChevronDown"><path d="m6 9 6 6 6-6"></path></svg></div></div> </div> </div> </section>

   
    



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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#d4af37" className="text-gold mx-auto h-12 w-12 mb-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0 0c-3.426 0-6.214-2.03-7.447-4.877M12 19.253c3.426 0 6.214-2.03 7.447-4.877M12 6.253c1.245-.007 2.48.42 3.507 1.379 1.533 1.423 2.043 3.59 1.07 5.518a6.916 6.916 0 01-1.07 1.518c.01.109.02.218.02.329 0 3.31-2.91 6-6.5 6s-6.5-2.69-6.5-6c0-.11.01-.22.02-.329a6.916 6.916 0 01-1.07-1.518c-.974-1.928-.463-4.095 1.07-5.518 1.027-.96 2.262-1.386 3.507-1.38z" />
                </svg>
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
