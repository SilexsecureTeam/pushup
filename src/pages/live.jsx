import React from "react";
import { Search, Play, Bell, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/ooter";

export default function LiveStreams() {
  return (
    <>
      <Navbar />

      
      <section className="pt-40 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Live Streams
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Watch live streams and upcoming official broadcasts from government agencies and community leaders across Nigeria.
          </p>

          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search streams by title or host"
                className="w-full pl-16 pr-6 py-5 rounded-md border border-gray-300 focus:outline-none focus:border-green-600 text-lg"
              />
            </div>
            <button className="bg-gradient-to-r from-[#358307]  to-[#334209] hover:bg-green-700 text-white px-12 py-5 rounded-md font-bold flex items-center justify-center gap-3 transition">
              Search 
            </button>
          </div>

        
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#358307]  to-[#334209] text-white px-8 py-3 rounded-md font-bold">See All</button>
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition">
              Government Events
            </button>
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition">
              Public Hearings
            </button>
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition">
              Press Briefings
            </button>
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition">
              Community Sessions
            </button>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { live: true, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Started 15 mins ago", button: "Watch Now", icon: Play },
              { live: false, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Today, 4:00 PM", button: "Set Reminder", icon: Bell },
              { live: false, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Today, 4:00 PM", button: "Set Reminder", icon: Bell },
              { live: false, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Today, 4:00 PM", button: "Set Reminder", icon: Bell },
              { live: true, title: "The EndSARS Weekly Briefing", host: "The Presidency", time: "Started 15 mins ago", button: "Watch Now", icon: Play },
              { live: false, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Today, 4:00 PM", button: "Set Reminder", icon: Bell },
              { live: true, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Started 15 mins ago", button: "Watch Now", icon: Play },
              { live: false, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Today, 4:00 PM", button: "Set Reminder", icon: Bell },
              { live: false, title: "The Presidency Weekly Briefing", host: "The Presidency", time: "Today, 4:00 PM", button: "Set Reminder", icon: Bell },
            ].map((stream, i) => (
              <div
                key={i}
                className="bg-[#eeecec] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={`/stream${(i % 6) + 1}.png`}
                    alt={stream.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full font-bold text-white ${stream.live ? "bg-[#C40E08]" : "bg-[#622737]"}`}>
                    {stream.live ? "LIVE" : "UPCOMING" }
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stream.title}</h3>
                  <p className="text-gray-600 mb-4">{stream.host}</p>
                  <p className="text-sm text-gray-500 mb-6">{stream.time}</p>
                  <button className="w-full bg-gradient-to-r from-[#358307]  to-[#334209] hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition">
                    {stream.button === "Watch Now" ? <Play size={20} /> : <Bell size={20} />}
                    {stream.button}
                  </button>
                </div>
              </div>
            ))}
          </div>

      
          <div className="mt-20 text-center">
            <button className="bg-gradient-to-r from-[#358307]  to-[#334209] hover:bg-green-700 text-white px-20 py-5 rounded-md font-bold text-xl flex items-center gap-4 mx-auto transition">
              NEXT <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}