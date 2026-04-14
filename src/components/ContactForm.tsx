import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Python',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', course: 'Python', message: '' });
    }, 1500);
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Get in <span className="text-brand-accent">Touch</span>
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Have questions? Our team is here to help you choose the right path for your career. Register now for a free demo session.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call or WhatsApp</h4>
                  <a href="https://wa.me/919848760585" className="text-white/60 hover:text-brand-accent transition-colors">
                    +91 9848760585
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <p className="text-white/60">info@techsparkailabs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Live Demo</h4>
                  <p className="text-white/60">Register below for the next free demo session.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl glass border-brand-accent/20 bg-brand-accent/5">
              <h4 className="text-xl font-bold mb-2">Batch Starting Soon!</h4>
              <p className="text-white/60 text-sm">Limited seats available for the upcoming cohort. Secure your spot today.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10"
          >
            <h3 className="text-2xl font-bold font-display mb-8">Inquiry Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="9848760585"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Course Interest</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all appearance-none"
                >
                  <option value="Python">Python Mastery</option>
                  <option value="Java">Java Professional</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="AI/ML">AI / ML Career</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your background..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl accent-gradient text-brand-primary font-bold text-lg hover:shadow-[0_0_30px_rgba(240,165,0,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
                <Send size={20} />
              </button>

              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 font-medium"
                >
                  Thank you! We'll contact you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
