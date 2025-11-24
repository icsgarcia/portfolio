import { Mail, Linkedin, Github } from "lucide-react";

function Footer() {
    const scrollToSection = (name) => {
        const section = document.getElementById(name.toLowerCase());

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <footer className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-900 dark:border-t dark:border-slate-800 transition-colors duration-300">
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="container mx-auto px-4 py-16">
                <p className="text-center text-3xl md:text-4xl font-bold mb-8 dark:text-white tracking-tight">
                    <span className="text-blue-600 dark:text-blue-400">
                        Ivan
                    </span>{" "}
                    Garcia
                    <span className="block text-xl md:text-2xl mt-2 font-medium text-gray-600 dark:text-gray-300">
                        Frontend Developer
                    </span>
                </p>

                <div className="mb-12">
                    <nav>
                        <ul className="grid grid-cols-2 md:flex gap-4 md:gap-8 justify-center text-center text-lg">
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
                                    className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-1 px-2 font-medium hover:scale-105 inline-block"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="max-w-md mx-auto border-t border-b py-8 border-gray-200 dark:border-slate-800">
                    <div className="flex flex-wrap justify-center gap-8">
                        <a
                            href="mailto:icsgarcia2002@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                            aria-label="Email"
                        >
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg">
                                <Mail size={22} />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ivancsgarcia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg">
                                <Linkedin size={22} />
                            </div>
                        </a>
                        <a
                            href="https://www.github.com/icsgarcia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md hover:shadow-lg">
                                <Github size={22} />
                            </div>
                        </a>
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-500 mt-8 text-sm font-medium">
                        © {new Date().getFullYear()} Ivan Garcia. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
