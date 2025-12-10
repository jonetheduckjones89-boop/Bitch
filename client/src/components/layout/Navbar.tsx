import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.startsWith("/dashboard") || location.startsWith("/onboarding")) {
    return null;
  }

  const navLinks = [
    { href: "/product", label: "Product" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/features", label: "Features" },
    { href: "/integrations", label: "Integrations" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-heading font-bold text-foreground tracking-tight group-hover:opacity-80 transition-opacity">
            Cleo.ai
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn(
              "hover:text-primary transition-colors",
              location === link.href ? "text-primary font-semibold" : ""
            )}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">
            Login
          </Link>
          <Link href="/onboarding">
            <Button className="rounded-full px-6 font-medium shadow-none hover:shadow-md transition-all duration-300">
              Start Free Workspace
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
