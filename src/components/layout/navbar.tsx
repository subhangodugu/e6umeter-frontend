"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#success", label: "Success Stories" },
];

type NavLinksProps = {
  pathname: string;
  orientation?: "row" | "column";
};

function NavLinks({ pathname, orientation = "row" }: NavLinksProps) {
  return (
    <div
      className={cn(
        "items-start gap-2",
        orientation === "row" ? "flex" : "flex flex-col",
      )}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-base font-semibold">Edumeter</p>
            <p className="text-xs text-muted-foreground">AI career guidance</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLinks pathname={pathname ?? ""} />
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="space-y-4">
            <SheetHeader>
              <SheetTitle>Edumeter</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2">
              <NavLinks pathname={pathname ?? ""} orientation="column" />
              <Button asChild className="mt-4">
                <Link href="/login">Login / Signup</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

