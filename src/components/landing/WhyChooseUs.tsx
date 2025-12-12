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
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Text Content */}
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

          {/* Right Column: 3D Pop-out Effect */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex">
             {/* The Frame Container */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative w-[80%] h-[70%] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl border border-white/10 backdrop-blur-sm overflow-visible group"
             >
                {/* Inner Frame Decoration */}
                <div className="absolute inset-4 border border-white/5 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1000&q=80" 
                    alt="Sky Background" 
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                  />
                </div>

                {/* The Pop-out Jet */}
                <motion.div
                  initial={{ x: 100, y: 50, scale: 0.8, opacity: 0 }}
                  whileInView={{ x: 40, y: -40, scale: 1.3, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="absolute -right-20 top-1/2 -translate-y-1/2 z-20 w-[140%] drop-shadow-2xl pointer-events-none"
                >
                  <img 
                    src="https://pngimg.com/uploads/plane/plane_PNG101247.png" 
                    alt="Private Jet" 
                    className="w-full h-auto transform -rotate-12"
                  />
                </motion.div>

                {/* Floating Elements for Depth */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Status</div>
                      <div className="font-bold text-sm">Ready for Takeoff</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-5 -right-5 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Plane className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Speed</div>
                      <div className="font-bold text-sm">0.925 Mach</div>
                    </div>
                  </div>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}