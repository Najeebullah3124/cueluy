import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Users, AlertTriangle } from 'lucide-react';

const outcomes = [
  {
    icon: CheckCircle2,
    title: 'Decisions Made',
    description: 'Auto-captured key decisions from every conversation',
    color: 'text-green-400',
  },
  {
    icon: Calendar,
    title: 'Deadlines',
    description: 'Never miss a commitment with extracted dates',
    color: 'text-blue-400',
  },
  {
    icon: Users,
    title: 'Owners Assigned',
    description: 'Clear accountability with assigned action owners',
    color: 'text-purple-400',
  },
  {
    icon: AlertTriangle,
    title: 'Risks & Blockers',
    description: 'Surface potential issues before they become problems',
    color: 'text-orange-400',
  },
];

const MeetingOutcomes = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Post-Meeting Magic
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Auto-generated meeting outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What managers actually want — delivered automatically after every call
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 glass rounded-xl p-6"
            >
              <div className={`flex-shrink-0 ${outcome.color}`}>
                <outcome.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Meeting Summary • Just now</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-foreground">Approved Q2 budget increase of $50K for marketing</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-foreground">Demo scheduled for next Tuesday 2pm</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span className="text-foreground">@Sarah to prepare pricing deck by EOD Friday</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetingOutcomes;
