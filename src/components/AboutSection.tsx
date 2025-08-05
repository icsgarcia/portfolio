import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
    return (
        <section id="about" className="relative px-4 py-25">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                    About
                    <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Web Developer
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a Frontend Web Developer and a recent graduate
                            who loves creating websites that look good and work
                            well. I enjoy building clean and responsive designs
                            using HTML, CSS, JavaScript, and tools like React
                            and Vue. I'm always curious and excited to learn new
                            things that can help me become a better developer.
                        </p>

                        <p className="text-muted-foreground">
                            I also enjoy solving problems and paying attention
                            to small details. I like working with others,
                            sharing ideas, and building projects that people can
                            actually use. I'm always ready for new challenges
                            and looking forward to growing in the world of web
                            development.
                        </p>

                        <div className="flex flex-col justify-center gap-4 pt-4 md:flex-row">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download="resume.pdf"
                                className="border-primary text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border card-hover p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Code className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">
                                        Implement User Interactions
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Create interactive features using HTML,
                                        CSS, and JavaScript frameworks like
                                        React or Vue.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border card-hover p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <User className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">
                                        Build Responsive Interfaces
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Develop websites that look great and
                                        work smoothly across all devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border card-hover p-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Briefcase className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">
                                        Collaborate and Optimize
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Work with teams to improve performance,
                                        accessibility, and maintainability of
                                        web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
