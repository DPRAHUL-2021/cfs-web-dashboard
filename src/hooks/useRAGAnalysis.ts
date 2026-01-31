import { useState, useCallback } from "react";
import { getMockResponseForQuery } from "@/data/mockData";
import type { Review } from "@/components/RetrievedReviews";
import type { Insights } from "@/components/AIInsights";

interface RAGState {
  isProcessing: boolean;
  currentStep: number;
  reviews: Review[];
  insights: Insights | null;
  error: string | null;
}

const STEP_DELAYS = [800, 600, 1000, 500, 1200]; // Realistic processing times per step

export const useRAGAnalysis = () => {
  const [state, setState] = useState<RAGState>({
    isProcessing: false,
    currentStep: -1,
    reviews: [],
    insights: null,
    error: null,
  });

  const runAnalysis = useCallback(async (query: string, topK: number) => {
    setState((prev) => ({
      ...prev,
      isProcessing: true,
      currentStep: 0,
      reviews: [],
      insights: null,
      error: null,
    }));

    try {
      // Simulate each pipeline step
      for (let step = 0; step < 5; step++) {
        setState((prev) => ({ ...prev, currentStep: step }));
        await new Promise((resolve) => setTimeout(resolve, STEP_DELAYS[step]));
      }

      // Get mock results (in production, this would be an API call)
      const { reviews, insights } = getMockResponseForQuery(query, topK);

      setState({
        isProcessing: false,
        currentStep: 5,
        reviews,
        insights,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isProcessing: false,
        error: error instanceof Error ? error.message : "Analysis failed",
      }));
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      isProcessing: false,
      currentStep: -1,
      reviews: [],
      insights: null,
      error: null,
    });
  }, []);

  return {
    ...state,
    runAnalysis,
    reset,
    hasResults: state.reviews.length > 0 && state.insights !== null,
  };
};
