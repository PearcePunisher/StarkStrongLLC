const badges = [
  { label: 'Licensed & Insured', icon: 'shield-check' },
  { label: 'Eco-Friendly Practices', icon: 'leaf' },
  { label: 'Locally Owned', icon: 'home' },
];

function Icon({ name }: { name: string }) {
  const common = 'h-10 w-10 flex-none text-brand-accent';
  switch (name) {
    case 'shield-check':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3.2c-.5 0-.9.1-1.3.3L6.5 5.2c-.8.4-1.3 1.2-1.3 2.1v5.2c0 1.6.7 3.1 1.9 4.1l3.7 3.1c.7.6 1.8.6 2.5 0l3.7-3.1c1.2-1 1.9-2.5 1.9-4.1V7.3c0-.9-.5-1.7-1.3-2.1l-4.2-1.7c-.4-.2-.8-.3-1.3-.3Z" />
          <path d="m9.2 12.3 2 2 3.6-3.6" />
        </svg>
      );
    case 'leaf':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 19c8 0 14-6 14-14v-.5c0-.3-.2-.5-.5-.5H18C10 4 4 10 4 18v.5c0 .3.2.5.5.5h.5Z" />
          <path d="M8 16c1.5-4 4.5-7 8-8" />
        </svg>
      );
    case 'home':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10.5V19c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-8.5" />
          <path d="M9 15a3 3 0 0 1 6 0v5H9v-5Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function TrustBadges() {
  return (
    <section className="container-responsive">
      <div className="flex flex-wrap justify-center text-center gap-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:bg-[color:var(--color-surface)] dark:border-neutral-700">
        {badges.map(b => (
          <div key={b.label} className="flex flex-col items-center gap-2 w-40">
            <Icon name={b.icon} />
            <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 leading-tight">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
