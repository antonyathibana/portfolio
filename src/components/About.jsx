import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaLaptopCode, FaBrain, FaAward } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaGraduationCap,
      title: 'Final Year CS Student',
      description: 'B.Sc. Computer Science with Cognitive System at Sri Krishna Arts and Science College, Coimbatore',
    },
    {
      icon: FaBriefcase,
      title: 'Full Stack Developer',
      description: 'Internship experience at CodeAura building scalable web applications',
    },
    {
      icon: FaAward,
      title: 'IBM Certified',
      description: 'Multiple IBM certifications demonstrating expertise in various technologies',
    },
    {
      icon: FaCertificate,
      title: 'Network Certified',
      description: 'Wireless Network Essentials certification from Amypo Technologies',
    },
    {
      icon: FaBrain,
      title: 'AI Enthusiast',
      description: 'Passionate about Artificial Intelligence, Machine Learning, and Data Analytics',
    },
    {
      icon: FaLaptopCode,
      title: 'Project Builder',
      description: 'Built AI-based systems including Smart Attendance System',
    },
  ];

  const certificates = [
    { title: 'Wireless Network Essentials', image: '/other-certificate/Wireless Network essentials.pdf', logo: '/logos/amypo.jpeg' },
    { title: 'HTML', image: '/other-certificate/HTML.pdf', logo: '/logos/HTML5.png' },
    { title: 'Java', image: '/other-certificate/java.pdf', logo: '/logos/java.jpeg' },
    { title: 'LeetCode in Java', image: '/other-certificate/leetcode in java by udemy.pdf', logo: '/logos/udemy.png' },
    { title: 'ServiceNow', image: '/other-certificate/Micro-Certification-Welcome-to-ServiceNow.pdf', logo: '/logos/service now.jpg' },
    { title: 'Python', image: '/other-certificate/Python 3.4.3.pdf', logo: '/logos/python.png' },
    { title: 'RDBMS PostgreSQL', image: '/other-certificate/RDBMS PostgreSQL.pdf', logo: '/logos/PostgreSQL.png' },
    { title: 'IBM 1', image: '/ibm-certificates/ibm1.pdf', logo: '/logos/ibm.png' },
    { title: 'IBM 2', image: '/ibm-certificates/ibm2.pdf', logo: '/logos/ibm.png' },
    { title: 'IBM 3', image: '/ibm-certificates/ibm3.pdf', logo: '/logos/ibm.png' },
    { title: 'IBM 4', image: '/ibm-certificates/ibm4.pdf', logo: '/logos/ibm.png' },
    { title: 'IBM', image: '/ibm-certificates/ibm.pdf', logo: '/logos/ibm.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section relative">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl gradient-orb"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl gradient-orb"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Get to know me better - my background, skills, and passion for technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  src="/23bcg005.jpg" 
                  alt="ANTONY ATHIBAN"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Hello, I am ANTONY ATHIBAN!</h3>
<p className="text-gray leading-relaxed mb-6">
                I am a final-year <span className="text-primary font-medium">B.Sc. Computer Science with Cognitive System</span> student at
                <span className="text-secondary font-medium"> Sri Krishna Arts and Science College, Coimbatore</span>. 
                I am passionate about Full Stack Development and Artificial Intelligence. 
                I recently completed an internship at <span className="text-primary font-medium">CodeAura</span> 
                as a Full Stack Developer, where I worked on building scalable web applications 
                and enhancing user interfaces.
              </p>
              <p className="text-gray leading-relaxed mb-6">
                I hold multiple certifications including <span className="text-secondary font-medium">IBM certifications</span> 
                and <span className="text-primary font-medium">Wireless Network Essentials</span> from Amypo Technologies, 
                which have strengthened my understanding of various technologies.
              </p>
              <p className="text-gray leading-relaxed">
                My notable projects include a <span className="text-primary font-medium">Smart Attendance System</span> 
                deployed on Render. 
                I am constantly exploring new technologies and building solutions that make a difference.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-primary font-bold text-xl">4+</span>
                  <span className="text-gray text-sm ml-1">Projects</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-secondary font-bold text-xl">1</span>
                  <span className="text-gray text-sm ml-1">Internship</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-primary font-bold text-xl">13</span>
                  <span className="text-gray text-sm ml-1">Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Internship</h3>
          <motion.a
            href="/internship.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-2xl p-8 cursor-pointer block max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-6">
<div className="w-24 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img 
                  src="/logos/code aura.jpeg" 
                  alt="CodeAura" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Full Stack Developer Intern</h4>
                <p className="text-primary font-medium mb-1">CodeAura</p>
                <p className="text-gray text-sm">Click to view internship letter</p>
              </div>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">My Certificates</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {certificates.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-4 cursor-pointer text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={cert.title} 
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <FaCertificate className="text-2xl text-primary" />
                  )}
                </div>
                <h4 className="text-sm font-semibold line-clamp-2">{cert.title}</h4>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-xl p-6 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center mb-4">
                <feature.icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
