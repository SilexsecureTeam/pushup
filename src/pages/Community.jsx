import React from "react";
import { Search, ArrowRight, MessageCircle, Eye, BookOpen, Globe, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Community() {
  return (
    <>
      <Navbar />

    <section className="relative h-screen pt-20">
  <img
    src="/community-bg.png"
    alt="Community"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-12 lg:px-20 text-white max-w-7xl mx-auto">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 leading-tight text-left">
      Find Answers. Connect. Grow.
    </h1>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-full sm:max-w-2xl lg:max-w-3xl">
      <div className="relative flex-1">
        <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search the community"
          className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-4 sm:py-5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white text-base sm:text-lg"
        />
      </div>
      <button className="bg-[#1E6A00] hover:bg-green-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition text-base sm:text-lg whitespace-nowrap">
        Search 
      </button>
    </div>
  </div>
</section>

<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
      
      {/* Main Content */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">Browse by topic</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
            { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
            { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
            { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
            { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
            { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
            { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
            { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
            { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
            { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
            { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
            { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
            { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
            { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
            { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
          ].map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:border-green-600 transition cursor-pointer shadow-sm hover:shadow-md">
              <div className="inline-flex p-3 sm:p-4 rounded-xl bg-green-100 text-green-600 mb-4 sm:mb-6">
                <topic.icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{topic.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{topic.desc}</p>
              <p className="text-green-600 font-semibold text-sm sm:text-base">{topic.posts}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        
        {/* News */}
        <div className="bg-green-50 rounded-2xl sm:rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">News</h3>
          <ul className="space-y-3 sm:space-y-4 text-[#334209] text-xl sm:text-base">
            <li>• New civic learning track launching next week</li>
            <li>• Call for volunteer community moderators</li>
            <li>• Call for volunteer community moderators</li>
          </ul>
        </div>

        {/* Recently solved */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-200">
          <h3 className="text-lg sm:text-3xl font-bold text-[#333333] mb-4 sm:mb-6">Recently solved</h3>
          <div className="space-y-4 sm:space-y-5">
            {[
              "Best beginner courses for digital skills?",
              "Best beginner courses for digital skills?",
              "Best beginner courses for digital skills?",
              "Best beginner courses for digital skills?"
            ].map((q, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <p className="text-xl sm:text-sm text-[#333333] pr-3 sm:pr-4 line-clamp-2">{q}</p>
                <div className="flex items-center gap-2 sm:gap-4 text-gray-500 text-xs whitespace-nowrap">
                  <span className="flex items-center gap-1"><Eye size={14} className="sm:w-4 sm:h-4" /> 50</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} className="sm:w-4 sm:h-4" /> 30</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200">
          <h3 className="text-lg sm:text-3xl font-bold text-[#333333]  mb-4 sm:mb-6">Featured</h3>
          <div className="space-y-4 sm:space-y-5">
            {[
              "How to check your polling unit online",
              "Fixing login issues on Pushup.ng",
              "Troubleshooting video loading issues",
              "How to improve your CV for mentorship"
            ].map((q, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <p className="text-xl sm:text-sm text-[#333333] pr-3 sm:pr-4 line-clamp-2">{q}</p>
                <div className="flex items-center gap-2 sm:gap-4 text-[#333333] text-2xl whitespace-nowrap">
                  <span className="flex items-center gap-1"><Eye size={14} className="sm:w-4 sm:h-4" /> 50</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} className="sm:w-4 sm:h-4" /> 30</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Contributors */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
            <h3 className="text-lg sm:text-2xl font-bold text-[#333333]">Popular Contributors</h3>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {["Week", "Month", "Year", "All Time"].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xl sm:text-sm font-medium transition whitespace-nowrap ${
                    tab === "Week"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

         <div className="space-y-4 sm:space-y-6">
  {[1, 2, 3, 4].map((num) => (
    <div key={num} className="flex items-center gap-3 sm:gap-4">
      <img
        src={`/avarta.png`}
        alt="Contributor"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
      />
      <div>
        <h4 className="font-bold text-gray-900 text-sm sm:text-base">Amaka</h4>
        <div className="flex items-center gap-2 mt-1">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-base sm:text-lg font-bold text-gray-900">300</span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>

      </div>
    </div>
  </div>
</section>
    <Footer />
    </>
  );
}