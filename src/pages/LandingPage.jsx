import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div className="font-sans scroll-smooth ">

            <Navbar />

            <Hero />

            <Stats />

            <Services />

            <BeforeAfter />

            <Testimonials />

            <CTA />

            <Footer />

        </div>
    );
}