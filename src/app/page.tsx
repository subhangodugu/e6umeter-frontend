import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featureCards = [
  {
    title: "AI-Powered Assessment",
    description: "Interactive quizzes and gamified tests to understand your interests, abilities, and learning style",
    icon: "🧠",
    accent: "bg-[#eef2ff] text-[#4338ca]",
  },
  {
    title: "Personalized Career Mapping",
    description: "Get step-by-step roadmaps from your current level to your dream career",
    icon: "🗺️",
    accent: "bg-[#f5f3ff] text-[#7c3aed]",
  },
  {
    title: "Stream Selection Guidance",
    description: "MPC, BiPC, Commerce, or Arts? Get AI-backed recommendations based on your profile",
    icon: "🧭",
    accent: "bg-[#ecfeff] text-[#0891b2]",
  },
  {
    title: "Course Recommendations",
    description: "Curated courses from Coursera, Udemy, and Skill India matched to your career path",
    icon: "📚",
    accent: "bg-[#fef9c3] text-[#b45309]",
  },
  {
    title: "Gamified Progress",
    description: "Earn badges, level up, and track your journey with an engaging point system",
    icon: "🎮",
    accent: "bg-[#fef2f2] text-[#dc2626]",
  },
  {
    title: "Expert Insights",
    description: "Access industry trends, salary data, and job market insights for informed decisions",
    icon: "💡",
    accent: "bg-[#e0f2fe] text-[#0369a1]",
  },
];

const steps = [
  {
    title: "Take Assessment",
    description: "Complete our fun, interactive quiz to map your interests and skills",
  },
  {
    title: "AI Analysis",
    description: "Our AI analyzes your profile and predicts optimal career paths",
  },
  {
    title: "Get Roadmap",
    description: "Receive personalized learning paths and course recommendations",
  },
  {
    title: "Track Progress",
    description: "Monitor your journey and earn rewards as you level up",
  },
];

const stepColors = [
  "from-[#a5b4fc] to-[#c7d2fe]",
  "from-[#fbcfe8] to-[#fda4af]",
  "from-[#bfdbfe] to-[#93c5fd]",
  "from-[#bbf7d0] to-[#86efac]",
];

export default function Home() {
  return (
    <div className="bg-[#fbfaff]">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf2ff] via-[#eef2ff] to-white">
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#c7d2fe]/40 to-[#fbcfe8]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#bae6fd]/30 to-[#fef3c7]/40 blur-3xl" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#dfe3ff] px-4 py-1 text-sm font-semibold text-[#4f46e5]">
              AI-Powered Career Guidance
            </span>
            <div>
              <p className="text-4xl font-semibold text-[#312e81] md:text-5xl">Discover Your Perfect Career Path</p>
              <p className="mt-4 text-lg text-slate-600">
                From 10th class to Master&apos;s level - Let AI guide you through personalized assessments, skill mapping,
                and career recommendations tailored for Indian students.
              </p>
            </div>
            <Button className="w-fit rounded-full bg-[#4f46e5] px-8 py-6 text-base shadow-lg hover:bg-[#4338ca]" asChild>
              <Link href="/assessment">Start Free Assessment</Link>
            </Button>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
              <span>10K+ Students Guided</span>
              <span>500+ Career Paths</span>
              <span>95% Accuracy Rate</span>
              <span>1000+ Verified Courses</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-16 text-center">
          <div>
            <p className="text-sm font-semibold text-[#6366f1]">Powerful Features for Your Success</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Everything you need to make confident career decisions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featureCards.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-[#f0f0ff] bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${feature.accent}`}>
                  {feature.icon}
                </div>
                <p className="text-lg font-semibold text-slate-900">{feature.title}</p>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 text-center">
          <div>
            <p className="text-sm font-semibold text-[#6366f1]">How Edumeter Works</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Your journey to the perfect career in 4 simple steps</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-[#f0f0ff] bg-white p-6 shadow-md transition hover:-translate-y-1">
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-lg font-semibold text-white ${stepColors[index % stepColors.length]}`}
                >
                  {index + 1}
                </div>
                <p className="text-lg font-semibold text-slate-900">{step.title}</p>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="success" className="bg-white">
        <div className="mx-auto w-full max-w-6xl rounded-[32px] bg-gradient-to-br from-[#8b5cf6] via-[#ec4899] to-[#ef4444] px-4 py-16 text-center text-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold">Ready to Discover Your Future?</h2>
            <p>Join thousands of students who found their perfect career path with Edumeter.</p>
            <Button className="mt-4 rounded-full bg-white px-8 py-6 text-base font-semibold text-slate-900 hover:bg-white/90" asChild>
              <Link href="/assessment">Start Your Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
