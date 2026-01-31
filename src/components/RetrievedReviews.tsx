import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, Calendar, TrendingUp } from "lucide-react";

export interface Review {
  id: string;
  text: string;
  rating: number;
  thumbsUp?: number;
  date?: string;
  relevanceScore: number;
  highlightedPhrases?: string[];
}

interface RetrievedReviewsProps {
  reviews: Review[];
  isVisible: boolean;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-3.5 h-3.5 ${
          star <= rating
            ? 'text-warning fill-warning'
            : 'text-muted-foreground/30'
        }`}
      />
    ))}
  </div>
);

const highlightText = (text: string, phrases: string[] = []) => {
  if (!phrases.length) return text;
  
  let result = text;
  phrases.forEach((phrase) => {
    const regex = new RegExp(`(${phrase})`, 'gi');
    result = result.replace(regex, '|||$1|||');
  });
  
  return result.split('|||').map((part, i) => {
    const isHighlight = phrases.some(
      (phrase) => phrase.toLowerCase() === part.toLowerCase()
    );
    return isHighlight ? (
      <mark key={i} className="bg-primary/30 text-foreground rounded px-1">
        {part}
      </mark>
    ) : (
      part
    );
  });
};

export const RetrievedReviews = ({ reviews, isVisible }: RetrievedReviewsProps) => {
  if (!isVisible) return null;

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Retrieved Reviews
            </h2>
            <div className="metric-badge">
              <TrendingUp className="w-4 h-4" />
              <span>{reviews.length} Most Relevant</span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Reviews ranked by semantic similarity to your query
          </p>
        </motion.div>

        <AnimatePresence>
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="review-card group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={review.rating} />
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    {review.thumbsUp !== undefined && (
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {review.thumbsUp}
                      </span>
                    )}
                    {review.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </span>
                    )}
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm leading-relaxed text-foreground/90 mb-4">
                  {highlightText(review.text, review.highlightedPhrases)}
                </p>

                {/* Relevance score */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <span className="text-xs text-muted-foreground">
                    Relevance Score
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${review.relevanceScore * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <span className="text-xs font-medium text-primary">
                      {(review.relevanceScore * 100).toFixed(0)}%
                    </span>
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
