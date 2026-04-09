import { X, Minus, Plus, Trash2, Printer, MessageCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, updateQuantity, updateNote, removeItem, clearCart, total } = useApp();

  const handlePrint = () => {
    const printContent = items.map(i =>
      `${i.name} x${i.quantity} — ₹${i.price * i.quantity}${i.note ? ` (${i.note})` : ""}`
    ).join("\n");
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`<html><head><title>Del 41 Order</title><style>body{font-family:sans-serif;padding:40px;} h1{color:#1a3a3a;} .item{margin:8px 0;} .total{font-weight:bold;margin-top:20px;font-size:18px;border-top:2px solid #ccc;padding-top:10px;}</style></head><body><h1>Del 41 — My Order</h1>${items.map(i => `<div class="item">${i.name} × ${i.quantity} — ₹${i.price * i.quantity}${i.note ? ` <em>(${i.note})</em>` : ""}</div>`).join("")}<div class="total">Grand Total: ₹${total}</div></body></html>`);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hello Del 41! Here's my order:\n\n${items.map(i => `• ${i.name} x${i.quantity} — ₹${i.price * i.quantity}${i.note ? ` (${i.note})` : ""}`).join("\n")}\n\nGrand Total: ₹${total}`;
    window.open(`https://wa.me/919990626777?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-xl animate-slide-in-right overflow-y-auto">
        <div className="p-4 border-b border-border flex items-center justify-between sticky top-0 bg-background z-10">
          <h2 className="font-heading text-xl font-bold text-foreground">My Order</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X size={24} /></button>
        </div>

        {items.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <p className="text-lg mb-2">Your order is empty</p>
            <p className="text-sm">Add items from the menu to get started</p>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-card rounded-lg border border-border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-card-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive"><Trash2 size={14} /></button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded bg-muted text-muted-foreground"><Minus size={14} /></button>
                      <span className="text-sm font-medium text-foreground w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded bg-muted text-muted-foreground"><Plus size={14} /></button>
                    </div>
                    <span className="text-accent font-bold text-sm">₹{item.price * item.quantity}</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Add note (e.g. less spicy)"
                    value={item.note || ""}
                    onChange={e => updateNote(item.id, e.target.value)}
                    className="mt-2 w-full px-2 py-1 text-xs rounded bg-muted text-foreground placeholder:text-muted-foreground outline-none border border-border"
                  />
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-background border-t border-border p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-foreground">Grand Total</span>
                <span className="font-heading text-2xl font-bold text-accent">₹{total}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={handlePrint} className="flex items-center justify-center gap-2 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                  <Printer size={16} /> Print Order
                </button>
                <button onClick={handleWhatsApp} className="flex items-center justify-center gap-2 py-2.5 border-2 border-accent text-accent font-semibold rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                  <MessageCircle size={16} /> WhatsApp
                </button>
              </div>
              <button onClick={clearCart} className="w-full py-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
                Clear Entire Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
