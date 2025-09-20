import Image from 'next/image';
import { FadeIn } from './FadeIn';

const services = [
  { title: 'Junk Removal', desc: 'Fast, friendly removal of unwanted items.', img: '/images/junk-removal.webp' },
  { title: 'Hauling', desc: 'Reliable hauling for residential & light commercial.', img: '/images/hauling.webp' },
  { title: 'Recycling', desc: 'Eco-conscious sorting & recycling practices.', img: '/images/recycling.webp' },
  { title: 'House Cleaning', desc: 'Thorough cleaning to refresh your space.', img: '/images/cleaning.webp' },
];

export function ServicesOverview() {
  return (
    <section className="container-responsive">
      <h2 className="section-title">Our Core Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, idx) => (
          <FadeIn key={s.title} delay={idx * 80} className={(idx === 0 ? 'card-accent' : 'card') + ' p-0 overflow-hidden'}>
            <div className="relative h-32 w-full">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-neutral-600 leading-snug mt-1 dark:text-neutral-400">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
