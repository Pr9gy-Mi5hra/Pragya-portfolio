"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock, Sparkles, User } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const cards = [
  {
    icon: Clock,
    label: "Experience",
    value: personalInfo.yearsOfExperience,
  },
  {
    icon: Briefcase,
    label: "Current Role",
    value: personalInfo.currentRole,
  },
  {
    icon: Sparkles,
    label: "Core Strengths",
    value: personalInfo.strengths.join(" · "),
  },
  {
    icon: User,
    label: "Target Roles",
    value: personalInfo.roles.join(" · "),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="About Me"
          title="Building Modern Web Experiences"
          description={personalInfo.summary}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeInView key={card.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-white/5 bg-surface p-6 glow-border transition-all hover:glow-border-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform group-hover:scale-110">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3
                  id={index === 0 ? "about-heading" : undefined}
                  className="text-sm font-medium uppercase tracking-wider text-muted"
                >
                  {card.label}
                </h3>
                <p className="mt-2 text-base font-semibold leading-snug text-foreground">
                  {card.value}
                </p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
