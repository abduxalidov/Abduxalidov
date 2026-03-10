import { motion, Variants } from "framer-motion";

const smmData = [
  {
    platform: "Telegram",
    services: [
      { name: "Obunachi (Garantiyasiz)", prices: ["1000 ta - 4,000 so'm", "5000 ta - 18,000 so'm", "10,000 ta - 35,000 so'm"] },
      { name: "Obunachi (Garantli 180 kun)", prices: ["1000 ta - 20,000 so'm", "5000 ta - 95,000 so'm", "10,000 ta - 190,000 so'm"] },
      { name: "Post ko'rish (Prosmotr)", prices: ["1000 ta - 500 so'm", "10,000 ta - 5,000 so'm", "100,000 ta - 40,000 so'm"] },
      { name: "Reaksiya (Like)", prices: ["1000 ta - 2000 so'm", "5000 ta - 10,000 so'm", "10000 ta - 20,000 so'm"] },
      { name: "Telegram Premium (1 oy)", prices: ["1 ta akkaunt - 45,000 so'm", "3 oylik - 165,000 so'm", "6 oylik - 230,000so'm","1 yillik - 300,000 so'm"], highlight: true },
      { name: "Telegram Stars", prices: ["50 Stars - 12,000 so'm", "100 Stars - 24,000 so'm", "500 Stars - 120,000 so'm"], highlight: true },
    ],
  },
  {
    platform: "Instagram",
    services: [
      { name: "Obunachi (Garantiyalik)", prices: ["1000 ta - 22,000 so'm", "5000 ta - 110,000 so'm", "10,000 ta - 210,000 so'm"] },
      { name: "Like", prices: ["1000 ta - 5,000 so'm", "5000 ta - 22,000 so'm", "10,000 ta - 45,000 so'm"] },
      { name: "Ko'rish (Views)", prices: ["10,000 ta - 5,000 so'm", "100,000 ta - 20,000 so'm", "1,000,000 ta - 50,000 so'm"] },
    ],
  },
];

const container: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } };

export const SMMServices = () => (
  <section id="smm" className="py-20 px-4 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="gradient-text">SMM</span> Xizmatlari</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Telegram va Instagram uchun professional SMM xizmatlari</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {smmData.map((platform) => (
        <div key={platform.platform} className="glass-card rounded-3xl overflow-hidden">
          <div className={`p-6 ${platform.platform === "Telegram" ? "bg-blue-500/10" : "bg-pink-500/10"}`}>
            <h3 className="text-2xl font-bold">{platform.platform}</h3>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 space-y-4">
            {platform.services.map((service, idx) => (
              <motion.div key={idx} variants={item} className={`p-4 rounded-2xl ${service.highlight ? "bg-blue-500/10 border border-blue-500/20" : "bg-white/5"}`}>
                <h4 className="font-semibold mb-2 text-foreground">{service.name}</h4>
                <div className="space-y-1">
                  {service.prices.map((price, pIdx) => (
                    <p key={pIdx} className="text-sm text-muted-foreground">{price}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

