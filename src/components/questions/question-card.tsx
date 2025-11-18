"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AssessmentQuestion } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  question: AssessmentQuestion;
  selectedOption?: string;
  onSelect: (optionId: string) => void;
};

export function QuestionCard({ question, selectedOption, onSelect }: Props) {
  return (
    <section className="space-y-4 rounded-3xl border border-border/80 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="secondary" className="rounded-full">
          {question.subject}
        </Badge>
        <Badge className="rounded-full capitalize">{question.level}</Badge>
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{question.prompt}</h3>

      {question.scenario && (
        <p className="rounded-2xl bg-muted/70 p-4 text-sm text-muted-foreground">
          {question.scenario}
        </p>
      )}

      {question.options ? (
        <div className="grid gap-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                "w-full rounded-2xl border px-4 py-3 text-left text-sm transition-all",
                selectedOption === option.id
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border/70 hover:border-primary/40",
              )}
            >
              <p className="font-medium">{option.label}</p>
              {option.description && (
                <span className="text-xs text-muted-foreground">
                  {option.description}
                </span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <textarea
            className="w-full rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            rows={4}
            placeholder="Describe your approach…"
            onChange={(event) => onSelect(event.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Scenario responses autosave every few seconds.
          </p>
        </div>
      )}

      {question.tips && (
        <div className="rounded-2xl border border-dashed border-primary/30 p-4 text-sm text-muted-foreground">
          <p className="mb-2 font-semibold text-primary">Coach Tip</p>
          <ul className="space-y-1 text-xs">
            {question.tips.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" className="rounded-full">
          Save for later
        </Button>
        <Button className="rounded-full bg-gradient-to-r from-primary to-primary/80">
          Need a hint
        </Button>
      </div>
    </section>
  );
}



