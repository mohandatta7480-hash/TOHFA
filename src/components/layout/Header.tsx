import React from 'react';
import { useGiftBox } from '../../context/GiftBoxContext';
import { Gift } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const { totalQuantityCount } = useGiftBox();

  return (
    <header className="sticky top-0 z-40 bg-[#F7F2EC]/95 backdrop-blur-md border-b border-[#E4D7CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Left: Circular Logo Emblem */}
          <div 
            onClick={() => navigate('/')}
            className="cursor-pointer flex items-center group py-1.5 z-10"
            title="TOHFA Home"
          >
            <img
              src="/images/logo.png"
              alt="TOHFA Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover transition-transform group-hover:scale-105 shadow-xs shrink-0"
            />
          </div>

          {/* Middle: Company Name Wordmark (Fully unclipped with top stroke) */}
          <div 
            onClick={() => navigate('/')}
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex items-center justify-center py-1 group max-w-[65%] sm:max-w-[75%]"
            title="TOHFA Home"
          >
            <img
              src="/images/tohfa_wordmark.png"
              alt="TOHFA"
              className="h-9 sm:h-11 md:h-13 w-auto max-w-full object-contain transition-transform group-hover:scale-102"
            />
          </div>

          {/* Small Gift Box Icon in the Corner */}
          <button
            onClick={() => navigate('/gift-box')}
            className={`relative p-2.5 border transition-all flex items-center justify-center ${
              totalQuantityCount > 0
                ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25] hover:bg-[#141C33]'
                : 'bg-transparent text-[#501B25] border-[#E4D7CB] hover:bg-[#E4D7CB]/50'
            }`}
            aria-label={`Selected Gift Box: ${totalQuantityCount} items`}
            title="Your Gift Box"
          >
            <Gift className="w-4 h-4" />
            {totalQuantityCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#A58266] text-[#F7F2EC] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F7F2EC]">
                {totalQuantityCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};