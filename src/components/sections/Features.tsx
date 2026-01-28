"use client";
import Image from "next/image";
import MapIllutraction from "../../../public/img/map.png";
import WithdrawIllustration from "../../../public/img/withdraw.png";
import CurrencySupportIllutraction from "../../../public/img/currency support.png";
import CurrencySupportMoblieIllutraction from "../../../public/img/currency suppose moblie.png";
import CrossBorderIllustration from "../../../public/img/cross border.png";
import CrossBorderDesktopIllustration from "../../../public/img/cross border desktop.png";
import HalfGlobe from "../../../public/img/half globe.png";
import { motion } from "framer-motion";
import {
  AustraliaFlagIcon,
  CanadaFlagIcon,
  EuropeanUnionFlagIcon,
  GhanaFlagIcon,
  IndiaFlagIcon,
  KenyaFlagIcon,
  NigeriaFlagIcon,
  PhilippinesFlagIcon,
  SingaporeFlagIcon,
  SouthAfricaFlagIcon,
  UnitedArabEmiratesFlagIcon,
  UnitedKingdomFlagIcon,
} from "@/assets/Svg";

export const Features = () => {
  return (
    <section className="lg:py-50 py-25 bg-[#F7F7F8] px-5">
      <div className="max-w-300 space-y-8 mx-auto ">
        <div className="bg-white lg:px-12 lg:pt-12 pt-6 px-4 space-y-8  overflow-hidden rounded-4xl ">
          <div className="  max-w-174.5 space-y-1 ">
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
              className="lg:text-[2rem] text-xl font-bold leading-8"
            >
              Send From
            </motion.p>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              United States • United Kingdom • Canada • Australia • European
              Union • Nigeria • Ghana • Kenya • South Africa • Philippines •
              India • United Arab Emirates • Singapore • and 150+ more countries
            </motion.p>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
            className="md:h-full w-full  flex h-39  justify-end"
          >
            <Image
              src={MapIllutraction.src}
              width={MapIllutraction.width}
              height={MapIllutraction.height}
              alt="map illustration"
              className=" object-cover lg:max-w-213.75  h-fullw-auto"
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }}
            className="justify-between  gap-11.5 md:gap-6 lg:ga-11.5 rounded-4xl flex flex-col py-5 px-4 bg-white lg:pt-12 lg:px-12"
          >
            <div className="space-y-1">
              <p className="font-bold text-2xl lg:text-[2rem] leading-10 text-[#181818]">
                Withdraw To
              </p>
              <p className="text-xs lg:text-lg text-[#18181B] leading-6 ">
                Starting with Nigeria, with more countries launching soon based
                on demand. Join the waitlist to be first when we launch in your
                country.
              </p>
            </div>
            <div className="">
              <Image
                src={WithdrawIllustration.src}
                width={WithdrawIllustration.width}
                height={WithdrawIllustration.height}
                alt=""
                className=""
              />
            </div>
          </motion.div>

           <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
            viewport={{ once: true, amount: 0.4 }} className="justify-between  gap-11.5 md:gap-6 lg:gap-11.5 rounded-4xl flex flex-col py-5 px-4  bg-white lg:pt-12 lg:px-12">
            <div className="space-y-1">
              <p className="font-bold text-2xl lg:text-[2rem] leading-10 text-[#181818]">
                Currency Support
              </p>
              <p className="text-xs lg:text-lg text-[#18181B] leading-6 ">
                Send and receive in: USD • EUR • GBP • NGN • KES • GHS • ZAR •
                PHP • INR • AED • and more coming soon
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <EuropeanUnionFlagIcon />
                <IndiaFlagIcon />
                <SingaporeFlagIcon />
                <AustraliaFlagIcon />
                <UnitedArabEmiratesFlagIcon />
                <SouthAfricaFlagIcon />
                <PhilippinesFlagIcon />
                <GhanaFlagIcon />
                <KenyaFlagIcon />
                <UnitedKingdomFlagIcon />
                <CanadaFlagIcon />
                <NigeriaFlagIcon />
              </div>
            </div>
            <div className="w-full">
              <Image
                src={CurrencySupportIllutraction.src}
                width={CurrencySupportIllutraction.width}
                height={CurrencySupportIllutraction.height}
                alt=""
                className=" object-cover lg:h-67.25 w-auto hidden md:block  rounded-2xl"
              />
              <Image
                src={CurrencySupportMoblieIllutraction.src}
                width={CurrencySupportMoblieIllutraction.width}
                height={CurrencySupportMoblieIllutraction.height}
                alt=""
                className=" object-cover h-full w-full md:hidden rounded-2xl"
              />
            </div>
          </motion.div>
           <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
            viewport={{ once: true, amount: 0.4 }} className="justify-between  gap-11.5 rounded-4xl flex flex-col py-5 px-4 bg-white lg:pt-12 lg:px-12">
            <div className="space-y-1">
              <p className="font-bold text-2xl lg:text-[2rem] leading-10 text-[#181818]">
                Cross-Border Made Easy
              </p>
              <p className="text-xs lg:text-lg text-[#18181B] leading-6 ">
                Send dollars from New York to Nigeria. Send pounds from London
                to Kenya. Send euros from Berlin to Ghana. Your currency
                converts automatically, they receive in their local currency. No
                exchange rate confusion, no hidden markups
              </p>
            </div>
            <div className="">
              <Image
                src={CrossBorderIllustration.src}
                width={CrossBorderIllustration.width}
                height={CrossBorderIllustration.height}
                alt=""
                className=" md:hidden object-cover w-auto"
              />
              <Image
                src={CrossBorderDesktopIllustration.src}
                width={CrossBorderDesktopIllustration.width}
                height={CrossBorderDesktopIllustration.height}
                alt=""
                className="hidden md:flex object-cover w-auto"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            style={{
              backgroundImage: `url('${HalfGlobe.src}')`,
              backgroundSize: "80%",
            }}
            className="justify-between h-83 md:h-full bg-no-repeat bg-bottom-right  gap-11.5 rounded-4xl flex flex-col py-5 px-4 bg-white lg:pt-12 lg:px-12"
          >
            <div className="space-y-1">
              <p className="font-bold text-2xl lg:text-[2rem] leading-10 text-[#181818]">
                Truly Global
              </p>
              <p className="text-xs lg:text-lg text-[#18181B] leading-6 ">
                Whether you&apos;re supporting family across continents,
                celebrating friends in different time zones, or sending love
                across borders Vaultly makes distance irrelevant.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
