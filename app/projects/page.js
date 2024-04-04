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
import socialMedia from '../../images/social-media.png'
import seo from '../../images/seo.png'
import googleAds from '../../images/google-ads.svg'
import downtownhayati from '../../images/downtownhayati.png'
import aiAlchemy from '../../images/aiAlchemy.png'
import carDealership from '../../images/carDealership.jpg'
import customerChurn from '../../images/customerChurn.png'
import priceComparision from '../../images/priceComparision.png'
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

    const Card = ({ imageSrc, siteLink }) => {
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
                className='relative w-80 h-60 md:w-2/5 md:h-96 rounded-2xl bg-secondaryBgLight dark:bg-secondaryBgDark duration-150'
            >
                <Image
                    src={imageSrc}
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg dark:shadow-2xl h-[80%] w-[94%]'
                    alt="Project Image"
                />
                <a className='absolute right-0 bottom-2 place-content-center rounded-xl  h-[10%] w-[80%] md:w-[50%] flex items-center gap-4 pt-4 md:pt-0' 
                    href={siteLink} target='_blank'
                    style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                >
                    <p className='text-lg font-semibold text-secondaryTextLight dark:text-secondaryTextDark'>View Project</p>
                    <Image
                        src={arrow}
                        alt="Project Link Image"
                    />
                </a>
            </motion.div>
        );
    };


    return (
    <div className='mt-16 px-4 md:px-10'>
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
            <div className='grid grid-cols-2 md:flex flex-wrap gap-20 mt-20 px-4 lg:px-20 mx-auto'>
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

                <div className='flex flex-col gap-2 items-center'>
                    <Image 
                    src={socialMedia}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Social Media <br></br> Marketing</h2>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <Image 
                    src={seo}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>SEO</h2>
                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <Image 
                    src={googleAds}
                    width={90}
                    height={70}
                    alt='Right arrow'
                    />
                    <h2 className='text-md md:text-lg text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Google Ads</h2>
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
                <Card imageSrc={customerChurn} siteLink="https://github.com/vattivamshi/Customer-Churn-Predictor" x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Customer Churn Predictor</h2>
                        {/* <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p> */}
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                    Conducted thorough data analysis on customer churn for a telecom company using Python libraries including pandas, 
                    numpy, seaborn, and matplotlib. This involved data cleaning, exploratory data analysis (EDA), visualization of churn trends, 
                    correlation analysis, and logistic regression modeling for churn prediction. Results were exported to a CSV file. 
                    In Power BI, I transformed insights into compelling visualizations and dashboards, showcasing reasons for churn, risk assessment by segmenting customers,
                     and an interactive dashboard for easy interpretation. Predicted churn probabilities from Python were seamlessly integrated into Power BI for enhanced insights.
                    </p>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Skills Used</p>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Python
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Power BI
                        </div>
                        {/* <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            R Programming
                        </div> */}
                    </div>
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
                <Card imageSrc={carDealership} siteLink="https://github.com/vattivamshi/predicting-car-resale-value-using-regression" x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Car Resale Value Predictor</h2>
                        {/* <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p> */}
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                    Utilized R programming language to build a predictive model that estimates the resale value of cars based on multiple factors such as make, model, mileage, year of manufacture, condition, and additional features. 
                    The model analyzes historical data to identify patterns and correlations between these factors and the resale value. 
                    Through data preprocessing, feature engineering, and model training, the project aims to provide car sellers, dealerships with valuable insights into pricing strategies and market trends, ultimately facilitating informed decision-making in the automotive industry.
                    </p>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Skills Used</p>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Python
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Power BI
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            R Programming
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* Project 3 */}
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
                <Card imageSrc={priceComparision} siteLink="https://github.com/vattivamshi/Python-Price-Comparision-Tool" x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Automated Price Comparison Tool</h2>
                        {/* <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p> */}
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                    This project automates the process of comparing prices for a product between Amazon India and Amazon USA. 
                    Using Selenium WebDriver and Python, the script navigates through the respective Amazon websites, searches for a product, extracts product descriptions, prices, and links for each listing. 
                    The script identifies the lowest price between the two regions and exports the corresponding details to a CSV file. This tool provides users with an efficient way to find the best deal for the product across different Amazon marketplaces.
                    </p>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Skills Used</p>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Python
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Power BI
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            R Programming
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Project 4 */}
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
                <Card imageSrc={downtownhayati} siteLink="https://downtownhayati.com/" x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>Men's Lifestyle Blog</h2>
                        {/* <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p> */}
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                    Through meticulously crafted articles on men's lifestyle, fashion, health, fitness, and grooming, I utilize my digital marketing skills to curate content that resonates with the target audience. 
                    Leveraging insights gleaned from analytics tools and market research, I optimize content strategies, enhance engagement, and drive traffic to the blog. With a keen understanding of consumer preferences and trends, 
                    DowntownHayati serves as a platform where data-driven decisions meet creative expression, enriching the reader experience and fostering a vibrant online community.                    </p>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Skills Used</p>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            SEO
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Social Media Marketing
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Google Ads
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Email Marketing
                        </div>
                        
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                                Amazon Affiliate Marketing
                        </div>
                    </div>
                    
                </div>
            </motion.div>
            
            {/* Project 5 */}
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
                <Card imageSrc={aiAlchemy} siteLink="https://www.instagram.com/ai._alchemy/" x={x} y={y}/>
                <div className='flex flex-col gap-4 justify-start items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl md:text-3xl font-semibold font-poppins text-primaryTextLight dark:text-primaryTextDark'>AI Alchemy</h2>
                        {/* <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>Duration</p> */}
                    </div>
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark max-w-2xl'>
                    "AI Alchemy" on Instagram is where creativity meets innovation. With a knack for crafting user-friendly captions and a strategic approach to content promotion, 
                    I spearhead initiatives to expand our audience reach and engagement. Through a seamless blend of artistic flair and digital expertise, 
                    AI Alchemy invites followers into a world where artificial intelligence breathes life into captivating visual experiences, sparking curiosity and igniting imagination one post at a time.    </p>                
                    <p className='text-lg md:text-xl text-secondaryTextLight dark:text-secondaryTextDark font-semibold'>Skills Used</p>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Content Curation
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Marketing Strategy
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                            Social Media Management
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                                Community Engagement
                        </div>
                        <div className='bg-accentOrange px-3 py-1 rounded-full text-primaryTextDark font-poppins'>
                                Trend Awareness    
                        </div>
                    </div>
                    
                </div>
            </motion.div>


        </div>
    </div>
    )
}

export default Projects