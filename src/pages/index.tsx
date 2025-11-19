import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4 space-y-2">
            <a
              href="mailto:harshalikadam58@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors block"
            >
              harshalikadam58@gmail.com
            </a>
            <p className="text-muted-foreground">
              (551) 201-4322
            </p>
          </div>
          <p className="text-muted-foreground">
            © 2025 Harshali Kadam. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;