import { ArrowUp } from "lucide-react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-card border-border relative mt-12 flex flex-wrap items-center justify-between border-t px-4 py-12 pt-8">
            <p className="text-muted-foreground text-sm">
                &copy; {year} Ivan Garcia, All rights reserved.
            </p>

            <a
                href="#hero"
                className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
}

export default Footer;
