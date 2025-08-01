import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MessageCircle, Clock, Globe, CheckCircle, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL, apiRequest } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useUser } from "@/context/UserContext";

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
  const { user } = useUser() as { user: any };

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
    <>
      <ScrollToTop />
      <Header />
      <div className="min-h-screen bg-ivory">



        {/* Hero Section */}
        <section className="pt-28 sm:pt-32 pb-16 px-6 lg:px-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
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

                <div className="mt-8 sm:mt-12 p-4 sm:p-8 bg-cream/30 rounded-lg">
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
                {!user && (
                  <div className="mb-6 text-center text-lg text-black font-semibold">
                    * <Link href="/login" className="text-gray font-bold underline hover:text-gold-dark">Login</Link> to save your contact query to your dashboard.
                    </div>
                )}
                {isSubmitted ? (
                  <Card className="bg-cream/10 border-0 shadow-luxury">
                    <CardContent className="p-4 sm:p-12 text-center">
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
                        className="border-gold text-charcoal mt-5 hover:bg-gold hover:border-gold font-inter tracking-wide"
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
      <Footer />
    </>
  );
}
