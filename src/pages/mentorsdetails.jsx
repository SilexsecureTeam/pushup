import React from "react";
import { Check, MessageCircle, Phone, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentorProfile() {
  return (
    <>
      <Navbar />

    
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Meet Our Mentors
          </h1>
        </div>
      </section>

   
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          
          <div className="space-y-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10">
              <img
                src="/mentor-5.png"
                alt="Lola Ahmed"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <span className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Senior Digital Marketing Strategist
                </span>
                <h2 className="text-3xl font-bold text-white mt-3">Lola Ahmed</h2>
              </div>
            </div>

           
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Bio</h3>
              <p className="text-gray-700 mb-8 italic">
                "Guiding digital marketers to create impactful campaigns that drive growth and engagement."
              </p>

              <div className="space-y-5 text-gray-700">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Check className="text-green-600" size={20} />
                  </div>
                  <div>
                    <strong>Experience</strong><br />
                    12+ Years
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Check className="text-green-600" size={20} />
                  </div>
                  <div>
                    <strong>Industries</strong><br />
                    Fintech, SaaS, E-commerce
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Check className="text-green-600" size={20} />
                  </div>
                  <div>
                    <strong>Availability</strong><br />
                    Chat, Video Calls
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl font-bold text-lg mt-10 transition">
                Request Mentorship
              </button>
              <button className="w-full border-2 border-green-600 text-green-600 py-4 rounded-xl font-bold mt-4 hover:bg-green-50 transition">
                Send a Message
              </button>
            </div>
          </div>

          
          <div className="md:col-span-2 space-y-12">
           
            <div className="border-b-2 border-gray-200">
              <div className="flex gap-10 text-lg font-medium">
                <button className="pb-4 border-b-4 border-green-600 text-green-600">About</button>
                <button className="pb-4 text-gray-500 hover:text-gray-900">Expertise</button>
                <button className="pb-4 text-gray-500 hover:text-gray-900">Achievements</button>
              </div>
            </div>

            
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Victor is a seasoned career mentor who helps young professionals navigate career transitions, 
                develop leadership skills, and break into policy and governance roles. She blends strategic guidance 
                with practical steps to help mentees grow with clarity and confidence.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Key Skills</h4>
                  <ul className="space-y-3">
                    {["SEO & SEM", "Social Media Marketing", "Email Marketing & Automation", "Analytics & Performance Tracking"].map((skill) => (
                      <li key={skill} className="flex items-center gap-3">
                        <Check className="text-green-600" size={20} />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Mentoring Areas</h4>
                  <ul className="space-y-3">
                    {["Career Guidance", "Strategy and Execution", "Portfolio & Skills"].map((area) => (
                      <li key={area} className="flex items-center gap-3">
                        <Check className="text-green-600" size={20} />
                        <span className="text-gray-700">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Certifications</h3>
              <div className="space-y-4">
                {["Google Ads Certified", "Google Ads Certified"].map((cert, i) => (
                  <div key={i} className="bg-gray-100 rounded-2xl p-6 flex items-center gap-6">
                    <div className="bg-green-600 text-white p-4 rounded-xl">
                      <div className="w-10 h-10 bg-white/20 rounded" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{cert}</h4>
                      <p className="text-gray-600">Google, 2022</p>
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
              Get in <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              We’d love to hear from you! Whether you have questions, feedback, or want to get involved, 
              reach out to us through any of the channels below.
            </p>

            <form className="space-y-6">
              <input type="text" placeholder="Name" className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none" />
              <input type="tel" placeholder="Phone number" className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:border-green-600 focus:outline-none" />
              <select className="w-full px-6 py-5 rounded-lg border border-gray-300 focus:outline-none">
                <option>How did you find us?</option>
              </select>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg font-bold text-lg transition">
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
            <img src="/contact-person.jpg" alt="Contact" className="rounded-3xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}