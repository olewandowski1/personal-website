import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { SectionWrapper } from '@/components/section-wrapper';
import { Badge } from '@/components/ui/badge';
import { PERSON } from '@/lib/constants';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const { email, github, linkedin, instagram, twitter } = PERSON;

  const socialLinks = [
    { name: 'GitHub', url: github },
    { name: 'LinkedIn', url: linkedin },
    { name: 'Instagram', url: instagram },
    { name: 'Twitter', url: twitter },
  ].filter((link) => link.url);

  return (
    <SectionWrapper>
      <MaxWidthWrapper>
        <h3 className='mb-5 text-lg font-medium tracking-tight'>Connect</h3>

        <p className='leading-relaxed text-muted-foreground'>
          Feel free to reach out to me via email at{' '}
          <a
            href={`mailto:${email}`}
            className='underline transition-colors hover:text-foreground'
          >
            {email}
          </a>
          .
        </p>

        <div className='flex flex-wrap gap-2 mt-4'>
          {socialLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5'
            >
              <Badge
                variant='outline'
                className='text-xs font-normal hover:bg-accent hover:text-accent-foreground'
              >
                {link.name}
                <MoveUpRight size={12} />
              </Badge>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
