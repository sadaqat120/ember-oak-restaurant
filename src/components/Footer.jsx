import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { restaurant, footerNav, hours } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="container-content py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="font-display text-2xl text-paper">
            Ember <span className="text-rust-light">&amp;</span> Oak
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-paper/60 max-w-xs">
            {restaurant.shortDescription}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href={restaurant.social.instagram} aria-label="Ember & Oak on Instagram" className="hover:text-paper">
              <InstagramIcon size={18} />
            </a>
            <a href={restaurant.social.facebook} aria-label="Ember & Oak on Facebook" className="hover:text-paper">
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-brass-light mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-paper transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass-light mb-4">Visit</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>
                {restaurant.address.line1}
                <br />
                {restaurant.address.line2}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="shrink-0 mt-0.5" />
              <a href={restaurant.phoneHref} className="hover:text-paper">
                {restaurant.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="shrink-0 mt-0.5" />
              <a href={`mailto:${restaurant.email}`} className="hover:text-paper break-all">
                {restaurant.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass-light mb-4">Hours</p>
          <ul className="space-y-1.5 text-sm">
            {hours.slice(0, 4).map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-paper/60 text-right">{h.hours}</span>
              </li>
            ))}
          </ul>
          <Link to="/hours" className="inline-block mt-4 text-sm text-brass-light hover:text-paper underline underline-offset-4">
            Full weekly hours
          </Link>
        </div>
      </div>

      <div className="hairline border-paper/10">
        <div className="container-content py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
          <p>Website concept prepared for review · not yet in production</p>
        </div>
      </div>
    </footer>
  );
}
