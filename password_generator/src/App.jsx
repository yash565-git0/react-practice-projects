import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-300 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Password Generator</h1>
            <p className="text-gray-600 text-sm">Create secure passwords instantly</p>
          </div>
          
          {/* Password Display */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={password}
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-4 text-gray-800 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                placeholder="Generated password will appear here"
                readOnly
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Copy
              </button>
            </div>
          </div>
          
          {/* Controls */}
          <div className="space-y-6">
            {/* Length Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-gray-800 font-medium">Password Length</label>
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min={4}
                max={50}
                value={length}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                onChange={(e) => setLength(e.target.value)}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>4</span>
                <span>50</span>
              </div>
            </div>
            
            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="numbers"
                    defaultChecked={numberAllowed}
                    onChange={() => setNumberAllowed((prev) => !prev)}
                    className="sr-only"
                  />
                  <label
                    htmlFor="numbers"
                    className="flex items-center cursor-pointer"
                  >
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      numberAllowed 
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400 border-transparent' 
                        : 'border-gray-400 hover:border-gray-500'
                    }`}>
                      {numberAllowed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span className="ml-3 text-gray-800 font-medium">Include Numbers</span>
                  </label>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="characters"
                    defaultChecked={charAllowed}
                    onChange={() => setCharAllowed((prev) => !prev)}
                    className="sr-only"
                  />
                  <label
                    htmlFor="characters"
                    className="flex items-center cursor-pointer"
                  >
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      charAllowed 
                        ? 'bg-gradient-to-r from-blue-400 to-cyan-400 border-transparent' 
                        : 'border-gray-400 hover:border-gray-500'
                    }`}>
                      {charAllowed && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                    <span className="ml-3 text-gray-800 font-medium">Include Special Characters</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Generate Button */}
          <button
            onClick={passwordGenerator}
            className="w-full mt-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
          >
            Generate New Password
          </button>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Keep your accounts secure with strong passwords</p>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  )
}

export default App
