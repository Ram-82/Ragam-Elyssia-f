import React,{ useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { API_BASE_URL, apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Header from "@/components/Header";
import { useUser } from "@/context/UserContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from '@/components/ui/toaster';

export default function LoginSignupPage() {
  const [, setLocation] = useLocation();
  const { refreshUser } = useUser() as { refreshUser: () => void };
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await apiRequest('POST', `${API_BASE_URL}/api/login`, {
        email: loginForm.email,
        password: loginForm.password
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({
          title: 'Login Successful',
          description: 'Welcome back!',
        });
        localStorage.setItem('token', data.token);
        await refreshUser();
        setTimeout(() => setLocation('/dashboard'), 2000); // Wait 3.5 seconds before navigating
        return;
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Login failed',
          variant: 'destructive',
        });
      }
    } catch (err: any) {
      // Try to parse error message from backend if available
      if (err instanceof Error && err.message) {
        let msg = err.message;
        // Try to extract backend error message from fetch error
        try {
          const parsed = JSON.parse(msg.split(':').slice(1).join(':'));
          if (parsed && parsed.message) {
            toast({
              title: 'Error',
              description: parsed.message,
              variant: 'destructive',
            });
            setIsLoading(false);
            return;
          }
        } catch {}
        toast({
          title: 'Network Error',
          description: msg,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Network Error',
          description: 'Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async () => {
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    try {
      const res = await apiRequest('POST', `${API_BASE_URL}/api/signup`, {
        fullName: signupForm.fullName,
        email: signupForm.email,
        password: signupForm.password
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({
          title: 'Signup Successful',
          description: 'You can now log in.',
        });
        setSignupForm({ fullName: '', email: '', password: '', confirmPassword: '' });
        setActiveTab('login');
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Signup failed',
          variant: 'destructive',
        });
      }
    } catch (err: any) {
      if (err instanceof Error && err.message) {
        let msg = err.message;
        try {
          const parsed = JSON.parse(msg.split(':').slice(1).join(':'));
          if (parsed && parsed.message) {
            toast({
              title: 'Error',
              description: parsed.message,
              variant: 'destructive',
            });
            setIsLoading(false);
            return;
          }
        } catch {}
        toast({
          title: 'Network Error',
          description: msg,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Network Error',
          description: 'Please try again.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateLoginForm = (field: string, value: string) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
  };

  const updateSignupForm = (field: string, value: string) => {
    setSignupForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <div
        className="relative min-h-screen flex items-center justify-center bg-[#FAF7F2] pt-24 sm:pt-32 pb-12 px-4"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/white-diamond-dark.png")' }}
      >
        <div className="absolute inset-0 bg-[#FAF7F2] opacity-75 pointer-events-none z-0"></div>
        <div className="relative w-full max-w-full md:w-[440px] lg:w-[520px] flex flex-col items-center z-10">
          <Toaster />
          <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border border-amber-100/50 overflow-hidden w-full mt-2">
          {/* Header */}
            <div className="p-4 sm:p-8 pb-4">
            <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-light text-stone-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                Welcome
              </h1>
                <p className="text-stone-600 text-xs sm:text-sm font-light">Experience elegance in every interaction</p>
            </div>
            {/* Tab Navigation */}
            <div className="flex bg-stone-100/50 rounded-2xl p-1 mb-8">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === 'login'
                    ? 'bg-white text-stone-800 shadow-md'
                    : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === 'signup'
                    ? 'bg-white text-stone-800 shadow-md'
                    : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
          {/* Forms Container */}
            <div className="px-2 sm:px-8 pb-8">
              {activeTab === 'login' && (
              // Login Form
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-6 w-6" style={{ color: '#000', opacity: 1, filter: 'none' }} />
                    </div>
                    <input
                      type="email"
                        name="email"
                        autoComplete="username"
                      value={loginForm.email}
                      onChange={(e) => updateLoginForm('email', e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-6 w-6" style={{ color: '#000', opacity: 1, filter: 'none' }} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                        name="password"
                        autoComplete="current-password"
                      value={loginForm.password}
                      onChange={(e) => updateLoginForm('password', e.target.value)}
                      placeholder="Password"
                      className="w-full pl-12 pr-12 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                    <a href="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleLoginSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-6 rounded-2xl font-medium hover:from-amber-700 hover:to-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
              )}
              {activeTab === 'signup' && (
              // Signup Form
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-6 w-6" style={{ color: '#000', opacity: 1, filter: 'none' }} />
                    </div>
                    <input
                      type="text"
                        name="fullName"
                        autoComplete="name"
                      value={signupForm.fullName}
                      onChange={(e) => updateSignupForm('fullName', e.target.value)}
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-6 w-6" style={{ color: '#000', opacity: 1, filter: 'none' }} />
                    </div>
                    <input
                      type="email"
                        name="email"
                        autoComplete="email"
                      value={signupForm.email}
                      onChange={(e) => updateSignupForm('email', e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-6 w-6" style={{ color: '#000', opacity: 1, filter: 'none' }} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                        name="password"
                        autoComplete="new-password"
                      value={signupForm.password}
                      onChange={(e) => updateSignupForm('password', e.target.value)}
                      placeholder="Password"
                      className="w-full pl-12 pr-12 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-6 w-6" style={{ color: '#000', opacity: 1, filter: 'none' }} />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        autoComplete="new-password"
                      value={signupForm.confirmPassword}
                      onChange={(e) => updateSignupForm('confirmPassword', e.target.value)}
                      placeholder="Confirm Password"
                      className="w-full pl-12 pr-12 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSignupSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-6 rounded-2xl font-medium hover:from-amber-700 hover:to-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>        
    </div>
      <Footer />
    </>
  );
}