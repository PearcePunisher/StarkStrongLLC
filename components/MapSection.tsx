import { FadeIn } from './FadeIn';

const areas = [
  'Colorado Springs',
  'Black Forest',
  'Monument',
  'Gleneagle',
  'Palmer Lake',
  'Cimarron Hills',
  'Manitou Springs',
  'Larkspur/Castle Rock',
  'Cascade',
  'Woodland Park',
  'Fountain',
  'Falcon',
  'Pueblo',
  'El Paso County & Surrounding Areas'
];

function AreaIcon() {
  return (
    <svg className="h-4 w-4 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21c4-4.5 6-8 6-11a6 6 0 1 0-12 0c0 3 2 6.5 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export function MapSection() {
  return (
    <section className="container-responsive">
      <h2 className="section-title">Service Areas</h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mb-6">Proudly serving Colorado Springs and surrounding Front Range communities with fast, eco-friendly junk removal, hauling, recycling, and cleaning services.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, idx) => (
          <FadeIn key={area} delay={idx * 60} className={(idx === 0 ? 'card-accent' : 'card') + ' p-4 flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-200'}>
            <AreaIcon />
            <span className="leading-snug">{area}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
