import React, { useState } from "react";
import {
  PlayCircle,
  BrainCircuit,
  Users,
  ShieldCheck,
  Calendar,
  Clock,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
Eye,
Heart, MessageCircle,
  Play,
  ArrowRight,
  Menu,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);

  return (
    <>
<Navbar />

<section className="h-screen w-full overflow-hidden pt-24">
  
  <img
    src="/homebg.png"
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

 
  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
    <div className="max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl mb-10">
        Empowering Nigerians<br />
        Through Learning and Civic<br />
        Insight
      </h1>
      <a
        href="#"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-green-600/50 hover:scale-105"
      >
        Explore PushUp.ng
      </a>
    </div>
  </div>

  <div className="absolute bottom-10 left-0 right-0 translate-y-1/2 z-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-transparent rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-4">
          <div className="bg-[#1E6A00] text-white p-4 rounded-xl">
            <PlayCircle size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-white">Streaming</h3>
            <p className="text-sm text-white">Watch civic events live</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#EF2955] text-white p-4 rounded-xl">
            <BrainCircuit size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-white">Learning</h3>
            <p className="text-sm text-white">Browse Courses</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#334209] text-white p-4 rounded-xl">
            <Users size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-white">Mentorship</h3>
            <p className="text-sm text-white">Connect with mentors</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#622737] text-white p-4 rounded-xl">
            <ShieldCheck size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-white">Trust & Authority</h3>
            <p className="text-sm text-white">Verified content only</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="flex justify-between items-center mb-12">
      
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 inline-block relative pb-4">
          Live Now & Upcoming
          <span className="absolute bottom-0 left-0 w-32 h-2 bg-green-600 rounded-full"></span>
        </h2>
        <p className="text-gray-600 mt-2">Live streams, courses, mentors, and more.</p>
      </div>

      <div className="flex items-center gap-6 text-xl">
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <SlidersHorizontal size={24} className="text-gray-500" />
          Filter
        </div>
        <span className="w-px h-8 bg-gray-400"></span>
        <a href="#" className="text-gray-900 font-semibold flex items-center gap-2 hover:underline">
          See All
          <ArrowRight size={24} />
        </a>
      </div>
    </div>

    
    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-grey-600 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
   
    <div className="w-full md:w-1/2  text-[#333333] flex flex-col justify-between">
      <div>
        
        <span className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-2xl mb-8">
          GOVERNANCE
        </span>
        <h3 className="text-2xl md:text-4xl font-semibold leading-tight mb-10 text-[#333333]">
          Policy Debate in<br />Nigeria
        </h3>
      </div>
      <p className="text-2xl opacity-90 flex items-center gap-4">
        Watch now
        <MessageCircle size={28} />
        @kenbenjamin
      </p>
    </div>

        
        <div className="w-full md:w-1/2 relative">
          <img
            src="/live1.png"
            alt="Policy Debate"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <span className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg">
              LIVE
            </span>
          </div>
        </div>
      </div>

    
  <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
    
    <div className="w-full md:w-1/2  text-[#333333] flex flex-col justify-between">
      <div>
      
        <span className="inline-block bg-green-600 text-white px-8 py-4 rounded-md font-semibold text-xl mb-4">
          LIFESTYLE
        </span>
        <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-10 text-[#333333]">
          Morning Routines<br />that work
        </h3>
      </div>
      <p className="text-xl opacity-90 flex items-center gap-4">
        Watch now
        <MessageCircle size={28} />
        @Benita Ojo
      </p>
    </div>

        <div className="w-full md:w-1/2 relative">
          <img
            src="/live2.png"
            alt="Morning Routines"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8">
            <span className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg">
              LIVE
            </span>
          </div>
        </div>
      </div>
    </div>
 
    <div className="flex justify-start gap-8 mt-12">
      <button className="bg-white p-6 rounded-full shadow-2xl hover:bg-gray-100 transition">
        <ChevronLeft size={48} className="text-gray-600" />
      </button>
      <button className="bg-white p-6 rounded-full shadow-2xl hover:bg-gray-100 transition">
        <ChevronRight size={48} className="text-gray-600" />
      </button>
    </div>
  </div>
</section>

     
      <section className="py-20 bg-[#334209]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            
      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 relative inline-block">
        About PushUp.ng
        <span className="absolute bottom-0 left-0 w-32 h-2 bg-white rounded-full"></span>
      </h2>

      <p className="text-2xl text-white/90 font-sm mb-8">
        Empowering Learning, Mentorship, and Civic Engagement
      </p>

      <p className="text-lg text-white/80 leading-relaxed mb-10">
        PushUp.ng is Africa's premier digital hub for learning, mentorship, civic engagement, and professional streaming. Our platform empowers individuals, organizations, and communities to access high-quality multimedia content, connect with mentors, and engage in meaningful civic discussions — all in one seamless digital experience.
      </p>

      <p className="text-lg text-white/80 leading-relaxed mb-12">
        From live events and on-demand videos to online courses and mentorship programs, PushUp.ng is designed to inspire growth, foster learning, and facilitate connections. Citizens and policymakers can stay informed through our governance media hub, while professionals and students can access verified mentors and skill-building resources.
      </p>

      <button className="bg-white text-[#333333] px-12 py-5  font-bold text-xl hover:bg-gray-100 transition shadow-lg">
        Learn more
      </button>
    </div>
          <div className="flex justify-center">
            <img src="/image1.png" alt="About PushUp.ng" className="rounded-3xl shadow-2xl w-full max-w-5xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
         <div className="flex justify-between items-center mb-10">
  <div>
    <h2 className="text-4xl font-bold">Most Viewed Videos</h2>
    <p className="text-lg text-gray-600 mt-2">
      Discover governance insights, leadership talks,<br />
      mentorship stories, and expert lessons — available on demand.
    </p>
  </div>

  <div className="flex items-center gap-10  border border-gray-600 rounded-full px-6 py-4">
    <a href="#" className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-8 py-3  font-bold text-lg hover:bg-green-700 transition">
      See All
    </a>
    <div className="flex gap-10 text-[#333333] text-lg font-medium">
      <span className="hover:text-black cursor-pointer transition">Governance</span>
      <span className="hover:text-black cursor-pointer transition">Leadership</span>
      <span className="hover:text-black cursor-pointer transition">Mentorship</span>
    </div>
  </div>
</div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
      {[1, 2, 3, 4, 5, 6].map((i) => {
        
        const imageIndex = ((i - 1) % 4) + 1;
        
        return (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`/video-${imageIndex}.png`}  
                alt="Most Viewed Video"
                className="w-full aspect-video object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
            </div>
            <h4 className="mt-4 font-bold text-lg">Nigeria's Budget 2026 Explained</h4>
            <p className="text-sm text-gray-600">
              {i % 2 === 0 ? "18 minutes" : "8.7K views"} • 1 day ago
            </p>
          </div>
        );
      })}
          </div>
        </div>
      </section>

      
<section className="py-20 bg-[#d3e4cd]">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    
    <div className="text-white">
      <h1 className="text-2xl md:text-4xl font-semibold mb-8 leading-tight text-[#333333] relative inline-block pb-4">
  Governance Media Hub
  
  <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
</h1>
      <h2 className="text-xl font-semibold mb-6 text-[#1E6A00]">
        Policy & Public Affairs
      </h2>
      <p className="text-lg leading-relaxed text-[#333333] mb-10">
        The Governance Media Hub gives users a front-row seat to the nation's most important civic moments. 
        From parliamentary sessions and national addresses to policy debates and public forums, this space is designed 
        to help citizens stay informed, engaged, and empowered. Every video is carefully curated and verified, 
        offering clear insight into decisions, reforms, and discussions shaping Nigeria’s future. 
        Whether you're a student, professional, policymaker, or simply a curious citizen — 
        the Governance Hub brings transparency closer — helping you understand how governance works, 
        why it matters, and how it impacts your everyday life.
      </p>
      <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] hover:bg-green-800 text-white px-10 py-4 rounded-full font-bold text-lg transition">
        Learn more
      </button>
    </div>

    <div className="space-y-8">
  
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/assembly.png"
          alt="National Assembly Budget Presentation"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              National Assembly Budget Presentation 2026
            </h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                Live Now
              </span>
              <span className="text-sm opacity-90">
                Nov 20, 2025 10:00AM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={`/governance${i}.png`}
              alt="Governance event"
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-green-900 relative inline-block pb-4">
Explore Courses That Transform
  <span className="absolute bottom-0 left-0 w-32 h-2 bg-green-600 rounded-full"></span>
</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Explore a wide range of expert-led courses designed to help you build practical skills and deepen your understanding of key topics.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((c) => (
              <div key={c} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                <img src={`/course-${c}.png`} alt="Course" className="w-full h-64 object-cover" />
                <div className="p-8">
                  <p className="text-sm text-gray-500 mb-2">By David Chucks</p>
                  <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
                  <p className="text-gray-600 mb-6">
                    What is Content Marketing? Content marketing is the process of creating and distributing valuable...
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white py-4 rounded-lg font-bold hover:bg-green-700">
                    Get This Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
     
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-[#333333] relative inline-block pb-4">
          Mentors Who Guide
          <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-[#333333] mb-8">
          Empowering Learning, Mentorship, and Civic Engagement
        </p>
        
        <p className="text-xl text-[#333333] max-w-3xl mx-auto md:mx-0 mb-12 leading-relaxed">
          Our mentorship network connects you with experienced<br className="hidden md:block" />
          professionals, industry leaders, and subject-matter experts who<br className="hidden md:block" />
          are committed to helping you grow. Whether you're seeking<br className="hidden md:block" />
          career direction, skill development, or clarity on your next step,<br className="hidden md:block" />
          these mentors bring real-world insight and actionable guidance.<br className="hidden md:block" />
          Explore profiles, book sessions, and start learning directly from<br className="hidden md:block" />
          people who've walked the path you're on.<br /><br />
          
          Every mentor in our network is carefully selected for their<br className="hidden md:block" />
          expertise, dedication, and ability to provide meaningful guidance.<br className="hidden md:block" />
          From one-on-one consultations to group sessions and career<br className="hidden md:block" />
          workshops, you can access personalized support growth...
        </p>
        
        <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-green-700">
          Start your journey today
        </button>
      </div>

      <div className="flex justify-center">
        <img 
          src="/mentor.png" 
          alt="Mentors" 
         className="rounded-3xl shadow-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-cover" 
        />
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
   <h1 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-[#333333] relative inline-block pb-4">
Join the Community
  <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
</h1>
 <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Discover what people are talking about, learn from shared experiences, and stay connected.
          </p>
    <div className="grid md:grid-cols-2 gap-10">
     
      <div className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
        <img
          src="/story-1.png"
          alt="Empowering Local Voices"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

       
        <div className="absolute top-6 left-6 flex items-center gap-4 text-white">
          <span className="bg-[#622737] px-6 py-2 rounded-full font-bold text-sm">
            Civic Engagement
          </span>
          <span className="text-sm opacity-90">October 18, 2025</span>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Empowering Local Voices to Shape Better Communities
          </h3>
          <p className="text-lg mb-8 leading-relaxed opacity-90">
            Grassroots volunteers across different regions are coming together to co-create solutions on safety, sanitation, and youth development. See how community-driven action is making real impact.
          </p>
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Eye size={20} /> 156K
            </span>
            <span className="flex items-center gap-2">
              <Heart size={20} /> 10K
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={20} /> 89
            </span>
          </div>
          <button className="mt-8 bg-gradient-to-r from-[#1E6A00] to-[#334209] hover:bg-green-700 text-white px-10 py-4 rounded-md font-bold transition">
            Learn More
          </button>
        </div>
      </div>

    
      <div className="space-y-10">
        
        <div className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
          <img
            src="/story-2.png"
            alt="Policy Mentors"
            className="w-full h-96 object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-6 left-6 flex items-center gap-4 text-white">
            <span className="bg-[#622737] px-6 py-2 rounded-full font-bold text-sm">
              Mentorship
            </span>
            <span className="text-sm opacity-90">October 18, 2025</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              How Policy Mentors Are Guiding the Next Generation of Public Leaders
            </h3>
            <div className="flex items-center gap-6 text-white/80 mb-6">
              <span className="flex items-center gap-2">
                <Eye size={20} /> 156K
              </span>
              <span className="flex items-center gap-2">
                <Heart size={20} /> 10K
              </span>
            </div>
            <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] hover:bg-green-700 text-white px-10 py-4 rounded-md font-bold transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
          <img
            src="/story-3.png"
            alt="Policy Mentors"
            className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute top-6 left-6 flex items-center gap-4 text-white">
            <span className="bg-[#622737] px-6 py-2 rounded-md font-bold text-sm">
              Mentorship
            </span>
            <span className="text-sm opacity-90">October 18, 2025</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 leading-tight">
              How Policy Mentors Are Guiding the Next Generation of Public Leaders
            </h3>
            <div className="flex items-center gap-6 text-white/80 mb-6">
              <span className="flex items-center gap-2">
                <Eye size={20} /> 156K
              </span>
              <span className="flex items-center gap-2">
                <Heart size={20} /> 10K
              </span>
            </div>
            <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] hover:bg-green-700 text-white px-10 py-4 rounded-md font-bold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      <section className="py-20 bg-green-50">
 <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-[#333333] relative inline-block pb-4">
        Stories of Transformation
        <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
      </h1>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto mt-8">
        Real stories, real impact — hear directly from the people weve helped.
      </p>
    </div>

    <div className="flex justify-end mb-10">
      <div className="flex gap-3">
        <button
          onClick={prevSlide}
          className="bg-[#1E6A00] p-3 text-white rounded-full shadow hover:bg-green-800 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-[#1E6A00] p-3 rounded-full shadow hover:bg-green-100 transition border border-[#1E6A00]"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>

    
    <div className="grid md:grid-cols-2 gap-10">
     
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2">
          <img src="/story1.png" alt="Amara E" className="w-full h-80 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" />
        </div>

       
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          
          <div className="text-8xl font-bold text-[#333333]  mb-4 leading-none">“</div>
          
          <p className="text-xl italic text-[#333333] mb-6">
            “This platform has completely changed how I learn and grow. The mentors are incredibly supportive...”
          </p>
          <p className="font-bold text-lg">Amara E</p>
          <p className="text-gray-600">Community Manager</p>
        </div>
      </div>


      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2">
          <img src="/story2.png" alt="David C" className="w-full h-80 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" />
        </div>

       
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          
          <div className="text-8xl font-bold text-[#333333] mb-4 leading-none">“</div>
          
          <p className="text-xl italic text-[#333333] mb-6">
            “This platform has completely changed how I lead and grow...”
          </p>
          <p className="font-bold text-lg">David C</p>
          <p className="text-gray-600">Community Leader</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
   <h1 className="text-3xl md:text-4xl font-semibold mb-8 leading-tight text-[#333333] relative inline-block pb-4">
Insights & Stories
  <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
</h1>
<p className="text-xl text-gray-600 max-w-4xl left-0  mx-auto mb-12">
           Discover fresh perspectives, expert insights, and real stories shaping our community.
          </p>
    <div className="grid md:grid-cols-3 gap-10">
     
      <div className="group cursor-pointer max-w-md mx-auto">
  
  <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
    <img
      src="/insight-1.png"
      alt="The Rise of Civic Tech in Africa"
      className="w-full h-96 object-cover group-hover:scale-105 transition duration-300"
    />
  </div>

  <div className="text-[#333333]">
    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      The Rise of Civic Tech in Africa
    </h3>
    
    <div className="flex items-center gap-4 mb-6 text-sm md:text-base text-[#333333]">
      <div className="flex items-center gap-2">
        <img 
          src="/avarta.png" 
          alt="Joanna Wale" 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>Joanna Wale</span>
      </div>
      <span> - </span>
      <span>June 28, 2018</span>
      <span>•</span>
      <span>1K shares</span>
    </div>
    
    <p className="text-sm md:text-xl leading-relaxed mb-8 text-[#333333]">
      How digital tools are transforming governance, accountability, and citizen participation across the continent.
    </p>
    
    <button className="text-[#1E6A00] font-semibold text-lg hover:underline">
      View Post
    </button>
  </div>
</div>

      
     <div className="group cursor-pointer max-w-md mx-auto">
 
  <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
    <img
      src="/insight-2.png"
      alt="The Rise of Civic Tech in Africa"
      className="w-full h-96 object-cover group-hover:scale-105 transition duration-300"
    />
  </div>


  <div className="text-[#333333]">
    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      The Rise of Civic Tech in Africa
    </h3>
    
    <div className="flex items-center gap-4 mb-6 text-sm md:text-base text-[#333333]">
      <div className="flex items-center gap-2">
        <img 
          src="/avarta.png" 
          alt="Joanna Wale" 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>Joanna Wale</span>
      </div>
      <span> - </span>
      <span>June 28, 2018</span>
      <span>•</span>
      <span>1K shares</span>
    </div>
    
    <p className="text-sm md:text-xl leading-relaxed mb-8 text-[#333333]">
      How digital tools are transforming governance, accountability, and citizen participation across the continent.
    </p>
    
    <button className="text-[#1E6A00] font-semibold text-lg hover:underline">
      View Post
    </button>
  </div>
</div>

      <div className="group cursor-pointer max-w-md mx-auto">
 
  <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
    <img
      src="/insight-3.png"
      alt="The Rise of Civic Tech in Africa"
      className="w-full h-96 object-cover group-hover:scale-105 transition duration-300"
    />
  </div>

  
  <div className="text-[#333333]">
    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      The Rise of Civic Tech in Africa
    </h3>
    
    <div className="flex items-center gap-4 mb-6 text-sm md:text-base text-[#333333]">
      <div className="flex items-center gap-2">
        <img 
          src="/avarta.png" 
          alt="Joanna Wale" 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>Joanna Wale</span>
      </div>
      <span> - </span>
      <span>June 28, 2018</span>
      <span>•</span>
      <span>1K shares</span>
    </div>
    
    <p className="text-sm md:text-xl leading-relaxed mb-8 text-[#333333]">
      How digital tools are transforming governance, accountability, and citizen participation across the continent.
    </p>
    
    <button className="text-[#1E6A00] font-semibold text-lg hover:underline">
      View Post
    </button>
  </div>
  </div>

  </div>
  </div>
</section>
      <Footer />
    </>
  );
}