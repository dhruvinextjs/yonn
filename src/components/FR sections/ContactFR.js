"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const containerAnim = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // one by one delay
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactFR() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact py-24" id="contact">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl lg:text-2xl font-light uppercase text-gray-800">
            NOUS CONTACTER
          </h2>

          <div className="relative flex flex-col items-center mt-4">
            <div className="flex items-center gap-1">
              <span className="w-15 h-[1px] mt-2 bg-gray-300"></span>
              <span className="w-2.5 h-2.5 bg-[#660066] rotate-45"></span>
              <span className="w-15 h-[1px] mt-2 bg-gray-300"></span>
            </div>

            <div className="relative w-6 h-3 -mt-1">
              <span className="absolute left-1/2 bottom-0 w-[1px] h-3 bg-gray-300 -rotate-45 origin-bottom"></span>
              <span className="absolute left-1/2 bottom-0 w-[1px] h-3 bg-gray-300 rotate-45 origin-bottom"></span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto space-y-6 font-roboto font-light"
          variants={containerAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Name & Email */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <input
              type="text"
              placeholder="Votre nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-12 border-b-2 border-[#660066] focus:border-gray-700 outline-none"
            />

            <input
              type="email"
              placeholder="Votre e-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 border-b-2 border-[#660066] focus:border-gray-700 outline-none"
            />
          </motion.div>

          {/* Message */}
          <motion.textarea
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full h-24 border-b-2 border-[#660066] focus:border-gray-700 outline-none resize-none"
          />

          {/* Button */}
          <motion.div
            className="text-center mt-8"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <button
              type="submit"
              className="bg-[#660066] text-white text-lg sm:text-xl px-8 py-3 rounded transition duration-500 border border-[#660066] hover:bg-white hover:text-[#660066]"
            >
              Envoyer le message
            </button>
          </motion.div>
        </motion.form>

        {/* Message */}
        {formMessage && (
          <motion.div
            className="mt-12 text-center text-green-500"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {formMessage}
          </motion.div>
        )}
      </div>
    </section>
  );
}
