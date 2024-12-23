import { myStrengths } from "@/data/data";
import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

export function Tape() {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-[#DA498D] to-[#ed9d3c]/80 -rotate-3 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:120s]">
                        {
                            [...new Array(2)].fill(0).map((_, index) => (
                                <Fragment key={index}>
                                    {
                                        myStrengths.map(strength => (
                                            <div 
                                                className="inline-flex gap-4 items-center"
                                                key={strength}
                                            >
                                                <span className="text-gray-900 font-extrabold uppercase text-sm">
                                                    {strength}
                                                </span>
                                                <StarIcon
                                                    className="size-6 text-gray-900 -rotate-12"
                                                />
                                            </div>
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
