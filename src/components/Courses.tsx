import { motion } from 'motion/react';
import { Code2, Database, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import dataEngineerSyllabus from './syllabus/Data_Engineer_Syllabus.pdf';

const courses = [
  {
    title: 'Python Mastery',
    subtitle: 'From Basics to Job-Oriented Level',
    description: 'Master Python programming with a focus on real-world applications, automation, and data handling.',
    icon: <Code2 className="text-blue-400" />,
    tools: ['Python 3.x', 'Pandas', 'NumPy', 'Django'],
    level: 'Beginner to Advanced',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Java Professional',
    subtitle: 'Job-Oriented Java Training',
    description: 'Comprehensive Java training covering Core Java, Advanced Java, and Spring Boot for enterprise apps.',
    icon: <Globe className="text-orange-400" />,
    tools: ['Java 17+', 'Spring Boot', 'Hibernate', 'Microservices'],
    level: 'Beginner to Advanced',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Data Engineering',
    subtitle: 'Modern Data Stack Training',
    description: 'Learn to build scalable data pipelines using industry-standard cloud tools and frameworks.',
    icon: <Database className="text-purple-400" />,
    tools: ['Snowflake', 'AWS', 'dbt', 'SQL', 'Airflow'],
    level: 'Intermediate to Advanced',
    color: 'from-purple-500/20 to-pink-500/20',
    syllabusLink: dataEngineerSyllabus
  },
  {
    title: 'AI / ML Career',
    subtitle: 'Career-Oriented AI/ML Training',
    description: 'Dive into the world of Artificial Intelligence and Machine Learning with practical project experience.',
    icon: <Cpu className="text-emerald-400" />,
    tools: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'NLP'],
    level: 'Intermediate to Advanced',
    color: 'from-emerald-500/20 to-teal-500/20'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display mb-4"
            >
              Industry-Oriented <br />
              <span className="text-brand-accent">Course Modules</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg"
            >
              Our programs are meticulously crafted to transform beginners into industry-ready professionals through structured learning paths.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="#register" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all">
              View All Modules <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl p-8 glass border-white/5 hover:border-white/20 transition-all`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
                    {course.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/40">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display mb-1">{course.title}</h3>
                <p className="text-brand-accent text-sm font-semibold mb-4">{course.subtitle}</p>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-xs text-white/80 border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>

                <a 
                  href={course.syllabusLink || "#"} 
                  download={course.syllabusLink ? true : undefined}
                  onClick={(e) => {
                    if (!course.syllabusLink) {
                      e.preventDefault();
                      alert("Syllabus coming soon!");
                    }
                  }}
                  className="w-full py-4 rounded-xl border border-white/10 font-bold text-sm group-hover:bg-white group-hover:text-brand-primary transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Download Syllabus
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
