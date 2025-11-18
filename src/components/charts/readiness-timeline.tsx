"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: Array<{ phase: string; value: number }>;
};

const axisColor = "oklch(var(--muted-foreground))";

export function ReadinessTimeline({ data }: Props) {
  return (
    <div className="rounded-3xl border border-border/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          Launch readiness
        </p>
        <span className="text-xs text-muted-foreground">Goal: 85%</span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={18}>
            <XAxis dataKey="phase" tickLine={false} axisLine={false} stroke={axisColor} fontSize={12} />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              tickLine={false}
              axisLine={false}
              stroke={axisColor}
              fontSize={12}
              domain={[0, 100]}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--primary)/0.08)" }}
              contentStyle={{
                borderRadius: 16,
                borderColor: "oklch(var(--border))",
              }}
            />
            <Bar
              dataKey="value"
              radius={[12, 12, 12, 12]}
              fill="url(#timelineGradient)"
            />
            <defs>
              <linearGradient id="timelineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(var(--primary))" stopOpacity="1" />
                <stop offset="100%" stopColor="oklch(var(--primary))" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

