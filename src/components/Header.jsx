import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "contact"];
            const sectionOffsets = sections.map((id) => {
                const element = document.getElementById(id);
                return element
                    ? {
                          id,
                          offset: element.offsetTop - 100,
                      }
                    : { id, offset: 0 };
            });

            const scrollPosition = window.scrollY;

            // Find the current section
            for (let i = sectionOffsets.length - 1; i >= 0; i--) {
                if (scrollPosition >= sectionOffsets[i].offset) {
                    setActiveSection(sectionOffsets[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (name) => {
        const section = document.getElementById(name.toLowerCase());

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed left-0 top-0 w-full z-50">
            <div className="flex justify-between md:justify-around items-center py-4 px-6 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-slate-800 transition-all duration-300">
                <div className="text-xl font-bold dark:text-white">
                    <span className="text-blue-600 dark:text-blue-400">
                        Ivan
                    </span>{" "}
                    Garcia
                </div>
                <div className="hidden md:block">
                    <nav>
                        <ul className="flex justify-between gap-8">
                            {[
                                "Home",
                                "About",
                                "Skills",
                                "Projects",
                                "Contact",
                            ].map((item) => (
                                <li
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all relative px-1 py-2 font-medium ${
                                        activeSection === item.toLowerCase()
                                            ? "text-blue-600 dark:text-blue-400"
                                            : ""
                                    }`}
                                >
                                    {item}
                                    {activeSection === item.toLowerCase() && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 transition-colors"
                    aria-label="Toggle menu"
                >
                    <Menu />
                </button>
            </div>
            {isMenuOpen && (
                <div className="block absolute z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md w-full py-8 md:hidden shadow-lg border-t dark:border-slate-800 transition-all duration-300">
                    <nav>
                        <ul className="flex flex-col justify-between gap-6 items-center">
                            {[
                                "Home",
                                "About",
                                "Skills",
                                "Projects",
                                "Contact",
                            ].map((item) => (
                                <li key={item} className="w-full text-center">
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`block py-2 px-6 mx-8 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-lg font-medium ${
                                            activeSection === item.toLowerCase()
                                                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                                : ""
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex justify-center mt-8 items-center md:hidden">
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
