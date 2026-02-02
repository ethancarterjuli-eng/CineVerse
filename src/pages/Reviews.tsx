import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ArrowRight, ChevronRight, Filter } from 'lucide-react';
import { movies } from '../data/movies';

export default function Reviews() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const selectedGenre = searchParams.get('genre') || 'All';
  
  const genres = ['All', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Romance', 'Thriller', 'Crime'];
  
  const filteredMovies = selectedGenre === 'All' 
    ? movies 
    : movies.filter(movie => movie.genre.toLowerCase() === selectedGenre.toLowerCase());

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

  const handleGenreChange = (genre: string) => {
    if (genre === 'All') {
      searchParams.delete('genre');
    } else {
      searchParams.set('genre', genre);
    }
    setSearchParams(searchParams);
  };

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
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Reviews</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-4">
            MOVIE <span className="cine-gradient-text">REVIEWS</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            In-depth analysis and expert critiques of the latest films. Find your next favorite movie with our comprehensive reviews.
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-white/60 mr-4">
            <Filter className="w-5 h-5" />
            <span>Filter by genre:</span>
          </div>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreChange(genre)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedGenre === genre
                  ? 'bg-[#ff2d2d] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-white/50">
          Showing {filteredMovies.length} {filteredMovies.length === 1 ? 'review' : 'reviews'}
          {selectedGenre !== 'All' && ` in ${selectedGenre}`}
        </div>

        {/* Reviews Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.map((movie, index) => (
            <Link
              key={movie.id}
              to={`/review/${movie.id}`}
              className={`group cine-card transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
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

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-semibold px-3 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#ff2d2d] text-[#ff2d2d]" />
                  {movie.rating}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(movie.rating)}
                  <span className="ml-2 text-white/60 text-sm">{movie.rating}/5</span>
                </div>

                <h3 className="text-xl font-display text-white mb-3 group-hover:text-[#ff2d2d] transition-colors duration-300">
                  {movie.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  {movie.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm">{movie.year}</span>
                  <span className="text-[#ff2d2d] text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Read Review
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No reviews found for this genre.</p>
            <button 
              onClick={() => handleGenreChange('All')}
              className="mt-4 text-[#ff2d2d] hover:underline"
            >
              View all reviews
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
