import Title from '@/components/Title'
import { motion } from 'framer-motion'



export default function Home() {

  return (

    <main>
      <motion.div
        key={'IndexFK'}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div>
          <Title />
        </div>
      </motion.div >
    </main >
  )
}
