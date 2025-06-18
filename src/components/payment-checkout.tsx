// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, X } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
//   throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
// }

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentCheckoutProps {
  bookingData: any;
  onComplete: (paymentData: any) => void;
  onClose: () => void;
}

function CheckoutForm({ onComplete }: { onComplete: (data: any) => void }) {
  // const stripe = useStripe();
  // const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!stripe || !elements) {
    //   return;
    // }

    setIsProcessing(true);

    try {
      // const { error, paymentIntent } = await stripe.confirmPayment({
      //   elements,
      //   confirmParams: {
      //     return_url: window.location.origin,
      //   },
      //   redirect: 'if_required'
      // });

      // if (error) {
      //   toast({
      //     title: "Payment Failed",
      //     description: error.message,
      //     variant: "destructive",
      //   });
      // } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      //   // Confirm payment on backend
      //   await apiRequest("POST", "/api/confirm-payment", {
      //     paymentIntentId: paymentIntent.id,
      //     consultationId: bookingData.id
      //   });

      //   toast({
      //     title: "Payment Successful",
      //     description: "Your consultation has been confirmed!",
      //   });

      //   onComplete({
      //     paymentIntentId: paymentIntent.id,
      //     paymentStatus: 'paid',
      //     amount: 5000
      //   });
      // }
    } catch (error: any) {
      toast({
        title: "Payment Error",
        description: "An error occurred while processing your payment.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* <PaymentElement /> */}
      <Button 
        type="submit" 
        className="w-full gold-gradient text-white hover:shadow-lg transition-all duration-300"
        disabled={isProcessing}
      >
        <Shield className="mr-2 h-4 w-4" />
        {isProcessing ? "Processing..." : "Complete Secure Payment"}
      </Button>
    </form>
  );
}

export default function PaymentCheckout({ bookingData, onComplete, onClose }: PaymentCheckoutProps) {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Create payment intent when component mounts
    const createPaymentIntent = async () => {
      try {
        const response = await apiRequest("POST", "/api/create-payment-intent", {
          consultationId: bookingData.id
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error: any) {
        toast({
          title: "Error",
          description: "Failed to initialize payment. Please try again.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [bookingData.id]);

  if (loading) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-lg">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!clientSecret) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-lg">
          <div className="text-center py-8">
            <p className="text-red-600">Failed to initialize payment. Please try again.</p>
            <Button onClick={onClose} className="mt-4">Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl font-bold text-charcoal flex items-center justify-between">
            <div className="flex items-center">
              <CreditCard className="mr-2 h-6 w-6 text-gold" />
              Secure Payment
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </DialogTitle>
          <p className="text-gray-600">Complete your consultation booking</p>
        </DialogHeader>
        
        {/* Booking Summary */}
        <Card className="bg-cream border-gold/20 mb-6">
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Consultation Date:</span>
                <span className="font-medium">
                  {new Date(bookingData.scheduledDateTime).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Time:</span>
                <span className="font-medium">
                  {new Date(bookingData.scheduledDateTime).toLocaleTimeString('en-US', { 
                    hour: 'numeric', 
                    minute: '2-digit', 
                    hour12: true 
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Event Type:</span>
                <span className="font-medium capitalize">{bookingData.eventType}</span>
              </div>
              <div className="flex justify-between font-semibold text-gold border-t pt-2">
                <span>Consultation Fee:</span>
                <span>₹5,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* <Elements stripe={stripePromise} options={{ clientSecret }}> */}
          <CheckoutForm onComplete={onComplete} />
        {/* </Elements> */}
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 flex items-center justify-center">
            <Shield className="mr-1 h-3 w-3" />
            Your payment information is encrypted and secure
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
