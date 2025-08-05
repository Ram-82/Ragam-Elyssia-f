import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  Crown, 
  Sparkles,
  Plane,
  Car,
  Building,
  Anchor,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Star,
  Heart,
  Award,
  Clock,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
  icon?: React.ReactNode;
}

const LuxuryChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Greetings from Ragam Elyssia. I'm your personal luxury concierge, ready to assist you with any questions about our services, company, or how we can help bring your vision to life. How may I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies: QuickReply[] = [
    { id: '1', text: 'Our Services', icon: <Sparkles className="h-4 w-4" /> },
    { id: '2', text: 'About Ragam Elyssia', icon: <Crown className="h-4 w-4" /> },
    { id: '3', text: 'Contact Information', icon: <Phone className="h-4 w-4" /> },
    { id: '4', text: 'Book Consultation', icon: <Calendar className="h-4 w-4" /> },
    { id: '5', text: 'Our Process', icon: <Star className="h-4 w-4" /> },
    { id: '6', text: 'Pricing & Budget', icon: <Award className="h-4 w-4" /> },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Comprehensive knowledge base for the chatbot
  const knowledgeBase = {
    company: {
      name: "Ragam Elyssia",
      founder: "Ram",
      title: "Founder & Creative Director",
      philosophy: "Luxury is not an aesthetic—it's an emotion. It whispers, it doesn't shout. It's found in restraint, precision, and personalization.",
      values: {
        precision: "Every detail meticulously planned and executed with unwavering attention to perfection.",
        passion: "Driven by an authentic love for creating moments that transcend ordinary expectations.",
        excellence: "An uncompromising commitment to delivering experiences of the highest caliber."
      },
      approach: "We believe true luxury is silent excellence—a presence that speaks without needing to explain. Every experience we design is immersive, intentional, and unrepeatable."
    },
    services: {
      privateEvents: {
        title: "Private Events",
        description: "Intimate celebrations crafted with meticulous attention to every detail",
        offerings: [
          "Milestone celebrations and anniversaries",
          "Intimate dinner parties and soirées",
          "Family gatherings and reunions",
          "Personal branding events",
          "Exclusive product launches"
        ],
        approach: "We understand that private events are deeply personal. Our approach begins with understanding your story, your relationships, and the emotions you wish to evoke."
      },
      fashionBrand: {
        title: "Fashion & Brand Activations",
        description: "Sophisticated brand experiences that resonate and inspire excellence",
        offerings: [
          "Fashion show production and runway events",
          "Brand launch campaigns and activations",
          "Corporate hospitality experiences",
          "Influencer and media events",
          "Luxury retail experiential marketing"
        ],
        approach: "Brand experiences require a delicate balance of creativity and strategic thinking. We craft immersive environments that create emotional connections with your audience."
      },
      concierge: {
        title: "Concierge Experiences",
        description: "Personalized luxury services that exceed ordinary expectations",
        offerings: [
          "VIP travel coordination and itinerary planning",
          "Exclusive access to events and venues",
          "Personal shopping and lifestyle curation",
          "Luxury accommodation arrangements",
          "Bespoke entertainment and cultural experiences"
        ],
        approach: "Our concierge services extend far beyond typical arrangements. We anticipate needs before they're expressed and create access where none existed."
      },
      destination: {
        title: "Destination Planning",
        description: "Extraordinary journeys to the world's most exclusive venues",
        offerings: [
          "Destination wedding planning and coordination",
          "Corporate retreat design and execution",
          "Luxury travel experiences and expeditions",
          "Cultural immersion and heritage tours",
          "Multi-city event coordination"
        ],
        approach: "Destination planning requires intimate knowledge of locations, cultures, and logistics. We leverage our global network to create seamless experiences."
      }
    },
    process: {
      steps: [
        {
          number: 1,
          title: "Consultation",
          description: "Deep discovery session to understand your vision, preferences, and expectations"
        },
        {
          number: 2,
          title: "Concept",
          description: "Creative development and detailed planning tailored to your unique requirements"
        },
        {
          number: 3,
          title: "Coordination",
          description: "Meticulous execution management ensuring every detail is perfectly orchestrated"
        },
        {
          number: 4,
          title: "Celebration",
          description: "Flawless delivery of an extraordinary experience that exceeds expectations"
        }
      ]
    },
    contact: {
      phone: "+91 9632069662",
      email: "ragamelyssia@gmail.com",
      hours: "9 AM - 9 PM IST",
      response: "Within 24 hours",
      location: "Based in India, Serving Global Clients",
      whatsapp: "https://wa.me/919632069662?text=Hello! I'm interested in Ragam Elyssia's luxury services."
    },
    pricing: {
      ranges: [
        "₹5-10 Lakhs",
        "₹10-25 Lakhs", 
        "₹25-50 Lakhs",
        "₹50 Lakhs+",
        "Discuss Personally"
      ],
      note: "We offer personalized pricing based on your specific requirements and vision. Each project is unique and priced accordingly."
    }
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Company information - improved matching
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('ragam') || lowerMessage.includes('elyssia') || lowerMessage.includes('tell me') || lowerMessage.includes('what is')) {
      return `Ragam Elyssia is an ultra-luxury event planning and concierge service founded by Ram, our Creative Director. Our philosophy is that "luxury is not an aesthetic—it's an emotion. It whispers, it doesn't shout." We're built for the discerning client who expects nothing short of excellence. Our core values are Precision, Passion, and Excellence. We believe in silent excellence—creating experiences that speak without needing to explain.`;
    }
    
    // Services - improved matching
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer') || lowerMessage.includes('what services') || lowerMessage.includes('what do you offer')) {
      return `We offer four main luxury service categories:

1. **Private Events**: Intimate celebrations including milestone celebrations, dinner parties, family gatherings, and exclusive product launches.

2. **Fashion & Brand Activations**: Fashion shows, brand launches, corporate hospitality, and luxury retail experiences.

3. **Concierge Experiences**: VIP travel coordination, exclusive venue access, personal shopping, and bespoke entertainment.

4. **Destination Planning**: Destination weddings, corporate retreats, luxury travel, and multi-city coordination.

Each service is tailored to your unique vision and executed with meticulous attention to detail.`;
    }
    
    // Contact information
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('call')) {
      return `You can reach us through multiple channels:

📞 **Phone**: ${knowledgeBase.contact.phone} (${knowledgeBase.contact.hours})
📧 **Email**: ${knowledgeBase.contact.email} (Response within ${knowledgeBase.contact.response})
🌍 **Location**: ${knowledgeBase.contact.location}
💬 **WhatsApp**: Available for immediate assistance

We also offer consultations by appointment only, both virtual and in-person.`;
    }
    
    // Consultation booking
    if (lowerMessage.includes('consultation') || lowerMessage.includes('book') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
      return `To book a consultation, you can:

1. **Visit our consultation page** on the website to fill out a detailed form
2. **Call us directly** at ${knowledgeBase.contact.phone}
3. **Email us** at ${knowledgeBase.contact.email}
4. **Use WhatsApp** for immediate assistance

Our consultation process includes understanding your vision, event details, budget, and timeline. We'll respond within 24 hours to schedule your personal consultation.`;
    }
    
    // Process
    if (lowerMessage.includes('process') || lowerMessage.includes('how do you work') || lowerMessage.includes('steps') || lowerMessage.includes('procedure')) {
      return `Our process follows four key steps:

1. **Consultation**: Deep discovery session to understand your vision, preferences, and expectations
2. **Concept**: Creative development and detailed planning tailored to your unique requirements  
3. **Coordination**: Meticulous execution management ensuring every detail is perfectly orchestrated
4. **Celebration**: Flawless delivery of an extraordinary experience that exceeds expectations

We begin with a comprehensive consultation to understand your story and create a personalized approach.`;
    }
    
    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget') || lowerMessage.includes('how much') || lowerMessage.includes('fee')) {
      return `Our pricing is personalized based on your specific requirements. We work with various budget ranges:

• ₹5-10 Lakhs
• ₹10-25 Lakhs  
• ₹25-50 Lakhs
• ₹50 Lakhs+
• Discuss Personally

Each project is unique and priced accordingly. We believe in transparency and will discuss pricing during your consultation based on your vision, guest count, location, and specific requirements.`;
    }
    
    // Specific services
    if (lowerMessage.includes('wedding') || lowerMessage.includes('marriage') || lowerMessage.includes('ceremony')) {
      return `We specialize in creating extraordinary wedding experiences, including destination weddings. Our wedding services include:

• Traditional and modern fusion celebrations
• Destination wedding planning and coordination
• Palace venues, beachfront ceremonies, vineyard celebrations
• Cultural and heritage wedding experiences
• Multi-city wedding coordination

We understand that weddings are deeply personal. We begin by understanding your story, relationships, and the emotions you wish to evoke.`;
    }
    
    if (lowerMessage.includes('fashion') || lowerMessage.includes('brand') || lowerMessage.includes('runway') || lowerMessage.includes('show')) {
      return `Our Fashion & Brand Activation services include:

• Fashion show production and runway events
• Brand launch campaigns and activations
• Corporate hospitality experiences
• Influencer and media events
• Luxury retail experiential marketing

We craft immersive environments that not only showcase your brand but create emotional connections with your audience, ensuring lasting impact.`;
    }
    
    if (lowerMessage.includes('concierge') || lowerMessage.includes('travel') || lowerMessage.includes('lifestyle')) {
      return `Our Concierge Experiences go beyond typical arrangements:

• VIP travel coordination and itinerary planning
• Exclusive access to events and venues
• Personal shopping and lifestyle curation
• Luxury accommodation arrangements
• Bespoke entertainment and cultural experiences

We anticipate needs before they're expressed and create access where none existed, orchestrating experiences that feel effortlessly perfect.`;
    }
    
    if (lowerMessage.includes('destination') || lowerMessage.includes('travel') || lowerMessage.includes('location') || lowerMessage.includes('venue')) {
      return `Our Destination Planning services include:

• Destination wedding planning and coordination
• Corporate retreat design and execution
• Luxury travel experiences and expeditions
• Cultural immersion and heritage tours
• Multi-city event coordination

We leverage our global network to create seamless experiences that honor local traditions while maintaining the highest standards of luxury.`;
    }
    
    // General inquiry
    return `I'd be delighted to help you learn more about Ragam Elyssia. We're an ultra-luxury event planning and concierge service that specializes in creating extraordinary experiences. 

You can ask me about:
• Our services (Private Events, Fashion & Brand Activations, Concierge Experiences, Destination Planning)
• About our company and philosophy
• Contact information and how to reach us
• Booking consultations
• Our process and approach
• Pricing and budget ranges

What specific aspect would you like to know more about?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse = generateResponse(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply: QuickReply) => {
    setInputValue(reply.text);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] shadow-luxury-lg border-2 border-white/20 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[400px] sm:h-[500px] mx-4 sm:mx-0"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="h-full bg-gradient-to-br from-[#FAF7F2] to-[#F5F5DC] border-2 border-[#D4AF37]/30 shadow-luxury-xl">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] p-4 rounded-t-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Crown className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-white font-semibold text-lg">Ragam Elyssia</h3>
                      <p className="text-white/80 text-xs font-dm-sans">Luxury Concierge</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-full p-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${
                            message.isUser
                              ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white'
                              : 'bg-white/80 text-gray-800 border border-[#D4AF37]/20'
                          } shadow-sm`}
                        >
                          <p className="font-dm-sans text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 ${message.isUser ? 'text-white/70' : 'text-gray-500'}`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white/80 text-gray-800 border border-[#D4AF37]/20 p-3 rounded-2xl shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-gray-600 mb-2 font-dm-sans">How can I assist you today?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {quickReplies.map((reply) => (
                        <Button
                          key={reply.id}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs h-8 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-200"
                        >
                          {reply.icon}
                          <span className="hidden sm:inline ml-1">{reply.text}</span>
                          <span className="sm:hidden ml-1">{reply.text.split(' ')[0]}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-[#D4AF37]/20">
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about Ragam Elyssia..."
                      className="flex-1 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 bg-white/80 text-gray-800 placeholder-gray-500"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white px-3 disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryChatbot; 