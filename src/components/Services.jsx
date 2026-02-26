import { motion } from "framer-motion";
import { Sparkles, Building2, Home } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Home size={40} />, title: "Residential Cleaning" },
    { icon: <Building2 size={40} />, title: "Commercial Cleaning" },
    { icon: <Sparkles size={40} />, title: "Deep Cleaning" },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-r from-blue-300 to-teal-300 text-blue-700">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl border border-gray-200"
            >
              <div className="text-blue-500 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}