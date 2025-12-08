import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Clock, Globe, MapPin, Plane, Shield, Star, Trophy, Users } from "lucide-react";
import { Link } from "react-router";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const jetY = useTransform(scrollYProgress, [0, 1], ["5vh", "90vh"]);
  
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden">
      <Navbar />

      {/* Scrollable Jet Indicator */}
      <motion.div 
        style={{ top: jetY }}
        className="fixed left-4 z-50 hidden 2xl:flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-primary/50" />
        <div className="bg-background p-2 rounded-full border border-primary/20 shadow-lg">
          <Plane className="w-6 h-6 text-primary rotate-180" />
        </div>
        <div className="h-16 w-[1px] bg-gradient-to-t from-transparent to-primary/50" />
      </motion.div>

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
              <Button asChild size="lg" className="rounded-full px-8 text-lg h-14">
                <Link to="/fleet">Explore Fleet</Link>
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

      {/* About Us Section */}
      <section className="py-24 bg-background container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              <span>Excellence in Aviation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Redefining Private Travel <br />
              <span className="text-muted-foreground">Since 2010</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Aura Jets, we believe that the journey is just as important as the destination. Founded with a vision to transform private aviation, we combine cutting-edge technology with timeless hospitality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our fleet of meticulously maintained aircraft and dedicated concierge team ensure that every flight is a seamless experience of luxury and comfort.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Global Support</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1000&q=80" 
                alt="About Aura Jets" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Expert Team</div>
                  <div className="text-xs text-muted-foreground">Pilots & Concierge</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team of certified professionals is dedicated to your safety and comfort.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-muted/30 container mx-auto px-4">
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
      <section id="about" className="py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Aura Jets?</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Uncompromised Safety",
                    desc: "We adhere to the strictest safety standards in the industry, working only with certified operators.",
                    icon: Shield
                  },
                  {
                    title: "24/7 Global Support",
                    desc: "Our dedicated concierge team is available around the clock to handle every detail of your trip.",
                    icon: Clock
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden fees or surprises. We provide clear, competitive quotes for every journey.",
                    icon: Check
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 border-2 border-primary-foreground/20 rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Service" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover z-10"
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
      <section className="py-32 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about flying with Aura Jets.</p>
          </div>
          
          <div className="grid gap-4">
            {[
              { q: "How quickly can I book a flight?", a: "We can often arrange flights with as little as 4 hours notice, depending on aircraft availability and location. For urgent requests, please contact our 24/7 concierge directly." },
              { q: "What destinations do you serve?", a: "We fly globally to over 2,500 airports, including those not accessible by commercial airlines. From major international hubs to remote private airstrips, we can get you closer to your final destination." },
              { q: "Are pets allowed on board?", a: "Yes, we are pet-friendly! Your furry companions can travel in the cabin with you on most flights. We just need to know in advance to ensure all necessary documentation is in place." },
              { q: "What safety standards do you follow?", a: "Safety is our top priority. We only work with operators who meet or exceed the strictest safety regulations, including ARGUS and Wyvern ratings. All aircraft and crew undergo rigorous vetting." },
              { q: "Can I change my itinerary?", a: "Absolutely. One of the main benefits of private aviation is flexibility. You can change your departure time or destination, often even while in the air, subject to operational feasibility." },
            ].map((item, i) => (
              <Accordion key={i} type="single" collapsible className="bg-card border border-border rounded-xl px-6 shadow-sm">
                <AccordionItem value={`item-${i}`} className="border-none">
                  <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
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
