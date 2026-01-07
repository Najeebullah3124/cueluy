import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Why real-time vs. a regular AI notetaker?',
    answer: 'Real-time transcription allows you to get immediate suggestions and answers during your meeting, not after it ends. This helps you respond more effectively in the moment.'
  },
  {
    question: 'Who is Cluely for?',
    answer: 'Cluely is designed for professionals who want to be more effective in meetings - from sales calls to job interviews, from client presentations to team standups.'
  },
  {
    question: 'Is Cluely free?',
    answer: 'Cluely offers a free trial so you can experience the power of real-time AI assistance. Premium features are available with a subscription.'
  },
  {
    question: 'How is it undetectable in meetings?',
    answer: 'Cluely uses a unique overlay technology that remains invisible to screen sharing software while being fully visible to you. This means you can use it in any video conferencing tool without others knowing.'
  },
  {
    question: 'What languages and apps are supported?',
    answer: 'We support 12+ languages including English, Chinese, Spanish, French, German, and more. Cluely works with Zoom, Google Meet, Microsoft Teams, and virtually any application.'
  },
  {
    question: 'Can I talk to customer support?',
    answer: 'Absolutely! Our support team is available to help you get the most out of Cluely. Reach out through our help center or contact us directly.'
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
