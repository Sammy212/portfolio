import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/data";
import Image from "next/image";
import grainBG from "@/assets/images/grain.jpg";

export function Testimonials() {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Client"
          title="What clients say about me"
          description="Don't just take my word for it. See what my clients have to say about my work"
        />

        <div>
          {
            testimonials.map(testimonial => (
              <div 
                key={testimonial.name}
                className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-0" 
              >
                <div 
                  className="absolute inset-0 opacity-5 -z-10" 
                  style={{
                    backgroundImage: `url(${grainBG.src})`,
                  }}
                ></div>
                <Image
                  src={testimonial.avatar} alt=""
                />
                <div className="name">{testimonial.name}</div>
                <div className="pos">{testimonial.position}</div>
                <p className="tet">{testimonial.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

