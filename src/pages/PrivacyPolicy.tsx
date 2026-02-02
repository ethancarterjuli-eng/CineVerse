import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: `We collect information you provide directly to us, including:
      • Name and email address when you subscribe to our newsletter
      • Information you provide when submitting reviews or contacting us
      • Usage data and analytics about how you interact with our website
      • Device information and IP addresses for security purposes`
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: `We use the information we collect to:
      • Provide and maintain our services
      • Send you newsletters and updates you've subscribed to
      • Respond to your comments and questions
      • Improve our website and user experience
      • Protect against fraud and unauthorized access`
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share information with:
      • Service providers who assist in operating our website
      • Legal authorities when required by law
      • Business partners with your explicit consent`
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: `You have the right to:
      • Access the personal information we hold about you
      • Request correction of inaccurate information
      • Request deletion of your personal information
      • Opt-out of marketing communications
      • Withdraw consent at any time`
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
            <span className="text-white">Privacy Policy</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6">
            PRIVACY <span className="cine-gradient-text">POLICY</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Last updated: February 3, 2026. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-[#1a1a1a] p-8 border border-white/10 hover:border-[#ff2d2d]/50 transition-colors">
                <div className="w-14 h-14 bg-[#ff2d2d]/20 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#ff2d2d]" />
                </div>
                <h2 className="text-2xl font-display text-white mb-4">{section.title}</h2>
                <p className="text-white/60 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Policy */}
        <div className="max-w-4xl">
          <div className="bg-[#1a1a1a] p-8 lg:p-12 mb-8">
            <h2 className="text-3xl font-display text-white mb-8">Detailed Privacy Policy</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-display text-white mb-4">1. Introduction</h3>
                <p className="text-white/60 leading-relaxed">
                  CineVerse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">2. Cookies and Tracking</h3>
                <p className="text-white/60 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">3. Data Security</h3>
                <p className="text-white/60 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">4. Third-Party Links</h3>
                <p className="text-white/60 leading-relaxed">
                  Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">5. Children's Privacy</h3>
                <p className="text-white/60 leading-relaxed">
                  Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">6. Changes to This Policy</h3>
                <p className="text-white/60 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-display text-white mb-4">7. Contact Us</h3>
                <p className="text-white/60 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@cineverse.com or through our <Link to="/contact" className="text-[#ff2d2d] hover:underline">Contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
