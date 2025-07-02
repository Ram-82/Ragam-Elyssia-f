import React,{ useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin } from 'lucide-react';
import { Link } from 'wouter';

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
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
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login submitted:', loginForm);
    }, 1500);
  };

  const handleSignupSubmit = async () => {
    if (signupForm.password !== signupForm.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup submitted:', signupForm);
    }, 1500);
  };

  const updateLoginForm = (field: string, value: string) => {
    setLoginForm(prev => ({ ...prev, [field]: value }));
  };

  const updateSignupForm = (field: string, value: string) => {
    setSignupForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 flex items-center justify-center p-4">
      <Link to="/" className="text-black underline absolute top-4 right-4 z-50">
        ← Back to Home
      </Link>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-stone-300 transform rotate-45 scale-150"></div>
      </div>
      
      <div className="relative w-full max-w-md">
        {/* Main Container */}
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl border border-amber-100/50 overflow-hidden">
          {/* Header */}
          <div className="p-8 pb-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-light text-stone-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                Welcome
              </h1>
              <p className="text-stone-600 text-sm font-light">Experience elegance in every interaction</p>
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
          <div className="px-8 pb-8">
            {activeTab === 'login' ? (
              // Login Form
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => updateLoginForm('email', e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
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
                  <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
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
            ) : (
              // Signup Form
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type="text"
                      value={signupForm.fullName}
                      onChange={(e) => updateSignupForm('fullName', e.target.value)}
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type="email"
                      value={signupForm.email}
                      onChange={(e) => updateSignupForm('email', e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white/70 backdrop-blur-sm text-stone-800 placeholder-stone-500"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
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
                      <Lock className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
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

    
  );
};

export default LoginSignupPage;