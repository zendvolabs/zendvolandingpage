import Image from "next/image";

export default function Intro() {
    return (
        <section className="bg-[#F8F9FD] py-10 lg:pt-20">
            <div className="max-w-[1197px] mx-auto flex flex-col px-4 sm:px-6 lg:px-0 lg:flex-row items-center gap-4 lg:gap-[82px]">

                {/* Text Content */}
                <div className="w-full lg:w-1/2 order-1">
                    <h2 className="text-3xl lg:text-[35px] font-bold text-[#18181B] mb-8">
                        Introducing Zendvo: Money Gifts With Anticipation Built In
                    </h2>

                    <p className="text-[#18181B] mb-6 font-medium text-[18px]">
                        The first platform that transforms cash into unforgettable experiences with mystery, countdown, and celebration
                    </p>

                    <h3 className="text-[20px] font-bold text-[#18181B] mb-3">The Big Idea:</h3>
                    <p className="text-[#71717A] mb-6 text-[16px]">
                        Send money, but it's locked until the perfect moment
                    </p>

                    <p className="text-[#71717A] mb-6 text-[16px]">
                        They get notified immediately: "You have a surprise gift waiting." But they can't see how much. They can't see your message. They just see a countdown: "Unlocks in 7 days."
                    </p>

                    <p className="text-[#71717A] mb-6 text-[16px]">
                        Every day, they open the app. 6 days. 5 days. 3 days. The anticipation builds.
                    </p>

                    <p className="text-[#71717A] mb-8 text-[16px]">
                        Then the special day arrives. Midnight hits. The app lights up. Animations, confetti, your heartfelt message reveals, and the amount finally shows. They experience it like opening a gift. This is Vaultly.
                    </p>

                    <p className="font-bold text-[#18181B] mt-4 text-[20px]">This is Zendvo.</p>

                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 order-2">
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/img/intro-img.svg"
                            alt="Opening a gift"
                            width={510}
                            height={569}
                            className="w-[510px] h-[569px] object-cover rounded-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
