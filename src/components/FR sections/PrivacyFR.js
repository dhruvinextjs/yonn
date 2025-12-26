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
            POLITIQUE DE CONFIDENTIALITÉ
          </motion.h1>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
          <div className="space-y-6 text-gray-600 leading-7 font-light">
            {/* Intro paragraphs */}
            <div className="privacy space-y-4">
              <p>
                YONN attache une grande importance à la protection des données à
                caractère personnel et de la vie privée de ses utilisateurs. A
                cette fin, YONN agit en tant que responsable du traitement et
                s&apos;engage à procéder aux traitements de ces données à caractère
                personnel conformément aux lois et réglementations applicables.
              </p>
              <p>
                La présente Politique de Confidentialité expose la manière dont
                YONN collecte et traite des données vous concernant dans le
                cadre de votre utilisation de notre application.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800">
                1. QU&apos;EST-CE QU&apos;UNE DONNEE A CARACTERE PERSONNEL ?
              </h4>
              <p>
                Les données à caractère personnel désignent toutes informations
                se rapportant à une personne physique identifiée ou identifiable
                (appelée « personne concernée »). Dans le cadre du site web «
                yonnapp.com» et l&apos;application mobile « Yonn », les personnes
                concernées sont les utilisateurs créant un compte sur le site
                web et utilisant les services proposés. Les données à caractère
                personnel concernées par la présente Politique de
                Confidentialité sont donc toutes données se rapportant à ces
                internautes et utilisateurs, dans la mesure où ils sont
                identifiés ou identifiables, par exemple au moyen de l&apos;adresse
                IP de leur terminal ou de leur identifiant de compte
                utilisateur.
              </p>

              <h4 className="text-lg font-semibold text-gray-800">
                2. QUELLES DONNÉES À CARACTÈRE PERSONNEL SONT COLLECTÉES, POUR
                QUELLES FINALITÉS, ET SUR QUELLE BASE LÉGALE ?
              </h4>

              <p>
                YONN collecte des données à caractère personnel concernant ses
                utilisateurs dans les cas suivants, pour les finalités suivantes
                :
              </p>
              <p>
                Pourquoi personnelles sont utilisées ? Finalités de traitement
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-3"></th>
                      <th className="border p-3">
                        Quelles sont les données personnelles utilisées ?
                      </th>
                      <th className="border p-3">
                        Sur quelle base légale les données sont-elles traitées ?
                      </th>
                      <th className="border p-3">
                        Combien de temps les données sont-elles conservées ?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">Management of user account</td>
                      <td className="border p-3">
                        Nom, prénom, email, téléphone, mot de passe, données de
                        localisation
                      </td>
                      <td className="border p-3">Exécution du contrat</td>
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
                Les données sont utilisées uniquement par les personnes
                habilitées au sein de YONN et ses sous-traitants.
              </p>

              <h4 className="text-lg font-semibold text-gray-800">
                5. VOS DROITS
              </h4>

              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d&apos;accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit d&apos;opposition</li>
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
