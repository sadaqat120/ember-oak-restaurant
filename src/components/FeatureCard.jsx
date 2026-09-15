export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="border-t border-ink/15 pt-6">
      {Icon && <Icon size={22} className="text-rust mb-4" strokeWidth={1.5} />}
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-ink/65">{description}</p>
    </div>
  );
}
