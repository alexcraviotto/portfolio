import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Project() {

    const projects: any = {
        'reminiscencefy': `Relive your memories through music, automatically generated monthly playlists in Spotify, 
                        reaching thousands of users and learning how to manage them, reaching thousands of users and learning how to manage them, and how to monetize the service by giving visibility to medium and small artists on the rise.`,
        'speedsive': `Automate the process and upload videos that follows a viral trend on YouTube.  
                    This trend consists of uploading videos that compile viral songs that are on tiktok and increase or decrease the speed(sped up or slowed songs).Speedsive is in charge of automating all this, both video creation and uploading to Youtube`,
        'classcord': `IN PROGRESS`
    }
    const router = useRouter();
    const [project, setProject] = useState<string>('');


    useEffect(() => {
        let actualPath = router.query.projectID as string
        if (actualPath && !projects.hasOwnProperty(actualPath))
            router.push('/projects')
        else
            setProject(
                actualPath
            );
        console.log(project)

    }, [router.query.projectID]);

    return (
        <motion.div
            key={'ProjectsFK'}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <main className='mx-40 flex flex-col items-center'>
                <h1 className='text-5xl mb-7'>{project}</h1>
                <h2 className='text-xs'>{projects[project]}</h2>
            </main>


        </motion.div>
    );
}
