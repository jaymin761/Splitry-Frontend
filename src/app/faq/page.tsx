import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description: "Get answers to all your questions about Splitry, the AI-powered expense splitting app. Learn how to scan receipts, split bills, and settle with UPI.",
  alternates: { canonical: "/faq" },
};

const faqCategories = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is Splitry?",
        answer: "Splitry is an AI-powered expense manager that helps friends, couples, roommates, and groups track, split, and settle shared bills effortlessly. By combining intelligent receipt scanning, automated calculations, and smooth payment flows, Splitry makes group finances stress-free."
      },
      {
        question: "Is Splitry free to use?",
        answer: "Yes! Splitry is completely free to download and use. You can create unlimited groups, invite friends, add expenses, and scan receipts using our AI parser without paying anything."
      },
      {
        question: "How do I invite friends to my group?",
        answer: "Once you create a group (for example, for a trip, house rent, or dinner), you can generate a secure invite link or invite them directly using their phone number or email. When they tap the link, they will instantly join your group."
      }
    ]
  },
  {
    category: "AI & Receipt Scanning",
    items: [
      {
        question: "How does the AI receipt scanner work?",
        answer: "When you add an expense, simply tap the 'Scan Receipt' button and take a photo of your receipt. Our built-in AI parser instantly extracts the items, prices, tax, and tip. You can then quickly assign specific items to different group members or split them equally."
      },
      {
        question: "What are AI Reminders and Suggestions?",
        answer: "Splitry uses smart suggestions to predict category tags and group selections for new expenses, saving you typing time. AI Reminders are gentle, automated notifications sent to group members with pending balances, taking the awkwardness out of asking for money."
      },
      {
        question: "Does the AI support itemized tax and tip splitting?",
        answer: "Yes! The AI automatically calculates the proportional tax and tip for each item. If you assign an item to someone, their share of the tax and tip will be computed automatically and added to their total."
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
        answer: "To settle up, tap the 'Settle Up' button in your group. You can choose who you want to pay and the amount. On mobile devices, this will launch your preferred UPI app (like GPay, PhonePe, or Paytm) with the pre-filled amount and recipient UPI ID for instant settlement."
      },
      {
        question: "Does Splitry store or process my money?",
        answer: "No, Splitry is not a mobile wallet and does not hold or process your funds. All payments are completed securely outside of Splitry via standard UPI apps, directly from your bank account to your friend's bank account."
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
        answer: "Yes, you have full control over your data. You can request account and data deletion at any time by contacting us directly at hello@splitry.com. We will permanently delete your profile, groups, and transaction history from our servers."
      }
    ]
  }
];

export default function FAQ() {
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
          <h1 className="text-4xl font-bold text-primary-dark">Frequently Asked Questions</h1>
          <p className="text-secondary-gray mt-3">Find quick answers to common questions about Splitry&apos;s expense splitting, AI features, and payment settlements.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl border border-border-stroke shadow-sm p-10 space-y-12">
          
          {faqCategories.map((cat, catIdx) => (
            <section key={catIdx} className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-dark border-b border-border-stroke pb-3">
                {cat.category}
              </h2>
              
              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <details 
                    key={itemIdx} 
                    className="group border border-border-stroke rounded-2xl p-5 hover:border-primary-green/40 transition-colors duration-200 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between font-bold text-lg text-primary-dark cursor-pointer list-none select-none">
                      <span className="pr-4">{item.question}</span>
                      <span className="transition-transform duration-200 group-open:rotate-180 text-secondary-gray group-hover:text-primary-green flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-4 text-secondary-gray leading-relaxed text-[15px] border-t border-border-stroke/50 pt-4">
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
