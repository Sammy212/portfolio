"use client";

import HeroImage from "@/assets/images/3d-compute.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";



export function Hero() {

    // function that receive the specific element_id as string and scroll into that element_id
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <div className="py-32 md:py-48 lg:py-[180px] relative z-0 overflow-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
                <div 
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`
                    }}
                ></div>

                {/* rings */}
                <div className="size-[640px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>

                
                <HeroOrbit size={430} rotation={-14} 
                    shouldOrbit 
                    orbitDuration="60s" 
                    shouldSpin spinDuration="4s"
                >
                    <SparkleIcon
                        className=" size-8 text-[#ed9d3c]/25"
                    />
                </HeroOrbit>
                <HeroOrbit size={440} rotation={79} 
                    shouldOrbit 
                    orbitDuration="62s" 
                    shouldSpin 
                    spinDuration="6s"
                >
                    <SparkleIcon
                        className=" size-5 text-[#ed9d3c]/25"
                    />
                </HeroOrbit>
                <HeroOrbit size={520} rotation={128}>
                    <div
                        className=" size-2 rounded-full bg-[#ed9d3c]/20"
                    />
                </HeroOrbit>
                <HeroOrbit size={530} rotation={178} 
                    shouldOrbit 
                    orbitDuration="67s" 
                    shouldSpin 
                    spinDuration="10s"
                >
                    <SparkleIcon
                        className=" size-10 text-[#ed9d3c]/25"
                    />
                </HeroOrbit>
                <HeroOrbit size={550} rotation={16} 
                    shouldOrbit 
                    orbitDuration="70s" 
                    shouldSpin 
                    spinDuration="10s"
                >
                    <StarIcon
                        className=" size-12 text-[#ed9d3c]"
                    />
                </HeroOrbit>
                <HeroOrbit size={590} rotation={98} 
                    shouldOrbit 
                    orbitDuration="72s" 
                    shouldSpin 
                    spinDuration="10s"
                >
                    <StarIcon
                        className=" size-8 text-[#ed9d3c]"
                    />
                </HeroOrbit>
                <HeroOrbit size={650} rotation={105}>
                    <div
                        className=" size-3 rounded-full bg-[#ed9d3c]/20"
                    />
                </HeroOrbit>
                <HeroOrbit size={710} rotation={144} 
                    shouldOrbit 
                    orbitDuration="120s" 
                    shouldSpin 
                    spinDuration="10s"
                >
                    <SparkleIcon
                        className=" size-16 text-[#ed9d3c]/25"
                    />
                </HeroOrbit>
                <HeroOrbit size={720} rotation={-42}>
                    <div
                        className=" size-5 rounded-full bg-[#ed9d3c]/40"
                    />
                </HeroOrbit>
                <HeroOrbit size={900} rotation={-72} 
                    shouldOrbit 
                    orbitDuration="202s" 
                    shouldSpin 
                    spinDuration="28s"
                >
                    <StarIcon
                        className=" size-28 text-[#ed9d3c]"
                    />
                </HeroOrbit>
            </div>


            <div className="container">
                <div className="flex flex-col items-center">
                    <Image 
                        src={HeroImage} alt="Hero Image"
                        className="size-[140px]"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div 
                            className="bg-[#ed9d3c] size-2.5 rounded-full relative"
                        >
                            <div className="bg-[#ed9d3c] size-2.5 rounded-full absolute inset-0 animate-ping-large"></div>
                        </div>
                        <div className="text-sm font-medium">Available for Projects</div>
                    </div>
                    <div className="max-w-lg mx-auto">
                        <h1 className="font-serif text-2xl text-center mt-8 md:text-3xl">
                            Mern Stack <br />
                            <span className="text-[#ed9d3c] tracking-widest text-4xl md:text-5xl">Developer</span>
                        </h1>
                        <p className="mt-4 text-center text-white/60">Hi! My name is Sam, I help businesses build beautiful user focused digital products.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                            <span 
                                className="font-semibold"
                                onClick={() => scrolltoHash('projects')}
                            >
                                See My Work
                            </span>
                            <ArrowDown className="size-4" />
                        </button>
                        <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-xl">
                            <span 
                                className="font-semibold"
                                onClick={() => scrolltoHash('contact')}
                            >
                                Contact Me
                            </span>
                            <MdOutlineMarkEmailUnread />
                        </button>
                    </div>
                </div>
            </div>            
        </div>
    )
};
