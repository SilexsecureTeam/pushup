import React from "react";
import { Search, ArrowRight, MessageCircle, Eye, BookOpen, Globe, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Community() {
  return (
    <>
      <Navbar />

      
      <section className="relative h-screen">
        <img
          src="/community-bg.png"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            Find Answers.<br />Connect. Grow.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl w-full mt-10">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search the community"
                className="w-full pl-16 pr-6 py-5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white text-lg"
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition">
              Search <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">

          
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Browse by topic</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
                { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
                { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
                { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
    { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
    { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
    { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
    { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
    { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
    { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
    { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
    { icon: Globe, title: "Civic & Governance", desc: "Guides on elections, citizenship, public policy, and government processes.", posts: "1100 Posts" },
    { icon: Users, title: "Mentorship & Career", desc: "Talk to mentors, get career advice, portfolio feedback, or discuss job paths.", posts: "600 Posts" },
    { icon: BookOpen, title: "Learning & Skills", desc: "Questions about courses, skill development, tutors, and study resources.", posts: "600 Posts" },
             ].map((topic, i) => (
                <div key={i} className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-green-600 transition cursor-pointer">
                  <div className="inline-flex p-4 rounded-xl bg-green-100 text-green-600 mb-6">
                    <topic.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{topic.desc}</p>
                  <p className="text-green-600 font-bold">{topic.posts}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">News</h3>
              <ul className="space-y-4 text-gray-700">
                <li>• New civic learning track launching next week</li>
                <li>• Call for volunteer community moderators</li>
                <li>• Call for volunteer community moderators</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recently solved</h3>
              <div className="space-y-5">
                {[
                  "Best beginner courses for digital skills?",
                  "Best beginner courses for digital skills?",
                  "Best beginner courses for digital skills?",
                  "Best beginner courses for digital skills?"
                ].map((q, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                    <p className="text-sm text-gray-700 pr-4 line-clamp-2">{q}</p>
                    <div className="flex items-center gap-4 text-gray-500 text-xs whitespace-nowrap">
                      <span className="flex items-center gap-1"><Eye size={16} /> 50</span>
                      <span className="flex items-center gap-1"><MessageCircle size={16} /> 30</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Featured</h3>
              <div className="space-y-5">
                {[
                  "How to check your polling unit online",
                  "Fixing login issues on Pushup.ng",
                  "Troubleshooting video loading issues",
                  "How to improve your CV for mentorship"
                ].map((q, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <p className="text-sm text-gray-700 pr-4 line-clamp-2">{q}</p>
                    <div className="flex items-center gap-4 text-gray-500 text-xs whitespace-nowrap">
                      <span className="flex items-center gap-1"><Eye size={16} /> 50</span>
                      <span className="flex items-center gap-1"><MessageCircle size={16} /> 30</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg  border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">Popular Contributors</h3>
                <div className="flex gap-2">
                  {["Week", "Month", "Year", "All Time"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
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

              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <img
                      src={`/avarta${i + 1}.jpg`}
                      alt="Contributor"
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">Amaka</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-lg font-bold text-gray-900">300</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}