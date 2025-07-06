import React, { useState } from 'react';
import { useSearchParams } from 'wouter';
import { API_BASE_URL, apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const email = params.get('email') || '';
  const token = params.get('token') || '';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !token) {
      toast({
        title: 'Error',
        description: 'Invalid or missing reset link.',
        variant: 'destructive',
      });
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match!',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const res = await apiRequest('POST', `${API_BASE_URL}/api/password-reset`, {
        email,
        token,
        newPassword: password
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({
          title: 'Password Reset Successful',
          description: 'You can now log in with your new password.',
        });
        setPassword('');
        setConfirmPassword('');
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Password reset failed',
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
            setLoading(false);
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
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-stone-200/50 p-8 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-light text-stone-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                Reset Password
              </h1>
              <p className="text-stone-500 text-sm font-light">
                Enter your new password below.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700 block">New Password</label>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700 block">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-amber-200 to-stone-300 hover:from-amber-300 hover:to-stone-400 text-stone-800 font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg text-center ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                disabled={loading}
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 