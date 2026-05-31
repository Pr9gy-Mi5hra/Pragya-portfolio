"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onAnimationComplete={() => {
        const el = document.getElementById("loading-screen");
        if (el) el.style.display = "none";
      }}
      id="loading-screen"
      aria-hidden="true"
    >
      <motion.div
        className="relative flex h-16 w-16 items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-1 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-lg font-bold text-primary">
          {personalInfo.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </motion.div>
      <motion.p
        className="mt-4 text-sm text-muted"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  );
}
