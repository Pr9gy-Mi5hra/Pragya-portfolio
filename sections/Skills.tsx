"use client";

import { motion } from "framer-motion";
import FadeInView from "@/components/animations/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "from-primary/20 to-cyan-500/10",
  Backend: "from-secondary/20 to-purple-500/10",
  Database: "from-emerald-500/20 to-teal-500/10",
  Tools: "from-orange-500/20 to-amber-500/10",
  Deployment: "from-pink-500/20 to-rose-500/10",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          description="Technologies and tools used across professional and personal projects."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <FadeInView key={category.category} delay={catIndex * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-white/5 bg-gradient-to-br ${categoryColors[category.category]} bg-surface p-6 glow-border transition-all hover:glow-border-hover`}
              >
                <h3
                  id={catIndex === 0 ? "skills-heading" : undefined}
                  className="mb-5 text-lg font-bold text-foreground"
                >
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0 0 20px rgba(0, 229, 255, 0.25)",
                      }}
                      className="cursor-default rounded-lg border border-white/10 bg-background/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
