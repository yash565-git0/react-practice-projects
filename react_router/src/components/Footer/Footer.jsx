import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Premium Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-light text-2xl">L</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-50 animate-pulse"></div>
              </div>
              <span className="text-3xl font-thin text-white tracking-wider">
                Logo
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Crafting extraordinary digital experiences that transcend conventional boundaries and inspire innovation.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin'].map((social, index) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-light mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { href: "#", label: "Services" }
              ].map((link, index) => (
                <li key={index}>
                  {link.to ? (
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-lg hover:translate-x-2 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-lg hover:translate-x-2 transform inline-block"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-2xl font-light mb-8 text-white">Services</h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Mobile Applications",
                "UI/UX Design",
                "Digital Strategy"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-lg hover:translate-x-2 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-light mb-8 text-white">Contact Info</h3>
            <div className="space-y-6">
              {[
                { icon: "location", text: "123 Innovation Street\nTech City, TC 12345" },
                { icon: "email", text: "hello@company.com" },
                { icon: "phone", text: "+1 (555) 123-4567" }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-blue-400 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {contact.icon === 'location' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      )}
                      {contact.icon === 'email' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )}
                      {contact.icon === 'phone' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      )}
                    </svg>
                  </div>
                  <p className="text-gray-400 font-light text-lg whitespace-pre-line">
                    {contact.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-500 font-light text-lg">
            © 2024 Your Company Name. All rights reserved. Crafted with excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
