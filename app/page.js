'use client'

import Image from 'next/image'
import {motion} from 'framer-motion'
import { Pacifico } from 'next/font/google'

const pasifico = Pacifico({ 
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  const bgAnimate = {
    hidden:{
      clipPath: "polygon(21% 26%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease:"easeInOut",
        duration:0.8,
        delay:1,
      },
    }
  }
  const textAnimate1 = {
    hidden: {
      y:"100%",
      opacity:0,
    },
    show: {
      y:0,
      opacity:1,
      transition: {
        ease:'easeInOut',
        duration:0.8,
        staggerChildren:0.4,
        delayChildren:1,
      }
    }
  }
  const textAnimate2 = {
    hidden: {
      x:0,
    },
    show: (i) => ({
      x:i,
      transition: {
        ease: 'easeOut',
        duration:0.8,
      }
    })
  }
  const imageAnimate = {
    hidden:{ },
    show: {
      transition: {
        staggerChildren: 0.6,
        delayChildren:3.6,
        ease: [0.25, 0.4, 0.25, 1],
      }
    }
  }
  const imageAnimateChild = {
    hidden:{
      opacity:0,
      x:100,
    },
    show: {
      opacity:1,
      x:0,
      transition: {
        ease:'easeInOut'
      }
    }
  }
  const navAnimate = {
    hidden:{
      y:"-110%",
    },
    show: {
      y:0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay:2,
      }
    }
  }
  const textParagraph = {
    hidden:{
      y:"-100%",
      opacity:0,
    },
    show: {
      y:0,
      opacity:1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay:2.8,
      }
    }
  }
  return (
    <main className='h-screen px-4 overflow-hidden'>
      <motion.div className='absolute inset-0 w-screen h-screen z-0' variants={bgAnimate} initial="hidden" animate="show">
        <Image src="/img/bg.webp" alt="background" fill sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw" priority={true} className='object-cover brightness-50' />
      </motion.div>

      <motion.nav className='flex justify-between items-center text-white relative z-10 pt-4' variants={navAnimate} initial="hidden" animate="show">
        <div className={`text-xl text-yellow-200 font-bold underline ${pasifico.className}`}>BuildPainting</div>
        <ul className='w-[300px] flex justify-between items-center'>
          <li>Home</li>
          <li>Services</li>
          <li>Destination</li>
        </ul>
      </motion.nav>
      <div className='relative top-[120px]'>
        <motion.div className='relative left-[25%]' variants={textAnimate1} initial="hidden" animate="show">
          <motion.h1 className={`text-9xl text-[#eaeaea] lowercase tracking-tighter font-semibold z-10 ${pasifico.className}`} variants={textAnimate2} custom={-150}>PAINTING</motion.h1>
        </motion.div>
        <motion.p className='absolute top-12 right-32 z-10 w-[500px] text-justify leading-5 text-[#eaeaea] text-xs font-medium' variants={textParagraph} initial="hidden" animate="show"><span className='text-yellow-200'>The art of painting is a highly esteemed and revered form of artistic expression. It is a discipline that requires great skill, technique, and creativity.</span> Paintings have been created throughout history, serving as a means of communication, documentation, and aesthetic enjoyment.</motion.p>
        <motion.div className='relative left-[25%]' variants={textAnimate1} initial="hidden" animate="show">
          <motion.h1 className='text-9xl text-yellow-200 font-semibold tracking-tighter z-10' variants={textAnimate2} custom={100}>EXPERIENCE</motion.h1>
        </motion.div>
      </div>
      <motion.div className='flex gap-4 absolute bottom-4' variants={imageAnimate} initial="hidden" animate="show">
        <motion.div className='relative w-[300px] h-[200px]' variants={imageAnimateChild}>
          <Image src="/img/img-1.webp" alt="image" fill sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw" className='object-cover rounded-sm saturate-150' />
        </motion.div>
        <motion.div className='relative w-[300px] h-[200px]' variants={imageAnimateChild}>
          <Image src="/img/img-2.webp" alt="image" fill sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw" className='object-cover rounded-sm saturate-150' />
        </motion.div>
        <motion.div className='relative w-[300px] h-[200px]' variants={imageAnimateChild}>
          <Image src="/img/img-3.webp" alt="image" fill sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw" className='object-cover rounded-sm saturate-150' />
        </motion.div>
      </motion.div>
    </main>
  )
}
