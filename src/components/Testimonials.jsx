import { motion } from "framer-motion";
import { Reveal } from "./Reaveal";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      role: "Homeowner - Halifax",
      text: "Prime Clean completely transformed our home. Professional, detailed, and reliable every time.",
    },
    {
      name: "Daniel R.",
      role: "Office Manager - Dartmouth",
      text: "Our office has never looked better. They operate like a high-end service company.",
    },
    {
      name: "Emily T.",
      role: "Airbnb Host",
      text: "Flawless cleaning between guests. They helped increase our 5-star reviews.",
    },
  ];

  return (
    <section id="reviews" className="py-28 bg-gradient-to-r from-blue-400 to-teal-400 text-blue-700">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <Reveal>
          <h2 className="text-blue-900 text-4xl md:text-5xl font-bold mb-16">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <Reveal key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl"
              >
                <div className="flex justify-center mb-4 text-yellow-400 text-xl">
                  ★★★★★
                </div>

                <p className="text-gray-700 mb-6">
                  "{review.text}"
                </p>

                <h4 className="font-semibold text-lg">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {review.role}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}