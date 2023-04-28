import ProjectsList from "@/components/ProjectsList";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {


  return (
    <motion.div
      key={"ProjectsFK"}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-full"
    >
      <main className="max-h-full">
        <ProjectsList />
      </main>
    </motion.div>
  );
}
