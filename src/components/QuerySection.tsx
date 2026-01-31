import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface QuerySectionProps {
  onSubmit: (query: string, topK: number) => void;
  isLoading: boolean;
}

export const QuerySection = ({ onSubmit, isLoading }: QuerySectionProps) => {
  const [query, setQuery] = useState("");
  const [topK, setTopK] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSubmit(query, topK);
    }
  };

  const adjustTopK = (delta: number) => {
    setTopK((prev) => Math.min(10, Math.max(3, prev + delta)));
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ask About Customer Feedback
          </h2>
          <p className="text-muted-foreground">
            Enter a natural language question to analyze Spotify app reviews
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Main input */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-50" />
            <div className="relative glass-card rounded-2xl p-2">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-muted-foreground ml-4" />
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Why are users unhappy with offline playback?"
                  className="flex-1 border-0 bg-transparent text-lg placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between gap-4">
            {/* Top-K control */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Top-K Reviews</span>
              <div className="flex items-center gap-1 bg-secondary/50 rounded-lg border border-border/50 p-1">
                <button
                  type="button"
                  onClick={() => adjustTopK(-1)}
                  disabled={topK <= 3 || isLoading}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{topK}</span>
                <button
                  type="button"
                  onClick={() => adjustTopK(1)}
                  disabled={topK >= 10 || isLoading}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 disabled:opacity-50 disabled:glow-effect-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Analyze Feedback
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
