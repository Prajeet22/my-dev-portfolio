import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      label: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      label: 'UI/UX Focus',
      description: 'Creating intuitive user experiences',
    },
    {
      icon: Zap,
      label: 'Performance',
      description: 'Building fast, optimized applications',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-4 border-2 border-primary/20 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />

              {/* Image Container */}
<div className="absolute inset-8 bg-card rounded-xl overflow-hidden shadow-xl">
  <img
    src="/frontend.png"
    alt="Frontend Developer Workspace"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    width={600}
    height={600}
    className="w-full h-full object-cover"
  />
</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-mono text-sm mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about creating{' '}
              <span className="gradient-text">amazing web experiences</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I&apos;m a Web Developer who loves building clean, scalable, and user-focused web applications.
I specialize in developing responsive frontends and reliable backends using modern web technologies.
              </p>
              <p>
                I focus on performance, accessibility, and smooth user
                experiences while continuously improving my skills and staying
                up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="p-4 bg-card rounded-xl border border-border card-hover"
                >
                  <item.icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-sm mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Resume CTA */}
            <motion.a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="btn-primary inline-flex"
              aria-label="Download resume"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;