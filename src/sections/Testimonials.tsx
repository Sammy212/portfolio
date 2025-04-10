import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/data";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

export function Testimonials() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Client"
          title="What clients say about me"
          description="Don&apos;t just take my word for it. See what my clients have to say about my work"
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none pr-8
            animate-move-left [animation-duration:140s] sm:[animation-duration:240s] hover:[animation-play-state:paused]
          ">
            {
              [...new Array(2)].fill(0).map((_, index) => (
                <Fragment key={index}>
                  {
                    testimonials.map(testimonial => (
                      <Card 
                        key={testimonial.name}
                        className="max-w-xs md:p-8 p-6 md:max-w-md
                          hover:-rotate-3 hover:shadow-xl transition ease-in-out duration-300
                        "
                      >
                        <div className="flex gap-4 items-center">
                          <Image
                            src={testimonial.avatar} alt=""
                            className="size-20 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-white/40 md:text-base">{testimonial.position}</p>
                            <p className="bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 inline-flex gap-2 font-bold tracking-widest text-xs text-transparent bg-clip-text">{testimonial.company}</p>
                          </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm text-white/80">{testimonial.text}</p>
                      </Card>
                    ))
                  }
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

