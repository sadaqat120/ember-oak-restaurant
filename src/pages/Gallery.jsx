import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';
import GalleryLightbox from '../components/GalleryLightbox';
import CTASection from '../components/CTASection';
import { gallery, galleryCategories, images } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function Gallery() {
  usePageMeta('Gallery', 'A photo gallery of the Ember & Oak dining room, kitchen, dishes, and private events.');
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside Ember & Oak."
        description="From the hearth to the dining room, a glimpse of what a night with us looks like."
        image={images.heroInterior}
      />

      <section className="py-16 sm:py-20">
        <div className="container-content">
          <div className="flex gap-2 flex-wrap mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`text-sm px-4 py-2 border transition-colors ${
                  filter === cat ? 'bg-ink text-paper border-ink' : 'border-ink/25 text-ink/70 hover:border-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <GalleryGrid items={filtered} onOpen={(i) => setLightboxIndex(i)} />
        </div>
      </section>

      <GalleryLightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)}
        onNext={() => setLightboxIndex((i) => (i + 1) % filtered.length)}
      />

      <CTASection
        title="Want to see it in person?"
        description="Pictures only tell half the story — reserve a table and experience the hearth for yourself."
      />
    </>
  );
}
