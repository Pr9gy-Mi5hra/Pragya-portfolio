"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/data/portfolio";

export default function Education() {
  if (education.length === 0) return null;

  return (
    <section
      id="education"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Education"
          title="Academic Background"
        />

        <div className="relative space-y-8">
          <div
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent"
            aria-hidden="true"
          />

          {education.map((edu, index) => (
            <FadeInView key={`${edu.institution}-${edu.year}`} delay={index * 0.1}>
              <motion.article
                whileHover={{ x: 4 }}
                className="relative ml-16 rounded-2xl border border-white/5 bg-surface p-6 glow-border transition-all hover:glow-border-hover"
              >
                <div className="absolute -left-[52px] top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3
                  id={index === 0 ? "education-heading" : undefined}
                  className="text-lg font-bold text-foreground"
                >
                  {edu.degree}
                </h3>
                <p className="mt-1 text-primary">{edu.institution}</p>
                <p className="mt-2 text-sm text-muted">{edu.year}</p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="mt-4 space-y-1">
                    {edu.achievements.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
