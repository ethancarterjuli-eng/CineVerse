import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { 
  Film, 
  Search, 
  Menu, 
  X
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import ReviewDetail from './pages/ReviewDetail';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import WriteReview from './pages/WriteReview';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import Upcoming from './pages/Upcoming';
import TopLists from './pages/TopLists';
import TopListDetail from './pages/TopListDetail';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Coming Soon', href: '/upcoming' },
    { name: 'Top Lists', href: '/top-lists' },
    { name: 'News', href: '/news' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 backdrop-blur-xl bg-black/90 shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#ff2d2d] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Film className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-display tracking-wider text-white">
            CINE<span className="text-[#ff2d2d]">VERSE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative group ${
                isActive(link.href) 
                  ? 'text-[#ff2d2d]' 
                  : 'text-white/80 hover:text-[#ff2d2d]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff2d2d] transition-all duration-300 ${
                isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-white/80 hover:text-[#ff2d2d] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link 
            to="/write-review"
            className="bg-[#ff2d2d] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[#ff6b6b] transition-colors duration-300"
          >
            Write Review
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive(link.href) ? 'text-[#ff2d2d]' : 'text-white/80 hover:text-[#ff2d2d]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/write-review"
              className="bg-[#ff2d2d] text-white px-6 py-3 text-center font-semibold uppercase tracking-wider mt-4"
            >
              Write Review
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Footer Component
function Footer() {
  const footerRef = useRef<HTMLElement>(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerLinks = {
    Movies: [
      { name: 'Now Playing', href: '/reviews' },
      { name: 'Coming Soon', href: '/upcoming' },
      { name: 'Top Lists', href: '/top-lists' },
      { name: 'Write a Review', href: '/write-review' },
    ],
    Reviews: [
      { name: 'Latest Reviews', href: '/reviews' },
      { name: "Critics' Picks", href: '/reviews' },
      { name: 'User Reviews', href: '/write-review' },
      { name: 'By Genre', href: '/reviews' },
    ],
    News: [
      { name: 'Hollywood News', href: '/news' },
      { name: 'Industry Updates', href: '/news' },
      { name: 'Awards', href: '/news' },
      { name: 'Interviews', href: '/blog' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/contact' },
      { name: 'Advertise', href: '/contact' },
    ],
    Support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Help Center', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'youtube', href: '#', label: 'YouTube' },
    { icon: 'facebook', href: '#', label: 'Facebook' },
  ];

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] pt-20 pb-8">
      {/* Animated Top Border */}
      <div className="h-1 w-full animate-border-flow bg-gradient-to-r from-transparent via-[#ff2d2d] to-transparent mb-16" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Logo & Tagline */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ff2d2d] rounded-full flex items-center justify-center">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-display tracking-wider text-white">
              CINE<span className="text-[#ff2d2d]">VERSE</span>
            </span>
          </Link>
          <p className="text-white/50 text-lg">
            Your cinematic journey starts here
          </p>
        </div>

        {/* Links Grid */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-display text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-white/50 hover:text-[#ff2d2d] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div 
          className={`flex justify-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:bg-[#ff2d2d] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              {social.icon === 'twitter' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              )}
              {social.icon === 'instagram' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              )}
              {social.icon === 'youtube' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )}
              {social.icon === 'facebook' && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div 
          className={`border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-white/40 text-sm">
            © 2026 CineVerse. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-[#ff2d2d] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-[#ff2d2d] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0f0f]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/top-lists" element={<TopLists />} />
          <Route path="/top-lists/:id" element={<TopListDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
