"use client";

import { motion } from "framer-motion";

const bannerAnim = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsFR() {
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
          YONN - MENTIONS LÉGALES
        </motion.h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <p className="mb-8 text-[15px] md:text-base">
         Vous êtes actuellement sur l&apos;application mobile Yonn. L&apos;application est éditée et gérée par Yonn Digital, entreprise individuelle immatriculée au registre de commerce de Dakar sous le numéro SN DKR 2023 A 7469, ayant son siège social au Hamo Grand Yoff Villa n°K/15 Dakar, Senegal joignable à l&apos;adresse électronique suivante : admin@yonnapp.com. La présente application mobile est soumise à la loi sénégalaise.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg mb-2">
             Représentant légal et directeur et responsable de la publication :
            </h3>
            <p className="text-[15px] md:text-base">
              Le représentant légal et le directeur de publication est Madame DIOUF FATOU MATY MANDAW domiciliée à l’adresse susmentionnée. Toute réclamation ou notification doit être adressée à l’adresse email admin@yonnapp.com.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">Hébergement :</h3>
            <p className="text-[15px] md:text-base">
             La présente application est hébergée par la société GoDaddy Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
