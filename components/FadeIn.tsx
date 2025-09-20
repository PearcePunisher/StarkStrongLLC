"use client";
import { useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number; // ms
}

export function FadeIn({ children, className = '', as: Tag = 'div', delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            node.style.animationDelay = delay ? `${delay}ms` : '0ms';
            node.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Comp: any = Tag;
  return <Comp ref={ref} className={`fade-in-up ${className}`}>{children}</Comp>;
}
