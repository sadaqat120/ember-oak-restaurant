import PageHero from '../components/PageHero';
import HoursTable from '../components/HoursTable';
import CTASection from '../components/CTASection';
import { hours, specialHours, restaurant, images } from '../data/site';
import { MapPin } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

export default function Hours() {
  usePageMeta('Visiting Hours', "Weekly hours, holiday schedule, and location for Ember & Oak in Chicago.");
  return (
    <>
      <PageHero
        eyebrow="Visiting Hours"
        title="When to find us."
        description="Dinner service runs Tuesday through Sunday, with weekend brunch on Saturday and Sunday."
        image={images.diningRoom}
      />

      <section className="py-20 sm:py-28">
        <div className="container-content grid md:grid-cols-5 gap-14">
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Weekly Hours</p>
            <div className="border border-ink/15 p-6 sm:p-8">
              <HoursTable hours={hours} />
            </div>
            <p className="mt-4 text-xs text-ink/50">
              Kitchen closes 30 minutes before listed closing time. Bar remains open later on Friday and Saturday.
            </p>
          </div>

          <div className="md:col-span-2 space-y-10">
            <div>
              <p className="eyebrow mb-4">Holiday & Special Hours</p>
              <ul className="space-y-3">
                {specialHours.map((s) => (
                  <li key={s.label} className="border-t border-ink/15 pt-3">
                    <p className="text-sm font-medium">{s.label}</p>
                    <p className="text-sm text-ink/60">{s.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-ink/15 p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-rust shrink-0 mt-0.5" />
                <p className="text-sm text-ink/75">
                  {restaurant.address.line1}
                  <br />
                  {restaurant.address.line2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Plan your visit" description="Reserve ahead, especially for Friday and Saturday evenings." />
    </>
  );
}
