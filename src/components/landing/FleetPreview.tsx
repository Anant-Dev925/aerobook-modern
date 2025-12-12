import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Users, Gauge, Plane } from "lucide-react";
import { Link } from "react-router";

const fleetPreview = [
  {
    name: "Phenom 300E",
    category: "Light Jet",
    image: "https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&w=800&q=80",
    passengers: "6-7",
    speed: "464 kts",
    range: "2,010 nm"
  },
  {
    name: "Challenger 350",
    category: "Midsize Jet",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    passengers: "9-10",
    speed: "470 kts",
    range: "3,200 nm"
  },
  {
    name: "Global 7500",
    category: "Heavy Jet",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    passengers: "14-19",
    speed: "530 kts",
    range: "7,700 nm"
  }
];

export function FleetPreview() {
  return (
    <section className="py-32 bg-background container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Discover Our Fleet</h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl">
            From efficient light jets to ultra-long-range airliners, find the perfect aircraft for your mission.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-full px-8">
          <Link to="/fleet">
            View All Aircraft <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {fleetPreview.map((aircraft, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={aircraft.image} 
                  alt={aircraft.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  {aircraft.category}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{aircraft.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-border/50">
                  <div className="text-center">
                    <Users className="w-4 h-4 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-bold">{aircraft.passengers}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Pax</div>
                  </div>
                  <div className="text-center border-l border-border/50">
                    <Gauge className="w-4 h-4 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-bold">{aircraft.speed}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Speed</div>
                  </div>
                  <div className="text-center border-l border-border/50">
                    <Plane className="w-4 h-4 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-bold">{aircraft.range}</div>
                    <div className="text-[10px] text-muted-foreground uppercase">Range</div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to="/fleet">
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
