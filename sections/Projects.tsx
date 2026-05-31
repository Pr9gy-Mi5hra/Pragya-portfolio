"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { MouseEvent } from "react";
import FadeInView from "@/components/animations/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import { getProjectInitials } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const initials = getProjectInitials(project.name);

  return (
    <FadeInView delay={index * 0.1}>
      <motion.article
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface glow-border transition-all hover:glow-border-hover"
      >
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-secondary/10">
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-background shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {initials}
          </motion.div>
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" aria-hidden="true" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-foreground">{project.name}</h3>

          {project.description && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          )}

          {project.features && project.features.length > 0 && (
            <ul className="mt-4 space-y-1">
              {project.features.map((feature) => (
                <li key={feature} className="text-xs text-muted">
                  • {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Challenges
              </p>
              <ul className="mt-1 space-y-1">
                {project.challenges.map((item) => (
                  <li key={item} className="text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.impact && project.impact.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Impact
              </p>
              <ul className="mt-1 space-y-1">
                {project.impact.map((item) => (
                  <li key={item} className="text-xs text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.githubUrl && (
            <div className="mt-6 flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-muted transition-all hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
                <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </motion.article>
    </FadeInView>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="Full-stack applications built with React, Next.js, MongoDB, and modern tooling."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.slug} id={index === 0 ? "projects-heading" : undefined}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
