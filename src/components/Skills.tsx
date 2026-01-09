import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'HTML5', level: 95, category: 'core' },
  { name: 'CSS3', level: 90, category: 'core' },
  { name: 'JavaScript (ES6+)', level: 88, category: 'core' },
  { name: 'React', level: 80, category: 'framework' },
  { name: 'TypeScript', level: 75, category: 'framework' },
  { name: 'Responsive Design', level: 92, category: 'design' },
  { name: 'Tailwind CSS', level: 85, category: 'design' },
  { name: 'Git & GitHub', level: 82, category: 'tools' },
  { name: 'REST APIs', level: 78, category: 'tools' },
  { name: 'Figma', level: 70, category: 'design' },
];

const categories = [
  { id: 'core', name: 'Core Technologies', color: 'from-primary to-primary/70' },
  { id: 'framework', name: 'Frameworks & Libraries', color: 'from-blue-500 to-blue-400' },
  { id: 'design', name: 'Design & Styling', color: 'from-purple-500 to-purple-400' },
  { id: 'tools', name: 'Tools & Others', color: 'from-green-500 to-green-400' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            in various web development technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.name}
              </h3>

              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.3 + catIndex * 0.1 + index * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Sass', 'Bootstrap', 'Webpack', 'npm', 'VS Code', 'Chrome DevTools', 'SEO Basics', 'Accessibility'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;