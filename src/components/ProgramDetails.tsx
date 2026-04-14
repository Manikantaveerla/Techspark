import { motion } from 'motion/react';
import { Clock, Monitor, FileText, Award, Calendar, PlayCircle } from 'lucide-react';

export default function ProgramDetails() {
  const details = [
    { icon: <Clock size={24} />, label: 'Duration', value: '6 Weeks' },
    { icon: <Monitor size={24} />, label: 'Mode', value: 'Live Online' },
    { icon: <FileText size={24} />, label: 'Includes', value: 'Notes + Recordings' },
    { icon: <Award size={24} />, label: 'Certification', value: 'Completion Certificate' }
  ];

  return (
    <section className="py-24 bg-brand-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 accent-gradient" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-display mb-8">Program <span className="text-brand-accent">Quick Details</span></h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div className="text-brand-accent">{detail.icon}</div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wider font-bold">{detail.label}</div>
                      <div className="text-lg font-bold">{detail.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 p-6 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center gap-4">
                <Calendar className="text-brand-accent" />
                <p className="text-sm font-medium">Next Batch Starting Soon! <span className="text-brand-accent font-bold">Limited Seats Available.</span></p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold font-display">What's Included?</h3>
              <div className="space-y-4">
                {[
                  { title: 'Free Demo Session', desc: 'Experience our teaching style before enrolling.' },
                  { title: 'Mock Interviews', desc: 'One-on-one sessions with industry experts.' },
                  { title: 'Placement Guidance', desc: 'End-to-end support for your job search.' },
                  { title: 'Project Support', desc: 'Hands-on help with your portfolio projects.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                      <PlayCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-brand-accent transition-colors">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
