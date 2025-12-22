import React, { useState } from "react";
import { Search, PlayCircle, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  
  const allVideos = [
    { id: 1, title: "Nigeria's Budget 2026 Explained", duration: "18 minutes", date: "1 day ago", views: "8.7K", category: "Government Events" },
    { id: 2, title: "How to Build a Successful Career in Tech", duration: "25 minutes", date: "2 days ago", views: "12.3K", category: "Mentorship" },
    { id: 3, title: "Understanding Civic Rights in Nigeria", duration: "15 minutes", date: "3 days ago", views: "6.2K", category: "Government Events" },
    { id: 4, title: "Digital Marketing Masterclass 2025", duration: "45 minutes", date: "1 week ago", views: "25.1K", category: "Learning" },
    
  ].concat([...Array(12)].map((_, i) => ({
    id: 5 + i,
    title: "Nigeria's Budget 2026 Explained",
    duration: "18 minutes",
    date: "1 day ago",
    views: "8.7K",
    category: ["Government Events", "Press Briefings", "Community Stories"][i % 3]
  })));

  
  const filteredVideos = allVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "All" || video.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const filterButtons = ["All", "Government Events", "Mentorship", "Press Briefings", "Community Stories"];

  return (
    <>
      <Navbar />

      
      <section className="pt-40 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#333333] mb-4">
            Featured Videos
          </h1>
       <p className="text-2xl text-[#333333] max-w-4xl mb-12">
  Watch curated videos on governance, learning, and community insights.<br />
  Explore content that keeps you informed, skilled, and engaged.
</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search videos by title or host"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-gray-300 focus:border-green-600 focus:outline-none text-lg"
              />
            </div>
            <button className="bg-gradient-to-r from-[#358307] to-[#334209] hover:from-[#2d6d06] hover:to-[#2d3a08] text-white px-12 py-5 rounded-md font-bold transition shadow-lg">
              Search
            </button>
          </div>

          
          <div className="flex flex-wrap gap-4">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-8 py-3 rounded-md font-medium transition ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-[#358307] to-[#334209] text-white shadow-lg"
                    : "bg-[#edffe2] text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filteredVideos.length === 0 ? (
            <p className="text-center text-2xl text-gray-500 py-20">No videos found matching your search.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {filteredVideos.map((video, i) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="flex gap-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative flex-shrink-0 w-48 h-48 overflow-hidden rounded-l-3xl">
                      <img
                        src={`/video-${(i % 3) + 1}.png`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <PlayCircle size={56} className="text-white drop-shadow-2xl" />
                      </div>
                    </div>
                    <div className="flex-1 py-6 pr-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {video.duration} • {video.date}<br />
                        <span className="font-medium">{video.views} views</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        
          <div className="mt-20 text-center">
            <button className="bg-gradient-to-r from-[#358307] to-[#334209] hover:from-[#2d6d06] hover:to-[#2d3a08] text-white px-20 py-5 rounded-md font-bold text-xl flex items-center gap-4 mx-auto transition shadow-lg hover:shadow-2xl">
              NEXT <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}