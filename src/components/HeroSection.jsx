function HeroSection() {
    const scrollToSection = (name) => {
        const section = document.getElementById(name.toLowerCase());

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section
            id="home"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
        >
            <div className="container min-h-screen mx-auto px-4 py-16">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full pt-20">
                    <div className="flex flex-col md:p-8 md:w-1/2">
                        <h1 className="text-center md:text-left md:text-3xl lg:text-6xl font-bold mb-4 dark:text-white tracking-tight">
                            Hi, I'm{" "}
                            <span className="text-blue-600 dark:text-blue-400">
                                Ivan Garcia
                            </span>
                        </h1>
                        <p className="text-center md:text-left md:text-xl lg:text-3xl italic mb-6 text-gray-700 dark:text-gray-300 font-medium">
                            Frontend Developer
                        </p>
                        <p className="mb-8 lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-white/70 dark:bg-slate-800/50 p-5 rounded-xl shadow-sm">
                            I’m a Frontend Developer passionate about creating
                            responsive, intuitive, and visually appealing
                            websites and applications that bring ideas to life.
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <p
                                onClick={() => scrollToSection("about")}
                                className="lg:text-lg cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white rounded-full px-8 py-3 text-center font-medium transition-all duration-300 hover:shadow-md"
                            >
                                Learn more
                            </p>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="lg:text-lg cursor-pointer bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 rounded-full px-8 py-3 text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                My resume
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-30 dark:opacity-40 -z-10"></div>
                            <img
                                width={500}
                                height={700}
                                src="images/hero-image.png"
                                alt="hero-image"
                                className="block max-w-full h-auto dark:opacity-90 rounded-3xl shadow-xl border-2 border-white/60 dark:border-slate-700/60 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
