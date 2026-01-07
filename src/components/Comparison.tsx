import { motion } from 'framer-motion';
import { X, Check, Eye, EyeOff } from 'lucide-react';

const Comparison = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Meeting notes in 3 steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The easiest way to get beautiful, shareable meeting notes.
          </p>
          <p className="text-base text-muted-foreground mt-2">
            No meeting bots. 100% undetectable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-medium">
            How does Cluely stay undetectable?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Other AI Notetakers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Other AI Notetakers</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Joins as an invasive participant</p>
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-foreground">David's AI Notetaker</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cluely */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-6 ring-2 ring-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Cluely</h3>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Undetectable to screen share, visible to you</p>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">Visible to you</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <EyeOff className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Invisible to others</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
