import React from 'react';
import { useGiftBox } from '../../context/GiftBoxContext';
import { ArrowUpRight } from 'lucide-react';
import type { Category } from '../../types';

interface CompactCategoryGridProps {
  navigate: (path: string) => void;
}

export const CompactCategoryGrid: React.FC<CompactCategoryGridProps> = ({ navigate }) => {
  const { categories } = useGiftBox();

  // Split into Row 1 (3 items) and Row 2 (2 items) for desktop 3+2 balanced layout
  const row1 = categories.slice(0, 3);
  const row2 = categories.slice(3, 5);

  const renderCategoryCard = (category: Category) => (
    <div
      key={category.id}
      onClick={() => navigate(`/catalogue/${category.slug}`)}
      className="group relative bg-[#FAF7F2] border border-[#E4D7CB] hover:border-[#501B25] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-end min-h-[160px] sm:min-h-[190px] md:min-h-[220px]"
    >
      {/* Background Cover Image with subtle zoom */}
      <div className="absolute inset-0 bg-[#E4D7CB]/40 overflow-hidden">
        <img
          src={category.coverImage}
          alt={category.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle gradient vignette for editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141C33]/90 via-[#141C33]/40 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 p-3.5 sm:p-4 text-[#F7F2EC] flex items-end justify-between gap-2">
        <div className="flex-1 pr-2">
          <p className="text-[10px] uppercase tracking-widest text-[#C7AC95] font-semibold mb-0.5">
            Collection
          </p>
          <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-[#F7F2EC] leading-tight group-hover:text-[#E4D7CB] transition-colors">
            {category.name}
          </h3>
          <p className="text-[11px] text-[#E4D7CB]/90 line-clamp-1 mt-0.5 hidden sm:block">
            {category.featuredHighlight || category.description}
          </p>
        </div>

        {/* Click Icon Affordance */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none bg-[#501B25]/90 group-hover:bg-[#F7F2EC] text-[#F7F2EC] group-hover:text-[#501B25] border border-[#C7AC95]/40 flex items-center justify-center transition-all shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-6 sm:py-8 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E4D7CB]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58266] font-semibold">
              Explore Collections
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#501B25]">
              Featured Gifting Categories
            </h2>
          </div>

          <button
            onClick={() => navigate('/catalogue')}
            className="text-xs uppercase tracking-wider font-semibold text-[#501B25] hover:text-[#141C33] flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 + 2 Compact Grid Layout */}
        <div className="space-y-3 sm:space-y-3.5">
          {/* Row 1: 3 Categories on Desktop, 2/3 on Tablet, 2 on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
            {row1.map(renderCategoryCard)}
          </div>

          {/* Row 2: 2 Categories Centered on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 md:max-w-[66.666%] md:mx-auto">
            {row2.map(renderCategoryCard)}
          </div>
        </div>
      </div>
    </section>
  );
};