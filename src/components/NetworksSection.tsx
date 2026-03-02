import { motion } from "framer-motion";

const networks = [
  { name: "celestia", apr: "4.25%", token: "TIA", stakeUrl: "#" },
  { name: "haqq", apr: "0.00%", token: "ISLM", stakeUrl: "#" },
  { name: "story", apr: "3.18%", token: "IP", stakeUrl: "#" },
  { name: "c4e", apr: "9.54%", token: "C4E", stakeUrl: "#" },
  { name: "canto", apr: "9.57%", token: "CANTO", stakeUrl: "#" },
  { name: "lava", apr: "0.00%", token: "LAVA", stakeUrl: "#" },
];

const NetworksSection = () => {
  return (
    <section id="networks" className="section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-2xl md:text-4xl text-center mb-12"
        >
          Networks
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {networks.map((network, i) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-6 hover:border-primary transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center font-pixel text-xs text-primary">
                    {network.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-pixel text-sm">{network.name}</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground uppercase">{network.token}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  APR <span className="text-primary">{network.apr}</span>
                </span>
                <a
                  href={network.stakeUrl}
                  className="font-pixel text-xs text-primary border border-primary px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  STAKE
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-pixel text-xs">View all networks</a>
        </div>
      </div>
    </section>
  );
};

export default NetworksSection;
