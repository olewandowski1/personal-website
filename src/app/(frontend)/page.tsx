import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { MainWrapper } from '@/components/main-wrapper';
import { SelectedProjects } from '@/components/selected-projects';
import { WorkExperience } from '@/components/work-experience';

export default function HomePage() {
  return (
    <MainWrapper>
      <HeroSection />
      <WorkExperience />
      <SelectedProjects />
      <Contact />
      <Footer />
    </MainWrapper>
  );
}
