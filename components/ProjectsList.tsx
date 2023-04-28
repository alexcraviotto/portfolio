import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationArrow from "./NavigationArrow";

export default function ProjectsList() {
  interface IHandleIndex {
    startIndex: number;
    endIndex: number;
  }
  const [projectsRequested, setProjectsRequested] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true)
    const getProjects = async () => {
      const projects = await fetch("/api/projects");
      const projectsJson = await projects.json();
      setProjectsRequested(projectsJson);
    };
    getProjects();
    setLoading(false);
  }, []);

  const projectList = Object.keys(projectsRequested).map((projectName) => ({
    id: projectName,
    description: projectsRequested[projectName],
  }));

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  const moreProjectsOnClick = ({ startIndex, endIndex }: IHandleIndex) => {
    setStartIndex((prevIndex) => prevIndex + 3);
    setEndIndex((prevEndIndex) => prevEndIndex + 3);
  };

  const lessProjectsOnClick = ({ startIndex, endIndex }: IHandleIndex) => {
    setStartIndex((prevIndex) => prevIndex - 3);
    setEndIndex((prevEndIndex) => prevEndIndex - 3);
  };

  return (
    <main className="flex flex-col items-center justify-center align-center">
      {loading ? (
        <p className="text-4xl">loading...</p>
      ) : (
        <>
          <ul className="text-center mb-6 lg:mb-0">
            {projectList.slice(startIndex, endIndex).map((project) => (
              <motion.li
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-full overflow-y-scroll text-xl lg:mb-0 lg:text-3xl lg:my-1"
                key={project.id}
              >
                <Link href={"/projects/" + project.id}>{project.id}</Link>
              </motion.li>
            ))}
          </ul>
          <div className="absolute lg:bottom-72 bottom-60">
            <NavigationArrow
              moreProjects={moreProjectsOnClick}
              lessProjects={lessProjectsOnClick}
              totalProjects={projectList.length}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </div>

        </>
      )}
    </main>
  );
}
