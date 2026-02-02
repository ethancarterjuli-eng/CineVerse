import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Filter, ArrowRight, Flame } from 'lucide-react';
import { newsArticles } from '../data/news';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Breaking News', 'Production', 'Casting', 'Awards'];

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredNews = filteredNews[0];
  const otherNews = filteredNews.slice(1);

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

  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">News</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4">
            ENTERTAINMENT <span className="cine-gradient-text">NEWS</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Stay up to date with the latest happenings in Hollywood. Breaking news, production updates, casting announcements, and more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-white/60 mr-4">
            <Filter className="w-5 h-5" />
            <span>Filter by category:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#ff2d2d] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-white/50">
          Showing {filteredNews.length} {filteredNews.length === 1 ? 'article' : 'articles'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </div>

        {filteredNews.length > 0 && (
          <>
            {/* Featured News */}
            <div className="mb-12">
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
                      <span className="mx-2">•</span>
                      {featuredNews.readTime}
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

            {/* News Grid */}
            <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherNews.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/news/${article.id}`}
                  className={`group cine-card transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>

                    <h3 className="text-lg font-display text-white group-hover:text-[#ff2d2d] transition-colors line-clamp-2 mb-3">
                      {article.title}
                    </h3>

                    <p className="text-white/60 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No articles found for this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-[#ff2d2d] hover:underline"
            >
              View all news
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
