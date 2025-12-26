"use client";

import Image from "next/image";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";

/* animations */
const headingAnim = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const leftAnim = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0 },
};

const rightAnim = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0 },
};

const phoneAnim = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

export default function FeaturesFR() {
  return (
    <section className="benifits py-24 overflow-x-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="uppercase text-2xl font-light text-gray-700 mb-1">
            Fonctionnalités
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
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="benefits-left space-y-12 text-center lg:text-right"
          >
            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Générez votre code
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:ml-auto">
                  Partagez votre localisation simplement en donnant votre Code Yonn
                </p>
              </div>

              <div className="bl-icon relative translate-x-4 lg:translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointLeft className="text-white text-sm" />
              </div>
            </div>

            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Naviguez plus facilement
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:ml-auto">
                  Parfois, nous avons besoin de plus qu&apos;une adresse, trouvez votre chemin avec des photos et des notes vocales pré-enregistrées
                </p>
              </div>

              <div className="bl-icon relative translate-x-4 lg:translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointLeft className="text-white text-sm" />
              </div>
            </div>

            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end gap-4">
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                  Enregistrer vos emplacements
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:ml-auto">
                  Enregistrez vos emplacements favoris sur l&apos;application
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
                 Aidez vos clients à savoir où vous trouver en générant le Yonn Code de votre entreprise. Vous pouvez lier vos plateformes de médias sociaux, ajouter les images de vos produits et bien plus encore
                </p>
              </div>
            </div>

            <div className="feature group flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <div className="br-icon relative -translate-x-4 lg:-translate-x-6 w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center group-hover:bg-[#660066]">
                <FaRegHandPointRight className="text-white text-sm" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#660066]">
                 Utiliser Google Maps
                </h3>
                <p className="text-medium text-gray-600 max-w-xs mx-auto lg:mx-0">
                  Vous voulez vérifier l&apos;itinéraire ou l&apos;embouteillage? Yonn vous connecte à Google Maps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
