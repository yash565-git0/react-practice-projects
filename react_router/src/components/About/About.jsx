import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-6 relative overflow-hidden pt-24">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/30 rounded-full animate-float-random-${i % 4}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-16 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
          {/* Premium glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-shift"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-7xl md:text-8xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6 animate-text-shimmer">
                About
              </h1>
              <div className="w-32 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-expand"></div>
            </div>
            
            <div className="space-y-8 text-gray-300">
              <p className="text-xl leading-relaxed text-center opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] font-light">
                We craft extraordinary digital experiences that transcend conventional boundaries, 
                blending innovation with artistry to create solutions that inspire and captivate.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/5 backdrop-blur-xl opacity-0 animate-[slideInLeft_1s_ease-out_0.8s_forwards] hover:scale-105 transition-transform duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">Innovation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Pushing the boundaries of what's possible with cutting-edge technology and creative vision.
                  </p>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/5 backdrop-blur-xl opacity-0 animate-[slideInRight_1s_ease-out_1.1s_forwards] hover:scale-105 transition-transform duration-500">
                  <h3 className="text-2xl font-light text-white mb-4">Excellence</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Delivering unparalleled quality and attention to detail in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
