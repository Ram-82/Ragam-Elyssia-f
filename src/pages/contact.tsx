import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MessageCircle, Clock, Globe, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL, apiRequest } from "@/lib/queryClient";

// Local validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await apiRequest("POST", `${API_BASE_URL}/api/contact`, data);
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll respond within 24 hours."
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

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
              <Link href="/services" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Services</Link>
              <Link href="/contact" className="text-charcoal font-inter tracking-wide text-sm font-medium">Contact</Link>
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
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="text-gold mx-auto h-12 w-12 mb-6" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-wide">
            Contact Us
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Ready to create something extraordinary? We're here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8 tracking-wide">
                Get In Touch
              </h2>
              <p className="font-inter text-lg text-warm-gray leading-relaxed mb-12">
                Whether you're planning an intimate celebration or a grand event, we're here to guide you through every step of the journey. Reach out to us, and let's begin crafting your extraordinary experience.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 tracking-wide">
                      Phone
                    </h3>
                    <p className="font-inter text-warm-gray mb-1">+91 9632069662</p>
                    <p className="font-inter text-warm-gray/70 text-sm">Available 9 AM - 9 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 tracking-wide">
                      Email
                    </h3>
                    <p className="font-inter text-warm-gray mb-1">ragamelyssia@gmail.com</p>
                    <p className="font-inter text-warm-gray/70 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 tracking-wide">
                      Service Areas
                    </h3>
                    <p className="font-inter text-warm-gray mb-1">Based in India</p>
                    <p className="font-inter text-warm-gray/70 text-sm">Serving Global Clients</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gold h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 tracking-wide">
                      Consultations
                    </h3>
                    <p className="font-inter text-warm-gray mb-1">By appointment only</p>
                    <p className="font-inter text-warm-gray/70 text-sm">Virtual and in-person available</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-cream/30 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">
                  Prefer to Book Directly?
                </h3>
                <p className="font-inter text-warm-gray mb-6 text-sm leading-relaxed">
                  For consultation bookings and detailed event discussions, use our dedicated consultation form for a more comprehensive inquiry process.
                </p>
                <Link href="/consultation">
                  <Button className="bg-charcoal text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300 font-inter tracking-wide">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <Card className="bg-cream/10 border-0 shadow-luxury">
                  <CardContent className="p-12 text-center">
                    <CheckCircle className="text-gold h-16 w-16 mx-auto mb-6" />
                    <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4 tracking-wide">
                      Message Sent
                    </h3>
                    <p className="font-inter text-warm-gray leading-relaxed mb-8">
                      Thank you for reaching out. We've received your message and will respond within 24 hours with personalized attention to your inquiry.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-gold text-charcoal hover:bg-gold hover:border-gold font-inter tracking-wide"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-cream/10 border-0 shadow-luxury">
                  <CardContent className="p-12">
                    <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-8 tracking-wide">
                      Send Us a Message
                    </h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-inter text-charcoal tracking-wide">Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your name" 
                                    className="border-gold/20 focus:border-gold bg-white font-inter"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-inter text-charcoal tracking-wide">Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email"
                                    placeholder="your@email.com" 
                                    className="border-gold/20 focus:border-gold bg-white font-inter"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-charcoal tracking-wide">Subject</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="How can we help you?" 
                                  className="border-gold/20 focus:border-gold bg-white font-inter"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-inter text-charcoal tracking-wide">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  rows={6}
                                  placeholder="Tell us about your inquiry..." 
                                  className="border-gold/20 focus:border-gold bg-white font-inter resize-none"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-charcoal text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300 py-4 font-inter tracking-wide"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media / WhatsApp Section */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-charcoal mb-6 tracking-wide">
            Connect With Us
          </h2>
          <p className="font-cormorant text-xl text-warm-gray mb-12 max-w-2xl mx-auto">
            For immediate assistance or quick inquiries, reach us directly via WhatsApp
          </p>
          
          <a 
            href="https://wa.me/919632069662?text=Hello! I'm interested in Ragam Elyssia's luxury services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-luxury hover:shadow-luxury-lg transition-all duration-300 font-inter tracking-wide"
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
