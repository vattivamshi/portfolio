"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {motion} from "framer-motion"
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "../app/ThemeSwitcher";
import { usePathname } from 'next/navigation'; 
import VV_light from '../public/VV_Logo_light.svg';
import VV_dark from '../public/VV_Logo_dark.svg'
function Navbar() {
    const pathname = usePathname()
    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    return (
        <div className='flex items-center text-center px-4 sticky top-0 justify-center z-10'>
            
            <Image 
                src={isDarkTheme ? "/VV_Logo_dark.svg" : "/VV_Logo_light.svg"}
                width={0}
                height={0}
                alt="Logo"
                className='w-8 h-8 mt-8 md:mt-0'
            />
            <ul className= 'bg-secondaryBgLight dark:bg-secondaryBgDark duration-150 w-[70%] md:w-[65%] lg:w-[45%] flex mx-auto justify-center items-center gap-2 md:gap-20 mt-6 py-2 rounded-full px-4 text-xs md:text-lg font-poppins text-primaryTextLight dark:text-primaryTextDark'>
                <motion.li 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={`${pathname === '/'?'bg-accentOrange dark:bg-accentOrange text-primaryBgLight':'bg-tertiaryBgLight dark:bg-tertiaryBgDark'} hover:bg-accentOrange px-4 py-2 rounded-full  duration-150 w-36 `}>
                    <Link href="/">Work</Link>
                </motion.li>
                <motion.li 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={`${pathname === '/projects'?'bg-accentOrange dark:bg-accentOrange text-primaryBgLight':'bg-tertiaryBgLight dark:bg-tertiaryBgDark'} hover:bg-accentOrange px-4 py-2 rounded-full  duration-150 w-36 `}>
                    <Link href="/projects" >Projects</Link>
                </motion.li >
                <motion.li 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={`${pathname === '/about'?'bg-accentOrange dark:bg-accentOrange text-primaryBgLight':'bg-tertiaryBgLight dark:bg-tertiaryBgDark'} hover:bg-accentOrange px-4 py-2 rounded-full  duration-150 w-36 `}>
                    <Link  href="/about">About Me</Link>
                </motion.li >
            </ul>
            <div className='flex flex-col md:flex-row justify-center gap-2 place-items-center items-center mt-8 md:mt-0'>
                <ThemeSwitcher />
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='text-center bg-secondaryBgLight dark:bg-secondaryBgDark px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-lg'>
                    <a href="/Vamshi_Vatti_Resume.pdf"
                    alt="My Resume"
                    target="_blank"
                    rel="noopener noreferrer">
                        Resume
                    </a>
                </motion.div>
            </div>
            
        </div>
    )
}

export default Navbar