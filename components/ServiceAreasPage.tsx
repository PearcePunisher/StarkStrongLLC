import { CTAButton } from './CTAButton';

const areas = [
  'Colorado Springs',
  'Manitou Springs',
  'Monument',
  'Fountain',
  'Falcon',
  'Peyton',
  'Woodland Park',
  'Security-Widefield',
  'Black Forest'
];

export function ServiceAreasPage() {
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Service Areas</h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">Proudly serving Colorado Springs & surrounding communities with local, eco‑friendly junk removal, recycling, hauling & cleaning.</p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, idx) => (
          <li key={a} className={(idx === 0 ? 'card-accent' : 'card') + ' px-4 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-200'}>{a}</li>
        ))}
      </ul>
      {/* <div className="aspect-video w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-[color:var(--color-surface-alt)]">
        <iframe
          title="Colorado Springs Map"
          className="h-full w-full"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.737986980613!2d-104.821363!3d38.833881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134eaf7d347f43%3A0x863deec95bf2c98c!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v0000000000000"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
      <CTAButton />
    </div>
  );
}
