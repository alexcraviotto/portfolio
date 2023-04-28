import Github from "@/components/Github";
import Mail from "@/components/Mail";
import Twitter from "@/components/Twitter";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <main>
            <motion.div
                key={'IndexFK'}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h1 className='text-5xl mb-6'>Contact</h1>
                <Mail />
                <Github />
                <Twitter />
            </motion.div>

        </main >
    )
}