"use client";

import { CheckCircle } from "lucide-react";
import EarthBg from "../../../public/img/earth-bg.png";
import { PhoneInput } from "../inputs/PhoneInput";
import { Input } from "../inputs/inputs";
import CountrySelect from "../inputs/CountrySelect";
import IconSelect from "../inputs/SelectField";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";


const textVariant: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariant: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


export const WhyWaitList = () => {
  const interests = [
    { value: "family", label: "Sending gifts to family" },
    { value: "friends", label: "Sending gifts to friends" },
    { value: "business", label: "Business gifting" },
    { value: "occasions", label: "Special occasions" },
  ];

  const [interest, setInterest] = useState(interests[0]);

  return (
    <section className="bg-[#F6F6F9] py-10 lg:py-25 px-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-273.75 bg-white rounded-4xl mx-auto px-4 py-10 md:p-10 lg:p-15"
      >
        {/* Heading */}
        <motion.div variants={textVariant} className="mb-6 space-y-8">
          <div className="flex items-center flex-col gap-1 text-center">
            <h4 className="text-2xl md:text-[2rem] font-bold leading-10 text-[#18181B]">
              Why Join The Waitlist Now
            </h4>
            <p className="lg:text-lg leading-6 text-[#18181B]">
              Be First In Line &quot;Get access before the general public. Skip
              the wait when we launch. Be among the first people in the world to
              transform how you send money.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          className="flex gap-4 flex-col lg:flex-row"
        >
          {/* Purple Card */}
          <motion.div
            variants={cardVariant}
            className="min-w-78.5 bg-[#5A42DE] rounded-2xl py-8 px-5 space-y-4"
          >
            <div className="space-y-1">
              <p className="text-white font-bold text-2xl">
                Founding Member Perks
              </p>
              <p className="text-sm leading-5  text-white">
                Early members get special benefits we don&apos;t offer to anyone
                else
              </p>
            </div>

            <div className="space-y-2">
              {[
                "First 3 gifts completely free (no fees)",
                "Exclusive Founding Member badge on your profile",
                "Priority customer support forever",
                "First access to all new features before anyone else",
                "Direct input on features we build next",
                "Special perks and surprises we're still designing",
              ].map((text, i) => (
                <div key={i} className="flex gap-1 items-start">
                  <CheckCircle size={14} className="text-white shrink-0" />
                  <p className="text-sm text-white">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* White Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              {
                title: "Lock In Lifetime Pricing",
                text: "Current plan is 2% fees. As we scale globally, that might change for new users. Join the waitlist and lock in founding member rates for life. Pay less, forever. This alone could save you hundreds over the years.",
              },
              {
                title: "Help Shape The Product",
                text: "We're actively listening to waitlist members. Want a specific feature? Tell us. Have feedback on how it should work? We're building this with your input. Your voice matters here. Top contributors get special recognition.",
              },
              {
                title: "Get Launch Notification",
                text: "Be the first to know when we go live. Don't miss the launch—join the waitlist and we'll notify you the moment you can start sending unforgettable gifts",
              },
              {
                title: "Exclusive Updates",
                text: "Behind-the-scenes development updates, sneak peeks of new features, beta testing opportunities, and exclusive content only for waitlist members. Be part of the journey from the very beginning.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="border border-[#18181B]/6 bg-white rounded-2xl p-5 space-y-2"
              >
                <p className="text-2xl font-bold text-[#18181B]">
                  {card.title}
                </p>
                <p className="text-sm font-medium text-[#71717A]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={staggerContainer}
          className="flex gap-15 mt-8 md:mt-23.25 flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={cardVariant}
            style={{
              backgroundImage: `url('${EarthBg.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-4xl h-82 lg:h-151 py-6 px-5.5 max-w-115"
          >
            <p className="text-2xl font-bold text-[#44349F]">
              Get Early Access & Founding Member Benefits
            </p>
          </motion.div>

          <motion.div variants={cardVariant} className="w-full max-w-113">
            <div className=" w-full max-w-113">
              <form className="space-y-12">
                <div className="space-y-7">
                  <div className="flex gap-4 ">
                    <Input label="First name" placeholder="Details" />
                    <Input label="Last name" placeholder="Details" />
                  </div>{" "}
                  <div className="flex gap-4 ">
                    <Input label="Email address" placeholder="Details" />
                  </div>
                  <div className=" ">
                    <PhoneInput
                      id="phoneNumber"
                      label="Phone Number"
                      placeholder="81 123 456 78"
                      // value={formData.phoneNumber}
                      // // onChange={handleChange("phoneNumber")}
                      // // error={errors.phoneNumber}
                      // // countryCode={formData.countryCode}
                      // // onCountryCodeChange={(code) => // setFormData((prev) => ({ ...prev, countryCode: code })) // }
                      // autoComplete="tel"
                    />
                  </div>
                  {/* Interest */}
                  <CountrySelect />
                  <IconSelect
                    label="I am most interested in"
                    value={interest}
                    options={interests}
                    onChange={setInterest}
                  />{" "}
                  <div className="flex gap-4 ">
                    {" "}
                    <Input
                      label="Which country would you most like to send gifts to(optional)"
                      placeholder="Nigeria, Kenya, Philippines."
                    />{" "}
                  </div>{" "}
                  <div className="flex gap-4 ">
                    {" "}
                    <Input
                      label="What occasion would you use Vaultly for first? (optional)"
                      placeholder="My mom's birthday, anniversary, graduatio"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex justify-end">
                  {" "}
                  <button className="p-3 md:text-lg font-bold bg-[#5A42DE] rounded-lg leading-6 text-white">
                    {" "}
                    Secure My Founding Member Spot{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
