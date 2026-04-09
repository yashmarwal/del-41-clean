import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Sun, Moon, ShoppingCart, Leaf } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { menuItems } from "@/data/menuData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { dark, toggleDark, count } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/reserve", label: "Reserve Table" },
    { to: "/menu?tab=cart", label: "Order with WhatsApp" },
    { to: "/#contact", label: "Contact" },
  ];

  const isActive = (to: string) => {
    if (to.startsWith("/#")) return location.pathname === "/" && location.hash === to.slice(1);
    return location.pathname === to.split("?")[0];
  };

  const results = query.length > 1
    ? menuItems.filter(i => i.name.toLowerCase().includes(query.toLowerCase()) || (i.description || "").toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  const handleResultClick = (item: typeof menuItems[0]) => {
    setSearchOpen(false);
    setQuery("");
    navigate(`/menu?category=${encodeURIComponent(item.category)}&highlight=${item.id}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="text-accent" size={24} />
          <span className="font-heading text-2xl font-bold text-accent">Del 41</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium transition-colors ${isActive(l.to) ? "text-accent" : "text-primary-foreground hover:text-accent"}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {searchOpen ? (
            <div className="relative">
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-48 md:w-64 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm outline-none"
              />
              <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                <X size={16} />
              </button>
              {results.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-card rounded-md shadow-lg border border-border max-h-80 overflow-y-auto">
                  {results.map(r => (
                    <button key={r.id} onClick={() => handleResultClick(r)} className="w-full text-left px-3 py-2 hover:bg-muted flex justify-between items-center text-sm">
                      <div>
                        <div className="font-medium text-card-foreground">{r.name}</div>
                        <div className="text-xs text-muted-foreground">{r.category}</div>
                      </div>
                      <span className="text-accent font-semibold">₹{r.price}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="text-primary-foreground hover:text-accent transition-colors">
              <Search size={20} />
            </button>
          )}

          <button onClick={toggleDark} className="text-primary-foreground hover:text-accent transition-colors">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/menu?tab=cart" className="relative text-primary-foreground hover:text-accent transition-colors">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {count}
              </span>
            )}
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-border">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`block px-6 py-3 text-sm ${isActive(l.to) ? "text-accent bg-muted/10" : "text-primary-foreground"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
