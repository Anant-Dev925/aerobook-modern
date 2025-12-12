import { motion } from "framer-motion";
import { Shield, Clock, Check, Award, HeartHandshake, Gem, Globe, Plane } from "lucide-react";

const features = [
  {
    title: "Uncompromised Safety",
    desc: "Safety is our absolute priority. We adhere to the strictest safety standards in the industry, working exclusively with ARGUS and Wyvern certified operators and crew.",
    icon: Shield
  },
  {
    title: "24/7 Global Concierge",
    desc: "Our dedicated lifestyle management team is available around the clock to handle every detail of your trip, from ground transportation to luxury accommodation.",
    icon: Clock
  },
  {
    title: "Transparent Pricing",
    desc: "Experience true clarity with our all-inclusive pricing model. No hidden fees, no surprises—just a straightforward, competitive quote for your bespoke journey.",
    icon: Check
  },
  {
    title: "Curated Luxury",
    desc: "Every flight is tailored to your preferences. From gourmet catering from top restaurants to your favorite vintage wines, we ensure your cabin is exactly as you wish.",
    icon: Gem
  },
  {
    title: "Global Network",
    desc: "With access to over 50,000 aircraft and 3,000 airports worldwide, we can get you closer to your final destination than any commercial airline ever could.",
    icon: Globe
  },
  {
    title: "Personalized Service",
    desc: "We build lasting relationships. Your dedicated aviation advisor learns your preferences to provide a proactive, personalized service that anticipates your needs.",
    icon: HeartHandshake
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Cabin" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8 border border-white/10">
                <Award className="w-4 h-4" />
                <span>The Aura Standard</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Why Choose <br />
                <span className="text-white/50">Aura Jets?</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed font-light max-w-xl">
                We don't just fly you from A to B. We elevate every moment of your journey, ensuring a seamless blend of luxury, efficiency, and safety.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: HD Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[600px] rounded-3xl overflow-hidden hidden lg:block"
          >
             <img 
               src="https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?auto=format&fit=crop&w=1200&q=80" 
               alt="Private Jet Exterior" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}