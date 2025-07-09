import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-6 relative overflow-hidden pt-24">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(139,92,246,0.1),transparent)] animate-spin-slow"></div>
      </div>
      
      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-12 relative overflow-hidden group">
          {/* Premium glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4 animate-text-shimmer">
                Connect
              </h1>
              <p className="text-xl text-gray-400 font-light">
                Let's create something extraordinary together
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 animate-expand"></div>
            </div>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-sm font-light text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-light text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-sm font-light text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-light text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                  Message
                </label>
                <textarea
                  rows="6"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none backdrop-blur-xl"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-medium py-5 px-8 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
