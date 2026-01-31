import { motion } from "framer-motion";
import { Zap, Brain, Search, BarChart3, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricsSectionProps {
  isVisible: boolean;
  avgRelevance?: number;
  processingTime?: number;
}

export const MetricsSection = ({ 
  isVisible, 
  avgRelevance = 0.87,
  processingTime = 1.2
}: MetricsSectionProps) => {
  if (!isVisible) return null;

  const metrics = [
    {
      icon: Zap,
      label: "Processing Time",
      value: `${processingTime.toFixed(1)}s`,
      description: "Total time from query to insights",
    },
    {
      icon: BarChart3,
      label: "Avg. Relevance",
      value: `${(avgRelevance * 100).toFixed(0)}%`,
      description: "Average semantic similarity score",
    },
    {
      icon: Brain,
      label: "Model Used",
      value: "Gemini Pro",
      description: "Large Language Model for summarization",
    },
    {
      icon: Search,
      label: "Embedding",
      value: "MPNet",
      description: "Sentence-transformer for semantic search",
    },
  ];

  return (
    <section className="py-16 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Why RAG Works Better
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlike keyword search, Retrieval-Augmented Generation understands the 
            <span className="text-primary font-medium"> meaning </span> 
            behind your questions and retrieves contextually relevant feedback.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {metrics.map((metric, index) => (
            <Tooltip key={metric.label}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-5 cursor-help hover:border-primary/30 transition-colors"
                >
                  <metric.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-2xl font-bold font-display mb-1">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    {metric.label}
                    <Info className="w-3 h-3" />
                  </p>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{metric.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>

        {/* Comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Keyword search */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <Search className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="font-semibold text-destructive">Traditional Keyword Search</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Matches exact words only</li>
                <li>• Misses synonyms and related concepts</li>
                <li>• Returns irrelevant results</li>
                <li>• No understanding of context</li>
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-border" />
            <div className="md:hidden h-px bg-border" />

            {/* RAG */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-accent">RAG Semantic Search</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Understands meaning and intent</li>
                <li>• Finds semantically related content</li>
                <li>• Highly relevant retrieval</li>
                <li>• Context-aware summarization</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
