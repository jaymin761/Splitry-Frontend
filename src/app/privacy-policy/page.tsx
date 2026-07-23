import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Splitry's Privacy Policy to understand how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background-soft">
      {/* Header */}
      <div className="bg-white border-b border-border-stroke">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary-green font-semibold mb-6 hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-primary-dark">Privacy Policy</h1>
          <p className="text-secondary-gray mt-3">Last updated: May 24, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl border border-border-stroke shadow-sm p-10 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Introduction</h2>
            <p className="text-secondary-gray leading-relaxed">
              Welcome to Splitry (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &quot;Service&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Information We Collect</h2>
            <p className="text-secondary-gray leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="space-y-3 text-secondary-gray">
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Account Information:</strong> Name, email address, phone number, and profile photo when you register.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Financial Data:</strong> Expense amounts, transaction descriptions, group splits, and payment history within the app.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Device Information:</strong> Device type, operating system, and app version for technical support.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Usage Data:</strong> How you interact with the app, features used, and session duration.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Camera / Photos:</strong> Only when you use the receipt scanner feature, and only with your explicit permission.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">3. How We Use Your Information</h2>
            <ul className="space-y-3 text-secondary-gray">
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>To provide and maintain the Splitry Service</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>To process expense splits and settlement calculations</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>To send reminders and notifications about balances</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>To improve our receipt scanning accuracy</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>To provide customer support and respond to inquiries</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>To analyze usage patterns and improve the app experience</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Sharing Your Information</h2>
            <p className="text-secondary-gray leading-relaxed mb-4">We do <strong className="text-primary-dark">not</strong> sell your personal data. We may share your information only in these limited cases:</p>
            <ul className="space-y-3 text-secondary-gray">
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">With Group Members:</strong> Expense data is shared with the people in your groups.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Service Providers:</strong> Trusted third-party vendors who help us operate the Service (e.g., cloud hosting, analytics).</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span><strong className="text-primary-dark">Legal Requirements:</strong> If required by law or to protect our rights.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Data Security</h2>
            <p className="text-secondary-gray leading-relaxed">
              We implement industry-standard security measures including encryption in transit (TLS/HTTPS), encrypted storage, and regular security audits. However, no method of transmission over the internet is 100% secure. We strive to protect your information but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Data Retention</h2>
            <p className="text-secondary-gray leading-relaxed">
              We retain your personal data for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data at any time by contacting us at <a href="mailto:hello@splitry.com" className="text-primary-green hover:underline">hello@splitry.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Your Rights</h2>
            <p className="text-secondary-gray leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="space-y-3 text-secondary-gray">
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Right to access your personal data</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Right to correct inaccurate data</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Right to request deletion of your data</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Right to opt-out of marketing communications</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Right to data portability</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-secondary-gray leading-relaxed">
              Splitry is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child has provided us personal information, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Changes to This Policy</h2>
            <p className="text-secondary-gray leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page and, where appropriate, via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Contact Us</h2>
            <p className="text-secondary-gray leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-6 bg-background-soft rounded-2xl border border-border-stroke">
              <p className="text-primary-dark font-semibold">Splitry Inc.</p>
              <p className="text-secondary-gray">Email: <a href="mailto:hello@splitry.com" className="text-primary-green hover:underline">hello@splitry.com</a></p>
              <p className="text-secondary-gray">Website: <a href="https://splitry.com" className="text-primary-green hover:underline">https://splitry.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
