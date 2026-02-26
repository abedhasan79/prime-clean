import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="py-20 bg-white text-center bg-gradient-to-r from-blue-200 to-teal-200">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-5xl font-bold text-blue-600">
            {inView && <CountUp end={500} duration={3} />}+
          </h3>
          <p className="mt-3 text-gray-600">Homes Cleaned</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-teal-600">
            {inView && <CountUp end={98} duration={3} />}%
          </h3>
          <p className="mt-3 text-gray-600">Customer Satisfaction</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-blue-600">
            {inView && <CountUp end={7} duration={3} />}+
          </h3>
          <p className="mt-3 text-gray-600">Years Experience</p>
        </div>

      </div>
    </section>
  );
}