import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote, Award, Sparkles, Heart, Star } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
              <Link href="/about" className="text-charcoal font-inter tracking-wide text-sm font-medium">About</Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Award className="text-gold mx-auto h-12 w-12 mb-6" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-wide">
            About Ragam Elyssia
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            A vision born from precision, passion, and an unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
                Founder's Story
              </h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>

            <Card className="bg-cream/20 border-0 shadow-luxury mb-16">
              <CardContent className="p-12 md:p-16">
                <Quote className="text-gold h-16 w-16 mb-8" />
                <p className="font-cormorant text-xl md:text-2xl text-charcoal leading-relaxed mb-8 italic">
                  "Rooted in a quiet obsession for detail and driven by a vision to redefine elegance, I founded Ragam Elyssia as more than a luxury service—it is a curated realm of timeless experiences."
                </p>
                <p className="font-inter text-lg text-warm-gray leading-relaxed mb-8">
                  With a background in technology and creative strategy, I merged precision with imagination to serve clientele who expect nothing short of excellence. Every project I take on is a personal journey—a crafted narrative where dreams meet execution.
                </p>
                <p className="font-inter text-lg text-warm-gray leading-relaxed mb-8">
                  Ragam Elyssia is not built for the masses, it's built for the discerning.
                </p>
                <div className="flex items-center pt-8 border-t border-gold/20">
                  <div>
                    <h4 className="font-playfair text-xl font-semibold text-charcoal tracking-wide">Ram</h4>
                    <p className="font-inter text-warm-gray text-sm">Founder &amp; Creative Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-luxury">
                  <Sparkles className="text-gold h-12 w-12 mx-auto mb-6" />
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Precision</h3>
                  <p className="font-inter text-warm-gray text-sm leading-relaxed">
                    Every detail meticulously planned and executed with unwavering attention to perfection.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-luxury">
                  <Heart className="text-gold h-12 w-12 mx-auto mb-6" />
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Passion</h3>
                  <p className="font-inter text-warm-gray text-sm leading-relaxed">
                    Driven by an authentic love for creating moments that transcend ordinary expectations.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-luxury">
                  <Star className="text-gold h-12 w-12 mx-auto mb-6" />
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Excellence</h3>
                  <p className="font-inter text-warm-gray text-sm leading-relaxed">
                    An uncompromising commitment to delivering experiences of the highest caliber.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
                Philosophy of Luxury
              </h2>
              <div className="w-24 h-0.5 bg-gold mx-auto"></div>
            </div>

            <div className="space-y-12">
              <Card className="bg-white border-0 shadow-luxury">
                <CardContent className="p-12 md:p-16">
                  <p className="font-cormorant text-xl md:text-2xl text-charcoal leading-relaxed mb-8 italic text-center">
                    "At Ragam Elyssia, luxury is not an aesthetic—it's an emotion. It whispers, it doesn't shout. It's found in restraint, precision, and personalization."
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="font-inter text-lg text-warm-gray leading-relaxed mb-6">
                        We believe true luxury is silent excellence—a presence that speaks without needing to explain. Every experience we design is immersive, intentional, and unrepeatable.
                      </p>
                      <p className="font-inter text-lg text-warm-gray leading-relaxed mb-6">
                        From the first interaction to the final flourish, we create sacred moments that feel as effortless as they are unforgettable.
                      </p>
                      <p className="font-inter text-lg text-warm-gray leading-relaxed">
                        Our approach transcends traditional event planning—we curate experiences that resonate on a deeply personal level, creating memories that become part of our clients' legacy.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-cream/50 p-6 rounded-lg">
                        <h4 className="font-playfair text-lg font-semibold text-charcoal mb-3 tracking-wide">Silent Excellence</h4>
                        <p className="font-inter text-warm-gray text-sm leading-relaxed">
                          True luxury doesn't announce itself—it simply is. Our work speaks through subtlety and sophistication.
                        </p>
                      </div>
                      
                      <div className="bg-cream/50 p-6 rounded-lg">
                        <h4 className="font-playfair text-lg font-semibold text-charcoal mb-3 tracking-wide">Immersive Design</h4>
                        <p className="font-inter text-warm-gray text-sm leading-relaxed">
                          Every element is carefully orchestrated to create an environment where memories naturally unfold.
                        </p>
                      </div>
                      
                      <div className="bg-cream/50 p-6 rounded-lg">
                        <h4 className="font-playfair text-lg font-semibold text-charcoal mb-3 tracking-wide">Intentional Moments</h4>
                        <p className="font-inter text-warm-gray text-sm leading-relaxed">
                          Nothing is left to chance. Each moment is purposefully crafted to evoke the perfect emotion.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            Experience the Difference
          </h2>
          <p className="font-cormorant text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-cream/90">
            Discover how our philosophy transforms into extraordinary experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-dark px-12 py-4 text-lg font-inter tracking-wide">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/consultation">
              <Button size="lg" variant="outline" className="border-2 border-gold text-ivory hover:bg-gold hover:text-charcoal hover:border-gold px-12 py-4 text-lg font-inter tracking-wide">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
