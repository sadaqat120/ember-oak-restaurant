export default function EventCard({ name, price, detail, highlighted = false }) {
  return (
    <div
      className={`flex flex-col p-8 border ${
        highlighted ? 'border-rust bg-ink text-paper' : 'border-ink/15 bg-paper-light text-ink'
      }`}
    >
      <h3 className="font-display text-2xl">{name}</h3>
      <p className={`mt-1 text-sm font-medium ${highlighted ? 'text-brass-light' : 'text-rust'}`}>{price}</p>
      <p className={`mt-4 text-sm leading-relaxed ${highlighted ? 'text-paper/75' : 'text-ink/65'}`}>{detail}</p>
    </div>
  );
}
