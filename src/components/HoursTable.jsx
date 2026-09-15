export default function HoursTable({ hours, light = false }) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  return (
    <ul className={`divide-y ${light ? 'divide-paper/15' : 'divide-ink/10'}`}>
      {hours.map((h) => {
        const isToday = h.day === today;
        return (
          <li
            key={h.day}
            className={`flex items-center justify-between py-3.5 text-sm sm:text-base ${
              isToday ? 'font-semibold' : 'font-normal'
            }`}
          >
            <span className={light ? 'text-paper' : 'text-ink'}>
              {h.day}
              {isToday && <span className="ml-2 text-rust text-xs align-middle">Today</span>}
            </span>
            <span className={light ? 'text-paper/70' : 'text-ink/60'}>{h.hours}</span>
          </li>
        );
      })}
    </ul>
  );
}
