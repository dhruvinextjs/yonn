"use client";
import { motion } from "framer-motion";

const bannerAnim = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* =========================
          Intro Section
      ========================== */}
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
            Privacy policy
          </motion.h1>
        </div>
  
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
           <div className="space-y-6 text-gray-600 leading-7 font-light">
            
            {/* Intro paragraphs */}
            <div className="privacy space-y-4">
              <p>
               YONN places great importance on the protection of personal data and the privacy of its users. To this end, YONN acts as the data controller and is committed to processing this personal data in accordance with applicable laws and regulations.
              </p>
              <p>
              This Privacy Policy sets out how YONN collects and processes data about you in connection with your use of our application.
              </p>

            </div>

            {/* Content */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800">
                1. WHAT IS PERSONAL DATA ?
              </h4>
              <p>
               Personal data means any information relating to an identified or identifiable natural person (referred to as the "data subject"). In the context of the "yonnapp.com" website and the "Yonn" mobile application, the data subjects are the users who create an account on the website and use the services offered. The personal data covered by this Privacy Policy is therefore all data relating to these internet users and users, to the extent that they are identified or identifiable, for example by means of the IP address of their terminal or their user account identifier.
              </p>

              <h4 className="text-lg font-semibold text-gray-800">
                2. WHAT PERSONAL DATA IS COLLECTED, FOR WHAT PURPOSES, AND ON WHAT LEGAL BASIS ?
              </h4>

              <p>YONN collects personal data about its users in the following cases, for the following purposes :</p>
              <p>Why personal data is used? Processing purposes.</p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-3"></th>
                      <th className="border p-3">What personal data is used ?</th>
                      <th className="border p-3">On what legal basis are the data processed ?</th>
                      <th className="border p-3">How long are the data stored ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">
                        Management of user account
                      </td>
                      <td className="border p-3">
                        Nom, prénom, email, téléphone, mot de passe, données de localisation
                      </td>
                      <td className="border p-3">
                        Exécution du contrat
                      </td>
                      <td className="border p-3">
                        5 ans après dernière utilisation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-800">
                3. AVEC QUI LES DONNÉES SONT-ELLES PARTAGÉES ?
              </h4>
              <p>
                Les données sont utilisées uniquement par les personnes habilitées au sein de
                YONN et ses sous-traitants.
              </p>

              <h4 className="text-lg font-semibold text-gray-800">
                5. VOS DROITS
              </h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d’accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l’effacement</li>
                <li>Droit d’opposition</li>
                <li>Droit à la portabilité</li>
              </ul>

              <p>
                Vous pouvez exercer vos droits en nous contactant à :
                <span className="font-medium"> admin@yonnapp.com</span>
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
