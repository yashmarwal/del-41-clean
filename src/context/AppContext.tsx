import { createContext, useContext, ReactNode } from "react";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";
import { useDarkMode } from "@/hooks/useDarkMode";

type AppContextType = ReturnType<typeof useCart> & ReturnType<typeof useFavorites> & { dark: boolean; toggleDark: () => void };

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const cart = useCart();
  const favs = useFavorites();
  const { dark, toggle } = useDarkMode();
  return (
    <AppContext.Provider value={{ ...cart, ...favs, dark, toggleDark: toggle }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
