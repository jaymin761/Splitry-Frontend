import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader, SiteShell } from "@/components/layout/SiteShell";
import { 
  Trash2, 
  Lock, 
  Users, 
  Bell, 
  Camera, 
  BookUser, 
  MessageSquare, 
  Database, 
  FileText,
  Mail,
  CreditCard,
  Activity,
  Target
} from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Splitry Privacy Policy: what data we collect, how we use and protect it, optional ad measurement with Meta, and your account deletion rights.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy-policy" }])} />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy &amp; Data Security"
        meta="Last updated: October 5, 2026 • Effective for all Splitry applications &amp; web services"
      />

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-border-stroke shadow-card p-6 sm:p-12 space-y-12">

          {/* Trust Banner */}
          <div className="p-6 bg-primary-green/5 border border-primary-green/20 rounded-2xl flex items-start gap-4">
            <Lock className="w-6 h-6 text-primary-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-primary-dark text-lg mb-1">Our Core Privacy Commitment</h3>
              <p className="text-body text-sm leading-relaxed">
                At Splitry, your trust is our highest priority. We do <strong>NOT</strong> sell your personal data to third parties or advertising networks. Every byte of financial and contact information you share is processed strictly to deliver transparent expense management, bill splitting, and group settlements. We share limited app activity with Meta to measure our ads <strong>only if you allow ad measurement</strong> in the app, and your expenses, groups, balances, and contacts are never part of that.
              </p>
            </div>
          </div>

          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">1</span>
              Introduction
            </h2>
            <p className="text-body leading-relaxed">
              Welcome to Splitry (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy outlines how Splitry collects, uses, stores, and protects your data when you use our mobile application (iOS & Android) and website services (collectively, the &quot;Service&quot;). By accessing or using Splitry, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">2</span>
              Information We Collect & Device Permissions
            </h2>
            <p className="text-body leading-relaxed mb-6">
              To provide a seamless expense-sharing experience, we collect specific data points based on your interactions with the app:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Account Data */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Users className="w-5 h-5 text-primary-green" />
                  <span>Account & Identity Data</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Full name, email address, phone number, and profile image uploaded during registration or profile setup.
                </p>
              </div>

              {/* Financial & Expense Data */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Database className="w-5 h-5 text-primary-green" />
                  <span>Financial & Expense Tracking</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Expense titles, monetary amounts, currency preferences, split shares, payment status, and settlement history.
                </p>
              </div>

              {/* Device Contacts */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <BookUser className="w-5 h-5 text-primary-green" />
                  <span>Device Contacts (Optional)</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  With your explicit permission, we access your device address book solely to let you search and select friends to add to groups. We do <strong>not</strong> scrape or store your complete contact book on our servers.
                </p>
              </div>

              {/* Camera & Media Library */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Camera className="w-5 h-5 text-primary-green" />
                  <span>Camera & Media Library</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Accessed with your permission to pick or crop receipt photos, profile avatars, group cover images, or chat attachment photos.
                </p>
              </div>

              {/* Group Chat & Real-Time Sync */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <MessageSquare className="w-5 h-5 text-primary-green" />
                  <span>Group Messages & Chat</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Text messages, attached images, and whiteboard drawing updates transmitted via secure WebSockets (`socket.io`) to update group members in real-time.
                </p>
              </div>

              {/* Push Notifications */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Bell className="w-5 h-5 text-primary-green" />
                  <span>Push Notification Tokens</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Firebase Cloud Messaging (FCM) push tokens used to send instant push alerts when new expenses, settlements, or group invites are created.
                </p>
              </div>

              {/* Subscriptions & Purchases */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <CreditCard className="w-5 h-5 text-primary-green" />
                  <span>Subscriptions & Purchases</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Splitry Premium plan, trial and subscription status, renewal and expiry dates, and store transaction identifiers. Payments are made through the App Store or Google Play, so we never receive your card or bank details.
                </p>
              </div>

              {/* App Usage & Device Data */}
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Activity className="w-5 h-5 text-primary-green" />
                  <span>App Usage & Device Data</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Actions you take in the app, crash logs, app version, device model, operating system, and IP address. Your device advertising ID is used only if you allow ad measurement (see section 4).
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">3</span>
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-body text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Expense Calculation & Balances:</strong> To accurately calculate who owes whom and simplify group balances.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Push Alerts & Reminders:</strong> To deliver real-time notifications about new expenses, bill reminders, and payment settlements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Contact Invitations:</strong> To allow you to launch native SMS or Email apps to invite friends locally from your device.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Group Collaboration:</strong> To sync chat messages, shared group whiteboards, and receipt uploads securely among group participants.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Splitry Premium:</strong> To check your subscription status and unlock paid features.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>App Stability & Improvement:</strong> To fix crashes, prevent abuse, and understand how the app is used so we can improve it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Ad Measurement (Optional):</strong> To learn which of our Facebook and Instagram ads lead to installs and sign-ups, only if you allow it (see section 4).</span>
              </li>
            </ul>
          </section>

          {/* 4. Ad Measurement with Meta */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">4</span>
              Ad Measurement with Meta (Optional)
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Splitry advertises on Facebook and Instagram. In the app we ask whether you allow us to measure those ads. It is off unless you choose <strong>&quot;Allow&quot;</strong>, and Splitry works exactly the same either way.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Target className="w-5 h-5 text-primary-green" />
                  <span>What we send to Meta if you allow it</span>
                </div>
                <ul className="space-y-1 text-xs text-body leading-relaxed list-disc list-inside">
                  <li>That the app was installed and opened on your device.</li>
                  <li>That an account was created, and whether it was verified by email or phone.</li>
                  <li>That you finished the introduction, created your first group, or added your first expense. Only the fact is sent, never the content or the amount.</li>
                  <li>Your device advertising ID (on iPhone only if you also allow tracking in Apple&apos;s prompt), an app identifier created by Meta&apos;s software, your IP address, and basic device information such as model, operating system, language, time zone, and app version.</li>
                  <li>If you start a free trial or a subscription, our subscription provider RevenueCat tells Meta that this happened, with the price and currency.</li>
                </ul>
              </div>

              <div className="p-5 bg-background-soft border border-border-stroke rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <Lock className="w-5 h-5 text-primary-green" />
                  <span>What we never send to Meta</span>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Your name, email address, phone number, contacts, groups, expenses, amounts, balances, messages, or receipts.
                </p>
              </div>
            </div>

            <p className="text-body leading-relaxed mt-6">
              Meta uses this data to show us which ads led to installs and sign-ups and to improve how our ads are delivered. Meta handles it under its own <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary-green underline font-semibold">privacy policy</a>.
            </p>
            <p className="text-body leading-relaxed mt-4">
              You can change your choice at any time in the app under <strong>Profile → Preferences → Ad measurement</strong>. On iPhone you can also use <strong>Settings → Privacy & Security → Tracking</strong>. On Android you can reset or delete your advertising ID under <strong>Settings → Privacy → Ads</strong>. If you say no, Meta&apos;s software is not started and nothing is sent.
            </p>
          </section>

          {/* 5. Who We Share Data With */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">5</span>
              Who We Share Data With
            </h2>
            <p className="text-body leading-relaxed mb-4">
              We do not sell your personal data. We share it only as follows:
            </p>
            <ul className="space-y-3 text-body text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Other Splitry Users:</strong> Your name and profile photo, and the expenses, settlements, messages, and pictures you add to a group or share with a friend, so shared expenses work.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Google Firebase:</strong> Push tokens, app usage data, and crash and diagnostic data, for notifications, analytics, and crash reporting.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>RevenueCat:</strong> Your account ID, name, email address, phone number, app version, and purchase information, to manage subscriptions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Apple & Google:</strong> Purchase details, because subscriptions are bought through the App Store or Google Play under their own terms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Meta Platforms:</strong> The data listed in section 4, only if you allow ad measurement.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Google Analytics:</strong> Website visit data, such as pages viewed and browser type, to understand traffic to splitry.com.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary-green font-bold">•</span>
                <span><strong>Authorities & Legal Advisers:</strong> Only what the law requires, or what is needed to protect our rights.</span>
              </li>
            </ul>
          </section>

          {/* 6. Account Deletion & Right to be Forgotten */}
          <section className="p-6 sm:p-8 bg-background-soft border border-primary-green/30 rounded-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary-dark">
                  6. Account Deletion & Data Erasure
                </h2>
                <p className="text-xs text-body">Your right to permanently delete your account and personal data</p>
              </div>
            </div>

            <p className="text-sm text-body leading-relaxed">
              We respect your right to control your personal data. You can request complete deletion of your account and personal information at any time:
            </p>

            <div className="space-y-4 text-sm text-primary-dark">
              <div className="p-4 bg-white rounded-2xl border border-border-stroke space-y-1">
                <h4 className="font-bold text-primary-green">Method A: In-App Account Deletion</h4>
                <p className="text-xs text-body">
                  Open the Splitry Mobile App → Go to <strong>Profile / Settings</strong> → Tap <strong>&quot;Deactivate / Delete Account&quot;</strong> → Confirm deletion.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-border-stroke space-y-1">
                <h4 className="font-bold text-primary-green">Method B: Direct Email Deletion Request</h4>
                <p className="text-xs text-body">
                  Send an email to <a href="mailto:splitry@gmail.com" className="text-primary-green underline font-semibold">splitry@gmail.com</a> with the subject <em>&quot;Account Deletion Request&quot;</em> from your registered email address. We will process your request within 7 business days.
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
                <li>Deleting your account does not cancel a Splitry Premium subscription. Cancel it in your App Store or Google Play subscription settings.</li>
              </ul>
            </div>
          </section>

          {/* 7. Data Security & Storage Encryption */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">7</span>
              Data Security & Storage Encryption
            </h2>
            <p className="text-body leading-relaxed">
              We employ bank-grade security protocols to protect your information:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-body">
              <li className="flex gap-2 items-center"><span className="text-primary-green font-bold">✓</span><span><strong>Encryption in Transit:</strong> All communications between the app and server use HTTPS/TLS 1.3 encryption.</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary-green font-bold">✓</span><span><strong>Encrypted QR Payloads:</strong> QR codes and deep links are encrypted using AES-256-CBC with secure IV verification.</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary-green font-bold">✓</span><span><strong>Local Session Security:</strong> Authentication tokens are stored securely in local device storage (`GetStorage`) and sanitized on logout.</span></li>
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-primary-dark text-white flex items-center justify-center text-sm font-bold">8</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-body leading-relaxed">
              Splitry is intended solely for users aged 13 and older. We do not knowingly collect or solicit personal data from children under 13. If we discover that a child under 13 has registered, we will promptly delete their account and data.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section className="p-6 bg-background-soft rounded-3xl border border-border-stroke text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-1">Have Questions About Your Privacy?</h3>
              <p className="text-xs sm:text-sm text-body">
                Our dedicated privacy team is available to assist you with data requests or questions.
              </p>
            </div>
            <a
              href="mailto:splitry@gmail.com"
              className="px-6 py-3 bg-primary-green text-white font-semibold text-sm rounded-2xl hover:bg-primary-green-deep transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-primary-green/20"
            >
              <Mail className="w-4 h-4" />
              Contact Privacy Team
            </a>
          </section>

        </div>
      </div>
    </SiteShell>
  );
}
