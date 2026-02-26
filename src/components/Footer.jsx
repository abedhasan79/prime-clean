import { Reveal } from "./Reaveal";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full  text-white pt-24 pb-10">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400"></div>

      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <div className="grid md:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
                Prime Clean Nova Scotia
              </h3>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Premium residential & commercial cleaning services across Nova Scotia.
                We deliver spotless results with unmatched professionalism.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-teal-400 transition cursor-pointer">Residential Cleaning</li>
                <li className="hover:text-teal-400 transition cursor-pointer">Commercial Cleaning</li>
                <li className="hover:text-teal-400 transition cursor-pointer">Deep Cleaning</li>
                <li className="hover:text-teal-400 transition cursor-pointer">Move-In / Move-Out</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-blue-400 transition cursor-pointer">About Us</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Testimonials</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Careers</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>

              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-center justify-center gap-3">
                  <Phone size={18} className="text-teal-400" />
                  <span>(902) 123-4567</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Mail size={18} className="text-blue-400" />
                  <span>info@primecleanns.ca</span>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <MapPin size={18} className="text-teal-400" />
                  <span>Halifax, Nova Scotia</span>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Prime Clean Nova Scotia. All rights reserved.
        </div>

      </div>
    </footer>
  );
}