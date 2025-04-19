import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { SectionWrapper } from '@/components/section-wrapper';
import { PERSON } from '@/lib/constants';

export function HeroSection() {
  const { name, title, location, description } = PERSON;

  return (
    <SectionWrapper variant='header' className='mt-8 md:mt-16'>
      <MaxWidthWrapper>
        <h1 className='text-base font-semibold tracking-tight'>{name}</h1>

        <h2 className='tracking-tight text-muted-foreground text-pretty'>
          {title}
        </h2>

        <p className='mt-8 leading-relaxed text-muted-foreground'>
          Based in {location}. {description}.
        </p>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
