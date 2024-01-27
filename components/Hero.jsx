"use client"
import React from 'react';
import Image from "next/image";
import dataAnalyst from "../images/data_analyst.svg";
import downArrowLight from "../images/down_arrow_light.svg";
import downArrowDark from "../images/down_arrow_dark.svg";
import {motion} from "framer-motion";
function Hero() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className='flex flex-col mx-auto justify-start items-center h-full mt-20 gap-20'>
        <div className='flex flex-col md:flex-row md:px-20 items-center justify-center mx-auto gap-10'>
            <div className='flex flex-col gap-4 md:gap-10'>
                <h1 className='font-poppins text-3xl md:text-7xl font-bold text-accentOrange'>The best way to predict the future is to create it</h1>
                <h2 className='font-inter text-2xl md:text-5xl font-semibold leading-relaxed text-primaryTextLight dark:text-primaryTextDark'>Hi! I'm <span className='text-accentOrange'>Vamshi Vatti</span> a Data Analyst based in London</h2>
            </div>
            <Image
            src={dataAnalyst}
            width={500}
            height={500}
            alt="Data Analyst Illustration"
            />
        </div>
        <motion.div
            initial={{y:0}}
            animate={{ y: [20, 30, 20 ,0]}}
            transition={{ type: "spring", bounce: 0.25,repeat: Infinity, duration:2  }}
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
    </motion.div>
  )
}

export default Hero