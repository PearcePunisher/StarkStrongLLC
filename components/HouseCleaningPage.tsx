import { CTAButton } from './CTAButton';
import { FadeIn } from './FadeIn';
import Image from 'next/image';

const cleaningServices = [
  {
    title: 'Living Areas & Bedrooms',
    description: 'dusting, vacuuming, baseboards, blinds, windowsills, furniture polish, ceiling fans.'
  },
  {
    title: 'Kitchens',
    description: 'countertops, cabinet exteriors, sinks, stovetops, microwaves (inside & out), stainless steel shine, appliance wipe-downs, trash removal.'
  },
  {
    title: 'Bathrooms',
    description: 'showers, tubs, tile scrubbing, toilets, sinks, mirrors, chrome fixtures polished, floors disinfected.'
  },
  {
    title: 'Floors',
    description: 'vacuuming, sweeping, mopping, spot treatments.'
  },
  {
    title: 'Whole House Touches',
    description: 'interior windows, doors, switch plates, light fixtures, and more.'
  }
];

const whyChooseUs = [
  {
    title: 'Detail-Oriented',
    description: "We don&rsquo;t miss corners, edges, or high spots."
  },
  {
    title: 'Safe Products',
    description: 'Eco-friendly cleaning supplies available.'
  },
  {
    title: 'Trustworthy Staff',
    description: 'Background-checked, trained professionals.'
  },
  {
    title: '100% Satisfaction Guarantee',
    description: "If you&rsquo;re not happy, we&rsquo;ll make it right."
  }
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-brand-accent flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function HouseCleaningPage() {
  return (
    <div className="bg-[color:var(--color-surface)] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container-responsive">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Deep Clean. Fresh Start. Total Comfort.
                </h1>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Professional house cleaning services that transform your home into a spotless, fresh, and inviting space. 
                  From top to bottom, every corner receives our full attention.
                </p>
                <CTAButton />
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/20 shadow-2xl">
                <Image 
                  src="/images/before-after.avif" 
                  alt="Professional house cleaning services" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Clean Section */}
      <section className="py-16 bg-[color:var(--color-surface-secondary)]">
        <div className="container-responsive">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Clean
              </h2>
              <p className="text-lg text-white/80">
                Comprehensive cleaning services for every area of your home
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cleaningServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100}>
                <div className="bg-[color:var(--color-surface)] rounded-lg p-6 border border-white/10 hover:border-brand-accent/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-[color:var(--color-surface)] rounded-lg p-6 border border-white/10">
              <h3 className="font-semibold text-white text-lg mb-3">
                Optional Add-ons:
              </h3>
              <p className="text-white/80 leading-relaxed">
                Deep carpet shampoo, oven cleaning, fridge deep clean, move-in/move-out cleaning.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container-responsive">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-white/80">
                Professional cleaning with attention to detail and customer satisfaction
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <FadeIn key={item.title} delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <CheckIcon />
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={200}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-white/20 shadow-xl">
                <Image 
                  src="/images/cleaning-crew.webp" 
                  alt="Professional cleaning team at work" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-lg p-8 border border-brand-accent/30 text-center">
              <blockquote className="text-lg md:text-xl text-white/90 italic leading-relaxed">
                &ldquo;We don&rsquo;t just clean – we transform your home into a spotless, fresh, and inviting space. 
                From top to bottom, every corner receives our full attention so you can breathe easy, relax, 
                and enjoy your home the way it&rsquo;s meant to be.&rdquo;
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container-responsive text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Spotless Home?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free estimate today and experience the difference professional cleaning makes.
            </p>
            <CTAButton />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
