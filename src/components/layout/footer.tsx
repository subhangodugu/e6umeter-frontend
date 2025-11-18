import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Career Guides", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[#0f172a] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Edumeter</p>
          <p className="text-sm text-white/70">
            Empowering students to make confident career decisions with AI-powered guidance.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {title === "product" ? "Product" : title === "resources" ? "Resources" : "Company"}
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="pb-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Edumeter. All rights reserved.
      </p>
    </footer>
  );
}

