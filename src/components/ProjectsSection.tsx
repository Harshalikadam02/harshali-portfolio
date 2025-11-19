import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NYC AI Environmental Risk Dashboard",
    description: "AI-powered dashboard to monitor NYC environmental risks in real-time by using real New york city open data. Features a AI analyst for descriptive, predictive, and custom queries.",
    tech: ["Flask", "MongoDB", "Tailwind CSS", "Chart.js", "Leaflet.js", "Gemini API"],
    gradient: "from-teal-500 to-blue-500",
    videoUrl: "https://youtu.be/4YKJEGgkaCM",
  },
  {
    title: "My Analysis Agent (AI App)",
    description: "AI-powered data analytics web app using local LLMs (Ollama) to generate insights like Prediction Analysis Descriptive analysis cleaning visualization etc. from CSV/XLSX/JSON.",
    tech: ["Streamlit", "Ollama", "Plotly", "Seaborn", "Docker"],
    gradient: "from-purple-500 to-pink-500",
    videoUrl: "https://youtu.be/F7K_Qw8KRoA",
  },
  {
    title: "my-healthcare-agent (Multi AI Agent)",
    description: "Enterprise AI platform using FastAPI for multi-agent workflows acts as a doctor that can answer questions about(Diagnostic, Pharmacy, Radiology) with Nginx & LLM caching.",
    tech: ["FastAPI", "Multi-Agent", "Nginx", "LLRU-Cache", "Azure AI"],
    gradient: "from-orange-500 to-red-500",
    videoUrl: "https://youtu.be/e1LWzieQcpo",
  },
  {
    title: "Credit Fraud Detection Webapp (Machine Learning Pipeline)",
    description: "Built a CI/CD pipeline in Python using scikit-learn (GradientBoosting, SVM), pandas/NumPy, and SMOTE for class imbalance to Predict Fraud by Anamoly Detection.",
    tech: ["Python", "scikit-learn", "Pandas", "SMOTE", "CI/CD"],
    gradient: "from-blue-500 to-cyan-500",
    videoUrl: "https://youtu.be/nqMg38fYtMs",
  },
  {
    title: "Run-command-agent (Autonomous AI Terminal Agent)",
    description: "A terminal-based autonomous AI agent (my version of Mini Cursor) that can plan and execute terminal based commands and can do any actions performed by a human in natural language.",
    tech: ["Python", "OpenAI SDK", "GPT-4o", "REPL", "Git"],
    gradient: "from-green-500 to-emerald-500",
    videoUrl: "https://youtu.be/PKcjoAPQ0Zs",
  },
  {
    title: "AI Game Programming (AI Unity Game)",
    description: "Developed an AI state machine in Unity (C#) for high-performance enemy AI using NavMesh, procedural spawning, and event triggers.",
    tech: ["Unity", "C#", "AI Navigator", "NavMesh", "State Machine"],
    gradient: "from-indigo-500 to-purple-500",
    videoUrl: "https://youtu.be/qaWfYHWbdhA",
  },
  {
    title: "Closet Tales (Next.js App)",
    description: "AI-driven wardrobe manager that suggest you Outfits based on the local weather conditions and place or event that you will be attending uses Next.js (App Router), TypeScript, and Tailwind. Features GPT-4o-mini for outfit suggestions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GPT-4o-mini"],
    gradient: "from-pink-500 to-rose-500",
    videoUrl: "https://youtu.be/CMoAiDfRf3Q",
  },
  {
    title: "NYC Health Risk Prediction Dashboard",
    description: "Real-time health risk predicting dashboard for NYC. Uses a weighted risk-scoring algorithm to identify and rank high-risk ZIP codes for resource deployment.",
    tech: ["HTML", "JavaScript (ES6+)", "Tailwind CSS", "Chart.js", "Leaflet.js", "SPA"],
    gradient: "from-amber-500 to-orange-500",
    videoUrl: "https://youtu.be/DDBK0-mt3bQ",
  },
];

const getEmbedUrl = (url: string): string => {
  if (!url || url === "YOUR_YOUTUBE_URL_1" || url === "YOUR_YOUTUBE_URL_2" || url === "YOUR_YOUTUBE_URL_3" || url === "YOUR_YOUTUBE_URL_4" || url === "YOUR_YOUTUBE_URL_5" || url === "YOUR_YOUTUBE_URL_6") {
    return "";
  }
  // Handle YouTube URLs
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  }
  // Handle Vimeo URLs
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : "";
  }
  return url;
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleCardClick = (videoUrl: string) => {
    if (videoUrl && !videoUrl.startsWith("YOUR_YOUTUBE_URL")) {
      setSelectedProject(videoUrl);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const embedUrl = selectedProject ? getEmbedUrl(selectedProject) : "";

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A selection of my projects that I do as a hobby which reflects my technical expertise. For proper business deployment, follow GitHub repos README.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-card cursor-pointer"
              onClick={() => handleCardClick(project.videoUrl)}
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3D tilt effect overlay */}
              <div className="absolute inset-0 pointer-events-none group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] transition-shadow duration-500" />
            </Card>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background">
          {embedUrl && (
            <div className="relative w-full aspect-video">
              <iframe
                src={embedUrl}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};