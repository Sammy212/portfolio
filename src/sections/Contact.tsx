import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import grainBG from "@/assets/images/grain.jpg";

export function Contact() {
    return (
        <div className="py-16 pt-14 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
                <div 
                    className="absolute inset-0 opacity-5 -z-10"
                    style={{
                        backgroundImage: `url(${grainBG.src})`
                    }}
                ></div>
                <div className="flex flex-col md:flex-row md:text-left gap-8 md:gap-16 items-center">
                    <div>
                        <h2 className="font-serif text-2xl md:text-3xl">
                            Let’s turn your vision into something extraordinary
                        </h2>
                        <p className="text-sm mt-2 md:text-base">
                            Have a vision in mind? Let's collaborate and turn it into something extraordinary. Reach out, and let's make it happen!
                        </p>
                    </div>

                    <div>
                        <button
                            className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-4 justify-center w-max"
                        >
                            <span className="font-semibold">Contact Me</span>
                            <FaArrowUpRightFromSquare 
                                className="text-sm"
                            />
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};
