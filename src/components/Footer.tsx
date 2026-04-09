import { Leaf, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="text-accent" size={20} />
              <span className="font-heading text-xl font-bold text-accent">Del 41</span>
            </div>
            <p className="text-primary-foreground/70 text-sm italic">
              We are professionals &amp; we don't compromise with quality &amp; hygiene
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 text-accent">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-primary-foreground/70 hover:text-accent transition-colors">Home</Link>
              <Link to="/menu" className="block text-primary-foreground/70 hover:text-accent transition-colors">Menu</Link>
              <Link to="/reserve" className="block text-primary-foreground/70 hover:text-accent transition-colors">Reserve Table</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 text-accent">Hours</h4>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>Mon–Fri: 11:30 AM–4:30 PM</p>
              <p>&amp; 6:30 PM–11:00 PM</p>
              <p>Sat–Sun: 11:30 AM–11:30 PM</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 text-accent">Contact</h4>
            <p className="text-sm text-primary-foreground/70 mb-3">+91 99906 26777</p>
            <a href="https://wa.me/919990626777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/50">© 2025 Del 41. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
