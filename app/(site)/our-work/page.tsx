import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../../../components/FadeIn';
import { CTAButton } from '../../../components/CTAButton';
import { phoneNumberDisplay, phoneNumberRaw } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'Our Work | Stark Strong LLC',
  description: 'Examples of our junk removal work: house cleanouts, garage cleanouts, curbside pickup, plus items we cannot take.'
};

const showcaseItems = [
  {
    key: 'house-cleanouts',
    title: 'House Cleanouts',
    image: '/images/house-cleanout.avif',
    alt: 'House cleanout example with removed clutter',
    body: 'Whether it is an entire home that needs decluttering, or you just need a few sofas or mattresses disposed of, we are here to get the job done.'
  },
  {
    key: 'garage-cleanouts',
    title: 'Garage Cleanouts',
    image: '/images/garage-cleanout.avif',
    alt: 'Garage before junk removal service',
    body: 'If you are looking to be able to park your vehicle in the garage, Call Stark Strong to handle the heavy lifting!'
  },
  {
    key: 'curbside-pickup',
    title: 'Curbside Pickup',
    image: '/images/curbside-pickup.avif',
    alt: 'Curbside pickup junk items awaiting removal',
    body: 'It is as simple as sending us a quick picture of your junk, and we will dispose of it promptly and sweep the area before we leave.'
  }
];

const excludedItems = [
  'Household Chemicals',
  'Herbicides/Pesticides',
  'Car Fluids Oil/Antifreeze',
  'Biohazard Items',
  'Items Located In Dangerous Areas',
  'Bleach/Cleaners',
  'Wet Paint',
  'Fuels/Gasoline',
  'Pressurized Containers',
  'Animal Carcasses',
  'Any Other Known Hazardous Materials'
];

export default function OurWorkPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      <FadeIn as="header" className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Work</h1>
        <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto text-pretty">
          If you live in the Greater Pikes Region and are in need of a junk removal company, look no further than the Stark Strong Hauling, Junk Removal & Recycling team. We’ve got your back. We’re building a strong reputation with a solid base of customer service, quality and care. That is exactly what you will get with the Stark Strong team 100% of the time. We will show up on time to your home or business, clean cut, honest and respectful of both you and your home or business.
        </p>
        <div className="flex items-center justify-center gap-4">
          <CTAButton label={`Call ${phoneNumberDisplay}`} />
          {/* <Link href="/contact" className="btn-secondary">Contact Form</Link> */}
        </div>
      </FadeIn>

      <section className="grid gap-16">
        {showcaseItems.map((item, i) => (
          <FadeIn key={item.key} className="grid md:grid-cols-2 gap-8 items-center" delay={i * 80}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg ring-1 ring-gray-200 bg-gray-100">
              <Image src={item.image} alt={item.alt} fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-white leading-relaxed">{item.body}</p>
            </div>
          </FadeIn>
        ))}
      </section>

      <FadeIn as="section" className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">The Few Items We Will NOT Dispose Of</h2>
            <div className="mt-2 rounded-lg border border-red-500/40 bg-red-500/5 dark:border-red-500/30 dark:bg-red-500/10 p-4">
              <p className="text-white leading-relaxed mb-3">The items we will not dispose of are as listed:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {excludedItems.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg ring-1 ring-gray-200 bg-gray-100">
            <Image src="/images/no-fly.avif" alt="Restricted disposal items" fill className="object-cover" />
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
