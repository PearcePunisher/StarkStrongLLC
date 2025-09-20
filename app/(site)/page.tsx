import { Hero } from '../../components/Hero';
import { ServicesOverview } from '../../components/ServicesOverview';
import { TrustBadges } from '../../components/TrustBadges';
import { MapSection } from '../../components/MapSection';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { PromoCallout } from '../../components/PromoCallout';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-24">
      <Hero />
      <ServicesOverview />
      <TrustBadges />
      <MapSection />
      <TestimonialsSection />
      <PromoCallout />
    </div>
  );
}
