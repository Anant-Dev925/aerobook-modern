import { motion } from "framer-motion";
import { Shield, Clock, Check, Award, HeartHandshake, Gem, Globe } from "lucide-react";

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
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
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

            <div className="grid gap-10">
              {features.slice(0, 3).map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             {/* 3D Jet Effect */}
             <motion.div
                initial={{ opacity: 0, x: 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 z-20 w-[150%] pointer-events-none hidden lg:block"
             >
                <img 
                  src="https://pngimg.com/uploads/plane/plane_PNG101247.png" 
                  alt="Private Jet" 
                  className="w-full h-auto drop-shadow-2xl"
                />
             </motion.div>

             <div className="grid gap-10 pt-10 lg:pt-0 relative z-10">
               {features.slice(3, 6).map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}