import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#473472]/20 via-transparent to-[#53629E]/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#87BAC3]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#473472]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-[#473472]/20 border border-[#87BAC3]/30 rounded-full text-[#D6F4ED] text-sm">
          Welcome to my portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D6F4ED] via-[#87BAC3] to-[#53629E] bg-clip-text text-transparent animate-fade-in">
          Creative Developer
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          I craft beautiful digital experiences through code and design
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-[#87BAC3] to-[#53629E] rounded-full font-semibold hover:shadow-lg hover:shadow-[#87BAC3]/50 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-[#87BAC3]/50 rounded-full font-semibold hover:bg-[#87BAC3]/10 transition-all duration-300"
          >
            View Work
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#87BAC3] transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#87BAC3] transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:hello@example.com" className="text-gray-400 hover:text-[#87BAC3] transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-[#87BAC3]" size={32} />
      </a>
    </section>
  );
}
