import { motion } from 'framer-motion';
import { useState } from 'react';
import { Target, Briefcase, Code, Building2, Users } from 'lucide-react';

const modes = [
  {
    id: 'sales',
    icon: Target,
    name: 'Sales',
    description: 'Close deals with confidence',
    insights: ['Objection handling', 'Competitor comparisons', 'Pricing responses'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'investor',
    icon: Briefcase,
    name: 'Investor / Finance',
    description: 'Navigate complex financials',
    insights: ['Valuation models', 'Market analysis', 'Due diligence tips'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'engineering',
    icon: Code,
    name: 'Engineering',
    description: 'Technical discussions made easy',
    insights: ['Architecture guidance', 'Best practices', 'Technical debt'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'exec',
    icon: Building2,
    name: 'Founder / Exec',
    description: 'Lead with strategic clarity',
    insights: ['Strategy frameworks', 'Board prep', 'Stakeholder mgmt'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'interview',
    icon: Users,
    name: 'Interview Mode',
    description: 'Ace every interview',
    insights: ['STAR responses', 'Culture fit cues', 'Questions to ask'],
    gradient: 'from-primary to-cyan-400',
  },
];

const RoleModes = () => {
  const [activeMode, setActiveMode] = useState('sales');
  const active = modes.find(m => m.id === activeMode) || modes[0];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Role-Based Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            One tool. Every context.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your mode — get tailored insights, responses, and note structures
          </p>
        </motion.div>

        {/* Mode Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modes.map((mode) => (
            <motion.button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeMode === mode.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'glass text-foreground hover:bg-secondary'
              }`}
            >
              <mode.icon className="w-5 h-5" />
              <span>{mode.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Mode Detail */}
        <motion.div
          key={activeMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${active.gradient} flex items-center justify-center`}>
              <active.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{active.name}</h3>
              <p className="text-muted-foreground">{active.description}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground mb-3">What you'll get:</p>
            {active.insights.map((insight, index) => (
              <motion.div
                key={insight}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 text-foreground"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`} />
                {insight}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleModes;
