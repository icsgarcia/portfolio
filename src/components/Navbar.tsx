import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <nav
            className={cn(
                "fixed z-40 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 py-3 shadow-xs backdrop-blur-md"
                    : "py-5",
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    href="#hero"
                    className="text-primary flex items-center text-xl font-bold"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ivan</span>{" "}
                        Garcia
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden space-x-8 md:flex">
                    {navItems.map((item, key) => (
                        <a
                            href={item.href}
                            key={key}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    className="text-foreground z-50 p-2 md:hidden"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div
                    className={cn(
                        "bg-background/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0",
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl md:hidden">
                        {navItems.map((item, key) => (
                            <a
                                href={item.href}
                                key={key}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
