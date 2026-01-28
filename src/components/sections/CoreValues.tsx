"use client";

import Image from "next/image";
import BankBuilding from "../../../public/img/bank.png";
import {
  CashIcon,
  ChartIcon,
  GlobeIcon,
  PriceTagIcon,
  SheidIcon,
  TrustedIcon,
  VerifiedIcon,
} from "@/assets/Svg";
import { motion, type Variants } from "framer-motion";


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], 
    },
  },
};


function CoreValues() {
  return (
    <section className="px-5 bg-[#F5F5F5] py-10 lg:py-25">
      <div className="max-w-300 space-y-8 mx-auto">
        <motion.h4         
        initial={{
            x:-20,opacity:0
        }}
        whileInView={{
            x:0,opacity:1
        }}
        transition={{
            duration:0.6,ease:"easeInOut",

        }}
        viewport={{
            amount:0.5,
            once:true
        }}
        className="font-bold text-2xl leading-8 text-center md:text-[2.5rem] md:leading-11.5 max-w-202 mx-auto">
          Safe, Secure, and Built For The Modern World
        </motion.h4>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-5.5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3"
        >
          {/* Big Card */}
          <motion.div
            variants={cardVariants}
            className="lg:p-8 p-4 py-6 flex flex-col justify-between rounded-3xl bg-[#5A42DE] row-span-2"
          >
            <div className="space-y-2">
              <p className="text-white text-2xl font-bold leading-8.5">
                Bank-Level Security
              </p>
              <p className="text-white text-sm font-medium leading-5">
                We use the same security standards as major financial
                institutions. Your payment information is processed by Stripe
                and Paystack, trusted by Google, Amazon, and Shopify.
              </p>
            </div>

            <div className="max-w-57.5">
              <Image
                src={BankBuilding}
                alt="bank building"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-white flex flex-col gap-2 justify-end"
          >
            <TrustedIcon />
            <div>
              <p className="text-[#18181B] font-bold text-2xl leading-8.5">
                No Scam Vibes
              </p>
              <p className="text-[#71717A] font-medium text-sm leading-5">
              The biggest concern with money apps? &apos;How do I know it&apos;s not a scam?&apos; With Vaultly, you share the gift from YOUR WhatsApp or phone. They see it&apos;s from you—not some random number—immediately. Trust built in from the start.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-white flex flex-col gap-2 justify-end"
          >
            <PriceTagIcon />
            <div>
              <p className="text-[#18181B] font-bold text-2xl leading-8.5">
                Transparent Pricing
              </p>
              <p className="text-[#71717A] font-medium text-sm leading-5">
              Simple fees, no hidden charges. You&apos;ll see exactly what you pay before confirming. What you see is what you get. No surprises, no fine print tricks.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            className="lg:p-8 p-4 py-6 flex flex-col justify-between rounded-3xl bg-[#5A42DE]"
          >
            <div className="space-y-2">
              <p className="text-white text-2xl font-bold leading-8.5">
                You Stay In Control
              </p>
              <p className="text-white text-sm font-medium leading-5">
                Track every step: when they claimed it, when it unlocked, when they withdrew it. You&apos;re never in the dark about your money. Full transparency from send to receive.
              </p>
            </div>
            <ChartIcon />
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-white flex flex-col gap-2 justify-end"
          >
            <CashIcon />
            <div>
              <p className="text-[#18181B] font-bold text-2xl leading-8.5">
                Money-Back Protection
              </p>
              <p className="text-[#71717A] font-medium text-sm leading-5">
                &quot;If they never claim the gift after 90 days, you get a refund. Your money never disappears into the void. We&apos;ve got your back.
              </p>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-white flex flex-col gap-2 justify-end"
          >
            <GlobeIcon />
            <div>
              <p className="text-[#18181B] font-bold text-2xl leading-8.5">
                Global Compliance
              </p>
              <p className="text-[#71717A] font-medium text-sm leading-5">
               We operate in compliance with international money transfer regulations. Licensed, legitimate, and built to last.
              </p>
            </div>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-white flex flex-col gap-2 justify-end"
          >
            <SheidIcon />
            <div>
              <p className="text-[#18181B] font-bold text-2xl leading-8.5">
                Privacy First
              </p>
              <p className="text-[#71717A] font-medium text-sm leading-5">
               Your personal information is encrypted and never shared without your permission. We don&apos;t sell your data. We don&apos;t spam you. We just help you make gifting better.
              </p>
            </div>
          </motion.div>

          {/* Card 8 */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-white flex flex-col gap-2 justify-end"
          >
            <VerifiedIcon />
            <div>
              <p className="text-[#5A42DE] font-bold text-2xl leading-8.5">
                Tested & Verified
              </p>
              <p className="text-[#5A42DE] font-medium text-sm leading-5">
               Every transaction is verified. Every withdrawal is confirmed. Every step is monitored for your security. We take protecting your money as seriously as you do.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CoreValues;
