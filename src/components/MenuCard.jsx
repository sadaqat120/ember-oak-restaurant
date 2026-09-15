const tagLabels = {
  vegetarian: 'V',
  gf: 'GF',
};

export function DietTag({ tag }) {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 text-[10px] font-semibold border border-sage text-sage rounded-full">
      {tagLabels[tag] || tag}
    </span>
  );
}

export default function MenuCard({ item }) {
  return (
    <div className="flex items-start justify-between gap-6 py-5 border-b border-ink/10">
      <div>
        <div className="flex items-center flex-wrap gap-2">
          <h3 className="font-display text-lg text-ink">{item.name}</h3>
          {item.signature && (
            <span className="text-[10px] tracking-wide font-medium text-rust border border-rust px-1.5 py-0.5">
              Signature
            </span>
          )}
          {item.seasonal && (
            <span className="text-[10px] tracking-wide font-medium text-brass border border-brass px-1.5 py-0.5">
              Seasonal
            </span>
          )}
          {item.tags?.map((t) => <DietTag key={t} tag={t} />)}
        </div>
        <p className="mt-1.5 text-sm text-ink/60 leading-relaxed max-w-lg">{item.description}</p>
      </div>
      <p className="font-display text-lg text-ink whitespace-nowrap">${item.price}</p>
    </div>
  );
}
