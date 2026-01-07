import { motion } from 'framer-motion';

const stats = [
  {
    value: '12+',
    label: 'Languages',
    description: 'We support over 12 different languages, including English, Chinese, Spanish, and more.'
  },
  {
    value: '300ms',
    label: 'Response time',
    description: 'We have the fastest live transcription available. Test us against any other competitor.'
  },
  {
    value: '95%',
    label: 'Transcription accuracy',
    description: 'Trusted by many teams for reliable transcription. All processed with industry-leading accuracy.'
  }
];

const Stats = () => {
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
            Real-time transcription
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-4">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
