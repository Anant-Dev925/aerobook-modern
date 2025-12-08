import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Fleet", href: "/fleet", type: "link" },
    { name: "Services", href: "/#services", type: "anchor" },
    { name: "Destinations", href: "/#destinations", type: "anchor" },
    { name: "Testimonials", href: "/#testimonials", type: "anchor" },
    { name: "About", href: "/#about", type: "anchor" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight">AURA JETS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button asChild variant="default" className="rounded-full px-6">
                <a href="/#book">Book Flight</a>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="pt-16 px-6">
                <div className="flex flex-col space-y-6 mt-4">
                  {navItems.map((item) => (
                    item.type === "link" ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-xl font-medium py-2 border-b border-border/50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-xl font-medium py-2 border-b border-border/50"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                  <Button asChild className="w-full mt-4 h-12 text-lg">
                    <a href="/#book" onClick={() => setIsOpen(false)}>Book Flight</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}