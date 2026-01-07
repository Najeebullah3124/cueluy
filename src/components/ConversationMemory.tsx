import { motion } from 'framer-motion';
import { Brain, History, AlertCircle, Heart } from 'lucide-react';

const memories = [
  {
    icon: AlertCircle,
    label: 'Past Objections',
    example: '"Last meeting, they were concerned about pricing"',
  },
  {
    icon: History,
    label: 'Previous Decisions',
    example: '"In Q1, they approved a 3-month pilot"',
  },
  {
    icon: Heart,
    label: 'Client Preferences',
    example: '"They prefer email over calls for updates"',
  },
];

const ConversationMemory = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Conversation Memory
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Cluely remembers so you don't have to
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every past meeting, preference, and objection — instantly recalled when you need it most.
            </p>

            <div className="space-y-6">
              {memories.map((memory, index) => (
                <motion.div
                  key={memory.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <memory.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{memory.label}</h3>
                    <p className="text-sm text-muted-foreground italic">{memory.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Meeting Context</h3>
                  <p className="text-sm text-muted-foreground">With Acme Corp • 3rd meeting</p>
                </div>
              </div>

              <div className="space-y-4 border-l-2 border-primary/30 pl-4">
                <div className="relative">
                  <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Oct 15:</span> Discussed pricing concerns, offered 15% discount
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-primary/60" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Nov 2:</span> Approved pilot, requested custom onboarding
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Today:</span> <span className="text-primary">Live • Discussing expansion...</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversationMemory;
