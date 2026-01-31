import type { Review } from "@/components/RetrievedReviews";
import type { Insights } from "@/components/AIInsights";

// Mock Spotify reviews dataset
export const mockReviews: Review[] = [
  {
    id: "1",
    text: "The offline mode is completely broken. I download my playlists but they never work when I actually need them. Super frustrating on flights!",
    rating: 2,
    thumbsUp: 234,
    date: "2024-01-15",
    relevanceScore: 0.94,
    highlightedPhrases: ["offline mode", "broken", "download"],
  },
  {
    id: "2",
    text: "Downloaded songs keep disappearing randomly. I've had to re-download my entire library three times this month. Fix this!",
    rating: 1,
    thumbsUp: 189,
    date: "2024-01-12",
    relevanceScore: 0.91,
    highlightedPhrases: ["Downloaded songs", "disappearing"],
  },
  {
    id: "3",
    text: "Offline playback used to work great but recent updates broke it. Now songs won't play without internet even though they show as downloaded.",
    rating: 2,
    thumbsUp: 156,
    date: "2024-01-10",
    relevanceScore: 0.89,
    highlightedPhrases: ["Offline playback", "broke it", "downloaded"],
  },
  {
    id: "4",
    text: "Premium user here. Paying for offline mode that doesn't work. Downloaded content keeps buffering even with the download icon showing complete.",
    rating: 2,
    thumbsUp: 201,
    date: "2024-01-08",
    relevanceScore: 0.87,
    highlightedPhrases: ["offline mode", "doesn't work", "buffering"],
  },
  {
    id: "5",
    text: "The app crashes whenever I try to access my offline library. This has been happening for weeks. Please fix the download feature!",
    rating: 1,
    thumbsUp: 145,
    date: "2024-01-05",
    relevanceScore: 0.85,
    highlightedPhrases: ["offline library", "crashes", "download feature"],
  },
];

export const mockInsights: Insights = {
  executiveSummary:
    "Customer feedback reveals a critical issue with Spotify's offline playback functionality. Users consistently report that downloaded content fails to play without internet connectivity, despite showing as successfully downloaded. This represents a significant gap between promised premium features and actual user experience.",
  keyInsights: [
    "Offline mode functionality has degraded significantly after recent app updates",
    "Downloaded songs frequently disappear or become unplayable without warning",
    "Premium subscribers feel they're not getting value for the offline feature they pay for",
    "The issue appears to be widespread and persistent, not isolated incidents",
    "Technical indicators (download icons, progress bars) mislead users about actual download status",
  ],
  painPoints: [
    "Downloads not persisting between sessions or after app updates",
    "False positive download indicators showing content as available when it's not",
    "App crashes when accessing offline library",
    "Requirement for internet connection even for 'downloaded' content",
    "Need to repeatedly re-download entire music libraries",
  ],
  positives: [
    "Users value the offline feature concept and are willing to pay for it",
    "The feature previously worked well, indicating technical capability exists",
    "Strong user engagement with detailed feedback shows customer investment in the product",
  ],
  recommendation:
    "Immediate engineering priority should be given to the offline playback system. Conduct a thorough audit of the download verification process, implement persistent storage solutions, and add user-facing download health checks. Consider a communication strategy to acknowledge the issue and provide timeline for resolution to retain premium subscribers.",
};

// Query-specific mock responses
export const getMockResponseForQuery = (query: string, topK: number): { reviews: Review[], insights: Insights } => {
  const queryLower = query.toLowerCase();
  
  // Customize reviews based on query keywords
  let filteredReviews = [...mockReviews].slice(0, topK);
  
  // Adjust relevance scores slightly for variety
  filteredReviews = filteredReviews.map((review, index) => ({
    ...review,
    relevanceScore: Math.max(0.75, review.relevanceScore - (index * 0.03)),
  }));
  
  // Customize insights based on query
  let insights = { ...mockInsights };
  
  if (queryLower.includes("positive") || queryLower.includes("like") || queryLower.includes("good")) {
    insights.executiveSummary = "While users have significant concerns about offline playback, there is strong appreciation for Spotify's music discovery features, personalized playlists, and overall streaming quality. Premium subscribers particularly value the ad-free experience and high audio quality options.";
  }
  
  if (queryLower.includes("recommend") || queryLower.includes("improve")) {
    insights.recommendation = "Based on user feedback analysis, prioritize: 1) Fix offline playback reliability, 2) Improve download status transparency, 3) Enhance app stability, 4) Add proactive notifications for download issues. These improvements would significantly boost user satisfaction and retention.";
  }
  
  return { reviews: filteredReviews, insights };
};
