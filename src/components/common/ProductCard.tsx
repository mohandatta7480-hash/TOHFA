import React from 'react';
import type { Product } from '../../types';
import { useGiftBox } from '../../context/GiftBoxContext';
import { Plus, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  compact = false
}) => {
  const { addToGiftBox, isInGiftBox, getItemQuantity, setViewingProduct } = useGiftBox();
  const added = isInGiftBox(product.id);
  const qty = getItemQuantity(product.id);

  const handleOpenDetail = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    } else {
      setViewingProduct(product);
    }
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToGiftBox(product, 1);
  };

  return (
    <div className="group relative bg-[#FAF7F2] border border-[#E4D7CB] hover:border-[#A58266] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Product Image Container */}
      <div 
        className="relative aspect-4/3 w-full bg-[#E4D7CB]/40 overflow-hidden cursor-pointer"
        onClick={handleOpenDetail}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#501B25] text-[#F7F2EC] text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </div>
        )}

        {/* Quick View Button overlay */}
        <button
          onClick={handleOpenDetail}
          className="absolute inset-0 bg-[#141C33]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs tracking-wider uppercase font-medium text-white backdrop-blur-[2px]"
          aria-label={`View details for ${product.name}`}
        >
          <span className="bg-[#501B25] text-[#F7F2EC] px-3 py-1.5 flex items-center gap-1.5 shadow-md">
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] uppercase tracking-wider text-[#A58266] font-semibold">
              {product.categoryName || product.category}
            </span>
          </div>

          <h3 
            onClick={handleOpenDetail}
            className="text-base font-serif font-semibold text-[#501B25] leading-snug cursor-pointer hover:underline line-clamp-1"
          >
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-1 mt-1.5 mb-1">
            <span className="text-[10px] bg-[#E4D7CB]/50 text-[#501B25] font-medium px-2 py-0.5 border border-[#C7AC95]/50">
              100% Customizable • Brand Printable • Color Options
            </span>
          </div>

          {!compact && (
            <p className="text-xs text-[#585656] mt-1 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Action Bar */}
        <div className="mt-4 pt-3 border-t border-[#E4D7CB]/60 flex items-center justify-between gap-2">
          <button
            onClick={handleOpenDetail}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-[#A58266]/60 text-[#501B25] hover:bg-[#E4D7CB]/40 transition-colors"
            title="View Product Details"
          >
            View Details
          </button>

          <button
            onClick={handleAdd}
            className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all duration-200 ${
              added
                ? 'bg-[#A58266] text-[#F7F2EC] hover:bg-[#501B25]'
                : 'bg-[#501B25] text-[#F7F2EC] hover:bg-[#141C33]'
            }`}
            aria-label={`Add ${product.name} to gift box`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Box ({qty})</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Box</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};