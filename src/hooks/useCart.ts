import { useState, useEffect, useCallback } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  note?: string;
  category: string;
}

const STORAGE_KEY = "del41_preorder";

function loadCart(): CartItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) { setItems(prev => prev.filter(i => i.id !== id)); return; }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const updateNote = useCallback((id: string, note: string) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, note } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return { items, addItem, removeItem, updateQuantity, updateNote, clearCart, total, count };
}
