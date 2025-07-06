import React, { useState } from 'react';
import { API_BASE_URL, apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiRequest('POST', `${API_BASE_URL}/api/password-reset-request`, { email });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({
          title: 'Reset Link Sent',
          description: 'If that email exists, a reset link has been sent.',
        });
        setEmail('');
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Failed to send reset link',
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-stone-200/50 p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-light text-stone-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
              Forgot Password
            </h1>
            <p className="text-stone-500 text-sm font-light">
              Enter your email and we'll send you a reset link.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700 block">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-stone-50/80 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent text-stone-800 placeholder-stone-400 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-amber-200 to-stone-300 hover:from-amber-300 hover:to-stone-400 text-stone-800 font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl shadow-lg text-center ${loading ? 'opacity-50 pointer-events-none' : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 