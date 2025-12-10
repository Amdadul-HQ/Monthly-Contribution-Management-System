"use client"

import styles from "./loading.module.css"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blue-50 via-blue-100 to-blue-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Animated logo/icon container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          
          {/* Middle pulsing ring - counter-rotating */}
          <div className={`absolute inset-0 w-20 h-20 border-4 border-cyan-300 border-r-cyan-600 rounded-full m-2 ${styles.spinReverse}`}></div>
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 animate-pulse">
            Loading...
          </h2>
          <div className="flex space-x-1">
            <div 
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{ animationDelay: '0ms' }}
            ></div>
            <div 
              className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
              style={{ animationDelay: '150ms' }}
            ></div>
            <div 
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: '300ms' }}
            ></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full ${styles.progress}`}></div>
        </div>
      </div>
    </div>
  )
}

