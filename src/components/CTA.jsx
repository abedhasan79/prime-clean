export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-500  text-center">
            <h2 className="text-blue-900 text-4xl font-bold mb-6">
                Ready for a Spotless Space?
            </h2>
            <button
                id="contact"
                className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-teal-900 text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
            >
                Book Now
            </button>
            {/* <a
                href="#contact"
                className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-200 to-teal-500 text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
            >
                Book Now
            </a> */}
        </section>
    );
}