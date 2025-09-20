const testimonials = [
  { name: 'Sarah W.', quote: 'They arrived on time and cleared everything quickly. Great local company!' },
  { name: 'Michael B.', quote: 'Professional, friendly, and eco-conscious. Highly recommend for removal.' },
  { name: 'Dana K.', quote: 'House cleaning and hauling in one visit—super convenient and efficient.' },
];

export function TestimonialsSection() {
  return (
    <section className="container-responsive">
      <h2 className="section-title">What Clients Say</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <figure key={t.name} className={(idx === 0 ? 'card-accent' : 'card') + ' p-5'}>
            <blockquote className="text-neutral-700 text-sm leading-relaxed dark:text-neutral-300">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wide">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
