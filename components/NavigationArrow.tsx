import { motion } from "framer-motion";

interface INavigationArrow {
  moreProjects: Function;
  lessProjects: Function;
  startIndex: number;
  endIndex: number;
  totalProjects: number;
}

export default function NavigationArrow({
  moreProjects,
  lessProjects,
  startIndex,
  endIndex,
  totalProjects,
}: INavigationArrow) {
  const handleMoreProjects = () => {
    moreProjects(startIndex + 3, endIndex + 3);
  };

  const handleLessProjects = () => {
    lessProjects(startIndex - 3, endIndex - 3);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-full text-3xl "
      key={totalProjects}
    >
      {startIndex !== 0 && (
        <button onClick={handleLessProjects}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
      {endIndex < totalProjects && (
        <button onClick={handleMoreProjects}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
    </motion.div>
  );
}
