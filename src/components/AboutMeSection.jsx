import { useState } from "react";

function AboutMeSection() {
    const [activeTab, setActiveTab] = useState("About");
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
        >
            <div className="container mx-auto px-2 sm:px-4 py-10 sm:py-16">
                <div className="flex flex-col md:flex-row justify-center w-full md:gap-8">
                    <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-md opacity-20 dark:opacity-30 animate-pulse"></div>
                            <img
                                src="/images/about-image.png"
                                alt="aboutme-image"
                                className="block relative mx-auto w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-xl border-4 border-white dark:border-slate-700 dark:opacity-90 transition-all duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-3 sm:p-6 md:p-8 border border-gray-100 dark:border-slate-700">
                            <h2 className="text-3xl sm:text-4xl text-center font-bold mb-4 sm:mb-6 dark:text-white tracking-tight">
                                About{" "}
                                <span className="text-blue-600 dark:text-blue-400">
                                    Me
                                </span>
                            </h2>
                            <div className="mb-6 sm:mb-8 overflow-x-auto">
                                <nav className="flex justify-center items-center min-w-max">
                                    <ul className="flex gap-2 sm:gap-4 border-2 dark:border-slate-700 rounded-full px-2 sm:px-8 py-2 sm:py-3 bg-white/80 dark:bg-slate-900/80 shadow-md">
                                        {["About", "School", "Experience"].map(
                                            (tab) => (
                                                <li
                                                    key={tab}
                                                    onClick={() =>
                                                        setActiveTab(tab)
                                                    }
                                                    className={`cursor-pointer px-2 sm:px-4 py-1 rounded-full transition-all duration-300 text-sm sm:text-base font-medium whitespace-nowrap ${
                                                        activeTab === tab
                                                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white dark:from-blue-500 dark:to-indigo-500 shadow-md"
                                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                                                    }`}
                                                >
                                                    {tab}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                            </div>

                            <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-3 sm:p-6">
                                {activeTab === "About" && <AboutContent />}
                                {activeTab === "School" && <SchoolContent />}
                                {activeTab === "Experience" && (
                                    <ExperienceContent />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AboutContent = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-md transform -rotate-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>
                <p className="text-base sm:text-lg font-medium dark:text-white leading-relaxed">
                    I'm a{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg sm:text-xl">
                        Frontend Developer
                    </span>{" "}
                    passionate about creating clean, interactive user
                    experiences, now expanding into full stack development to
                    build seamless end-to-end solutions.
                </p>
            </div>

            <div className="pl-0 sm:pl-14 space-y-5 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed border-l-4 border-blue-500/30 dark:border-blue-500/50 pl-4 py-1">
                    Hey! I'm a frontend developer who loves bringing ideas to
                    life through clean design and interactive user experiences.
                    I've spent a lot of time working with HTML, CSS, and
                    JavaScript frameworks, and I enjoy the creative side of
                    coding—making interfaces not just functional, but fun and
                    easy to use.
                </p>
                <p className="leading-relaxed">
                    Lately, I've been diving deeper into backend technologies
                    because I want to grow into a full stack developer. I like
                    the challenge of understanding the whole picture—how the
                    frontend connects with the backend—and I'm excited about
                    building projects from start to finish. Outside of coding,
                    I'm always curious, learning new things, and pushing myself
                    to become better every day.
                </p>
            </div>

            <div className="flex justify-center mt-8">
                <a
                    href="/resume.pdf"
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-600 dark:hover:from-blue-600 dark:hover:to-indigo-700 text-white rounded-full transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    <span className="whitespace-nowrap font-medium">
                        Download Resume
                    </span>
                </a>
            </div>
        </div>
    );
};

const SchoolContent = () => {
    return (
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-blue-500/50 dark:from-blue-400/40 dark:via-indigo-400/40 dark:to-blue-400/40">
            <div className="relative pl-9 sm:pl-12">
                <div className="absolute left-0 top-1 w-6 sm:w-8 h-6 sm:h-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md transform -rotate-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 sm:h-4 w-3 sm:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                    </svg>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/90 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-800/50 dark:hover:shadow-slate-700/50 border border-gray-100 dark:border-slate-700 border-l-4 border-l-blue-500/60 dark:border-l-blue-500/60 transition-all duration-300 hover:-translate-y-1 group">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        Bachelor of Science in Information Technology
                    </h3>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0 text-blue-600 dark:text-blue-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="flex-wrap font-medium">
                            University of the Assumption • 2021-2025
                        </p>
                    </div>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed border-l-4 border-blue-500/30 dark:border-blue-500/50 pl-3 py-1">
                        Specialized in Web Development with a focus on modern
                        frontend technologies and user experience design.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            Cum laude
                        </span>
                        <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            Web Development
                        </span>
                        <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            Full Stack
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExperienceContent = () => {
    return (
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-blue-500/50 dark:from-blue-400/40 dark:via-indigo-400/40 dark:to-blue-400/40">
            <div className="relative pl-9 sm:pl-12">
                <div className="absolute left-0 top-1 w-6 sm:w-8 h-6 sm:h-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md transform -rotate-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 sm:h-4 w-3 sm:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                </div>

                <div className="bg-white/90 dark:bg-slate-800/90 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-800/50 dark:hover:shadow-slate-700/50 border border-gray-100 dark:border-slate-700 border-l-4 border-l-blue-500/60 dark:border-l-blue-500/60 transition-all duration-300 hover:-translate-y-1 group">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        Frontend Developer Intern
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex items-center text-sm sm:text-base">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 flex-shrink-0 text-blue-600 dark:text-blue-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                        </svg>
                        <span className="font-medium">
                            TORO Cloud • January - April 2025
                        </span>
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            React
                        </span>
                        <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            Node.js
                        </span>
                        <span className="px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            MongoDB
                        </span>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm sm:text-base">
                        <li className="flex items-start transform transition-transform duration-200 hover:-translate-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Developed and maintained responsive web
                                applications using HTML, CSS, JavaScript,
                                Typescript, React, Node, Express, and MongoDB.
                            </span>
                        </li>
                        <li className="flex items-start transform transition-transform duration-200 hover:-translate-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Integrated RESTful APIs to dynamically render
                                data and enhance user interactivity.
                            </span>
                        </li>
                        <li className="flex items-start transform transition-transform duration-200 hover:-translate-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Managed code repositories and facilitated
                                collaborative development using Git, GitHub, and
                                Bitbucket.
                            </span>
                        </li>
                        <li className="flex items-start transform transition-transform duration-200 hover:-translate-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Contributed to maintaining clean, reusable, and
                                well-documented codebases.
                            </span>
                        </li>
                    </ul>
                    <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-3 opacity-75">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium italic">
                            Internship completed with excellence recognition
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;
