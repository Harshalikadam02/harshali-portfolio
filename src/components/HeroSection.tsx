import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Mail, Copy, Phone, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titles = ["Software Engineer", "AI Developer", "Machine Learning Engineer", "Full Stack Engineer"];
  const [index, setIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToNext = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-display text-7xl md:text-9xl font-bold text-foreground mb-6 tracking-tight">
            Harshali Kadam
          </h1>
          
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-2xl md:text-3xl text-white mb-4"
              >
                {titles[index]}
              </motion.h2>
            </AnimatePresence>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Computer Science Master's student in New York passionate about building AI-driven experiences.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Hire Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-background">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>My Resume</DialogTitle>
                    <DialogDescription>
                      View and download my resume
                    </DialogDescription>
                  </DialogHeader>
                  <div className="px-6 pb-6 space-y-4">
                    {/* PDF Viewer */}
                    <div className="w-full border rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src="/Harshali_Kadam_SWE_Resume.pdf"
                        className="w-full h-[600px] md:h-[700px]"
                        title="Resume Preview"
                      />
                    </div>
                    {/* Download Button */}
                    <div className="flex justify-center">
                      <a href="/Harshali_Kadam_SWE_Resume.pdf" download="Harshali_Kadam_SWE_Resume.pdf">
                        <Button className="w-full sm:w-auto">
                          <Download className="mr-2 h-5 w-5" />
                          Download Resume
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={scrollToNext}
              >
                Explore My Work
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Contact Information</DialogTitle>
                    <DialogDescription>
                      Get in touch with me through the following channels
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">harshalikadam58@gmail.com</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("harshalikadam58@gmail.com", "Email")}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">(551) 201-4322</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard("(551) 201-4322", "Phone number")}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};