import PageHero from '../components/PageHero';
import BookingForm from '../components/BookingForm';
import { images, restaurant } from '../data/site';
import { Users, Clock, Info } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

export default function Booking() {
  usePageMeta('Online Booking', "Request a table reservation at Ember & Oak.");
  return (
    <>
      <PageHero
        eyebrow="Online Booking"
        title="Reserve your table."
        description="Request a reservation below and we'll confirm availability. For parties of 13 or more, please use our banquet inquiry form instead."
        image={images.diningRoom}
      />

      <section className="py-20 sm:py-28">
        <div className="container-content grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            <div className="flex gap-3">
              <Users size={18} className="text-rust shrink-0 mt-0.5" />
              <p className="text-sm text-ink/70">Tables available for parties of 1–12.</p>
            </div>
            <div className="flex gap-3">
              <Clock size={18} className="text-rust shrink-0 mt-0.5" />
              <p className="text-sm text-ink/70">Reservations held for 15 minutes past the booked time.</p>
            </div>
            <div className="flex gap-3">
              <Info size={18} className="text-rust shrink-0 mt-0.5" />
              <p className="text-sm text-ink/70">
                This concept site does not yet connect to a live reservation system. In production, this form can
                connect to a booking API, Calendly, OpenTable, or a custom backend.
              </p>
            </div>
            <div className="border-t border-ink/15 pt-6">
              <p className="text-sm text-ink/60">
                Prefer to call? Reach the host stand directly at{' '}
                <a href={restaurant.phoneHref} className="text-rust font-medium">
                  {restaurant.phone}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 border border-ink/15 p-6 sm:p-10 bg-paper-light">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
