"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../../public/img/Hero.png";
import GiftReceiveIllustration from "../../../public/img/gift_rec.png";
import GiftReceiveTwoIllustration from "../../../public/img/gift_2.png";

export default function Hero() {
  return (
    <section className="overflow-hidden w-screen px-5">
        
    <div className="relative w-full max-w-300    mx-auto   py-12 md:py-25 lg:py-50 flex flex-col lg:flex-row items- justify-between gap-4 xl:gap-12 ">
      {/* Text Content */}
      <div className="w-full md:max-w-120 md:mx-auto lg:w-1/2 flex flex-col  lg:items-start z-10 text-center lg:text-left">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#ECEFFE] w-fit mx-auto lg:mx-0 text-[#303030] rounded-full px-4 py-1.5 flex items-center gap-2 text-sm font-medium mb-6"
        >
          <div className="flex -space-x-2">
            <Image
              src="img/avatar-1.svg"
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="img/avatar-2.svg"
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="img/avatar-3.svg"
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="img/avatar-4.svg"
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
          </div>
          <span>2,153 Sport remaining</span>
        </motion.div>

        <div className="">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="text-4xl lg:text-5xl xg:text-[62px] text-gray-900 mb-4"
          >
            <span className="text-[#5A42DE] font-cherry-bomb-one">
              Ca$h Gifts
            </span>{" "}
            <motion.div
              initial={{ scale:0, opacity: 0,rotate:20 }}
              animate={{ scale:1, opacity: 1,rotate:0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
              className="inline"
            >
              <Image
                src="/img/gift-icon.svg"
                alt=""
                width={64.85}
                height={64.85}
                className="inline-block -ml-4 -mt-4 object-cover  "
              />
            </motion.div>
            <span className="font-br-firma font-bold block lg:inline">
              That Feel Like Opening A Present
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="text-[14px] lg:text-[18px] font-br-firma text-[#18181B] mb-10"
          >
            Send money that unlocks on any special day. They&apos;ll count down
            the days, experience the surprise, and remember this moment forever.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
          className="flex flex-row gap-4 w-full lg:w-auto"
        >
          <button className="flex-1 lg:flex-none px-8 h-12 bg-white text-[#5A42DE] border text-[16px] lg:text-[18px] font-bold border-[#5A42DE] rounded-lg  hover:bg-purple-50 transition-colors whitespace-nowrap">
            Learn More
          </button>
          <button className="flex-1 lg:flex-none px-8 h-12 bg-[#5A42DE] text-white text-base lg:text-lg font-bold rounded-lg  whitespace-nowrap">
            Join the wait list
          </button>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="w-full  xl:w-1/2 pt-10  relative">
        <div className="relative z-10 mx-auto max-w-fit ">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
            className=" absolute top-8/12 lg:top-10/12 -left-10 xl:top-9/12  md:-left-22.5"
          >
            <Image
              src={GiftReceiveTwoIllustration.src}
              alt="Gift receiving illustration"
              width={GiftReceiveTwoIllustration.width}
              height={GiftReceiveTwoIllustration.height}
              className=" h-auto md:w-66.5 w-47.25  object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
            className=" absolute top-6/12 -right-8  md:-right-12 lg:-right-22.5 w-content "
          >
            <Image
              src={GiftReceiveIllustration.src}
              alt="Gift receiving illustration"
              width={GiftReceiveIllustration.width}
              height={GiftReceiveIllustration.height}
              className="  h-auto md:w-66.5 w-47.25  object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <Image
              src={HeroImage.src}
              alt="Person enjoying a gift"
              width={HeroImage.width}
              height={HeroImage.height}
              className="flex max-w-full xl:max-w-143 rounded-2xl h-81.25 md:h-133.5 object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>

    </section>
  );
}
