import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { SectionWrapper } from '@/components/section-wrapper';
import { ThemeSwitch } from '@/components/theme-switch';
import { TextLoop } from '@/components/ui/text-loop';
import Link from 'next/link';

export function Footer() {
  return (
    <SectionWrapper variant='footer'>
      <MaxWidthWrapper className='border-t'>
        <div className='flex items-center justify-between py-4'>
          <Link
            href={process.env.NEXT_PUBLIC_REPO_URL || '/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <TextLoop className='text-sm text-muted-foreground'>
              <span>Built with Motion-Primitives.</span>
              <span>Built with Origin-UI.</span>
              <span>Open Sourced.</span>
            </TextLoop>
          </Link>
          <div className='text-xs text-muted-foreground'>
            <ThemeSwitch />
          </div>
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
