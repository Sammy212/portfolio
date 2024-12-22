import { footerLinks } from "@/data/data";

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    <div>© 2024. All right reserved.</div>
                    <nav className="flex flex-col md:flex-row row gap-2">
                        {
                            footerLinks.map(link => (
                                <div>
                                    <a href={link.href} target="_blank">{link.LinkItem}</a>
                                </div>
                            ) )
                        }
                    </nav>
                </div>
            </div>
        </footer>
    )
};
