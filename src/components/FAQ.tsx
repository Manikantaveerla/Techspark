import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Is this course suitable for beginners?',
    answer: 'Absolutely! Our curriculum is designed specifically for beginners. We start from the absolute basics and gradually move to advanced, job-oriented concepts.'
  },
  {
    question: 'Do I need prior coding knowledge?',
    answer: 'No prior coding experience is required. We teach you everything from scratch, making it ideal for students from all branches (CSE, IT, ECE, etc.).'
  },
  {
    question: 'Are classes live or recorded?',
    answer: 'We conduct live interactive online classes on Zoom or Google Meet. However, you also get lifetime access to the recorded sessions for revision.'
  },
  {
    question: 'Will I get recordings and notes?',
    answer: 'Yes, after every session, you will receive the recording and comprehensive study notes for your reference.'
  },
  {
    question: 'Is there a certificate after completion?',
    answer: 'Yes, upon successful completion of the training and projects, you will receive a professional Certificate of Completion from TechSpark AI Labs.'
  },
  {
    question: 'Do you provide mock interviews?',
    answer: 'Yes, we conduct multiple mock interview sessions with industry professionals to help you prepare for real-world job interviews.'
  },
  {
    question: 'Is placement support included?',
    answer: 'Yes, we provide end-to-end placement support, including resume building, LinkedIn optimization, and job referrals to our hiring partners.'
  },
  {
    question: 'What technologies are covered in Data Engineering?',
    answer: 'Our Data Engineering module covers Snowflake, AWS, dbt, SQL, and building scalable data pipelines.'
  },
  {
    question: 'How long is the training program?',
    answer: 'The core training program duration is 6 weeks, followed by project work and placement assistance.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </motion.h2>
          <p className="text-white/60 text-lg">
            Find answers to common questions about our training programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-2xl border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
