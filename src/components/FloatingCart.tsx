import { ShoppingCart } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Props {
  onClick: () => void;
}

export default function FloatingCart({ onClick }: Props) {
  const { count } = useApp();
  if (count === 0) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-accent text-accent-foreground shadow-lg hover:opacity-90 transition-opacity no-print"
    >
      <ShoppingCart size={24} />
      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
        {count}
      </span>
    </button>
  );
}
