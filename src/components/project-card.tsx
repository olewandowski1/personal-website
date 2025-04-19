import { FeaturedProjectHoverCard } from '@/components/featured-project-hover-card';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type FeaturedProject = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  websiteUrl?: string;
  githubUrl?: string;
};

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  websiteUrl?: string;
  featured?: FeaturedProject;
};

export function ProjectCard({
  title,
  subtitle,
  description,
  techStack,
  imageUrl,
  githubUrl,
  websiteUrl,
  featured,
}: ProjectCardProps) {
  return (
    <Card className='p-1 overflow-hidden border-0 shadow-none md:p rounded-xl'>
      <CardHeader className='flex flex-col gap-0 px-1 py-0'>
        <div className='relative w-full h-32 overflow-hidden border bg-muted rounded-xl dark:bg-primary-foreground'>
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={`${title} Project Logo`}
            className='object-contain p-6 md:p-8'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />

          {featured && (
            <FeaturedProjectHoverCard featured={featured} imageUrl={imageUrl} />
          )}
        </div>
        <CardTitle className='mt-2 font-semibold tracking-tight text-md'>
          {title}
        </CardTitle>
        <CardDescription className='text-sm text-muted-foreground text-pretty'>
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className='px-1 py-0'>
        <div className='mb-3'>
          <h4 className='text-sm font-medium'>My Role</h4>
          <p className='text-sm text-muted-foreground text-pretty'>
            {description}
          </p>
        </div>
        <div className='flex flex-wrap mb-3 gap-1.5'>
          {techStack.map((tech) => (
            <Badge variant='outline' key={tech} className='text-xs font-normal'>
              {tech}
            </Badge>
          ))}
        </div>
        <div className='flex gap-2 mt-2'>
          {githubUrl && (
            <Link
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-sm transition-colors text-muted-foreground hover:text-foreground'
            >
              Repo
              <ExternalLink size={12} className='ml-1' />
            </Link>
          )}
          {websiteUrl && (
            <Link
              href={websiteUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-sm transition-colors text-muted-foreground hover:text-foreground'
            >
              Live Website
              <ExternalLink size={12} className='ml-1' />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
