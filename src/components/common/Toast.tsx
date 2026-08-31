import React from 'react';
import { useGiftBox } from '../../context/GiftBoxContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useGiftBox();

  if (!toast) return null;

  const isBurgundy = toast.type === 'burgundy';
  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in max-w-sm w-full">
      <div
        className={`flex items-start gap-3 p-4 shadow-xl border ${
          isBurgundy
            ? 'bg-[#501B25] text-[#F7F2EC] border-[#A58266]/30'
            : isSuccess
            ? 'bg-[#141C33] text-[#F7F2EC] border-[#C7AC95]/30'
            : 'bg-[#F7F2EC] text-[#585656] border-[#E4D7CB]'
        }`}
      >
        <div className="mt-0.5 shrink-0">
          {isSuccess || isBurgundy ? (
            <CheckCircle2 className="w-5 h-5 text-[#C7AC95]" />
          ) : (
            <Info className="w-5 h-5 text-[#501B25]" />
          )}
        </div>
        <div className="flex-1 pr-2">
          <p className="text-sm font-semibold tracking-wide">{toast.title}</p>
          <p className={`text-xs mt-0.5 ${isBurgundy || isSuccess ? 'text-[#E4D7CB]' : 'text-[#585656]'}`}>
            {toast.message}
          </p>
        </div>
        <button
          onClick={hideToast}
          className="p-1 hover:opacity-70 transition-opacity text-current"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};