import React from "react";
import { Search, MessageCircle, Eye, ThumbsUp, ArrowRight, Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Forum() {
  return (
    <>
      <Navbar />

      
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                Welcome to the Forum
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                A space where Nigerians connect, learn, ask questions, share insights, and get support on governance, skills, and mentorship.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition">
                <Plus size={24} /> Start a conversation
              </button>

              <div className="flex items-center gap-3">
                <span className="text-gray-600">Browse by topic</span>
                <ArrowRight className="text-green-600" size={20} />
              </div>
            </div>
          </div>

          
          <div className="grid lg:grid-cols-4 gap-10">
           
            <div className="lg:col-span-3">
             
              <div className="relative mb-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                <input
                  type="text"
                  placeholder="Search the community"
                  className="w-full pl-16 pr-6 py-5 rounded-full border border-gray-300 focus:outline-none focus:border-green-600 text-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gray-100 rounded-lg">&lt; Back</button>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <button key={n} className={`px-4 py-2 rounded-lg ${n === 1 ? "bg-green-600 text-white" : "bg-gray-100"}`}>
                        {n}
                      </button>
                    ))}
                    <span className="px-4 py-2">...</span>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg">25</button>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 rounded-lg">Next &gt;</button>
                </div>
                <div className="text-sm text-gray-600">1–50 of 1,250</div>
                <div className="flex gap-4">
                  <select className="px-6 py-3 border border-gray-300 rounded-lg text-sm">
                    <option>SORT</option>
                  </select>
                  <select className="px-6 py-3 border border-gray-300 rounded-lg text-sm">
                    <option>FILTER BY</option>
                  </select>
                </div>
              </div>

              
              <div className="space-y-6">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Understanding New Civic Policies – October 2025
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Posted by <span className="font-medium">PolicyTeam</span> — 2.1k views — Latest reply Sunday 4:20 PM
                    </p>
                    <div className="flex items-center gap-6 text-gray-500">
                      <span className="flex items-center gap-2">
                        <MessageCircle size={20} /> 156k
                      </span>
                      <span className="flex items-center gap-2">
                        <Eye size={20} /> 10k
                      </span>
                      <span className="flex items-center gap-2">
                        <ThumbsUp size={20} /> 1k
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                          M
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Mayokun Obi</p>
                          <p className="text-sm text-gray-500">Last reply Nov 5</p>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                        Active
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gray-100 rounded-lg">&lt; Back</button>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <button key={n} className={`px-4 py-2 rounded-lg ${n === 1 ? "bg-green-600 text-white" : "bg-gray-100"}`}>
                        {n}
                      </button>
                    ))}
                    <span className="px-4 py-2">...</span>
                    <button className="px-4 py-2 bg-gray-100 rounded-lg">25</button>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 rounded-lg">Next &gt;</button>
                </div>
              </div>
            </div>

            
            <div className="space-y-8">
             
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">Welcome to the forum</span>
                  <span className="text-green-600 font-bold">600</span>
                </div>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600" size={20} />
                    <span>Forum resources</span>
                    <span className="ml-auto font-bold text-green-600">10</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600" size={20} />
                    <span>What's new at Pushup.ng</span>
                    <span className="ml-auto font-bold text-green-600">30</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="text-green-600" size={20} />
                    <span>Getting started with Pushup.ng</span>
                    <span className="ml-auto font-bold text-green-600">60</span>
                  </div>
                </div>
              </div>

            
              <div className="bg-white rounded-3xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Contributors</h3>
                <div className="flex gap-3 mb-8">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">Week</button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Month</button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">Year</button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">All Time</button>
                </div>
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">Amaka</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="bg-gray-200 px-3 py-1 rounded-full">300</span>
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