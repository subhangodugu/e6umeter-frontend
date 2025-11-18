export type QuestionOption = {
  id: string;
  label: string;
  description?: string;
  value?: string;
};

export type AssessmentQuestion = {
  id: string;
  prompt: string;
  type: "mcq" | "scenario";
  subject: string;
  level: "foundation" | "intermediate" | "advanced";
  options?: QuestionOption[];
  scenario?: string;
  tips?: string[];
};

export type CareerRecommendation = {
  id: string;
  title: string;
  description: string;
  traits: string[];
  skills: string[];
  fitScore: number;
  subjects: string[];
  salaryRange: string;
};

export type DashboardInsight = {
  label: string;
  value: string;
  change?: string;
};

export type ReportSummary = {
  studentName: string;
  avatar?: string;
  personalityType: string;
  recommendedStreams: string[];
  strengths: string[];
  growthAreas: string[];
  actionPlan: {
    label: string;
    description: string;
    dueInWeeks: number;
  }[];
  charts: {
    aptitude: Array<{ skill: string; score: number }>;
    interests: Array<{ area: string; score: number }>;
    readiness: Array<{ phase: string; value: number }>;
  };
};



