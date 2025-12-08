import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, MapPin, Plane, Shield, Star, Users } from "lucide-react";

export default function Landing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2000&q=80" 
            alt="Private Jet Interior" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Elevate Your <br />
              <span className="text-primary/80">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the pinnacle of private aviation. Personalized service, 
              unmatched comfort, and global reach for the discerning traveler.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14">
                Explore Fleet
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-background/50 backdrop-blur-sm">
                Contact Concierge
              </Button>
            </div>
            
            <div className="mt-12 flex gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Safety Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span>Premium Service</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
            id="book"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Destinations", value: "2,500+" },
              { label: "Aircraft", value: "150+" },
              { label: "Flights Flown", value: "10k+" },
              { label: "Client Satisfaction", value: "99%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Aviation Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Whether for business or leisure, we provide a comprehensive suite of private aviation services designed around your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Private Charters",
              description: "Fly on your schedule with access to thousands of aircraft worldwide. From light jets to ultra-long-range airliners.",
              icon: Plane,
              image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Corporate Travel",
              description: "Efficient, reliable, and confidential travel solutions for executives and teams. Maximize productivity in the air.",
              icon: Users,
              image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Empty Legs",
              description: "Experience the luxury of private flight at a fraction of the cost with our exclusive empty leg opportunities.",
              icon: Globe,
              image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                {service.title}
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Aura Jets?</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Uncompromised Safety",
                    desc: "We adhere to the strictest safety standards in the industry, working only with certified operators."
                  },
                  {
                    title: "24/7 Global Support",
                    desc: "Our dedicated concierge team is available around the clock to handle every detail of your trip."
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden fees or surprises. We provide clear, competitive quotes for every journey."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary-foreground/20 rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Service" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-32 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground">Explore our most frequented routes.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            View all destinations <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
            { city: "London", country: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80" },
            { city: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
            { city: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80" },
          ].map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer"
            >
              <img 
                src={dest.img} 
                alt={dest.city}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  {dest.country}
                </div>
                <h3 className="text-2xl font-bold">{dest.city}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Aura Jets redefined my expectations of private travel. The attention to detail was impeccable.",
                author: "Sarah Jenkins",
                role: "CEO, Tech Innovations"
              },
              {
                quote: "Seamless from booking to landing. The team handled our complex itinerary with ease.",
                author: "Michael Chen",
                role: "Investment Banker"
              },
              {
                quote: "The most reliable partner for our corporate travel needs. Highly recommended.",
                author: "James Wilson",
                role: "Director, Global Corp"
              }
            ].map((item, i) => (
              <Card key={i} className="bg-background border-none shadow-lg">
                <CardContent className="pt-8 px-8 pb-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">"{item.quote}"</p>
                  <div>
                    <div className="font-bold">{item.author}</div>
                    <div className="text-sm text-muted-foreground">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { q: "How quickly can I book a flight?", a: "We can often arrange flights with as little as 4 hours notice, depending on aircraft availability and location." },
            { q: "What destinations do you serve?", a: "We fly globally to over 2,500 airports, including those not accessible by commercial airlines." },
            { q: "Are pets allowed on board?", a: "Yes, we are pet-friendly! Your furry companions can travel in the cabin with you on most flights." },
            { q: "What safety standards do you follow?", a: "We only work with operators who meet or exceed the strictest safety regulations, including ARGUS and Wyvern ratings." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Takeoff?</h2>
          <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact our team today to plan your next journey. Experience the freedom of private aviation.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg">
            Get a Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}