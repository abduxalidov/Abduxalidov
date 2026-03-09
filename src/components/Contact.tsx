import { motion } from "framer-motion";
import { Send, Phone, Instagram, ArrowRight } from "lucide-react";

const contacts = [
  { icon: Send, label: "Telegram", value: "@abduxalidov", href: "https://t.me/abduxalidov", color: "from-blue-500 to-blue-600" },
  { icon: Phone, label: "Telefon", value: "+998 70 129 20 10", href: "tel:+998701292010", color: "from-emerald-500 to-emerald-600" },
  { icon: Instagram, label: "Instagram", value: "@abduxalidov", href: "https://instagram.com/abduxalidov", color: "from-pink-500 to-purple-600" },
];

const steps = [
  { num: "01", title: "Bog'lanish", desc: "Telegram orqali yozing" },
  { num: "02", title: "Muhokama", desc: "Loyihani gaplashamiz" },
  { num: "03", title: "Kelishuv", desc: "Narx va muddatni belgilaymiz" },
  { num: "04", title: "Natija", desc: "Tayyor loyihani topshiramiz" },
];

export const Contact = () => (
  <section id="aloqa" className="py-20 px-4 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Menga <span className="gradient-text">Bog'laning</span></h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">Loyihangiz haqida gaplashaylik</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {contacts.map((c, i) => (
        <motion.a key={i} href={c.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.02 }} className="glass-card p-6 rounded-3xl group text-center">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mx-auto mb-4`}>
            <c.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-1">{c.label}</h3>
          <p className="text-muted-foreground">{c.value}</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Ochish <ArrowRight className="w-4 h-4" />
          </div>
        </motion.a>
      ))}
    </div>
    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-center mb-8">Ishlash jarayoni</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{s.num}</div>
            <h4 className="font-semibold mb-1">{s.title}</h4>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

