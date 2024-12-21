import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import TheFifthDis from "@/assets/images/the-5th-discipline.png";
import Image from "next/image";


export  function AboutMe() {
    return (
        <div className="container pb-80">
            <SectionHeader
                title="About Me"
                eyebrow="Samuel in 60 Seconds"
                description="I enjoy finding creative solutions through technology and design"
            />

            <div>
                <Card>
                    <div>
                        <StarIcon/>
                        <h3>Reads That Resonate</h3>
                        <p>Explore books shaping my perspectives that define my passion and journey.</p>
                    </div>
                    <Image 
                        src={TheFifthDis} alt="Book Image"
                        className=""
                    />
                </Card>
                <Card>
                    <div>
                        <StarIcon/>
                        <h3>Tech Stack</h3>
                        <p>My technology stack knowledge</p>
                    </div>

                    {/* Tool Stack */}
                    <div>

                    </div>
                </Card>
            </div>
        </div>
    )
};
