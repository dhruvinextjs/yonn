'use client'

import Image from 'next/image'
import { FaApple } from 'react-icons/fa'
import { IoLogoAndroid } from "react-icons/io"
import { motion } from 'framer-motion'
import Link from 'next/link'

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

export default function HeroFR() {
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
              UNE NAVIGATION PLUS FACILE
            </motion.h1>

            <motion.p
              variants={itemUp}
              className="mt-6 max-w-2xl text-base leading-tight tracking-[1px]"
            >
             Fatigués de perdre du temps à expliquer votre localisation? Téléchargez Yonn.
            </motion.p>

            <motion.p
              variants={itemUp}
              className="mt-4 max-w-xl text-base leading-relaxed tracking-[1px]"
            >
              Avouons-le, nos villes sont difficiles à naviguer et le fait de ne pas utiliser d'adresses postales rend la tâche encore plus difficile. Avec Yonn, générez un code de localisation où que vous soyez et partagez-le en toute sécurité. De plus, vous pouvez ajouter des photos et des notes vocales pour vous assurer que personne ne se perde... cette fois-ci!
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemUp}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-1"
            >
               <Link
                href={"https://apps.apple.com/us/app/yonn/id6446113149"}
                target="_blank"
              >
                <button className="group flex items-center gap-1 rounded-lg bg-white px-8 py-3 text-base md:text-lg font-medium text-[#660066] border border-white transition-all hover:bg-transparent hover:text-white">
                  <FaApple className="text-2xl group-hover:text-white" />
                  Apple Store
                </button>
              </Link>

              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.appideas.yonn"
                }
                target="_blank"
              >
                <button className="group flex items-center gap-1 rounded-lg bg-white px-8 py-3 text-base md:text-lg font-medium text-[#660066] border border-white transition-all hover:bg-transparent hover:text-white">
                  <IoLogoAndroid className="text-2xl group-hover:text-white" />
                  Play Store
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT PHONES — ONLY DESKTOP */}
          <div className="hidden lg:flex relative justify-end h-[600px] w-[440px] shrink-0">
            {/* Mobile 2 (Back) */}
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

            {/* Mobile 1 (Front) */}
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
