import { useState } from "react";
import { motion } from "framer-motion";
import b2bIllustration from "@/assets/b2b-illustration.png";

const solutions = [
  {
    title: "IBC Relayers",
    description: "Enable seamless cross-chain communication with our Inter-Blockchain Communication (IBC) relayer services. Designed to ensure secure and efficient interactions between blockchains.",
  },
  {
    title: "Dedicated nodes",
    description: "Get dedicated, high-performance nodes tailored to your project's needs. Our infrastructure ensures maximum uptime and optimal performance for your operations.",
  },
  {
    title: "Node as a service",
    description: "Deploy and manage nodes effortlessly with our fully managed Node-as-a-Service solution. Focus on building while we handle the infrastructure.",
  },
  {
    title: "Institutional Staking",
    description: "Enterprise-grade staking solutions designed for institutional investors and organizations. Secure, reliable, and compliant with industry standards.",
  },
];

const B2BSection = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <section id="b2b" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-2xl md:text-4xl text-center mb-4"
        >
          B2B Solutions
        </motion.h2>
        <p className="font-mono text-muted-foreground text-center mb-12 max-w-[600px] mx-auto">
          Reliable and High-Quality Infrastructure for Your Web3 Project
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {solutions.map((sol, i) => (
            <button
              key={sol.title}
              onClick={() => setActiveSolution(i)}
              className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                activeSolution === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {sol.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeSolution}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-shrink-0">
            <img src={b2bIllustration} alt="B2B" className="w-[250px] md:w-[300px]" />
          </div>
          <div className="flex-1">
            <h3 className="font-pixel text-lg mb-4">{solutions[activeSolution].title}</h3>
            <p className="font-mono text-muted-foreground leading-relaxed mb-6">
              {solutions[activeSolution].description}
            </p>
            <a href="#contact" className="btn-pixel text-xs">Contact us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BSection;
