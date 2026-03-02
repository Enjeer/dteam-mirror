import { useState } from "react";
import { motion } from "framer-motion";
import servicesMonitor from "@/assets/services-monitor.png";

const serviceTypes = [
  "Overview",
  "Installation guide",
  "Snapshot",
  "State sync",
  "Genesis",
  "Peers",
  "Seeds",
  "Endpoints",
  "Addrbook",
  "Useful commands",
  "IBC",
];

const serviceDescriptions: Record<string, string> = {
  "Overview": "Get a comprehensive view of our services, designed to optimize your node operations and enhance performance.",
  "Installation guide": "Step-by-step guides for setting up and configuring validator nodes across supported networks.",
  "Snapshot": "Download the latest snapshots to quickly sync your node without processing the entire blockchain history.",
  "State sync": "Use state sync to rapidly bootstrap your node by syncing from a recent state rather than genesis.",
  "Genesis": "Access verified genesis files for all supported networks to initialize your node correctly.",
  "Peers": "Connect to our reliable peer nodes for optimal network connectivity and block propagation.",
  "Seeds": "Use our seed nodes to discover and connect to active peers across the network.",
  "Endpoints": "Access our high-availability RPC, API, and gRPC endpoints for your applications.",
  "Addrbook": "Download up-to-date address books containing verified active peers for faster node discovery.",
  "Useful commands": "A collection of commonly used commands for managing and monitoring your validator node.",
  "IBC": "Inter-Blockchain Communication relay services for seamless cross-chain token transfers.",
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("Overview");

  return (
    <section id="services" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-2xl md:text-4xl text-center mb-12"
        >
          Services for validators
        </motion.h2>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {serviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveService(type)}
              className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                activeService === type
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <h3 className="font-pixel text-lg mb-4 text-primary">{activeService}</h3>
            <p className="font-mono text-muted-foreground leading-relaxed mb-6">
              {serviceDescriptions[activeService]}
            </p>
            <a href="#" className="btn-pixel text-xs">View all services</a>
          </div>
          <div className="flex-shrink-0">
            <img src={servicesMonitor} alt="Services" className="w-[250px] md:w-[300px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
