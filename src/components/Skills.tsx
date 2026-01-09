import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'HTML5', category: 'core' },
  { name: 'CSS3', category: 'core' },
  { name: 'JavaScript (ES6+)', category: 'core' },
  { name: 'React', category: 'framework' },
  { name: 'TypeScript', category: 'framework' },
  { name: 'Responsive Design', category: 'design' },
  { name: 'Tailwind CSS', category: 'design' },
  { name: 'Git & GitHub', category: 'tools' },
  { name: 'REST APIs', category: 'tools' },
  { name: 'Figma', category: 'design' },
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

              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.2 + catIndex * 0.1 + index * 0.05,
                      }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${category.color} text-white`}
                    >
                      {skill.name}
                    </motion.span>
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