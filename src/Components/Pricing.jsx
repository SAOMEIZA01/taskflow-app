import React from 'react';
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Up to 5 projects",
      "Basic task tracking",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9/month",
    features: [
      "Unlimited projects",
      "Advanced task management",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Team",
    price: "$29/month",
    features: [
      "Team collaboration tools",
      "Unlimited storage",
      "Dedicated account manager",
    ],
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section className='bg-gray-50 py-16 px-6 text-center' id="pricing">
      <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='text-3xl font-bold text-gray-800 mb-10'
      >
        Plans & Pricing
      </motion.h2>
      <div className='grid md:grid-cols-3 max-w-6xl mx-auto'>
        {plans.map((plan, index) => (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className={`rounded-2xl shadow-lg p-8 transition transform m-3 hover:translate-y-2 ${plan.highlight
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-102'
            : 'bg-white text-gray-800'
          }`}
          key={index}
          >
            <h3 className='text-2xl font-semiblod mb-2'>{plan.name}</h3>
            <p className={`text-4xl font-bold mb-6 ${!plan.highlight? 'text-blue-600': ''}`}>{plan.price}</p>
            <ul className='space-y-3 mb-6'>
              {plan.features.map((feature, i) => (
                <li key={i} className='text-sm'>
                  ✔ {feature}
                </li>
              ))}
            </ul>
            <button
            className={`w-full py-3 rounded-full font-semibold transition ${plan.highlight
              ? 'bg-white text-blue-600 hover:bg-gray-100'
              : 'bg-blue text-white hover:bg-blue-700'
            }`}
            >
              Get started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing