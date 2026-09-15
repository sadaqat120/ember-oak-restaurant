import { Expand } from 'lucide-react';

export default function GalleryGrid({ items, onOpen }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
      {items.map((item, i) => (
        <button
          key={item.src + i}
          type="button"
          onClick={() => onOpen(i)}
          className="group relative aspect-[4/5] overflow-hidden bg-ink/5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-rust"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
            <Expand
              size={22}
              className="text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              strokeWidth={1.5}
            />
          </div>
          <span className="absolute bottom-2 left-2 text-[10px] tracking-wide font-medium text-paper bg-ink/60 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.category}
          </span>
        </button>
      ))}
    </div>
  );
}
