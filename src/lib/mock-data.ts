import {
  AssessmentQuestion,
  CareerRecommendation,
  ReportSummary,
} from "@/types";

export const mockQuestions: AssessmentQuestion[] = [
  {
    id: "math-foundation-1",
    prompt: "A school is planning a science fair with 6 booths per row. If they need space for 36 booths, how many rows should they plan for?",
    type: "mcq",
    subject: "Mathematics",
    level: "foundation",
    options: [
      { id: "a", label: "4 rows" },
      { id: "b", label: "5 rows" },
      { id: "c", label: "6 rows" },
      { id: "d", label: "7 rows" },
    ],
    tips: [
      "Translate story problems into equations.",
      "Look for equal grouping keywords such as per row or per group.",
    ],
  },
  {
    id: "scenario-teamwork-1",
    prompt: "Your robotics team has two weeks left to submit a prototype, but one module keeps failing during testing.",
    type: "scenario",
    subject: "STEM Projects",
    level: "intermediate",
    scenario:
      "As the student lead, outline your next three actions to keep the project on track.",
    tips: [
      "Balance technical problem solving with communication.",
      "Highlight how you would ask for help or test assumptions.",
    ],
  },
  {
    id: "language-communication-1",
    prompt: "Choose the most empathetic response when a teammate shares that they are overwhelmed with assignments.",
    type: "mcq",
    subject: "Communication",
    level: "foundation",
    options: [
      { id: "a", label: '“Everyone has deadlines—just work faster.”' },
      { id: "b", label: '“Let me know if you finish so I can plan.”' },
      {
        id: "c",
        label:
          '“I understand, let’s re-check the schedule and see where I can help.”',
      },
      { id: "d", label: "“Maybe we should cancel the project.”" },
    ],
  },
];

export const mockCareerRecommendations: CareerRecommendation[] = [
  {
    id: "career-ai-researcher",
    title: "AI Research Explorer",
    description:
      "Great fit for curious minds who enjoy experimenting with data, building models, and solving open-ended problems.",
    traits: ["Curious", "Analytical", "Collaborative"],
    skills: ["Python", "Statistics", "Ethical AI"],
    fitScore: 92,
    subjects: ["Math", "Computer Science", "Research Writing"],
    salaryRange: "$80k–$150k",
  },
  {
    id: "career-design-strategist",
    title: "Human-Centered Design Strategist",
    description:
      "Combine creativity with empathy to improve student and community experiences using digital tools.",
    traits: ["Empathetic", "Visual Thinker", "Storyteller"],
    skills: ["Figma", "UX Research", "Workshop Facilitation"],
    fitScore: 86,
    subjects: ["Art", "Psychology", "Technology"],
    salaryRange: "$70k–$140k",
  },
];

export const mockReport: ReportSummary = {
  studentName: "Ava Kapoor",
  personalityType: "Explorer / ENFP",
  recommendedStreams: ["Design + Computing", "AI for Social Impact"],
  strengths: ["Creative storytelling", "Systems thinking", "Team leadership"],
  growthAreas: ["Structured planning", "Advanced math confidence"],
  actionPlan: [
    {
      label: "Create a personal portfolio site",
      description: "Showcase your hackathon, art, and robotics projects.",
      dueInWeeks: 4,
    },
    {
      label: "Shadow an AI ethics researcher",
      description: "Schedule two half-day shadowing sessions next month.",
      dueInWeeks: 6,
    },
  ],
  charts: {
    aptitude: [
      { skill: "Analytical", score: 88 },
      { skill: "Creative", score: 94 },
      { skill: "Social", score: 80 },
      { skill: "Leadership", score: 86 },
      { skill: "Technical", score: 78 },
    ],
    interests: [
      { area: "AI & Data", score: 95 },
      { area: "Design", score: 90 },
      { area: "Health", score: 62 },
      { area: "Business", score: 74 },
    ],
    readiness: [
      { phase: "Discover", value: 85 },
      { phase: "Practice", value: 72 },
      { phase: "Showcase", value: 64 },
      { phase: "Launch", value: 58 },
    ],
  },
};



