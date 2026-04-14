import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    content: 'I had zero coding knowledge before joining. The beginner-friendly approach and practical projects gave me the confidence to crack my first tech interview.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    name: 'Priya Patel',
    role: 'Data Engineer',
    content: 'The Data Engineering module is top-notch. Learning Snowflake and AWS from industry experts was a game-changer for my career transition.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Anish Kumar',
    role: 'Java Developer',
    content: 'The mock interviews and resume-building sessions were incredibly helpful. I landed a job at a top MNC within weeks of completing the course.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=anish'
  },
  {
    name: 'Sneha Reddy',
    role: 'Python Developer',
    content: 'TechSpark AI Labs provides the best mentorship. The live classes are interactive, and the recorded sessions are great for revision.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sneha'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(240,165,0,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            What Our <span className="text-brand-accent">Students Say</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Hear from our alumni who have successfully transformed their careers with TechSpark AI Labs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 relative group"
            >
              <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-brand-accent/20 transition-colors" size={64} />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-brand-accent/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
