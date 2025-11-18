"use client";

import { QuestionCard } from "@/components/questions/question-card";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/hooks/use-assessment";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

export default function AssessmentPage() {
  const {
    questions,
    currentQuestion,
    activeIndex,
    answers,
    progress,
    isLoading,
    error,
    status,
    successMessage,
    selectAnswer,
    moveNext,
    movePrev,
    submit,
  } = useAssessment();

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="mx-auto w-full max-w-5xl space-y-6 px-4">
        <section className="rounded-[32px] border border-border/70 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Assessment journey</p>
              <h1 className="text-3xl font-semibold text-slate-900">
                Foundations + Scenario lab
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full bg-green-100 text-green-700">
                {questions.length} questions
              </Badge>
              <Badge className="rounded-full bg-blue-100 text-blue-700">
                ~20 mins
              </Badge>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 rounded-full bg-muted" />
          </div>
        </section>

        {error && (
          <p className="rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}
        {successMessage && (
          <p className="rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
            {successMessage}
          </p>
        )}

        <section className="grid gap-5 md:grid-cols-[2fr_1fr]">
          <div>
            {isLoading || !currentQuestion ? (
              <Skeleton className="h-[420px] w-full rounded-[32px]" />
            ) : (
              <QuestionCard
                question={currentQuestion}
                selectedOption={answers[currentQuestion.id]}
                onSelect={(optionId) => selectAnswer(currentQuestion.id, optionId)}
              />
            )}

            <div className="mt-4 flex flex-wrap justify-between gap-3">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={movePrev}
                disabled={activeIndex === 0}
              >
                Previous
              </Button>
              <div className="flex gap-3">
                <Button
                  className="rounded-full"
                  onClick={moveNext}
                  disabled={activeIndex === questions.length - 1}
                >
                  Next
                </Button>
                <Button
                  className="rounded-full bg-gradient-to-r from-primary to-primary/80"
                  onClick={submit}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Submitting…" : "Submit"}
                </Button>
              </div>
            </div>
          </div>

          <aside className="space-y-4 rounded-[32px] border border-border/60 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-muted-foreground">
              Scenario checklist
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Use rough notes & diagrams</li>
              <li>• Highlight teamwork or reflection</li>
              <li>• Show how you would test ideas</li>
            </ul>
            <div className="rounded-2xl border border-dashed border-primary/40 p-4 text-sm">
              <p className="font-semibold text-primary">Need a pause?</p>
              <p className="text-muted-foreground">
                Your answers auto-save. You can return anytime from the dashboard.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}



