import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Visit <span className="text-accent">Us</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-accent mt-1 shrink-0" size={20} />
              <p className="text-muted-foreground text-sm">Del 41 Restaurant, 6, Nangloi - Najafgarh Rd, near Water Tank, Chaju Ram Colony, Ishwar Colony, Nangloi Extension, Nangloi, New Delhi, Delhi — 110041</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-accent shrink-0" size={20} />
              <p className="text-muted-foreground text-sm">+91 99906 26777</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-accent mt-1 shrink-0" size={20} />
              <div className="text-sm text-muted-foreground">
                <p>Mon–Fri: 11:30 AM–4:30 PM &amp; 6:30 PM–11:00 PM</p>
                <p>Saturday &amp; Sunday: 11:30 AM–11:30 PM</p>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:+919990626777" className="px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/919990626777" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 text-sm">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border h-72 md:h-auto">
            <iframe
              title="Del 41 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5!2d77.065!3d28.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzQ4LjAiTiA3N8KwMDMnNTQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
