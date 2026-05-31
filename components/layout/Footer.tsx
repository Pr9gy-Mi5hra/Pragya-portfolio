import { Github, Linkedin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const github = socialLinks.find((s) => s.icon === "github");
  const linkedin = socialLinks.find((s) => s.icon === "linkedin");

  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-foreground">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-all hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-all hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
