import React from 'react';
import { X, MapPin, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/harennaData';

interface PhotoLightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((g) => g.id === item.id);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : items[items.length - 1];
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : items[0];

  return (
    <div
      id="lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="lightbox-content-card"
        className="relative max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-300 hover:text-white bg-stone-950/60 hover:bg-stone-950/90 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative md:w-3/5 bg-stone-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[65vh] md:max-h-[85vh]"
            referrerPolicy="no-referrer"
          />

          {/* Nav arrows */}
          <button
            onClick={() => onSelect(prevItem)}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-stone-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => onSelect(nextItem)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-stone-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] text-stone-300">
            {currentIndex + 1} of {items.length}
          </div>
        </div>

        {/* Narrative Information Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-stone-200 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300">
                <Tag className="w-3 h-3" />
                {item.tag}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-100 leading-tight">
              {item.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{item.location}</span>
            </div>

            <div className="h-px bg-stone-800 my-2" />

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Documentation & Conservation Context
              </span>
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <span>Harenna Forest Heritage Archive</span>
            <div className="flex gap-2">
              <button
                onClick={() => onSelect(prevItem)}
                className="hover:text-stone-100 transition-colors cursor-pointer underline"
              >
                Previous
              </button>
              <span>•</span>
              <button
                onClick={() => onSelect(nextItem)}
                className="hover:text-stone-100 transition-colors cursor-pointer underline"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
