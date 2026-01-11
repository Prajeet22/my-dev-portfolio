import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-6 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Prajeet Shrivastava. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;