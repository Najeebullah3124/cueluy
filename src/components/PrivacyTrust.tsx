import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Calendar, Eye, HardDrive, Lock } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Bot,
    title: 'No Bots',
    description: 'No invasive meeting participants',
  },
  {
    icon: Calendar,
    title: 'No Calendar Access',
    description: 'We never touch your calendar',
  },
  {
    icon: Eye,
    title: 'No Meeting Joins',
    description: 'We don\'t join your meetings',
  },
  {
    icon: HardDrive,
    title: 'Local Processing',
    description: 'Your data stays on your device',
  },
  {
    icon: Lock,
    title: 'You Control Everything',
    description: 'Full control over recordings',
  },
];

const PrivacyTrust = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Privacy First
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your privacy is non-negotiable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built from the ground up with privacy as a core principle — not an afterthought
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:ring-2 hover:ring-green-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <feature.icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary border border-border">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">SOC 2 Type II</p>
              <p className="text-xs text-muted-foreground">Certified</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary border border-border">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">GDPR</p>
              <p className="text-xs text-muted-foreground">Compliant</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary border border-border">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">256-bit</p>
              <p className="text-xs text-muted-foreground">Encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyTrust;
