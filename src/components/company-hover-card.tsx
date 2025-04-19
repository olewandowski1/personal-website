import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { CURRENT_COMPANY } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CompanyHoverCardProps = {
  companyName: string;
  companyDescription: string;
};

export function CompanyHoverCard({
  companyName,
  companyDescription,
}: CompanyHoverCardProps) {
  const { description, logo, name, subtitle, website } = CURRENT_COMPANY;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <p>
          {companyDescription} at{' '}
          <span className='cursor-help hover:underline'>{companyName}</span>
        </p>
      </HoverCardTrigger>

      <HoverCardContent>
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <Image
              className='rounded-full shrink-0'
              src={logo}
              width={40}
              height={40}
              alt={`${companyName} Logo`}
              priority
            />
            <div className='space-y-0.5 '>
              <Link
                href={website}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1 text-sm font-medium hover:underline'
              >
                {name}
                <ExternalLink
                  size={12}
                  className='opacity-60'
                  aria-hidden='true'
                />
              </Link>
              <p className='text-xs text-muted-foreground'>{subtitle}</p>
            </div>
          </div>
          <p className='text-sm text-left text-muted-foreground'>
            {description}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
