import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Calendar, Users, MapPin, Phone, Mail, MessageCircle, Building, Plane, Car, Anchor, Crown } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import TajImage from '../assets/Taj.png';
import BentleyImage from '../assets/Bentley.png';
import DiorImage from '../assets/Dior.png';
import HermesImage from '../assets/Hermes.jpg';
import vistajetImage from '../assets/vistajet.png';
import amanImage from '../assets/aman.png';
import louisImage from "../assets/louis.png";
import astonImage from "../assets/aston.png";
import privateJetImage from "../assets/privatejet.png";
import timeImage from "../assets/time.png";
import carImage from "../assets/car.png"
import YatchImage from "../assets/yatch.png"
import luxuryImage from "../assets/luxury.png"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden">
      <ScrollToTop />
      <Header />



      {/* Hero Section */}
      {/* <section className="relative min-h-screen flex flex-col justify-center items-center text-center from-gray-300 
      via-gray-400 to-gray-600 pt-12 sm:pt-16 pb-8 px-4 sm:px-6"></section> */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center pt-12 sm:pt-16 pb-8 px-4 sm:px-6 bg-[#FAF7F2]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/white-diamond-dark.png")'
        }}
      >
        {/* White overlay to lighten the pattern */}
        <div className="absolute inset-0 bg-[#FAF7F2] opacity-75 pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown text-gold mx-auto h-28 w-28 mb-8 animate-luxury-float"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
          </div>
          <h1 className="font-cormorant text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            The Next Name of <span className="italic text-yellow-400">Ultra Luxury</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-4 sm:mb-6">Private Journeys. Legendary Moments.</p>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 sm:mb-12 max-w-xl mx-auto">
            Where discerning individuals discover experiences that transcend the ordinary
          </p>
          <button className="bg-gold font-cormorant text-black text-lg sm:text-xl md:text-2xl font-semibold px-6 sm:px-8 py-3 rounded shadow hover:bg-yellow-500 transition">Begin Your Experience</button>
        </div>
         </section>

      
      {/* Down Arrow pinned to bottom center of hero section */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2" style={{opacity: 1}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-gold h-8 w-8"><path d="m6 9 6 6 6-6"></path></svg>
      </div>

    {/* Experience Journey Section */}
         <section className="py-32 bg-[#F9F6F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-[#111111] mb-6 tracking-wide">
              The Experience Journey
            </h2>
            <p className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Five moments of perfection, orchestrated with silent excellence
            </p>
          </motion.div>

          <div className="space-y-32">
            {/* 1. Jet Arrival */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-cormorant text-2xl font-bold text-[#D4AF37]">01</span>
                </div>
                <h3 className="font-cormorant text-4xl font-bold text-[#111111] mb-6">Jet Arrival</h3>
                <p className="font-dm-sans text-lg text-gray-600 leading-relaxed mb-6">
                  Discreet travel curated just for you. Your journey begins in the clouds, where every detail 
                  has been orchestrated to perfection—from the moment you step aboard to the seamless arrival 
                  at your destination.
                </p>
                <blockquote className="font-cormorant text-xl italic text-[#D4AF37] border-l-4 border-[#D4AF37] pl-6">
                  "Travel is not about the destination—it's about arriving transformed."
                </blockquote>
              </div>
              <motion.div 
                className="lg:order-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="h-96 rounded-lg shadow-luxury overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${privateJetImage})`,
                  }}
                >
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <p className="text-white font-dm-sans text-lg">Private Aviation Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 2. Chauffeur Car */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="h-96 rounded-lg shadow-luxury overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${carImage})`,
                  }}
                >
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <p className="text-white font-dm-sans text-lg">Extraordinary Journeys</p>
                  </div>
                </div>
              </motion.div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-cormorant text-2xl font-bold text-[#D4AF37]">02</span>
                </div>
                <h3 className="font-cormorant text-4xl font-bold text-[#111111] mb-6">Chauffeur Car</h3>
                <p className="font-dm-sans text-lg text-gray-600 leading-relaxed mb-6">
                  Luxury meets desire—the car you've always dreamed of. Experience the pinnacle of automotive 
                  craftsmanship as you glide through the city in vehicles that represent the very essence of elegance.
                </p>
                <blockquote className="font-cormorant text-xl italic text-[#D4AF37] border-l-4 border-[#D4AF37] pl-6">
                  "The journey is as important as the destination."
                </blockquote>
              </div>
            </motion.div>

            {/* 3. Venue Experience */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-cormorant text-2xl font-bold text-[#D4AF37]">03</span>
                </div>
                <h3 className="font-cormorant text-4xl font-bold text-[#111111] mb-6">Venue Experience</h3>
                <p className="font-dm-sans text-lg text-gray-600 leading-relaxed mb-6">
                  A moment suspended in time. Whether it's the grandeur of historic palaces or the intimate charm 
                  of exclusive venues, every location is chosen to create memories that transcend the ordinary.
                </p>
                <blockquote className="font-cormorant text-xl italic text-[#D4AF37] border-l-4 border-[#D4AF37] pl-6">
                  "Architecture is frozen music, and we orchestrate the symphony."
                </blockquote>
              </div>
              <motion.div 
                className="lg:order-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="h-96 rounded-lg shadow-luxury overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${timeImage})`,
                  }}
                >
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <p className="text-white font-dm-sans text-lg">A Moment Suspended in Time</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 4. Yacht Party */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="lg:order-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="h-96 rounded-lg shadow-luxury overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${YatchImage})`,
                  }}
                >
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <p className="text-white font-dm-sans text-lg">Celebrate in Silence or Symphony</p>
                  </div>
                </div>
              </motion.div>
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <Anchor className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-cormorant text-2xl font-bold text-[#D4AF37]">04</span>
                </div>
                <h3 className="font-cormorant text-4xl font-bold text-[#111111] mb-6">Yacht Party</h3>
                <p className="font-dm-sans text-lg text-gray-600 leading-relaxed mb-6">
                  Celebrate in silence or symphony. On the pristine waters, away from the world's distractions, 
                  your celebration becomes a private universe where every wave whispers luxury.
                </p>
                <blockquote className="font-cormorant text-xl italic text-[#D4AF37] border-l-4 border-[#D4AF37] pl-6">
                  "The ocean holds no judgment, only endless possibilities."
                </blockquote>
              </div>
            </motion.div>

            {/* 5. Luxury Gifting */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-cormorant text-2xl font-bold text-[#D4AF37]">05</span>
                </div>
                <h3 className="font-cormorant text-4xl font-bold text-[#111111] mb-6">Luxury Gifting</h3>
                <p className="font-dm-sans text-lg text-gray-600 leading-relaxed mb-6">
                  Memories delivered, sealed in silk. Every gift is more than an object—it's a tangible piece 
                  of the extraordinary experience, wrapped in the finest craftsmanship and attention to detail.
                </p>
                <blockquote className="font-cormorant text-xl italic text-[#D4AF37] border-l-4 border-[#D4AF37] pl-6">
                  "True luxury lies not in the gift, but in the gesture."
                </blockquote>
              </div>
              <motion.div 
                className="lg:order-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="h-96 rounded-lg shadow-luxury overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${luxuryImage})`,
                  }}
                >
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <p className="text-white font-dm-sans text-lg">Memories Delivered, Sealed in Silk</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-ivory mb-6 tracking-wide animate-fade-in-up">
              Moments of Perfection
            </h2>
            <p className="font-dm-sans text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              A curated collection of extraordinary experiences we've brought to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Gallery Item 1 */}
            <div className="gallery-item h-80 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/60 to-charcoal/40 flex items-center justify-center relative">
                <div className="text-center text-ivory p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <Building className="mx-auto h-12 w-12 mb-4 text-gold" />
                  <h3 className="font-cormorant text-2xl font-semibold mb-2">Private Palace Events</h3>
                  <p className="font-dm-sans text-sm opacity-80">Taj Palace, Mumbai</p>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="gallery-item h-80 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/60 to-charcoal/40 flex items-center justify-center relative">
                <div className="text-center text-ivory p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <Anchor className="mx-auto h-12 w-12 mb-4 text-gold" />
                  <h3 className="font-cormorant text-2xl font-semibold mb-2">Yacht Celebrations</h3>
                  <p className="font-dm-sans text-sm opacity-80">Arabian Sea Luxury</p>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="gallery-item h-80 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/60 to-charcoal/40 flex items-center justify-center relative">
                <div className="text-center text-ivory p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <Plane className="mx-auto h-12 w-12 mb-4 text-gold" />
                  <h3 className="font-cormorant text-2xl font-semibold mb-2">Private Aviation</h3>
                  <p className="font-dm-sans text-sm opacity-80">Global Destinations</p>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="gallery-item h-80 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/60 to-charcoal/40 flex items-center justify-center relative">
                <div className="text-center text-ivory p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <Car className="mx-auto h-12 w-12 mb-4 text-gold" />
                  <h3 className="font-cormorant text-2xl font-semibold mb-2">Luxury Transfers</h3>
                  <p className="font-dm-sans text-sm opacity-80">Bentley & Rolls-Royce Fleet</p>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="gallery-item h-80 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/60 to-charcoal/40 flex items-center justify-center relative">
                <div className="text-center text-ivory p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <Sparkles className="mx-auto h-12 w-12 mb-4 text-gold" />
                  <h3 className="font-cormorant text-2xl font-semibold mb-2">Fashion Concierge</h3>
                  <p className="font-dm-sans text-sm opacity-80">Dior & Hermès Styling</p>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="gallery-item h-80 bg-gradient-to-br from-gold/20 to-gold/40 rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-charcoal/60 to-charcoal/40 flex items-center justify-center relative">
                <div className="text-center text-ivory p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <Crown className="mx-auto h-12 w-12 mb-4 text-gold" />
                  <h3 className="font-cormorant text-2xl font-semibold mb-2">Destination Weddings</h3>
                  <p className="font-dm-sans text-sm opacity-80">Global Luxury Venues</p>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/experience">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold/90 px-12 py-4 text-lg font-dm-sans tracking-wide luxury-button shadow-luxury-lg">
                View Complete Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
              Our Philosophy
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="font-cormorant text-xl md:text-2xl text-charcoal text-center leading-relaxed italic mb-8">
              "At Ragam Elyssia, luxury is not an aesthetic—it's an emotion. It whispers, it doesn't shout."
            </p>
            <p className="font-inter text-lg text-warm-gray text-center leading-relaxed max-w-3xl mx-auto">
              We believe true luxury is silent excellence—a presence that speaks without needing to explain. 
              Every experience we design is immersive, intentional, and unrepeatable. From the first interaction 
              to the final flourish, we create sacred moments that feel as effortless as they are unforgettable.
            </p>
          </div>
        </div>
      </section>
{/* {our partners} */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-[#111111] mb-6 tracking-wide">
              Our Partners
            </h2>
            <p className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An exclusive network of the world's most distinguished luxury brands
            </p>
          </motion.div>

          {/* Logo Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Row 1 */}
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={TajImage}  
                  alt="Taj Hotels"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                An Icon of Indian Grandeur
              </p>
            </motion.div>
            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={BentleyImage} 
                  alt="Bentley"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                Extraordinary Journeys
              </p>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={DiorImage} 
                  alt="Dior"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                Couture Excellence
              </p>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={HermesImage}
                  alt="Hermès"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                Forever Craft
              </p>
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={vistajetImage}
                  alt="VistaJet"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                Global Aviation Excellence
              </p>
            </motion.div>

            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={amanImage} 
                  alt="Aman Resorts"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                Sanctuary for the Soul
              </p>
            </motion.div>
            <motion.div 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={louisImage} 
                  alt="Louis Vuitton"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                L'Art du Voyage
              </p>
            </motion.div>

            <motion.div
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-lg shadow-luxury p-8 h-32 flex items-center justify-center group-hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 group-hover:border-[#D4AF37]/30">
                <img 
                  src={astonImage} 
                  alt="Aston Martin"
                  className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-dm-sans text-sm text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                Power, Beauty, Soul
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Link href="/partners">
              <Button variant="outline" className="border-[#D4AF37] text-[#111111] hover:bg-[#D4AF37] hover:text-white font-dm-sans tracking-wide px-12 py-4 text-lg">
                View All Partners
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

     

     <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-wide">
              Our Craft
            </h2>
            <p className="font-cormorant text-xl text-warm-gray max-w-2xl mx-auto">
              Bespoke experiences tailored to discerning clientele
            </p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {/* Private Events */}
            <div className="text-center group h-full flex">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-between w-full">
                <Users className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Private Events</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Intimate celebrations crafted with meticulous attention to every detail
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
      
            {/* Fashion & Brand Activations */}
            <div className="text-center group h-full flex">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-between w-full">
                <Sparkles className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Fashion &amp; Brand Activations</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Sophisticated brand experiences that resonate and inspire
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
      
            {/* Concierge Experiences */}
            <div className="text-center group h-full flex">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-between w-full">
                <Calendar className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Concierge Experiences</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Personalized luxury services beyond ordinary expectations
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
      
            {/* Destination Planning */}
            <div className="text-center group h-full flex">
              <div className="bg-white p-8 rounded-lg shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-between w-full">
                <MapPin className="text-gold h-12 w-12 mx-auto mb-6" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-4 tracking-wide">Destination Planning</h3>
                <p className="font-inter text-warm-gray text-sm leading-relaxed mb-6">
                  Extraordinary journeys to the world's most exclusive venues
                </p>
                <Link href="/services">
                  <Button variant="ghost" className="text-gold hover:text-gold-dark font-inter tracking-wide">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Cinematic CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <Crown className="text-gold mx-auto h-16 w-16 mb-8 animate-luxury-float" />
          </div>
          
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-wide animate-fade-in-up text-luxury-shadow">
            Craft Legacy Moments,
            <span className="block w-full text-gradient-gold italic leading-[1.2] pb-2">Together</span>
          </h2>
          
          <p className="font-dm-sans text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-cream/90 leading-relaxed animate-fade-in-up">
            Let's co-create elegance with your vision
          </p>
          
          <p className="font-dm-sans text-lg mb-16 max-w-4xl mx-auto text-cream/70 leading-relaxed animate-fade-in-up">
            Whether you're planning a milestone celebration or seeking to partner with us, 
            every extraordinary journey begins with a single conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up">
            <Link href="/consultation" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gold text-charcoal hover:bg-gold/90 px-8 sm:px-16 py-5 sm:py-6 text-lg sm:text-xl font-dm-sans tracking-wide luxury-button shadow-luxury-lg transform hover:scale-105 transition-all duration-300">
                Start The Conversation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/partners" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gold text-charcoal hover:bg-gold/90 px-8 sm:px-16 py-5 sm:py-6 text-lg sm:text-xl font-dm-sans tracking-wide luxury-button shadow-luxury-lg transform hover:scale-105 transition-all duration-300">
                Partner With Us
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="luxury-card bg-ivory/5 backdrop-blur-sm border-gold/20 hover:border-gold/40 text-center">
              <CardContent className="p-8">
                <Phone className="text-gold mx-auto h-8 w-8 mb-4" />
                <h3 className="font-cormorant text-black text-xl font-semibold  mb-2">Direct Access</h3>
                <p className="font-dm-sans text-cream/80 text-sm">+91 9632069662</p>
              </CardContent>
            </Card>
            
            <Card className="luxury-card bg-ivory/5 backdrop-blur-sm border-gold/20 hover:border-gold/40 text-center">
              <CardContent className="p-8">
                <Mail className="text-gold mx-auto h-8 w-8 mb-4" />
                <h3 className="font-cormorant  text-xl font-semibold text-black mb-2">Private Correspondence</h3>
                <p className="font-dm-sans text-cream/80 text-sm">ragamelyssia@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="luxury-card bg-ivory/5 backdrop-blur-sm border-gold/20 hover:border-gold/40 text-center">
              <CardContent className="p-8">
                <MessageCircle className="text-gold mx-auto h-8 w-8 mb-4" />
                <h3 className="font-cormorant text-xl font-semibold text-black mb-2">Instant Connect</h3>
                <p className="font-dm-sans text-cream/80 text-sm">Contact Form Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
