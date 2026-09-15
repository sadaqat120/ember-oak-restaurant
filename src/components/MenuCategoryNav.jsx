export default function MenuCategoryNav({ categories, active, onSelect }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[65px] sm:top-[105px] z-30 bg-paper/95 backdrop-blur border-b border-ink/10 -mx-6 px-6 sm:mx-0 sm:px-0"
    >
      <div className="container-content overflow-x-auto no-scrollbar">
        <ul className="flex gap-6 py-4 text-sm font-medium whitespace-nowrap">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => onSelect(cat.id)}
                aria-current={active === cat.id ? 'true' : undefined}
                className={`pb-1 border-b-2 transition-colors ${
                  active === cat.id ? 'border-rust text-ink' : 'border-transparent text-ink/50 hover:text-ink'
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
