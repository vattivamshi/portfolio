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
        className='flex flex-col md:flex-row justify-center items-center  md:text-start  mx-auto mt-8 gap-12'>
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
            <div className='max-w-4xl text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark px-4'>
                <p>
                With a burning passion for both data analytics and digital marketing, I'm on a mission to unlock the full potential of businesses by leveraging the power of data-driven insights. 
                Armed with a Master’s in Business Analytics and Consultancy from the prestigious University of Hertfordshire, I am equipped with the tools and knowledge to tackle complex business challenges head-on.
                </p>
                <p className='pt-2'>
                My journey from the dynamic realm of digital marketing to the intricate world of data analytics has been nothing short of exhilarating. 
                It's not just about crunching numbers; it's about unravelling the mysteries hidden within the data to drive tangible results for businesses. 
                Beyond the boardrooms and analytics tools, I'm driven by a deep-seated passion for continuous learning and personal growth. 
                Whether I'm diving into the latest trends in business strategy literature or immersing myself in the captivating worlds of anime and manga, 
                I approach every aspect of my life with boundless enthusiasm and curiosity.
                </p>
                <p className='pt-2'>
                On the court, I channel the same passion and intensity that I bring to my professional endeavours. Whether it's shooting hoops on the basketball court or engaging in a spirited game of table tennis, I thrive in environments that demand focus, determination, and teamwork. More than a data analyst, I'm a catalyst for change, blending digital marketing expertise to drive meaningful transformation. 
                With proven success and unwavering commitment, I'm ready to unlock new possibilities and make magic together!
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
                    
                    <ul class="text-secondaryTextLight dark:text-secondaryTextDark text-md md:text-xl list-disc">
                        <li>Embarked on an exhilarating journey at UOH, Hatfield, UK, where I immersed myself in the transformative realm of business analytics and consultancy.</li>
                        <li class="mt-2">Graduated with distinction, earning my Master of Science degree in Business Analytics and Consultancy, showcasing my dedication to academic excellence and mastery of the subject matter.</li>
                    </ul>

                    
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
                    <ul class="text-secondaryTextLight dark:text-secondaryTextDark text-md md:text-xl list-disc">
                        <li>At Bhavan’s Vivekananda College in India, I delved deep into the world of business administration, honing my skills and knowledge to become a dynamic professional.</li>
                        <li class="mt-2">Proudly graduated with a Bachelor of Business Administration, earning a GPA of 7.29/10, reflecting my commitment to academic rigor and achieving a first-class degree.</li>
                        <li class="mt-2">This educational journey laid a strong foundation for my career, equipping me with the essential tools and expertise to thrive in the dynamic and competitive business landscape.</li>
                    </ul>
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