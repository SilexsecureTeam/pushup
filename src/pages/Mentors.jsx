import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";   
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Mentors() {
  return (
    <>
      <Navbar />

   
   <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <img
    src="/mentors-bg.png"
    alt="Meet Our Mentors background"
    className="absolute inset-0 w-full h-full object-cover animate-kenBurns"
  />
  <div className="absolute inset-0 bg-black/60 animate-fadeIn" />
  <div className="relative z-10 text-center px-6 sm:px-10 md:px-12 max-w-6xl mx-auto">
    <div className="animate-slideUpAndFade">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-tight">
        Meet Our Mentors
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed">
        Connect with experienced mentors dedicated to helping you grow your skills, 
        navigate your career, and unlock new opportunities.
      </p>
    </div>
  </div>
</section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#358307] mb-6">
            Meet Our Mentors
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-[#333333] mb-16 max-w-5xl  mx-auto">
            We're proud to have a diverse team of experienced professionals committed 
            to guiding you on your growth journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { name: "Victor Okafor", title: "Google Analytics Advisor" },
              { name: "Victor Okafor", title: "Google Analytics Advisor" },
              { name: "Victor Okafor", title: "Google Analytics Advisor" },
              { name: "Victor Okafor", title: "Google Analytics Advisor" },
              { name: "Lola Ahmed",     title: "Google Analytics Advisor" },
              { name: "Victor Okafor", title: "Google Analytics Advisor" },
            ].map((mentor, i) => (
              <Link
                key={i}
                to="/mentorsdetails"   
                className="block"
              >
                <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={`/mentor-${i + 1}.png`}
                      alt={mentor.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-6">
                      <div className="px-6">
                        <span className="inline-block bg-[#622737] text-white text-xs px-4 py-2 rounded-md mb-3">
                          {mentor.title}
                        </span>
                        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-[#ecfce6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl text-black font-bold mb-6">
              Get in <span className="text-[#358307]">Touch</span>
            </h2>
            <p className="text-xl text-[#333333] mb-10">
              We'd love to hear from you! Whether you have questions, feedback, or want to get involved, 
              reach out to us through any of the channels below.
            </p>

            <form className="space-y-8">
              {["Name", "Email", "Phone number"].map((label) => (
                <div key={label} className="relative">
                  <input
                    type={label.includes("Email") ? "email" : label.includes("Phone") ? "tel" : "text"}
                    required
                    placeholder=" "
                    className="peer w-full px-6 py-5 rounded-lg bg-white border border-white/20 focus:border-green-400 focus:outline-none placeholder-transparent"
                  />
                  <label className="absolute left-6 top-1/2 -translate-y-1/2 text-[#333333] pointer-events-none transition-all duration-200
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:-translate-y-1/2
                    peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-400
                    peer-valid:top-0 peer-valid:text-xs">
                    {label} <span className="text-red-500">*</span>
                  </label>
                </div>
              ))}

              <select className="w-full px-6 py-5 rounded-lg bg-white border border-gray-300 text-[#333333] focus:border-green-400 focus:outline-none">
                <option value="" disabled selected>How did you find us?</option>
                <option>Google</option>
                <option>Friend</option>
                <option>Social Media</option>
              </select>

              <button className="w-full bg-[#334209] hover:bg-green-500 text-white py-6 rounded-lg font-bold text-lg transition">
                SEND
              </button>
            </form>

            <div className="flex flex-wrap gap-8 mt-10 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" size={24} />
                <span>+234 5432 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-600" size={24} />
                <span>+234 5432 1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-600" size={24} />
                <span>info@marcc.com.au</span>
              </div>
            
            </div>
          </div>

          <div>
            <img src="/contact-person.png" alt="Contact" className="rounded-3xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}