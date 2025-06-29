import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add your login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-stone-200/20 backdrop-blur-3xl"></div>
      
      <div className="relative w-full max-w-md">
        {/* Main container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-stone-200/50 p-8 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-stone-300 rounded-2xl mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-white rounded-xl"></div>
            </div>
            <h1 className="text-3xl font-light text-stone-800 tracking-wide" style={{fontFamily: 'Playfair Display, serif'}}>
              Welcome Back
            </h1>
            <p className="text-stone-500 text-sm font-light">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 pr-12 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            <div
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-amber-200 to-stone-300 hover:from-amber-300 hover:to-stone-400 text-stone-800 font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg cursor-pointer text-center"
            >
              Sign In
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-stone-200/50">
            <p className="text-center text-sm text-stone-500">
              Don't have an account?{' '}
              <a href="/signup" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-stone-300/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-stone-200/30 to-amber-200/30 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}