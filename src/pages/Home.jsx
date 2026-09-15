import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, UtensilsCrossed, Users, ArrowRight, MapPin, Clock } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import FeatureCard from '../components/FeatureCard';
import HoursTable from '../components/HoursTable';
import {
  restaurant,
  hours,
  images,
  signatureDishes,
  banquet,
  catering,
  gallery,
  testimonials,
} from '../data/site';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  usePageMeta(
    undefined,
    'Wood-fired American kitchen in Chicago. Seasonal dinner, private banquet space, catering, and hosting. Reserve your table online.'
  );
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] flex items-end overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <img src={images.heroHome} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        </div>

        <div className="container-content relative pb-16 sm:pb-24 pt-40">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl">
            <p className="eyebrow text-brass-light mb-4">Chicago · Est. 2019</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02]">
              Cooking, the way fire intended it.
            </h1>
            <p className="mt-6 text-lg text-paper/80 max-w-lg leading-relaxed">
              {restaurant.shortDescription} Every dish at {restaurant.name} passes over red oak coals before it
              reaches your table.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button to="/booking" variant="primary">
                Reserve a Table <ArrowRight size={16} />
              </Button>
              <Button to="/menu" variant="ghost">
                View the Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-ink/10">
        <div className="container-content py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-sm">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-rust shrink-0 mt-0.5" />
            <span>
              {restaurant.address.line1}, {restaurant.address.line2}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-rust shrink-0 mt-0.5" />
            <span>Dinner nightly except Monday · Weekend brunch 11:30–2:30</span>
          </div>
          <div className="flex items-start gap-3 sm:justify-self-end">
            <Flame size={18} className="text-rust shrink-0 mt-0.5" />
            <span>Live-fire hearth, open kitchen</span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 sm:py-28">
        <div className="container-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-3">Our Philosophy</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">
              A kitchen built around one hearth, not a hundred appliances.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              {restaurant.name} began with a simple idea: strip the kitchen down to fire, iron, and good ingredients.
              Everything on the menu — from the vegetables to the 38-ounce tomahawk — passes over the same
              wood-fed hearth at the center of our dining room.
            </p>
            <p className="text-ink/70 leading-relaxed mb-8">
              We work with a rotating list of regional farms, so the menu shifts with the seasons rather than
              staying fixed to a laminated card.
            </p>
            <Button to="/about" variant="secondary">
              Our Story <ArrowRight size={16} />
            </Button>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden">
            <img src={images.hearthFire} alt="Wood-fired hearth with glowing coals at the center of the kitchen" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20 sm:py-28 bg-paper-dark">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="From the Hearth" title="Signature dishes" />
            <Button to="/menu" variant="secondary" className="self-start sm:self-auto">
              Full Menu <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
            {signatureDishes.map((dish) => (
              <div key={dish.name}>
                <div className="aspect-[4/5] overflow-hidden mb-5">
                  <img src={dish.image} alt={dish.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl">{dish.name}</h3>
                  <span className="font-display text-xl text-rust shrink-0">{dish.price}</span>
                </div>
                <p className="mt-1.5 text-sm text-ink/60">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-20 sm:py-24">
        <div className="container-content grid sm:grid-cols-3 gap-8">
          <FeatureCard
            icon={Flame}
            title="Live-Fire Cooking"
            description="No gas ranges. Every course is finished over red oak coals in our open hearth kitchen."
          />
          <FeatureCard
            icon={UtensilsCrossed}
            title="Seasonal Sourcing"
            description="A menu that changes with regional harvests, not one printed once a year."
          />
          <FeatureCard
            icon={Users}
            title="Private Hosting"
            description="From a chef's counter for eight to a full restaurant buyout for 120."
          />
        </div>
      </section>

      {/* BANQUET PREVIEW */}
      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="container-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={images.banquetHall} alt="Private banquet room set for an event" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow text-brass-light mb-3">Banquet Facility</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">
              Space for the celebrations that matter.
            </h2>
            <p className="text-paper/70 leading-relaxed mb-6">
              The Oak Room hosts up to 140 guests for weddings, corporate dinners, and milestone celebrations —
              {' '}{banquet.capacity.toLowerCase()}.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {banquet.eventTypes.slice(0, 4).map((t) => (
                <span key={t} className="text-xs border border-paper/25 px-3 py-1.5 text-paper/80">
                  {t}
                </span>
              ))}
            </div>
            <Button to="/banquet" variant="ghost">
              Explore the Banquet Facility <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* CATERING PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="container-content grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="eyebrow mb-3">Catering</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">
              The hearth, brought to your event.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">{catering.intro}</p>
            <Button to="/catering" variant="secondary">
              Catering Packages <ArrowRight size={16} />
            </Button>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden">
            <img src={images.cateringSpread} alt="Catering spread of hearth-cooked dishes" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 sm:py-28 bg-paper-dark">
        <div className="container-content">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionHeading eyebrow="A Look Inside" title="Gallery" />
            <Button to="/gallery" variant="secondary" className="self-start sm:self-auto">
              View Full Gallery <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {gallery.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-[4/5] overflow-hidden">
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL + HOURS */}
      <section className="py-20 sm:py-28">
        <div className="container-content grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">In the Press</p>
            <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-ink">
              “{testimonials[0].quote}”
            </blockquote>
            <p className="mt-4 text-sm text-ink/60">— {testimonials[0].name}</p>
          </div>
          <div className="border border-ink/15 p-8 sm:p-10">
            <p className="eyebrow mb-4">Visiting Hours</p>
            <HoursTable hours={hours} />
            <Link to="/hours" className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-rust hover:text-rust-dark">
              Full hours &amp; holiday schedule <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
