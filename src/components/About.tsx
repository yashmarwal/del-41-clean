import { motion } from "framer-motion";
import { Leaf, Clock, ChefHat } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Veg", desc: "Pure vegetarian — always" },
  { icon: Clock, title: "Fresh Daily", desc: "Prepared fresh every day" },
  { icon: ChefHat, title: "Authentic Recipes", desc: "Traditional North Indian" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-accent">Del 41</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Del 41 is a pure vegetarian restaurant in the heart of Nangloi, New Delhi, serving authentic North Indian cuisine crafted with love, quality ingredients, and no compromise on hygiene. From rich paneer gravies to crispy chaap snacks, every dish tells a story.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-lg bg-card border border-border text-center"
                >
                  <f.icon className="mx-auto text-accent mb-2" size={28} />
                  <h3 className="font-heading font-semibold text-card-foreground">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img
              src="/Restaurant_interior_photograph_202604091359.jpeg"
              alt="Del 41 Restaurant Interior"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
