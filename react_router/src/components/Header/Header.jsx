import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <span className="text-white font-light text-2xl">L</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-3xl font-thin text-white tracking-wider">
              Logo
            </span>
          </Link>
          
          {/* Fixed Navigation */}
          <nav className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-8 py-4 rounded-xl font-light transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-8 py-4 rounded-xl font-light transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`
              }
            >
              About
            </NavLink>
            
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-8 py-4 rounded-xl font-light transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-xl border border-white/10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
