"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {
  data: Array<{ skill: string; score: number }>;
};

const accentColor = "oklch(var(--primary))";
const axisColor = "oklch(var(--muted-foreground))";

export function AptitudeRadar({ data }: Props) {
  return (
    <div className="rounded-3xl border border-border/70 p-4">
      <p className="text-sm font-medium text-muted-foreground">Aptitude mix</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="oklch(var(--border))" />
            <PolarAngleAxis dataKey="skill" stroke={axisColor} tickLine={false} fontSize={12} />
            <PolarRadiusAxis
              tickFormatter={(value) => `${value}%`}
              stroke={axisColor}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 16,
                borderColor: "oklch(var(--border))",
              }}
            />
            <Radar
              name="Score"
              dataKey="score"
              stroke={accentColor}
              fill={accentColor}
              fillOpacity={0.25}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

