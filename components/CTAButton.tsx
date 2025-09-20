import React from 'react';
import Link from 'next/link';
import { phoneNumberRaw } from '../lib/seo';

export function CTAButton({ label = 'Call or Text Us Today' }: { label?: string }) {
  return (
    <Link href={`tel:${phoneNumberRaw}`} className="btn-primary">
      {label}
    </Link>
  );
}
