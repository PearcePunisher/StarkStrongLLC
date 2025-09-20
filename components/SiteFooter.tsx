import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-neutral-50 text-sm text-neutral-700 dark:bg-[color:var(--color-surface)] dark:border-neutral-700 dark:text-neutral-300">
  <div className="container-responsive py-12 grid gap-8 md:grid-cols-5">
        <div className="space-y-2">
          <h3 className="font-semibold text-neutral-900 dark:text-white">Stark Strong LLC</h3>
          <p className="text-neutral-600 leading-snug dark:text-neutral-400">Locally owned & operated junk removal, hauling, recycling & house cleaning in Colorado Springs.</p>
          <p className="text-neutral-600 dark:text-neutral-400">Licensed & Insured • Eco-Friendly</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Services</h4>
          <ul className="space-y-1">
            <li><Link href="/services#junk-removal" className="hover:text-brand-accent transition">Junk Removal</Link></li>
            <li><Link href="/services#hauling" className="hover:text-brand-accent transition">Hauling</Link></li>
            <li><Link href="/services#recycling" className="hover:text-brand-accent transition">Recycling</Link></li>
            <li><Link href="/services#house-cleaning" className="hover:text-brand-accent transition">House Cleaning</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Service Areas</h4>
          <p className="text-neutral-600 dark:text-neutral-400">Colorado Springs, Manitou Springs, Monument, Fountain, Falcon, Peyton, Woodland Park</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-brand-accent transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand-accent transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-neutral-900 dark:text-white">Get in Touch</h4>
          <p className="text-neutral-600 dark:text-neutral-400"><a href="tel:7195551234" className="text-brand-accent font-semibold">Call or Text: (719) 555-1234</a></p>
          <p className="text-neutral-600 dark:text-neutral-400">Environmentally responsible disposal & recycling.</p>
        </div>
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-700 py-4 text-center text-neutral-500 dark:text-neutral-500">© {new Date().getFullYear()} Stark Strong LLC. All rights reserved.</div>
    </footer>
  );
}
