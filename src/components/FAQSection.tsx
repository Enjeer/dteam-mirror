import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is validator, and why is it needed?",
    answer: "A validator is a trusted entity responsible for verifying and validating transactions on a blockchain. Validators play a crucial role in securing the network and maintaining its integrity. By delegating your tokens to a validator like DTEAM, you help strengthen the network and are rewarded with staking incentives.",
  },
  {
    question: "What is staking, and why should I do it?",
    answer: "Staking involves locking up your cryptocurrency to support the operations of a blockchain network, like transaction validation and network security. By staking with a validator, you earn rewards based on the amount you stake and the network's reward rate.",
  },
  {
    question: "Is staking with a validator like DTEAM safe?",
    answer: "Staking with a reputable validator such as DTEAM is generally safe. However, it's essential to choose validators with a strong track record of reliability and security. DTEAM prioritizes security and reliability to ensure the safety of your delegated tokens.",
  },
  {
    question: "Can I withdraw my staked tokens at any time?",
    answer: "Yes, you can choose to \"unstake\" your tokens whenever you wish. However, most blockchains have an \"unbonding\" or \"cool-down\" period, which means you may need to wait a set period (e.g., 7-30 days) before your tokens become transferable.",
  },
  {
    question: "Do I maintain ownership of my tokens while staking?",
    answer: "Yes, staking does not transfer ownership of your tokens. You retain full ownership of your assets, even though they are delegated to a validator like DTEAM.",
  },
  {
    question: "How do I start staking with DTEAM?",
    answer: "To start staking, you'll need to own the supported cryptocurrency, delegate your tokens to DTEAM through your wallet or staking platform, and confirm your delegation. Rewards will begin accruing immediately.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-[800px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-2xl md:text-4xl text-center mb-12"
        >
          FAQ
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border px-6 hover:border-primary transition-colors duration-300"
            >
              <AccordionTrigger className="font-mono text-sm text-left hover:no-underline hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-mono text-sm text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
