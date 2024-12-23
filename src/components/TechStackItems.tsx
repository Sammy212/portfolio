import { techStack } from "@/data/data";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export function TechStackItems({ 
    techStackitems, 
    className, 
    wrapperClassName 
}: {
    techStackitems: {
        tool: string;
        icon: React.ElementType;
    }[];
    className?: string;
    wrapperClassName?: string;
}) {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div 
                className={twMerge(
                    "flex flex-none py-0.5 gap-6 pr-6", 
                    wrapperClassName
                )}
            >
                {
                    [...new Array(2)].fill(0).map((_, index) => (
                        <Fragment key={index}>
                            {techStackitems.map(item => (
                                <div key={item.tool}
                                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                                >
                                    <item.icon 
                                        className="size-10 text-[#ed9d3c]/80" 
                                    />
                                    <p className="font-semibold">{item.tool}</p>
                                </div>
                            ))}
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
};
