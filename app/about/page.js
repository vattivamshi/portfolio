"use client"
import React ,{useState} from 'react'
import Image from 'next/image'
import vamshi_normal from '../../images/normal_bg_vamshi.png'
import vamshi_anime from '../../images/anime_bg_vamshi.png'
import { motion } from 'framer-motion';
import arrow from '../../images/arrow.svg'
import uniHertLight from '../../images/uniHertLight.png'
import uniHertDark from '../../images/uniHertDark.png'
import bhavans from '../../images/bhavans.png'
import Me from '@/components/Me'
function About() {
    const [isHovered, setIsHovered] = useState(false);
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
    <div className='mt-16 px-4 md:px-10'>
        
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
        className='flex mx-auto justify-center items-center'>
                <h1 className='font-poppins text-3xl md:text-7xl font-bold text-primaryTextLight dark:text-primaryTextDark'>Hello! I'm <span className='text-accentOrange'>Vamshi</span></h1>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{
            ease: "easeOut",
            duration: 0.5,
            
        }}
        viewport={{once:true}}
        className='flex flex-col md:flex-row justify-center items-center  md:text-start md:items-start  mx-auto mt-8 gap-12'>
            <motion.div
                className='w-fit relative '
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                    <motion.div
                        variants={imageVariants}
                        initial="visible"
                        animate={isHovered ? "hidden" : "visible"}
                        transition={{ duration: 0.3 }}
                        className='absolute '
                    >
                        <Image
                            src={vamshi_normal}
                            alt="Normal Image"
                            width={255}
                            height={100}
                            className='rounded-2xl '
                        />
                    </motion.div>
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={isHovered ? "visible" : "hidden"}
                        transition={{ duration: 0.3 }}
                        className=''
                    >
                        <Image
                            src={vamshi_anime}
                            alt="Hovered Image"
                            width={255}
                            height={100}
                            className='rounded-2xl '
                        />
                    </motion.div>
            </motion.div>
            <div className='max-w-3xl text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark px-4'>
                <p>
                Transitioning seamlessly from the dynamic world of digital marketing to the intricate realms of data analytics, I bring a unique blend of professional expertise and personal passions to the forefront. 
                Recently distinguished with a Master's in Business Analytics and Consultancy from the University of Hertfordshire, my journey involves not only deciphering data for business transformation but also delving into the captivating worlds of anime and manga during leisure moments.
                <br></br><br></br>
                Beyond the confines of data analytics, I'm an avid reader, immersing myself in books on business strategy and wealth creation. 
                On the court, you'll find me passionate about basketball and table tennis, where the thrill of the game mirrors the excitement I bring to my professional endeavors.
                <br></br><br></br>
                Fueling my wanderlust, I embark on journeys to explore new places, seamlessly blending my love for travel with a keen eye for discovering opportunities, both in business and in the rich tapestry of cultures around the world. 
                If you're seeking a data analyst who not only transforms digital marketing strategies but also thrives on the eclectic tapestry of life's experiences, let's collaborate on a journey where professional excellence meets personal passions.
                </p>
            </div>
        </motion.div>
        <div className='flex flex-col items-start mx-auto mt-52 px-4'>
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.7,
                
            }}
            viewport={{once:true}}
            className='flex gap-4 md:gap-10 px-4 lg:px-20'>
                <h1 className='text-3xl md:text-6xl text-primaryTextLight dark:text-primaryTextDark font-poppins font-semibold'>My Journey</h1>
                <Image 
                    src={arrow}
                    width={50}
                    height={50}
                    alt='Right arrow'
                />
            </motion.div>
            {/* Education 1 */}
            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.8
                
            }}
            viewport={{once:true}}
            className='flex flex-col md:flex-row mt-16 mx-auto justify-center items-center gap-12'>
                <>
                    <Image
                        src={uniHertLight}
                        alt="Hovered Image"
                        width={400}
                        height={100}
                        className='dark:hidden'
                    />
                    <Image
                        src={uniHertDark}
                        alt="Hovered Image"
                        width={400}
                        height={100}
                        className='hidden dark:block '
                    />
                </>
                <div className='flex flex-col mx-auto justify-center items-center max-w-lg gap-3'>
                    <h2 className='font-poppins font-semibold text-primaruy text-lg md:text-2xl text-primaryTextLight dark:text-primaryTextDark '>MSc in Business Analytics and Consultancy, Distinction-Graduated</h2>
                    <p className='text-secondaryTextLight dark:text-secondaryTextDark text-md md:text-xl'>
                        Description about the education. Concepts and technologies learnt.
                        Description about the education. Concepts and technologies learnt.
                        Description about the education. Concepts and technologies learnt.
                    </p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.8
                
            }}
            viewport={{once:true}}
             className='flex flex-col md:flex-row mt-16 mx-auto justify-center items-center gap-12'>
                <>
                    <Image
                        src={bhavans}
                        alt="Hovered Image"
                        width={400}
                        height={100}
                    />
                </>
                <div className='flex flex-col mx-auto justify-center items-center max-w-lg gap-3'>
                    <h2 className='font-poppins font-semibold text-primaruy text-lg md:text-2xl text-primaryTextLight dark:text-primaryTextDark '>Bachelor of Business Administration, First Class - Graduated</h2>
                    <p className='text-secondaryTextLight dark:text-secondaryTextDark text-md md:text-xl'>
                        Description about the education. Concepts and technologies learnt.
                        Description about the education. Concepts and technologies learnt.
                        Description about the education. Concepts and technologies learnt.
                    </p>
                </div>
            </motion.div>
        </div>
        <div className='flex flex-col items-start mx-auto mt-52 gap-8'>
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                
            }}
            viewport={{once:true}}
            className='flex gap-4 md:gap-10 px-4 lg:px-20'>
                <h1 className='text-3xl md:text-6xl text-primaryTextLight dark:text-primaryTextDark font-poppins font-semibold max-w-2xl'>Since you've scrolled all the way down</h1>
                <Image 
                    src={arrow}
                    width={50}
                    height={50}
                    alt='Right arrow'
                />
            </motion.div>
            <motion.h2 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.2
            }}
            viewport={{once:true}}
            className='text-xl md:text-3xl text-secondaryTextLight dark:text-secondaryTextDark font-poppins font-semibold max-w-5xl px-4 lg:px-20'>This is what you'll see me doing when I'm off work</motion.h2>
        </div>

        <Me/>
    </div>
    )
}

export default About