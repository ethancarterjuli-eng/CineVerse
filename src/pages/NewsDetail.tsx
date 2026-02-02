import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Twitter, Facebook, Linkedin } from 'lucide-react';
import { getNewsById } from '../data/news';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getNewsById(id) : undefined;

  if (!article) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Article Not Found</h1>
          <p className="text-white/60 mb-8">The news article you're looking for doesn't exist.</p>
          <Link to="/news" className="cine-btn-primary">
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = article.content.split('\n\n');

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-24 left-6 lg:left-12 z-10">
          <Link 
            to="/news" 
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 mb-8">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/news" className="hover:text-[#ff2d2d] transition-colors">News</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{article.title}</span>
          </div>

          {/* Category */}
          <div className="inline-flex items-center gap-2 bg-[#ff2d2d] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider mb-6">
            {article.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-6">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 mb-12 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {article.readTime}
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-white/80 leading-relaxed mb-12 italic border-l-4 border-[#ff2d2d] pl-6">
            {article.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            {paragraphs.map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h2 key={index} className="text-2xl font-display text-white mt-12 mb-6">
                    {paragraph.replace(/\*\*/g, '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-white/70 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 py-8 border-t border-white/10">
            <span className="text-white/60">Share this article:</span>
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
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-display text-white mb-8">More News</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2].map((i) => {
                const relatedArticle = article.id === newsArticles[0].id 
                  ? newsArticles[i] 
                  : newsArticles[i - 1];
                if (!relatedArticle || relatedArticle.id === article.id) return null;
                
                return (
                  <Link
                    key={relatedArticle.id}
                    to={`/news/${relatedArticle.id}`}
                    className="group flex gap-4"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <span className="text-[#ff2d2d] text-xs font-semibold uppercase tracking-wider">
                        {relatedArticle.category}
                      </span>
                      <h4 className="text-white font-display group-hover:text-[#ff2d2d] transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <span className="text-white/50 text-sm">{relatedArticle.date}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { newsArticles } from '../data/news';
