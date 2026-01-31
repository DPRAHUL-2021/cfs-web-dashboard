import { motion } from "framer-motion";
import { Database, Brain, Cpu, FileText, Sparkles } from "lucide-react";

export const Footer = () => {
  const technologies = [
    { icon: Database, label: "FAISS" },
    { icon: Cpu, label: "MPNet" },
    { icon: Brain, label: "Gemini" },
    { icon: FileText, label: "TypeScript" },
    { icon: Sparkles, label: "React" },
  ];

  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Title */}
          <p className="text-sm text-muted-foreground mb-2">
            Capstone Project
          </p>
          <h3 className="font-display text-xl font-bold mb-6">
            Customer Feedback Summarization System
          </h3>

          {/* Tech icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-3 rounded-xl bg-secondary/50 border border-border/30 group-hover:border-primary/30 transition-colors">
                  <tech.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground italic">
            "Turning unstructured feedback into strategic insight."
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/50 mt-8">
            © {new Date().getFullYear()} Customer Feedback Intelligence System
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
