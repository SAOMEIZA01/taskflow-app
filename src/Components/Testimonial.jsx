import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "A'ishah Abdurrozzaaq",
    role: "UI/UX Designer",
    text: "TaskFlow completely changed how I manage my projects. I feel more organized and less stressed!",
  },
  {
    name: "S.A Omeiza (Mannaan)",
    role: "Software Developer",
    text: "TaskFlow is a total game-changer. It helps me manage my time effectively, and I've become more productive and organized. I also love its smooth, elegant animations!",
  },
  {
    name: "Faatimah Abdulloh",
    role: "Student",
    text: "I love how clean and simple TaskFlow is. It keeps me motivated to stay on top of my schoolwork.",
  },
  /*{
    name: "Abdurrohman Muhammad",
    role: "Team Lead",
    text: "Our team collaboration improved drastically after switching to TaskFlow. It's so easy to use!",
  },
  {
    name: "Muslimah Nasrulloh",
    role: "Entrepreneur",
    text: "TaskFlow keeps my business activities well-organized. It saves me hours every week and helps me focus on what truly matters.",
  },
  {
    name: "Ahmad Swolih",
    role: "Product Manager",
    text: "With TaskFlow, tracking progress and assigning tasks has never been easier. It's intuitive, reliable, and beautifully designed."
  }, */
]

const Testimonial = () => {
  return (
    <section className='bg-white py-16 px-6 text-center' id="testimonials">
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='text-3xl font-bold text-gray-800 mb-10'
      >
        What Our Users Say
      </motion.h2>
      <motion.div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {testimonials.map((user, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className='bg-gray-50 shadow-md rounded-2xl p-8'
          >
            <p className='text-gray-600 italic mb-6'>“{user.text}”</p>
            <h3 className='text-lg font-semibold text-blue-600'>{user.name}</h3>
            <p className='text-sm text-gray-500'>{user.role}</p>
          </motion.div>
          
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonial