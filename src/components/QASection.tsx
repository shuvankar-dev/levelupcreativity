import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CSS/QASection.css';

interface Question {
  id: number;
  question: string;
  answer: string;
}

const QASection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, // Animates only once
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  const questions: Question[] = [
    {
      id: 1,
      question: "Personal Who can join LevelUp's UX/UI and 3D courses?",
      answer: "Anyone interested in learning UX/UI design and 3D modeling can join our courses. Whether you're a complete beginner or looking to enhance your existing skills, our courses are designed to accommodate learners at various levels."
    },
    {
      id: 2,
      question: "Do I need prior design or coding knowledge to start?",
      answer: "No prior design or coding knowledge is required. Our courses start with the fundamentals and gradually progress to more advanced topics. We provide comprehensive learning materials and hands-on projects to help you build your skills from scratch."
    },
    {
      id: 3,
      question: "What's the difference between online and offline classes?",
      answer: "Online classes offer flexibility to learn at your own pace with recorded lectures and live sessions. Offline classes provide in-person interaction with instructors and peers, hands-on guidance, and a structured learning environment. Both formats cover the same curriculum and provide certification upon completion."
    },
    {
      id: 4,
      question: "Will I work on real-world projects during the course?",
      answer: "Yes! Our courses include multiple real-world projects that simulate actual industry scenarios. You'll build a professional portfolio by working on practical assignments, case studies, and collaborative projects that showcase your skills to potential employers."
    },
    {
      id: 5,
      question: "Do you provide certificates and placement support after completion?",
      answer: "Yes, we provide industry-recognized certificates upon successful course completion. Our placement support includes resume building, portfolio review, interview preparation, and connections with hiring partners. We also offer career guidance and mentorship to help you land your dream job."
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Animation variants - smooth like ToolsSection
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="qa-section" ref={sectionRef}>
      <motion.div 
        className="qa-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <div className="qa-header">
          <motion.h2 
            className="qa-title"
            variants={titleVariants}
          >
            Your Questions Answered
          </motion.h2>
          <motion.p 
            className="qa-subtitle"
            variants={titleVariants}
          >
            Start your learning journey with our comprehensive mini course
          </motion.p>
        </div>

        {/* Questions List */}
        <motion.div 
          className="qa-list"
          variants={containerVariants}
        >
          {questions.map((item) => (
            <motion.div 
              key={item.id} 
              className={`qa-item ${openId === item.id ? 'active' : ''}`}
              variants={itemVariants}
            >
              <button 
                className="qa-question-btn"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className="qa-question-text">{item.question}</span>
                <span className="qa-icon">
                  {openId === item.id ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </button>
              
              {openId === item.id && (
                <div className="qa-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QASection;
