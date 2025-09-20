import Image from 'next/image';
import { CTAButton } from './CTAButton';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="container-responsive pt-12 md:pt-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <FadeIn className="max-w-3xl space-y-6 hero-accent-title">
          <div className="accent-divider" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Your Local <span className="accent">Junk Removal</span> & Cleaning Experts in Colorado Springs
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">Locally owned & operated • Licensed & Insured • Environmentally Responsible</p>
          <FadeIn delay={120}><div><CTAButton /></div></FadeIn>
        </FadeIn>
        <FadeIn delay={180} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10 shadow-subtle">
          <Image src="/images/junk-removal.webp" alt="Stark Strong crew working" fill className="object-cover" priority />
        </FadeIn>
      </div>
    </section>
  );
}
