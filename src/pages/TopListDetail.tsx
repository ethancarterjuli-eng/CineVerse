import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Trophy, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { getTopListById } from '../data/toplists';

export default function TopListDetail() {
  const { id } = useParams<{ id: string }>();
  const list = id ? getTopListById(id) : undefined;

  if (!list) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">List Not Found</h1>
          <p className="text-white/60 mb-8">The top list you're looking for doesn't exist.</p>
          <Link to="/top-lists" className="cine-btn-primary">
            Back to Top Lists
          </Link>
        </div>
      </main>
    );
  }

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
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src={list.image} 
          alt={list.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-white/50 mb-4">
              <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/top-lists" className="hover:text-[#ff2d2d] transition-colors">Top Lists</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{list.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-[#ff2d2d]" />
              <span className="text-[#ff2d2d] font-semibold uppercase tracking-wider">Top 10 List</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white mb-4">
              {list.title}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              {list.description}
            </p>
          </div>
        </div>
      </div>

      {/* Ranking */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {list.movies.map((movie) => (
              <div 
                key={movie.rank}
                className="bg-[#1a1a1a] border border-white/10 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 hover:border-[#ff2d2d]/30 transition-colors"
              >
                {/* Rank */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 flex items-center justify-center text-3xl font-display ${
                    movie.rank === 1 ? 'bg-[#ff2d2d] text-white' :
                    movie.rank === 2 ? 'bg-white/20 text-white' :
                    movie.rank === 3 ? 'bg-[#cd7f32] text-white' :
                    'bg-white/5 text-white/60'
                  }`}>
                    #{movie.rank}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-display text-white mb-2">
                    {movie.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-white/50">{movie.year}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(movie.rating)}
                      <span className="ml-2 text-white/60 text-sm">{movie.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm lg:text-base">
                    {movie.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 flex items-center justify-between py-8 border-t border-white/10">
            <span className="text-white/60">Share this list:</span>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-white/5 hover:bg-[#ff2d2d] flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* More Lists */}
          <div className="mt-12">
            <h2 className="text-2xl font-display text-white mb-6">More Top Lists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Show 2 other lists */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
