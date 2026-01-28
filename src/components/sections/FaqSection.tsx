'use client'
import Image from "next/image"
import FaqGirlImage from "../../../public/img/faq-image.png"
import { ChevronDown } from "lucide-react";
import { FC, useState } from "react";
import { AnimatePresence,motion, number } from "framer-motion";
import { FaqIcon, SquareIcon } from "@/assets/Svg";

export const Faqs =()=>{
  const [activeFaq, setActiveFaq]=useState<null| number> (0)
  const handleFaq =(index:number)=>{
    if (index === activeFaq) {
      setActiveFaq(null)
    }
    else{
      setActiveFaq(index)
    }
  }

  return (
    <section className="px-5 bg-[#F6F6F9] py-25">
      <div className="max-w-300 flex mx-auto  items-center gap-10 xl:gap-20 flex-col lg:flex-row">
        <div className="space-y-6 lg:max-w-198 xl:max-w-none  w-full lg:w-198 xl:w-fit">
          <div className="space-y-2">
            <motion.h6
            initial={{
              x1:-20,
              opacity:0
            }}
            whileInView={{
              x1:0,opacity:1
            }}
            viewport={{once:true,amount:0.5}}
            transition={{ease:"easeInOut",duration:0.4}}
            className="text-[#18181B] gap-2 flex font-bold text-[3.5rem] leading-[100%]">
              FAQ
              <motion.span
              initial={{
                scale:0,
                rotate:30,
                opacity:0
              }}
              whileInView={{
                scale:1,
                rotate:0,
                opacity:1
              }}
              >
                <FaqIcon />
              </motion.span>
            </motion.h6>
            <motion.p
            initial={{
              y2:20,opacity:0
            }}
            whileInView={{
              y2:0,
              opacity:1
            }}
            transition={{
              duration:0.5,ease:"easeInOut"
            }}
            viewport={{
              once:true,amount:0.6
            }}
            className="text-lg leading-6 font-medium">
              Everything You&apos;re Wondering
            </motion.p>
          </div>
         <motion.div
         initial={{
          y:20,
          opacity:0
         }}
         whileInView={{
          y:0,
          opacity:1
         }}
         transition={{
          duration:0.6,ease:"easeInOut",delay:0.4
         }}
         >
           <Image
            src={FaqGirlImage.src}
            alt="girl smiling"
            width={FaqGirlImage.width}
            height={FaqGirlImage.height}
            blurDataURL={FaqGirlImage.blurDataURL}
            className="rounded-4xl h-129 w-auto lg:w-97 object-cover hidden lg:inline-block "
          />
         </motion.div>
        </div>
        <div className="space-y-6 w-full  max-w-198">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaqItem
              isOpen={index === activeFaq}
              key={index}
              handleClick={() => handleFaq(index)}
            />
          ))}
          <div className="flex justify-end">
            <button className="px-4 py-3 hover:opacity-95 transition ease-in-out duration-300 border-[#5A42DE] border text-[#5A42DE] text-lg flex  font-bold rounded-xl gap-1 items-center leading-6">
              <SquareIcon/>
              Load More FAQs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


interface FaqItemProps {
  isOpen?: boolean;
  handleClick:()=>void
}

const FaqItem: FC<FaqItemProps> = ({ isOpen = false, handleClick }) => {
  return (
    <div
      role="button"
      onClick={handleClick}
      className="md:p-8 px-4 py-6 bg-white w-full rounded-2xl cursor-pointer "
    >
      <div className="flex justify-between items-start ">
        <p className="font-semibold text-xl">When does this launch?</p>

        <motion.div
          initial={{
            rotate: 0,
          }}
          animate={isOpen ? { rotate: 179 } : { rotate: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
          className="text-[#5A42DE] bg-[#ECEFFE] size-5 flex items-center justify-center rounded-full"
        >
          <ChevronDown />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-8 text-sm font-medium text-[#71717A]">
              We&apos;re still in development and testing. Waitlist members will get
              first access as soon as we&apos;re ready. Join to be notified
              immediately when we go live.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};