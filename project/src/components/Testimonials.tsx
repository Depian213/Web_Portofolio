import { Star, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getTestimonials, type Testimonial } from '../lib/supabase';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getTestimonials();
      setTestimonials(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <section className="py-32 px-6 relative flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-[#87BAC3]" size={48} />
      </section>
    );
  }

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#473472]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#87BAC3] to-[#53629E] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-[#0a0a0a] border border-[#473472]/30 rounded-2xl hover:border-[#87BAC3]/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#87BAC3] text-[#87BAC3]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                {testimonial.image_url && (
                  <img
                    src={testimonial.image_url}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
