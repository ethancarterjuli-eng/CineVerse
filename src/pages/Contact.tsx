import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Phone, Send, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6">
            GET IN <span className="cine-gradient-text">TOUCH</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
            Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 lg:p-12">
            <h2 className="text-2xl font-display text-white mb-8">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-[#22c55e]/20 border border-[#22c55e] text-[#22c55e] px-6 py-8 text-center">
                <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-white mb-2">Message Sent!</h3>
                <p className="text-white/60">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#ff2d2d] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#ff2d2d] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#ff2d2d] transition-colors"
                  >
                    <option value="" className="bg-[#1a1a1a]">Select a subject</option>
                    <option value="general" className="bg-[#1a1a1a]">General Inquiry</option>
                    <option value="review" className="bg-[#1a1a1a]">Submit a Review</option>
                    <option value="news" className="bg-[#1a1a1a]">News Tip</option>
                    <option value="partnership" className="bg-[#1a1a1a]">Partnership</option>
                    <option value="advertising" className="bg-[#1a1a1a]">Advertising</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#ff2d2d] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="cine-btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-[#1a1a1a] p-8 mb-8">
              <h2 className="text-2xl font-display text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#ff2d2d]" />
                  </div>
                  <div>
                    <h4 className="text-white font-display mb-1">Email</h4>
                    <p className="text-white/60">hello@cineverse.com</p>
                    <p className="text-white/60">support@cineverse.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#ff2d2d]" />
                  </div>
                  <div>
                    <h4 className="text-white font-display mb-1">Phone</h4>
                    <p className="text-white/60">+1 (555) 123-4567</p>
                    <p className="text-white/60">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#ff2d2d]" />
                  </div>
                  <div>
                    <h4 className="text-white font-display mb-1">Address</h4>
                    <p className="text-white/60">123 Cinema Boulevard</p>
                    <p className="text-white/60">Los Angeles, CA 90028</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#1a1a1a] p-8">
              <h3 className="text-xl font-display text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
