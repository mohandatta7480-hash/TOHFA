import React from 'react';
import { useGiftBox } from '../../context/GiftBoxContext';
import { Mail, MapPin, Lock, Shield } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { categories } = useGiftBox();

  return (
    <footer className="bg-[#141C33] text-[#F7F2EC] border-t border-[#A58266]/30 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F7F2EC]/10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="TOHFA"
                className="w-12 h-12 rounded-full object-cover shadow-sm shrink-0"
              />
              <img
                src="/images/tohfa_wordmark.png"
                alt="TOHFA"
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-xs text-[#E4D7CB]/80 leading-relaxed max-w-sm">
              Artisanal corporate gifting, bespoke celebratory hampers, and branded merchandise crafted for discerning organizations across India and worldwide.
            </p>
            <div className="pt-2 text-xs text-[#C7AC95] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#A58266]" />
              <span>Certified Corporate Gifting Partner</span>
            </div>
          </div>

          {/* Catalogue Collections */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#A58266]">
              Catalogue Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#E4D7CB]/90">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate(`/catalogue/${cat.slug}`)}
                    className="hover:text-[#F7F2EC] transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('/catalogue')}
                  className="text-[#C7AC95] hover:underline"
                >
                  Browse Full Catalogue
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#A58266]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E4D7CB]/90">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-[#F7F2EC]">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/build-your-gift-box')} className="hover:text-[#F7F2EC]">
                  Custom Box Builder
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/gift-box')} className="hover:text-[#F7F2EC]">
                  Review Selected Box
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-[#F7F2EC]">
                  About Tohfa
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-[#F7F2EC]">
                  Corporate Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Concierge Desk */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#A58266]">
              Corporate Concierge Desk
            </h4>
            <div className="space-y-2 text-xs text-[#E4D7CB]/80">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C7AC95]" />
                <span>thetohfagifting.co@gmail.com</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C7AC95] shrink-0 mt-0.5" />
                <span>WeWork, Salarpuria symbiosis, Arakere, Bangalore</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright and discrete admin login */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E4D7CB]/60">
          <p>&copy; {new Date().getFullYear()} TOHFA Luxury Gifting LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>B2B Gifting Solution</span>
            <span className="text-[#A58266]">•</span>
            <span>Custom Bulk Orders</span>
            <span className="text-[#A58266]">•</span>
            <button
              onClick={() => navigate('/admin/login')}
              className="hover:text-[#F7F2EC] transition-colors flex items-center gap-1.5 opacity-60 hover:opacity-100"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Access</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};