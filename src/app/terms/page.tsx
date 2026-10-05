import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  AlertTriangle, 
  Scale, 
  Ban, 
  Mail,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Splitry",
  description: "Read Splitry's Terms of Service to understand the rules, user guidelines, Splitry Premium subscriptions, non-banking disclaimers, and legal policies governing our apps and platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#28282C]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E5E7]">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#03A671] font-semibold mb-6 hover:text-[#028f61] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-[#03A671]/10 text-[#03A671] rounded-2xl">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#28282C] tracking-tight">
              Terms of Service
            </h1>
          </div>
          <p className="text-[#98979F] text-sm sm:text-base font-medium">
            Last updated: October 5, 2026 • Effective for all Splitry applications & web services
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-[#E5E5E7] shadow-xl p-6 sm:p-12 space-y-12">

          {/* Key Notice Banner */}
          <div className="p-6 bg-[#03A671]/5 border border-[#03A671]/20 rounded-2xl flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#03A671] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#28282C] text-lg mb-1">Important User Agreement Notice</h3>
              <p className="text-[#98979F] text-sm leading-relaxed">
                By downloading, registering, or using the Splitry mobile applications (iOS & Android) or website, you agree to these Terms of Service. Please read them carefully. Splitry provides calculation and group tracking tools to simplify expense sharing among friends, roommates, and family.
              </p>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">1</span>
              Acceptance of Terms
            </h2>
            <p className="text-[#98979F] leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Splitry Inc. (&quot;Splitry&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms apply to all visitors, registered account holders, and group members who access or use our mobile applications, web portals, and API services (collectively, the &quot;Service&quot;).
            </p>
          </section>

          {/* 2. Service Scope & Non-Banking Disclaimer */}
          <section className="p-6 bg-[#FDFBF7] border border-[#03A671]/30 rounded-3xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#03A671]/10 text-[#03A671] rounded-xl">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#28282C]">
                2. Service Scope & Non-Banking Disclaimer
              </h2>
            </div>
            <p className="text-sm text-[#98979F] leading-relaxed">
              Splitry is an expense tracking, bill splitting, and group balance calculation platform. <strong>Splitry is NOT a bank, licensed money transmitter, depository institution, or financial payment processor.</strong>
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#28282C]">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-[#03A671] flex-shrink-0 mt-0.5" />
                <span>No monetary funds or user deposits are held, transmitted, or processed on Splitry servers.</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-[#03A671] flex-shrink-0 mt-0.5" />
                <span>When users record a payment or &quot;Settle Up&quot;, they are manually logging external transactions completed via cash, UPI, bank transfer, or third-party payment applications.</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="w-4 h-4 text-[#03A671] flex-shrink-0 mt-0.5" />
                <span>Splitry is not responsible for resolving financial disputes, unverified offline transactions, or failed third-party money transfers.</span>
              </li>
            </ul>
          </section>

          {/* 3. User Registration & Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">3</span>
              User Registration & Account Responsibilities
            </h2>
            <ul className="space-y-3 text-[#98979F] text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Age Requirement:</strong> You must be at least 13 years old to create an account or use the Service.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Account Security:</strong> You are responsible for safeguarding your login credentials and authenticating access to your registered device.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Truthful Information:</strong> You must provide accurate identity information (name, phone number, email) during account creation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Unauthorized Access:</strong> Notify us immediately at <a href="mailto:splitry@gmail.com" className="text-[#03A671] underline font-semibold">splitry@gmail.com</a> if you suspect unauthorized activity on your account.</span>
              </li>
            </ul>
          </section>

          {/* 4. Free Plan & Splitry Premium */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">4</span>
              Free Plan & Splitry Premium
            </h2>
            <p className="text-[#98979F] leading-relaxed text-sm mb-4">
              Splitry is free to download. The free plan has limits, shown in the app, on features such as the number of expenses you can add. We may change these limits. Splitry Premium is an optional paid subscription that removes those limits and unlocks extra features, shown in the app at the time you subscribe.
            </p>
            <ul className="space-y-3 text-[#98979F] text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Plans & Prices:</strong> The plans on offer and the price for your country are shown in the app before you buy.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Free Trial:</strong> Where a plan includes a free trial, it is shown before you subscribe. If you do not cancel at least 24 hours before the trial ends, the subscription starts and you are charged. A free trial is available once per customer.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Payment:</strong> Purchases are made through your Apple App Store or Google Play account. We do not receive or store your card details.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Automatic Renewal:</strong> A subscription renews for the same period at the current price unless you cancel at least 24 hours before the period ends.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Cancelling:</strong> Cancel in your App Store or Google Play subscription settings. Deleting the app or your Splitry account does not cancel a subscription. After cancelling, Premium stays active until the end of the period already paid for.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Refunds:</strong> Payments are handled by Apple or Google and their refund policies apply, so request a refund from them. Nothing in these Terms limits refund rights you have by law.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Restoring:</strong> You can restore an active subscription on a new device from the Premium screen while signed in to the same store account.</span>
              </li>
            </ul>
          </section>

          {/* 5. Acceptable Use & Conduct Guidelines */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">5</span>
              Acceptable Use & Group Conduct
            </h2>
            <p className="text-[#98979F] text-sm mb-4">
              To maintain a safe and respectful community, you agree strictly NOT to engage in any of the following prohibited activities:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-[#28282C]">
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Submit fraudulent, fictitious, or inflated expense claims.</span>
              </div>
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Use group chats or whiteboards to post abusive, obscene, or hateful material.</span>
              </div>
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Engage in illegal financial activities or deceptive billing schemes.</span>
              </div>
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-2.5">
                <Ban className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Attempt to reverse engineer, scrape, or bypass secure API encryption (`AES-256`).</span>
              </div>
            </div>
          </section>

          {/* 6. QR Codes, Invites & Deep Links */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">6</span>
              QR Codes, Invites & Deep Link Usage
            </h2>
            <p className="text-[#98979F] leading-relaxed text-sm">
              Splitry generates encrypted QR codes and deep links (`splitry://` and `https://splitry.com/join/...`) to allow users to add friends and join groups conveniently. You are responsible for sharing invite links only with intended recipients. Splitry is not liable for unauthorized group access resulting from publicly broadcasted invitation links.
            </p>
          </section>

          {/* 7. Receipt Scanner & Automated OCR Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">7</span>
              Automated Receipt Scanning & Analytics
            </h2>
            <p className="text-[#98979F] leading-relaxed text-sm">
              Automated features such as receipt image scanning, OCR extraction, spending insights, and bill reminders are provided for convenience. While we aim for maximum extraction accuracy, automated OCR results may contain discrepancies. Users are required to verify all extracted expense details before publishing expenses to group ledgers.
            </p>
          </section>

          {/* 8. Limitation of Liability & Disclaimers */}
          <section className="p-6 bg-amber-50 border border-amber-200 rounded-3xl space-y-3 text-amber-900">
            <div className="flex items-center gap-2 font-bold text-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>8. Disclaimer of Warranties & Limitation of Liability</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SPLITRY INC. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED. SPLITRY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE, UNSETTLED GROUP DEBTS, OR SERVICE INTERRUPTIONS.
            </p>
          </section>

          {/* 9. Termination & Account Deactivation */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">9</span>
              Account Termination & Deactivation
            </h2>
            <p className="text-[#98979F] leading-relaxed text-sm">
              We reserve the right to suspend or terminate your access to the Service at our discretion if you violate these Terms or engage in fraudulent activities. You may deactivate your account at any time within app settings or by contacting <a href="mailto:splitry@gmail.com" className="text-[#03A671] underline font-semibold">splitry@gmail.com</a>. As outlined in our Privacy Policy, historical expense totals remain recorded under an anonymized identity to protect remaining group members.
            </p>
          </section>

          {/* 10. Privacy & Ad Measurement */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">10</span>
              Privacy & Ad Measurement
            </h2>
            <p className="text-[#98979F] leading-relaxed text-sm">
              Our <Link href="/privacy-policy" className="text-[#03A671] underline font-semibold">Privacy Policy</Link> explains what data we collect and how we use and share it. It is part of these Terms. Splitry advertises on Facebook and Instagram, and the app asks whether you allow us to measure those ads with Meta. Ad measurement is optional and off unless you allow it, you can change your choice at any time in the app under Profile → Preferences → Ad measurement, and Splitry works the same either way.
            </p>
          </section>

          {/* 11. Governing Law & Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">11</span>
              Governing Law & Jurisdiction
            </h2>
            <p className="text-[#98979F] leading-relaxed text-sm">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the courts located in India.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="p-6 bg-[#FDFBF7] rounded-3xl border border-[#E5E5E7] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#28282C] mb-1">Questions About Our Terms?</h3>
              <p className="text-xs sm:text-sm text-[#98979F]">
                Our legal and support team is ready to answer any questions regarding our terms and policies.
              </p>
            </div>
            <a
              href="mailto:splitry@gmail.com"
              className="px-6 py-3 bg-[#03A671] text-white font-semibold text-sm rounded-2xl hover:bg-[#028f61] transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-[#03A671]/20"
            >
              <Mail className="w-4 h-4" />
              Contact Legal Team
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
