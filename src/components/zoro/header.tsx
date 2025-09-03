import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for combining Tailwind classes
function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

// Updated navigation links to reflect the new, broader scope
const nav = [
  { label: "Live", href: "#upcoming", isLive: true },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Connect", href: "#contact" },
];

// **IMPORTANT**: Replace with your actual business WhatsApp number.
const whatsappUrl =
  "https://wa.me/918606693695?text=Hello!%20I'm%20interested%20in%20ZORO%20Events%20and%20would%20like%20to%20get%20a%20quote.";

// A small component for the "Live" indicator
const LiveIndicator = () => (
  <span className="ml-2 relative inline-flex items-center h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // This function runs when the component mounts
    const handleScroll = () => {
      // Sets 'scrolled' to true if user scrolls more than 80px, otherwise false
      setScrolled(window.scrollY > 80);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on initial load

    // Cleanup function to remove the listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        // Apply different styles based on the 'scrolled' state
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="ZORO Events Home"
        >
          {/* Dynamically switch between the white and black logo */}
          <img
            src={
              scrolled ? "/images/zoro-logo.png" : "/images/zoro-logo-white.png"
            }
            alt="ZORO Events logo"
            width={36}
            height={36}
          />
          <span
            className={cn(
              "text-sm font-semibold tracking-wide",
              scrolled ? "text-black" : "text-white"
            )}
          >
            ZORO EVENTS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "text-sm underline-offset-4 hover:underline",
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-white hover:text-gray-200"
              )}
            >
              {n.label}
              {n.isLive && <LiveIndicator />}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              scrolled
                ? "border border-black bg-black text-white hover:bg-white hover:text-black"
                : "border border-white bg-white text-black hover:bg-transparent hover:text-white"
            )}
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={cn(
            "inline-flex items-center rounded-md p-2 md:hidden",
            scrolled ? "text-black border-gray-200 border" : "text-white"
          )}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {open && (
        <div
          className="border-t border-gray-200 bg-white md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-md px-2 py-2 text-base text-gray-800 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {n.label}
                {n.isLive && <LiveIndicator />}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full rounded-md border border-black bg-black px-3 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-black"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
