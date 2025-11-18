import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CareerRecommendation } from "@/types";

type Props = {
  career: CareerRecommendation;
};

export function CareerCard({ career }: Props) {
  return (
    <Card className="rounded-3xl border border-border/60 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{career.title}</CardTitle>
          <Badge className="rounded-full px-3 py-1 text-xs">
            {career.fitScore}% fit
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{career.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Key Traits
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {career.traits.map((trait) => (
              <Badge key={trait} variant="secondary" className="rounded-full">
                {trait}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Core Skills
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {career.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-full border-dashed"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-xs text-muted-foreground">Subjects to double down</p>
            <p className="font-medium">{career.subjects.join(", ")}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Future earnings</p>
            <p className="font-medium">{career.salaryRange}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}



