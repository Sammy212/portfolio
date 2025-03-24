"use client";

export function Header() {

    // function that receive the specific element_id as string and scroll into that element_id
    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <header className="flex justify-center items-center fixed top-3 w-full z-50">
            <nav 
                className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
            >
                <a className="nav-item"
                    onClick={() => scrolltoHash('projects')}
                >
                    Projects
                </a>
                <a 
                    onClick={() => scrolltoHash('about')} 
                    className="nav-item"
                >
                    About
                </a>
                <a href="./samuelAfolabi-Resume.pdf" className="nav-item" download aria-label="Download Resume">Resume</a>
                <a 
                    onClick={() => scrolltoHash('contact')} 
                    className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
