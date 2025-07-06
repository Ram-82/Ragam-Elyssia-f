import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, Crown, Star } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Dashboard() {
  const memberSince = new Date(2025, 5, 25).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const savedExperiences = [
    {
      title: "Private Jet & Royal Suite",
      description: "Mumbai to Bangalore via private jet, luxury transfer, and Taj Presidential Suite",
      location: "Mumbai - Bangalore",
    },
    {
      title: "Goan Yacht Experience",
      description: "Luxury yacht charter with Hermès gifting experience",
      location: "Goa Coast",
    },
  ];

  const recentActivities = [
    {
      title: "Consultation Requested",
      description: "Private event planning consultation scheduled",
      timeAgo: "2 hours ago",
      icon: <Star className="text-gold" />,
    },
    {
      title: "Partner Connection",
      description: "Bentley India experience curated for you",
      timeAgo: "1 day ago",
      icon: <Crown className="text-gold" />,
    },
    {
      title: "Venue Reserved",
      description: "Taj Presidential Suite confirmed for March",
      timeAgo: "3 days ago",
      icon: <CalendarDays className="text-gold" />,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 lg:px-8 text-center">
          <Crown className="text-gold mx-auto h-12 w-12 mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-2 tracking-wide">
            Your Private Concierge
          </h1>
          <p className="font-inter text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Welcome to your exclusive dashboard, where luxury experiences await your command.
          </p>
          <p className="font-inter text-xs text-muted-foreground mt-4">
            Member since {memberSince}
          </p>
        </section>

        {/* Quick Access Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
          <Link href="/consultation" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <CalendarDays className="text-gold mx-auto mb-2 h-8 w-8" />
            <h3 className="font-playfair font-semibold text-charcoal mb-1">Book Experience</h3>
            <p className="font-inter text-xs text-muted-foreground">Schedule a new luxury consultation</p>
          </Link>
          <Link href="/experiences" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Star className="text-gold mx-auto mb-2 h-8 w-8" />
            <h3 className="font-playfair font-semibold text-charcoal mb-1">Experiences</h3>
            <p className="font-inter text-xs text-muted-foreground">Explore curated journeys</p>
          </Link>
          <Link href="/partners" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Crown className="text-gold mx-auto mb-2 h-8 w-8" />
            <h3 className="font-playfair font-semibold text-charcoal mb-1">Partners</h3>
            <p className="font-inter text-xs text-muted-foreground">Elite luxury network</p>
          </Link>
          <Link href="/preferences" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="text-gold mx-auto mb-2 h-8 w-8" />
            <h3 className="font-playfair font-semibold text-charcoal mb-1">Preferences</h3>
            <p className="font-inter text-xs text-muted-foreground">Customize your experience</p>
          </Link>
        </section>

        {/* Saved Experiences and Recent Activity */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white border border-muted rounded-lg shadow-sm p-6">
            <h3 className="font-playfair font-semibold text-charcoal mb-4 flex items-center gap-2">
              <Star className="text-gold" /> Saved Experiences
            </h3>
            <div className="space-y-4">
              {savedExperiences.map((exp, idx) => (
                <div key={idx} className="border border-muted rounded-md p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-charcoal">{exp.title}</h4>
                    <p className="font-inter text-xs text-muted-foreground">{exp.description}</p>
                    <p className="font-inter text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {exp.location}
                    </p>
                  </div>
                  <Button variant="outline" size="icon" aria-label="Favorite">
                    <Star className="h-4 w-4 text-gold" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View All Saved Experiences
            </Button>
          </Card>

          <Card className="bg-white border border-muted rounded-lg shadow-sm p-6">
            <h3 className="font-playfair font-semibold text-charcoal mb-4 flex items-center gap-2">
              <Clock className="text-gold" /> Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1">{activity.icon}</div>
                  <div>
                    <h4 className="font-semibold text-charcoal">{activity.title}</h4>
                    <p className="font-inter text-xs text-muted-foreground">{activity.description}</p>
                    <p className="font-inter text-xs text-muted-foreground mt-1">{activity.timeAgo}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View Complete History
            </Button>
          </Card>
        </section>

        {/* Personal Concierge Section */}
        <section className="bg-charcoal text-ivory py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <Crown className="text-gold mx-auto h-12 w-12 mb-6" />
            <h2 className="font-playfair text-3xl font-bold mb-4 tracking-wide">
              Personal Concierge Available 24/7
            </h2>
            <Button className="gold-gradient text-white px-6 py-3 mt-4">
              Connect with Your Concierge
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
