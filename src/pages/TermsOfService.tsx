import { Link } from 'react-router-dom';
import { ChevronRight, Scale, Users, MessageSquare, AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] pt-32 pb-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-white/50 mb-4">
            <Link to="/" className="hover:text-[#ff2d2d] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Terms of Service</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6">
            TERMS OF <span className="cine-gradient-text">SERVICE</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Last updated: February 3, 2026. Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Scale, title: "Fair Use", desc: "Use our content responsibly" },
            { icon: Users, title: "Community", desc: "Respect fellow movie lovers" },
            { icon: MessageSquare, title: "Reviews", desc: "Share honest opinions" },
            { icon: AlertTriangle, title: "Guidelines", desc: "Follow our content rules" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#1a1a1a] p-6 text-center border border-white/10">
                <Icon className="w-10 h-10 text-[#ff2d2d] mx-auto mb-4" />
                <h3 className="text-lg font-display text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Full Terms */}
        <div className="max-w-4xl">
          <div className="bg-[#1a1a1a] p-8 lg:p-12">
            <h2 className="text-3xl font-display text-white mb-8">Complete Terms of Service</h2>
            
            <div className="space-y-10">
              <section>
                <h3 className="text-xl font-display text-white mb-4">1. Acceptance of Terms</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  By accessing or using CineVerse, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                </p>
                <p className="text-white/60 leading-relaxed">
                  These terms apply to all visitors, users, and others who access or use our website.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">2. Use of Our Services</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  CineVerse grants you a personal, non-exclusive, non-transferable, limited license to use our services subject to these terms.
                </p>
                <p className="text-white/60 leading-relaxed">
                  You agree not to use our services for any illegal or unauthorized purpose. You must not violate any laws in your jurisdiction.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">3. User Accounts</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your password.
                </p>
                <p className="text-white/60 leading-relaxed">
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">4. Content and Reviews</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  Our services allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content").
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  You are responsible for the Content that you post on or through our services, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-white/60 leading-relaxed">
                  By posting Content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through our services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">5. Prohibited Content</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  You may not post content that:
                </p>
                <ul className="list-disc list-inside text-white/60 leading-relaxed space-y-2 ml-4">
                  <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, or invasive</li>
                  <li>Infringes on any patent, trademark, trade secret, copyright, or other proprietary rights</li>
                  <li>Contains software viruses or any other computer code designed to interrupt or limit functionality</li>
                  <li>Constitutes unsolicited or unauthorized advertising, promotional materials, or spam</li>
                  <li>Impersonates any person or entity, or falsely states or misrepresents your affiliation</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">6. Intellectual Property</h3>
                <p className="text-white/60 leading-relaxed">
                  The service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of CineVerse and its licensors. Our services are protected by copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">7. Termination</h3>
                <p className="text-white/60 leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the services will immediately cease.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">8. Limitation of Liability</h3>
                <p className="text-white/60 leading-relaxed">
                  In no event shall CineVerse, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">9. Disclaimer</h3>
                <p className="text-white/60 leading-relaxed">
                  Your use of the services is at your sole risk. The services are provided on an "AS IS" and "AS AVAILABLE" basis. The services are provided without warranties of any kind, whether express or implied.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">10. Governing Law</h3>
                <p className="text-white/60 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">11. Changes to Terms</h3>
                <p className="text-white/60 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">12. Contact Us</h3>
                <p className="text-white/60 leading-relaxed">
                  If you have any questions about these Terms, please contact us at legal@cineverse.com or through our <Link to="/contact" className="text-[#ff2d2d] hover:underline">Contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
