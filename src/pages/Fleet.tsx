import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Plane, Users, Wifi } from "lucide-react";
import { Link } from "react-router";

const fleetData = [
  {
    category: "light",
    name: "Phenom 300E",
    image: "https://images.unsplash.com/photo-1559087867-ce4c91325525?auto=format&fit=crop&w=800&q=80",
    passengers: "6-7",
    range: "2,010 nm",
    speed: "464 kts",
    description: "The best-selling light jet for 10 years running. Perfect for short to mid-range trips with class-leading comfort.",
    features: ["Wifi Available", "Refreshment Center", "Enclosed Lavatory"]
  },
  {
    category: "light",
    name: "Citation CJ4 Gen2",
    image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?auto=format&fit=crop&w=800&q=80",
    passengers: "8-9",
    range: "2,165 nm",
    speed: "451 kts",
    description: "Versatility meets luxury. The CJ4 Gen2 offers an impressive range and speed for a light jet.",
    features: ["Quiet Cabin", "Wireless Cabin Control", "Large Baggage Capacity"]
  },
  {
    category: "mid",
    name: "Challenger 350",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    passengers: "9-10",
    range: "3,200 nm",
    speed: "470 kts",
    description: "The best-selling super mid-size business jet. Stand-up cabin and coast-to-coast range.",
    features: ["Flat Floor", "In-flight Entertainment", "Full Galley"]
  },
  {
    category: "mid",
    name: "Praetor 600",
    image: "https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?auto=format&fit=crop&w=800&q=80",
    passengers: "9-12",
    range: "4,018 nm",
    speed: "466 kts",
    description: "Disrupting the category with class-leading range and turbulence reduction technology.",
    features: ["Ka-band Internet", "Full Berthing", "HEPA Filters"]
  },
  {
    category: "heavy",
    name: "Gulfstream G650ER",
    image: "https://images.unsplash.com/photo-1610642372651-25669d85d1be?auto=format&fit=crop&w=800&q=80",
    passengers: "13-19",
    range: "7,500 nm",
    speed: "516 kts",
    description: "The gold standard of business aviation. Fly farther and faster in ultimate comfort.",
    features: ["Global Connectivity", "Private Stateroom", "100% Fresh Air"]
  },
  {
    category: "heavy",
    name: "Global 7500",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    passengers: "14-19",
    range: "7,700 nm",
    speed: "530 kts",
    description: "The world's largest and longest range business jet. Four true living spaces.",
    features: ["Master Suite", "Full Kitchen", "Crew Rest Area"]
  }
];

export default function Fleet() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          <img 
            src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=2000&q=80" 
            alt="Fleet Hero" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Our World-Class Fleet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            From efficient light jets for short hops to ultra-long-range aircraft for global travel, 
            we have the perfect aircraft for every mission.
          </motion.p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="container mx-auto px-4 pb-32">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="light">Light</TabsTrigger>
              <TabsTrigger value="mid">Mid</TabsTrigger>
              <TabsTrigger value="heavy">Heavy</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fleetData.map((aircraft, index) => (
                <AircraftCard key={index} aircraft={aircraft} index={index} />
              ))}
            </div>
          </TabsContent>
          
          {["light", "mid", "heavy"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fleetData
                  .filter((a) => a.category === category)
                  .map((aircraft, index) => (
                    <AircraftCard key={index} aircraft={aircraft} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Footer />
    </div>
  );
}

function AircraftCard({ aircraft, index }: { aircraft: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-border/50 hover:border-primary/50 transition-colors group">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={aircraft.image} 
            alt={aircraft.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="uppercase tracking-wider text-xs font-semibold">
              {aircraft.category} Jet
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-2xl">{aircraft.name}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow space-y-6">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {aircraft.description}
          </p>
          
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
            <div className="text-center">
              <Users className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="text-sm font-bold">{aircraft.passengers}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Pax</div>
            </div>
            <div className="text-center border-l border-border/50">
              <Gauge className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="text-sm font-bold">{aircraft.speed}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Speed</div>
            </div>
            <div className="text-center border-l border-border/50">
              <Plane className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="text-sm font-bold">{aircraft.range}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Range</div>
            </div>
          </div>

          <div className="space-y-2">
            {aircraft.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Wifi className="w-3 h-3 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter>
          <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link to="/#book">
              Request Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
