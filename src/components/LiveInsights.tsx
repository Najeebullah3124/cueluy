import { motion } from 'framer-motion';
import { Lightbulb, CheckSquare, HelpCircle, MessageCircle } from 'lucide-react';

const insights = [
  {
    icon: Lightbulb,
    label: 'Definitions',
    example: '"A DCF values a company by projecting future free cash flows..."',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
  },
  {
    icon: CheckSquare,
    label: 'Action Items',
    example: '"Schedule follow-up with legal by Friday"',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
  },
  {
    icon: HelpCircle,
    label: 'Follow-up Questions',
    example: '"Ask about their timeline for the pilot program"',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    icon: MessageCircle,
    label: 'What to Say Next',
    example: '"Mention our enterprise clients in this vertical"',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

const LiveInsights = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Live Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Not just notes — instant intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Context-aware insights delivered in real-time as your conversation unfolds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${insight.bgColor} flex items-center justify-center mb-4`}>
                <insight.icon className={`w-6 h-6 ${insight.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {insight.label}
              </h3>
              <p className="text-sm text-muted-foreground italic">
                {insight.example}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveInsights;
