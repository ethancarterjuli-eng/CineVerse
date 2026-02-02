import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, HelpCircle, MessageCircle, Star, Film } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      questions: [
        {
          q: "What is CineVerse?",
          a: "CineVerse is your ultimate destination for movie reviews, entertainment news, and cinema-related content. We provide in-depth reviews, breaking news, and thoughtful analysis of the film industry."
        },
        {
          q: "Is CineVerse free to use?",
          a: "Yes! All content on CineVerse is completely free. You can read reviews, browse news, and explore our blog without any subscription or payment."
        },
        {
          q: "How often is content updated?",
          a: "We update our content daily. New reviews are published as movies are released, and our news section is constantly updated with the latest from Hollywood."
        }
      ]
    },
    {
      category: "Reviews",
      icon: Star,
      questions: [
        {
          q: "How do you rate movies?",
          a: "Our critics rate movies on a 5-star scale based on various factors including storytelling, acting, direction, cinematography, and overall entertainment value. We also consider cultural impact and innovation."
        },
        {
          q: "Can I submit my own review?",
          a: "Absolutely! We encourage our community to share their opinions. Visit our Write a Review page to submit your own movie reviews. All submissions are moderated before publication."
        },
        {
          q: "Do you review TV shows?",
          a: "Currently, we focus primarily on movies. However, we occasionally cover limited series and TV movies that have significant cinematic value."
        },
        {
          q: "How do I find reviews for a specific movie?",
          a: "You can use our search function or browse by genre. All reviews are also organized alphabetically and by release date for easy navigation."
        }
      ]
    },
    {
      category: "Account & Subscriptions",
      icon: Film,
      questions: [
        {
          q: "Do I need an account to use CineVerse?",
          a: "No, you can browse all our content without an account. However, creating an account allows you to save favorites, comment on articles, and submit your own reviews."
        },
        {
          q: "How do I subscribe to the newsletter?",
          a: "Simply enter your email address in the newsletter signup form at the bottom of any page or on our homepage. You can unsubscribe at any time."
        },
        {
          q: "What do I get with a newsletter subscription?",
          a: "Newsletter subscribers receive weekly updates with our latest reviews, breaking news, exclusive content, and early access to special features."
        }
      ]
    },
    {
      category: "Community",
      icon: MessageCircle,
      questions: [
        {
          q: "Can I comment on reviews and articles?",
          a: "Yes! Registered users can comment on any article or review. We encourage respectful discussion and diverse opinions."
        },
        {
          q: "What are your community guidelines?",
          a: "We ask all users to be respectful, avoid spoilers without warning, and keep discussions civil. Hate speech, harassment, and spam are not tolerated."
        },
        {
          q: "How can I report inappropriate content?",
          a: "If you see content that violates our guidelines, please use the report button or contact us directly through our Contact page."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">FAQ</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6">
            FREQUENTLY ASKED <span className="cine-gradient-text">QUESTIONS</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Find answers to common questions about CineVerse, our reviews, and how to make the most of our platform.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl">
          {faqs.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div key={catIndex} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#ff2d2d]" />
                  </div>
                  <h2 className="text-2xl font-display text-white">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = catIndex * 10 + qIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div 
                        key={qIndex}
                        className="bg-[#1a1a1a] border border-white/10 overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-white font-medium pr-4">{faq.q}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-[#ff2d2d] flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-white/60 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mt-16">
          <div className="bg-gradient-to-r from-[#ff2d2d]/20 to-transparent p-8 lg:p-12 border border-[#ff2d2d]/30">
            <h2 className="text-2xl font-display text-white mb-4">Still have questions?</h2>
            <p className="text-white/60 mb-6">
              Can't find the answer you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <Link to="/contact" className="cine-btn-primary inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
