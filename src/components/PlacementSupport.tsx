import { motion } from 'motion/react';
import { FileSearch, UserCheck, MessageSquare, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <FileSearch size={28} />,
    title: 'Resume Building',
    description: 'Professional resume crafting to pass ATS and catch recruiter attention.'
  },
  {
    icon: <UserCheck size={28} />,
    title: 'Mock Interviews',
    description: 'Simulated technical and HR interviews with real-time feedback.'
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Interview Prep',
    description: 'Curated list of frequently asked questions and coding challenges.'
  },
  {
    icon: <GraduationCap size={28} />,
    title: 'Industry Mentoring',
    description: 'One-on-one sessions with experts to discuss career paths and trends.'
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Project Support',
    description: 'Guidance on building end-to-end projects that showcase your skills.'
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Career Guidance',
    description: 'Strategic planning for your long-term growth in the software industry.'
  }
];

export default function PlacementSupport() {
  return (
    <section id="placement" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Dedicated <span className="text-brand-accent">Placement Support</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Our commitment doesn't end with teaching. We work tirelessly to ensure our students are not just skilled, but also employable and confident in their job search.
            </p>
            <div className="space-y-4">
              {[
                'Direct referrals to our hiring partner network',
                'LinkedIn profile optimization for better visibility',
                'Soft skills and communication training',
                'Salary negotiation guidance'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <UserCheck size={14} />
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-8">
              <div className="glass p-6 rounded-2xl border-white/10 text-center">
                <div className="text-3xl font-bold text-brand-accent mb-1">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Hiring Partners</div>
              </div>
              <div className="glass p-6 rounded-2xl border-white/10 text-center">
                <div className="text-3xl font-bold text-brand-accent mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Interview Prep</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl border-white/10 text-center">
                <div className="text-3xl font-bold text-brand-accent mb-1">1:1</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Mentorship</div>
              </div>
              <div className="glass p-6 rounded-2xl border-white/10 text-center">
                <div className="text-3xl font-bold text-brand-accent mb-1">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Support</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl glass border-white/5 hover:border-brand-accent/30 transition-all group"
            >
              <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
