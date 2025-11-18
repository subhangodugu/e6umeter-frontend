"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchReport } from "@/lib/api";
import { mockReport } from "@/lib/mock-data";
import { ReportSummary } from "@/types";
import { AptitudeRadar } from "@/components/charts/aptitude-radar";
import { PerformanceTrend } from "@/components/charts/performance-trend";
import { ReadinessTimeline } from "@/components/charts/readiness-timeline";

export default function ResultsPage() {
  const [report, setReport] = useState<ReportSummary>(mockReport);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    fetchReport()
      .then(setReport)
      .catch(() => setReport(mockReport));
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsDownloading(false);
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="mx-auto w-full max-w-6xl space-y-6 px-4">
        <section className="rounded-[32px] border border-border/70 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Final report</p>
              <h1 className="text-3xl font-semibold text-slate-900">
                {report.studentName}&rsquo;s career map
              </h1>
              <p className="text-sm text-muted-foreground">Download the PDF to share with parents or mentors.</p>
            </div>
            <Button className="rounded-full px-6" onClick={handleDownload} disabled={isDownloading}>
              {isDownloading ? "Preparing..." : "Download PDF"}
            </Button>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Personality</p>
              <p className="text-2xl font-semibold">{report.personalityType}</p>
              <p className="text-sm text-muted-foreground">
                Blend of creativity + empathy + systems thinking. Thrives in project-based environments.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Recommended streams</p>
              <div className="flex flex-wrap gap-2">
                {report.recommendedStreams.map((stream) => (
                  <Badge key={stream} variant="secondary" className="rounded-full">
                    {stream}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Action items</p>
              {report.actionPlan.slice(0, 2).map((item) => (
                <div key={item.label} className="rounded-2xl border border-dashed border-border/70 p-3">
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                  <p className="text-xs font-medium text-primary">Due in {item.dueInWeeks} weeks</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <AptitudeRadar data={report.charts.aptitude} />
          <PerformanceTrend data={report.charts.interests.map((item) => ({ label: item.area, score: item.score }))} />
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <ReadinessTimeline data={report.charts.readiness} />
          <Card className="rounded-3xl border border-border/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-sm font-semibold text-muted-foreground">Strengths</p>
              <div className="space-y-2">
                {report.strengths.map((strength) => (
                  <div key={strength} className="rounded-2xl bg-primary/5 px-4 py-2 text-sm text-primary">
                    {strength}
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-muted-foreground">Growth areas</p>
              <div className="space-y-2">
                {report.growthAreas.map((growth) => (
                  <div key={growth} className="rounded-2xl border border-border/70 px-4 py-2 text-sm text-muted-foreground">
                    {growth}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

