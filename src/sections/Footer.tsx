import { footerLinks } from "@/data/data";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative overflow-x-clip">
            <div 
                className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#ed9d3c]/30
                    [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
                    pointer-events-none
                    -z-10
                "
            ></div>
            <div className="container">
                <div className="flex flex-col items-center md:flex-row border-t border-white/15 py-6 text-sm gap-8 md:justify-between">
                    <p className="text-white/40 flex gap-2 items-center"><FaGithub/> <a href="https://github.com/Sammy212/portfolio" target="_blank">View code on GitHub</a></p>
                     
                    <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-5">
                        {
                            footerLinks.map((link) => (
                                <Link 
                                    href={link.href} target="_blank" rel="noopener noreferrer"
                                    key={link.LinkItem}
                                    className="inline-flex items-center gap-1.5 text-white/90 hover:text-white/20 transition ease-in-out duration-300"
                                >
                                    <button 
                                        className="font-semibold "
                                    >
                                        {link.LinkItem}
                                    </button>
                                    <link.icon/>
                                </Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </footer>
    )
};
