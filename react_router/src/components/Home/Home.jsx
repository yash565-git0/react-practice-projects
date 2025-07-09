import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex items-center justify-center relative overflow-hidden pt-24">
      {/* Epic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(139,92,246,0.1),transparent,rgba(34,197,94,0.1),transparent)] animate-spin-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      {/* Premium particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="mb-8 opacity-0 animate-[fadeInUp_1.2s_ease-out_0.3s_forwards]">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 via-purple-200 to-emerald-200 mb-6 animate-text-shimmer leading-tight">
            Extraordinary
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-gray-300 mb-8 animate-text-glow">
            Digital Experiences
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed font-light opacity-0 animate-[fadeInUp_1.2s_ease-out_0.6s_forwards]">
          We craft premium digital solutions that transcend expectations, 
          blending cutting-edge technology with artistic vision to create 
          experiences that inspire and captivate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0 animate-[fadeInUp_1.2s_ease-out_0.9s_forwards]">
          <Link
            to="/about"
            className="px-12 py-5 bg-white/10 backdrop-blur-xl text-white font-light rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-white/10 relative overflow-hidden group"
          >
            <span className="relative z-10">Discover More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            to="/contact"
            className="px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-light rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
        
        {/* Premium stats with animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-[fadeInUp_1.2s_ease-out_1.2s_forwards]">
          {[
            { number: "1000+", label: "Premium Clients", delay: "0s" },
            { number: "50+", label: "Award-Winning Projects", delay: "0.2s" },
            { number: "24/7", label: "Elite Support", delay: "0.4s" }
          ].map((stat, index) => (
            <div key={index} className="text-center group" style={{ animationDelay: stat.delay }}>
              <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-5xl font-thin mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-number-glow">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-light text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
