// "use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import TheFifthDis from "@/assets/images/the-5th-discipline.png";
import Image from "next/image";
import { techStack, tools } from "@/data/data";
import mapImage from "@/assets/images/map.png";
import mapPin from "@/assets/images/map-pin.png";


export  function AboutMe() {
    return (
        <div className="py-20 container">
            <SectionHeader
                title="About Me"
                eyebrow="Samuel in 60 Seconds"
                description="I enjoy finding creative solutions through technology and design"
            />

            <div className="mt-20">
                <Card className="h-[320px]">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2">
                            <StarIcon className="size-9 text-[#ed9d3c]"/>
                            <h3 className="font-serif text-3xl">Current Reads</h3>
                        </div>
                        <p className="text-sm text-white/60 mt-2">Explore books shaping my perspectives that define my passion and journey.</p>
                    </div>
                    <div className="w-40 mx-auto mt-8">
                        <Image 
                            src={TheFifthDis} alt="Book Image"
                            />
                    </div>
                </Card>
                
                <Card>
                    <div>
                        <StarIcon/>
                        <h3>Tech Stack</h3>
                        <p>My technology stack knowledge</p>
                    </div>

                    {/* Tool Stack */}
                    <div>
                        {
                            techStack.map(item => (
                                <div className="fle" key={item.name}>
                                    <p>{item.name}</p>
                                    <item.icon 
                                        className="size-10" 
                                    />
                                </div>
                            ))
                        }
                    </div>
                </Card>

                <Card>
                    <div>
                        <StarIcon/>
                        <h3>Tool Quiver</h3>
                        <p>Here are some of the tools I love to use.</p>
                    </div>
                    <div className="tool">
                        {
                            tools.map(tool => (
                                <div key={tool.tool}>
                                    <p>{tool.tool}</p>
                                    <tool.image 
                                        className="size-6"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </Card>
                <Card>
                    <div>
                        <Image src={mapPin} alt="Map Pin"/>
                        <Image src={mapImage} alt="Map Image"/>
                    </div>
                </Card>
            </div>
        </div>
    )
};
