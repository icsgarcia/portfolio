import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast.success("Message sent!", {
                description:
                    "Thank you for your message. I'll get back to you soon.",
            });

            setIsSubmitting(false);
        }, 1500);
    };
    return (
        <section id="contact" className="bg-secondary/30 relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
                    Have a project in mind or want to collaborate? Feel free to
                    react out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="space-y-8">
                        <h3 className="mb-6 text-2xl font-semibold">
                            Contact Information
                        </h3>

                        <div className="justify-center space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:icsgarcia2002@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        icsgarcia2002@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+639274518883"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +63 9274518883
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 rounded-full p-3">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Candaba, Pampanga, Philippines
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="mb-4 font-medium">
                                Connect With Me
                            </h4>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="www.linkedin.com/in/ivancsgarcia"
                                    target="_blank"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.facebook.com/Ivancs.garciaaa"
                                    target="_blank"
                                >
                                    <Facebook />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <X />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg p-8 shadow-xs">
                        <h3 className="mb-6 text-2xl font-semibold">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="John Doe"
                                    className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="johndoe@email.com"
                                    className="border-input bg-background focus:ring-primary w-full rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    placeholder="Hello, I'd like to talk about..."
                                    className="border-input bg-background focus:ring-primary w-full resize-none rounded-md border px-4 py-3 focus:ring-2 focus:outline-hidden"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button flex w-full items-center justify-center gap-2",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
