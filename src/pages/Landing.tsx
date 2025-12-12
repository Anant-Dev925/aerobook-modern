import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FleetPreview } from "@/components/landing/FleetPreview";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Plane, Shield, Star, Trophy, Globe, Users } from "lucide-react";
import { Link } from "react-router";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  const jetY = useTransform(scrollYProgress, [0, 1], ["5vh", "90vh"]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden font-sans">
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
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2000&q=80" 
            alt="Private Jet Interior" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20 md:from-background/90 md:via-background/50 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pt-10 md:pt-0"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 text-foreground leading-tight">
              Elevate Your <br />
              <span className="text-primary/80">Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-md md:max-w-none font-light">
              Experience the pinnacle of private aviation. Personalized service, 
              unmatched comfort, and global reach for the discerning traveler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-lg h-14 w-full sm:w-auto">
                <Link to="/fleet">Explore Fleet</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-background/50 backdrop-blur-sm w-full sm:w-auto">
                <a href="#contact">Contact Concierge</a>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
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
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-background container mx-auto px-4">
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Redefining Private Travel <br />
              <span className="text-muted-foreground">Since 2010</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
              At Aura Jets, we believe that the journey is just as important as the destination. Founded with a vision to transform private aviation, we combine cutting-edge technology with timeless hospitality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              Our fleet of meticulously maintained aircraft and dedicated concierge team ensure that every flight is a seamless experience of luxury and comfort.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1 font-serif">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1 font-serif">24/7</div>
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
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
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

      <Services />

      <WhyChooseUs />

      {/* Destinations Section */}
      <section id="destinations" className="py-32 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground text-lg font-light">Explore our most frequented routes.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2">
            View all destinations <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {[
            { city: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", className: "md:col-span-2 md:row-span-2" },
            { city: "London", country: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80", className: "md:col-span-1 md:row-span-1" },
            { city: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", className: "md:col-span-1 md:row-span-2" },
            { city: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80", className: "md:col-span-1 md:row-span-1" },
            { city: "Tokyo", country: "Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80", className: "md:col-span-1 md:row-span-1" },
          ].map((dest, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg ${dest.className}`}
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
                <h3 className="text-2xl font-serif font-bold">{dest.city}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />

      <FleetPreview />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for Takeoff?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light">
            Contact our team today to plan your next journey. Experience the freedom of private aviation.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg shadow-xl hover:shadow-2xl transition-all">
            <a href="#book">Get a Quote</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}