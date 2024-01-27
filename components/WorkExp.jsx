"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'
import arrow from '../images/arrow.svg'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import realworldExp from "../images/realworld_experience.png";

function WorkExp() {
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
        <div className="w-full flex flex-col gap-10 mx-auto mt-52">
            <motion.div 
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{
                ease: "easeOut",
                duration: 0.5,
                
            }}
            viewport={{once:true}}
            className='flex gap-4 md:gap-10 px-4 lg:px-20'>
                <h1 className='text-3xl md:text-6xl text-primaryTextLight dark:text-primaryTextDark font-poppins font-semibold'>
                    Check out my work
                </h1>
                <Image 
                    src={arrow}
                    width={50}
                    height={50}
                    alt='Right arrow'
                />
            </motion.div>
            <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{
                ease: "linear",
                duration: 0.5,
                delay:0.5,
            }}
            viewport={{once:true}}
            className='flex flex-col md:flex-row gap-8 items-center px-4 lg:px-20 mt-20'>
                <Card imageSrc={realworldExp} x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Client Project</h2>
                        <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p>
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                    The SFS is planning to increase its revenues by increasing the prices for its membership. The client wants to know the impact of taking this decision.
                    The project looks over whether it is viable for SFS to increase its membership prices and what are the mitigation steps it can take. 
                    The main objective of the project is to analyse SFS's current membership fees, benefits, and market position to determine whether increasing membership prices is feasible and advisable.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default WorkExp