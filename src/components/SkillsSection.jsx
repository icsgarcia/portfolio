import skills from "../data/skills";

function SkillsSection() {
    return (
        <section
            id="skills"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300 py-4"
        >
            <div className="container mx-auto px-4 py-16">
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-center dark:text-white tracking-tight">
                        My{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            Skills
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                        Technologies and tools I use to bring products to life
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center border-2 border-gray-100 dark:border-slate-700 rounded-xl p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-md hover:shadow-xl dark:shadow-slate-900/20 dark:hover:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-sm opacity-0 group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-300"></div>
                                    <img
                                        src={skill.image}
                                        alt={skill.name}
                                        className="size-16 lg:size-24 relative block p-3 dark:bg-white dark:rounded-lg transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-center font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
