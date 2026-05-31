"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          description="Open to opportunities in MERN stack and full-stack development roles."
        />

        <FadeInView>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-surface p-8 md:p-12 glow-border"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative text-center">
              <h3
                id="contact-heading"
                className="text-2xl font-bold text-foreground md:text-3xl"
              >
                Ready to collaborate?
              </h3>
              <p className="mx-auto mt-4 max-w-lg text-muted">
                Reach out via email or connect on LinkedIn and GitHub to discuss
                opportunities and projects.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  href={`mailto:${personalInfo.email}`}
                  variant="primary"
                  size="lg"
                >
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Send Email
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {socialLinks.map((link, index) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={link.icon === "mail" ? undefined : "_blank"}
                      rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-background/50 p-6 transition-all hover:border-primary/30 hover:glow-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {link.name}
                      </span>
                      <span className="text-xs text-muted break-all">
                        {link.icon === "mail"
                          ? personalInfo.email
                          : link.url.replace(/^https?:\/\/(www\.)?/, "")}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}
