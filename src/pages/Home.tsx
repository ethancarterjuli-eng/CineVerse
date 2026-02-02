import { useEffect, useRef, useState } from 'react';
import { 
  Film, 
  Star, 
  ArrowRight, 
  Play,
  Zap,
  Theater,
  Smile,
  Rocket,
  Skull,
  Heart,
  Swords,
  Camera,
  ChevronRight,
  Flame,
  Clock,
  Calendar,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import { newsArticles } from '../data/news';

// Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Cinema" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff2d2d]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 lg:px-12 xl:px-20 pt-24">
        <div className="max-w-3xl">
          <div className="overflow-hidden mb-4">
            <h1 
              className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-white leading-none transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              DISCOVER
            </h1>
          </div>
          <div className="overflow-hidden mb-4">
            <h1 
              className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display cine-gradient-text leading-none transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              CINEMA
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 
              className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-white leading-none transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              MAGIC
            </h1>
          </div>

          <p 
            className={`text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Your ultimate destination for movie reviews, latest news, and entertainment updates. 
            Dive into the world of cinema with us.
          </p>

          <div 
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <Link to="/reviews" className="cine-btn-primary flex items-center gap-2">
              <Play className="w-4 h-4" />
              Explore Reviews
            </Link>
            <Link to="/news" className="cine-btn-secondary flex items-center gap-2">
              Latest News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Latest Reviews Section
function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-[#ff2d2d] text-[#ff2d2d]" />);
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-white/30" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-[#ff2d2d] text-[#ff2d2d]" />
          </div>
        </div>
      );
    }
    return stars;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#0f0f0f]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <h2 
              className={`text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              LATEST <span className="cine-gradient-text">REVIEWS</span>
            </h2>
            <p 
              className={`text-white/60 text-lg transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Expert critiques and audience favorites
            </p>
          </div>
          <Link 
            to="/reviews" 
            className={`mt-6 sm:mt-0 text-[#ff2d2d] font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            View All Reviews
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie, index) => (
            <Link
              key={movie.id}
              to={`/review/${movie.id}`}
              className={`group cine-card ${
                movie.id === 'dune-part-two' ? 'lg:-translate-y-8' : ''
              } transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-[#ff2d2d] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                  {movie.genre}
                </div>

                {movie.id === 'dune-part-two' && (
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-3 py-1 uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(movie.rating)}
                  <span className="ml-2 text-white/60 text-sm">{movie.rating}/5</span>
                </div>

                <h3 className="text-xl font-display text-white mb-3 group-hover:text-[#ff2d2d] transition-colors duration-300">
                  {movie.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {movie.excerpt}
                </p>

                <span className="text-[#ff2d2d] text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Read Review
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Movie Section
function FeaturedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredMovie = movies.find(m => m.id === 'dune-part-two');
  if (!featuredMovie) return null;

  return (
    <section ref={sectionRef} className="py-24 bg-[#0f0f0f] overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={featuredMovie.image} 
                alt={featuredMovie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/50 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#ff2d2d] text-white p-6 shadow-2xl animate-float">
              <div className="text-4xl font-display">{featuredMovie.rating}</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-[#ff2d2d] text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Featured Review
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4">
              DUNE: <span className="cine-gradient-text">PART TWO</span>
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-white/60 mb-6">
              <span className="flex items-center gap-1">
                <Rocket className="w-4 h-4" />
                {featuredMovie.genre}
              </span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {featuredMovie.year}
              </span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {featuredMovie.duration}
              </span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {featuredMovie.synopsis}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={`/review/${featuredMovie.id}`} className="cine-btn-primary flex items-center gap-2">
                <Play className="w-4 h-4" />
                Read Full Review
              </Link>
              <a 
                href={featuredMovie.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cine-btn-secondary flex items-center gap-2"
              >
                <Film className="w-4 h-4" />
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Categories Section
function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: 'Action', icon: Zap, count: 245 },
    { name: 'Drama', icon: Theater, count: 189 },
    { name: 'Comedy', icon: Smile, count: 156 },
    { name: 'Sci-Fi', icon: Rocket, count: 98 },
    { name: 'Horror', icon: Skull, count: 134 },
    { name: 'Romance', icon: Heart, count: 112 },
    { name: 'Thriller', icon: Swords, count: 167 },
    { name: 'Documentary', icon: Camera, count: 87 },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a0a0a]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            BROWSE BY <span className="cine-gradient-text">GENRE</span>
          </h2>
          <p 
            className={`text-white/60 text-lg transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Find your perfect movie match
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/reviews?genre=${category.name.toLowerCase()}`}
                className={`group relative bg-[#1a1a1a] border border-white/10 p-8 text-center transition-all duration-500 hover:border-[#ff2d2d] hover:bg-[#1a1a1a]/80 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff2d2d] group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-display text-white mb-1 group-hover:text-[#ff2d2d] transition-colors">
                  {category.name}
                </h3>

                <p className="text-white/50 text-sm">
                  {category.count} movies
                </p>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-[#ff2d2d]" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// News Section
function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredNews = newsArticles[0];
  const otherNews = newsArticles.slice(1);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0f0f0f]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <h2 
              className={`text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              ENTERTAINMENT <span className="cine-gradient-text">NEWS</span>
            </h2>
            <p 
              className={`text-white/60 text-lg transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Latest updates from Hollywood and beyond
            </p>
          </div>
          <Link 
            to="/news" 
            className={`mt-6 sm:mt-0 text-[#ff2d2d] font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            View All News
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <Link to={`/news/${featuredNews.id}`} className="group block relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-[500px] overflow-hidden">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-transparent to-transparent lg:bg-gradient-to-t lg:from-[#0f0f0f] lg:via-transparent lg:to-transparent" />
              </div>

              <div className="bg-[#1a1a1a] p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-[#ff2d2d] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider w-fit mb-4">
                  <Flame className="w-3 h-3" />
                  {featuredNews.category}
                </div>

                <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {featuredNews.date}
                </div>

                <h3 className="text-2xl lg:text-3xl font-display text-white mb-4 group-hover:text-[#ff2d2d] transition-colors">
                  {featuredNews.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>

                <div className="text-[#ff2d2d] font-medium flex items-center gap-2">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherNews.map((item, index) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className={`group cine-card transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>

                <h3 className="text-lg font-display text-white group-hover:text-[#ff2d2d] transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0f0f0f] animate-gradient-shift" />
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#ff2d2d]/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            NEVER MISS A <span className="cine-gradient-text">REVIEW</span>
          </h2>

          <p 
            className={`text-white/70 text-lg mb-10 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Subscribe to get the latest movie reviews, news, and exclusive content 
            delivered to your inbox.
          </p>

          <form 
            onSubmit={handleSubmit}
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {!isSubmitted ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff2d2d] focus:ring-1 focus:ring-[#ff2d2d] transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="cine-btn-primary flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="bg-[#22c55e]/20 border border-[#22c55e] text-[#22c55e] px-6 py-4 flex items-center justify-center gap-3">
                <div className="w-6 h-6 bg-[#22c55e] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            )}
          </form>

          <p 
            className={`text-white/50 text-sm mt-6 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Join 50,000+ movie lovers. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

// Home Page Component
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ReviewsSection />
      <FeaturedSection />
      <CategoriesSection />
      <NewsSection />
      <NewsletterSection />
    </main>
  );
}
