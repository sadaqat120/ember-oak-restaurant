import { Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import CateringForm from '../components/CateringForm';
import CTASection from '../components/CTASection';
import { banquet, images, gallery } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

const eventGallery = gallery.filter((g) => g.category === 'Events');

export default function Banquet() {
  usePageMeta('Banquet Facility', "Private event space for weddings, corporate dinners, and celebrations, seating up to 140 guests.");
  return (
    <>
      <PageHero
        eyebrow="Banquet Facility"
        title="A room for every kind of gathering."
        description={`${banquet.capacity} across three distinct spaces, each built around the same live-fire kitchen.`}
        image={images.banquetHall}
      />

      {/* ROOMS */}
      <section className="py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading eyebrow="Our Spaces" title="Three rooms, one hearth" description="Every event, regardless of size, is cooked from the same kitchen that serves our main dining room." />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {banquet.rooms.map((room) => (
              <div key={room.name} className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-2xl">{room.name}</h3>
                <p className="mt-1 text-sm font-medium text-rust">{room.capacity}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{room.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES + AMENITIES */}
      <section className="py-20 sm:py-28 bg-paper-dark">
        <div className="container-content grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-3">What We Host</p>
            <h2 className="font-display text-3xl leading-[1.1] mb-6">Event types</h2>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {banquet.eventTypes.map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-ink/75">
                  <span className="w-1.5 h-1.5 bg-rust shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Included</p>
            <h2 className="font-display text-3xl leading-[1.1] mb-6">Amenities</h2>
            <ul className="space-y-3">
              {banquet.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2.5 text-sm text-ink/75">
                  <Check size={16} className="text-sage shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading eyebrow="Sample Packages" title="Starting points for planning" description="Every package is customized after a menu tasting — these figures are a starting point for your budget." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {banquet.packages.map((pkg, i) => (
              <EventCard key={pkg.name} {...pkg} highlighted={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="pb-20 sm:pb-28">
        <div className="container-content grid grid-cols-3 gap-3">
          {eventGallery.map((img) => (
            <div key={img.src} className="aspect-[4/5] overflow-hidden">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="container-content grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow text-brass-light mb-3">Start Planning</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">Request the room for your event</h2>
            <p className="text-paper/70 leading-relaxed mb-6">
              Share a few details and our events team will follow up to schedule a walkthrough and menu tasting.
              This form is a demo submission — no live events inbox is connected yet.
            </p>
          </div>
          <div className="bg-paper text-ink p-6 sm:p-10">
            <CateringForm eventTypes={banquet.eventTypes} context="banquet" />
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to talk it through?"
        description="Call our events line directly and we'll walk you through availability and pricing."
        primaryLabel="Reserve a Tasting"
        primaryTo="/booking"
      />
    </>
  );
}
