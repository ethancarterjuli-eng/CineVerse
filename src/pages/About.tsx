import { Link } from 'react-router-dom';
import { ChevronRight, Film, Star, Users, Award, Mail, MapPin, Calendar } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Film, value: '500+', label: 'Movies Reviewed' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Users, value: '50K+', label: 'Subscribers' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Founder & Chief Editor',
      bio: 'Film critic with 15+ years of experience. Previously wrote for major publications.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Senior Film Critic',
      bio: 'Specializes in sci-fi and indie films. Film school graduate and festival regular.',
    },
    {
      name: 'James Chen',
      role: 'Entertainment Reporter',
      bio: 'Covers Hollywood news, interviews, and industry analysis.',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Content Manager',
      bio: 'Manages our blog and social media presence. Loves classic cinema.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6">
            ABOUT <span className="cine-gradient-text">CINEVERSE</span>
          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mb-20">
          <p className="text-2xl sm:text-3xl text-white/80 leading-relaxed mb-8">
            We're passionate about cinema. Our mission is to help movie lovers discover their next 
            favorite film through honest, thoughtful reviews and the latest entertainment news.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Founded in 2015, CineVerse has grown from a small blog to one of the most trusted 
            sources for movie reviews and entertainment news. Our team of dedicated critics and 
            reporters work tirelessly to bring you the best coverage of the film industry.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-[#1a1a1a] border border-white/10 p-8 text-center hover:border-[#ff2d2d] transition-colors"
              >
                <Icon className="w-10 h-10 text-[#ff2d2d] mx-auto mb-4" />
                <div className="text-4xl font-display text-white mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-4xl font-display text-white mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] p-8">
              <div className="w-14 h-14 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-[#ff2d2d]" />
              </div>
              <h3 className="text-xl font-display text-white mb-4">Movie Reviews</h3>
              <p className="text-white/60 leading-relaxed">
                In-depth, spoiler-free reviews of the latest releases. We analyze every aspect 
                from cinematography to performances to help you decide what's worth watching.
              </p>
            </div>
            
            <div className="bg-[#1a1a1a] p-8">
              <div className="w-14 h-14 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center mb-6">
                <Film className="w-7 h-7 text-[#ff2d2d]" />
              </div>
              <h3 className="text-xl font-display text-white mb-4">Entertainment News</h3>
              <p className="text-white/60 leading-relaxed">
                Breaking news from Hollywood and beyond. Casting announcements, production updates, 
                trailers, and industry insights delivered fresh daily.
              </p>
            </div>
            
            <div className="bg-[#1a1a1a] p-8">
              <div className="w-14 h-14 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#ff2d2d]" />
              </div>
              <h3 className="text-xl font-display text-white mb-4">Community</h3>
              <p className="text-white/60 leading-relaxed">
                A thriving community of movie lovers. Share your thoughts, read user reviews, 
                and connect with fellow cinephiles who share your passion.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-display text-white mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 text-center group hover:bg-[#1a1a1a]/80 transition-colors">
                <div className="w-24 h-24 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff2d2d]/30 transition-colors">
                  <Users className="w-12 h-12 text-[#ff2d2d]" />
                </div>
                <h3 className="text-xl font-display text-white mb-1">{member.name}</h3>
                <p className="text-[#ff2d2d] text-sm mb-4">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#1a1a1a] p-8 lg:p-12">
          <h2 className="text-3xl font-display text-white mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#ff2d2d]" />
              </div>
              <div>
                <h4 className="text-white font-display mb-2">Email Us</h4>
                <p className="text-white/60 text-sm">hello@cineverse.com</p>
                <p className="text-white/60 text-sm">press@cineverse.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#ff2d2d]" />
              </div>
              <div>
                <h4 className="text-white font-display mb-2">Location</h4>
                <p className="text-white/60 text-sm">123 Cinema Boulevard</p>
                <p className="text-white/60 text-sm">Los Angeles, CA 90028</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-[#ff2d2d]" />
              </div>
              <div>
                <h4 className="text-white font-display mb-2">Office Hours</h4>
                <p className="text-white/60 text-sm">Monday - Friday</p>
                <p className="text-white/60 text-sm">9:00 AM - 6:00 PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
