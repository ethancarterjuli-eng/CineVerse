import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Twitter, Facebook, Linkedin, Tag } from 'lucide-react';
import { getBlogPostById } from '../data/blog';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-white mb-4">Article Not Found</h1>
          <p className="text-white/60 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="cine-btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-24 left-6 lg:left-12 z-10">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
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
            <Link to="/blog" className="hover:text-[#ff2d2d] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{post.title}</span>
          </div>

          {/* Category */}
          <div className="inline-flex items-center gap-2 bg-[#ff2d2d] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider mb-6">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag, i) => (
              <span key={i} className="flex items-center gap-1 text-sm text-white/60 bg-white/5 px-3 py-1">
                <Tag className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-xl text-white/80 leading-relaxed mb-12 italic border-l-4 border-[#ff2d2d] pl-6">
            {post.excerpt}
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
          <div className="flex items-center gap-4 py-8 border-t border-b border-white/10">
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

          {/* Author Box */}
          <div className="bg-[#1a1a1a] p-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#ff2d2d] rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-display text-white mb-2">{post.author}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Film critic and cinema enthusiast with over a decade of experience reviewing movies 
                  across all genres. Passionate about discovering hidden gems and celebrating cinematic excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
