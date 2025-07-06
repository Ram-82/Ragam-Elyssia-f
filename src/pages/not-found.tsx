import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function NotFound() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 py-24">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-8 pb-12 flex flex-col items-center">
            <div className="flex flex-col items-center mb-4 gap-2">
              <AlertCircle className="h-10 w-10 text-red-500 animate-bounce" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">404 Page Not Found</h1>
              {/* Animated luxury emoji (crown) */}
              <span className="text-6xl animate-bounce-slow mt-2 select-none" role="img" aria-label="Luxury Crown">👑</span>
            </div>
            <Link href="/" className="mt-8 inline-block text-amber-700 hover:text-amber-900 font-medium underline transition-colors">Return to Home</Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}