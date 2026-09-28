import React from 'react';
import { ArrowRight, Box } from 'lucide-react';

interface CompactHeroProps {
  navigate: (path: string) => void;
}

export const CompactHero: React.FC<CompactHeroProps> = ({ navigate }) => {
  return (
    <section className="relative pt-10 pb-8 md:pt-14 md:pb-10 bg-[#F7F2EC] border-b border-[#E4D7CB]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#501B25] tracking-tight leading-[1.15] mb-3 max-w-3xl mx-auto">
          Gift boxes they'll actually remember
        </h1>

        {/* Supporting text */}
        <p className="text-sm md:text-base text-[#585656] max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          From corporate hampers to festive treats, browse our catalogue or build your own box and place an enquiry in minutes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => navigate('/build-your-gift-box')}
            className="bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] text-xs md:text-sm uppercase tracking-wider font-semibold px-6 py-3 transition-all duration-200 flex items-center gap-2 shadow-xs group"
          >
            <Box className="w-4 h-4 text-[#C7AC95]" />
            <span>Build Your Gift Box</span>
            <ArrowRight className="w-4 h-4 text-[#C7AC95] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/catalogue')}
            className="bg-[#E4D7CB] hover:bg-[#A58266] text-[#501B25] hover:text-[#F7F2EC] border border-[#A58266]/40 text-xs md:text-sm uppercase tracking-wider font-semibold px-6 py-3 transition-all duration-200"
          >
            Browse Catalogue
          </button>
        </div>
      </div>
    </section>
  );
};