import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3, FaJs, FaPython, FaNodeJs, FaDatabase, 
  FaGitAlt, FaBrain, FaReact, FaServer, FaCode 
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'HTML', level: 90, icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', level: 85, icon: FaCss3, color: '#1572B6' },
        { name: 'JavaScript', level: 80, icon: FaJs, color: '#F7DF1E' },
      ],
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: [
        { name: 'Python', level: 85, icon: FaPython, color: '#3776AB' },
        { name: 'Node.js', level: 75, icon: FaNodeJs, color: '#339939' },
        { name: 'SQL', level: 80, icon: FaDatabase, color: '#4479A1' },
      ],
    },
    {
      title: 'Other',
      icon: FaBrain,
      skills: [
        { name: 'Data Analytics', level: 75, icon: FaBrain, color: '#9B59B6' },
        { name: 'Git', level: 80, icon: FaGitAlt, color: '#F05032' },
        { name: 'Computer Networks', level: 75, icon: FaServer, color: '#00A4E4' },
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="section relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl gradient-orb"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl gradient-orb"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center">
                  <category.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300"
                          style={{ color: skill.color }}
                        >
                          <skill.icon size={20} />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className="absolute h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Express.js', 'Django', 'Flask', 'MongoDB', 'PostgreSQL',
              'REST APIs', 'Docker', 'AWS', 'Firebase', 'Tailwind CSS', 'Bootstrap',
              'Agile', 'CI/CD', 'Microservices'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray hover:text-white hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

