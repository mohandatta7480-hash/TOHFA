import React from 'react';
import { Award, Truck, HeartHandshake, PackageCheck } from 'lucide-react';

export const BrandHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Artisanal Craftsmanship',
      description: 'Every product is handpicked, ethically sourced, and packed in luxury rigid presentation packaging.'
    },
    {
      icon: PackageCheck,
      title: 'Complete Custom Branding',
      description: 'Debossing, gold foil stamping, custom ribbons, and personalized corporate greeting cards for every recipient.'
    },
    {
      icon: Truck,
      title: 'Reliable Pan-India Logistics',
      description: 'Multi-destination corporate delivery with temperature-controlled shipping and real-time tracking.'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Account Concierge',
      description: 'A single point of contact to manage catalogue samples, bulk approvals, and timely dispatch.'
    }
  ];

  return (
    <section className="py-8 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 bg-[#FAF7F2] border border-[#E4D7CB] hover:border-[#A58266] transition-colors"
              >
                <div className="w-8 h-8 bg-[#E4D7CB] text-[#501B25] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif font-bold text-[#501B25] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#585656] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};