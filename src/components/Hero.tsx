import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/20 text-[10px] sm:text-xs font-semibold text-brand-accent mb-4">
              <ShieldCheck size={14} />
              <span>Trained by Industry Professionals</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-4">
              Industry Oriented <br />
              <span className="accent-gradient bg-clip-text text-transparent">Software Training</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 mb-6 max-w-xl leading-relaxed">
              Master <span className="text-white font-semibold">Python, Java, Data Engineering, and AI/ML</span> with hands-on projects and mentorship from experts with 10+ years of international experience.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm">
                <Zap size={14} className="text-brand-accent" />
                <span>No Prior Coding Required</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm">
                <ShieldCheck size={14} className="text-brand-accent" />
                <span>Placement Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#register"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl accent-gradient text-brand-primary font-bold text-base hover:shadow-[0_0_30px_rgba(240,165,0,0.3)] transition-all"
              >
                Register Now
                <ArrowRight size={18} />
              </a>
              <a
                href="#demo"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                Book Free Demo
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-3 text-white/50 text-xs sm:text-sm">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">For CSE, IT & All Branch Students</span>
              <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full" />
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Online Live Classes</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative hidden lg:block max-w-lg ml-auto"
          >
            <div className="relative z-10 glass rounded-3xl p-3 border-white/20 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                alt="MasterDEAI Training"
                className="rounded-2xl w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-4 rounded-xl border-white/20 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-brand-primary font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <div className="font-bold text-white">Years Experience</div>
                    <div className="text-xs text-white/60">International Industry Mentors</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 accent-gradient rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
