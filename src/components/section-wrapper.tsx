'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

export function SectionWrapper({
  children,
  variant = 'section',
  className,
}: {
  children: React.ReactNode;
  variant?: 'section' | 'footer' | 'header';
  className?: string;
}) {
  const Component = motion[variant as keyof typeof motion] as React.ElementType;

  return (
    <Component
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className={cn('', className)}
    >
      {children}
    </Component>
  );
}
