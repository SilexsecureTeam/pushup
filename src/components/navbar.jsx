import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClasses = "hover:text-blue-700 transition font-medium text-lg";
  const activeClasses = "text-blue-700 font-semibold";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       
        <div className="flex items-center gap-3">
          <img src="/pushuplogo.png" alt="PushUp" className="w-16 h-16 rounded-full" />
        </div>

        <ul className="hidden md:flex items-center gap-10 text-lg">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClasses : linkClasses}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClasses : linkClasses}>About us</NavLink>
          <NavLink to="/live" className={({ isActive }) => isActive ? activeClasses : linkClasses}>Live</NavLink>
          <NavLink to="/videos" className={({ isActive }) => isActive ? activeClasses : linkClasses}>Videos</NavLink>
          <NavLink to="/learning" className={({ isActive }) => isActive ? activeClasses : linkClasses}>Learning</NavLink>
          <NavLink to="/mentors" className={({ isActive }) => isActive ? activeClasses : linkClasses}>Mentors</NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? activeClasses : linkClasses}>Community</NavLink>
        </ul>

        
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/login" className="text-gray-700 text-lg font-medium">Log in</NavLink>
          <button className="bg-gradient-to-b from-green-600 to-green-800 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon icon={mobileOpen ? "mdi:close" : "mdi:menu"} width="32" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 px-6 flex flex-col gap-4 md:hidden">
          <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>About us</NavLink>
          <NavLink to="/live" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>Live</NavLink>
          <NavLink to="/videos" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>Videos</NavLink>
          <NavLink to="/learning" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>Learning</NavLink>
          <NavLink to="/mentors" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>Mentors</NavLink>
          <NavLink to="/community" onClick={() => setMobileOpen(false)} className={({ isActive }) => isActive ? activeClasses : linkClasses}>Community</NavLink>
          <hr />
          <NavLink to="/login" onClick={() => setMobileOpen(false)} className="text-gray-700 font-medium">Log in</NavLink>
          <button className="bg-gradient-to-b from-green-600 to-green-800 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}