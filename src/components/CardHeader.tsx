import StarIcon from "@/assets/icons/star.svg";

export function CardHeader(
    {title, description}: {
        title: string;
        description: string;
    }
) {
    return (
        <div className="flex flex-col">
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-[#ed9d3c]"/>
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{description}</p>
        </div>
    )
};
