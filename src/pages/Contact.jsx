import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import HoursTable from '../components/HoursTable';
import CTASection from '../components/CTASection';
import { restaurant, hours, images } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function Contact() {
  usePageMeta('Contact Us', 'Contact Ember & Oak for reservations, private events, or general questions.');
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(restaurant.address.mapQuery)}&z=15&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        description="Questions about a reservation, private event, or press inquiry — reach out and our team will follow up."
        image={images.contactMap}
      />

      <section className="py-20 sm:py-28">
        <div className="container-content grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="eyebrow mb-4">Get In Touch</p>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-rust shrink-0 mt-0.5" />
                  <span>
                    {restaurant.address.line1}
                    <br />
                    {restaurant.address.line2}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-rust shrink-0 mt-0.5" />
                  <a href={restaurant.phoneHref} className="hover:text-rust">
                    {restaurant.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-rust shrink-0 mt-0.5" />
                  <a href={`mailto:${restaurant.email}`} className="hover:text-rust break-all">
                    {restaurant.email}
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href={restaurant.social.instagram} aria-label="Instagram" className="text-ink/60 hover:text-rust">
                  <InstagramIcon size={20} />
                </a>
                <a href={restaurant.social.facebook} aria-label="Facebook" className="text-ink/60 hover:text-rust">
                  <FacebookIcon size={20} />
                </a>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">Hours</p>
              <HoursTable hours={hours} />
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-ink/10">
              <iframe
                title="Map to Ember & Oak"
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3 border border-ink/15 p-6 sm:p-10 bg-paper-light">
            <p className="eyebrow mb-4">Send a Message</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
