import React, { useState } from 'react';
import { useGiftBox } from '../context/GiftBoxContext';
import type { Enquiry } from '../types';
import { Box, Trash2, Plus, Minus, CheckCircle2, ArrowLeft, Send, Sparkles, Building2, User, Mail, Phone, MapPin, Calendar, Printer } from 'lucide-react';

interface GiftBoxReviewPageProps {
  navigate: (path: string) => void;
}

export const GiftBoxReviewPage: React.FC<GiftBoxReviewPageProps> = ({ navigate }) => {
  const {
    giftBoxItems,
    selectedItemCount,
    totalQuantityCount,
    selectedBoxStyle,
    setSelectedBoxStyle,
    removeFromGiftBox,
    updateQuantity,
    clearGiftBox,
    submitEnquiry
  } = useGiftBox();

  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    email: '',
    phone: '',
    numberOfBoxes: 50,
    deliveryLocation: '',
    preferredDeliveryDate: '',
    additionalRequirements: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<Enquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const boxPackagingOptions = [
    { name: 'Deep Burgundy Velvet Presentation Box', desc: 'Rigid magnetic luxury box with velvet interior and metallic foil emblem.' },
    { name: 'Warm Ivory Rigid Box with Gold Stamping', desc: 'Textured ivory paperboard with gold hot-foil logo imprint.' },
    { name: 'Imperial Brass & Wood Keepsake Casket', desc: 'Artisanal pine wood sliding box with solid brass fittings.' }
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.customerName.trim()) errors.customerName = 'Name is required';
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid corporate email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.deliveryLocation.trim()) errors.deliveryLocation = 'Delivery location / city is required';
    if (!formData.preferredDeliveryDate) errors.preferredDeliveryDate = 'Target delivery date is required';
    if (formData.numberOfBoxes < 1) errors.numberOfBoxes = 'Please specify at least 1 box';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const result = submitEnquiry(formData);
      setSubmittedEnquiry(result.enquiry);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  // 1. CONFIRMATION SCREEN
  if (submittedEnquiry) {
    return (
      <div className="py-12 bg-[#F7F2EC] min-h-[calc(100vh-80px)] animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F2] border border-[#A58266]/40 p-8 sm:p-12 shadow-xl space-y-8 print:border-none print:shadow-none">
            {/* Confirmation Header */}
            <div className="text-center space-y-3 pb-6 border-b border-[#E4D7CB]">
              <div className="w-14 h-14 bg-[#501B25] text-[#F7F2EC] mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#C7AC95]" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#A58266]">
                Enquiry Successfully Logged
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#501B25]">
                Your gift box enquiry has been received.
              </h1>
              <p className="text-xs sm:text-sm text-[#585656] max-w-md mx-auto leading-relaxed">
                Thank you. Our corporate concierge team will review your specifications and get in touch with you shortly.
              </p>
            </div>

            {/* Reference Card */}
            <div className="bg-[#F7F2EC] border border-[#E4D7CB] p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#585656]/70">Reference Number</p>
                <p className="text-base font-serif font-bold text-[#501B25] mt-0.5">
                  {submittedEnquiry.referenceNumber}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#585656]/70">Requested Volume</p>
                <p className="text-base font-serif font-bold text-[#141C33] mt-0.5">
                  {submittedEnquiry.numberOfBoxes} Gift Boxes
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#585656]/70">Estimated Turnaround</p>
                <p className="text-base font-serif font-bold text-[#141C33] mt-0.5">
                  Under 2 Business Hours
                </p>
              </div>
            </div>

            {/* Summary Details */}
            <div className="space-y-4 text-xs">
              <h3 className="font-serif font-bold text-sm text-[#501B25] uppercase tracking-wider">
                Enquiry Summary
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#F7F2EC] border border-[#E4D7CB]">
                <div>
                  <span className="text-[#585656]/70">Contact Person:</span>
                  <p className="font-semibold text-[#141C33]">{submittedEnquiry.customerName}</p>
                </div>
                <div>
                  <span className="text-[#585656]/70">Company:</span>
                  <p className="font-semibold text-[#141C33]">{submittedEnquiry.company}</p>
                </div>
                <div>
                  <span className="text-[#585656]/70">Corporate Email:</span>
                  <p className="font-semibold text-[#141C33]">{submittedEnquiry.email}</p>
                </div>
                <div>
                  <span className="text-[#585656]/70">Phone:</span>
                  <p className="font-semibold text-[#141C33]">{submittedEnquiry.phone}</p>
                </div>
                <div>
                  <span className="text-[#585656]/70">Delivery City / Address:</span>
                  <p className="font-semibold text-[#141C33]">{submittedEnquiry.deliveryLocation}</p>
                </div>
                <div>
                  <span className="text-[#585656]/70">Target Delivery Date:</span>
                  <p className="font-semibold text-[#141C33]">{submittedEnquiry.preferredDeliveryDate}</p>
                </div>
              </div>

              {/* Selected items breakdown */}
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#501B25]">
                  Curated Box Products ({submittedEnquiry.selectedProducts.length} items):
                </p>
                <div className="border border-[#E4D7CB] divide-y divide-[#E4D7CB]">
                  {submittedEnquiry.selectedProducts.map((p, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between gap-3 bg-[#F7F2EC]">
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.productName} className="w-10 h-10 object-cover" />
                        <div>
                          <p className="font-serif font-bold text-[#501B25] text-xs">{p.productName}</p>
                          <p className="text-[10px] text-[#A58266]">{p.category}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-[#141C33]">Qty: {p.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {submittedEnquiry.additionalRequirements && (
                <div className="p-3 bg-[#F7F2EC] border border-[#E4D7CB]">
                  <span className="text-[#585656]/70 font-semibold block mb-1">Custom Branding Notes:</span>
                  <p className="text-[#141C33] italic">{submittedEnquiry.additionalRequirements}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E4D7CB] print:hidden">
              <button
                onClick={handlePrint}
                className="bg-[#E4D7CB] hover:bg-[#A58266] text-[#501B25] hover:text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-4 py-2.5 transition-colors flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Enquiry Slip</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigate('/catalogue')}
                  className="bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-5 py-2.5 transition-colors"
                >
                  Browse More Products
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="text-xs uppercase tracking-wider text-[#585656] hover:text-[#501B25] font-semibold"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. EMPTY STATE
  if (giftBoxItems.length === 0) {
    return (
      <div className="py-16 bg-[#F7F2EC] min-h-[calc(100vh-80px)]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-10 space-y-5">
            <div className="w-14 h-14 bg-[#E4D7CB] text-[#501B25] mx-auto flex items-center justify-center">
              <Box className="w-7 h-7" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-[#501B25]">
              Your Gift Box is Currently Empty
            </h2>
            <p className="text-xs sm:text-sm text-[#585656] max-w-md mx-auto leading-relaxed">
              Explore our curated catalogue collections or use the interactive Gift Box Builder to select luxury items for your bespoke corporate hamper.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => navigate('/build-your-gift-box')}
                className="bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-6 py-3 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C7AC95]" />
                <span>Open Gift Box Builder</span>
              </button>
              <button
                onClick={() => navigate('/catalogue')}
                className="bg-[#E4D7CB] hover:bg-[#A58266] text-[#501B25] hover:text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-6 py-3 transition-colors"
              >
                Browse Catalogue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. MAIN REVIEW & ENQUIRY FORM SCREEN
  return (
    <div className="py-8 bg-[#F7F2EC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Title */}
        <div className="border-b border-[#E4D7CB] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigate('/build-your-gift-box')}
              className="text-xs text-[#A58266] hover:text-[#501B25] flex items-center gap-1 mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Builder</span>
            </button>
            <h1 className="text-3xl font-serif font-bold text-[#501B25]">
              Review Gift Box & Submit Enquiry
            </h1>
            <p className="text-xs text-[#585656] mt-1">
              Verify your curated items, choose presentation packaging, and provide order details for a formal corporate quote.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/build-your-gift-box')}
              className="bg-[#E4D7CB] hover:bg-[#A58266] text-[#501B25] hover:text-[#F7F2EC] text-xs uppercase tracking-wider font-semibold px-4 py-2 transition-colors"
            >
              Add More Products
            </button>
            <button
              onClick={clearGiftBox}
              className="text-xs text-[#585656] hover:text-[#501B25] underline px-2 py-2"
            >
              Clear Box
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 6 COLS: Selected Items and Packaging */}
          <div className="lg:col-span-6 space-y-6">
            {/* Selected Products List */}
            <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E4D7CB] pb-3">
                <h2 className="font-serif font-bold text-lg text-[#501B25]">
                  Selected Box Items ({selectedItemCount} unique, {totalQuantityCount} total)
                </h2>
                <span className="text-[11px] text-[#A58266] uppercase font-semibold">
                  Custom Curations
                </span>
              </div>

              <div className="space-y-3">
                {giftBoxItems.map((item) => (
                  <div
                    key={item.productId}
                    className="bg-[#F7F2EC] border border-[#E4D7CB] p-3.5 flex items-center gap-3.5"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover bg-[#E4D7CB] shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-sm text-[#501B25] truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#A58266] font-medium">
                        {item.product.categoryName || item.product.category}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="flex items-center border border-[#A58266] bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="px-2 py-1 text-xs text-[#501B25] hover:bg-[#E4D7CB]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#141C33]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="px-2 py-1 text-xs text-[#501B25] hover:bg-[#E4D7CB]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromGiftBox(item.productId)}
                        className="text-[#585656] hover:text-[#501B25] text-xs flex items-center gap-1"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging Style Option Card */}
            <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-5 space-y-3">
              <h3 className="font-serif font-bold text-base text-[#501B25]">
                Choose Presentation Box Packaging
              </h3>
              <div className="space-y-2">
                {boxPackagingOptions.map((opt) => (
                  <label
                    key={opt.name}
                    className={`block p-3 border cursor-pointer transition-colors ${
                      selectedBoxStyle === opt.name
                        ? 'bg-[#E4D7CB]/40 border-[#501B25]'
                        : 'bg-[#F7F2EC] border-[#E4D7CB] hover:border-[#A58266]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="boxStyle"
                        checked={selectedBoxStyle === opt.name}
                        onChange={() => setSelectedBoxStyle(opt.name)}
                        className="mt-0.5 text-[#501B25] accent-[#501B25]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#501B25]">{opt.name}</p>
                        <p className="text-[11px] text-[#585656] mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLS: Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF7F2] border border-[#A58266]/40 p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#E4D7CB]/60 border border-[#A58266]/30 mb-2">
                  <Sparkles className="w-3 h-3 text-[#501B25]" />
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#501B25] uppercase">
                    B2B Enquiry Desk
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl text-[#501B25]">
                  Corporate Order Request
                </h2>
                <p className="text-xs text-[#585656] mt-1">
                  Fill in your delivery details below. We do not require payment upfront; our concierge will provide a formal commercial quotation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer Name */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Vikram Singhania"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className={`w-full bg-[#F7F2EC] border ${
                          formErrors.customerName ? 'border-red-500' : 'border-[#E4D7CB]'
                        } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none`}
                      />
                    </div>
                    {formErrors.customerName && (
                      <p className="text-[10px] text-red-600 mt-1">{formErrors.customerName}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Company / Organization *
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Acme Ventures Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full bg-[#F7F2EC] border ${
                          formErrors.company ? 'border-red-500' : 'border-[#E4D7CB]'
                        } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none`}
                      />
                    </div>
                    {formErrors.company && (
                      <p className="text-[10px] text-red-600 mt-1">{formErrors.company}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Corporate Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="vikram@acme.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#F7F2EC] border ${
                          formErrors.email ? 'border-red-500' : 'border-[#E4D7CB]'
                        } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-[10px] text-red-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Phone / Mobile *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+91 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#F7F2EC] border ${
                          formErrors.phone ? 'border-red-500' : 'border-[#E4D7CB]'
                        } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none`}
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-[10px] text-red-600 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Number of Gift Boxes */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Number of Gift Boxes *
                    </label>
                    <div className="relative">
                      <Box className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        min="1"
                        placeholder="50"
                        value={formData.numberOfBoxes}
                        onChange={(e) =>
                          setFormData({ ...formData, numberOfBoxes: parseInt(e.target.value) || 0 })
                        }
                        className={`w-full bg-[#F7F2EC] border ${
                          formErrors.numberOfBoxes ? 'border-red-500' : 'border-[#E4D7CB]'
                        } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none font-semibold`}
                      />
                    </div>
                    {formErrors.numberOfBoxes && (
                      <p className="text-[10px] text-red-600 mt-1">{formErrors.numberOfBoxes}</p>
                    )}
                  </div>

                  {/* Preferred Delivery Date */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Target Delivery Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={formData.preferredDeliveryDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDeliveryDate: e.target.value })
                        }
                        className={`w-full bg-[#F7F2EC] border ${
                          formErrors.preferredDeliveryDate ? 'border-red-500' : 'border-[#E4D7CB]'
                        } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none`}
                      />
                    </div>
                    {formErrors.preferredDeliveryDate && (
                      <p className="text-[10px] text-red-600 mt-1">{formErrors.preferredDeliveryDate}</p>
                    )}
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Delivery Location / Cities *
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-[#A58266] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Mumbai HQ and 4 Regional Hubs (Delhi, Bangalore, Pune, Hyderabad)"
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      className={`w-full bg-[#F7F2EC] border ${
                        formErrors.deliveryLocation ? 'border-red-500' : 'border-[#E4D7CB]'
                      } focus:border-[#501B25] pl-9 pr-3 py-2 text-[#141C33] outline-none`}
                    />
                  </div>
                  {formErrors.deliveryLocation && (
                    <p className="text-[10px] text-red-600 mt-1">{formErrors.deliveryLocation}</p>
                  )}
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Custom Branding & Additional Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify logo placement, debossing requirements, greeting card messages, custom ribbon colors, or special packaging preferences..."
                    value={formData.additionalRequirements}
                    onChange={(e) =>
                      setFormData({ ...formData, additionalRequirements: e.target.value })
                    }
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-3 text-[#141C33] placeholder-[#585656]/60 outline-none resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] py-3.5 px-6 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C7AC95]" />
                        <span>Submit Gift Box Enquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#585656] mt-2">
                    By submitting, your curated gift box products will be sent directly to our account concierge.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};