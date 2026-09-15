export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? 'text-brass-light' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] ${light ? 'text-paper' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-paper/75' : 'text-ink/70'}`}>{description}</p>
      )}
    </div>
  );
}
