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
function About() {
    const [isHovered, setIsHovered] = useState(false);
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
    <div className='mt-16 px-10'>
        
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
        className='flex flex-col md:flex-row justify-center items-center text-center md:text-start md:items-start  mx-auto mt-8 gap-12'>
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
            <div className='max-w-3xl text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>
                <p>
                I am an experienced business administration graduate and digital marketer who is currently pursuing a Master's in Business Analytics and Consultancy from the University of Hertfordshire. Proficient in data analysis, helping companies promote their products and drive growth through informed business decisions. Dedicated to providing customized solutions and committed to delivering results.
                I have a passion for utilizing data to make informed business decisions and drive growth. As a consultant, I am dedicated to providing my clients with customized solutions that meet their specific needs. My goal is to help companies make the most of their resources and reach their full potential.
                If you are looking for a consultant who is dedicated, knowledgeable, and results-driven, I would be honored to work with you.
                </p>
            </div>
        </motion.div>
        <div className='flex flex-col items-start mx-auto mt-52'>
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
                    <h2 className='font-poppins font-semibold text-primaruy text-lg md:text-2xl text-primaryTextLight dark:text-primaryTextDark '>MSc in Business Analytics and Consultancy, Distinction-Graduated</h2>
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
    </div>
    )
}

export default About