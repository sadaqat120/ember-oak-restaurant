import { useState, useRef } from 'react';
import PageHero from '../components/PageHero';
import MenuCategoryNav from '../components/MenuCategoryNav';
import MenuCard, { DietTag } from '../components/MenuCard';
import CTASection from '../components/CTASection';
import { menu, images } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function Menu() {
  usePageMeta('Menu', "Browse the seasonal wood-fired menu at Ember & Oak, including starters, mains, chef's specialties, and desserts.");
  const [active, setActive] = useState(menu[0].id);
  const sectionRefs = useRef({});

  const handleSelect = (id) => {
    setActive(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="A menu written by the season."
        description="Prices and dishes reflect what's currently available from our farm partners and change throughout the year."
        image={images.dishSteak}
      />

      <MenuCategoryNav categories={menu} active={active} onSelect={handleSelect} />

      <section className="py-16 sm:py-20">
        <div className="container-content max-w-3xl">
          <div className="flex items-center gap-6 text-xs text-ink/60 mb-10">
            <span className="flex items-center gap-2">
              <DietTag tag="vegetarian" /> Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <DietTag tag="gf" /> Gluten-Free Available
            </span>
          </div>

          {menu.map((category) => (
            <div
              key={category.id}
              id={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              className="mb-16 scroll-mt-36"
            >
              <h2 className="font-display text-3xl mb-1">{category.name}</h2>
              <div className="mt-6">
                {category.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}

          <p className="text-xs text-ink/45 mt-4">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of
            foodborne illness. Please notify your server of any allergies. 20% gratuity added to parties of 6+.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to taste it in person?"
        description="Reserve a table or download the printable menu to share before you visit."
        primaryLabel="Book a Table"
      />
    </>
  );
}
