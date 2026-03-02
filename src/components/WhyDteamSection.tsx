import { motion } from "framer-motion";
import { Shield, Clock, Server, Wifi, HeartPulse } from "lucide-react";

const features = [
  {
    title: "UPTIME 99.9%",
    description: "With a guaranteed uptime of 99.9%, our infrastructure minimizes downtime, ensuring your assets earn rewards consistently.",
    icon: HeartPulse,
  },
  {
    title: "SUPPORT 24/7",
    description: "Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter.",
    icon: Clock,
  },
  {
    title: "SECURITY",
    description: "We prioritize security with industry-leading practices, including secure key management and multi-layered encryption.",
    icon: Shield,
  },
  {
    title: "SCALABLE INFRASTRUCTURE",
    description: "Our infrastructure scales seamlessly to meet your needs, without compromising performance.",
    icon: Server,
  },
  {
    title: "HIGH QUALITY DEDICATED RPC",
    description: "Benefit from our dedicated RPC services with zero rate limits, offering unlimited resource access and optimal performance.",
    icon: Wifi,
  },
];

const WhyDteamSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-2xl md:text-4xl text-center mb-12"
        >
          Why stake with DTEAM?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 hover:border-primary transition-colors duration-300 group"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-pixel text-xs mb-4 leading-relaxed">{feature.title}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDteamSection;
