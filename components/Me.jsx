import React from 'react'
import Image from 'next/image'
import travel from '../images/travel.png'
import meme from '../images/meme.png'
import food from '../images/food.png'
import travelTrain from '../images/traveltrain.jpeg'
import travelbuilding from '../images/charminar.jpg'
import pulaoubin from '../images/pulaoubin.png'
import meLatest from '../images/meLatest.jpeg'
import londonbridge from '../images/londonbridge.jpeg'
import mandi from '../images/mandi.jpeg'
import pizza from '../images/pizza.jpeg'
import pasta from '../images/pasta.jpeg'
import ramen from '../images/ramen.jpeg'
import {motion} from 'framer-motion'
function Me() {
  return (
    <div className='mt-16 px-4 md:px-20'>
        <div className='flex flex-col md:flex-row gap-12 justify-center items-center mx-auto'>
            <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    
                }}
                viewport={{once:true}}
                className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <Image 
                src={travel}
                width={30}
                height={30}
                alt="Icon"
                />
                <h2 className='font-poppins font-bold text-lg md:text-2xl text-secondaryTextLight dark:text-secondaryTextDark'>Travel Junkie</h2>
                </div>
                <p className='text-md md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>
                I've travelled to more than 6 states in India and lived in 2 cities in the United Kingdom. I like to think this makes me adapt to new environments with ease, and has taught me to be curious. 
                My favourite trip has to be Goa, India where I fell in love with the marine life during scuba diving and paragliding.
                </p>
            </motion.div>
            <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    
                }}
                viewport={{once:true}}
                 className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <Image 
                src={meme}
                width={30}
                height={30}
                alt="Icon"
                />
                <h2 className='font-poppins font-bold text-lg md:text-2xl text-secondaryTextLight dark:text-secondaryTextDark'>Pop Culture Lover</h2>
                </div>
                <p className='text-md md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>
                I'm that friend who casually plugs in meme references during conversations and slightly judges you if you don't recognize them 👀.  
                I spend a lot of my free time on Instagram, Twitter, YouTube, so you can trust me to give you the daily fix on what's going on with the Internet. 
                </p>
            </motion.div>
        </div>
        <br></br><br></br>
        <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay:0.5
                }}
                viewport={{once:true}}
                className='flex flex-wrap gap-8 mx-auto justify-center items-center'>
                <Image 
                src={meLatest}
                width={300}
                height={50}
                alt="Icon"
                />
                <Image 
                src={travelbuilding}
                width={300}
                height={150}
                alt="Icon"
                />
                <Image 
                src={travelTrain}
                width={230}
                height={50}
                alt="Icon"
                />
                <Image 
                src={londonbridge}
                width={300}
                height={50}
                alt="Icon"
                />
                
        </motion.div>
        <br></br><br></br>
        <hr className="h-1 mx-auto my-4 bg-secondaryBgLight dark:bg-secondaryBgDark border-0 rounded md:my-10 duration-150"/>
        <motion.div 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:1, x:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay:0.5
                }}
                viewport={{once:true}}
                className='flex flex-col gap-4'>
                <div className='flex gap-4'>
                <Image 
                src={food}
                width={30}
                height={30}
                alt="Icon"
                />
                <h2 className='font-poppins font-bold text-lg md:text-2xl text-secondaryTextLight dark:text-secondaryTextDark'>Avid Foodie</h2>
                </div>
                <p className='text-md md:text-xl text-secondaryTextLight dark:text-secondaryTextDark'>
                Do you ever travel more than 10 miles to eat a shawarma, because I do. I'm not just your average foodie—I'm a culinary adventurer on a quest for flavor, and my passport is stamped with delicious destinations. 
                Arab and Indian cuisines are my go-tos, but I'm not afraid to sprinkle in some Italian or Chinese flair. From street eats to fine dining, I live for flavor-packed adventures that tantalize the taste buds.
                </p>
        </motion.div>
        <motion.div 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay:0.5
                }}
                viewport={{once:true}}
                className='flex flex-wrap gap-8 mx-auto justify-center items-center mt-16'>
                <Image 
                src={mandi}
                width={220}
                height={50}
                alt="Icon"
                />
                <Image 
                src={pizza}
                width={220}
                height={50}
                alt="Icon"
                />
                <Image 
                src={pasta}
                width={300}
                height={50}
                alt="Icon"
                />
                <Image 
                src={ramen}
                width={300}
                height={50}
                alt="Icon"
                />
                
        </motion.div>
    </div>
  )
}

export default Me