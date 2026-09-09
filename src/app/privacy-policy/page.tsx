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
    <main className="min-h-screen bg-[#080A0F] text-white">
      {/* Header */}
      <div className="bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-6 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy & Data Security
            </h1>
          </div>
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Last updated: July 27, 2026 • Effective for all Splitry applications & web services
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-[#111522]/90 rounded-3xl border border-white/10 shadow-xl p-6 sm:p-12 space-y-12">

          {/* Trust Banner */}
          <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-start gap-4">
            <Lock className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Our Core Privacy Commitment</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                At Splitry, your trust is our highest priority. We do <strong>NOT</strong> sell your personal data to third parties or advertising networks. Every byte of financial and contact information you share is processed strictly to deliver transparent expense management, bill splitting, and group settlements.
              </p>
            </div>
          </div>

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center text-sm font-bold border border-white/10">1</span>
              Introduction
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Welcome to Splitry (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy outlines how Splitry collects, uses, stores, and protects your data when you use our mobile application (iOS & Android) and website services (collectively, the &quot;Service&quot;). By accessing or using Splitry, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center text-sm font-bold border border-white/10">2</span>
              Information We Collect & Device Permissions
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              To provide a seamless expense-sharing experience, we collect specific data points based on your interactions with the app:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Account Data */}
              <div className="p-5 bg-[#0B0E14] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span>Account & Identity Data</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Full name, email address, phone number, and profile image uploaded during registration or profile setup.
                </p>
              </div>

              {/* Financial & Expense Data */}
              <div className="p-5 bg-[#0B0E14] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Database className="w-5 h-5 text-emerald-400" />
                  <span>Financial & Expense Tracking</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Expense titles, monetary amounts, currency preferences, split shares, payment status, and settlement history.
                </p>
              </div>

              {/* Device Contacts */}
              <div className="p-5 bg-[#0B0E14] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <BookUser className="w-5 h-5 text-emerald-400" />
                  <span>Device Contacts (Optional)</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  With your explicit permission, we access your device address book solely to let you search and select friends to add to groups. We do <strong>not</strong> scrape or store your complete contact book on our servers.
                </p>
              </div>

              {/* Camera & Media Library */}
              <div className="p-5 bg-[#0B0E14] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Camera className="w-5 h-5 text-emerald-400" />
                  <span>Camera & Media Library</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Accessed with your permission to pick or crop receipt photos, profile avatars, group cover images, or chat attachment photos.
                </p>
              </div>

              {/* Group Chat & Real-Time Sync */}
              <div className="p-5 bg-[#0B0E14] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>Group Messages & Chat</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Text messages, attached images, and whiteboard drawing updates transmitted via secure WebSockets (`socket.io`) to update group members in real-time.
                </p>
              </div>

              {/* Push Notifications */}
              <div className="p-5 bg-[#0B0E14] border border-white/10 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Bell className="w-5 h-5 text-emerald-400" />
                  <span>Push Notification Tokens</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Firebase Cloud Messaging (FCM) push tokens used to send instant push alerts when new expenses, settlements, or group invites are created.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center text-sm font-bold border border-white/10">3</span>
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Expense Calculation & Balances:</strong> To accurately calculate who owes whom and simplify group balances.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Push Alerts & Reminders:</strong> To deliver real-time notifications about new expenses, bill reminders, and payment settlements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Contact Invitations:</strong> To allow you to launch native SMS or Email apps to invite friends locally from your device.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Group Collaboration:</strong> To sync chat messages, shared group whiteboards, and receipt uploads securely among group participants.</span>
              </li>
            </ul>
          </section>

          {/* 4. Account Deletion & Right to be Forgotten */}
          <section className="p-6 sm:p-8 bg-[#0B0E14] border border-emerald-500/30 rounded-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  4. Account Deletion & Data Erasure
                </h2>
                <p className="text-xs text-slate-400">Your right to permanently delete your account and personal data</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              We respect your right to control your personal data. You can request complete deletion of your account and personal information at any time:
            </p>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-[#111522] rounded-2xl border border-white/10 space-y-1">
                <h4 className="font-bold text-emerald-400">Method A: In-App Account Deletion</h4>
                <p className="text-xs text-slate-400">
                  Open the Splitry Mobile App → Go to <strong>Profile / Settings</strong> → Tap <strong>&quot;Deactivate / Delete Account&quot;</strong> → Confirm deletion.
                </p>
              </div>

              <div className="p-4 bg-[#111522] rounded-2xl border border-white/10 space-y-1">
                <h4 className="font-bold text-emerald-400">Method B: Direct Email Deletion Request</h4>
                <p className="text-xs text-slate-400">
                  Send an email to <a href="mailto:splitry@gmail.com" className="text-emerald-400 underline font-semibold">splitry@gmail.com</a> with the subject <em>&quot;Account Deletion Request&quot;</em> from your registered email address. We will process your request within 7 business days.
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/25 rounded-2xl text-xs text-amber-200 space-y-2">
              <h5 className="font-bold flex items-center gap-1.5 text-amber-300">
                <FileText className="w-4 h-4 text-amber-400" />
                What happens when you delete your account?
              </h5>
              <ul className="space-y-1 list-disc list-inside text-slate-300">
                <li>Your profile credentials, email, phone number, and push notification tokens are permanently removed from our active database.</li>
                <li>To prevent financial imbalance or group ledger corruption, existing group transaction amounts you created remain recorded in existing groups, but your personal identity is replaced with <em>&quot;Deleted User&quot;</em>.</li>
              </ul>
            </div>
          </section>

          {/* 5. Data Security & Storage Encryption */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center text-sm font-bold border border-white/10">5</span>
              Data Security & Storage Encryption
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We employ bank-grade security protocols to protect your information:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2 items-center"><span className="text-emerald-400 font-bold">✓</span><span><strong>Encryption in Transit:</strong> All communications between the app and server use HTTPS/TLS 1.3 encryption.</span></li>
              <li className="flex gap-2 items-center"><span className="text-emerald-400 font-bold">✓</span><span><strong>Encrypted QR Payloads:</strong> QR codes and deep links are encrypted using AES-256-CBC with secure IV verification.</span></li>
              <li className="flex gap-2 items-center"><span className="text-emerald-400 font-bold">✓</span><span><strong>Local Session Security:</strong> Authentication tokens are stored securely in local device storage (`GetStorage`) and sanitized on logout.</span></li>
            </ul>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center text-sm font-bold border border-white/10">6</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Splitry is intended solely for users aged 13 and older. We do not knowingly collect or solicit personal data from children under 13. If we discover that a child under 13 has registered, we will promptly delete their account and data.
            </p>
          </section>

          {/* 7. Contact Us */}
          <section className="p-6 bg-[#0B0E14] rounded-3xl border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Have Questions About Your Privacy?</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Our dedicated privacy team is available to assist you with data requests or questions.
              </p>
            </div>
            <a
              href="mailto:splitry@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-primary-green to-[#00F5A0] text-black font-extrabold text-sm rounded-2xl hover:scale-105 transition-all flex items-center gap-2 flex-shrink-0 shadow-[0_0_20px_rgba(3,166,113,0.3)]"
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
