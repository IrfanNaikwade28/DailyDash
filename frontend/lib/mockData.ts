import type { NormalizedContent } from "@/lib/types";

export const mockSocialPosts: NormalizedContent[] = [
  {
    id: "social-1",
    type: "social",
    title: "Just deployed my new React app!",
    description:
      "After weeks of hard work, I finally deployed my first full-stack application. The feeling is incredible! 🚀",
    meta: {
      author: "Sarah Dev",
      date: new Date().toISOString(),
    },
  },
  {
    id: "social-2",
    type: "social",
    title: "Hot take: TypeScript is a must-have",
    description:
      "I can't imagine going back to vanilla JavaScript after using TypeScript. The type safety and IntelliSense alone are worth it.",
    meta: {
      author: "Mike Code",
      date: new Date(Date.now() - 3600000).toISOString(),
    },
  },
  {
    id: "social-3",
    type: "social",
    title: "Weekend project idea",
    description:
      "Thinking of building a dashboard that aggregates all my favorite content sources. Anyone interested in collaborating?",
    meta: {
      author: "Alex Builder",
      date: new Date(Date.now() - 7200000).toISOString(),
    },
  },
  {
    id: "social-4",
    type: "social",
    title: "UI/UX Design Tips",
    description:
      "Glass morphism is trending again! Here's how to implement it effectively without compromising accessibility.",
    meta: {
      author: "Design Guru",
      date: new Date(Date.now() - 10800000).toISOString(),
    },
  },
];
