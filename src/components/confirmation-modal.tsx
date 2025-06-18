import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Calendar, Mail, FileText, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConfirmationModalProps {
  bookingData: any;
  onClose: () => void;
}

export default function ConfirmationModal({ bookingData, onClose }: ConfirmationModalProps) {
  const { toast } = useToast();

  const handleDownloadConfirmation = () => {
    // In a real application, this would generate and download a PDF
    toast({
      title: "Download Started",
      description: "Your consultation summary is being prepared for download."
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <DialogTitle className="font-playfair text-3xl font-bold text-charcoal mb-2">
              Consultation Confirmed!
            </DialogTitle>
            <p className="text-gray-600">Thank you for choosing Ragam Elyssia</p>
          </div>
        </DialogHeader>
        
        {/* Booking Summary */}
        <Card className="bg-cream border-gold/20 mb-8">
          <CardContent className="p-6">
            <h4 className="font-playfair text-xl font-semibold text-charcoal mb-4">Booking Summary</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Date & Time:</span>
                <span className="font-medium">
                  {formatDate(bookingData.scheduledDateTime)} at {formatTime(bookingData.scheduledDateTime)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Event Type:</span>
                <span className="font-medium capitalize">{bookingData.eventType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Location:</span>
                <span className="font-medium">{bookingData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Budget Range:</span>
                <span className="font-medium">{bookingData.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Consultation Fee:</span>
                <span className="font-medium text-gold">₹5,000 (Paid)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Booking ID:</span>
                <span className="font-medium font-mono">{bookingData.bookingId}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* What's Next */}
        <Card className="bg-gold/10 border-gold/20 mb-8">
          <CardContent className="p-6">
            <h5 className="font-semibold text-charcoal mb-4">What's Next?</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-gold mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Confirmation email with meeting details sent to your inbox</span>
              </li>
              <li className="flex items-start">
                <Calendar className="text-gold mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Calendar invite added to your schedule</span>
              </li>
              <li className="flex items-start">
                <FileText className="text-gold mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Consultation preparation guide attached</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-gold mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-sm">We'll call 15 minutes before your scheduled time</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={handleDownloadConfirmation}
            className="gold-gradient text-white hover:shadow-lg transition-all duration-300 flex-1"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Summary
          </Button>
          <Button 
            onClick={onClose}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
