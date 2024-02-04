"use client"
import React from 'react'
import { useTheme } from "next-themes";
import Image from 'next/image';
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import instagram from  '../images/instagram.svg'
function Footer() {
    const { theme } = useTheme();
    const fillColor = theme === 'dark' ?  '#121212':'#F6F1EE' ;
    return (
    <footer className="mt-48 relative bg-secondaryBgLight dark:bg-secondaryBgDark duration-150">
        <div className="custom-shape-divider-top-1706264669 duration-150 hidden dark:block">
        <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="duration-150 shape-fill" fill="#121212" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
        </svg>
        </div>
        <div className="custom-shape-divider-top-1706264669 duration-150 dark:hidden">
        <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path className="duration-150 shape-fill" fill="#F6F1EE" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
        </svg>
        </div>
        <div className="mx-auto w-full max-w-screen-xl pt-32 lg:pt-48 pb-8 lg:pb-12  ">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <div className="flex flex-col items-center justify-start gap-4">
                    <h4 className="self-center text-2xl md:text-5xl font-semibold whitespace-nowrap text-primaryTextLight dark:text-primaryTextDark font-poppins">Like what you see?</h4>
                    <h4 className="self-center text-2xl md:text-5xl font-bold whitespace-nowrap text-accentOrange font-poppins">Get in touch</h4>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start mx-auto px-20">
                <div className='flex gap-4'>
                    <h4 className='font-poppins font-semibold text-primaryTextLight dark:text-primaryTextDark text-lg md:text-2xl'>Email: </h4>
                    <p className='text-xl md:text-2xl text-secondaryTextLight dark:text-secondaryTextDark hover:text-primaryBgDark dark:hover:text-primaryBgLight'><a href="mailto:vattivamshi@gmail.com">vattivamshi@gmail.com</a></p>
                </div>
                <div className='flex flex-col gap-2 '>
                    <h4 className='font-poppins font-semibold text-primaryTextLight dark:text-primaryTextDark text-lg md:text-2xl'>Socials </h4>
                    <div className='flex gap-4'>
                        <a href='https://www.google.com/' target='_blank'>
                        <Image 
                            src={twitter}
                            alt = "Twitter Icon"
                            width={50}
                            height={50}
                        />
                        </a>
                        <a href='https://www.linkedin.com/in/vamshi-vatti-bba477207/' target='_blank'>
                        <Image 
                            src={linkedin}
                            alt = "LinkedIn Icon"
                            width={50}
                            height={50}
                        />
                        </a>
                        <a href='https://www.instagram.com/vamshi_vatti/' target='_blank'>
                        <Image 
                            src={instagram}
                            alt = "Instagram Icon"
                            width={50}
                            height={50}
                        />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>

    )
}

export default Footer