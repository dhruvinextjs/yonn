"use client";

import { motion } from "framer-motion";

const bannerAnim = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function Terms() {
  return (
    <section className="w-full">
      {/* Banner */}
      <div
        className="relative w-full h-[55vh] md:h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/download-bg.png')" }}
      >
        <motion.h1
          variants={bannerAnim}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-white text-center uppercase
                     text-3xl"
        >
          Terms & Conditions
        </motion.h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <p className="mb-8 text-[15px] md:text-base">
          You are currently on the Yonn mobile application. The application is
          published and managed by Yonn Digital, a sole proprietorship
          registered with the Dakar Trade Registry under number SN DKR 2023 A
          7469, with its registered office at Hamo Grand Yoff Villa n°K/15
          Dakar, Senegal, which can be contacted at the following email address:{" "}
          admin@yonnapp.com. This mobile application is subject to Senegalese
          law.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg mb-2">
              Legal representative, director, and person responsible for the
              publication
            </h3>
            <p className="text-[15px] md:text-base">
              The legal representative and director of publication is Mrs. DIOUF
              FATOU MATY MANDAW, domiciled at the aforementioned address. Any
              claim or notification should be addressed to the email address{" "}
              admin@yonnapp.com.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">Hosting</h3>
            <p className="text-[15px] md:text-base">
              This application is hosted by the company AWS Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
