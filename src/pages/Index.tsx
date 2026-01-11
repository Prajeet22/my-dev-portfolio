import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
// CHANGED: Import from your components folder, not react-day-picker
import Footer from '@/components/Footer'; 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      {/* Footer is typically placed outside the main content area */}
      <Footer />
    </div>
  );
};

export default Index;