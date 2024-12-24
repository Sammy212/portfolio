import { 
    FaArrowUpRightFromSquare,
    FaSkype,
    FaPhone
} from "react-icons/fa6";
import grainBG from "@/assets/images/grain.jpg";
import { MdMarkEmailUnread } from "react-icons/md";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
  } from "@/components/ui/drawer";
  

export function Contact() {
    return (
        <div className="py-16 pt-14 lg:py-24 lg:pt-20" id="contact">
            <div className="container">
                <div className="bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">

                    {/* Grain Background Image */}
                    <div 
                        className="absolute inset-0 opacity-5 -z-10"
                        style={{
                            backgroundImage: `url(${grainBG.src})`
                        }}
                    ></div>
                    <div className="flex flex-col md:flex-row md:text-left gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s turn your vision into something extraordinary
                            </h2>
                            <p className="text-sm mt-2 md:text-base">
                                Have a vision in mind? Let&apos;s collaborate and turn it into something extraordinary. Reach out, and let&apos;s make it happen!
                            </p>
                        </div>

                        <Drawer>
                            <DrawerTrigger asChild>
                                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-4 justify-center w-max">
                                    <span className="font-semibold text-nowrap">Contact Me</span>
                                    <FaArrowUpRightFromSquare 
                                        className="text-sm"
                                    />
                                </button>
                            </DrawerTrigger>
                            <DrawerContent
                                className="bg-gray-900 text-white border-none"
                            >
                                <DrawerHeader className="container">
                                    <DrawerClose />
                                </DrawerHeader>
                                <div className="container pb-16">
                                    <h3 className="font-serif text-3xl">Let&apos;s Collaborate</h3>
                                    <div className="flex flex-col mt-7 gap-4 justify-between md:flex-row md:gap-8">
                                        <div>
                                            <h4
                                                className="font-serif text-lg text-[#ed9d3c]/60"
                                            >
                                                Email
                                            </h4>
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samuelafo.212@gmail.com" target="_blank" rel="noopener noreferrer">
                                                <div className="flex items-center gap-2">
                                                    <MdMarkEmailUnread 
                                                        className="text-lg text-[#ed9d3c]"
                                                    />
                                                    <p
                                                        className="text-white/80"
                                                    >samuelafo.212@gmail.com</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <h4
                                                className="font-serif text-lg text-[#ed9d3c]/60"
                                            >
                                                Phone
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <FaPhone 
                                                    className="text-sm text-[#ed9d3c] animate-bounce"
                                                />
                                                <p
                                                    className="text-white/80"
                                                >+234 703 620 9261</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4
                                                className="font-serif text-lg text-[#ed9d3c]/60"
                                            >
                                                Skype
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <FaSkype 
                                                    className="text-lg text-[#ed9d3c]"
                                                />
                                                <p
                                                    className="text-white/80"
                                                >its_sammy212</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
};
