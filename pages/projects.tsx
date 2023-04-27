import { motion } from "framer-motion"

export default function Projects() {
    return (
        <motion.div
            key={'ProjectsFK'}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h1>Projects</h1>
        </motion.div >

    )
}