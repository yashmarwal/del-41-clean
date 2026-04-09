import { Heart, Plus, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { MenuItem } from "@/data/menuData";
import { useApp } from "@/context/AppContext";
import { toast } from "sonner";

interface Props {
  item: MenuItem;
  index: number;
  highlighted?: boolean;
}

export default function MenuCard({ item, index, highlighted }: Props) {
  const { addItem, isFavorite, toggleFavorite } = useApp();

  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price, category: item.category });
    toast.success(`${item.name} added to order!`);
  };

  const spiceColor = item.spice === "spicy" ? "text-red-500" : item.spice === "medium" ? "text-orange-400" : "text-green-500";

  return (
    <motion.div
      id={`menu-item-${item.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      className={`rounded-xl overflow-hidden bg-card border ${highlighted ? "border-accent ring-2 ring-accent" : "border-border"} shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="relative h-36 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        <button
          onClick={() => toggleFavorite(item.id)}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-card/80 backdrop-blur-sm"
        >
          <Heart size={16} className={isFavorite(item.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"} />
        </button>
        {item.note && (
          <span className="absolute top-2 left-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-semibold rounded">
            {item.note}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-semibold text-sm text-card-foreground leading-tight">{item.name}</h3>
          <Flame size={14} className={`shrink-0 mt-0.5 ${spiceColor}`} />
        </div>
        {item.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <div className="text-accent font-bold text-sm">
            {item.halfPrice ? (
              <span>₹{item.halfPrice} / ₹{item.fullPrice} {item.sizeLabel && <span className="text-xs text-muted-foreground font-normal">({item.sizeLabel})</span>}</span>
            ) : (
              <span>₹{item.price}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="p-1.5 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
