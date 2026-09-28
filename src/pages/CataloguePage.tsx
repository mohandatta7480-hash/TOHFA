import React, { useState, useMemo } from 'react';
import { useGiftBox } from '../context/GiftBoxContext';
import { ProductCard } from '../components/common/ProductCard';
import type { CategorySlug } from '../types';
import { Search, SlidersHorizontal, Box } from 'lucide-react';

interface CataloguePageProps {
  initialCategory?: CategorySlug | 'all';
  navigate: (path: string) => void;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({
  initialCategory = 'all',
  navigate
}) => {
  const { products, categories } = useGiftBox();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'newest'>('featured');

  // Sync category if prop changes
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const terms = q.split(/\s+/).filter(Boolean);

    return products
      .map((product) => {
        if (!product.active) return null;
        if (selectedCategory === 'exclusive') {
          if (!product.isExclusive) return null;
        } else if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return null;
        }

        if (terms.length === 0) {
          return { product, score: 0 };
        }

        const name = product.name.toLowerCase();
        const desc = product.description.toLowerCase();
        const cat = (product.categoryName || product.category).toLowerCase();

        // Every search term must match somewhere in name, description, or category
        const allTermsMatch = terms.every(
          (t) => name.includes(t) || desc.includes(t) || cat.includes(t)
        );

        if (!allTermsMatch) return null;

        let score = 0;
        if (name === q) score += 200;
        else if (name.startsWith(q)) score += 120;
        else if (name.includes(q)) score += 80;

        terms.forEach((t) => {
          const wordRegex = new RegExp(`(^|\\s|[^a-zA-Z0-9])${t}($|\\s|[^a-zA-Z0-9])`, 'i');
          if (wordRegex.test(product.name)) score += 50;
          else if (name.includes(t)) score += 25;

          if (wordRegex.test(product.description)) score += 10;
          else if (desc.includes(t)) score += 5;
        });

        if (cat.includes(q)) score += 15;

        return { product, score };
      })
      .filter((item): item is { product: (typeof products)[0]; score: number } => item !== null)
      .sort((a, b) => {
        if (terms.length > 0 && b.score !== a.score) {
          return b.score - a.score;
        }
        if (sortBy === 'newest') {
          return (b.product.createdAt || '').localeCompare(a.product.createdAt || '');
        }
        if (sortBy === 'name') {
          return a.product.name.localeCompare(b.product.name);
        }
        // default featured
        if (a.product.featured && !b.product.featured) return -1;
        if (!a.product.featured && b.product.featured) return 1;
        return 0;
      })
      .map((item) => item.product);
  }, [products, selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      navigate('/catalogue');
    } else {
      navigate(`/catalogue/${slug}`);
    }
  };

  return (
    <div className="py-8 bg-[#F7F2EC] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header Title & Description */}
        <div className="border-b border-[#E4D7CB] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58266] font-semibold">
              Bespoke Product Catalogue
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#501B25] mt-1">
              {selectedCategory === 'all'
                ? 'Complete Corporate Catalogue'
                : selectedCategory === 'exclusive'
                ? 'TOHFA Exclusive Collections'
                : activeCategoryObj?.name || 'Category Catalogue'}
            </h1>
            <p className="text-xs md:text-sm text-[#585656] mt-2 leading-relaxed">
              {selectedCategory === 'all'
                ? 'Explore our full portfolio of artisanal hampers, handcrafted leather folios, branded merchandise, and premium tech gifts.'
                : selectedCategory === 'exclusive'
                ? 'Signature proprietary curations and artisanal delicacies available exclusively through TOHFA.'
                : activeCategoryObj?.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/build-your-gift-box')}
              className="bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-4 py-2.5 transition-colors flex items-center gap-2"
            >
              <Box className="w-3.5 h-3.5 text-[#C7AC95]" />
              <span>Open Box Builder</span>
            </button>
          </div>
        </div>

        {/* Filter / Search Bar */}
        <div className="bg-[#FAF7F2] p-4 border border-[#E4D7CB] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors border ${
                selectedCategory === 'all'
                  ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25]'
                  : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB] hover:border-[#A58266]'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleCategoryChange('exclusive')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors border ${
                selectedCategory === 'exclusive'
                  ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25]'
                  : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB] hover:border-[#A58266]'
              }`}
            >
              TOHFA Exclusive
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors border ${
                  selectedCategory === cat.slug
                    ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25]'
                    : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB] hover:border-[#A58266]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search and Sort controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] text-xs pl-9 pr-3 py-2 text-[#141C33] placeholder-[#585656]/60 outline-none transition-colors"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#A58266] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] text-xs px-3 py-2 text-[#141C33] outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="name">Name: A to Z</option>
                <option value="newest">Newest Additions</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#585656]">
          <span>
            Showing <strong className="text-[#141C33]">{filteredProducts.length}</strong> items
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#501B25] underline hover:text-[#141C33]"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-12 text-center max-w-lg mx-auto my-8 space-y-3">
            <p className="font-serif text-xl text-[#501B25] font-bold">No Products Found</p>
            <p className="text-xs text-[#585656]">
              No products match your current search or category filter. Try clearing your search or switching categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                navigate('/catalogue');
              }}
              className="bg-[#501B25] text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-4 py-2 mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};