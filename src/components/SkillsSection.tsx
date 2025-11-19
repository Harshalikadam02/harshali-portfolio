import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "Machine Learning", "AWS", "OpenAI API", "GPT-4o", "FastAPI", "Nginx", "Django", "Java", "JavaScript", "HTML", "CSS", "React", "Tailwind", "TypeScript", "Vercel", "Unity", "C#", "AI", "RAG", "Azure", "Ollama", "Huggingface", "Docker", "Playwright", "Power BI", "Tableau", "Excel", "MySQL", "Database Management", "Data Science", "JIRA", "Smartsheet", "Agile", "Scrum", "Lean", "Six Sigma", "MS-office"
];

export const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the skill appearance
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, index]);
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A curated collection of technologies I wield to build exceptional digital products
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`transition-all duration-500 ${
                visibleSkills.includes(index)
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <Badge
                variant="secondary"
                className="text-lg py-3 px-6 bg-card border border-border hover:border-primary hover:shadow-glow transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-24 bg-gradient-accent rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};
