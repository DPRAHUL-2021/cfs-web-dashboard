import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { QuerySection } from "@/components/QuerySection";
import { RAGPipeline } from "@/components/RAGPipeline";
import { RetrievedReviews } from "@/components/RetrievedReviews";
import { AIInsights } from "@/components/AIInsights";
import { MetricsSection } from "@/components/MetricsSection";
import { Footer } from "@/components/Footer";
import { useRAGAnalysis } from "@/hooks/useRAGAnalysis";

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);
  const { 
    isProcessing, 
    currentStep, 
    reviews, 
    insights, 
    hasResults,
    runAnalysis 
  } = useRAGAnalysis();

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (query: string, topK: number) => {
    runAnalysis(query, topK);
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onScrollToDemo={scrollToDemo} />
      
      <div ref={demoRef}>
        <QuerySection 
          onSubmit={handleSubmit} 
          isLoading={isProcessing} 
        />
      </div>

      <RAGPipeline 
        currentStep={currentStep} 
        isProcessing={isProcessing || hasResults} 
      />

      <RetrievedReviews 
        reviews={reviews} 
        isVisible={hasResults} 
      />

      <AIInsights 
        insights={insights} 
        isVisible={hasResults} 
      />

      <MetricsSection 
        isVisible={hasResults}
        avgRelevance={reviews.length > 0 
          ? reviews.reduce((sum, r) => sum + r.relevanceScore, 0) / reviews.length 
          : 0
        }
        processingTime={4.1}
      />

      <Footer />
    </main>
  );
};

export default Index;
