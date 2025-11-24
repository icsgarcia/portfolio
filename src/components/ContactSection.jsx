import { Mail, ThumbsUp, Linkedin, Github } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
    const formRef = useRef();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setForm({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });
            setSubmitStatus("success");
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
        >
            <div className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-3 dark:text-white tracking-tight">
                    Get in{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                        Touch
                    </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    I'd love to hear from you! Feel free to reach out for
                    collaborations or just to say hi.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl dark:shadow-slate-800/30 dark:hover:shadow-slate-700/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-slate-700 p-8">
                    {/* Contact Info */}
                    <div className="w-full md:w-2/5 p-6">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-6 dark:text-white">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Have a project in mind or want to discuss
                                opportunities? Reach out through the form or via
                                my contact details below.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="size-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 flex items-center justify-center shadow-md transform -rotate-3 transition-transform duration-300 group-hover:rotate-0">
                                        <Mail className="size-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:icsgarcia2002@gmail.com"
                                            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        >
                                            icsgarcia2002@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                        Connect with me
                                    </p>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.linkedin.com/in/ivancsgarcia"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white dark:bg-slate-700 p-3 rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                        <a
                                            href="https://www.github.com/icsgarcia"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white dark:bg-slate-700 p-3 rounded-full shadow-md hover:shadow-lg text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                                            aria-label="GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-48 mt-16 hidden md:block">
                            <div className="absolute bottom-0 left-0 w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1440 320"
                                    className="text-blue-500 dark:text-blue-700 opacity-20"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-3/5">
                        <div className="bg-white/70 dark:bg-slate-700/30 p-6 md:p-8 rounded-xl shadow-md">
                            <h3 className="text-2xl font-bold mb-6 dark:text-white">
                                Send me a message
                            </h3>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="relative">
                                        <label
                                            htmlFor="firstName"
                                            className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            className="block w-full p-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white/70 dark:bg-slate-800/70 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <label
                                            htmlFor="lastName"
                                            className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            className="block w-full p-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white/70 dark:bg-slate-800/70 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="block w-full p-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white/70 dark:bg-slate-800/70 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="block w-full p-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white/70 dark:bg-slate-800/70 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="block w-full p-3 border border-gray-200 dark:border-slate-600 rounded-lg bg-white/70 dark:bg-slate-800/70 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all shadow-sm"
                                        required
                                    ></textarea>
                                </div>

                                {submitStatus === "success" && (
                                    <div className="mb-6 p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg border border-green-100 dark:border-green-800">
                                        Message sent successfully! I'll get back
                                        to you soon.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-100 dark:border-red-800">
                                        Something went wrong. Please try again
                                        later.
                                    </div>
                                )}

                                <div className="text-right">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-600 dark:hover:from-blue-600 dark:hover:to-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 ml-auto"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                    />
                                                </svg>
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
