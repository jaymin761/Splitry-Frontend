import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowLeft, 
  Trash2, 
  Lock, 
  Users, 
  Bell, 
  Camera, 
  BookUser, 
  MessageSquare, 
  Database, 
  FileText,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Splitry",
  description: "Read Splitry's Privacy Policy to understand how we collect, use, protect, and handle your data and account deletion rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#28282C] tracking-tight">
              Privacy Policy & Data Security
            </h1>
          </div>
          <p className="text-[#98979F] text-sm sm:text-base font-medium">
            Last updated: July 27, 2026 • Effective for all Splitry applications & web services
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-[#E5E5E7] shadow-xl p-6 sm:p-12 space-y-12">

          {/* Trust Banner */}
          <div className="p-6 bg-[#03A671]/5 border border-[#03A671]/20 rounded-2xl flex items-start gap-4">
            <Lock className="w-6 h-6 text-[#03A671] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#28282C] text-lg mb-1">Our Core Privacy Commitment</h3>
              <p className="text-[#98979F] text-sm leading-relaxed">
                At Splitry, your trust is our highest priority. We do <strong>NOT</strong> sell your personal data to third parties or advertising networks. Every byte of financial and contact information you share is processed strictly to deliver transparent expense management, bill splitting, and group settlements.
              </p>
            </div>
          </div>

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">1</span>
              Introduction
            </h2>
            <p className="text-[#98979F] leading-relaxed">
              Welcome to Splitry (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy outlines how Splitry collects, uses, stores, and protects your data when you use our mobile application (iOS & Android) and website services (collectively, the &quot;Service&quot;). By accessing or using Splitry, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">2</span>
              Information We Collect & Device Permissions
            </h2>
            <p className="text-[#98979F] leading-relaxed mb-6">
              To provide a seamless expense-sharing experience, we collect specific data points based on your interactions with the app:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Account Data */}
              <div className="p-5 bg-[#FDFBF7] border border-[#E5E5E7] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#28282C] font-semibold">
                  <Users className="w-5 h-5 text-[#03A671]" />
                  <span>Account & Identity Data</span>
                </div>
                <p className="text-xs text-[#98979F] leading-relaxed">
                  Full name, email address, phone number, and profile image uploaded during registration or profile setup.
                </p>
              </div>

              {/* Financial & Expense Data */}
              <div className="p-5 bg-[#FDFBF7] border border-[#E5E5E7] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#28282C] font-semibold">
                  <Database className="w-5 h-5 text-[#03A671]" />
                  <span>Financial & Expense Tracking</span>
                </div>
                <p className="text-xs text-[#98979F] leading-relaxed">
                  Expense titles, monetary amounts, currency preferences, split shares, payment status, and settlement history.
                </p>
              </div>

              {/* Device Contacts */}
              <div className="p-5 bg-[#FDFBF7] border border-[#E5E5E7] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#28282C] font-semibold">
                  <BookUser className="w-5 h-5 text-[#03A671]" />
                  <span>Device Contacts (Optional)</span>
                </div>
                <p className="text-xs text-[#98979F] leading-relaxed">
                  With your explicit permission, we access your device address book solely to let you search and select friends to add to groups. We do <strong>not</strong> scrape or store your complete contact book on our servers.
                </p>
              </div>

              {/* Camera & Media Library */}
              <div className="p-5 bg-[#FDFBF7] border border-[#E5E5E7] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#28282C] font-semibold">
                  <Camera className="w-5 h-5 text-[#03A671]" />
                  <span>Camera & Media Library</span>
                </div>
                <p className="text-xs text-[#98979F] leading-relaxed">
                  Accessed with your permission to pick or crop receipt photos, profile avatars, group cover images, or chat attachment photos.
                </p>
              </div>

              {/* Group Chat & Real-Time Sync */}
              <div className="p-5 bg-[#FDFBF7] border border-[#E5E5E7] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#28282C] font-semibold">
                  <MessageSquare className="w-5 h-5 text-[#03A671]" />
                  <span>Group Messages & Chat</span>
                </div>
                <p className="text-xs text-[#98979F] leading-relaxed">
                  Text messages, attached images, and whiteboard drawing updates transmitted via secure WebSockets (`socket.io`) to update group members in real-time.
                </p>
              </div>

              {/* Push Notifications */}
              <div className="p-5 bg-[#FDFBF7] border border-[#E5E5E7] rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#28282C] font-semibold">
                  <Bell className="w-5 h-5 text-[#03A671]" />
                  <span>Push Notification Tokens</span>
                </div>
                <p className="text-xs text-[#98979F] leading-relaxed">
                  Firebase Cloud Messaging (FCM) push tokens used to send instant push alerts when new expenses, settlements, or group invites are created.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">3</span>
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-[#98979F] text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Expense Calculation & Balances:</strong> To accurately calculate who owes whom and simplify group balances.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Push Alerts & Reminders:</strong> To deliver real-time notifications about new expenses, bill reminders, and payment settlements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Contact Invitations:</strong> To allow you to launch native SMS or Email apps to invite friends locally from your device.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#03A671] font-bold">•</span>
                <span><strong>Group Collaboration:</strong> To sync chat messages, shared group whiteboards, and receipt uploads securely among group participants.</span>
              </li>
            </ul>
          </section>

          {/* 4. Account Deletion & Right to be Forgotten */}
          <section className="p-6 sm:p-8 bg-[#FDFBF7] border border-[#03A671]/30 rounded-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#28282C]">
                  4. Account Deletion & Data Erasure
                </h2>
                <p className="text-xs text-[#98979F]">Your right to permanently delete your account and personal data</p>
              </div>
            </div>

            <p className="text-sm text-[#98979F] leading-relaxed">
              We respect your right to control your personal data. You can request complete deletion of your account and personal information at any time:
            </p>

            <div className="space-y-4 text-sm text-[#28282C]">
              <div className="p-4 bg-white rounded-2xl border border-[#E5E5E7] space-y-1">
                <h4 className="font-bold text-[#03A671]">Method A: In-App Account Deletion</h4>
                <p className="text-xs text-[#98979F]">
                  Open the Splitry Mobile App → Go to <strong>Profile / Settings</strong> → Tap <strong>&quot;Deactivate / Delete Account&quot;</strong> → Confirm deletion.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E5E5E7] space-y-1">
                <h4 className="font-bold text-[#03A671]">Method B: Direct Email Deletion Request</h4>
                <p className="text-xs text-[#98979F]">
                  Send an email to <a href="mailto:splitry@gmail.com" className="text-[#03A671] underline font-semibold">splitry@gmail.com</a> with the subject <em>&quot;Account Deletion Request&quot;</em> from your registered email address. We will process your request within 7 business days.
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 space-y-2">
              <h5 className="font-bold flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-600" />
                What happens when you delete your account?
              </h5>
              <ul className="space-y-1 list-disc list-inside text-amber-900/80">
                <li>Your profile credentials, email, phone number, and push notification tokens are permanently removed from our active database.</li>
                <li>To prevent financial imbalance or group ledger corruption, existing group transaction amounts you created remain recorded in existing groups, but your personal identity is replaced with <em>&quot;Deleted User&quot;</em>.</li>
              </ul>
            </div>
          </section>

          {/* 5. Data Security & Storage Encryption */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">5</span>
              Data Security & Storage Encryption
            </h2>
            <p className="text-[#98979F] leading-relaxed">
              We employ bank-grade security protocols to protect your information:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#98979F]">
              <li className="flex gap-2 items-center"><span className="text-[#03A671] font-bold">✓</span><span><strong>Encryption in Transit:</strong> All communications between the app and server use HTTPS/TLS 1.3 encryption.</span></li>
              <li className="flex gap-2 items-center"><span className="text-[#03A671] font-bold">✓</span><span><strong>Encrypted QR Payloads:</strong> QR codes and deep links are encrypted using AES-256-CBC with secure IV verification.</span></li>
              <li className="flex gap-2 items-center"><span className="text-[#03A671] font-bold">✓</span><span><strong>Local Session Security:</strong> Authentication tokens are stored securely in local device storage (`GetStorage`) and sanitized on logout.</span></li>
            </ul>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-[#28282C] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#28282C] text-white flex items-center justify-center text-sm font-bold">6</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-[#98979F] leading-relaxed">
              Splitry is intended solely for users aged 13 and older. We do not knowingly collect or solicit personal data from children under 13. If we discover that a child under 13 has registered, we will promptly delete their account and data.
            </p>
          </section>

          {/* 7. Contact Us */}
          <section className="p-6 bg-[#FDFBF7] rounded-3xl border border-[#E5E5E7] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#28282C] mb-1">Have Questions About Your Privacy?</h3>
              <p className="text-xs sm:text-sm text-[#98979F]">
                Our dedicated privacy team is available to assist you with data requests or questions.
              </p>
            </div>
            <a
              href="mailto:splitry@gmail.com"
              className="px-6 py-3 bg-[#03A671] text-white font-semibold text-sm rounded-2xl hover:bg-[#028f61] transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-[#03A671]/20"
            >
              <Mail className="w-4 h-4" />
              Contact Privacy Team
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
