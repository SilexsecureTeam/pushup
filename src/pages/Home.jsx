import React from "react";
import {
  PlayCircle,
  BrainCircuit,
  Users,
  ShieldCheck,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const features = [
    { icon: PlayCircle, color: "bg-[#1E6A00]", title: "Streaming", desc: "Watch civic events live" },
    { icon: BrainCircuit, color: "bg-[#EF2955]", title: "Learning", desc: "Browse Courses" },
    { icon: Users, color: "bg-[#334209]", title: "Mentorship", desc: "Connect with mentors" },
    { icon: ShieldCheck, color: "bg-[#622737]", title: "Trust & Authority", desc: "Verified content only" },
  ];

  const liveEvents = [
    { tag: "GOVERNANCE", tagBg: "bg-[#1E6A00]", title: "Policy Debate in Nigeria", host: "@kenbenjamin", img: "/live1.png", cardBg: "bg-[#d3e4cd]" },
    { tag: "LIFESTYLE", tagBg: "bg-[#1E6A00] text-white", title: "Morning Routines that work", host: "@Benita Ojo", img: "/live2.png", cardBg: "bg-[#d3e4cd]" },
  ];

  const videos = Array.from({ length: 6 }, (_, i) => ({
    img: `/video-${((i % 4) + 1)}.png`,
    title: "Nigeria's Budget 2026 Explained",
    meta: i % 2 === 0 ? "8.7K views" : "18 minutes",
  }));

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

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen pt-20 overflow-hidden">
        <img src="/homebg.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
              Empowering Nigerians<br />Through Learning and Civic<br />Insight
            </h1>
            <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition shadow-2xl">
              Explore PushUp.ng
            </a>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 text-white">
                  <div className={`${f.color} p-3 sm:p-4 rounded-xl`}>
                    <f.icon className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{f.title}</h3>
                    <p className="text-xs sm:text-sm opacity-90">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Now & Upcoming */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Live Now & Upcoming</h2>
              <p className="text-[#333333] text-2xl mt-2">Live streams, courses, mentors, and more.</p>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <a href="#" className="flex items-center gap-2 text-gray-500"><SlidersHorizontal size={20} /> Filter</a>
              <span className="hidden sm:block w-px h-8 bg-gray-400"></span>
              <a href="#" className="font-semibold flex items-center gap-2 hover:underline">See All <ArrowRight size={20} /></a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {liveEvents.map((event, i) => (
              <div key={i} className={`${event.cardBg} rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row`}>
                <div className="p-8 md:p-12 flex flex-col justify-between text-[#333333] order-2 md:order-1">
                  <div>
                    <span className={`inline-block ${event.tagBg} px-8 py-4 rounded-full font-bold text-xl sm:text-2xl mb-6`}>
                      {event.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{event.title}</h3>
                  </div>
                  <p className="text-lg sm:text-xl mt-8 flex items-center gap-4">
                    Watch now <MessageCircle size={28} /> {event.host}
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <img src={event.img} alt={event.title} className="w-full h-64 md:h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-6 py-3 rounded-full font-bold">LIVE</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-start gap-4">
            <button className="bg-white p-4 sm:p-6 rounded-full shadow-2xl hover:bg-gray-100"><ArrowLeft className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600" /></button>
            <button className="bg-white p-4 sm:p-6 rounded-full shadow-2xl hover:bg-gray-100"><ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600" /></button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-[#334209] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block pb-4">
              About PushUp.ng
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-white rounded-full"></span>
            </h2>
            <p className="text-xl opacity-90 mb-6">Empowering Learning, Mentorship, and Civic Engagement</p>
            <p className="text-lg leading-relaxed mb-8">
              PushUp.ng is Africa's premier digital hub for learning, mentorship, civic engagement, and professional streaming.
               Our platform empowers individuals, organizations, and communities to access high-quality multimedia content, connect with mentors,
                and engage in meaningful civic discussions — all in one seamless digital experience.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              From live events and on-demand videos to online courses and mentorship programs, PushUp.ng is designed to inspire growth, foster learning, 
              and facilitate connections. Citizens and policymakers can stay informed through our governance media hub, while professionals and students can
               access verified mentors and skill-building resources.
            </p>
            <button className="bg-white text-[#334209] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100">Learn more</button>
          </div>
          <img src="/image1.png" alt="About" className="rounded-3xl shadow-2xl w-full object-cover" />
        </div>
      </section>

      {/* Most Viewed Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Most Viewed Videos</h2>
              <p className="text-gray-600 mt-2">
                Discover governance insights, leadership talks,<br className="hidden lg:block" />
                mentorship stories, and expert lessons — available on demand.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-8 py-4 rounded-full font-bold">See All</a>
              <div className="flex gap-6 text-gray-700 font-medium">
                <span className="hover:text-black cursor-pointer">Governance</span>
                <span className="hover:text-black cursor-pointer">Leadership</span>
                <span className="hover:text-black cursor-pointer">Mentorship</span>
              </div>
            </div>
          </div>

          {/* Perfect grid: 2 on mobile, 3 on md, 6 on lg */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 lg:gap-8">
            {videos.map((v, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                  <img src={v.img} alt="Video" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
                </div>
                <h4 className="mt-4 font-bold text-base lg:text-lg line-clamp-2">{v.title}</h4>
                <p className="text-sm text-gray-600">{v.meta} • 1 day ago</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Media Hub */}
      <section className="py-20 bg-[#d3e4cd]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-[#333333]">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block pb-4">
              Governance Media Hub
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
            </h1>
            <h2 className="text-xl font-semibold mb-6 text-[#333333]">Policy & Public Affairs</h2>
            <p className="text-lg leading-relaxed mb-10">
              The Governance Media Hub gives users a front-row seat to the nation's most important civic moments. 
              From parliamentary sessions and national addresses to policy debates and public forums, this space is designed to help citizens stay informed, engaged, and empowered.
               Every video is carefully curated and verified, offering clear insight into decisions, reforms, and discussions shaping Nigeria's future. Whether you're a student, professional,
                policymaker, or simply a curious citizen, the Governance Hub brings transparency closer — helping you understand how governance works, why it matters, and how it impacts your everyday life.
            </p>
 
            <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-800">
              Learn more
            </button>
          </div>
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/assembly.png" alt="Assembly" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">National Assembly Budget Presentation 2026</h3>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>Live Now</span>
                  <span className="text-sm opacity-90">Nov 20, 2025 10:00AM</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`/governance${i}.png`} alt="Governance" className="rounded-3xl shadow-xl w-full h-48 object-cover hover:scale-105 transition" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block pb-4">
            Explore Courses That Transform
            <span className="absolute bottom-0 left-0 w-32 h-2 bg-green-600 rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Explore a wide range of expert-led courses designed to help you build practical skills and deepen your understanding of key topics.
             From governance and leadership to digital marketing and personal development, each lesson is crafted to support your growth at every level.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                <img src={c.img} alt="Course" className="w-full h-64 object-cover" />
                <div className="p-8">
                  <p className="text-sm text-gray-500 mb-2">{c.weeks} • By {c.author}</p>
                  <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{c.desc}</p>
                  <button className="w-full bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white py-4 rounded-lg font-bold hover:bg-green-700">
                    Get This Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block pb-4">
              Mentors Who Guide
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-[#333333]">Empowering Learning, Mentorship, and Civic Engagement</p>
            <p className="text-xl text-[#333333] mb-12 leading-relaxed">
              Our mentorship network connects you with experienced professionals, industry leaders, and subject-matter
               experts who are committed to helping you grow. Whether you're seeking career direction, skill development, or clarity on your next step, these mentors bring real-world insight and actionable guidance.
            </p>
            <p className="text-xl text-[#333333] mb-12 leading-relaxed">
              Explore profiles, book sessions, and start learning directly from people who've walked
               the path you're on. Every mentor in our network is carefully selected for their expertise, dedication, and ability to provide meaningful guidance. From one-on-one consultations to group sessions and career workshops, you can access personalized support growth...
            </p>
            <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-green-700">
              Start your journey today
            </button>
          </div>
          <img src="/mentor.png" alt="Mentors" className="rounded-3xl shadow-2xl w-full object-cover" />
        </div>
      </section>

      {/* Join the Community */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block pb-4">
              Join Our Community
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-[#333333]">Discover what people are talking about, learn from shared experiences, and stay connected.</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              <img src={communityStories[0].img} alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-4 text-white">
                <span className="bg-[#622737] px-6 py-2 rounded-full font-bold text-sm">{communityStories[0].tag}</span>
                <span className="text-sm opacity-90">{communityStories[0].date}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6">{communityStories[0].title}</h3>
                <p className="text-lg mb-8 opacity-90">{communityStories[0].desc}</p>
                <div className="flex items-center gap-6 text-white/80 mb-8">
                  <span className="flex items-center gap-2"><Eye size={20} /> {communityStories[0].views}</span>
                  <span className="flex items-center gap-2"><Heart size={20} /> {communityStories[0].likes}</span>
                  <span className="flex items-center gap-2"><MessageCircle size={20} /> {communityStories[0].comments}</span>
                </div>
                <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-10 py-4 rounded-md font-bold hover:bg-green-700">Learn More</button>
              </div>
            </div>

            <div className="space-y-10">
              {communityStories.slice(1).map((s, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                  <img src={s.img} alt="Story" className="w-full h-96 object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-6 left-6 flex items-center gap-4 text-white">
                    <span className="bg-[#622737] px-6 py-2 rounded-full font-bold text-sm">{s.tag}</span>
                    <span className="text-sm opacity-90">{s.date}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4">{s.title}</h3>
                    <div className="flex items-center gap-6 text-white/80 mb-6">
                      <span className="flex items-center gap-2"><Eye size={20} /> {s.views}</span>
                      <span className="flex items-center gap-2"><Heart size={20} /> {s.likes}</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#1E6A00] to-[#334209] text-white px-10 py-4 rounded-md font-bold hover:bg-green-700">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Transformation */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block pb-4">
              Stories of Transformation
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-[#333333]">Real stories, real impact, hear directly from the people we've helped</p>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <img src={t.img} alt={t.name} className="w-full md:w-1/2 h-80 object-cover" />
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                  <div className="text-8xl font-bold text-[#333333] mb-4 leading-none">“</div>
                  <p className="text-xl italic text-[#333333] mb-6">{t.quote}</p>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-gray-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block pb-4">
              Insights & Stories
              <span className="absolute bottom-0 left-0 w-32 h-2 bg-[#1E6A00] rounded-full"></span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-[#333333]">Discover fresh perspectives, expert insights, and real stories shaping our community</p>
          <div className="grid md:grid-cols-3 gap-10">
            {insights.map((ins, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                  <img src={ins.img} alt={ins.title} className="w-full h-96 object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{ins.title}</h3>
                <div className="flex items-center gap-4 mb-6 text-sm md:text-base text-[#333333]">
                  <div className="flex items-center gap-2">
                    <img src={ins.authorImg} alt={ins.author} className="w-8 h-8 rounded-full object-cover" />
                    <span>{ins.author}</span>
                  </div>
                  <span>-</span>
                  <span>{ins.date}</span>
                  <span>•</span>
                  <span>{ins.shares} shares</span>
                </div>
                <p className="text-lg leading-relaxed mb-8 text-[#333333]">{ins.desc}</p>
                <button className="text-[#1E6A00] font-semibold text-lg hover:underline">View Post</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}