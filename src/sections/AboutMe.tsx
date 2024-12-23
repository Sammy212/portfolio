// "use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import TheFifthDis from "@/assets/images/the-5th-discipline.png";
import Image from "next/image";
import { techStack, tools } from "@/data/data";
import mapImage from "@/assets/images/map.png";
import mapPin from "@/assets/images/map-pin.png";
import { CardHeader } from "@/components/CardHeader";
import { TechStackItems } from "@/components/TechStackItems";


export  function AboutMe() {
    return (
        <div className="py-20 container lg:py-28">
            <SectionHeader
                title="About Me"
                eyebrow="Samuel in 60 Seconds"
                description="I enjoy finding creative solutions through technology and design"
            />

            <div className="mt-20 flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                    {/* Current Reads */}
                    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                        <CardHeader
                            title="My Reads"
                            description="Explore books shaping my perspectives that define my passion and journey."
                            
                        />
                        <div className="w-40 mx-auto mt-2 md:mt-0">
                            <Image 
                                src={TheFifthDis} alt="Book Image"
                            />
                        </div>
                    </Card>
                    
                    {/* TechStack */}
                    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                        <CardHeader
                            title="Tech Stack"
                            description="My technology stack knowledge"
                            className=""
                        />

                        {/* Tool Stack */}
                        <TechStackItems
                            techStackitems={techStack}
                            className=""
                            wrapperClassName="animate-move-left [animation-duration:20s]"
                        />
                        <TechStackItems
                            techStackitems={techStack}
                            className="mt-6"
                            wrapperClassName="animate-move-right [animation-duration:36s]"
                        />
                    </Card>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3"
                >
                    {/* Tools */}
                    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                        <CardHeader
                            title="Tool Quiver"
                            description="Here are some of the tools I love to use."
                            className="px-6 py-6"
                        />
                        <div className="relative flex-1">
                            {
                                tools.map(tool => (
                                    <div key={tool.tool}
                                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 rounded-full py-1.5 absolute"
                                        style={{
                                            top: tool.top,
                                            left: tool.left,
                                        }}
                                    >
                                        <p className="font-medium text-gray-950">{tool.tool}</p>
                                        <tool.image 
                                            className="size-6"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </Card>

                    {/* Location */}
                    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                        <div>
                            <Image 
                                src={mapImage} alt="Map Image"
                                className="h-[320px] w-full object-cover"
                            />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                rounded-full bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80
                                after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/5
                            ">
                                <div 
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 -z-20 animate-ping [animation-duration:2s]"
                                ></div>
                                <Image src={mapPin} alt="Map Pin"
                                    className="rounded-full size-24"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
};
