'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function MainWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.main
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial='hidden'
      animate='visible'
      className={cn('space-y-16', className)}
    >
      {children}
    </motion.main>
  );
}
