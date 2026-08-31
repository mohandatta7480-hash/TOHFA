import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Box } from 'lucide-react';

interface BuilderCTAProps {
  navigate: (path: string) => void;
}

export const BuilderCTA: React.FC<BuilderCTAProps> = ({ navigate }) => {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF7F2] border-y border-[#E4D7CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#501B25] text-[#F7F2EC] overflow-hidden border border-[#A58266]/40">
          {/* Subtle background luxury pattern / image overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-luminosity">
            <img
              src="/images/hero_box_showcase.jpg"
              alt="Bespoke gift box packaging"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 md:p-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141C33]/60 border border-[#C7AC95]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C7AC95]" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C7AC95]">
                  Interactive Studio
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F7F2EC] leading-tight">
                Customize / Build Your Gift Box
              </h2>

              <p className="text-xs sm:text-sm text-[#E4D7CB] leading-relaxed max-w-xl">
                Choose the products you want and create a gift box that feels personal.
              </p>

              {/* Value points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#E4D7CB]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7AC95] shrink-0" />
                  <span>Curate unlimited items across categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7AC95] shrink-0" />
                  <span>Custom corporate logo and sleeve branding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7AC95] shrink-0" />
                  <span>Personalized message cards and ribbon selection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C7AC95] shrink-0" />
                  <span>B2B quotes delivered in under 2 business hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/build-your-gift-box')}
                  className="bg-[#F7F2EC] hover:bg-[#A58266] text-[#501B25] hover:text-[#F7F2EC] font-semibold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 transition-all duration-200 inline-flex items-center gap-2.5 shadow-lg group"
                >
                  <Box className="w-4 h-4 text-[#501B25] group-hover:text-[#F7F2EC] transition-colors" />
                  <span>Start Building</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative border-2 border-[#C7AC95]/40 shadow-2xl overflow-hidden aspect-4/3">
                <img
                  src="/images/hero_box_showcase.jpg"
                  alt="Custom gift box builder preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-[#141C33]/90 text-[#F7F2EC] px-3 py-1 text-[11px] font-semibold tracking-wider uppercase border border-[#C7AC95]/40">
                  Tailored Packaging
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};