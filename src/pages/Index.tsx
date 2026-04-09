import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OpeningHours from "@/components/OpeningHours";
import TodaysSpecial from "@/components/TodaysSpecial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import CartDrawer from "@/components/CartDrawer";
import { useState } from "react";

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TodaysSpecial />
      <About />
      <OpeningHours />
      <Contact />
      <Footer />
      <FloatingCart onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
