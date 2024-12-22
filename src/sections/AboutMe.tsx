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
        <div className="py-20 container">
            <SectionHeader
                title="About Me"
                eyebrow="Samuel in 60 Seconds"
                description="I enjoy finding creative solutions through technology and design"
            />

            <div className="mt-20 flex flex-col gap-8">
                <Card className="h-[320px]">
                    <CardHeader
                        title="Current Reads"
                        description="Explore books shaping my perspectives that define my passion and journey."
                        
                    />
                    <div className="w-40 mx-auto mt-8">
                        <Image 
                            src={TheFifthDis} alt="Book Image"
                        />
                    </div>
                </Card>
                
                <Card className="h-[320px] p-0">
                    <CardHeader
                        title="Tech Stack"
                        description="My technology stack knowledge"
                        className="px-6 pt-6"
                    />

                    {/* Tool Stack */}
                    <TechStackItems
                        techStackitems={techStack}
                        className="mt-6"
                    />
                    <TechStackItems
                        techStackitems={techStack}
                        className="mt-6"
                        wrapperClassName="-translate-x-1/2"
                    />
                </Card>

                <Card>
                    <CardHeader
                        title="Tool Quiver"
                        description="Here are some of the tools I love to use."
                    />
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
