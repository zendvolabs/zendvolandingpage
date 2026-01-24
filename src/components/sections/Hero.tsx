import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full max-w-[1197px] mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
                <div className="bg-[#ECEFFE] text-[#303030] rounded-full px-4 py-1.5 flex items-center gap-2 text-sm font-medium mb-8">
                    <div className="flex -space-x-2">
                        <Image src="/img/avatar-1.svg" alt="Avatar" width={30} height={30} className="rounded-full border-2 border-white" />
                        <Image src="/img/avatar-2.svg" alt="Avatar" width={30} height={30} className="rounded-full border-2 border-white" />
                        <Image src="/img/avatar-3.svg" alt="Avatar" width={30} height={30} className="rounded-full border-2 border-white" />
                        <Image src="/img/avatar-4.svg" alt="Avatar" width={30} height={30} className="rounded-full border-2 border-white" />
                    </div>
                    <span>2,153 Spot remaining</span>
                </div>

                <h1 className="text-5xl lg:text-[62px] text-gray-900 mb-6">
                    <span className="text-[#5A42DE] font-cherry-bomb-one">Ca$h Gifts</span> <img src="/img/gift-icon.svg" alt="" className="inline-block -ml-4 -mt-4" />
                    <span className="font-br-firma font-bold">That Feel Like Opening A Present</span>
                </h1>

                <p className="text-[18px] font-br-firma text-[#18181B] mb-10">
                    Send money that unlocks on any special day. They'll count down the days, experience the surprise, and remember this moment forever.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="px-8 h-[48px] bg-white text-[#5A42DE] border text-[18px] font-bold border-[#5A42DE] rounded-[8px] font-semibold hover:bg-purple-50 transition-colors">
                        Learn More
                    </button>
                    <button className="px-8 h-[48px] bg-[#5A42DE] text-white text-[18px] font-bold rounded-[8px] font-semibold">
                        Join the wait list
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 mx-auto">
                    <Image
                        src="/img/hero-img.svg"
                        alt="Person enjoying a gift"
                        width={572}
                        height={534}
                        className="w-[572px] h-[534px] object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
