"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="bg-[#F8F9FD] py-10 lg:pt-20 px-5">
      <div className="max-w-300 mx-auto flex flex-col px-4 sm:px-6 lg:px-0 lg:flex-row items-center gap-4 lg:gap-20.5">
        {/* Text Content */}
        <div className="w-full xl:w-1/2 order-1">
          <motion.h2
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className="text-3xl lg:text-[35px] font-bold text-[#18181B] mb-8"
          >
            Introducing Zendvo: Money Gifts With Anticipation Built In
          </motion.h2>

          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className="text-[#18181B] mb-6 font-medium text-[18px]"
          >
            The first platform that transforms cash into unforgettable
            experiences with mystery, countdown, and celebration
          </motion.p>

          <motion.div
             initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <h3 className="text-[20px] font-bold text-[#18181B] mb-3">
              The Big Idea:
            </h3>
            <p className="text-[#71717A] mb-6 text-[16px]">
              Send money, but it&apos;s locked until the perfect moment
            </p>
          </motion.div>
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <p className="text-[#71717A] mb-6 text-[16px]">
              They get notified immediately: &quot;You have a surprise gift waiting.&quot;
              But they can&apos;t see how much. They can&apos;t see your message. They
              just see a countdown: &quot;Unlocks in 7 days.&quot;
            </p>

            <p className="text-[#71717A] mb-6 text-[16px]">
              Every day, they open the app. 6 days. 5 days. 3 days. The
              anticipation builds.
            </p>

            <p className="text-[#71717A] mb-8 text-[16px]">
              Then the special day arrives. Midnight hits. The app lights up.
              Animations, confetti, your heartfelt message reveals, and the
              amount finally shows. They experience it like opening a gift. This
              is Vaultly.
            </p>
          </motion.div>

          <motion.p 
           initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.3 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
          className="font-bold text-[#18181B] mt-4 text-[20px]">
            This is Zendvo.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full xl:w-1/2 order-2"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/img/intro-img.svg"
              alt="Opening a gift"
              width={510}
              height={569}
              className="w-full lg:max-w-127.5 aspect-square  md:aspect-video lg:h-142.25 object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
