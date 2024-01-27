"use client"
import React from 'react'
import Image from 'next/image'
import arrow from '../../images/arrow.svg'
import R from '../../images/R.svg'
import python from '../../images/python.svg'
import mySQL from '../../images/mySQL.svg'
import excel from '../../images/excel.svg'
import powerBI from '../../images/powerBI.svg'
import msAccess from '../../images/msAccess.svg'
import downArrowLight from "../../images/down_arrow_light.svg";
import downArrowDark from "../../images/down_arrow_dark.svg";
import { motion, useMotionValue, useSpring, useTransform }from "framer-motion";

function Projects() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (x, y, setX, setY)=>(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = (x, y) => () => {
        x.set(0);
        y.set(0);
    };

    const Card = ({ imageSrc }) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const rotateX = useTransform(
            y,
            [-0.5, 0.5],
            ["17.5deg", "-17.5deg"]
        );
        const rotateY = useTransform(
            x,
            [-0.5, 0.5],
            ["-17.5deg", "17.5deg"]
        );

        return (
            <motion.div
                onMouseMove={handleMouseMove(x, y, x.set, y.set)}
                onMouseLeave={handleMouseLeave(x, y)}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className='relative w-80 h-60 md:w-2/5 md:h-80 rounded-2xl bg-secondaryBgLight dark:bg-secondaryBgDark duration-150'
            >
                <Image
                    src={imageSrc}
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg dark:shadow-2xl h-[90%] w-[94%]'
                    alt="Project Image"
                />
            </motion.div>
        );
    };


    return (
    <div className='mt-16 px-10'>
        {/* skills */}
        <div className='flex flex-col'>
            <div className='flex gap-4 md:gap-10 px-4 lg:px-20'>
                <h1 className='text-3xl md:text-6xl text-primaryTextLight dark:text-primaryTextDark font-poppins font-semibold'>I'm good at</h1>
                <Image 
                    src={arrow}
                    width={50}
                    height={50}
                    alt='Right arrow'
                />
            </div>
            <div className='grid grid-cols-2 md:flex gap-20 mt-20 px-4 lg:px-20 mx-auto'>
                <div className='flex flex-col items-center gap-2'>
                    <Image 
                    src={python}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Python</h2>
                </div>
                
                <div className='flex flex-col items-center gap-2'>
                    <Image 
                    src={powerBI}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Power BI</h2>
                </div>
                
                <div className='flex flex-col items-center gap-2'>
                    <Image 
                    src={mySQL}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>My SQL</h2>
                </div>
                
                <div className='flex flex-col items-center gap-2'>
                    <Image 
                    src = {excel}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>MS Excel</h2>
                </div>
                
                
                <div className='flex flex-col items-center gap-2'>
                    <Image 
                    src={msAccess}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>MS Access</h2>
                </div>
                
                <div className='flex flex-col gap-2 items-center'>
                    <Image 
                    src={R}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>R</h2>
                </div>
                
            </div>

        </div>
        <motion.div
            initial={{y:0}}
            animate={{ y: [20, 30, 20 ,0]}}
            transition={{ type: "spring", bounce: 0.25,repeat: Infinity, duration:2  }}
            className='flex mx-auto justify-center items-center mt-32'
        >
            <Image
                src={downArrowLight}
                width={40}
                height={40}
                alt="Down arrow"
                className='dark:hidden '
            />
            <Image
                src={downArrowDark}
                width={40}
                height={40}
                alt="Down arrow"
                className='hidden dark:block '
            />
        </motion.div>
        <div className='mt-52 mx-auto px-4 md:px-20'>
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
            }}
            viewport={{once:true}}
            className='flex  md:gap-10 mx-auto'>
                <h1 className='text-3xl md:text-6xl text-primaryTextLight dark:text-primaryTextDark font-poppins font-semibold'>When I'm not working for you,<br></br> I'm working on these</h1>
                <Image 
                    src={arrow}
                    width={50}
                    height={50}
                    alt='Right arrow'
                />
            </motion.div>
            {/* Project 1 */}
            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.5,
            }}
            viewport={{once:true}}
            className='flex flex-col md:flex-row gap-8 items-center mt-20'>
                <Card imageSrc={arrow} x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Real World Experience</h2>
                        <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p>
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                        Description about the work you did. What kind of technologies you used. To find out more visit my blog 
                    </p>
                </div>
            </motion.div>
            {/* Project 2 */}
            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                delay:0.5,
            }}
            viewport={{once:true}}
            className='flex flex-col md:flex-row gap-8 items-center mt-20'>
                <Card imageSrc={arrow} x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Real World Experience</h2>
                        <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p>
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                        Description about the work you did. What kind of technologies you used. To find out more visit my blog 
                    </p>
                </div>
            </motion.div>
            
        </div>
    </div>
    )
}

export default Projects