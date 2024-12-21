import { myProjects } from "@/data/data";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export function Projects() {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="my work"
          title="Featured Results"
          description="Review a few of my projects. Pushing the bounds of design conventions."
        />

        {/* Projects */}
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {
            myProjects.map(project => (
              <Card 
                key={project.id}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                    <hr 
                      className="border-t-2 border-white/5 mt-4 md:mt-5"
                    />
                    <ul className="flex gap-4 mt-4 flex-wrap md:gap-5">
                      {
                        project.techStacks.map(stack => (
                          <div className="flex gap-2 text-white/50 items-center" key={stack.title}>
                            <Image 
                              src={stack.icon} alt="Technology Stack Icon"
                              className="size-5 object-contain md:size-6"
                            />
                            <li className="text-sm">{stack.title}</li>
                          </div>
                        ))
                      }
                    </ul>

                    <div className="flex gap-4 w-full mt-8 sm:justify-center md:justify-start lg:justify-start">
                      <button className=" bg-white hover:bg-white/20 text-gray-950 text-sm h-12 px-4 md:px-8 rounded-xl cursor-pointer transition ease-in-out duration-300">
                        <a href={project.link}
                          className="flex items-center justify-center gap-2"
                          target="_blank"
                        >
                          <FaLink />
                          View Live
                        </a>
                      </button>
                      <button className="bg-[#ed9d3c] hover:bg-white/20 text-gray-950 text-sm h-12 px-4 md:px-8 rounded-xl cursor-pointer transition ease-in-out duration-300">
                        <a href={project.githubLink} 
                          className="flex items-center justify-center gap-2"
                          target="_blank"
                        >
                          <FaGithub />
                          View Code
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <Image 
                      src={project.image} alt="Project Image"
                      sizes=""
                      className="mt-8 -mb-4 lg:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  )
};
