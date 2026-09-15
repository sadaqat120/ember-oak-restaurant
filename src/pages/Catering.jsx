import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import FeatureCard from '../components/FeatureCard';
import CateringForm from '../components/CateringForm';
import CTASection from '../components/CTASection';
import { catering, images } from '../data/site';
import { Truck, ChefHat, Building2, PartyPopper } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

const serviceIcons = [Truck, ChefHat, Building2, PartyPopper];

export default function Catering() {
  usePageMeta('Catering', "Live-fire catering for weddings, corporate events, and private parties across Chicago.");
  return (
    <>
      <PageHero eyebrow="Catering" title="Live-fire catering, on your terms." description={catering.intro} image={images.cateringSpread} />

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading eyebrow="Services" title="Catering, however you need it" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {catering.services.map((s, i) => (
              <FeatureCard key={s.name} icon={serviceIcons[i]} title={s.name} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28 bg-paper-dark">
        <div className="container-content">
          <SectionHeading eyebrow="How It Works" title="From inquiry to service" description="A straightforward, four-step process for every event, large or small." />
          <ol className="mt-14 grid sm:grid-cols-4 gap-8">
            {catering.process.map((p, i) => (
              <li key={p.step} className="border-t border-ink/20 pt-5">
                <span className="text-xs text-rust font-medium">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl mt-2 mb-2">{p.step}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading eyebrow="Sample Packages" title="Menus built around your headcount" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {catering.packages.map((pkg, i) => (
              <EventCard key={pkg.name} {...pkg} highlighted={i === 2} />
            ))}
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="container-content">
          <p className="eyebrow text-brass-light mb-3">On Every Catering Menu</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-10 max-w-xl">Highlights from our catering menu</h2>
          <div className="flex flex-wrap gap-3">
            {catering.menuHighlights.map((h) => (
              <span key={h} className="text-sm border border-paper/25 px-4 py-2 text-paper/85">
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 sm:py-28">
        <div className="container-content grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-3">Start Planning</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">Request a catering quote</h2>
            <p className="text-ink/70 leading-relaxed">
              Tell us about your event and our catering team will follow up with a custom proposal. This is a demo
              submission — no live events inbox is connected yet.
            </p>
          </div>
          <div className="border border-ink/15 p-6 sm:p-10 bg-paper-light">
            <CateringForm eventTypes={catering.eventTypes} context="catering" />
          </div>
        </div>
      </section>

      <CTASection
        title="Hosting the event here instead?"
        description="Take a look at our banquet rooms for on-site private events."
        primaryLabel="View Banquet Facility"
        primaryTo="/banquet"
      />
    </>
  );
}
