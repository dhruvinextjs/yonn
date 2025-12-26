"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoLogoAndroid } from "react-icons/io";

const featureAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const bounceDrop = {
  hidden: { opacity: 0, y: -180 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function DownloadFR() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-28"
      style={{ backgroundImage: "url('/images/download-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(19,66,92,0.5)]"></div>

      <div className="relative container mx-auto px-6 text-center text-white">
        {/* Heading */}
        <motion.h2
          className="text-xl uppercase lg:text-2xl font-light mb-12"
          variants={featureAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          TÉLÉCHARGER L&apos;APPLICATION
          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="w-15 h-[1px] mt-4 bg-gray-300"></span>
              <span className="w-2.5 h-2.5 bg-[#660066] rotate-45"></span>
              <span className="w-15 h-[1px] mt-4 bg-gray-300"></span>
            </div>

            <div className="relative w-6 h-3 -mt-1">
              <span className="absolute left-1/2 bottom-0 w-[1px] h-3 bg-gray-300 -rotate-45 origin-bottom"></span>
              <span className="absolute left-1/2 bottom-0 w-[1px] h-3 bg-gray-300 rotate-45 origin-bottom"></span>
            </div>
          </div>
        </motion.h2>

        {/* Store Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={bounceDrop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 90, // kam stiffness = heavy object
            damping: 10, // kam damping = bounce zyada
            mass: 1.2, // thoda weight feel
          }}
        >
          <Link
            href="https://apps.apple.com/us/app/yonn/id6446113149"
            target="_blank"
            className="flex items-center justify-center gap-1 px-14 py-6 text-white bg-[#660066] text-3xl font-bold hover:bg-transparent hover:border hover:border-white transition duration-300"
          >
            <FaApple className="text-3xl" />
            App Store
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.appideas.yonn"
            target="_blank"
            className="flex items-center justify-center gap-1 px-14 py-6 text-white bg-[#660066] text-3xl font-bold hover:bg-transparent hover:border hover:border-white transition duration-300"
          >
            <IoLogoAndroid className="text-3xl" />
            Play Store
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
