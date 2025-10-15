import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6 transition-colors duration-300"
    id="home">
        <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
        className='text-5xl font-bold mb-4'
        >
            TaskFlow
        </motion.h1>

        <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-lg max-w-md mb-8'
        >
            Organize your tasks. Stay productive. Achieve your goals effectively. 
        </motion.p>

        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='bg-white text-gray-600 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-100 transition'
        >
            Get Started
        </motion.button>
    </section>
  )
}

export default Hero