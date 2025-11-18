"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchCareerRecommendations,
  fetchReport,
  saveUserProgress,
} from "@/lib/api";
import { mockCareerRecommendations, mockReport } from "@/lib/mock-data";
import { CareerCard } from "@/components/cards/career-card";
import { ProgressBar } from "@/components/common/progress-bar";
import { PerformanceTrend } from "@/components/charts/performance-trend";
import { AptitudeRadar } from "@/components/charts/aptitude-radar";
import { ReadinessTimeline } from "@/components/charts/readiness-timeline";
import { ReportSummary } from "@/types";

export default function DashboardPage() {
  const [report, setReport] = useState<ReportSummary | null>(null);
  const [careers, setCareers] = useState(mockCareerRecommendations);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const [reportResponse, careersResponse] = await Promise.all([
          fetchReport(),
          fetchCareerRecommendations(),
        ]);
        setReport(reportResponse);
        setCareers(careersResponse);
      } catch (error) {
        console.error(error);
        setReport(mockReport);
        setCareers(mockCareerRecommendations);
      }
    };
    load();
  }, []);

  const logAction = async (step: string) => {
    try {
      setIsSaving(true);
      await saveUserProgress({ step });
    } finally {
      setIsSaving(false);
    }
  };

  const chartData =
    report?.charts ?? mockReport.charts;

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <section className="rounded-[32px] border border-border/70 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Welcome back</p>
              <h1 className="text-3xl font-semibold text-slate-900">
                {report?.studentName ?? mockReport.studentName}
              </h1>
              <p className="text-sm text-muted-foreground">
                Continue your mission to unlock the final AI career report.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full px-6" onClick={() => logAction("resume_assessment")}>
                Resume assessment
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6"
                onClick={() => logAction("download_report")}
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Download report"}
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <ProgressBar label="Overall readiness" value={78} helper="Complete missions to move beyond 80%." />
          <ProgressBar label="Assessment progress" value={62} helper="12 questions remaining." />
          <ProgressBar label="Portfolio completeness" value={54} helper="Add 2 more projects." />
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-2 p-6">
              <p className="text-sm font-semibold text-muted-foreground">Personality blend</p>
              {report ? (
                <>
                  <h2 className="text-2xl font-semibold">{report.personalityType}</h2>
                  <div className="flex flex-wrap gap-2">
                    {report.recommendedStreams.map((stream) => (
                      <span
                        key={stream}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {stream}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <Skeleton className="h-16 w-full rounded-2xl" />
              )}
            </CardContent>
          </Card>
          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-2 p-6">
              <p className="text-sm font-semibold text-muted-foreground">Next action plan</p>
              <div className="space-y-2">
                {(report ?? mockReport).actionPlan.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-dashed border-border/70 p-3">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <p className="text-xs font-medium text-primary">Due in {item.dueInWeeks} weeks</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <PerformanceTrend
            data={[
              { label: "Week 1", score: 62 },
              { label: "Week 2", score: 66 },
              { label: "Week 3", score: 70 },
              { label: "Week 4", score: 74 },
              { label: "Week 5", score: 78 },
            ]}
          />
          <AptitudeRadar data={chartData.aptitude} />
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <ReadinessTimeline data={chartData.readiness} />
          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-4 p-6">
              <p className="text-sm font-semibold text-muted-foreground">Strength snapshot</p>
              <div className="space-y-3">
                {(report ?? mockReport).strengths.map((strength) => (
                  <div key={strength} className="rounded-2xl bg-primary/5 p-3 text-sm font-medium text-primary">
                    {strength}
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-muted-foreground">Growth focus</p>
              <div className="space-y-3">
                {(report ?? mockReport).growthAreas.map((area) => (
                  <div key={area} className="rounded-2xl border border-border/80 p-3 text-sm text-muted-foreground">
                    {area}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">Smart matches</p>
              <h2 className="text-2xl font-semibold text-slate-900">Career recommendations</h2>
            </div>
            <Button variant="outline" className="rounded-full px-6" onClick={() => logAction("refresh_matches")}>
              Refresh matches
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}



