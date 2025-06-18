import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowRight, Phone, Mail, MessageCircle, MapPin, CheckCircle, Clock, Heart, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please provide an event date"),
  guestCount: z.string().min(1, "Please provide guest count"),
  location: z.string().min(2, "Please provide a location"),
  budget: z.string().min(1, "Please select a budget range"),
  details: z.string().optional(),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

export default function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      location: "",
      budget: "",
      details: ""
    }
  });

  const onSubmit = async (data: ConsultationForm) => {
    try {
      await apiRequest("POST", "/api/consultation", data);
      setIsSubmitted(true);
      toast({
        title: "Consultation Request Submitted",
        description: "We'll be in touch within 24 hours to schedule your consultation."
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit consultation request. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (isSubmitted) {
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
            </div>
          </div>
        </nav>
        {/* Success Message */}
        <section className="pt-32 pb-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <CheckCircle className="text-gold mx-auto h-20 w-20 mb-8" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
              Thank You
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-warm-gray mb-12 leading-relaxed">
              Your consultation request has been received. We're excited to learn more about your vision.
            </p>
            <Card className="bg-white border-0 shadow-luxury mb-12">
              <CardContent className="p-12">
                <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-8 tracking-wide">
                  What to Expect Next
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Clock className="text-gold h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2 tracking-wide">
                      Within 24 Hours
                    </h3>
                    <p className="font-inter text-warm-gray text-sm leading-relaxed">
                      Our team will review your request and reach out to schedule your consultation
                    </p>
                  </div>
                  <div className="text-center">
                    <Heart className="text-gold h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2 tracking-wide">
                      Personal Consultation
                    </h3>
                    <p className="font-inter text-warm-gray text-sm leading-relaxed">
                      We'll discuss your vision, preferences, and how we can bring your event to life
                    </p>
                  </div>
                  <div className="text-center">
                    <Star className="text-gold h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2 tracking-wide">
                      Custom Proposal
                    </h3>
                    <p className="font-inter text-warm-gray text-sm leading-relaxed">
                      Receive a tailored proposal designed specifically for your unique event
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <p className="font-inter text-warm-gray">
                Have questions? Reach us at <a href="mailto:ragamelyssia@gmail.com" className="text-gold hover:text-gold-dark">ragamelyssia@gmail.com</a> or <a href="tel:+919632069662" className="text-gold hover:text-gold-dark">+91 9632069662</a>
              </p>
              <Link href="/">
                <Button className="bg-charcoal text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300 px-8 py-3 font-inter tracking-wide">
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              <Link href="/contact" className="text-warm-gray hover:text-charcoal transition-colors font-inter tracking-wide text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Calendar className="text-gold mx-auto h-12 w-12 mb-6" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 tracking-wide">
            Book Consultation
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Begin your journey toward an extraordinary experience. Tell us about your vision.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Card className="bg-cream/10 border-0 shadow-luxury">
            <CardContent className="p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-6 tracking-wide">
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name" 
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
                            <FormLabel className="font-inter text-charcoal tracking-wide">Email Address</FormLabel>
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
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 98765 43210" 
                                className="border-gold/20 focus:border-gold bg-white font-inter"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div>
                    <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-6 tracking-wide">
                      Event Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Event Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="select-trigger-custom">
                                  <SelectValue placeholder="Select event type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-[1000] bg-white border border-gold/30 shadow-luxury-lg">
                                <SelectItem value="private-event">Private Event</SelectItem>
                                <SelectItem value="fashion-brand">Fashion & Brand Activation</SelectItem>
                                <SelectItem value="concierge">Concierge Experience</SelectItem>
                                <SelectItem value="destination">Destination Planning</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Preferred Date</FormLabel>
                            <FormControl>
                              <Input 
                                type="date"
                                className="border-gold/20 focus:border-gold bg-white font-inter"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <FormField
                        control={form.control}
                        name="guestCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Guest Count</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="select-trigger-custom">
                                  <SelectValue placeholder="Number of guests" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-[1000] bg-white border border-gold/30 shadow-luxury-lg">
                                <SelectItem value="10-25">10-25 guests</SelectItem>
                                <SelectItem value="25-50">25-50 guests</SelectItem>
                                <SelectItem value="50-100">50-100 guests</SelectItem>
                                <SelectItem value="100-200">100-200 guests</SelectItem>
                                <SelectItem value="200+">200+ guests</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="select-trigger-custom">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="z-[1000] bg-white border border-gold/30 shadow-luxury-lg">
                                <SelectItem value="5-10L">₹5-10 Lakhs</SelectItem>
                                <SelectItem value="10-25L">₹10-25 Lakhs</SelectItem>
                                <SelectItem value="25-50L">₹25-50 Lakhs</SelectItem>
                                <SelectItem value="50L+">₹50 Lakhs+</SelectItem>
                                <SelectItem value="discuss">Discuss Personally</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-inter text-charcoal tracking-wide">Location</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="City, venue, or destination" 
                                className="border-gold/20 focus:border-gold bg-white font-inter"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-6 tracking-wide">
                      Tell Us More
                    </h2>
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-inter text-charcoal tracking-wide">Your Vision</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={6}
                              placeholder="Share your vision, special requirements, or any specific details that would help us understand your needs better..."
                              className="border-gold/20 focus:border-gold bg-white font-inter resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-charcoal text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300 py-4 font-inter tracking-wide"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}