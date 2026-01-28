"use client";
import Bg from "../../../public/img/money transfer.png";
import { motion } from "framer-motion";
export const MoneyTransfer = () => {
  return (
    <section
      style={{ backgroundImage: `url('${Bg.src}')` }}
      className="bg-no-repeat bg-cover bg-center py-10 px-5 md:pt-16 md:pb-36"
    >
      <div className="max-w-300 mx-auto  space-y-14">
        <motion.h4
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-135 mx-auto text-center text-[#18181B] font-bold text-2xl md:text-[2.5rem] md:leading-14"
        >
          Vaultly vs. Regular Money Transfers
        </motion.h4>

        {/* Scroll container */}
        <div className="overflow-x-auto">
          <div className="flex justify-center min-w-max">
            {/* FEATURES */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Column
                title="Features"
                bg="bg-[#F7F7F8]"
                width="w-57"
                text="text-[#18181B]"
                rows={[
                  "Delivery",
                  "Experience",
                  "Communication",
                  "Control",
                  "Emotion",
                  "Anticipation",
                  "Feel",
                  "Memory",
                  "Message",
                  "Timing",
                ]}
                classname="rounded-l-4xl"
              />
            </motion.div>

            {/* REGULAR */}

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >

              <Column
              title="Regular Transfer"
              bg="bg-[#FEFCE8]"
              width="w-105"
              text="text-[#18181B]"
              rows={[
                "Instant (instantly forgotten)",
                "Generic bank notification",
                "Check your account",
                "Money can be spent immediately",
                "Zero emotional impact",
                "None",
                "Transactional",
                "Forgotten in 30 seconds",
                "Separate text message",
                "Now or scheduled (hidden)",
              ]}
            />
            </motion.div>
            {/* VAULTLY */}

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Column
              title="Vaultly"
              bg="bg-[#ECEFFE]"
              width="w-105"
              text="text-[#44349F]"
              rows={[
                "Time-locked delivery",
                "Celebration unlock experience",
                "Message revealed at unlock",
                "Full sender control",
                "Emotional moment",
                "Built-in countdown",
                "Memorable",
                "Saved forever",
                "Integrated message",
                "Exact unlock timing",
              ]}
              classname="rounded-r-4xl"
            />
            </motion.div>
            

            
          </div>
        </div>
      </div>
    </section>
  );
};

const Column = ({
  title,
  rows,
  bg,
  width,
  text,
  classname,
}: {
  title: string;
  rows: string[];
  bg: string;
  width: string;
  text: string;
  classname?: string;
}) => {
  return (
    <div className={`${bg} ${width} ${classname}`}>
      <p className="py-6 pl-5 font-bold md:text-2xl text-[#18181B]">{title}</p>
      <ul className={`font-medium md:text-lg ${text}`}>
        {rows.map((row, i) => (
          <li
            key={i}
            className="px-5 py-2.5 border-b border-black/5 last:border-b-0"
          >
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
};
