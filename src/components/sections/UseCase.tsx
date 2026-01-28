"use client";
import Image from "next/image";
import giftIllustration from "../../../public/img/birthday.png";
import graduationIllustration from "../../../public/img/Anniversary Celebrations.png";
import annivesaryIllustration from "../../../public/img/Graduation Gifts.png";
import babyCelebrationIllustration from "../../../public/img/New Baby Celebrations.png";
import { SquareChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const UseCase = () => {
  return (
    <section className="bg-[#ECEFFE] lg:py-25 py-8 px-5">
      <div className="max-w-300 mx-auto space-y-11">
        <motion.h4
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl leading-8 font-bold md:text-[2.5rem] md:leading-14 text-[#18181B] max-w-203"
        >
          Perfect For Every Moment That Deserves More Than A Bank Transfer
        </motion.h4>
        <div className="bg-white md:p-2.5 rounded-[9.33px] p-0.75 lg:rounded-4xl w-full h-35 md:h-60 lg:h-118.5 flex  overflow-hidden">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
            className="h-full flex-1"
          >
            <Image
              src={giftIllustration.src}
              width={giftIllustration.width}
              height={giftIllustration.height}
              alt="gift surprise"
              className="h-full w-full rounded-l-lg lg:rounded-l-4xl object-cover "
            />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
            className="h-full flex-1"
          >
            <Image
              src={graduationIllustration.src}
              width={graduationIllustration.width}
              height={graduationIllustration.height}
              alt="graduation Celebration"
              className="h-full w-full  object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
            className="h-full flex-1"
          >
            <Image
              src={annivesaryIllustration.src}
              width={annivesaryIllustration.width}
              height={annivesaryIllustration.height}
              alt="annivesary Celebration"
              className="h-full w-full object-cover "
            />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            viewport={{ once: true, amount: 0.6 }}
            className="h-full flex-1 rounded-r-lg lg:rounded-r-4xl overflow-hidden"
          >
            <Image
              src={babyCelebrationIllustration.src}
              width={babyCelebrationIllustration.width}
              height={babyCelebrationIllustration.height}
              alt="baby Celebration"
              className="h-full w-full  object-cover"
            />
          </motion.div>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {cases.map((useCase, index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
                key={index}
                className="space-y-2"
              >
                <p className="text-2xl text-[#18181B] font-bold">
                  {useCase.title}
                </p>
                <p className="text-sm font-medium leading-5">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div>
            <motion.div
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center">
              <button className="px-4 py-3 hover:opacity-95 transition ease-in-out duration-300 bg-[#5A42DE] text-white text-lg flex  font-bold rounded-xl gap-1 items-center leading-6">
                <SquareChevronDown />
                Load more use cases
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const cases = [
  {
    title: "Birthday Surprises",
    description:
      "Send it a week early. Let them watch the countdown. The gift unlocks at midnight on their actual birthday. Maximum impact, zero chance they forget you care",
  },
  {
    title: "Anniversary Celebrations",
    description:
      "3 years together? Send money that unlocks at the exact time you first met. The precision shows you remember every detail. The countdown becomes part of your celebration.",
  },
  {
    title: "Graduation Gifts",
    description:
      "They finish their final exam and the gift unlocks for celebrating. Perfectly timed, impossible to spend before the moment. Reward achievement with perfect timing.",
  },
  {
    title: "Long Distance Relationships",
    description:
      "You're in New York, they're in London. Send a surprise that unlocks when you're reuniting. The countdown makes the distance feel shorter. Every check of the timer is them thinking of you.",
  },
  {
    title: "Diaspora Family Supports",
    description:
      "You're abroad, family is home. Send money for school fees that unlocks exactly when tuition is due—not a day before when it might get spent on emergencies. Ensure your support arrives when it's meant to.",
  },
  {
    title: "New Baby Celebrations",
    description:
      "Send a gift that unlocks on the baby's actual birth date (if you know it) or 3 months later when new parents are exhausted and could use a surprise boost.",
  },
  {
    title: "Achievement Rewards ",
    description:
      "Straight A's? New promotion? Set the gift to unlock on report card day or promotion celebration day. The reward arrives exactly when the achievement is being celebrated.",
  },
  {
    title: "Holiday Surprises",
    description: `Holiday Surprises "Christmas, Eid, Diwali, Lunar New Year—send gifts that unlock on the holiday morning. They wake up to a surprise that feels perfectly timed with the celebration."`,
  },
  {
    title: "Just Because Moments",
    description: `No reason needed. Sometimes the best surprises have no occasion—just 'I was thinking about you, so I sent this to unlock on Friday.' Random acts of generosity made memorable.`,
  },
];
