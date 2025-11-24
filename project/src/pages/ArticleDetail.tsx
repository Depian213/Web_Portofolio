import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Loader2, Share2 } from 'lucide-react';
import { supabase, type Article } from '../lib/supabase';

export function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching article:', error);
      }

      setArticle(data);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#87BAC3]" size={48} />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <Link to="/#blog" className="text-[#87BAC3] hover:text-[#D6F4ED] transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-[#87BAC3] hover:text-[#D6F4ED] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <article>
          <div className="h-96 bg-gradient-to-br from-[#87BAC3]/20 to-[#53629E]/20 rounded-3xl mb-12 border border-[#473472]/30"></div>

          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-400 pb-8 border-b border-[#473472]/30">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {article.published_at && new Date(article.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <button className="flex items-center gap-2 hover:text-[#87BAC3] transition-colors">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-gray-300 leading-8 whitespace-pre-wrap">
              {article.content}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#473472]/20 to-[#53629E]/20 rounded-2xl border border-[#87BAC3]/30">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#87BAC3] to-[#53629E] rounded-full"></div>
              <div>
                <p className="text-white font-semibold">Written by Author</p>
                <p className="text-gray-400">Creative Developer & Author</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#473472]/30">
            <h3 className="text-2xl font-bold mb-6 text-white">More Articles</h3>
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#473472]/30 text-[#87BAC3] rounded-lg border border-[#87BAC3]/30 hover:border-[#87BAC3] hover:bg-[#473472]/50 transition-all"
            >
              Back to All Articles →
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
