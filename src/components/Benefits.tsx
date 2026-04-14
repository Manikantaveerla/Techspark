import { motion } from 'motion/react';
import { Video, Headphones, BookOpen, FileCode, Users, Briefcase, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: <Video className="text-brand-accent" />,
    title: 'Live Interactive Classes',
    description: 'Real-time online sessions on Zoom/Google Meet with direct interaction.'
  },
  {
    icon: <Headphones className="text-brand-accent" />,
    title: 'Recorded Sessions Access',
    description: 'Missed a class? No worries. Get lifetime access to all session recordings.'
  },
  {
    icon: <BookOpen className="text-brand-accent" />,
    title: 'Beginner-Friendly Teaching',
    description: 'Step-by-step guidance designed specifically for students with zero coding background.'
  },
  {
    icon: <FileCode className="text-brand-accent" />,
    title: 'End-to-End Projects',
    description: 'Build production-grade projects to showcase your skills on your resume.'
  },
  {
    icon: <Users className="text-brand-accent" />,
    title: 'Mock Interviews',
    description: 'Practice with industry experts and get detailed feedback to improve your performance.'
  },
  {
    icon: <Briefcase className="text-brand-accent" />,
    title: 'Placement Support',
    description: 'Dedicated assistance to help you land your dream job in the tech industry.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Exclusive <span className="text-brand-accent">Student Benefits</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We provide everything you need to succeed in your software career journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-2xl glass border-white/5 hover:bg-white/10 transition-all flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
