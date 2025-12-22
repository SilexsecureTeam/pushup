import React from "react";
import {Link} from 'react-router-dom';
import { Search, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Learning() {
  return (
    <>
      <Navbar />

      
      <section className="relative h-screen">
        <img
          src="/learning-bg.png"
          alt="Courses"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Courses</h1>
          <p className="text-xl md:text-2xl max-w-4xl leading-relaxed">
            Explore practical courses designed to help you grow in career, leadership, and community engagement.
          </p>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E6A00] mb-4">
            Learn & Grow
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-6">
            The Journey Behind Pushup.ng
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Build real skills with practical courses designed to help you level up in your career, business, and personal development.
          </p>

         
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto mb-20">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Enter Course"
                className="w-full pl-16 pr-6 py-5 rounded-md border-2 border-gray-300 focus:border-green-600 focus:outline-none text-lg"
              />
            </div>
            <button className="bg-[#1E6A00] hover:bg-green-700 text-white px-12 py-5 rounded-md font-bold text-lg flex items-center gap-3 transition">
              Search  
            </button>
          </div>

        
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <img
                  src={`/course-${(i % 3) + 1}.png`}
                  alt="Course"
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="font-medium">8 Weeks</span>
                    <span>•</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      Intermediate
                    </span>
                    <span className="ml-auto font-medium">By David Chucks</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3">
                    Content Marketing
                  </h3>
                  <p className="text-gray-600 mb-8 line-clamp-3">
                    What is Content Marketing? Content marketing is simply the creation and sharing of online material such as videos, blogs, and social media posts with the intention...
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#1E6A00] to-[#334209] hover:bg-green-700 text-white py-4 rounded-lg font-bold transition">
                    Get this Course
                  </button>
                </div>
              </div>
            ))}
          </div>

        
         <div className="mt-20">
  <Link 
    to="/Topicdetails"
    className="bg-gradient-to-r from-[#1E6A00] to-[#334209] hover:bg-green-700 text-white px-16 py-5 rounded-md font-bold text-xl flex items-center gap-4 mx-auto transition w-fit"
  >
    NEXT <ChevronRight size={28} />
  </Link>
</div>
        </div>
      </section>

      <Footer />
    </>
  );
}