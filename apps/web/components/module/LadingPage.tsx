"use client"

import { Button } from "@workspace/ui/components/button"
import { useEffect, useState } from "react"
import Lottie from "lottie-react";
import logo from '../../public/lottie/animation.json'

export default function LadingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-500 flex items-center justify-center px-3 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce delay-2000"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-full mx-auto">
        {/* Phone mockup container */}
        <div
          className={`
            bg-gradient-to-b from-white/20 via-blue-50/30 to-blue-400/20 
            backdrop-blur-sm rounded-[3rem] p-2 shadow-2xl border border-white/20
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
          `}
        >
          {/* Phone frame */}
          <div className="bg-gradient-to-b from-blue-50 to-blue-200 flex justify-center items-end rounded-[2.5rem] lg:p-8 min-h-[calc(100vh-80px)] relative overflow-hidden">
            {/* Notch */}
            {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div> */}

            {/* Content */}
            <div className="pt-12 pb-8 text-center space-y-8">
              {/* Main heading */}
              <div
                className={`
                  space-y-2 transition-all duration-1000 delay-500 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <div className="flex justify-center items-center">
                    <div className="">
                    <Lottie animationData={logo} style={{ width: 400, height: 300 }} loop={true} />
                </div>
                <div className="md:flex hidden">
                    <h1 className="md:text-5xl text-left text-3xl font-bold text-gray-900 leading-tight">
                    Smarter
                    <br />
                    Banking for a<br />
                    Smarter You
                    </h1>
                </div>
                </div>
              </div>

              {/* Buttons */}
              <div
                className={`
                  space-y-4 transition-all duration-1000 delay-700 ease-out lg:w-2xl w-[300px] mx-auto
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                {/* Login button */}
                <Button
                  className="
                    w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 
                    hover:from-blue-700 hover:to-cyan-600 text-white font-medium 
                    rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                    transform hover:scale-105 active:scale-95
                  "
                >
                  Login
                </Button>

                {/* Sign up button */}
                <Button
                  variant="outline"
                  className="
                    w-full h-12 bg-white/50 hover:bg-white/70 text-gray-700 
                    font-medium rounded-full border-2 border-white/30 
                    hover:border-white/50 shadow-md hover:shadow-lg 
                    transition-all duration-300 transform hover:scale-105 active:scale-95
                    backdrop-blur-sm
                  "
                >
                  Sign up
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>

        {/* Floating elements around the phone */}
        <div
          className={`
            absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1000
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 rotate-45"}
          `}
        >
          <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
        </div>

        <div
          className={`
            absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 
            rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 delay-1200
            ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-4 -rotate-45"}
          `}
        >
          <div className="w-6 h-6 bg-white rounded-full animate-pulse delay-500"></div>
        </div>

        <div
          className={`
            absolute top-1/2 -right-12 w-8 h-8 bg-white/30 rounded-full 
            transition-all duration-1000 delay-1400 animate-bounce
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
          `}
        ></div>

        <div
          className={`
            absolute top-1/3 -left-12 w-6 h-6 bg-white/20 rounded-full 
            transition-all duration-1000 delay-1600 animate-bounce
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
          `}
        ></div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600 to-transparent"></div>
    </div>
  )
}
