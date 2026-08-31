import React, { useState } from 'react';
import { Mail, MapPin, Send, Sparkles, HelpCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import { useGiftBox } from '../context/GiftBoxContext';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const { showToast } = useGiftBox();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    estimatedUnits: '50-100',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Message Received', 'Our corporate concierge will reach out within 2 hours.', 'success');
  };

  const faqs = [
    {
      q: 'How does corporate ordering work?',
      a: 'We cater to bulk enterprise requirements starting from small team batches to nationwide rollouts with tailored packaging and bespoke curation.'
    },
    {
      q: 'How does corporate branding and personalization work?',
      a: 'We offer precision laser engraving on brass and metal, blind debossing or gold foil on leather, screen printing on apparel and drinkware, and personalized greeting cards with individual employee or client names.'
    },
    {
      q: 'Can we request a physical sample box before placing a bulk order?',
      a: 'Yes. Once we discuss your requirements and budget, we assemble a physical pre-production sample box for your internal leadership or board review.'
    },
    {
      q: 'What are the typical production and delivery timelines?',
      a: 'Standard orders dispatch within 5 to 7 business days following artwork approval. Express rush timelines (3 to 4 days) are available for urgent corporate events and summit deadlines.'
    },
    {
      q: 'Do you handle multi-destination individual home deliveries?',
      a: 'Yes. We provide complete pan-India direct-to-doorstep dispatch for remote teams and distributed clients with verified tracking notifications.'
    }
  ];

  return (
    <div className="py-10 bg-[#F7F2EC] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 border-b border-[#E4D7CB] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E4D7CB]/60 border border-[#A58266]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#501B25]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#501B25]">
              Dedicated Corporate Desk
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#501B25]">
            Connect with Our Corporate Concierge
          </h1>
          <p className="text-xs sm:text-sm text-[#585656] max-w-xl mx-auto leading-relaxed">
            Have a custom RFP, bulk corporate requirement, or upcoming festive summit? Our senior gifting advisors are here to assist.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 cols: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#A58266]/40 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#501B25] text-[#F7F2EC] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#C7AC95]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#501B25]">
                  Enquiry Transmitted
                </h3>
                <p className="text-xs sm:text-sm text-[#585656] max-w-md mx-auto">
                  Thank you, {formData.name}. Your message has been routed to our corporate accounts desk. A specialist will contact you shortly at {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#501B25] underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h2 className="font-serif font-bold text-xl text-[#501B25] mb-2">
                  Request a Bespoke Proposal
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-2.5 text-[#141C33] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Deloitte India"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-2.5 text-[#141C33] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-2.5 text-[#141C33] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98111 22334"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-2.5 text-[#141C33] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.estimatedUnits}
                    onChange={(e) => setFormData({ ...formData, estimatedUnits: e.target.value })}
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-2.5 text-[#141C33] outline-none"
                  >
                    <option value="25-50">25 to 50 boxes</option>
                    <option value="50-100">50 to 100 boxes</option>
                    <option value="100-250">100 to 250 boxes</option>
                    <option value="250-500">250 to 500 boxes</option>
                    <option value="500+">500+ boxes (Enterprise Volume)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#501B25] mb-1">
                    Event Details & Gifting Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your gifting occasion, target date, budget per box, and any customization requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F2EC] border border-[#E4D7CB] focus:border-[#501B25] p-2.5 text-[#141C33] outline-none resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#501B25] hover:bg-[#141C33] text-[#F7F2EC] py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#C7AC95]" />
                  <span>Submit Corporate Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right 5 cols: Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] border border-[#E4D7CB] p-6 space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#501B25]">
                Concierge Contact Details
              </h3>
              
              <div className="space-y-3 text-xs text-[#585656]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#501B25] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141C33]">Email Support</p>
                    <p>thetohfagifting.co@gmail.com</p>
                    <p className="text-[11px] text-[#A58266]">Response within 2 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#501B25] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141C33]">WhatsApp Support</p>
                    <a
                      href="https://wa.me/919347947046?text=Hey!%20I%27m%20Intrested%20in%20your%20products%20please%20share%20me%20the%20catalog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#501B25] hover:underline font-medium"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-[11px] text-[#A58266]">Quick response on WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#501B25] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#141C33]">Executive Studio & Headquarters</p>
                    <p>WeWork, Salarpuria symbiosis, Arakere, Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E4D7CB]/40 border border-[#E4D7CB] p-5 space-y-2 text-xs">
              <h4 className="font-serif font-bold text-sm text-[#501B25]">
                Prefer to build your own gift box interactively?
              </h4>
              <p className="text-[#585656]">
                Use our visual box builder to pick items and calculate indicative costs directly.
              </p>
              <button
                onClick={() => navigate('/build-your-gift-box')}
                className="text-xs uppercase tracking-wider font-semibold text-[#501B25] hover:underline block pt-1"
              >
                Launch Box Builder &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Corporate FAQ */}
        <div className="space-y-6 pt-4 border-t border-[#E4D7CB]">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58266] font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#501B25]">
              Corporate Ordering & Logistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#FAF7F2] p-5 border border-[#E4D7CB] space-y-1.5">
                <p className="font-serif font-bold text-sm text-[#501B25] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#A58266] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </p>
                <p className="text-xs text-[#585656] pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};