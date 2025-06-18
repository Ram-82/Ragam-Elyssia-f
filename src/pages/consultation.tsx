import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

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
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center">
        <Card className="bg-white border-0 shadow-luxury mb-12">
          <CardContent className="p-12 text-center">
            <h1 className="font-playfair text-4xl font-bold text-charcoal mb-6">Thank You</h1>
            <p className="font-cormorant text-xl text-warm-gray mb-8">
              Your consultation request has been received. We're excited to learn more about your vision.
            </p>
            <Button href="/" className="bg-charcoal text-ivory hover:bg-gold hover:text-charcoal transition-all duration-300 px-8 py-3 font-inter tracking-wide">
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-cream/30">
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