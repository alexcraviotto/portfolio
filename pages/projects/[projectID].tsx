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
        <main className="mx-12 mb-10 lg:mb-0 flex flex-col text-center items-center lg:w-96 lg:mx-40">
            <motion.div
                key={"ProjectsFK"}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className="text-2xl lg:text-5xl mb-2 lg:mb-6">{project}</h1>
            </motion.div>
            <motion.div
                key={"ProjectsFK"}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-xs text-justify ">{projectsRequested[project]}</h2>
            </motion.div>

        </main>
    );
}
