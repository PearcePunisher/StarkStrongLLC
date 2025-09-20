import { FadeIn } from './FadeIn';
import { CTAButton } from './CTAButton';
import Link from 'next/link';
import { phoneNumberRaw, phoneNumberDisplay, emailAddress } from '../lib/seo';

export function PromoCallout() {
  return (
    <section className="container-responsive">
      <FadeIn className="relative overflow-hidden rounded-2xl p-8 md:p-10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 ring-1 ring-white/10 shadow-subtle">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent)] bg-[linear-gradient(110deg,#fe7000_0%,#fe7000_8%,transparent_8%,transparent_16%)] bg-[length:200%_100%] animate-[shimmer_6s_linear_infinite] opacity-10" />
        <div className="space-y-5 relative">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest text-orange-400">LIMITED TIME SPECIAL OFFER</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Get 10% Off Your First Junk Removal Service</h2>
            <p className="text-brand-accent">Plus get 5% off for friends or family with referral.</p>
          </div>
          <div className="space-y-4 text-neutral-300">
            <p className="font-medium text-white">Call, Text or Email us for Same Day and Next Day pick-up availability!</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`tel:${phoneNumberRaw}`} className="group inline-flex items-center justify-center rounded-md border border-neutral-700/70 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-200 hover:border-orange-500 hover:text-white hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:ring-offset-2 focus:ring-offset-neutral-900">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 group-hover:scale-110 transition-transform" />Call: {phoneNumberDisplay}
              </Link>
              <Link href={`sms:${phoneNumberRaw}`} className="group inline-flex items-center justify-center rounded-md border border-neutral-700/70 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-200 hover:border-orange-500 hover:text-white hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:ring-offset-2 focus:ring-offset-neutral-900">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 group-hover:scale-110 transition-transform" />Text: {phoneNumberDisplay}
              </Link>
              <Link href={`mailto:${emailAddress}`} className="group inline-flex items-center justify-center rounded-md border border-neutral-700/70 bg-neutral-800/60 px-4 py-2 text-sm font-medium text-neutral-200 hover:border-orange-500 hover:text-white hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:ring-offset-2 focus:ring-offset-neutral-900">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500 group-hover:scale-110 transition-transform" />Email: {emailAddress}
              </Link>
            </div>
            <p className="text-xs text-neutral-400">Same day & next day haul away! Subject to schedule and availability.</p>
          </div>
          <div className="pt-2"><CTAButton label="Claim Your 10% Off" /></div>
        </div>
      </FadeIn>
    </section>
  );
}
