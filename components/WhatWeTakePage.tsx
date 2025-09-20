import { CTAButton } from "./CTAButton";

interface TakeItem {
  label: string;
  icon: string;
}
const items: TakeItem[] = [
  { label: "Couches", icon: "sofa" },
  { label: "Furniture", icon: "chair" },
  { label: "Mattresses", icon: "bed" },
  { label: "Fencing", icon: "fence" },
  { label: "Washers/Dryers", icon: "appliance" },
  { label: "Televisions", icon: "tv" },
  { label: "Refrigerators/Freezers", icon: "fridge" },
  { label: "Computers/Electronics", icon: "computer" },
  { label: "Hot Water Heaters", icon: "heater" },
  { label: "Decking", icon: "deck" },
  { label: "Sheds", icon: "shed" },
  { label: "Metal", icon: "metal" },
  { label: "Wood", icon: "wood" },
];

function ItemIcon({ name }: { name: string }) {
  const base = "h-5 w-5 text-brand-accent flex-none";
  switch (name) {
    case "sofa":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 13v5c0 .6.4 1 1 1h1m14 0h1c.6 0 1-.4 1-1v-5" />
          <path d="M3 13a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3" />
          <path d="M7 16v-2m10 2v-2" />
        </svg>
      );
    case "chair":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 12V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7" />
          <path d="M6 12h12" />
          <path d="M6 12v7" />
          <path d="M18 12v7" />
          <path d="M9 12v4" />
          <path d="M15 12v4" />
        </svg>
      );
    case "bed":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 17v2" />
          <path d="M21 17v2" />
          <path d="M3 13h18v4H3Z" />
          <path d="M7 13v-2a2 2 0 0 1 2-2h2v4" />
          <path d="M17 13v-2a2 2 0 0 0-2-2h-2v4" />
        </svg>
      );
    case "fence":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 21V9l2-2 2 2v12" />
          <path d="M9 21V9l2-2 2 2v12" />
          <path d="M13 21V9l2-2 2 2v12" />
          <path d="M4 13h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "appliance":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M5 8h14" />
          <path d="M9 5h.01" />
          <path d="M12 5h.01" />
        </svg>
      );
    case "tv":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="7" width="18" height="11" rx="2" />
          <path d="M8 21h8" />
          <path d="m9 7-3-4" />
          <path d="m15 7 3-4" />
        </svg>
      );
    case "fridge":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M7 10h10" />
          <path d="M10 6v2" />
          <path d="M10 14v2" />
        </svg>
      );
    case "computer":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      );
    case "heater":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M10 7v6" />
          <path d="M14 11v6" />
        </svg>
      );
    case "deck":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 15h18" />
          <path d="M5 15v4" />
          <path d="M9 15v4" />
          <path d="M15 15v4" />
          <path d="M19 15v4" />
          <path d="M3 11h18" />
          <path d="M7 11V7" />
          <path d="M11 11V7" />
          <path d="M13 11V7" />
          <path d="M17 11V7" />
        </svg>
      );
    case "shed":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m3 11 9-7 9 7" />
          <path d="M5 10.5V20h14v-9.5" />
          <path d="M10 20v-5a2 2 0 0 1 4 0v5" />
        </svg>
      );
    case "metal":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 18h16" />
          <path d="M4 6h16" />
          <path d="M8 6v12" />
          <path d="M16 6v12" />
        </svg>
      );
    case "wood":
      return (
        <svg
          className={base}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 21V5l4-2 4 2 4-2v16" />
          <path d="M10 5v16" />
          <path d="M14 7v14" />
        </svg>
      );
    default:
      return null;
  }
}

export function WhatWeTakePage() {
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          What We Take
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">
          We responsibly remove, recycle and donate as many items as possible to minimize
          landfill impact in Colorado Springs.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <div
            key={item.label}
            className={
              (idx === 0 ? "card-accent" : "card") +
              " p-4 flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-snug"
            }
          >
            <ItemIcon name={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="max-w-2xl text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
        We sort for donation & recycling, reducing waste and supporting local facilities.
        Hazardous materials are not accepted. If you are unsure about an item, call or
        text and we will help.
      </div>
      <CTAButton />
    </div>
  );
}
