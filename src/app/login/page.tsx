"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { login, signup } from "@/lib/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const grades = ["Grade 1-4", "Grade 5-8", "Grade 9-10", "Grade 11-12"];

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success"; message?: string }>({
    type: "idle",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [grade, setGrade] = useState(grades[2]);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    try {
      setIsSubmitting(true);
      await login({ email, password });
      setStatus({ type: "success", message: "Welcome back! Taking you to the dashboard." });
      setTimeout(() => router.push("/dashboard"), 900);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to login right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    try {
      setIsSubmitting(true);
      await signup({ name, email, password, grade });
      setStatus({
        type: "success",
        message: "Account created! You can continue to the dashboard.",
      });
      setTimeout(() => router.push("/dashboard"), 900);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to sign up right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 md:grid-cols-2">
        <div className="space-y-4 rounded-[32px] border border-border/70 bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold text-primary">Family access</p>
          <h1 className="text-3xl font-semibold text-slate-900">Log in or start your profile</h1>
          <p className="text-muted-foreground">
            Track assessments, unlock new missions, and download the AI report anytime.
          </p>
          <div className="rounded-3xl bg-muted/40 p-4">
            <p className="text-sm font-semibold text-slate-800">Need a guardian access code?</p>
            <p className="text-xs text-muted-foreground">Ask your school coach or email hello@e6umeter.com</p>
          </div>
        </div>
        <Tabs
          defaultValue="login"
          value={tab}
          onValueChange={(value) => setTab(value as typeof tab)}
          className="rounded-[32px] border border-border/70 bg-white p-6 shadow-lg"
        >
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-muted/60">
            <TabsTrigger value="login" className="rounded-full text-sm font-semibold">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="rounded-full text-sm font-semibold">
              Sign up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="mt-6 space-y-4">
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="student@school.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full rounded-full py-6" disabled={isSubmitting}>
                {isSubmitting ? "Please wait..." : "Continue to dashboard"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="mt-6 space-y-4">
            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Ava Kapoor" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" name="email" type="email" required placeholder="student@school.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" name="password" type="password" required placeholder="At least 8 characters" />
              </div>
              <div className="space-y-2">
                <Label>Grade</Label>
                <Select value={grade} onValueChange={setGrade}>
                  <SelectTrigger className="rounded-2xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full rounded-full py-6" disabled={isSubmitting}>
                {isSubmitting ? "Creating profile..." : "Create free account"}
              </Button>
            </form>
          </TabsContent>

          {status.type !== "idle" && (
            <p
              className={`rounded-2xl px-4 py-3 text-sm ${
                status.type === "error" ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </Tabs>
      </div>
    </div>
  );
}



