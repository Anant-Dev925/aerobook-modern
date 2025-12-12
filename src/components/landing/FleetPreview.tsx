import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Plane, Users } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?auto=format&fit=crop&w=800&q=80",
    passengers: "9-10",
    speed: "470 kts",
    range: "3,200 nm"
  },
  {
    name: "Global 7500",
    category: "Heavy Jet",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80",
    passengers: "14-19",
    speed: "530 kts",
    range: "7,700 nm"
  },
  {
    name: "Gulfstream G650ER",
    category: "Ultra-Long Range",
    image: "https://images.unsplash.com/photo-1483450388569-aa47dfd4d798?auto=format&fit=crop&w=800&q=80",
    passengers: "13-19",
    speed: "516 kts",
    range: "7,500 nm"
  },
  {
    name: "Citation Latitude",
    category: "Midsize Jet",
    image: "https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=800&q=80",
    passengers: "9",
    speed: "446 kts",
    range: "2,700 nm"
  },
  {
    name: "Praetor 600",
    category: "Super Midsize",
    image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?auto=format&fit=crop&w=800&q=80",
    passengers: "9-12",
    speed: "466 kts",
    range: "4,018 nm"
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
        <Button asChild size="lg" className="rounded-full px-8 hidden md:flex">
          <Link to="/fleet">
            View All Aircraft <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>

      <div className="relative px-8 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="-ml-4 pb-10">
            {fleetPreview.map((aircraft, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full flex flex-col border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 rounded-3xl bg-card">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={aircraft.image} 
                        alt={aircraft.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                        {aircraft.category}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-serif">{aircraft.name}</CardTitle>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {aircraft.category}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <div className="grid grid-cols-3 gap-2 py-4 border-t border-border/50 mt-2">
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
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex -left-6 md:-left-12 h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground bg-background/80 backdrop-blur-sm" />
          <CarouselNext className="flex -right-6 md:-right-12 h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground bg-background/80 backdrop-blur-sm" />
        </Carousel>
      </div>

      <div className="mt-8 md:hidden">
        <Button asChild size="lg" className="rounded-full px-8 w-full">
          <Link to="/fleet">
            View All Aircraft <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}