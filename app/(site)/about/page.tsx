import type { Metadata } from 'next';
import { FadeIn } from '../../../components/FadeIn';
import { siteName } from '../../../lib/seo';

export const metadata: Metadata = {
  title: `About | ${siteName}`,
  description: 'Learn about Stark Strong LLC – family-owned Colorado junk removal & recycling focused on reliability, fair pricing, and eco‑responsible disposal.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container-responsive pt-12 md:pt-20">
        <FadeIn className="max-w-4xl space-y-8">
          <header className="space-y-4">
            <div className="accent-divider" />
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">About <span className="accent">Stark Strong LLC</span></h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">My name is Brandon Stark, owner of Stark Strong LLC.</p>
          </header>

          <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-p:text-neutral-300 prose-a:text-[var(--color-accent)] space-y-6">
            <p>Stark Strong Hauling, Junk Removal &amp; Recycling is a family-owned and operated business located in the beautiful state of Colorado. At Stark Strong, we strive to provide excellent customer service, reliability, and the best upfront no-hassle pricing in the Pikes Peak region. We make disposal of any unwanted items easy and effortless. Customer satisfaction along with disposing of waste ethically and in an environmentally friendly manner, is our ultimate goal. We offer an all-inclusive junk removal service, with experienced and professional specialists. Just sit back, relax and let us do the heavy lifting for you!</p>

            <p>We are dedicated to environmentally responsible junk removal and disposal. Each day that we let go by without recycling items responsibly, we miss out on innumerable amounts of waste that can otherwise be reshaped into essential products. We are perfecting ways to practice eco-friendly waste removal and recycling on a daily basis.</p>

            <p>By playing our part in recycling we utilize multiple outlets throughout the Colorado Springs Metro area. We separate out all scrap metal from our loads such as cans, aluminum, copper and old large appliances and drop items off at EVRAZ Recycling or Peak Disposal &amp; Recycling to be reused and kept out of landfills. For decent undamaged furniture, clothes, desks, dishes, glassware, lamps, small working appliances and books, we drop these items at the Goodwill Monument Store located off Jackson Parkway. By doing this, these items will have a new life and benefit others rather than being tossed in a landfill. We also utilize Rocky Top Resources to recycle natural resources such as lumber, trees and tree branches to be turned into mulch. Lumber in good shape can be resold to the public and reused. Meaning less trees being chopped down and more oxygen being released into our atmosphere. Our mission is to reduce landfill waste across southern Colorado. Hopefully other businesses will follow suit benefiting the entire country and the world as a whole.</p>

            <p>Our junk/trash removal rates are based on volume of material removed. Our promise is to be extremely reliable and have the most affordable rates in the Pikes Peak Region.</p>

            <p className='text-brand-accent font-semibold'>We will beat any local or national big-box corporations price guaranteed. We greatly appreciate the chance to earn your business!</p>
          </article>
        </FadeIn>
      </section>
    </div>
  );
}
