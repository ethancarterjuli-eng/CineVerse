import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Filter, ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['All', 'Year in Review', 'Industry Analysis', 'Genre Spotlight', 'Acting'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            <span className="text-white">Blog</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4">
            CINEVERSE <span className="cine-gradient-text">BLOG</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Deep dives into cinema, industry analysis, and passionate discussions about the art of filmmaking.
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
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </div>

        {/* Blog Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`group cine-card transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-[#ff2d2d] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-display text-white mb-3 group-hover:text-[#ff2d2d] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs text-white/40 bg-white/5 px-2 py-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-[#ff2d2d] text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No articles found for this category.</p>
            <button 
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-[#ff2d2d] hover:underline"
            >
              View all articles
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
