import { Metadata } from 'next';
import { FadeIn } from '../../../components/FadeIn';
import { CTAButton } from '../../../components/CTAButton';
import { phoneNumberDisplay } from '../../../lib/seo';

export const metadata: Metadata = {
  title: 'Pricing | Stark Strong LLC',
  description: 'Transparent junk removal pricing with volume-based truck load rates, common single item removal, additional charges and policies.'
};

interface VolumeRow {
  label: string;
  price: string;
  note?: string;
}

const minimumCharge = '$99–$109 (based on size / weight)';

const singleItems = [
  { item: 'Mattress and Box Spring', price: '$99–$119 (based on size)' },
  { item: 'Loveseat', price: '$149' },
  { item: '3-seat Couch / Refrigerator', price: '$179' }
];

const volumeLoads: VolumeRow[] = [
  { label: '1/8 Load', price: '$170' },
  { label: '1/4 Load', price: '$248' },
  { label: '3/8 Load', price: '$311' },
  { label: '1/2 Load', price: '$342' },
  { label: '5/8 Load', price: '$397' },
  { label: 'Full Load', price: '$544' },
  { label: 'Clean out per truck load', price: '$570', note: 'Includes two-hour labor time, volume load and $25 dump price for items' }
];

const miscCharges = [
  { item: 'More misc. items or 1 cubic ft. tote provided by us', price: '$25' },
  { item: 'Large Items (not listed above)', price: '$TBD' },
  { item: 'Removal of fabricated items (carpets, drywall etc.)', price: '$65/hour (or per 1.5-minute interval)' }
];

export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <FadeIn as="header" className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
        <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">Transparent, upfront pricing with a 5% cash discount. Call or text for a no-obligation estimate or to clarify weight / accessibility variables.</p>
        <div className="flex justify-center"><CTAButton label={`Call ${phoneNumberDisplay}`} /></div>
      </FadeIn>

      <FadeIn className="space-y-10">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Volume of Truck Load Pricing <span className="text-sm font-normal text-white/60">(5% Cash Discount)</span></h2>
          <div className="overflow-x-auto rounded-lg ring-1 ring-white/15">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white/5 text-left">
                  <th className="px-4 py-3 font-semibold">Volume / Description</th>
                  <th className="px-4 py-3 font-semibold w-40">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="bg-white/2">
                  <td className="px-4 py-4 align-top">
                    <p className="font-semibold underline">Minimum Charge <span className="font-normal text-white/70">(based on size / weight)</span></p>
                    <div className="mt-3 space-y-1">
                      <p className="font-semibold underline">Common Single Item Removal:</p>
                      {singleItems.map(i => (
                        <p key={i.item} className="flex justify-between gap-4"><span>{i.item}</span><span className="font-medium text-white/90">{i.price}</span></p>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-top font-medium">{minimumCharge}</td>
                </tr>
                {volumeLoads.map(row => (
                  <tr key={row.label}>
                    <td className="px-4 py-3">
                      <div className="font-medium">{row.label}</div>
                      {row.note && <div className="mt-1 text-xs text-white/70 max-w-sm leading-snug">{row.note}</div>}
                    </td>
                    <td className="px-4 py-3 font-medium">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Additional Charges</h2>
          <p className="text-sm text-white/70 max-w-2xl">If applicable: charges are in addition to load price depending on weight and accessibility.</p>
          <ul className="space-y-2 text-sm">
            {miscCharges.map(i => (
              <li key={i.item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-md bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span>{i.item}</span>
                <span className="font-medium text-white/90">{i.price}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why We Charge This Way</h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-3xl">Volume-based pricing keeps things clear and consistent. Exact quotes consider weight (heavier loads increase disposal fees) and accessibility (stairs, distance from truck, disassembly). We always confirm price on-site before starting so there are no surprises.</p>
        </section>
      </FadeIn>
    </main>
  );
}
