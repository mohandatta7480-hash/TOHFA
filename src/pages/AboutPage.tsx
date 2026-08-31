import React from 'react';
import { Sparkles, Shield, Award, Building, HeartHandshake, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div className="py-10 bg-[#F7F2EC] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 border-b border-[#E4D7CB] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E4D7CB]/60 border border-[#A58266]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#501B25]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#501B25]">
              The Tohfa Philosophy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#501B25]">
            Corporate Gifting, Elevated to an Art Form
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#585656] max-w-2xl mx-auto leading-relaxed">
            We believe corporate gifting should never feel transactional. Every box we curate is an ambassador of your organization's gratitude, taste, and prestige.
          </p>
        </div>

        {/* Showcase Image & Core Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 relative border border-[#A58266]/40 shadow-lg overflow-hidden aspect-4/3">
            <img
              src="/images/hero_box_showcase.jpg"
              alt="Handcrafted Tohfa corporate presentation box"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6 space-y-4 text-xs sm:text-sm text-[#585656] leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-[#501B25]">
              Handcrafted Detail Meets Corporate Precision
            </h2>
            <p>
              Founded with the belief that premium gifting inspires enduring relationships, TOHFA pairs bespoke craftsmanship with dependable B2B supply-chain logistics.
            </p>
            <p>
              Whether onboarding C-suite executives, celebrating festive milestones, or honoring longstanding clients, our team curates products that evoke pride and genuine delight.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-[#E4D7CB]">
              <div>
                <p className="text-2xl font-serif font-bold text-[#501B25]">250,000+</p>
                <p className="text-[11px] text-[#585656]">Gift boxes delivered nationwide</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#501B25]">99.8%</p>
                <p className="text-[11px] text-[#585656]">On-time corporate dispatch record</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58266] font-semibold">
              Our Standards
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#501B25]">
              The Four Pillars of Tohfa Curation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB]">
              <div className="w-8 h-8 bg-[#501B25] text-[#F7F2EC] flex items-center justify-center mb-3">
                <Award className="w-4 h-4 text-[#C7AC95]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#501B25] mb-1">
                Authentic Artisanal Sourcing
              </h3>
              <p className="text-xs text-[#585656] leading-relaxed">
                We work directly with heritage brass craftsmen, single-estate tea growers, master chocolatiers, and fine leather artisans to ensure unrivaled product pedigree.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB]">
              <div className="w-8 h-8 bg-[#501B25] text-[#F7F2EC] flex items-center justify-center mb-3">
                <Shield className="w-4 h-4 text-[#C7AC95]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#501B25] mb-1">
                Architectural Rigid Packaging
              </h3>
              <p className="text-xs text-[#585656] leading-relaxed">
                Our presentation boxes use heavy 1800gsm recycled greyboard, lined with rich velvet flocking, custom die-cut inserts, and metallic hot-foil crests.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB]">
              <div className="w-8 h-8 bg-[#501B25] text-[#F7F2EC] flex items-center justify-center mb-3">
                <Building className="w-4 h-4 text-[#C7AC95]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#501B25] mb-1">
                Seamless Corporate Branding
              </h3>
              <p className="text-xs text-[#585656] leading-relaxed">
                Blind debossing, laser engraving, personalized message stationery, and customized satin ribbons aligned precisely to your brand identity guidelines.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 border border-[#E4D7CB]">
              <div className="w-8 h-8 bg-[#501B25] text-[#F7F2EC] flex items-center justify-center mb-3">
                <HeartHandshake className="w-4 h-4 text-[#C7AC95]" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#501B25] mb-1">
                White-Glove Account Management
              </h3>
              <p className="text-xs text-[#585656] leading-relaxed">
                From initial sample kits to doorstep dispatch at multiple global or domestic offices, a dedicated corporate concierge oversees your project from start to finish.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#501B25] text-[#F7F2EC] p-8 text-center space-y-4 border border-[#A58266]/40">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Ready to craft your company's signature gift box?
          </h2>
          <p className="text-xs sm:text-sm text-[#E4D7CB] max-w-xl mx-auto">
            Browse our catalogue or launch the interactive box builder to place a custom enquiry in minutes.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('/build-your-gift-box')}
              className="bg-[#F7F2EC] hover:bg-[#A58266] text-[#501B25] hover:text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-6 py-3 transition-colors flex items-center gap-2"
            >
              <span>Build Your Gift Box</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border border-[#E4D7CB] hover:bg-[#E4D7CB] text-[#F7F2EC] hover:text-[#501B25] text-xs uppercase tracking-wider font-semibold px-6 py-3 transition-colors"
            >
              Contact Concierge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};