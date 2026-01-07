import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Joins meeting as participant', cluely: false, otter: true, fireflies: true },
  { name: 'Completely undetectable', cluely: true, otter: false, fireflies: false },
  { name: 'Real-time help during calls', cluely: true, otter: false, fireflies: false },
  { name: '"What to say next" suggestions', cluely: true, otter: false, fireflies: false },
  { name: 'Role-based intelligence', cluely: true, otter: false, fireflies: false },
  { name: 'Conversation memory', cluely: true, otter: false, fireflies: false },
  { name: 'No calendar access needed', cluely: true, otter: false, fireflies: false },
  { name: 'Works with any app', cluely: true, otter: true, fireflies: true },
];

const ComparisonTable = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            See the difference
          </h2>
          <p className="text-lg text-muted-foreground">
            Not all meeting AI is created equal
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-muted-foreground font-medium">Feature</th>
                  <th className="p-6 text-center">
                    <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-bold">
                      Cluely
                    </span>
                  </th>
                  <th className="p-6 text-center text-muted-foreground font-medium">Otter</th>
                  <th className="p-6 text-center text-muted-foreground font-medium">Fireflies</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-border/50 last:border-0"
                  >
                    <td className="p-6 text-foreground">{feature.name}</td>
                    <td className="p-6 text-center">
                      {feature.cluely ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-destructive mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.otter ? (
                        <Check className="w-6 h-6 text-muted-foreground mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.fireflies ? (
                        <Check className="w-6 h-6 text-muted-foreground mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
