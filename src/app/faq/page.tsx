import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description: "Get answers to all your questions about Splitry, the smart expense splitting app. Learn how to scan receipts, split bills, and record settlements.",
  alternates: { canonical: "/faq" },
};

const faqCategories = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is Splitry?",
        answer: "Splitry is a smart expense manager that helps friends, couples, roommates, and groups track, split, and settle shared bills effortlessly. By combining intelligent receipt scanning, automated calculations, and smooth payment flows, Splitry makes group finances stress-free."
      },
      {
        question: "Is Splitry free to use?",
        answer: "Yes! Splitry is completely free to download and use. You can create unlimited groups, invite friends, add expenses, and scan receipts using our built-in parser without paying anything."
      },
      {
        question: "How do I invite friends to my group?",
        answer: "Once you create a group (for example, for a trip, house rent, or dinner), you can generate a secure invite link or invite them directly using their phone number or email. When they tap the link, they will instantly join your group."
      }
    ]
  },
  {
    category: "Receipt Scanning",
    items: [
      {
        question: "How does the receipt scanner work?",
        answer: "When you add an expense, simply tap the 'Scan Receipt' button and take a photo of your receipt. Our built-in parser instantly extracts the items, prices, tax, and tip. You can then quickly assign specific items to different group members or split them equally."
      },
      {
        question: "What are Smart Reminders and Suggestions?",
        answer: "Splitry uses smart suggestions to predict category tags and group selections for new expenses, saving you typing time. Smart Reminders are gentle, automated notifications sent to group members with pending balances, taking the awkwardness out of asking for money."
      },
      {
        question: "Does Splitry support itemized tax and tip splitting?",
        answer: "Yes! Splitry automatically calculates the proportional tax and tip for each item. If you assign an item to someone, their share of the tax and tip will be computed automatically and added to their total."
      }
    ]
  },
  {
    category: "Balances & Settlements",
    items: [
      {
        question: "What is 'Payment Minimization' or Debt Simplification?",
        answer: "Our smart engine simplifies debts within a group. For example, if Alex owes Sam $20, and Sam owes Jessica $20, Splitry minimizes this so Alex pays Jessica $20 directly. This reduces the total number of transfers needed to settle up."
      },
      {
        question: "How do I settle up my balance?",
        answer: "Tap the 'Settle Up' button in your group and choose who you paid and the amount. You're recording a payment that happened outside Splitry — pay your friend however you like (bank transfer, cash, or any payment app), then log it so everyone's balance updates instantly. No money moves through Splitry."
      },
      {
        question: "Does Splitry store or process my money?",
        answer: "No, Splitry is not a mobile wallet and does not hold, process, or move your funds. All payments happen directly between you and your friends, outside of Splitry. Splitry just keeps the record straight."
      }
    ]
  },
  {
    category: "Security & Privacy",
    items: [
      {
        question: "Is my personal and financial data secure?",
        answer: "Absolutely. We prioritize your privacy and data security. All communications are encrypted using secure industry-standard TLS/HTTPS protocols. We do not sell your personal data, and we only request permissions (like camera access) when they are strictly necessary for features like receipt scanning."
      },
      {
        question: "Can I delete my account and data?",
        answer: "Yes, you have full control over your data. You can request account and data deletion at any time by contacting us directly at splitry@gmail.com. We will permanently delete your profile, groups, and transaction history from our servers."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      {/* Header */}
      <div className="bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-6 hover:text-emerald-300 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Frequently Asked Questions</h1>
          <p className="text-slate-400 mt-3 text-lg">Find quick answers to common questions about Splitry&apos;s expense splitting, smart features, and payment settlements.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-[#111522]/90 rounded-3xl border border-white/10 shadow-xl p-6 sm:p-10 space-y-12">
          
          {faqCategories.map((cat, catIdx) => (
            <section key={catIdx} className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {cat.category}
              </h2>
              
              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <details 
                    key={itemIdx} 
                    className="group border border-white/10 bg-[#0B0E14]/80 rounded-2xl p-5 hover:border-emerald-500/40 transition-colors duration-200 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between font-bold text-lg text-white cursor-pointer list-none select-none">
                      <span className="pr-4">{item.question}</span>
                      <span className="transition-transform duration-200 group-open:rotate-180 text-slate-400 group-hover:text-emerald-400 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-slate-300 leading-relaxed text-[15px] border-t border-white/10 pt-4">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

        </div>
      </div>
    </main>
  );
}
