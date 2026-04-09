import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("del41_darkmode");
    return saved !== null ? saved === "true" : true;
  });

  useEffect(() => {
    localStorage.setItem("del41_darkmode", String(dark));
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}
