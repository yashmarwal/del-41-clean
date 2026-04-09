import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { todaysSpecials } from "@/data/menuData";
import { Link } from "react-router-dom";

export default function TodaysSpecial() {
  return (
    <section className="py-12 bg-accent/10 border-y-2 border-accent/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="text-accent fill-accent" size={24} />
          <h2 className="font-heading text-2xl font-bold text-foreground">Chef's Special Today</h2>
          <Star className="text-accent fill-accent" size={24} />
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {todaysSpecials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="p-4 rounded-xl bg-card border-2 border-accent/40 shadow-md"
            >
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-3" loading="lazy" />
              <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.name}</h3>
              <p className="text-accent font-bold mt-1">₹{item.price}</p>
            </motion.div>
          ))}
        </div>
        <Link to="/menu" className="inline-block mt-6 px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
