import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aura Jets has completely redefined my expectations of private travel. The attention to detail, from the chauffeur service to the in-flight dining, was simply impeccable.",
    author: "Sarah Jenkins",
    role: "CEO, Tech Innovations"
  },
  {
    quote: "Seamless is the only word to describe it. The team handled our complex multi-city itinerary with absolute precision. I wouldn't fly with anyone else.",
    author: "Michael Chen",
    role: "Investment Banker"
  },
  {
    quote: "The most reliable partner for our corporate travel needs. Their global reach and 24/7 support give us the peace of mind we need to focus on our business.",
    author: "James Wilson",
    role: "Director, Global Corp"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Client Experiences</h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Hear from those who have experienced the Aura Jets difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <Card className="bg-background border-none shadow-xl h-full relative group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                <CardContent className="pt-12 px-8 pb-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed font-serif italic text-foreground/80 flex-grow">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-border/50 pt-6">
                    <div className="font-bold text-lg">{item.author}</div>
                    <div className="text-sm text-primary font-medium uppercase tracking-wider mt-1">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
