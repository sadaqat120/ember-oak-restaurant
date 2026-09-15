export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-45" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>
      <div className="container-content relative py-28 sm:py-36">
        {eyebrow && <p className="eyebrow text-brass-light mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl">{title}</h1>
        {description && <p className="mt-5 max-w-xl text-paper/75 text-base sm:text-lg leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
