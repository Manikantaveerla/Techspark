import { motion } from 'motion/react';
import { CheckCircle2, Users, Briefcase, GraduationCap, Trophy, Target } from 'lucide-react';

const reasons = [
  {
    icon: <Users className="text-brand-accent" />,
    title: 'Real-time Industry Trainers',
    description: 'Learn from mentors currently working in top tech companies across the globe.'
  },
  {
    icon: <Trophy className="text-brand-accent" />,
    title: '10+ Years Experience',
    description: 'Benefit from a decade of international industry expertise and best practices.'
  },
  {
    icon: <Target className="text-brand-accent" />,
    title: 'Job-Oriented Curriculum',
    description: 'Our syllabus is designed based on current market demands and hiring trends.'
  },
  {
    icon: <GraduationCap className="text-brand-accent" />,
    title: 'Beginner-Friendly Teaching',
    description: 'No prior coding experience? No problem. We start from the absolute basics.'
  },
  {
    icon: <Briefcase className="text-brand-accent" />,
    title: 'Placement & Career Support',
    description: 'End-to-end guidance from resume building to mock interviews and job referrals.'
  },
  {
    icon: <CheckCircle2 className="text-brand-accent" />,
    title: 'Practical Project Learning',
    description: 'Build real-world projects that stand out on your resume and impress recruiters.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Why Choose <span className="text-brand-accent">TechSpark AI Labs?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            We don't just teach code; we build careers. Our mission is to bridge the gap between academic learning and industry requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-brand-accent/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-display mb-6">Our Career-Focused Approach</h3>
              <div className="space-y-4">
                {[
                  'Personalized mentorship from industry veterans',
                  'Mock interviews with detailed feedback sessions',
                  'Resume and LinkedIn profile optimization',
                  'Access to our exclusive hiring partner network',
                  'Lifetime access to course recordings and notes'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={20} />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Students collaborating"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-white/20 hidden sm:block">
                <div className="text-3xl font-bold text-brand-accent">100%</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Practical Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
