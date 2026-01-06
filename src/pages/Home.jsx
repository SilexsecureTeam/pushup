import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  BrainCircuit,
  Users,
  ShieldCheck,
  SlidersHorizontal,
  Eye,
  Heart,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Week");
  const [currentIndex, setCurrentIndex] = useState(0);


const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev === liveEvents.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? liveEvents.length - 1 : prev - 1
  );
};

  const features = [
    { icon: PlayCircle, color: "bg-[#1E6A00]", title: "Streaming", desc: "Watch civic events live" },
    { icon: BrainCircuit, color: "bg-[#EF2955]", title: "Learning", desc: "Browse Courses" },
    { icon: Users, color: "bg-[#334209]", title: "Mentorship", desc: "Connect with mentors" },
    { icon: ShieldCheck, color: "bg-[#622737]", title: "Trust & Authority", desc: "Verified content only" },
  ];

  const liveEvents = [
    { tag: "GOVERNANCE", tagBg: "bg-[#1E6A00] text-white", title: "Policy Debate in Nigeria", host: "ken benjamin", img: "/live1.png", cardBg: "bg-[#d3e4cd]" },
    { tag: "LIFESTYLE", tagBg: "bg-[#1E6A00] text-white", title: "Morning Routines that work", host: "Benita Ojo", img: "/live2.png", cardBg: "bg-[#d3e4cd]" },
  ];

  const videos = [
    { img: "/video-1.png", title: "Nigeria's Budget 2026 Explained", meta: "18 minutes", category: "Governance" },
    { img: "/video-2.png", title: "Leadership in Crisis", meta: "8.7K views", category: "Leadership" },
    { img: "/video-3.png", title: "Mentorship Stories from Experts", meta: "12 minutes", category: "Mentorship" },
    { img: "/video-4.png", title: "Governance Reforms in Nigeria", meta: "10K views", category: "Governance" },
    { img: "/video-1.png", title: "Building Strong Leaders", meta: "15 minutes", category: "Leadership" },
    { img: "/video-3.png", title: "Mentor-Student Success Stories", meta: "9.2K views", category: "Mentorship" },
  ];
const courses = [
    { img: "/course-1.png", author: "David Chucks", title: "Content Marketing", weeks: "8 Weeks • Intermediate", desc: "What is Content Marketing? Content marketing is the process of creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and ultimately drive profitable customer action. Blogs, videos, social media posts, and podcasts are all examples of content marketing in action." },
    { img: "/course-2.png", author: "David Chucks", title: "Content Marketing", weeks: "8 Weeks • Intermediate", desc: "What is Content Marketing? Content marketing is the process of creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and ultimately drive profitable customer action. Blogs, videos, social media posts, and podcasts are all examples of content marketing in action." },
    { img: "/course-3.png", author: "David Chucks", title: "Content Marketing", weeks: "8 Weeks • Intermediate", desc: "What is Content Marketing? Content marketing is the process of creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and ultimately drive profitable customer action. Blogs, videos, social media posts, and podcasts are all examples of content marketing in action." },
  ];

  const communityStories = [
    { img: "/story-1.png", tag: "Civic Engagement", date: "October 18, 2025", title: "Empowering Local Voices to Shape Better Communities", desc: "Grassroots volunteers across different regions are coming together to co-create solutions on safety, sanitation, and youth development. See how community-driven action is making real impact.", views: "156K", likes: "10K", comments: "89" },
    { img: "/story-2.png", tag: "Mentorship", date: "October 18, 2025", title: "How Policy Mentors Are Guiding the Next Generation of Public Leaders", views: "156K", likes: "10K" },
    { img: "/story-3.png", tag: "Mentorship", date: "October 18, 2025", title: "How Policy Mentors Are Guiding the Next Generation of Public Leaders", views: "156K", likes: "10K" },
  ];

  const testimonials = [
    { img: "/story1.png", name: "Amara E", role: "Community Manager", quote: "This platform has completely changed how I learn and grow. The mentors are incredibly supportive..." },
    { img: "/story2.png", name: "David C", role: "Community Leader", quote: "This platform has completely changed how I lead and grow..." },
  ];

  const insights = [
    { img: "/insight-1.png", title: "The Rise of Civic Tech in Africa", authorImg: "/avarta.png", author: "Joanna Wale", date: "June 28, 2018", shares: "1K", desc: "How digital tools are transforming governance, accountability, and citizen participation across the continent." },
    { img: "/insight-2.png", title: "The Rise of Civic Tech in Africa", authorImg: "/avarta.png", author: "Joanna Wale", date: "June 28, 2018", shares: "1K", desc: "How digital tools are transforming governance, accountability, and citizen participation across the continent." },
    { img: "/insight-3.png", title: "The Rise of Civic Tech in Africa", authorImg: "/avarta.png", author: "Joanna Wale", date: "June 28, 2018", shares: "1K", desc: "How digital tools are transforming governance, accountability, and citizen participation across the continent." },
  ];


  // Filter state for videos
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredVideos = videos.filter((v) => {
    if (activeFilter === "All") return true;
    return v.category === activeFilter;
  });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen pt-16 md:pt-20 overflow-hidden flex items-center justify-center">
        <img
          src="/homebg.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover animate-kenBurns"
        />
        <div className="absolute inset-0 bg-black/50 animate-fadeIn" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-slideUpAndFade">
  <h1 className="font-bold text-white leading-tight tracking-tight">
  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
    Empowering Nigerians
  </span>
  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
    Through Learning and Civic
  </span>
  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
    Insight
  </span>
</h1>
          </div>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-green/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              {features.map((f, i) => (
                <div
                  key={i}
                  onClick={() => console.log(`Clicked on ${f.title}`)}
                  className="flex items-center gap-3 sm:gap-4 cursor-pointer group transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <div className={`${f.color} p-4 sm:p-5 rounded-xl flex-shrink-0`}>
                    <f.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg text-white">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-white">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="py-12 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
          Live Now & Upcoming
        </h2>
        <p className="text-gray-600 mt-2">
          Live streams, courses, mentors, and more.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-500">
          <SlidersHorizontal size={18} /> Filter
        </button>
        <Link
          to="/Live"
          className="font-semibold flex items-center gap-2 text-[#1E6A00]"
        >
          See All <ArrowRight size={18} />
        </Link>
      </div>
    </div>

   
    <div className="relative">
      {/* Left Arrow  */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 
                   items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl 
                   border-2 border-[#1E6A00] hover:bg-gray-50 transition"
        aria-label="Previous event"
      >
        <ArrowLeft className="w-6 h-6 text-[#1E6A00]" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {liveEvents.map((event, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 px-0 lg:px-4" 
            >
              <div className="bg-[#d3e4cd] rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
  {/* Text Part*/}
  <div className="p-6 md:p-8 flex-1 order-2 lg:order-1">
    <span className={`inline-block ${event.tagBg} px-4 py-2 text-sm font-bold rounded mb-4`}>
      {event.tag}
    </span>
    <h3 className="text-xl md:text-2xl font-bold mb-4">
      {event.title}
    </h3>
    <div className="flex flex-wrap gap-6 text-gray-700 text-sm">
      <span className="flex items-center gap-2">
        <Eye size={18} /> Watch now
      </span>
      <span className="flex items-center gap-2">
        <Users size={18} /> {event.host}
      </span>
    </div>
  </div>

  {/* Image Part - Second on mobile */}
  <div className="relative lg:w-1/2 aspect-video order-1 lg:order-2">
    <img
      src={event.img}
      alt={event.title}
      className="w-full h-full object-cover"
    />
    <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold flex items-center gap-2">
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      LIVE
    </span>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 
                   items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl 
                   border-2 border-[#1E6A00] hover:bg-gray-50 transition"
        aria-label="Next event"
      >
        <ArrowRight className="w-6 h-6 text-[#1E6A00]" />
      </button>

     
      <div className="flex justify-center gap-6 mt-4 lg:hidden">
        <button
          onClick={prevSlide}
          className="p-3 border-2 border-[#1E6A00] rounded-lg hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 border-2 border-[#1E6A00] rounded-lg hover:bg-gray-100 transition"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</section>

   

      {/* About */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#334209] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative inline-block pb-3 sm:pb-4">
              About PushUp.ng
              <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-white rounded-full"></span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-4 sm:mb-6">Empowering Learning, Mentorship, and Civic Engagement</p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              PushUp.ng is Africa's premier digital hub for learning, mentorship, civic engagement, and professional streaming.
              Our platform empowers individuals, organizations, and communities to access high-quality multimedia content, connect with mentors,
              and engage in meaningful civic discussions — all in one seamless digital experience.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
              From live events and on-demand videos to online courses and mentorship programs, PushUp.ng is designed to inspire growth, foster learning, 
              and facilitate connections. Citizens and policymakers can stay informed through our governance media hub, while professionals and students can
              access verified mentors and skill-building resources.
            </p>
            <button className="bg-white text-[#333333] px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:bg-gray-100">Learn more</button>
          </div>
          <img src="/image1.png" alt="About" className="rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover" />
        </div>
      </section>

     <section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
  <div>
    <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-[#333333]">Most Viewed Videos</h2>
    <p className="text-[#333333] mt-2 text-3xl sm:text-base md:text-lg">
      Discover governance insights, leadership talks, mentorship stories, and expert lessons — available on demand.
    </p>
  </div>
  
  {/* Fixed Filter Section */}
  <div className="flex items-center gap-4 sm:gap-4 w-full lg:w-auto">
    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-[#333333] font-medium px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 bg-white text-sm sm:text-base whitespace-nowrap">
      <a 
        href="Videos" 
        onClick={() => setActiveFilter("All")}
        className={`cursor-pointer px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full transition font-bold ${
          activeFilter === "All"
            ? "bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white"
            : "hover:bg-gray-100"
        }`}
      >
        See All
      </a>
      {["Governance", "Leadership", "Mentorship"].map((filter) => (
        <span
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`cursor-pointer transition ${
            activeFilter === filter
              ? "font-bold text-black"
              : "hover:text-black"
          }`}
        >
          {filter}
        </span>
      ))}
    </div>
  </div>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
  {filteredVideos.map((v, i) => (
    <div 
  key={i} 
  className="group flex flex-row items-start gap-4 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer h-[180px]"
>
  <div className="flex-shrink-0 w-52 sm:w-60 md:w-72">
    <div className="relative overflow-hidden aspect-video rounded-l-xl sm:rounded-l-2xl">
      <img 
        src={v.img} 
        alt={v.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
    </div>
  </div>

  <div className="flex-1 py-4 pr-5">
    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2">
      {v.title}
    </h4>
    <p className="text-sm sm:text-base text-gray-600 mb-1">
      {v.meta}
    </p>
    <p className="text-sm sm:text-base text-gray-500">
      1 day ago
    </p>
  </div>
</div>
  ))}

    </div>
  </div>
</section>

      {/* Governance Media Hub */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#d3e4cd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start mb-8 sm:mb-10 lg:mb-12">
            <div className="text-[#333333]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block pb-3 sm:pb-4">
                Governance Media Hub
                <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-[#1E6A00] rounded-full"></span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Policy & Public Affairs</h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                The Governance Media Hub gives users a front-row seat to the nation's most important civic moments. 
                From parliamentary sessions and national addresses to policy debates and public forums, this space is designed 
                to help citizens stay informed, engaged, and empowered.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
                Every video is carefully curated and verified, offering clear insight into decisions, reforms, and discussions 
                shaping Nigeria's future. Whether you're a student, professional, policymaker, or simply a curious citizen, 
                the Governance Hub brings transparency closer — helping you understand how governance works, why it matters, 
                and how it impacts your everyday life.
              </p>
              <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-green-800 transition">
                Learn more
              </button>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assembly.png" 
                alt="National Assembly Budget Presentation 2026" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                  National Assembly Budget Presentation 2026
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm md:text-base">
                  <span className="flex items-center gap-2 font-semibold">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></span> Live Now
                  </span>
                  <span className="opacity-90">Nov 20, 2025 10:00AM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              >
                <img 
                  src={`/governance${i}.png`} 
                  alt={`Governance event ${i}`} 
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Courses */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative inline-block pb-3 sm:pb-4">
            Explore Courses That Transform
            <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-green-600 rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            Explore a wide range of expert-led courses designed to help you build practical skills and deepen your understanding of key topics.
            From governance and leadership to digital marketing and personal development, each lesson is crafted to support your growth at every level.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                <img src={c.img} alt="Course" className="w-full h-48 sm:h-56 md:h-64 object-cover" />
                <div className="p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-[#333333] mb-3 sm:mb-4">{c.weeks} • By {c.author}</p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{c.title}</h3>
                  <p className="text-sm sm:text-base text-[#333333] mb-4 sm:mb-6 line-clamp-3">{c.desc}</p>
                 <Link 
  to="/Learning" 
  className="block w-full"
>
  <button className="w-full bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white py-3 sm:py-4 rounded-lg font-bold hover:bg-green-700 text-sm sm:text-base transition">
    Get This Course
  </button>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative inline-block pb-3 sm:pb-4">
              Mentors Who Guide
              <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-[#1E6A00] rounded-full"></span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-[#333333]">Empowering Learning, Mentorship, and Civic Engagement</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333] mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              Our mentorship network connects you with experienced professionals, industry leaders, and subject-matter experts who are committed
              to helping you grow. Whether you're seeking career direction, skill development, or clarity on your next step, these mentors bring real-world insight and actionable guidance. Explore profiles, book sessions, and start learning directly from people who've walked the path you're on
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#333333] mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              Every mentor in our network is carefully selected for their expertise, dedication, and ability to provide meaningful guidance. From one-on-one consultations to group sessions and career workshops, you can access personalized support growth...
            </p>
            <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-md font-semibold text-base sm:text-lg md:text-xl hover:bg-green-700">
              Start your journey today
            </button>
          </div>
          <img src="/mentor.png" alt="Mentors" className="rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover" />
        </div>
      </section>
      {/* Join Our Community */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative inline-block pb-3 sm:pb-4">
            Join Our Community
            <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-[#1E6A00] rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 text-[#333333]">
            Discover what people are talking about, learn from shared experiences, and stay connected.
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              <img
                src={communityStories[0].img}
                alt="Story"
                className="w-full h-full min-h-[500px] sm:min-h-[600px] object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white">
                <span className="bg-[#622737] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm">{communityStories[0].tag}</span>
                <span className="text-xs sm:text-sm opacity-90">{communityStories[0].date}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 leading-tight">
                  {communityStories[0].title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10 md:mb-20 opacity-90 leading-relaxed">
                  {communityStories[0].desc}
                </p>
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-white/80 mb-6 sm:mb-10 md:mb-20 lg:mb-40 text-sm sm:text-base">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Eye size={16} className="sm:w-5 sm:h-5" /> {communityStories[0].views}
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Heart size={16} className="sm:w-5 sm:h-5" /> {communityStories[0].likes}
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <MessageCircle size={16} className="sm:w-5 sm:h-5" /> {communityStories[0].comments}
                  </span>
                </div>
                <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md font-bold hover:bg-green-700 transition text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {communityStories.slice(1).map((s, i) => (
                <div key={i} className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                  <img
                    src={s.img}
                    alt="Story"
                    className="w-full h-72 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px] object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white">
                    <span className="bg-[#622737] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm">{s.tag}</span>
                    <span className="text-xs sm:text-sm opacity-90">{s.date}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 sm:mb-4 leading-snug">
                      {s.title}
                    </h3>
                    <div className="flex items-center gap-4 sm:gap-6 text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Eye size={16} className="sm:w-5 sm:h-5" /> {s.views}
                      </span>
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Heart size={16} className="sm:w-5 sm:h-5" /> {s.likes}
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md font-bold hover:bg-green-700 transition text-sm sm:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Transformation */}
      <section className="py-12 sm:py-16 md:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative inline-block pb-3 sm:pb-4">
            Stories of Transformation
            <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-[#1E6A00] rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 text-[#333333]">Real stories, real impact, hear directly from the people we've helped</p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden flex flex-col">
                <img src={t.img} alt={t.name} className="w-full h-56 sm:h-64 md:h-80 object-cover" />
                <div className="w-full p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#333333] mb-3 sm:mb-4 leading-none">"</div>
                  <p className="text-base sm:text-lg md:text-xl italic text-[#333333] mb-4 sm:mb-6">{t.quote}</p>
                  <p className="font-bold text-base sm:text-lg">{t.name}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Stories */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative inline-block pb-3 sm:pb-4">
            Insights & Stories
            <span className="absolute bottom-0 left-0 w-24 sm:w-32 h-1.5 sm:h-2 bg-[#1E6A00] rounded-full"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-8 sm:mb-10 text-[#333333]">Discover fresh perspectives, expert insights, and real stories shaping our community</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {insights.map((ins, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-4 sm:mb-6">
                  <img src={ins.img} alt={ins.title} className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{ins.title}</h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-[#333333]">
                  <div className="flex items-center gap-2">
                    <img src={ins.authorImg} alt={ins.author} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover" />
                    <span>{ins.author}</span>
                  </div>
                  <span>-</span>
                  <span>{ins.date}</span>
                  <span>•</span>
                  <span>{ins.shares} shares</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-[#333333]">{ins.desc}</p>
                <button className="text-[#1E6A00] font-semibold text-base sm:text-lg hover:underline">View Post</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}