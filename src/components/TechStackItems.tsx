import { techStack } from "@/data/data";
import { twMerge } from "tailwind-merge";

export function TechStackItems({ techStackitems, className }: {
    techStackitems: {
        tool: string;
        icon: React.ElementType;
    }[];
    className?: string;
}) {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className="flex flex-none py-0.5">
                {
                    techStack.map(item => (
                        <div  key={item.tool}
                            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                        >
                            <item.icon 
                                className="size-10" 
                            />
                            <p className="font-semibold">{item.tool}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
