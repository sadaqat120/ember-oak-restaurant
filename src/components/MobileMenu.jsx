import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { primaryNav, restaurant } from '../data/site';

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-ink text-paper lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="container-content pt-28 flex flex-col gap-1 text-3xl font-display"
          >
            {primaryNav.map((item) => (
              <li key={item.path} className="border-b border-paper/10">
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => `block py-4 ${isActive ? 'text-brass-light' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
          <div className="container-content mt-8 flex flex-col gap-4">
            <Link to="/booking" onClick={onClose} className="btn-primary w-full">
              Reserve a Table
            </Link>
            <a href={restaurant.phoneHref} className="text-paper/70 text-sm">
              Or call {restaurant.phone}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
