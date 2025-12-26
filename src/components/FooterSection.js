// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function FooterSection() {
//   return (
//     <footer className="py-[50px] bg-gradient-to-b from-[#660066] to-black">
//       <div className="container mx-auto px-6">
//         <div className="text-center text-white">

//           {/* Logo */}
//           <h4 className="text-[30px] mb-5 flex justify-center">
//             <Image
//               src="/images/white_logo.svg"
//               alt="Logo"
//               width={160}
//               height={60}
//               className="object-contain"
//             />
//           </h4>

//           {/* Copyright */}
//           <p className="text-[16px] font-light mb-5">
//             Copyright © 2025 - All rights reserved
//           </p>

//           {/* Social Icons */}
//           <ul className="flex justify-center items-center gap-8">

//             <li>
//               <Link
//                 href="#"
//                 className="text-white text-lg transition duration-500 hover:text-[#660066]"
//               >
//                 <FaInstagram />
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="#"
//                 className="text-white text-lg transition duration-500 hover:text-[#660066]"
//               >
//                 <FaLinkedinIn />
//               </Link>
//             </li>
//           </ul>

//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FooterSection() {
  return (
    <footer className="py-[50px] bg-gradient-to-b from-[#660066] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Logo */}
          <h4 className="text-[30px] mb-5 flex justify-center">
            <Image
              src="/images/white_logo.svg"
              alt="Logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </h4>

          {/* Copyright */}
          <p className="text-[16px] font-light mb-5">
            Copyright © 2025 - All rights reserved
          </p>

          {/* Social Icons */}
          <ul className="flex justify-center items-center gap-8">
            <li>
              <Link
                href="https://www.instagram.com/yonn.sn/"
                target="_blank"
                className="text-white text-lg transition duration-500 hover:text-[#660066]"
              >
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/company/yonnapp/"
                className="text-white text-lg transition duration-500 hover:text-[#660066]"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}
