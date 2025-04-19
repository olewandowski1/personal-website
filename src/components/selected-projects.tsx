import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { ProjectCard } from '@/components/project-card';
import { SectionWrapper } from '@/components/section-wrapper';
import { PROJECTS } from '@/lib/constants';

export function SelectedProjects() {
  return (
    <SectionWrapper>
      <MaxWidthWrapper>
        <h3 className='mb-5 text-lg font-medium tracking-tight'>
          Selected Projects
        </h3>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          {PROJECTS.map(
            ({
              title,
              subtitle,
              description,
              techStack,
              imageUrl,
              websiteUrl,
              githubUrl,
            }) => (
              <ProjectCard
                key={title}
                title={title}
                subtitle={subtitle}
                description={description}
                techStack={techStack}
                imageUrl={imageUrl}
                websiteUrl={websiteUrl}
                githubUrl={githubUrl}
              />
            )
          )}
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
