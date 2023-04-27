import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Project() {
  const router = useRouter();
  const [project, setProject] = useState<string>("");
  const [projectsRequested, setProjectsRequested] = useState<
    Object | undefined | any
  >("");

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetch("/api/projects");
      const projectsJson = await projects.json();
      setProjectsRequested(projectsJson);
    };
    getProjects();
    let actualPath = router.query.projectID as string;
    console.log(projectsRequested);
    if (
      actualPath &&
      projectsRequested &&
      !projectsRequested.hasOwnProperty(actualPath)
    )
      router.push("/projects");
    else setProject(actualPath);
  }, [router.query.projectID]);

  return (
    <main className="mx-40 flex flex-col items-center">
      <motion.div
        key={"ProjectsFK"}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-5xl mb-7">{project}</h1>
      </motion.div>
      <motion.div
        key={"ProjectsFK"}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
      <h2 className="text-xs text-justify lg:px-80">{projectsRequested[project]}</h2>
      </motion.div> 

    </main>
  );
}
