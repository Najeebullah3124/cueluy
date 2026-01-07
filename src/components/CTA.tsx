import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LightRays from '@/components/LightRays';

const CTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <LightRays
        raysOrigin="bottom-center"
        raysColor="#00ffff"
        raysSpeed={0.6}
        lightSpread={1}
        rayLength={1.2}
        followMouse={false}
        mouseInfluence={0}
        noiseAmount={0.03}
        distortion={0.02}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6"
        >
          Meeting AI that helps during the call, not after.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-10"
        >
          Try Cluely on your next meeting today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button variant="cta" size="lg" className="relative overflow-hidden group">
            <span className="relative z-10">Get for Mac</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
