import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { restaurant, primaryNav } from '../data/site';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen((wasOpen) => (wasOpen ? false : wasOpen));
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-paper focus:text-ink focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <div className="hidden sm:block bg-ink text-paper/80 text-xs tracking-wide">
        <div className="container-content flex items-center justify-between py-2">
          <p>Reservations recommended · Thursday–Sunday</p>
          <a href={restaurant.phoneHref} className="flex items-center gap-1.5 hover:text-paper">
            <Phone size={12} strokeWidth={2} /> {restaurant.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          solid ? 'bg-paper/95 backdrop-blur border-b border-ink/10 shadow-sm' : 'bg-transparent border-b border-transparent'
        } ${!solid && location.pathname === '/' ? 'text-paper' : 'text-ink'}`}
      >
        <nav className="container-content flex items-center justify-between py-4" aria-label="Primary">
          <Link to="/" className="font-display text-xl sm:text-2xl tracking-tight">
            Ember <span className="text-rust">&amp;</span> Oak
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `pb-1 border-b-2 transition-colors ${
                      isActive ? 'border-rust' : 'border-transparent hover:border-current/40'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/booking"
              className="hidden sm:inline-flex btn-primary"
            >
              Reserve a Table
            </Link>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="lg:hidden p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
