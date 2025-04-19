import { type FeaturedProject } from '@/components/project-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type FeaturedProjectHoverCardProps = {
  featured: FeaturedProject;
  imageUrl?: string;
};

export function FeaturedProjectHoverCard({
  featured,
  imageUrl,
}: FeaturedProjectHoverCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='absolute cursor-pointer top-3 right-3'>
          <Star
            className='transition-colors duration-200 ease-in-out text-amber-400 fill-amber-400 hover:text-amber-500 hover:fill-amber-500'
            size={24}
          />
        </div>
      </DialogTrigger>
      <DialogContent className='gap-0 p-2'>
        <div className='relative w-full h-32 overflow-hidden border bg-muted rounded-xl dark:bg-primary-foreground'>
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={`${featured.title} Project Logo`}
            className='object-contain p-6 md:p-8'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </div>

        <div className='px-2 py-3 space-y-4'>
          <DialogHeader>
            <DialogTitle className='font-semibold tracking-tight text-left text-md'>
              {featured.title}
            </DialogTitle>
            <DialogDescription className='text-sm text-left text-muted-foreground text-pretty'>
              {featured.subtitle}
            </DialogDescription>

            <div className='mt-3 mb-3 text-left'>
              <h4 className='text-sm font-medium'>My Role</h4>
              <p className='text-sm text-muted-foreground text-pretty'>
                {featured.description}
              </p>
            </div>

            <div className='flex flex-wrap mb-3 gap-1.5'>
              {featured.techStack.map((tech) => (
                <Badge
                  variant='outline'
                  key={tech}
                  className='text-xs font-normal'
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className='flex gap-2'>
              {featured.githubUrl && (
                <Link
                  href={featured.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-sm transition-colors text-muted-foreground hover:text-foreground'
                >
                  Repo
                  <ExternalLink size={12} className='ml-1' />
                </Link>
              )}
              {featured.websiteUrl && (
                <Link
                  href={featured.websiteUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-sm transition-colors text-muted-foreground hover:text-foreground'
                >
                  Live Website
                  <ExternalLink size={12} className='ml-1' />
                </Link>
              )}
            </div>
          </DialogHeader>

          <div className='flex justify-end'>
            <DialogFooter>
              <DialogClose asChild>
                <Button type='button' variant='outline'>
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
