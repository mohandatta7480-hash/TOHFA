import React, { useState } from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { Lock, Mail, Key, ArrowRight } from 'lucide-react';

interface AdminLoginPageProps {
  navigate: (path: string) => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ navigate }) => {
  const { login, isAuthenticated } = useAdminAuth();
  const [email, setEmail] = useState('admin@tohfa.com');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  // If already authenticated, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter a valid email.');
      return;
    }
    const success = login(email, password, rememberMe);
    if (success) {
      navigate('/admin');
    }
  };

  const handleFillDemo = () => {
    setEmail('thetohfagifting.co@gmail.com');
    setPassword('TohfaAdmin2026');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#141C33] flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-md w-full bg-[#FAF7F2] border border-[#A58266]/40 p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 pb-4 border-b border-[#E4D7CB]">
          <img
            src="/images/logo.png"
            alt="TOHFA Gifting Co."
            className="w-16 h-16 rounded-full mx-auto object-cover shadow-md"
          />
          <h1 className="font-serif font-bold text-2xl text-[#501B25]">
            Admin Portal
          </h1>
          <p className="text-xs text-[#585656]">
            Enter your credentials to manage products, categories, and corporate gift box enquiries.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] pl-9 pr-3 py-2.5 text-[#141C33] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
              Password
            </label>
            <div className="relative">
              <Key className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] pl-9 pr-3 py-2.5 text-[#141C33] outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="text-[#501B25] accent-[#501B25]"
              />
              <span className="text-[#585656]">Remember session</span>
            </label>

            <button
              type="button"
              onClick={handleFillDemo}
              className="text-[#501B25] hover:underline font-semibold"
            >
              Fill Demo Credentials
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Lock className="w-3.5 h-3.5 text-[#C7AC95]" />
            <span>Secure Admin Sign In</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="pt-2 text-center border-t border-[#E4D7CB]">
          <button
            onClick={() => navigate('/')}
            className="text-xs text-[#585656] hover:text-[#501B25] transition-colors"
          >
            &larr; Return to Public Website
          </button>
        </div>
      </div>
    </div>
  );
};