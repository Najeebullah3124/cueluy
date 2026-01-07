import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LightRays from '@/components/LightRays';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.08}
        noiseAmount={0.05}
        distortion={0.03}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8"
        >
          <span className="text-xs font-medium text-primary">#1 Undetectable</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
        >
          AI for Meetings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Cluely takes perfect meeting notes and gives real-time answers,
          all while completely undetectable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="cta" size="lg" className="relative overflow-hidden group">
            <span className="relative z-10">Get for Mac</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
            Demo
          </Button>
        </motion.div>
      </div>

      {/* Floating Demo Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 mt-16 w-full max-w-2xl mx-auto px-6"
      >
        <div className="glass rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">What should I say?</div>
            <div className="p-4 rounded-lg bg-surface-elevated border border-border">
              <p className="text-sm text-foreground leading-relaxed">
                "A discounted cash flow model values a company by projecting future free cash flows and discounting them to present value using the weighted average cost of capital."
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-10 rounded-lg bg-surface-elevated border border-border flex items-center px-4">
                <span className="text-sm text-muted-foreground">Ask anything about the screen or conversation</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
