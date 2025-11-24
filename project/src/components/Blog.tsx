import { Calendar, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getArticles, type Article } from '../lib/supabase';

export function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getArticles();
      setArticles(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-32 px-6 relative flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-[#87BAC3]" size={48} />
      </section>
    );
  }

  return (
    <section id="blog" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#53629E]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#87BAC3] to-[#53629E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights and learnings from my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.slug}`}
              className="group bg-[#0a0a0a] border border-[#473472]/30 rounded-2xl overflow-hidden hover:border-[#87BAC3]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-[#87BAC3]/20 to-[#53629E]/20 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#87BAC3] transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 mb-4">{article.excerpt}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar size={16} />
                  {article.published_at && new Date(article.published_at).toLocaleDateString()}
                </div>

                <span className="inline-flex items-center gap-2 text-[#87BAC3] group-hover:text-[#D6F4ED] transition-colors font-semibold">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
