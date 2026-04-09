import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Flame, Heart } from "lucide-react";
import { menuItems, categories, type SpiceLevel } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import CartDrawer from "@/components/CartDrawer";
import { useApp } from "@/context/AppContext";

export default function MenuPage() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const highlightId = searchParams.get("highlight") || "";

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [spiceFilter, setSpiceFilter] = useState<"all" | SpiceLevel>("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [cartOpen, setCartOpen] = useState(searchParams.get("tab") === "cart");
  const { favorites } = useApp();

  useEffect(() => {
    if (highlightId) {
      setTimeout(() => {
        const el = document.getElementById(`menu-item-${highlightId}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [highlightId]);

  const filtered = useMemo(() => {
    let items = menuItems;
    if (showFavorites) items = items.filter(i => favorites.includes(i.id));
    if (activeCategory !== "All") items = items.filter(i => i.category === activeCategory);
    if (spiceFilter !== "all") items = items.filter(i => i.spice === spiceFilter);
    if (searchQuery.length > 1) {
      const q = searchQuery.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || (i.description || "").toLowerCase().includes(q));
    }
    return items;
  }, [activeCategory, searchQuery, spiceFilter, showFavorites, favorites]);

  const allCategories = ["All", ...categories];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            Our <span className="text-accent">Menu</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">Pure vegetarian • Authentic North Indian</p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {(["all", "mild", "medium", "spicy"] as const).map(s => (
              <button
                key={s}
                onClick={() => setSpiceFilter(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 transition-colors ${spiceFilter === s ? "bg-accent text-accent-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
              >
                {s !== "all" && <Flame size={12} className={s === "spicy" ? "text-red-500" : s === "medium" ? "text-orange-400" : "text-green-500"} />}
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
            {favorites.length > 0 && (
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 transition-colors ${showFavorites ? "bg-accent text-accent-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
              >
                <Heart size={12} className={showFavorites ? "fill-current" : ""} /> My Favourites
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowFavorites(false); }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat && !showFavorites ? "bg-accent text-accent-foreground" : "bg-card border border-border text-muted-foreground hover:bg-muted"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No dishes found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} highlighted={item.id === highlightId} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <FloatingCart onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
