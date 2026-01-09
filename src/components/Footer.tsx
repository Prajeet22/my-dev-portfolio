import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold inline-block mb-2">
              <span className="gradient-text">&lt;Dev</span>
              <span className="text-foreground">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alex Thompson. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-destructive fill-destructive" /> using React & Tailwind
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 pt-6 border-t border-border">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;