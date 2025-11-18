"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: number;
  className?: string;
  helper?: string;
};

export function ProgressBar({ label, helper, value, className }: Props) {
  return (
    <div className={cn("space-y-2 rounded-3xl border border-border/70 p-4", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-muted" />
      {helper && <p className="text-xs text-muted-foreground">{helper}</p>}
    </div>
  );
}



