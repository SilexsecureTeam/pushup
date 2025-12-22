import React from "react";
import { Search, MessageCircle, Eye, ThumbsUp, ArrowRight, Plus, Check, ChevronDown, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Forum() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome to the Forum
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                A space where Nigerians connect, learn, ask questions, share insights, and get support on governance, skills, and mentorship.
              </p>
            </div>

            <button className="bg-[#1E6A00] hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition text-sm whitespace-nowrap">
              Start a conversation
            </button>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
           
            {/* Main Content */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
             
              {/* Pagination Top */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button 
                      key={n} 
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                        n === 1 ? "bg-[#1E6A00] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition text-gray-700">25</button>
                  <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition text-gray-700">
                    Next &gt;
                  </button>
                </div>
                
                <div className="flex items-center gap-3 flex-wrap w-full sm:w-auto">
                  <span className="text-xs text-gray-500 whitespace-nowrap">1-50 of 1,250</span>
                  <button className="px-3 py-1.5 border border-gray-300 rounded-md text-xs font-medium hover:bg-gray-50 transition flex items-center gap-2">
                    SORT <ChevronDown size={14} />
                  </button>
                  <button className="px-3 py-1.5 border border-gray-300 rounded-md text-xs font-medium hover:bg-gray-50 transition flex items-center gap-2">
                    FILTER BY <ChevronDown size={14} />
                  </button>
                </div>
              </div>

              {/* Forum Posts */}
              <div className="space-y-3">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                      Understanding New Civic Policies — October 2025
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">
                      Posted by <span className="font-semibold">PolicyTeam</span> — 2.1k views — Latest reply Sunday 4:20 PM
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                      <span className="flex items-center gap-1.5">
                        <MessageCircle size={14} /> 156k
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Eye size={14} /> 10k
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ThumbsUp size={14} /> 1k
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          M
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-xs">Mayokun Obi</p>
                          <p className="text-xs text-gray-500">Last reply Nov 5</p>
                        </div>
                      </div>
                      <div className="bg-green-600 text-white w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold">
                        Ω
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Bottom */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                <div className="flex items-center gap-2 flex-wrap">
                  <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition text-gray-700">
                    Back
                  </button>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button 
                      key={n} 
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                        n === 1 ? "bg-[#1E6A00] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition text-gray-700">25</button>
                  <button className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition text-gray-700">
                    Next &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
             
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search the community"
                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 text-sm bg-white"
                />
              </div>

              {/* Browse by Topic */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <User size={18} className="text-gray-700" />
                  <span className="text-base font-bold text-gray-900">Browse by topic</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 -mx-2 cursor-pointer transition">
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={16} />
                      <span className="text-sm text-gray-700">Welcome to the forum</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">600</span>
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 -mx-2 cursor-pointer transition">
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={16} />
                      <span className="text-sm text-gray-700">Forum resources</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">10</span>
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 -mx-2 cursor-pointer transition">
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={16} />
                      <span className="text-sm text-gray-700">What's new at Pushup.ng</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">30</span>
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 -mx-2 cursor-pointer transition">
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={16} />
                      <span className="text-sm text-gray-700">Getting started with Pushup.ng</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">60</span>
                  </div>
                </div>
              </div>

              {/* Popular Contributors */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-base font-bold text-gray-900 mb-3">Popular Contributors</h3>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  <button className="bg-[#1E6A00] text-white px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">Week</button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-xs hover:bg-gray-200 transition whitespace-nowrap">Month</button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-xs hover:bg-gray-200 transition whitespace-nowrap">Year</button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-xs hover:bg-gray-200 transition whitespace-nowrap">All Time</button>
                </div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <img
                        src="/avarta.png"
                        alt="Contributor"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">Amaka</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                          <span className="bg-gray-100 px-2 py-0.5 rounded">300</span>
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