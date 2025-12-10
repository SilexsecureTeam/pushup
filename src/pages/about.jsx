import React from "react";
import { ArrowRight, CheckCircle2, Users, Lightbulb, Sparkles, Heart, Globe, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      
      <section className="relative h-screen">
        <img src="/about-bg.png" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-4xl leading-relaxed">
            We're building a more informed, skilled, and empowered Nigeria through credible civic information, 
            meaningful learning, and community-driven mentorship.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E6A00] mb-6">
              Our Story<br />
              <span className="text-[#333333] text-4xl">The Journey Behind Pushup.ng</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              pushup.ng was created with a simple but powerful mission: to help Nigerians access credible governance information, 
              learn relevant skills, and grow through meaningful mentorship.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              What started as a small idea — making civic engagement easier — has grown into a trusted hub where people can watch government 
              events live, build career-ready skills, and connect with mentors who care about their growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We believe real progress happens when learning, leadership, and community come together. 
              Every feature on Pushup.ng is designed to empower individuals, strengthen institutions, and inspire positive change across Nigeria.
            </p>
            <a href="#" className="inline-flex items-center gap-3 bg-[#1E6A00] text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition">
              Explore Pushup.ng 
            </a>
          </div>
          <div>
            <img src="/woman.png" alt="Our Story" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-extrabold text-[#333333]">20,000+</h3>
            <p className="text-gray-600 mt-2">Active Learners</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-[#333333]">120+</h3>
            <p className="text-gray-600 mt-2">Mentors</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-[#333333]">500+</h3>
            <p className="text-gray-600 mt-2">Resources</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-[#333333]">98.5</h3>
            <p className="text-gray-600 mt-2">User Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/lightbulb.png" alt="Our Vision" className="rounded-2xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#358307] mb-6">
              Our Vision<br />
              <span className="text-[#333333] text-3xl">The Future We're Building</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our vision is to build a Nigeria where access to knowledge, mentorship, and transparent governance is not a privilege but a 
              standard for everyone. We imagine a society where citizens are empowered with the information they need to participate confidently 
              in civic life; where young people can learn in-demand skills from trusted experts, and where creators, leaders, and institutions 
              can share insights that move the country forward.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Pushup.ng aims to be the bridge that connects people to opportunities, mentors to learners, and leaders to the next generation 
              of informed, skilled, and community-driven Nigerians.
            </p>
            <a href="#" className="inline-flex items-center gap-3 bg-[#1E6A00] text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition">
              Explore Pushup.ng 
            </a>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#358307] mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 mb-16">The principles that guide everything we do</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#358307] text-white p-8 rounded-3xl shadow-xl">
              <CheckCircle2 size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p>Clear, credible information that helps citizens stay informed and confident in what they consume.</p>
            </div>
            <div className="bg-[#622737] text-white p-8 rounded-3xl shadow-xl">
              <Sparkles size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p>Tools, skills, and opportunities that enable individuals to grow personally, professionally, and civically.</p>
            </div>
            <div className="bg-[#358307] text-white p-8 rounded-3xl shadow-xl">
              <Users size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p>A collaborative environment where learners, mentors, and citizens support one another.</p>
            </div>
            <div className="bg-[#622737] text-white p-8 rounded-3xl shadow-xl">
              <Heart size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p>Clear, credible information that helps citizens stay informed and confident in what they consume.</p>
            </div>
            <div className="bg-[#358307] text-white p-8 rounded-3xl shadow-xl">
              <Lightbulb size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p>Modern technology and forward-thinking solutions that improve how Nigerians learn and engage.</p>
            </div>
            <div className="bg-[#622737] text-white p-8 rounded-3xl shadow-xl">
              <Globe size={48} className="mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p>High-quality experiences in learning, mentorship, and media delivery across the platform.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#358307] mb-4">Our Team</h3>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16">
            Meet the People Building Pushup.ng
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group">
               <img 
  src={`/team-${i === 8 ? 1 : i}.png`}   
  alt="Team Member" 
  className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition" 
/>
                <h3 className="mt-6 font-bold text-lg">Jessie Hassan</h3>
                <p className="text-gray-600">jessie.hassan@team.pushup.ng</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-[#ecfce6] text-white">
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
      
            <div className="flex flex-wrap justify-center gap-10 mt-12 text-black">
              <div className="flex items-center gap-4">
                <Phone className="text-black" size={28} />
                <div>
                  <p className="text-sm opacity-70">PHONE</p>
                  <p className="text-lg font-medium text-[#334209]">+2343 5432 1234</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-black" size={28} />
                <div>
                  <p className="text-sm opacity-70">WHATSAPP</p>
                  <p className="text-lg font-medium text-[#334209]">+2343 5432 1234</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-black" size={28} />
                <div>
                  <p className="text-sm opacity-70">EMAIL</p>
                  <p className="text-lg font-medium text-[#334209]">info@marcc.com.au</p>
                </div>
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