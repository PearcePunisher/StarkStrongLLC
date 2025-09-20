import { CTAButton } from './CTAButton';
import { LeadForm } from './LeadForm';

export function ContactPage() {
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Contact</h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">Call or text for same-day or next-day service in Colorado Springs. Or send a quick message below.</p>
      </header>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm space-y-2 dark:bg-[color:var(--color-surface)] dark:border-neutral-700">
            <h2 className="font-semibold text-neutral-900 dark:text-white">Call or Text</h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">Phone: <a href="tel:7195551234" className="text-brand-accent font-semibold">(719) 555-1234</a></p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Licensed & Insured • Eco-Friendly Disposal • Locally Owned</p>
          </div>
          <CTAButton />
        </div>
        <LeadForm />
      </div>
    </div>
  );
}
