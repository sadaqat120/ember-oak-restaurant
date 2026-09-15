export default function ImageSection({ image, alt, reverse = false, eyebrow, title, children }) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div className="aspect-[4/5] overflow-hidden">
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-5">{title}</h2>
        <div className="text-ink/70 leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  );
}
