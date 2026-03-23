import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, type Project } from '../lib/supabase';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-32 px-6 relative flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-[#87BAC3]" size={48} />
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#53629E]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#87BAC3] to-[#53629E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-[#0a0a0a] border border-[#473472]/30 rounded-2xl overflow-hidden hover:border-[#87BAC3]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Github size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#473472]/30 text-[#D6F4ED] text-sm rounded-full border border-[#87BAC3]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
