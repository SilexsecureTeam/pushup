import React from "react";
import { Check, MessageCircle, Phone, Mail, Briefcase, Building2, Video, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentorProfile() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1E6A00] mb-4">
            Meet Our Mentors
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          
          <div className="space-y-10">
           
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              <img
                src="/mentor-5.png"
                alt="Lola Ahmed"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <span className="inline-block bg-[#622737] text-white px-4 py-2 text-sm font-bold rounded">
                  Senior Digital Marketing Strategist
                </span>
                <h2 className="text-4xl font-bold text-white mt-3">Lola Ahmed</h2>
              </div>
            </div>

          
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Bio</h3>
              <p className="text-gray-600 mb-8 italic text-lg">
                "Guiding digital marketers to create impactful campaigns that drive growth and engagement."
              </p>

              <div className="space-y-6 text-gray-700">
                {[
                  { icon: Briefcase, label: "Experience", value: "12+ Years" },
                  { icon: Building2, label: "Industries", value: "Fintech, SaaS, E-commerce" },
                  { icon: Video, label: "Availability", value: "Chat, Video Calls" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white border-2 border-green-600 p-3 rounded-2xl flex-shrink-0">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <strong className="text-gray-900">{item.label}</strong><br />
                      <span className="text-gray-700">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#1E6A00] hover:bg-green-800 text-white py-5 rounded-xl font-bold text-lg mt-10 transition shadow-md">
                Request Mentorship
              </button>
              <button className="w-full border-2 border-[#1E6A00] text-green-700 py-4 rounded-xl font-bold mt-4 hover:bg-green-50 transition">
                Send a Message
              </button>
            </div>
          </div>

          
          <div className="md:col-span-2 space-y-12">
           
            <div className="border-b-2 border-gray-200">
              <div className="flex gap-10 text-lg font-medium">
                <button className="pb-4 text-green-600 relative">
                  About
                  <span className="absolute -bottom-0.5 left-0 w-16 h-0.5 bg-green-600"></span>
                </button>
                <button className="pb-4 text-gray-500 hover:text-gray-900 transition">Expertise</button>
                <button className="pb-4 text-gray-500 hover:text-gray-900 transition">Achievements</button>
              </div>
            </div>

           
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Lola is a seasoned career mentor who helps young professionals navigate career transitions, 
                develop leadership skills, and break into policy and governance roles. She blends strategic guidance 
                with practical steps to help mentees grow with clarity and confidence.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Key Skills</h4>
                  <ul className="space-y-4">
                    {["SEO & SEM", "Social Media Marketing", "Email Marketing & Automation", "Analytics & Performance Tracking"].map((skill) => (
                      <li key={skill} className="flex items-center gap-4">
                        <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                          <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Mentoring Areas</h4>
                  <ul className="space-y-4">
                    {["Career Guidance", "Strategy and Execution", "Portfolio & Skills"].map((area) => (
                      <li key={area} className="flex items-center gap-4">
                        <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                          <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  { name: "Google Ads Certified", year: "Google, 2022" },
                  { name: "Google Ads Certified", year: "Google, 2022" }
                ].map((cert, i) => (
                  <div key={i} className="bg-gray-100 rounded-3xl p-6 flex items-center gap-6 border border-green-200">
                    <div className="bg-[#1E6A00] p-4 rounded-2xl">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{cert.name}</h4>
                      <p className="text-gray-600">{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-[#1E6A00]">Touch</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10">
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
            <img src="/contact-person.png" alt="Contact" className="rounded-3xl shadow-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}