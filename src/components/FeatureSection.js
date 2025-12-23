"use client";

import Image from "next/image";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";

/* animations */
const headingAnim = {
  hidden: { opacity: 0, y: 60 }, // more vertical movement
  visible: { opacity: 1, y: 0 },
};

const leftAnim = {
  hidden: { opacity: 0, x: -120 }, // stronger left offset
  visible: { opacity: 1, x: 0 },
};

const rightAnim = {
  hidden: { opacity: 0, x: 120 }, // stronger right offset
  visible: { opacity: 1, x: 0 },
};

const phoneAnim = {
  hidden: { opacity: 0, scale: 0.7 }, // stronger zoom-in effect
  visible: { opacity: 1, scale: 1 },
};

export default function FeatureSection() {
  return (
    <section className="benifits py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // transition={{ duration: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}

          className="text-center mb-16"
        >
          <h2 className="uppercase text-2xl font-light text-gray-700 mb-1">
            Features
          </h2>

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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 items-center">
          {/* LEFT FEATURES */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // transition={{ duration: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="benefits-left space-y-12 text-center lg:text-right"
          >
            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Generate Your Code
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:ml-auto">
                  Instead of long instructions, simply share your location by
                  giving out your Yonn Code
                </p>
              </div>

              <div className="bl-icon relative translate-x-4 lg:translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointLeft className="text-white text-sm" />
              </div>
            </div>

            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Navigate Better
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:ml-auto">
                  Sometimes, you need more than an address, find your way with
                  pictures and pre-recorded voice notes
                </p>
              </div>

              <div className="bl-icon relative translate-x-4 lg:translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointLeft className="text-white text-sm" />
              </div>
            </div>

            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Save Locations
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:ml-auto">
                  Save your favourite locations, for quick access
                </p>
              </div>

              <div className="bl-icon relative translate-x-4 lg:translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointLeft className="text-white text-sm" />
              </div>
            </div>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            variants={phoneAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // transition={{ duration: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="relative flex justify-center my-12 lg:my-0"
          >
            <Image
              src="/images/phone.png"
              alt="App Mockup"
              width={200}
              height={500}
              className="mx-auto"
            />
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // transition={{ duration: 0.7 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="benefits-right space-y-12 text-center lg:text-left"
          >
            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <div className="br-icon relative -translate-x-4 lg:-translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointRight className="text-white text-sm" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Yonn Business
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:mx-0">
                  Make it easier for customers to know where to find you by
                  generating your business Yonn Code. You can link your social
                  media platforms, add product images and much more
                </p>
              </div>
            </div>

            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <div className="br-icon relative -translate-x-4 lg:-translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointRight className="text-white text-sm" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Use Google Maps
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:mx-0">
                  Want to check the itinerary or traffic? Yonn connects you to
                  Google Maps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
