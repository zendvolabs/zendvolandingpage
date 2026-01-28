"use client";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";
export const WhySignUp = () => {
  return (
    <section className="py-8 lg:py-25 px-5 bg-white">
      <div className="max-w-300 mx-auto space-y-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-90 lg:max-w-120 w-full mx-auto text-center "
        >
          <h4 className="text-2xl leading-8 font-bold md:text-[2.5rem] md:leading-14 text-[#18181B] ">
            Why People Are Already Signing Up
          </h4>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
      viewport={{ once: true, amount: 0.4 }}
      className="
  px-8 py-10
  shadow-[0_30px_80px_20px_#2C3F6504]
  border-[#E4E4E7]

  /* horizontal dividers (single ownership) */
  border-b
md:nth-last-[-n+1]:border-b-0 lg:nth-last-[-n+3]:border-b-0

  /* md (2 cols): ONLY odd cards own the divider */
  md:odd:border-r
lg:odd:border-0
  /* lg (3 cols): ONLY first column owns right divider */
g:nth-[3n+2]:border-r!  lg:nth-[3n+2]:border-l!
  lg:last:border-r!

"
    >
      <div className="space-y-6">
        {icon && (
          <div className="bg-[#ECEFFE] flex items-center justify-center size-12 rounded-xl">
            {icon}
          </div>
        )}
        <div className="space-y-2">
          <h5 className="text-2xl font-bold text-[#18181B]">{title}</h5>
          <p className="text-[#71717A] text-sm leading-5">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const reasons = [
  {
    title: "Complete Mystery Mode",
    description:
      "They won't see the amount, your name, or your message until the moment arrives. You control the surprise. You can even stay completely anonymous until unlock day if you want",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: " Perfect Timing, Every Time",
    description:
      "Set it to unlock at midnight on their birthday. Exactly 12:00 AM in their timezone. Not a minute early. Not a second late. The precision makes it feel intentional, planned, special",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Real-Time Countdown",
    description:
      "Every time they open the app, they see exactly how long until the surprise. 6 days, 14 hours, 23 minutes. The countdown becomes part of the gift itself. The anticipation is part of the experience.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Celebration Unlock Experience ",
    description:
      "When the moment arrives, we don't just show the money. Full-screen animations, confetti explosions, your message in beautiful typography, and then the amount reveals. It's designed to feel like a moment worth remembering.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Instant Bank Withdrawals ",
    description:
      "After the reveal, Kyc is needed and one tap sends money to their bank account. Money arrives in minutes, not days. No complicated processes, no hidden fees for them.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Share Anywhere",
    description:
      "WhatsApp, Telegram, text message, QR code, or just copy the link. However you communicate, Vaultly works",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Protected From Early Spending",
    description:
      "Send money in advance without worrying they'll spend it before the occasion. The time-lock ensures it's there exactly when it's meant to be used. Perfect for helping someone save for something important",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Currency Protection",
    description:
      "Your money is held in stable digital currency, protected from local currency fluctuations. What you send is what they get—no value lost to inflation or exchange rate changes between sending and receiving.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Track Everything",
    description:
      "Know when they claimed it, when they opened it, when they withdrew it. Stay in the loop without being intrusive. Perfect for peace of mind when sending to family members abroad.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Beautiful Shareable Moments",
    description:
      "After they open their gift, we create a gorgeous card they can share on Instagram or WhatsApp Status. Let them show off your thoughtfulness (and help us spread the word).",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Multiple Gifts Management ",
    description:
      "Sending gifts to multiple people? Manage them all from one dashboard. See all your upcoming unlocks, track statuses, and never miss a special date again.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Scheduled Recurring Gifts",
    description:
      "Set it once, forget it. Send monthly support to family, birthday gifts that never get forgotten, or anniversary surprises that arrive like clockwork. Automation that feels personal.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Group Gifting",
    description:
      "Multiple people can contribute to one big surprise. Perfect for office gifts, friend group birthdays, or family pooling together for someone special. Everyone contributes, one person experiences joy.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Unlock Reminders",
    description:
      "They'll never miss the moment. We send reminders 24 hours before, 1 hour before, and right when it unlocks. The anticipation crescendos perfectly.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Personal Messages That Matter",
    description:
      "Write what you really feel. Not a text message they'll swipe away. A message that appears at exactly the right moment, in a way that demands to be felt and remembered.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Custom Unlock Times",
    description:
      "Not just dates—set specific times. Unlock at 3:47 PM—the exact time they were born. Midnight for maximum impact. Noon for a midday surprise. Precision timing shows you care about details.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Multi-Currency Support",
    description:
      "Send in your currency, they receive in theirs. Automatic conversion at fair rates. No confusion, no hidden markups, no complexity.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Gift History & Memories ",
    description:
      "Every gift creates a memory. Browse past gifts, replay unlock moments, see messages you've sent. Your generosity documented and cherished.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
  {
    title: "Zero Withdrawal Fees ",
    description:
      "They withdraw for free. All fees are paid by you upfront. What they see is what they get. No surprises, no deductions, complete transparency.",
    icon: <Gift size={20} className="text-[#5A42DE]" />,
  },
];
