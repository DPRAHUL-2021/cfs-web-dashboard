import { motion } from "framer-motion";
import { Database, Cpu, Search, FileText, Brain, ChevronRight } from "lucide-react";

interface RAGPipelineProps {
  currentStep: number;
  isProcessing: boolean;
}

const steps = [
  {
    icon: Database,
    title: "Dataset Ingestion",
    description: "Spotify User Reviews (CSV)",
    detail: "Loading and preprocessing customer feedback data",
  },
  {
    icon: Cpu,
    title: "Embedding Generation",
    description: "Sentence Embeddings using MPNet",
    detail: "Converting text to high-dimensional vectors",
  },
  {
    icon: Search,
    title: "Vector Search",
    description: "FAISS Semantic Retrieval (Top-K)",
    detail: "Finding most relevant reviews by meaning",
  },
  {
    icon: FileText,
    title: "Context Injection",
    description: "Relevant Evidence Passed to LLM",
    detail: "Preparing retrieved context for analysis",
  },
  {
    icon: Brain,
    title: "LLM Summarization",
    description: "Gemini-powered Intelligent Summary",
    detail: "Generating structured insights from feedback",
  },
];

export const RAGPipeline = ({ currentStep, isProcessing }: RAGPipelineProps) => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            RAG Pipeline Visualization
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Watch how your query flows through our intelligent retrieval and generation pipeline
          </p>
        </motion.div>

        {/* Desktop: Horizontal pipeline */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between gap-4">
            {steps.map((step, index) => {
              const isActive = isProcessing && currentStep === index;
              const isCompleted = isProcessing && currentStep > index;
              const isPending = !isProcessing || currentStep < index;

              return (
                <div key={step.title} className="flex items-start flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-1"
                  >
                    <div
                      className={`
                        relative p-6 rounded-2xl border transition-all duration-500
                        ${isActive ? 'glass-card pipeline-glow border-primary' : ''}
                        ${isCompleted ? 'bg-primary/10 border-primary/30' : ''}
                        ${isPending ? 'bg-secondary/30 border-border/30 opacity-50' : ''}
                      `}
                    >
                      {/* Pulse animation for active step */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse-slow" />
                      )}

                      <div className="relative">
                        <div
                          className={`
                            w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300
                            ${isActive ? 'bg-primary text-primary-foreground' : ''}
                            ${isCompleted ? 'bg-accent text-accent-foreground' : ''}
                            ${isPending ? 'bg-secondary text-muted-foreground' : ''}
                          `}
                        >
                          <step.icon className="w-6 h-6" />
                        </div>

                        <h3 className="font-display font-semibold text-sm mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {step.description}
                        </p>
                        
                        {/* Tooltip/detail on hover */}
                        <p className="text-xs text-muted-foreground/70 hidden group-hover:block">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex items-center justify-center px-2 pt-10">
                      <ChevronRight 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isCompleted ? 'text-accent' : 'text-muted-foreground/30'
                        }`} 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical pipeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const isActive = isProcessing && currentStep === index;
            const isCompleted = isProcessing && currentStep > index;
            const isPending = !isProcessing || currentStep < index;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative p-5 rounded-xl border transition-all duration-500
                  ${isActive ? 'glass-card pipeline-glow border-primary' : ''}
                  ${isCompleted ? 'bg-primary/10 border-primary/30' : ''}
                  ${isPending ? 'bg-secondary/30 border-border/30 opacity-50' : ''}
                `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300
                      ${isActive ? 'bg-primary text-primary-foreground' : ''}
                      ${isCompleted ? 'bg-accent text-accent-foreground' : ''}
                      ${isPending ? 'bg-secondary text-muted-foreground' : ''}
                    `}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
