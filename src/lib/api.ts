import { AssessmentQuestion, CareerRecommendation, ReportSummary } from "@/types";
import {
  mockCareerRecommendations,
  mockQuestions,
  mockReport,
} from "@/lib/mock-data";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:4000";

type FetchOptions = RequestInit & { withAuth?: boolean };

async function apiFetch<T>(
  path: string,
  options: FetchOptions = {},
): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;
  const headers = new Headers(options.headers);

  headers.set("Content-Type", "application/json");

  if (options.withAuth) {
    const token =
      typeof window !== "undefined"
        ? window.localStorage.getItem("e6u_token")
        : null;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  const response = await fetch(url, {
    ...options,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Something went wrong" }));
    throw new Error(error.message ?? "Request failed");
  }

  return response.json();
}

export async function login(payload: {
  email: string;
  password: string;
}): Promise<{ token: string; student: { name: string } }> {
  const data = await apiFetch<{ token: string; student: { name: string } }>(
    "/auth/login",
    { method: "POST", body: JSON.stringify(payload) },
  );

  if (typeof window !== "undefined") {
    window.localStorage.setItem("e6u_token", data.token);
  }

  return data;
}

export async function signup(payload: {
  name: string;
  email: string;
  password: string;
  grade: string;
}) {
  return apiFetch<{ token: string; student: { name: string } }>("/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function fetchAssessmentQuestions(): Promise<
  AssessmentQuestion[]
> {
  try {
    const data = await apiFetch<{ questions: AssessmentQuestion[] }>(
      "/assessments/current",
      { withAuth: true },
    );
    if (!data.questions?.length) {
      throw new Error("No questions received");
    }
    return data.questions;
  } catch (error) {
    console.warn("Falling back to mock questions:", error);
    return mockQuestions;
  }
}

export async function submitAssessmentAnswers(payload: {
  answers: Record<string, string>;
}): Promise<{ assessmentId: string }> {
  return apiFetch("/assessments/submit", {
    method: "POST",
    withAuth: true,
    body: JSON.stringify(payload),
  });
}

export async function fetchCareerRecommendations(): Promise<
  CareerRecommendation[]
> {
  try {
    const data = await apiFetch<{ careers: CareerRecommendation[] }>(
      "/students/careers",
      { withAuth: true },
    );
    return data.careers?.length ? data.careers : mockCareerRecommendations;
  } catch (error) {
    console.warn("Falling back to mock careers:", error);
    return mockCareerRecommendations;
  }
}

export async function fetchReport(): Promise<ReportSummary> {
  try {
    return await apiFetch<ReportSummary>("/reports/latest", {
      withAuth: true,
    });
  } catch (error) {
    console.warn("Falling back to mock report:", error);
    return mockReport;
  }
}

export async function saveUserProgress(payload: {
  step: string;
  score?: number;
}) {
  return apiFetch("/students/progress", {
    method: "POST",
    withAuth: true,
    body: JSON.stringify(payload),
  });
}



