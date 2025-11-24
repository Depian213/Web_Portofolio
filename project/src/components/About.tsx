import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my passion',
    },
    {
      icon: <Palette size={32} />,
      title: 'Beautiful Design',
      description: 'Creating visually stunning interfaces that users love',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance',
      description: 'Optimized experiences that load fast and run smooth',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#473472]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#87BAC3] to-[#53629E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into reality. With a keen eye for design and
            a deep understanding of modern web technologies, I create digital experiences that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-[#0a0a0a] border border-[#473472]/30 rounded-2xl hover:border-[#87BAC3]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4 text-[#87BAC3] group-hover:text-[#D6F4ED] transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
