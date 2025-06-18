import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, X } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface CalendarSchedulerProps {
  consultationData: any;
  onComplete: (scheduleData: any) => void;
  onClose: () => void;
}

export default function CalendarScheduler({ consultationData, onComplete, onClose }: CalendarSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();

  // Available time slots (in a real app, this would come from an API)
  const availableSlots = [
    { time: "10:00 AM - 11:00 AM", value: "10:00" },
    { time: "2:00 PM - 3:00 PM", value: "14:00" },
    { time: "4:00 PM - 5:00 PM", value: "16:00" },
    { time: "6:00 PM - 7:00 PM", value: "18:00" }
  ];

  // Generate next 30 days (excluding weekends for this example)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates.slice(0, 10); // Show first 10 available dates
  };

  const availableDates = generateAvailableDates();

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Selection Required",
        description: "Please select both date and time for your consultation.",
        variant: "destructive"
      });
      return;
    }

    try {
      const scheduledDateTime = `${selectedDate}T${selectedTime}:00`;
      
      await apiRequest("POST", `/api/consultations/${consultationData.id}/schedule`, {
        scheduledDateTime
      });

      const scheduleData = {
        scheduledDateTime,
        selectedDate,
        selectedTime,
        consultationFee: 5000
      };

      toast({
        title: "Time Slot Selected",
        description: "Your consultation time has been scheduled successfully!"
      });

      onComplete(scheduleData);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to schedule consultation. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-3xl font-bold text-charcoal flex items-center justify-between">
            Select Your Consultation Time
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Date Selection */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-charcoal mb-4">Select Date</h4>
            <div className="space-y-3">
              {availableDates.map((dateOption) => (
                <Button
                  key={dateOption.date}
                  variant={selectedDate === dateOption.date ? "default" : "outline"}
                  className={`w-full justify-start p-4 h-auto ${
                    selectedDate === dateOption.date 
                      ? "gold-gradient text-white" 
                      : "border-gray-200 hover:border-gold hover:bg-gold/5"
                  }`}
                  onClick={() => setSelectedDate(dateOption.date)}
                >
                  <CalendarDays className="mr-3 h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium">{dateOption.display}</div>
                    <div className="text-sm opacity-70">Available</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Time Selection */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-charcoal mb-4">Available Times</h4>
            <div className="space-y-3 mb-8">
              {availableSlots.map((slot) => (
                <Button
                  key={slot.value}
                  variant={selectedTime === slot.value ? "default" : "outline"}
                  className={`w-full justify-between p-4 h-auto ${
                    selectedTime === slot.value 
                      ? "gold-gradient text-white" 
                      : "border-gray-200 hover:border-gold hover:bg-gold/5"
                  }`}
                  onClick={() => setSelectedTime(slot.value)}
                >
                  <div className="flex items-center">
                    <Clock className="mr-3 h-4 w-4" />
                    <span className="font-medium">{slot.time}</span>
                  </div>
                  <span className="text-sm opacity-70">Available</span>
                </Button>
              ))}
            </div>
            
            {/* Consultation Fee Info */}
            <Card className="bg-gold/10 border-gold/20">
              <CardContent className="p-6">
                <h5 className="font-semibold text-charcoal mb-2">Consultation Fee</h5>
                <p className="text-sm text-gray-700 mb-3">Secure your consultation with a refundable deposit</p>
                <div className="text-2xl font-bold text-gold mb-1">₹5,000</div>
                <p className="text-xs text-gray-600">*Fully adjustable towards your event package</p>
              </CardContent>
            </Card>
            
            <Button 
              onClick={handleConfirm}
              className="w-full gold-gradient text-white hover:shadow-lg transition-all duration-300 mt-6"
              disabled={!selectedDate || !selectedTime}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              Confirm & Proceed to Payment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
