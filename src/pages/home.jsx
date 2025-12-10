import React, { useState } from "react";
import {
  PlayCircle,
  BookOpen,
  Users,
  ShieldCheck,
  Calendar,
  Clock,
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-4">
          <div className="bg-[#1E6A00] text-white p-4 rounded-xl">
            <PlayCircle size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-gray-900">Streaming</h3>
            <p className="text-sm text-gray-600">Watch civic events live</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#EF2955] text-white p-4 rounded-xl">
            <BookOpen size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-gray-900">Learning</h3>
            <p className="text-sm text-gray-600">Browse Courses</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#334209] text-white p-4 rounded-xl">
            <Users size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-gray-900">Mentorship</h3>
            <p className="text-sm text-gray-600">Connect with mentors</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#622737] text-white p-4 rounded-xl">
            <ShieldCheck size={36} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-gray-900">Trust & Authority</h3>
            <p className="text-sm text-gray-600">Verified content only</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 inline-block relative pb-3">
      Live Now & Upcoming
      
      <span className="absolute bottom-0 left-0 w-32 h-2 bg-green-600 rounded-full"></span>
    </h2>
            <a href="#" className="text-green-600 font-medium flex items-center gap-2 hover:underline">
              See All <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-green-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-green-700 text-white px-8 py-4 text-lg font-bold">GOVERNANCE</div>
              <div className="relative">
                <img src="/live1.png" alt="Policy Debate" className="w-full h-96 object-cover" />
                <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-md font-bold flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">Policy Debate in Nigeria</h3>
                <p className="text-gray-600 mb-6">with Ken Benjamin</p>
                <div className="flex gap-4">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-green-700">
                    <PlayCircle size={24} />
                    Watch now
                  </button>
                  <button className="border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-50">
                    <Clock size={24} />
                    Remind me
                  </button>
                </div>
              </div>
            </div>

         
            <div className="bg-green-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-green-700 text-white px-8 py-4 text-lg font-bold">LIFESTYLE</div>
              <div className="relative">
                <img src="/live2.png" alt="Morning Routines" className="w-full h-96 object-cover" />
                <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-md font-bold flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">Morning Routines that work</h3>
                <p className="text-gray-600 mb-6">with Benita Ojo</p>
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-green-700">
                  <PlayCircle size={24} />
                  Watch now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-[#334209]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white inline-block relative pb-4">
          About PushUp.ng
          <span className="absolute bottom-0 left-0 w-32 h-2 bg-green-500 rounded-full"></span>
        </h2>
      </div>
            <p className="text-lg text-[#E5E5E5] leading-relaxed mb-6">
              PushUp.ng is Nigeria's premier digital hub for learning, mentorship, civic engagement and professional streaming. Our platform empowers individuals, organizations, and communities to access high-quality multimedia content, connect with mentors, and engage in meaningful civic discussions — all in one seamless digital experience.
            </p>
            <p className="text-lg text-[#E5E5E5] leading-relaxed">
              From live events and on-demand videos to online courses and mentorship programs, PushUp.ng is designed to inspire growth, foster learning and facilitate connections. Citizens and professionals — from students to policymakers — use our media hub, while professionals and students can access verified mentors and skill-building resources.
            </p>
            <button className="mt-10 bg-white text-[#333333] px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition">
              Learn more
            </button>
          </div>
          <div>
            <img src="/image1.png" alt="About PushUp.ng" className="rounded-3xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Most Viewed Videos</h2>
            <div className="flex gap-3">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium">Governance</button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium">Leadership</button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium">Mentorship</button>
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
      <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-[#1E6A00]">
        Governance Media Hub
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
      <button className="bg-green-900 hover:bg-green-800 text-white px-10 py-4 rounded-full font-bold text-lg transition">
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
          <h2 className="text-5xl font-bold mb-6">Explore Courses That Transform</h2>
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
                  <button className="w-full bg-[#1E6A00] text-white py-4 rounded-lg font-bold hover:bg-green-700">
                    Get This Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Mentors Who Guide</h2>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto mb-12">
            Our mentorship network connects you with experienced professionals who are passionate about giving back. Whether you're seeking career direction, skill development, or clarity on your next step, these mentors bring real-world insight and actionable guidance.
          </p>
          <img src="/mentor.png" alt="Mentors" className="rounded-3xl shadow-2xl mx-auto max-w-5xl" />
          <button className="mt-12 bg-green-600 text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-green-700">
            Start your journey today
          </button>
        </div>
      </section>

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
      Join the Community
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
     
      <div className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
        <img
          src="/story-1.png"
          alt="Empowering Local Voices"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

       
        <div className="absolute top-6 left-6 flex items-center gap-4 text-white">
          <span className="bg-purple-600 px-6 py-2 rounded-full font-bold text-sm">
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
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition">
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
            <span className="bg-purple-600 px-6 py-2 rounded-full font-bold text-sm">
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition">
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
            <span className="bg-purple-600 px-6 py-2 rounded-full font-bold text-sm">
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition">
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
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Stories of Transformation</h2>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-green-600 text-white p-3 rounded-full shadow hover:bg-green-700 transition"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img src="/story1.png" alt="Amara E" className="w-full h-80 object-cover" />
              <div className="p-10">
                <p className="text-xl italic text-gray-700 mb-6">
                  “This platform has completely changed how I learn and grow. The mentors are incredibly supportive...”
                </p>
                <p className="font-bold text-lg">Amara E</p>
                <p className="text-gray-600">Community Manager</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img src="/story2.png" alt="David C" className="w-full h-80 object-cover" />
              <div className="p-10">
                <p className="text-xl italic text-gray-700 mb-6">
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
    <h2 className="text-2xl md:text-4xl font-bold text- text-gray-900 mb-16">
      Insights & Stories
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
     
      <div className="group cursor-pointer">
        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
          <img
            src="/insight-1.png"
            alt="The Rise of Civic Tech in Africa"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
          The Rise of Civic Tech in Africa
        </h3>
        <p className="text-gray-600 mb-4">
          Joanna Wale • June 28, 2025 • 4 min read
        </p>
        <p className="text-gray-700 leading-relaxed">
          How digital tools are transforming governance, transparency, and citizen engagement across the continent.
        </p>
      </div>

      
      <div className="group cursor-pointer">
        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
          <img
            src="/insight-2.png"
            alt="The Rise of Civic Tech in Africa"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
          The Rise of Civic Tech in Africa
        </h3>
        <p className="text-gray-600 mb-4">
          Joanna Wale • June 28, 2025 • 4 min read
        </p>
        <p className="text-gray-700 leading-relaxed">
          How digital tools are transforming governance, transparency, and citizen engagement across the continent.
        </p>
      </div>

      <div className="group cursor-pointer">
        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
          <img
            src="/insight-3.png"
            alt="The Rise of Civic Tech in Africa"
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
          The Rise of Civic Tech in Africa
        </h3>
        <p className="text-gray-600 mb-4">
          Joanna Wale • June 28, 2025 • 4 min read
        </p>
        <p className="text-gray-700 leading-relaxed">
          How digital tools are transforming governance, transparency, and citizen engagement across the continent.
        </p>
        <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:underline transition"
            >
              View Post <ArrowRight size={22} className="group-hover:translate-x-2 transition" />
            </a>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}