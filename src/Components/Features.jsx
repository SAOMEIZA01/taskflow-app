import { motion } from "framer-motion";
import { Calendar, CheckCircle, Section, Users } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="text-blue-600 w-10 h-10 mb-4" />,
    title: "Organize Tasks",
    desc: "Keep your tasks neatly arranged and easily manageable in one place.",
  },
  {
    icon: <Calendar className="text-blue-500 w-10 h-10 mb-4" />,
    title: "Set Deadlines",
    desc: "Stay on track with clear deadlines and reminders that keep you accountable.",
  },
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-4" />,
    title: "Collaborate Easily",
    desc: "Work with your team effortlessly and achieve goals together.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-white text-center" id="features">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-10"
      >
        Why Choose TaskFlow?
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
