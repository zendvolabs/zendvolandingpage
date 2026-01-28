import { AppleStore, PlayStoreIcon } from "@/assets/Svg";
import Image from "next/image";
import ScreenImage from "../../../public/img/Screen.png"
import BgImg from "../../../public/img/cta-banner.png"

export const CtaBanner = () => {
  return (
    <section className="px-5 pt-25 pb-16 bg-[#F7F6F8] md:pt-50 md:pb-50 ">
      <div
        style={{
          backgroundImage: `url('${BgImg.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="max-w-300 mx-auto px-5 md:px-10 pt-6 lg:px-15 md:pt-12  lg:pt-26.5 flex flex-col md:flex-row md:items-start justify-between items-center rounded-3xl md:rounded-4xl bg-linear-to-b from-12% from-[#5A42DE] to-83 to-[#432FB1] gap-11 md:gap-0 lg:gap-11 "
      >
        <div className="space-y-6">
          <div className="space-y-1 mt-5">
            <h6 className="text-2xl lg:text-[2.5rem] lg:leading-14 font-bold text-white leading-8">
              Stop Sending Forgettable Transfers
            </h6>
            <p className="text-xs md:text-sm lg:text-lg font-medium text-white">
              Join 2,847 people who are ready to make every gift unforgettable
            </p>
          </div>

          <div className="flex gap-4.5">
            <button>
              <PlayStoreIcon />
            </button>
            <button>
              <AppleStore />
            </button>
          </div>
        </div>
        <div>
          <Image
            src={ScreenImage.src}
            width={ScreenImage.width}
            height={ScreenImage.height}
            blurDataURL={ScreenImage.blurDataURL}
            alt="blank dark phone screen "
          />
        </div>
      </div>
    </section>
  );
};
