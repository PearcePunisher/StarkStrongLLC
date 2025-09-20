import { CTAButton } from './CTAButton';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

const services = [
  {
    key: 'junk-removal',
    title: 'Junk Removal',
    img: '/images/junk-removal.webp',
    desc: 'Full-service removal of unwanted items from homes, garages, rentals & more. We sort for donation & recycling whenever possible.',
  },
  {
    key: 'hauling',
    title: 'Hauling',
    img: '/images/hauling.webp',
    desc: 'Dependable hauling of furniture, debris, green waste and non-hazardous materials for homeowners, landlords & small business.',
  },
  {
    key: 'recycling',
    title: 'Recycling',
    img: '/images/recycling.webp',
    desc: 'Environmentally responsible sorting & diversion: metals, e‑waste, appliances, cardboard and more.',
  },
  {
    key: 'house-cleaning',
    title: 'House Cleaning',
    img: '/images/cleaning.webp',
    desc: 'Move-out cleans, recurring maintenance cleans and post-removal refresh to make spaces shine.',
  },
];

const additionalServices = [
  'Junk Removal',
  'House Cleanouts',
  'Garage Cleanouts',
  'Furniture Disposal',
  'Appliance Disposal',
  'Construction Debris Disposal',
  'Yard Debris Removal',
  'Eviction Cleanouts',
  'Hoarder Cleanouts',
  'Commercial Junk',
  'Hot Tub Removal',
  'Scrap Metal Hauling',
  'And More!'
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-brand-accent flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 13 4 4 10-10" />
    </svg>
  );
}

export function ServicesPage() {
  return (
    <div className="container-responsive py-12 space-y-12">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Services</h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">Professional junk removal, hauling, recycling & house cleaning services in Colorado Springs delivered with local care and eco‑friendly practices.</p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((s, idx) => (
          <div id={s.key} key={s.key} className="contents">
            <FadeIn delay={idx * 100} className={(idx === 0 ? 'card-accent' : 'card') + ' p-0 flex flex-col overflow-hidden'}>
            <div className="relative h-44 w-full">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h2 className="font-semibold text-xl text-neutral-900 dark:text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400 mt-1">{s.desc}</p>
              </div>
              <div>
                <CTAButton label={`Call About ${s.title}`} />
              </div>
            </div>
            </FadeIn>
          </div>
        ))}
      </div>
      <div className="space-y-8">
        <FadeIn className="card p-6">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Additional Services</h2>
          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {additionalServices.map((s, i) => (
              <li key={s} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                <CheckIcon />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <div>
          <CTAButton />
        </div>
      </div>
    </div>
  );
}
