import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles, Calendar, MapPin, ArrowRight, Star, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Private Events",
      description: "Intimate celebrations crafted with meticulous attention to every detail",
      details: [
        "Milestone celebrations and anniversaries",
        "Intimate dinner parties and soirées", 
        "Family gatherings and reunions",
        "Personal branding events",
        "Exclusive product launches"
      ],
      approach: "We understand that private events are deeply personal. Our approach begins with understanding your story, your relationships, and the emotions you wish to evoke. Every element is carefully curated to reflect your unique style while ensuring your guests experience something truly memorable."
    },
    {
      icon: Sparkles,
      title: "Fashion & Brand Activations",
      description: "Sophisticated brand experiences that resonate and inspire excellence",
      details: [
        "Fashion show production and runway events",
        "Brand launch campaigns and activations",
        "Corporate hospitality experiences",
        "Influencer and media events",
        "Luxury retail experiential marketing"
      ],
      approach: "Brand experiences require a delicate balance of creativity and strategic thinking. We craft immersive environments that not only showcase your brand but create emotional connections with your audience, ensuring lasting impact and meaningful engagement."
    },
    {
      icon: Calendar,
      title: "Concierge Experiences",
      description: "Personalized luxury services that exceed ordinary expectations",
      details: [
        "VIP travel coordination and itinerary planning",
        "Exclusive access to events and venues",
        "Personal shopping and lifestyle curation",
        "Luxury accommodation arrangements",
        "Bespoke entertainment and cultural experiences"
      ],
      approach: "Our concierge services extend far beyond typical arrangements. We anticipate needs before they're expressed, create access where none existed, and orchestrate experiences that feel effortlessly perfect while being meticulously planned behind the scenes."
    },
    {
      icon: MapPin,
      title: "Destination Planning",
      description: "Extraordinary journeys to the world's most exclusive venues",
      details: [
        "Destination wedding planning and coordination",
        "Corporate retreat design and execution",
        "Luxury travel experiences and expeditions",
        "Cultural immersion and heritage tours",
        "Multi-city event coordination"
      ],
      approach: "Destination planning requires intimate knowledge of locations, cultures, and logistics. We leverage our global network to create seamless experiences that honor local traditions while maintaining the highest standards of luxury and comfort."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-ivory/95 backdrop-blur-sm z-50 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/">
              <div className="font-playfair text-2xl font-bold text-charcoal tracking-wide">
                Ragam Elyssia
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Home</Link>
              <Link href="/about" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">About</Link>
              <Link href="/services" className="text-charcoal font-inter tracking-wide text-sm font-medium">Services</Link>
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Star className="text-gold mx-auto h-12 w-12 mb-6" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-wide">
            Our Services
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Bespoke experiences tailored to discerning clientele who expect nothing short of perfection
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-cream/10 border-0 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group">
                <CardContent className="p-12">
                  <div className="mb-8">
                    <service.icon className="text-gold h-16 w-16 mb-6" />
                    <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4 tracking-wide">
                      {service.title}
                    </h2>
                    <p className="font-cormorant text-xl text-warm-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-playfair text-lg font-semibold text-charcoal mb-4 tracking-wide">
                      What We Offer:
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="font-inter text-warm-gray text-sm leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-6 bg-white/50 rounded-lg">
                    <h3 className="font-playfair text-lg font-semibold text-charcoal mb-4 tracking-wide">
                      Our Approach:
                    </h3>
                    <p className="font-inter text-warm-gray text-sm leading-relaxed">
                      {service.approach}
                    </p>
                  </div>

                  <Link href="/consultation">
                    <Button className="w-full bg-charcoal text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300 py-4 font-inter tracking-wide group-hover:bg-gold group-hover:text-charcoal">
                      Inquire Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
              Our Process
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                <span className="font-playfair text-2xl font-bold text-gold">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Consultation</h3>
              <p className="font-inter text-warm-gray text-sm leading-relaxed">
                Deep discovery session to understand your vision, preferences, and expectations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                <span className="font-playfair text-2xl font-bold text-gold">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Concept</h3>
              <p className="font-inter text-warm-gray text-sm leading-relaxed">
                Creative development and detailed planning tailored to your unique requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                <span className="font-playfair text-2xl font-bold text-gold">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Coordination</h3>
              <p className="font-inter text-warm-gray text-sm leading-relaxed">
                Meticulous execution management ensuring every detail is perfectly orchestrated
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-luxury">
                <span className="font-playfair text-2xl font-bold text-gold">4</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Celebration</h3>
              <p className="font-inter text-warm-gray text-sm leading-relaxed">
                Flawless delivery of an extraordinary experience that exceeds expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            Ready to Begin?
          </h2>
          <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-cream/90">
            Let's discuss how we can bring your vision to life with unparalleled elegance
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-dark px-12 py-4 text-lg font-inter tracking-wide">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
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