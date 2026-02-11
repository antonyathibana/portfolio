import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComment, FaTimes, FaPaperPlane, FaRobot, FaQuestion, FaProjectDiagram, FaUserGraduate, FaBriefcase } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi there! 👋 I'm your AI assistant. How can I help you learn more about me?",
      options: [
        { id: 'projects', text: 'What projects have you done?' },
        { id: 'skills', text: 'What skills do you have?' },
        { id: 'hire', text: 'Why should we hire you?' },
      ],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const faqAnswers = {
    projects: {
      text: "I've worked on several exciting projects:\n\n1. **Smart Attendance System** - AI-based attendance tracking\n2. **AI Chatbot** - NLP-powered conversational AI\n3. **CodeAura Internship Project** - Full-stack web applications\n\nWould you like more details on any of these?",
    },
    skills: {
      text: "My key skills include:\n\n**Frontend:** HTML, CSS, JavaScript, React\n**Backend:** Python, Node.js, SQL\n**Other:** AI/ML, Data Analytics, Git, Computer Networks\n\nI'm constantly learning and expanding my skillset!",
    },
    hire: {
      text: "Here's why you should hire me:\n\n✅ Strong foundation in Full Stack Development\n✅ Hands-on experience with AI/ML technologies\n✅ Proven internship experience at CodeAura\n✅ Passionate about building scalable solutions\n✅ Quick learner and team player\n✅ Good communication skills\n\nI'm ready to contribute to your team!",
    },
  };

  const handleOptionClick = (optionId) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: faqAnswers[optionId].text.split('\n')[0], // First line as user message
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'bot',
          text: faqAnswers[optionId].text,
        },
      ]);
    }, 1000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: "Hi there! 👋 I'm your AI assistant. How can I help you learn more about me?",
        options: [
          { id: 'projects', text: 'What projects have you done?' },
          { id: 'skills', text: 'What skills do you have?' },
          { id: 'hire', text: 'Why should we hire you?' },
        ],
      },
    ]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg hover:shadow-primary/25 transition-all duration-300 ${
          isOpen ? 'rotate-90' : ''
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? (
          <FaTimes size={24} className="text-white" />
        ) : (
          <FaComment size={24} className="text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] glass-card rounded-2xl overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 150px)' }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaRobot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">AI Assistant</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                title="Reset Chat"
              >
                <FaRobot size={16} className="text-white" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-md'
                        : 'bg-white/10 text-white rounded-bl-md'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <div className="flex items-center gap-2 mb-2">
                        <FaRobot size={14} className="text-primary" />
                        <span className="text-xs font-medium">AI Assistant</span>
                      </div>
                    )}
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.text}
                    </div>

                    {/* Options */}
                    {message.options && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.options.map((option) => (
                          <motion.button
                            key={option.id}
                            onClick={() => handleOptionClick(option.id)}
                            className="px-3 py-2 text-xs bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {option.id === 'projects' && <FaProjectDiagram size={12} />}
                            {option.id === 'skills' && <FaBriefcase size={12} />}
                            {option.id === 'hire' && <FaUserGraduate size={12} />}
                            {option.text}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FaRobot size={14} className="text-primary" />
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat Footer */}
            <div className="p-3 border-t border-white/10 bg-black/20">
              <p className="text-xs text-gray text-center">
                <FaQuestion className="inline mr-1" />
                Click on the options above or ask me anything!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
