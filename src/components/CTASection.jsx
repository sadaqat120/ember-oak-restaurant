import Button from './Button';
import { restaurant } from '../data/site';

export default function CTASection({
  title = 'Ready to reserve your table?',
  description = 'Join us for an evening by the hearth. Reservations are recommended, especially on weekends.',
  primaryLabel = 'Book a Table',
  primaryTo = '/booking',
  secondaryLabel = 'Call the Restaurant',
}) {
  return (
    <section className="bg-wine text-paper">
      <div className="container-content py-16 sm:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]">{title}</h2>
          <p className="mt-4 text-paper/75 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Button to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          <Button href={restaurant.phoneHref} variant="ghost">
            {secondaryLabel} · {restaurant.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
