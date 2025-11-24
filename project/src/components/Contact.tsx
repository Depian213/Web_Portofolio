import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hello@example.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'San Francisco, CA',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#473472]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#87BAC3] to-[#53629E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-[#473472]/30 rounded-xl hover:border-[#87BAC3]/50 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-[#87BAC3]/20 to-[#53629E]/20 rounded-lg text-[#87BAC3]">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-[#473472]/20 to-[#53629E]/20 rounded-2xl border border-[#87BAC3]/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#473472]/30 rounded-xl focus:border-[#87BAC3] focus:outline-none transition-colors text-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#473472]/30 rounded-xl focus:border-[#87BAC3] focus:outline-none transition-colors text-white"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#473472]/30 rounded-xl focus:border-[#87BAC3] focus:outline-none transition-colors text-white resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#87BAC3]/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-[#473472]/30 text-center text-gray-500">
          <p>© 2024 Portfolio. Crafted with passion and code.</p>
        </div>
      </div>
    </section>
  );
}
