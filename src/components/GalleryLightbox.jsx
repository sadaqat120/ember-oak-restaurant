import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ items, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onPrev, onNext]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-5 right-5 text-paper p-2 hover:text-brass-light"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 text-paper p-2 hover:text-brass-light"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 text-paper p-2 hover:text-brass-light"
          >
            <ChevronRight size={32} />
          </button>

          <motion.figure
            key={item.src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl w-full"
          >
            <img src={item.src} alt={item.alt} className="w-full max-h-[75vh] object-contain" />
            <figcaption className="mt-4 text-center text-paper/70 text-sm">{item.alt}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
