import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-primary/75" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold text-accent mb-4"
        >
          Del 41
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-0.5 w-32 bg-accent mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 italic"
        >
          We Are Professionals &amp; We Don't Compromise With Quality &amp; Hygiene
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Explore Menu
          </Link>
          <Link
            to="/reserve"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Reserve a Table
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
