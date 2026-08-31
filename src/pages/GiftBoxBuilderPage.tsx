import React, { useState, useMemo } from 'react';
import { useGiftBox } from '../context/GiftBoxContext';
import { ProductCard } from '../components/common/ProductCard';
import { Box, Search, Trash2, Plus, Minus, ArrowRight, Sparkles, ChevronRight, X } from 'lucide-react';

interface GiftBoxBuilderPageProps {
  navigate: (path: string) => void;
}

export const GiftBoxBuilderPage: React.FC<GiftBoxBuilderPageProps> = ({ navigate }) => {
  const {
    products,
    categories,
    giftBoxItems,
    selectedItemCount,
    totalQuantityCount,
    removeFromGiftBox,
    updateQuantity,
    clearGiftBox,
    selectedBoxStyle,
    setSelectedBoxStyle
  } = useGiftBox();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const boxPackagingOptions = [
    { name: 'Deep Burgundy Velvet Presentation Box', subtitle: 'Rigid magnetic luxury box with gold foil stamping' },
    { name: 'Warm Ivory Rigid Box with Gold Stamping', subtitle: 'Minimalist editorial textured paperboard' },
    { name: 'Imperial Brass & Wood Keepsake Casket', subtitle: 'Solid pine wood sliding crate with brass accents' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (!p.active) return false;
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.categoryName || p.category).toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [products, activeCategory, searchQuery]);

  return (
    <div className="py-8 bg-[#F7F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Builder Hero / Title */}
        <div className="border-b border-[#E4D7CB] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E4D7CB]/60 border border-[#A58266]/30 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#501B25]" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#501B25] uppercase">
                Bespoke Festival Gift Box Builder
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#501B25]">
              Build Your Custom Festival Gift Box
            </h1>
            <p className="text-xs md:text-sm text-[#585656] mt-1.5 max-w-2xl leading-relaxed">
              Craft 100% customizable festive hampers by handpicking from our vast range of gourmet foods, tech gadgets, drinkware, and luxury corporate merchandise. Our featured festive sets serve as sample curations to inspire your custom hamper.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/gift-box')}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs ${
                totalQuantityCount > 0
                  ? 'bg-[#501B25] text-[#F7F2EC] hover:bg-[#141C33]'
                  : 'bg-[#E4D7CB] text-[#585656] cursor-not-allowed opacity-60'
              }`}
              disabled={totalQuantityCount === 0}
            >
              <span>Review Box ({totalQuantityCount})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Grid: Catalogue on Left (8 cols), Sticky Box Panel on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLS: Search, Categories & Products Grid */}
          <div className="lg:col-span-8 space-y-5">
            {/* Filter controls */}
            <div className="bg-[#FAF7F2] p-4 border border-[#E4D7CB] space-y-3">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors border ${
                    activeCategory === 'all'
                      ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25]'
                      : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB] hover:border-[#A58266]'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-colors border ${
                      activeCategory === cat.slug
                        ? 'bg-[#501B25] text-[#F7F2EC] border-[#501B25]'
                        : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB] hover:border-[#A58266]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter available items by name or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] text-xs pl-9 pr-3 py-2 text-[#141C33] placeholder-[#585656]/60 outline-none"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} compact />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-8 text-center text-xs text-[#585656]">
                No items match your builder filter.
              </div>
            )}
          </div>

          {/* RIGHT 4 COLS: Desktop Sticky "Your Gift Box" Panel */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24">
            <div className="bg-[#FAF7F2] border border-[#A58266]/40 shadow-sm p-5 space-y-4">
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E4D7CB]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#501B25] text-[#F7F2EC] flex items-center justify-center">
                    <Box className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#501B25]">
                      Your Gift Box
                    </h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#A58266] font-medium">
                      {selectedItemCount} unique {selectedItemCount === 1 ? 'item' : 'items'} ({totalQuantityCount} total)
                    </p>
                  </div>
                </div>

                {giftBoxItems.length > 0 && (
                  <button
                    onClick={clearGiftBox}
                    className="text-[11px] text-[#585656] hover:text-[#501B25] underline"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Packaging selector */}
              <div className="space-y-1.5 text-xs">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25]">
                  Presentation Packaging
                </label>
                <select
                  value={selectedBoxStyle}
                  onChange={(e) => setSelectedBoxStyle(e.target.value)}
                  className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] text-xs p-2 text-[#141C33] outline-none"
                >
                  {boxPackagingOptions.map((opt, i) => (
                    <option key={i} value={opt.name}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Items List */}
              <div className="max-h-[380px] overflow-y-auto space-y-2.5 pr-1">
                {giftBoxItems.length === 0 ? (
                  <div className="py-10 text-center border border-dashed border-[#E4D7CB] bg-[#F7F2EC]/60 px-4">
                    <Box className="w-8 h-8 text-[#C7AC95] mx-auto mb-2 opacity-70" />
                    <p className="text-xs font-semibold text-[#501B25]">Your gift box is empty</p>
                    <p className="text-[11px] text-[#585656] mt-1">
                      Browse the catalogue on the left and click "Add to Box" to curate your custom hamper.
                    </p>
                  </div>
                ) : (
                  giftBoxItems.map((item) => (
                    <div
                      key={item.productId}
                      className="bg-[#F7F2EC] border border-[#E4D7CB] p-2.5 flex items-center gap-3 group"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover bg-[#E4D7CB] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-serif font-bold text-[#501B25] truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-[#A58266] uppercase">
                          {item.product.categoryName || item.product.category}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="flex items-center border border-[#E4D7CB] bg-[#FAF7F2]">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="px-1.5 py-0.5 text-xs text-[#501B25] hover:bg-[#E4D7CB]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#141C33]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="px-1.5 py-0.5 text-xs text-[#501B25] hover:bg-[#E4D7CB]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromGiftBox(item.productId)}
                          className="text-[#585656] hover:text-[#501B25] p-0.5"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Actions */}
              {giftBoxItems.length > 0 && (
                <div className="pt-3 border-t border-[#E4D7CB] space-y-2">
                  <button
                    onClick={() => navigate('/gift-box')}
                    className="w-full bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Proceed to Review & Enquiry</span>
                    <ArrowRight className="w-4 h-4 text-[#C7AC95]" />
                  </button>
                  <p className="text-[10px] text-center text-[#585656]/80">
                    No payment required. We will generate a formal B2B quotation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2] border-t border-[#A58266]/40 p-3 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div 
            onClick={() => setMobileDrawerOpen(true)}
            className="cursor-pointer flex items-center gap-2.5"
          >
            <div className="relative w-9 h-9 bg-[#501B25] text-[#F7F2EC] flex items-center justify-center">
              <Box className="w-5 h-5" />
              {totalQuantityCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A58266] text-[#F7F2EC] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalQuantityCount}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs font-serif font-bold text-[#501B25]">
                {totalQuantityCount === 0 ? 'Box is Empty' : `${totalQuantityCount} Items in Box`}
              </p>
              <p className="text-[10px] text-[#A58266]">Tap to inspect</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/gift-box')}
            disabled={totalQuantityCount === 0}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
              totalQuantityCount > 0
                ? 'bg-[#501B25] text-[#F7F2EC]'
                : 'bg-[#E4D7CB] text-[#585656] opacity-50'
            }`}
          >
            <span>Review Box</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MODAL */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto flex items-end">
          <div
            className="fixed inset-0 bg-[#141C33]/60 backdrop-blur-xs"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-full bg-[#FAF7F2] border-t-2 border-[#501B25] p-5 max-h-[80vh] overflow-y-auto z-10 space-y-4 animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-[#E4D7CB]">
              <h3 className="font-serif font-bold text-lg text-[#501B25]">
                Your Custom Gift Box ({totalQuantityCount} items)
              </h3>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 text-[#501B25]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {giftBoxItems.map((item) => (
                <div
                  key={item.productId}
                  className="bg-[#F7F2EC] p-3 border border-[#E4D7CB] flex items-center justify-between gap-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-serif font-bold text-[#501B25] truncate">
                      {item.product.name}
                    </p>
                    <p className="text-[10px] text-[#A58266] uppercase">
                      {item.product.categoryName || item.product.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center border border-[#E4D7CB]">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="px-2 py-1 text-xs"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="px-2 py-1 text-xs"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromGiftBox(item.productId)}
                      className="text-[#585656] p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  navigate('/gift-box');
                }}
                className="w-full bg-[#501B25] text-[#F7F2EC] py-3 text-xs uppercase tracking-wider font-semibold"
              >
                Proceed to Review & Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};