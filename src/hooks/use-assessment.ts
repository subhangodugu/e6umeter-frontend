"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  fetchAssessmentQuestions,
  submitAssessmentAnswers,
  saveUserProgress,
} from "@/lib/api";
import { AssessmentQuestion } from "@/types";

type AssessmentStatus = "idle" | "submitting" | "completed";

export function useAssessment() {
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<AssessmentStatus>("idle");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const items = await fetchAssessmentQuestions();
        setQuestions(items);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load questions. Showing demo questions.",
        );
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const currentQuestion = useMemo(
    () => questions[activeIndex],
    [questions, activeIndex],
  );

  const progress = useMemo(() => {
    if (!questions.length) return 0;
    const answered = Object.keys(answers).length;
    return Math.round((answered / questions.length) * 100);
  }, [answers, questions.length]);

  const selectAnswer = useCallback((questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }, []);

  const move = useCallback(
    (direction: "next" | "prev") => {
      setActiveIndex((prev) => {
        if (direction === "next") {
          return Math.min(prev + 1, questions.length - 1);
        }
        return Math.max(prev - 1, 0);
      });
    },
    [questions.length],
  );

  const submit = useCallback(async () => {
    try {
      setStatus("submitting");
      setError(null);
      await submitAssessmentAnswers({ answers });
      await saveUserProgress({ step: "assessment", score: progress });
      setStatus("completed");
      setSuccessMessage("Assessment submitted! Redirecting you to results.");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to submit answers.",
      );
      setStatus("idle");
    }
  }, [answers, progress]);

  return {
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
    moveNext: () => move("next"),
    movePrev: () => move("prev"),
    submit,
  };
}



