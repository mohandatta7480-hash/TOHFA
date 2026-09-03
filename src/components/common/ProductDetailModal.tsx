import React, { useState } from 'react';
import { useGiftBox } from '../../context/GiftBoxContext';
import { X, Plus, Minus, Check, Layers, Sparkles, MessageCircle, Box } from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { viewingProduct, setViewingProduct, addToGiftBox, isInGiftBox, getItemQuantity } = useGiftBox();
  const [qty, setQty] = useState(1);

  if (!viewingProduct) return null;

  const product = viewingProduct;
  const inBox = isInGiftBox(product.id);
  const currentBoxQty = getItemQuantity(product.id);

  const handleClose = () => {
    setViewingProduct(null);
    setQty(1);
  };

  const handleAdd = () => {
    addToGiftBox(product, qty);
  };

  const whatsappMessage = encodeURIComponent(
    `Hey, I am interested in this ${product.name} Please share me more information about this.`
  );
  const whatsappUrl = `https://wa.me/919347947046?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#141C33]/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#F7F2EC] border border-[#A58266]/40 shadow-2xl max-w-3xl w-full z-10 overflow-hidden animate-fade-in my-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 p-2 bg-[#F7F2EC]/90 hover:bg-[#501B25] hover:text-[#F7F2EC] text-[#501B25] transition-colors border border-[#E4D7CB] shadow-xs"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Column */}
          <div className="relative bg-[#FAF7F2] aspect-16/10 sm:aspect-16/9 md:aspect-auto md:h-full min-h-[300px] flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-h-[420px] object-contain object-center"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#501B25] text-[#F7F2EC] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 shadow-sm z-10">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="p-5 sm:p-7 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category */}
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[#A58266] font-semibold mb-1.5">
                <span>{product.categoryName || product.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#501B25] leading-snug mb-2.5">
                {product.name}
              </h2>

              {/* Customization Feature Tag */}
              <div className="bg-[#FAF7F2] border border-[#A58266]/40 p-2.5 mb-3.5 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#501B25] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A58266]" />
                  100% Customizable & Brand Name Printable
                </p>
                <p className="text-[11px] text-[#585656]">
                  Full corporate logo printing, laser engraving, and custom corporate color options available on this product.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#585656] leading-relaxed mb-4 whitespace-pre-line">
                {product.longDescription || product.description}
              </p>

              {/* Customization Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mb-4 p-3 bg-[#E4D7CB]/30 border border-[#E4D7CB]">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A58266]" />
                    Available Corporate Customization
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.customizationOptions.map((opt, i) => (
                      <span key={i} className="text-[11px] bg-[#FAF7F2] border border-[#C7AC95] px-2 py-0.5 text-[#585656]">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs Table */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="border-t border-[#E4D7CB] pt-3 mb-4 space-y-1.5 text-xs">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#A58266]" />
                    Product Details & Specifications
                  </p>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-[#E4D7CB]/40">
                      <span className="text-[#585656]/80">{key}</span>
                      <span className="font-medium text-[#141C33] text-right">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions Section */}
            <div className="pt-4 border-t border-[#E4D7CB] space-y-2.5">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#141C33] hover:bg-[#501B25] text-[#F7F2EC] py-2.5 px-4 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C7AC95]" />
                <span>Inquire on WhatsApp</span>
              </a>

              {/* Add to Custom Gift Box option */}
              <div className="flex items-center gap-2">
                {/* Quantity selector */}
                <div className="flex items-center border border-[#A58266] bg-[#FAF7F2]">
                  <button
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    className="px-2 py-1.5 hover:bg-[#E4D7CB] text-[#501B25] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-2.5 text-xs font-semibold text-[#141C33] min-w-6 text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((prev) => prev + 1)}
                    className="px-2 py-1.5 hover:bg-[#E4D7CB] text-[#501B25] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 bg-[#501B25] hover:bg-[#A58266] text-[#F7F2EC] py-2 px-3 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Box className="w-3.5 h-3.5 text-[#C7AC95]" />
                  <span>Add {qty} to Gift Box</span>
                </button>
              </div>

              {inBox && (
                <p className="text-[11px] text-[#A58266] text-center flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Currently in your gift box ({currentBoxQty} items total)
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};