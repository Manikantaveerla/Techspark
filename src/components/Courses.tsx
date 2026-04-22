import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Database, Cpu, Globe, ArrowUpRight, X, ChevronRight } from 'lucide-react';

const courses = [
  {
    title: 'Python Mastery',
    subtitle: 'From Basics to Job-Oriented Level',
    description: 'Master Python programming with a focus on real-world applications, automation, and data handling.',
    icon: <Code2 className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    tools: ['Python 3.x', 'Pandas', 'NumPy', 'Django'],
    level: 'Beginner to Advanced',
    color: 'from-blue-500/20 to-cyan-500/20',
    syllabus: [
      { module: 'Module 1: Introduction to Python', topics: ['What is Python & features', 'Installation & IDE setup', 'First program & execution flow'] },
      { module: 'Module 2: Basics', topics: ['Variables, data types', 'Operators', 'Input/output'] },
      { module: 'Module 3: Control Flow', topics: ['if, elif, else', 'for & while loops', 'break, continue'] },
      { module: 'Module 4: Data Structures', topics: ['Lists, tuples, sets, dictionaries', 'List comprehensions'] },
      { module: 'Module 5: Functions', topics: ['Functions, parameters, return', 'Lambda & recursion', 'Modules & packages'] },
      { module: 'Module 6: File Handling', topics: ['Read/write files', 'CSV & JSON', 'Exception handling'] },
      { module: 'Module 7: OOP', topics: ['Classes & objects', 'Inheritance, polymorphism', 'Encapsulation'] },
      { module: 'Module 8: Advanced Python', topics: ['Decorators', 'Generators', 'Multithreading', 'Logging'] },
      { module: 'Module 9: Data Handling', topics: ['NumPy', 'Pandas', 'Data cleaning & EDA'] },
      { module: 'Module 10: APIs & Automation', topics: ['APIs & requests', 'JSON handling', 'Web scraping'] },
      { module: 'Module 11: Python for AI', topics: ['Intro to ML', 'Scikit-learn', 'Basic ML model'] },
      { module: 'Module 12: Projects', topics: ['Automation project', 'Data analysis project', 'API-based app'] }
    ]
  },
  {
    title: 'Java Professional',
    subtitle: 'Job-Oriented Java Training',
    description: 'Comprehensive Java training covering Core Java, Advanced Java, and Spring Boot for enterprise apps.',
    icon: <Globe className="text-orange-400" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    tools: ['Java 17+', 'Spring Boot', 'Hibernate', 'Microservices'],
    level: 'Beginner to Advanced',
    color: 'from-orange-500/20 to-red-500/20',
    syllabus: [
      { module: 'Module 1: Java Fundamentals', topics: ['Java features and platform independence', 'JDK, JRE, JVM architecture', 'Program structure and execution flow', 'Data types and variables', 'Type casting'] },
      { module: 'Module 2: Operators & Control Flow', topics: ['Operators (arithmetic, logical, relational, bitwise)', 'if-else, switch statements', 'Loops (for, while, do-while)', 'break and continue'] },
      { module: 'Module 3: Arrays & Strings', topics: ['1D and 2D arrays', 'String internals and string pool', 'StringBuilder and StringBuffer', 'Common string problems'] },
      { module: 'Module 4: OOP Concepts', topics: ['Classes and objects', 'Constructors', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'] },
      { module: 'Module 5: Exception Handling', topics: ['Checked vs unchecked exceptions', 'try-catch-finally', 'throw and throws', 'Custom exceptions'] },
      { module: 'Module 6: Collections Framework', topics: ['List, Set, Map', 'ArrayList, LinkedList, HashMap', 'Iterator and Comparator', 'Internal working of HashMap'] },
      { module: 'Module 7: Multithreading', topics: ['Thread lifecycle', 'Thread creation', 'Synchronization', 'Deadlocks', 'Executor framework'] },
      { module: 'Module 8: File Handling', topics: ['File I/O', 'Streams (byte & character)', 'Serialization'] },
      { module: 'Module 9: JDBC', topics: ['JDBC architecture', 'Database connection', 'CRUD operations', 'PreparedStatement'] },
      { module: 'Module 10: Advanced Java', topics: ['Lambda expressions', 'Functional interfaces', 'Streams API', 'Optional class', 'Date and Time API'] },
      { module: 'Module 11: Web & Enterprise Java', topics: ['HTTP basics', 'Servlets and JSP', 'MVC architecture', 'Spring Framework', 'Spring Boot and REST APIs'] },
      { module: 'Module 12: Data Structures & Algorithms', topics: ['Arrays, Linked Lists', 'Stack and Queue', 'Trees and Graphs', 'Sorting and searching', 'Big-O complexity'] },
      { module: 'Module 13: Design Patterns', topics: ['Singleton', 'Factory', 'Builder', 'MVC'] },
      { module: 'Module 14: Tools & Practices', topics: ['Maven/Gradle', 'Git', 'Logging', 'JUnit testing'] },
      { module: 'Module 15: Projects', topics: ['Console application', 'JDBC CRUD project', 'Spring Boot REST API', 'Full-stack mini project'] }
    ]
  },
  {
    title: 'Data Engineering',
    subtitle: 'Modern Data Stack Training',
    description: 'Learn to build scalable data pipelines using industry-standard cloud tools and frameworks.',
    icon: <Database className="text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tools: ['Snowflake', 'AWS', 'dbt', 'SQL', 'Airflow'],
    level: 'Intermediate to Advanced',
    color: 'from-purple-500/20 to-pink-500/20',
    syllabus: [
      { module: 'Module 1: Introduction to Data Engineering', topics: ['Roles, Responsibilities', 'Modern Data Stack Overview'] },
      { module: 'Module 2: Advanced SQL', topics: ['Window Functions', 'CTEs', 'Query Optimization'] },
      { module: 'Module 3: Cloud Fundamentals (AWS)', topics: ['S3, EC2, IAM', 'Redshift, Glue'] },
      { module: 'Module 4: Data Warehousing (Snowflake)', topics: ['Architecture', 'Clustering', 'Snowpipe', 'Time Travel'] },
      { module: 'Module 5: Data Transformation (dbt)', topics: ['Project Setup', 'Models', 'Tests', 'Snapshots'] },
      { module: 'Module 6: Workflow Orchestration', topics: ['Airflow DAGs', 'Scheduling', 'Monitoring'] },
      { module: 'Module 7: Big Data Tools', topics: ['Apache Spark', 'Kafka Basics'] },
      { module: 'Module 8: Data Modeling', topics: ['Star Schema', 'Galaxy Schema', 'Dimension Modeling'] }
    ]
  },
  {
    title: 'AI / ML Career',
    subtitle: 'Career-Oriented AI/ML Training',
    description: 'Dive into the world of Artificial Intelligence and Machine Learning with practical project experience.',
    icon: <Cpu className="text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tools: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'NLP'],
    level: 'Intermediate to Advanced',
    color: 'from-emerald-500/20 to-teal-500/20',
    syllabus: [
      { module: 'Module 1: Foundations of AI', topics: ['Definition of AI, Machine Learning, Deep Learning', 'Types of AI: Narrow AI vs General AI', 'AI lifecycle: Data → Model → Deployment'] },
      { module: 'Module 2: Python for AI', topics: ['Python basics: variables, loops, functions', 'Data structures: lists, tuples, dictionaries', 'NumPy & Pandas', 'Jupyter Notebook usage'] },
      { module: 'Module 3: Mathematics & Statistics', topics: ['Descriptive statistics', 'Probability fundamentals', 'Linear algebra basics', 'Gradient descent intuition'] },
      { module: 'Module 4: Machine Learning', topics: ['Supervised learning', 'Regression: Linear, Logistic', 'Classification: Decision Trees, KNN', 'Clustering: K-Means', 'Model evaluation metrics', 'Overfitting vs Underfitting'] },
      { module: 'Module 5: Deep Learning', topics: ['Neural networks basics', 'Activation functions', 'Forward and backward propagation', 'CNN (image processing)', 'RNN (sequence modeling)', 'Introduction to TensorFlow and PyTorch'] },
      { module: 'Module 6: Natural Language Processing', topics: ['Text preprocessing', 'Tokenization, stemming, lemmatization', 'Bag of Words and TF-IDF', 'Word embeddings', 'Transformers basics', 'Chatbot development'] },
      { module: 'Module 7: Generative AI', topics: ['Introduction to Generative AI', 'Large Language Models (LLMs)', 'Prompt engineering techniques', 'Retrieval-Augmented Generation (RAG)', 'Using APIs (OpenAI, Hugging Face)'] },
      { module: 'Module 8: AI Engineering', topics: ['Building AI applications', 'Working with APIs', 'LangChain basics', 'Vector databases', 'System design for AI apps'] },
      { module: 'Module 9: Projects', topics: ['Chatbot with document retrieval', 'Recommendation system', 'Prediction model', 'Image classification project', 'End-to-end AI application'] },
      { module: 'Module 10: MLOps & Deployment', topics: ['Model deployment strategies', 'CI/CD for ML', 'Model monitoring', 'Version control for models', 'Cloud deployment basics'] },
      { module: 'Module 11: AI Ethics', topics: ['Bias in AI', 'Responsible AI principles', 'Data privacy and governance', 'AI risks and limitations', 'Future of AI careers'] }
    ]
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

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
              className={`relative group overflow-hidden rounded-3xl glass border-white/5 hover:border-white/20 transition-all flex flex-col`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/20 to-transparent`} />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-brand-primary/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold text-brand-accent">
                    {course.level}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6">
                   <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl shadow-2xl border-white/20">
                    {course.icon}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-6 relative flex-1 flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold font-display mb-1">{course.title}</h3>
                  <p className="text-brand-accent text-sm font-semibold mb-4">{course.subtitle}</p>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {course.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-xs text-white/80 border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedCourse(course)}
                    className="w-full py-4 rounded-xl border border-white/10 font-bold text-sm group-hover:bg-white group-hover:text-brand-primary transition-all flex items-center justify-center gap-2"
                  >
                    View Syllabus
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Syllabus Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-brand-primary/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass p-8 rounded-3xl border-white/10 max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8 shrink-0">
                <div>
                  <h3 className="text-3xl font-bold font-display">{selectedCourse.title}</h3>
                  <p className="text-brand-accent text-sm font-semibold">Detailed Syllabus</p>
                </div>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto pr-4 custom-scrollbar space-y-6">
                {selectedCourse.syllabus.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all">
                    <h4 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                       <ChevronRight size={20} className="text-brand-accent" />
                       {item.module}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-7">
                      {item.topics.map((topic, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/40" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white/40">Ready to start your journey?</p>
                <a 
                  href={`https://wa.me/919848760585?text=Hi, I'm interested in enrolling for the ${selectedCourse.title} course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 rounded-xl accent-gradient text-brand-primary font-bold hover:scale-105 transition-all text-center"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
