import React from "react";
import { Icon } from "@iconify/react";


export default function Footer() {
  return (
    <footer className="bg-[#2C3A06] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/pushuplogo.png" alt="PushUp Logo" className="w-10 h-10 rounded-full" />
            <h2 className="text-xl font-semibold">PushUp.Ng</h2>
          </div>

         
          <div className="flex items-start gap-3 mb-4">
            <Icon icon="mdi:map-marker" width="22" />
            <p>8819 Princess St. South Gate, <br /> Jabi, Abuja</p>
          </div>

         
          <div className="flex items-center gap-3 mb-4">
            <Icon icon="mdi:email-outline" width="22" />
            <p>pushup.ng@hello.com</p>
          </div>

          
          <div className="flex items-center gap-3">
            <Icon icon="mdi:phone" width="22" />
            <p>+234 80-386-688-32</p>
          </div>
        </div>

    
        <div>
          <h3 className="font-semibold text-lg mb-5">Service</h3>
          <ul className="space-y-3">
            <li>Live Streaming</li>
            <li>Governance Hub</li>
            <li>Mentorship</li>
            <li>Courses & Learning</li>
            <li>Community Forum</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-5">Company</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Our Vision</li>
            <li>Our Team</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-5">Join Our Newsletter</h3>

          <label className="text-sm">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 mt-2 rounded-md text-black border border-blue-300 outline-none"
          />

          <button className="bg-[#1E6A00] hover:bg-green-800 text-white px-10 py-3 rounded-xl mt-4">
            Send
          </button>
        </div>

      </div>

      
      <div className="text-right mt-10 text-sm">
        © 2025 PushUp.ng. All rights reserved.
      </div>
    </footer>
  );
}
