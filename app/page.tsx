"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            offset: 80,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="flex w-full min-h-screen items-start bg-white font-sans dark:bg-black">
            <div className="absolute top-0 left-0 w-full h-screen">
              <img src="/patio11.jpg" alt="image" className="w-screen h-screen object-cover"/>
            </div>

            <div className="w-screen z-50">
              <header
                className={`fixed top-0 left-0 w-full z-10 transition-[padding] duration-300 ${
                  isScrolled ? "md:py-4" : "md:py-12"
                }`}
              >
                <div
                    className={`max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-6 flex-wrap gap-4
                      transition-all duration-500 ease-in-out 
                      ${isScrolled ? 'md:rounded-xl bg-blue-700/80 py-2 text-black shadow-md' : 'py-4'}
                    `}
                  >
                    <div className="flex items-center gap-6 md:gap-12 flex-wrap">
                        <img 
                          src="/my-patio.png" 
                          alt="image" 
                          className="w-25  p-2"
                        />
                        <div className="hidden md:flex items-center gap-4 md:gap-6 text-white text-sm md:text-base flex-wrap">
                          <p className="cursor-pointer">Projects</p>
                          <p className="cursor-pointer">FAQs</p>
                          <p className="cursor-pointer">Blog</p>
                          <p className="cursor-pointer">Contact</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 border-2 rounded-md border-white cursor-pointer hover:scale-105 transform transition-all ease-in-out duration-300">
                      <FaPhone size={18} className="text-white"/>
                      <p className="text-sm text-white">0420 361 450</p>
                    </div>
                </div>
              </header>

              <div className="w-full min-h-screen max-w-[1200px] mx-auto bg-transparent pt-28 md:pt-56 px-4 md:px-6">
                <div className="flex items-start justify-center flex-col lg:flex-row gap-10">
                  <div className="w-full lg:w-3/5 flex flex-col items-center md:items-start space-y-6">
                      <h2
                        className="text-4xl md:text-6xl font-bold text-white md:tracking-wide leading-tight text-center md:text-left"
                        data-aos="fade-up"
                      >
                        Are you in need of a fully installed Patio?
                      </h2>
                      <p
                        className="text-white text-base text-center md:text-left md:text-lg"
                        data-aos="fade-up"
                        data-aos-delay="120"
                      >At My Patio, we use Australian materials and we are confident that we 
                        deliver a superior product at the right price for your budget. We base our business on Trust Integrity 
                        and Honesty.
                      </p>

                      <button
                        className="text-white rounded-md text-base md:text-lg cursor-pointer font-bold bg-blue-700 px-6 py-3 w-fit hover:scale-105 transform transition-all ease-in-out duration-300"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >Contact Us</button>
                  </div>
                  
                  <div
                    className="-mt-12 scale-70 md:scale-100 relative w-full lg:w-2/5 flex items-center justify-center hover:scale-105 transform transition-all ease-in-out duration-500 cursor-pointer"
                    data-aos="zoom-in"
                  >
                    <img 
                      src="/image.png" 
                      alt="image" 
                      className="w-full max-w-[320px] md:max-w-none"
                    />
                    <p
                      className="absolute text-lg md:text-xl font-bold text-red-600 text-center px-2"
                      data-aos="fade-up"
                      data-aos-delay="120"
                    >
                      100% Australian Made Patios
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[1200px] mx-auto min-h-screen bg-transparent flex items-center px-4 md:px-6 py-16">
                  <div className="relative flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/2 h-80 md:h-[500px] overflow-hidden rounded-3xl group" data-aos="fade-right">
                        <img 
                          src="/patio4.jpg" 
                          alt="image" 
                          className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                        />
                    </div>
                    
                    <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
                        <div className="flex flex-col items-center md:items-start space-y-5 md:space-y-2">
                            <p className="text-3xl font-bold text-blue-600 text-center md:text-left">Free Design & Quote</p>
                            <p className="text-sm md:text-base text-center md:text-left">One of our highly trained design assessors will visit you at home, 
                              discuss your ideas, and provide an in-depth quote for your new patio.
                            </p>
                            <p className="text-3xl font-bold text-blue-600 text-center md:text-left">Look at our service to you!</p>
                            <div className="text-base md:text-lg space-y-2">
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Free design and quote</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Custom designed - simple, difficult, or something out of the box</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Fully engineered </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Plans & council included</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Manufacturers' product warranty up to 10 years</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Professionally handled from start to finish</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaCheck size={16} className="text-green-500"/>
                                <p className="text-base">Fully installed or kit form</p>
                              </div>
                            </div>
                            <button className="mt-2 text-white rounded-md text-base md:text-lg cursor-pointer font-bold bg-blue-700 px-6 py-3 w-fit uppercase hover:scale-105 transform transition-all ease-in-out duration-300">Get a Free Quote</button>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="w-full min-h-screen bg-gray-100 py-12 md:py-24 px-4 md:px-6">
                  <div className="w-full max-w-[1200px] mx-auto">
                    <div className="flex flex-col gap-8 ">
                      <div>
                          <p className="w-full text-center text-2xl font-semibold">Our Projects</p>
                      </div>
                      <div className="flex flex-wrap gap-5 justify-center ">
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="0">
                            <img
                              src="/patio1.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="80">
                            <img
                              src="/patio2.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="160">
                            <img
                              src="/patio3.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>

                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="240">
                            <img
                              src="/patio4.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="320">
                            <img
                              src="/patio5.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="400">
                            <img
                              src="/patio6.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>

                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="480">
                            <img
                              src="/patio7.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="560">
                            <img
                              src="/patio8.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>
                          <div className="w-full sm:w-[300px] md:w-[360px] h-64 md:h-72 overflow-hidden group rounded-xl cursor-pointer" data-aos="zoom-in" data-aos-delay="640">
                            <img
                              src="/patio9.jpg"
                              alt="image"
                              className="w-full h-full object-center object-cover 
                                        transition-transform duration-300 ease-in-out 
                                        group-hover:scale-105"
                            />
                          </div>

                      </div>
                    </div>
                  </div>
              </div>

              <div className="w-full bg-blue-900">
                <div className="w-full max-w-[1200px] min-h-80 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-6 py-8" data-aos="fade-up">
                    <div className="text-center md:text-left space-y-2">
                      <p className="text-3xl md:text-4xl font-bold text-white">STAY IN THE LOOP</p>
                      <p className="text-lg md:text-xl text-white">Keep up to date with our latest news & offers</p>
                    </div>
                    <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4" data-aos="fade-up" data-aos-delay="120">
                      <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="rounded-lg text-sm bg-white px-4 sm:px-6 py-3 w-full sm:w-80 md:w-96"  
                      />
                      <button className="text-white rounded-md text-sm cursor-pointer font-bold bg-blue-700 px-6 py-3 w-full sm:w-auto hover:scale-105 transform transition-all ease-in-out duration-300 flex items-center justify-center">
                        <BsFillSendFill size={18} className="text-white mr-2"/>
                        Send
                      </button>
                    </div>
                </div>
              </div>

              <footer className="w-full max-w-[1200px] mx-auto h-fit bg-transparent flex items-center py-16 px-4 md:px-6">
                  <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10">
                      <div className="w-full lg:w-2/5" data-aos="fade-up">
                          <p className="mb-2 font-semibold">Find us!</p>
                          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
                              <iframe
                                src="https://www.google.com/maps?q=-31.734916,115.733892&z=14&output=embed"
                                className="absolute top-0 left-0 h-full w-full border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="My Patio location"
                              />
                          </div>
                      </div>

                      <div className="flex flex-col items-center md:items-start gap-8 w-full sm:w-auto" data-aos="fade-up" data-aos-delay="120">
                          <img src="/image1.png" alt="image" className="w-32"/>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                              <div className="flex items-center gap-4">
                                <FaBriefcase size={16} className="text-red-500"/>
                                <p>ABN: 20082254108</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <FaBriefcase size={16} className="text-red-500"/>
                                <p>ABN: 082254108</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <IoLocationSharp size={16} className="text-red-500"/>
                                <p>Perth, WA</p>
                              </div>
                              <div className="flex items-center gap-4 cursor-pointer">
                                <FaPhone size={16} className="text-red-500"/>
                                <p>0420 361 450</p>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col gap-6 mt-4 w-full sm:w-1/2 lg:w-auto" data-aos="fade-up" data-aos-delay="200">
                          <p className="text-2xl font-bold text-blue-600 text-center md:text-left">Quick Link</p>
                          <div className="flex flex-col items-center md:items-start gap-3">
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">About</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Projects</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Australian Patio</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Building Permit</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Contact</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">FAQ's</p>
                          </div>
                      </div>

                      <div className="flex flex-col gap-6 mt-4 w-full sm:w-1/2 lg:w-auto" data-aos="fade-up" data-aos-delay="300">
                          <p className="text-2xl font-bold text-blue-600 text-center md:text-left">Australian Patio</p>
                          <div className="flex flex-col items-center md:items-start gap-3">
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Flat</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Gable</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Skillion</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Insulated</p>
                              <p className="cursor-pointer hover:text-blue-600 hover:underline transition-all ease-in-out duration-300">Carport</p>
                          </div>
                      </div>
                  </div>
              </footer>

              <div className="w-full bg-blue-900">
                <div className="w-full max-w-[1200px] h-fit mx-auto flex items-center justify-center py-4 px-4 md:px-6">
                    <p className="text-white text-sm md:text-base text-center">© My Patio 2024 | Privacy Policy</p>
                </div>
              </div>
            </div>
        </div>
    );
}
