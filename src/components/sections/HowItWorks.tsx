import Image from "next/image";

export default function HowItWorks() {
    return (
        <section className="bg-[#F8F9FD] py-20 px-4 sm:px-6 lg:px-12 lg:pb-32">
            <div className="max-w-[1197px] mx-auto bg-white rounded-[40px] p-6 lg:p-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                {/* Phone Mockup */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full">
                        <Image
                            src="/img/how-it-works.svg"
                            alt="How it works phone demo"
                            width={600}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Steps Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl lg:text-[40px] font-bold text-[#18181B] mb-4">
                        How It Works
                    </h2>
                    <p className="text-[#18181B] text-[18px] mb-6">
                        Three Simple Steps. One Unforgettable Experience
                    </p>

                    <div className="flex flex-col gap-10 relative">
                        {/* Step 1 */}
                        <div className="flex gap-6 relative z-10">
                            {/* Dotted Line connecting to next step */}
                            <div className="absolute left-5 top-10 h-full w-px border-l border-dashed border-[#8685F4] -translate-x-1/2 -z-10 block"></div>

                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EBE9FE] text-[#5A42DE] flex items-center justify-center font-bold text-lg ring-8 ring-white">
                                1
                            </div>
                            <div>
                                <p className="text-[#18181B] text-[14px]">
                                    Create Your Surprise "Choose any amount. Set the unlock date—their birthday, your anniversary, graduation day, or any moment that matters. Write a personal message they'll see when it opens."
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 relative z-10">
                            {/* Dotted Line connecting to next step */}
                            <div className="absolute left-5 top-10 h-full w-px border-l border-dashed border-[#8685F4] -translate-x-1/2 -z-10 block"></div>

                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EBE9FE] text-[#5A42DE] flex items-center justify-center font-bold text-lg ring-8 ring-white">
                                2
                            </div>
                            <div>
                                <p className="text-[#18181B] text-[14px]">

                                    Share From YOUR Phone "Send it via WhatsApp, Telegram, Instagram or even a QR code if you're together. It comes from YOUR account, so they know it's legit—not some random link."
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 relative z-10">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EBE9FE] text-[#5A42DE] flex items-center justify-center font-bold text-lg ring-8 ring-white">
                                3
                            </div>
                            <div>
                                <p className="text-[#18181B] text-[14px]">
                                    The Countdown Begins "They get notified immediately but see nothing except the countdown. Days pass. Anticipation builds. Then on the special day, everything reveals with celebration animations. They withdraw to their bank in minutes."
                                </p>
                            </div>
                        </div>

                        <button className="px-8 h-[48px] w-full lg:w-fit font-bold bg-[#5A42DE] text-white rounded-[8px] font-semibold">
                            Join the wait list
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
