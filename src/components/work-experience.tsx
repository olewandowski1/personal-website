import { CompanyHoverCard } from '@/components/company-hover-card';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { SectionWrapper } from '@/components/section-wrapper';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline';
import { WORK_EXPERIENCE } from '@/lib/constants';

export function WorkExperience() {
  return (
    <SectionWrapper>
      <MaxWidthWrapper>
        <h3 className='mb-5 text-lg font-medium tracking-tight'>
          Work Experience
        </h3>

        <Timeline defaultValue={WORK_EXPERIENCE.length}>
          {WORK_EXPERIENCE.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className='w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2'
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className='line-clamp-1'>
                  {item.date}
                </TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineContent>
                  <CompanyHoverCard
                    companyName={item.company}
                    companyDescription={item.description}
                  />
                </TimelineContent>
                <TimelineIndicator />
              </TimelineHeader>
            </TimelineItem>
          ))}
        </Timeline>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
