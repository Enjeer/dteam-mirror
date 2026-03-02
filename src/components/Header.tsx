import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Networks", href: "#networks" },
  { label: "Services", href: "#services" },
  { label: "B2B Solutions", href: "#b2b" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 md:px-12 xl:px-32 h-[72px] md:h-[104px]">
        <a href="#hero" className="font-pixel text-primary text-lg md:text-xl tracking-wider">
          DTEAM
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#networks" className="hidden md:block btn-pixel text-xs py-2 px-6">
          STAKE NOW
        </a>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-sm text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#networks" className="btn-pixel text-xs py-2 px-6 text-center" onClick={() => setMobileOpen(false)}>
              STAKE NOW
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
