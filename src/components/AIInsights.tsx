import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightbulb, 
  TrendingUp, 
  AlertTriangle, 
  ThumbsUp, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export interface Insights {
  executiveSummary: string;
  keyInsights: string[];
  painPoints: string[];
  positives: string[];
  recommendation: string;
}

interface AIInsightsProps {
  insights: Insights | null;
  isVisible: boolean;
}

export const AIInsights = ({ insights, isVisible }: AIInsightsProps) => {
  if (!isVisible || !insights) return null;

  const sections = [
    {
      icon: Sparkles,
      title: "Executive Summary",
      content: insights.executiveSummary,
      type: "text" as const,
      accentColor: "primary",
    },
    {
      icon: Lightbulb,
      title: "Key Insights",
      content: insights.keyInsights,
      type: "list" as const,
      accentColor: "accent",
    },
    {
      icon: AlertTriangle,
      title: "Pain Points",
      content: insights.painPoints,
      type: "list" as const,
      accentColor: "destructive",
    },
    {
      icon: ThumbsUp,
      title: "Positive Feedback",
      content: insights.positives,
      type: "list" as const,
      accentColor: "success",
    },
    {
      icon: ArrowRight,
      title: "Final Recommendation",
      content: insights.recommendation,
      type: "text" as const,
      accentColor: "primary",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/20">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              AI-Generated Insights
            </h2>
          </div>
          <p className="text-muted-foreground">
            Structured analysis generated from the retrieved customer feedback
          </p>
        </motion.div>

        <AnimatePresence>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="insight-section group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`
                      p-2.5 rounded-xl shrink-0 transition-colors
                      ${section.accentColor === 'primary' ? 'bg-primary/20 text-primary' : ''}
                      ${section.accentColor === 'accent' ? 'bg-accent/20 text-accent' : ''}
                      ${section.accentColor === 'destructive' ? 'bg-destructive/20 text-destructive' : ''}
                      ${section.accentColor === 'success' ? 'bg-success/20 text-success' : ''}
                    `}
                  >
                    <section.icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-lg mb-3">
                      {section.title}
                    </h3>

                    {section.type === "text" ? (
                      <p className="text-foreground/90 leading-relaxed">
                        {section.content as string}
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {(section.content as string[]).map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 
                              className={`
                                w-4 h-4 mt-0.5 shrink-0
                                ${section.accentColor === 'accent' ? 'text-accent' : ''}
                                ${section.accentColor === 'destructive' ? 'text-destructive' : ''}
                                ${section.accentColor === 'success' ? 'text-success' : ''}
                              `}
                            />
                            <span className="text-foreground/90">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};
