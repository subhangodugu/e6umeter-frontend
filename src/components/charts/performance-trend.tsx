"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: Array<{ label: string; score: number }>;
};

const axisColor = "oklch(var(--muted-foreground))";
const lineColor = "oklch(var(--primary))";

export function PerformanceTrend({ data }: Props) {
  return (
    <div className="rounded-3xl border border-border/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">Weekly mastery</p>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          +8% this week
        </span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
            <XAxis dataKey="label" axisLine={false} tickLine={false} stroke={axisColor} fontSize={12} />
            <YAxis
              tickFormatter={(value) => `${value}%`}
              axisLine={false}
              tickLine={false}
              stroke={axisColor}
              fontSize={12}
              domain={[50, 100]}
            />
            <Tooltip
              cursor={{ stroke: lineColor, strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 16,
                borderColor: "oklch(var(--border))",
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke={lineColor}
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

