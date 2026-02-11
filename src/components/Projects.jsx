import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaUsers, FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Attendance System',
      subtitle: 'AI-Based Attendance Tracking',
      description: 'Automated student attendance tracking system using AI and machine learning. Features an admin dashboard with real-time monitoring and database integration.',
      icon: FaUsers,
      color: '#8b5cf6',
      technologies: ['Python', 'OpenCV', 'AI/ML', 'SQL Database', 'React'],
      githubLink: 'https://github.com/antonyathibana/FINAL-YEAR-PROJECT.git',
      demoLink: 'https://final-year-project-3fcd.onrender.com',
      features: [
        'Real-time AI-based detection and tracking',
        'Automated attendance marking',
        'Admin dashboard with analytics',
        'Student management system',
        'Attendance reports generation',
      ],
    },

    {
      id: 3,
      title: 'AI Chatbot',
      subtitle: 'Intelligent Conversation System',
      description: 'An intelligent chatbot built using Natural Language Processing (NLP) concepts. Provides interactive responses and can handle various queries with contextual understanding.',
      icon: FaBrain,
      color: '#F59E0B',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask', 'React'],
      githubLink: 'https://github.com/antonyathibana/AIchatbot',
      demoLink: '#',
      showDemo: false,
      features: [
        'Natural language understanding',
        'Context-aware responses',
        'Multi-turn conversations',
        'Intent recognition',
        'Easy integration via API',
      ],
    },
    {
      id: 4,
      title: 'CodeAura Internship Project',
      subtitle: 'Full Stack Web Application',
      description: 'Developed full-stack web modules during internship at CodeAura. Worked on backend integration, UI enhancements, and database management for client projects.',
      icon: FaLaptopCode,
      color: '#10B981',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      githubLink: '#',
      demoLink: '#',
      showButtons: false,
      features: [
        'Responsive UI development',
        'RESTful API development',
        'Database design & optimization',
        'Code review & testing',
        'Agile development practices',
      ],
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl gradient-orb"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl gradient-orb"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Showcasing my work and technical achievements
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Project Header */}
              <div 
                className="p-6 border-b border-white/10 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }}
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
                  style={{ background: project.color }}
                ></div>
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 border border-white/10"
                    style={{ background: `${project.color}20` }}
                  >
                    <project.icon className="text-2xl" style={{ color: project.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-gray mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-xs text-gray flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray hover:text-white hover:border-primary/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.showButtons !== false && (
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-primary/50 transition-all duration-300 ${project.showDemo === false ? 'mx-auto' : 'flex-1'}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub size={16} />
                      {project.showDemo === false ? 'Private' : 'Code'}
                    </motion.a>
                    {project.showDemo !== false && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt size={14} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/AntonyAthibana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

