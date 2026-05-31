"use client";

import { motion } from "framer-motion";
import { Building2, ExternalLink } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Real-world experience building software and leading teams."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <FadeInView key={`${exp.company}-${exp.duration}`} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <motion.div
                  className="absolute left-4 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  aria-hidden="true"
                />

                <div className="md:w-1/2 md:px-8">
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="ml-12 rounded-2xl border border-white/5 bg-surface p-6 glow-border transition-all hover:glow-border-hover md:ml-0"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Building2 className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3
                            id={index === 0 ? "experience-heading" : undefined}
                            className="text-lg font-bold text-foreground"
                          >
                            {exp.designation}
                          </h3>
                          <p className="text-primary">{exp.company}</p>
                        </div>
                      </div>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-muted transition-colors hover:text-primary"
                          aria-label={`Visit ${exp.company} on LinkedIn`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm font-medium text-muted">
                      {exp.duration}
                      {exp.location && ` · ${exp.location}`}
                    </p>

                    {exp.responsibilities.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.article>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
