import { Check, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { hosting, images } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function Hosting() {
  usePageMeta('Private Hosting', "Private dining and hosting options at Ember & Oak, from chef's counter seating to full restaurant buyouts.");
  return (
    <>
      <PageHero
        eyebrow="Hosting"
        title="Private hosting, without a full banquet."
        description={hosting.intro}
        image={images.privateHosting}
      />

      <section className="py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Hosting Options"
            title="Three ways to gather at Ember & Oak"
            description="For groups that want restaurant hospitality without booking a full banquet room."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {hosting.options.map((opt) => (
              <div key={opt.name} className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-2xl">{opt.name}</h3>
                <p className="mt-1 text-sm font-medium text-rust">{opt.capacity}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="container-content grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={images.chefPlating} alt="Chef hosting guests at the counter" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow text-brass-light mb-3">What's Included</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">Every hosting option includes</h2>
            <ul className="space-y-3 mb-8">
              {hosting.included.map((i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-paper/80">
                  <Check size={16} className="text-brass-light shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="text-paper/70 leading-relaxed mb-6">
              Larger celebrations may be better suited to our dedicated banquet rooms — take a look if you're
              planning for more than 24 guests.
            </p>
            <Button to="/banquet" variant="ghost">
              Compare Banquet Facility <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to plan your evening?"
        description="Tell our team what you have in mind and we'll help you choose the right hosting option."
        primaryLabel="Send a Catering Inquiry"
        primaryTo="/catering"
      />
    </>
  );
}
