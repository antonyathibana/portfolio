import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'CodeAura',
      location: 'Remote',
      date: '2024 - Present',
      description: 'Working as a Full Stack Developer Intern, building scalable web applications and contributing to real-world projects.',
      achievements: [
        'Developed full-stack web modules using React and Node.js',
        'Implemented backend APIs and database solutions',
        'Collaborated with cross-functional teams in an Agile environment',
        'Enhanced UI/UX for client-facing applications',
        'Participated in code reviews and testing processes',
      ],
      color: '#8b5cf6',
    },
    {
      id: 2,
      type: 'certification',
      title: 'IBM Data Analytics Certified',
      organization: 'IBM (Coursera)',
      location: 'Online',
      date: 'June 2024',
      description: 'Completed Introduction to Data Analytics certification from IBM, gaining expertise in data visualization, analysis tools, and statistical methods.',
      achievements: [
        'Proficiency in data analysis tools and techniques',
        'Data visualization and dashboard creation',
        'Statistical analysis and interpretation',
        'IBM Skills Network verified certification',
        'Verified at: coursera.org/verify/8A3RUWVNK4W5',
      ],
      color: '#14b8a6',
    },
    {
      id: 3,
      type: 'certification',
      title: 'Wireless Network Essentials',
      organization: 'Amypo Technologies',
      location: 'Online',
      date: 'June 2024',
      description: 'Completed comprehensive certification in Wireless Network Essentials covering networking fundamentals, protocols, and security. Scored 70/100.',
      achievements: [
        'In-depth understanding of TCP/IP protocol suite',
        'Network security and encryption concepts',
        'Routing and switching technologies',
        'Wireless networking fundamentals',
        'Certificate ID: AMY-251007161354050',
      ],
      color: '#F59E0B',
    },
    {
      id: 4,
type: 'education',
      title: 'B.Sc. Computer Science with Cognitive System',
      organization: 'Sri Krishna Arts and Science College',
      location: 'Coimbatore, Tamil Nadu',
      date: '2023 - 2026',
      description: 'Pursuing degree in Computer Science with specialization in Cognitive System. Focused on AI, Machine Learning, and Full Stack Development.',
      achievements: [
        'Specialization in Cognitive System and AI/ML',
        'Building Final Year Project on AI-Based Systems',
        'Active member of Coding Club',
        'Participated in hackathons and coding competitions',
        'Internship experience at CodeAura',
      ],
      color: '#10B981',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="section relative">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl gradient-orb"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl gradient-orb"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience and Education</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-black z-10" style={{ background: exp.color }}></div>

              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-6 relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                    style={{ background: exp.color }}
                  ></div>

                  <div className="relative z-10">
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                      style={{ 
                        background: `${exp.color}20`, 
                        color: exp.color,
                        border: `1px solid ${exp.color}40`
                      }}
                    >
                      {exp.type === 'work' && <FaBriefcase size={12} />}
                      {exp.type === 'certification' && <FaCertificate size={12} />}
                      {exp.type === 'education' && <FaGraduationCap size={12} />}
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-2">{exp.organization}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray mb-4">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={14} />
                        {exp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: exp.color }}
                          ></span>
                          <span className="text-gray text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Lets Work Together</h3>
            <p className="text-gray mb-6">
              I am always open to discussing new opportunities and interesting projects.
              Feel free to reach out if you would like to collaborate
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

