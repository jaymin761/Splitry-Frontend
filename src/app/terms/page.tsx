import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Splitry's Terms of Service to understand the rules and guidelines for using our app.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-primary-dark">Terms of Service</h1>
          <p className="text-secondary-gray mt-3">Last updated: May 24, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl border border-border-stroke shadow-sm p-10 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary-gray leading-relaxed">
              By accessing or using Splitry (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. These terms apply to all users, including registered users, groups, and visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Description of Service</h2>
            <p className="text-secondary-gray leading-relaxed">
              Splitry is a smart expense management platform that allows users to track, split, and settle shared expenses with friends, family, roommates, and groups. Features include automated receipt scanning, UPI payment integration, group management, and spending analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">3. User Accounts</h2>
            <ul className="space-y-3 text-secondary-gray">
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>You must be at least 13 years old to create an account.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>You are responsible for maintaining the confidentiality of your account credentials.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>You must provide accurate and truthful information when registering.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>You are responsible for all activity that occurs under your account.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Notify us immediately at <a href="mailto:support@splitry.com" className="text-primary-green hover:underline">support@splitry.com</a> if you suspect unauthorized access.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Acceptable Use</h2>
            <p className="text-secondary-gray leading-relaxed mb-4">You agree not to use the Service to:</p>
            <ul className="space-y-3 text-secondary-gray">
              <li className="flex gap-3"><span className="text-red-500 font-bold mt-1">✕</span><span>Engage in fraud, money laundering, or any illegal financial activity</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold mt-1">✕</span><span>Harass, threaten, or abuse other users</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold mt-1">✕</span><span>Submit false or misleading expense information</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold mt-1">✕</span><span>Attempt to reverse engineer or hack the application</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold mt-1">✕</span><span>Use automated bots or scrapers to access the Service</span></li>
              <li className="flex gap-3"><span className="text-red-500 font-bold mt-1">✕</span><span>Violate any applicable laws or regulations</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Payment & UPI Integration</h2>
            <p className="text-secondary-gray leading-relaxed">
              Splitry facilitates UPI payments for settling expenses. By using the payment feature, you agree that:
            </p>
            <ul className="space-y-3 text-secondary-gray mt-4">
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>All transactions are between users directly; Splitry is not a payment processor.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>Splitry is not responsible for failed, disputed, or unauthorized transactions.</span></li>
              <li className="flex gap-3"><span className="text-primary-green font-bold mt-1">•</span><span>You are solely responsible for verifying recipient UPI IDs before making payments.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Automated Features</h2>
            <p className="text-secondary-gray leading-relaxed">
              Our receipt scanner and spending prediction features are provided for convenience. While we strive for accuracy, automatically generated results may not always be correct. You are responsible for verifying all extracted data before confirming expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Intellectual Property</h2>
            <p className="text-secondary-gray leading-relaxed">
              All content, features, and functionality of the Splitry Service — including but not limited to software, design, logos, and text — are owned by Splitry Inc. and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-secondary-gray leading-relaxed">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. Splitry does not warrant that the Service will be uninterrupted, error-free, or completely secure. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Limitation of Liability</h2>
            <p className="text-secondary-gray leading-relaxed">
              To the maximum extent permitted by law, Splitry Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of or inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Termination</h2>
            <p className="text-secondary-gray leading-relaxed">
              We reserve the right to suspend or terminate your account at our discretion, with or without notice, if you violate these Terms. You may also delete your account at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">11. Changes to Terms</h2>
            <p className="text-secondary-gray leading-relaxed">
              We may update these Terms at any time. We will notify you of material changes via email or in-app notification at least 7 days before they take effect. Continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">12. Governing Law</h2>
            <p className="text-secondary-gray leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4">13. Contact Us</h2>
            <p className="text-secondary-gray leading-relaxed">
              For any questions about these Terms of Service, please contact us:
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
