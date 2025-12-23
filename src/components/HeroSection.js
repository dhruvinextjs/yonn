'use client'
 
import Image from 'next/image'
import { FaApple } from 'react-icons/fa'
import { IoLogoAndroid } from "react-icons/io"
import { motion } from 'framer-motion'
 
/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
 
const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}
 
const imageUpFirst = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.5 },
  },
}
 
const imageUpSecond = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.9 },
  },
}
 
export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-black
        min-h-[85vh] md:min-h-[70vh] lg:min-h-screen
        flex items-center pt-20 md:pt-16 lg:pt-32
      "
    >
      {/* Background */}
      <Image
        src="/images/bg-1.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
 
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-8 lg:py-4"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
 
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            className="text-white text-center lg:text-left"
          >
            <motion.h1
              variants={itemUp}
              className="text-3xl md:text-4xl lg:text-[27px] font-normal leading-tight"
            >
              BETTER DIRECTIONS. EASIER NAVIGATION
            </motion.h1>
 
            <motion.p
              variants={itemUp}
              className="mt-6 max-w-2xl text-base leading-tight tracking-[1px]"
            >
              Are you tired of wasting time explaining your location? Download Yonn.
            </motion.p>
 
            <motion.p
              variants={itemUp}
              className="mt-4 max-w-xl text-base leading-relaxed tracking-[1px]"
            >
               Let&apos;s face it – our cities are hard to navigate and not using
                             street addresses makes it even harder. With Yonn, generate a
                            location code wherever you are and share it securely. What&apos;s
                             more? You can add pictures and voice notes to make sure no-one
                             gets lost… this time!
            </motion.p>
 
            {/* Buttons */}
            <motion.div
              variants={itemUp}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-1"
            >
              <button className="group flex items-center gap-1 rounded-lg bg-white px-8 py-3 text-base md:text-lg font-medium text-[#660066] border border-white transition-all hover:bg-transparent hover:text-white">
                <FaApple className="text-2xl group-hover:text-white" />
                Apple Store
              </button>
 
              <button className="group flex items-center gap-1 rounded-lg bg-white px-8 py-3 text-base md:text-lg font-medium text-[#660066] border border-white transition-all hover:bg-transparent hover:text-white">
                <IoLogoAndroid className="text-2xl group-hover:text-white" />
                Play Store
              </button>
            </motion.div>
          </motion.div>
 
          {/* RIGHT PHONES — ONLY DESKTOP */}
          <div className="hidden lg:flex relative justify-end h-[600px] w-[440px] shrink-0">
            {/* Mobile 2 (Back) - Pehle yeh niche se aayega */}
            <motion.div
              variants={imageUpFirst}
              initial="hidden"
              animate="show"
              className="absolute -left-4 top-0 z-10 scale-90"
            >
              <Image
                src="/images/mobile2.png"
                alt="Mobile 2"
                width={280}
                height={560}
              />
            </motion.div>
 
            {/* Mobile 1 (Front) - Baad mein yeh niche se aayega */}
            <motion.div
              variants={imageUpSecond}
              initial="hidden"
              animate="show"
              className="absolute -right-2 top-6 z-20 scale-80"
            >
              <Image
                src="/images/mobile1.png"
                alt="Mobile 1"
                width={280}
                height={580}
              />
            </motion.div>
          </div>
 
        </div>
      </motion.div>
    </section>
  )
}