import { cn } from '@/lib/utils';

type MaxWidthWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn('h-full mx-auto w-full max-w-screen-sm px-2', className)}
    >
      {children}
    </div>
  );
}
