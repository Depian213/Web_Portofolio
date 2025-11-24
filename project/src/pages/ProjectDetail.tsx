import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase, type Project } from '../lib/supabase';

export function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching project:', error);
      }

      setProject(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#87BAC3]" size={48} />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/#projects" className="text-[#87BAC3] hover:text-[#D6F4ED] transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-[#87BAC3] hover:text-[#D6F4ED] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <div className={`h-96 bg-gradient-to-br ${project.gradient} rounded-3xl mb-12 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                This project showcases my expertise in building full-featured applications with modern technologies.
                Every aspect was carefully designed and implemented to deliver an exceptional user experience.
              </p>
              <p>
                From the initial concept to final deployment, I focused on code quality, performance optimization,
                and maintaining clean architecture throughout the development process.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-3">
                <span className="text-[#87BAC3]">●</span>
                <span>Responsive design that works across all devices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#87BAC3]">●</span>
                <span>Optimized performance and fast load times</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#87BAC3]">●</span>
                <span>Scalable architecture for future growth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#87BAC3]">●</span>
                <span>Clean, maintainable code following best practices</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#473472]/30 text-[#D6F4ED] rounded-full border border-[#87BAC3]/30 hover:border-[#87BAC3] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-[#473472]/30">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#87BAC3]/50 transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink size={20} />
            View Live Project
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#87BAC3]/50 rounded-xl font-semibold hover:bg-[#87BAC3]/10 transition-all duration-300"
          >
            <Github size={20} />
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
