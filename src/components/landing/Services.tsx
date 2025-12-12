import { motion } from "framer-motion";
import { ArrowRight, Plane, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Private Charters",
    description: "Experience the ultimate freedom of flight. Our private charter service offers you the flexibility to fly on your own schedule, accessing thousands of airports worldwide that commercial airlines cannot reach. Whether for business or leisure, we curate every detail of your journey to ensure unparalleled comfort and privacy.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Corporate Travel",
    description: "Maximize your productivity with our tailored corporate travel solutions. We understand that time is your most valuable asset. Our efficient, reliable, and confidential service ensures you and your team arrive refreshed and ready for business. Enjoy on-board connectivity and meeting spaces in the sky.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Empty Legs",
    description: "Discover the smart way to fly private. Our Empty Leg flights offer the same luxurious experience at a fraction of the cost. Perfect for flexible travelers, these one-way opportunities allow you to enjoy the benefits of private aviation while optimizing fleet efficiency.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Tailored Aviation Solutions</h2>
        <p className="text-muted-foreground text-lg font-light">
          Exquisite services designed around your unique travel requirements.
        </p>
      </div>

      <div className="flex flex-col gap-32">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
          >
            <div className="w-full lg:w-[60%] overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative aspect-[16/10] group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] space-y-8">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                {service.description}
              </p>
              <Button variant="outline" className="group text-lg px-8 py-6 rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More 
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
