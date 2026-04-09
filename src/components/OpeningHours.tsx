import { Clock } from "lucide-react";

export default function OpeningHours() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <Clock className="text-accent" size={36} />
          <div className="space-y-1">
            <h3 className="font-heading text-xl font-semibold text-card-foreground">Opening Hours</h3>
            <p className="text-muted-foreground text-sm">Mon–Fri: 11:30 AM – 4:30 PM &amp; 6:30 PM – 11:00 PM</p>
            <p className="text-muted-foreground text-sm">Saturday &amp; Sunday: 11:30 AM – 11:30 PM</p>
            <p className="text-accent text-sm font-medium">Open all 7 days!</p>
          </div>
          <div className="h-px w-16 md:h-12 md:w-px bg-border" />
          <p className="text-muted-foreground text-sm italic">🍛 Thali available before 8:00 PM only</p>
        </div>
      </div>
    </section>
  );
}
