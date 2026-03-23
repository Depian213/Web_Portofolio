import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
