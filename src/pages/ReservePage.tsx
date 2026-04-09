import { useState } from "react";
import { CalendarDays, Users, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import CartDrawer from "@/components/CartDrawer";

const timeSlots: string[] = [];
for (let h = 11; h <= 22; h++) {
  for (const m of [0, 30]) {
    if (h === 22 && m === 30) continue;
    const hour12 = h > 12 ? h - 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    timeSlots.push(`${hour12}:${m === 0 ? "00" : "30"} ${ampm}`);
  }
}

const seatingOptions = ["Indoor — Regular", "Indoor — Corner Seat", "Private Area"];
const occasionOptions = ["None", "Birthday", "Anniversary", "Date Night", "Family Gathering", "Business Lunch", "Other"];

export default function ReservePage() {
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "", guests: "2", seating: seatingOptions[0], occasion: occasionOptions[0], requests: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Del 41! I'd like to reserve a table.\n\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nSeating: ${form.seating}\nOccasion: ${form.occasion}\nSpecial Requests: ${form.requests || "None"}\nPhone: ${form.phone}`;
    window.open(`https://wa.me/919990626777?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            Reserve a <span className="text-accent">Table</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">Book your dining experience at Del 41</p>

          {submitted ? (
            <div className="bg-card border-2 border-accent rounded-xl p-6 text-center space-y-4">
              <div className="text-4xl">🎉</div>
              <h2 className="font-heading text-2xl font-bold text-card-foreground">Reservation Sent!</h2>
              <div className="text-left space-y-2 bg-muted rounded-lg p-4 text-sm text-foreground">
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Date:</strong> {form.date}</p>
                <p><strong>Time:</strong> {form.time}</p>
                <p><strong>Guests:</strong> {form.guests}</p>
                <p><strong>Seating:</strong> {form.seating}</p>
                <p><strong>Occasion:</strong> {form.occasion}</p>
                {form.requests && <p><strong>Requests:</strong> {form.requests}</p>}
                <p><strong>Phone:</strong> {form.phone}</p>
              </div>
              <p className="text-muted-foreground text-sm">Your request has been sent via WhatsApp. We'll confirm shortly!</p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Full Name</label>
                <input name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Phone Number</label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-card-foreground mb-1"><CalendarDays size={14} /> Date</label>
                  <input name="date" type="date" required min={today} value={form.date} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-card-foreground mb-1"><Clock size={14} /> Time</label>
                  <select name="time" required value={form.time} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent">
                    <option value="">Select time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-card-foreground mb-1"><Users size={14} /> Guests</label>
                  <select name="guests" value={form.guests} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-card-foreground mb-1"><MapPin size={14} /> Seating</label>
                  <select name="seating" value={form.seating} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent">
                    {seatingOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Special Occasion</label>
                <select name="occasion" value={form.occasion} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground outline-none focus:ring-2 focus:ring-accent">
                  {occasionOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-1">Special Requests</label>
                <textarea name="requests" rows={3} value={form.requests} onChange={handleChange} placeholder="Any dietary needs or special arrangements..." className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-accent text-accent-foreground font-bold rounded-lg text-lg hover:opacity-90 transition-opacity">
                Reserve Table via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
      <FloatingCart onClick={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
