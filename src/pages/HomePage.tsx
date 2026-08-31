import React from 'react';
import { CompactHero } from '../components/home/CompactHero';
import { CompactCategoryGrid } from '../components/home/CompactCategoryGrid';
import { BuilderCTA } from '../components/home/BuilderCTA';
import { BrandHighlights } from '../components/home/BrandHighlights';
import { ProductCard } from '../components/common/ProductCard';
import { useGiftBox } from '../context/GiftBoxContext';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const { products } = useGiftBox();
  
  // Pick 4 featured products for a tight curated preview
  const featuredProducts = products.filter((p) => p.featured && p.active).slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. Compact Hero */}
      <CompactHero navigate={navigate} />

      {/* 2. Compact 3+2 Category Panel */}
      <CompactCategoryGrid navigate={navigate} />

      {/* 3. Prominent Builder CTA Section */}
      <BuilderCTA navigate={navigate} />

      {/* 4. Curated Signature Products (Compact 4-grid) */}
      <section className="py-8 bg-[#F7F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5 pb-2 border-b border-[#E4D7CB]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58266] font-semibold">
                Signature Selections
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#501B25]">
                Most Requested Corporate Gifts
              </h2>
            </div>
            <button
              onClick={() => navigate('/catalogue')}
              className="text-xs uppercase tracking-wider font-semibold text-[#501B25] hover:text-[#141C33] flex items-center gap-1 group"
            >
              <span>Explore Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Concise Brand Highlights */}
      <BrandHighlights />
    </div>
  );
};