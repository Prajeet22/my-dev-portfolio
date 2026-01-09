import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    organization: 'TechStart Solutions',
    period: 'Jun 2024 - Aug 2024',
    description: 'Developed responsive web interfaces using React and Tailwind CSS. Collaborated with the design team to implement pixel-perfect UI components and improved website performance by 30%.',
    skills: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    organization: 'State University',
    period: '2020 - 2024',
    description: 'Graduated with honors. Focused on web development, data structures, and software engineering. Completed multiple projects in web technologies.',
    skills: ['Web Development', 'Algorithms', 'Software Engineering'],
  },
];

const certifications = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
  },
  {
    title: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    date: '2024',
  },
  {
    title: 'React Fundamentals',
    issuer: 'Coursera',
    date: '2024',
  },
  {
    title: 'Git & GitHub',
    issuer: 'Udemy',
    date: '2023',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional experience that have shaped 
            my skills as a frontend developer.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

              {/* Timeline items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex gap-6"
                  >
                    {/* Icon */}
                    <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary items-center justify-center z-10">
                      {exp.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-primary" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-xl p-6 border border-border card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{exp.title}</h3>
                          <p className="text-primary text-sm">{exp.organization}</p>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-6 border border-border h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span className="font-mono">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;