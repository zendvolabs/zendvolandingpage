import { CopyIcon, Instagram, MessageIcon, Telegram, TicTokIcon, Twitter, WhatsAppIcon } from "@/assets/Svg"
import Image from "next/image";
import Link from "next/link"

export const Footer =()=>{
  return (
    <footer>
      <div className="max-w-300 mx-auto gap-12  lg:py-15 flex-col xl:flex-row flex justify-between px-4 md:px-8 xl:px-0 ">
        <div className="xl:max-w-61 space-y-4.25">
          <div className="space-y-2.5">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-2"
            >
              <Image
                src="/img/logo.svg"
                alt="Zendvo Logo"
                width={32}
                height={32}
              />
              <span className="text-gray-900">Zendvo</span>
            </Link>
            <p className="text-xs text-[#71717A]">
              Built with 💝 for everyone who knows that how you give matters as
              much as what you give.
            </p>
          </div>
          <p className="text-[#18181B] font-bold ">
            &copy; 2026 Vaultly. Making money transfers unforgettable.
          </p>
        </div>
        <div className="space-y-4  xl:hidden">
          <p className="text-base font-bold text-[#1F2937] leading-6">
            Community
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <MessageIcon />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <Telegram />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <WhatsAppIcon />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <Instagram />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <TicTokIcon />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <Twitter />
            </Link>
          </div>
        </div>
        <div className="md:flex flex-1 grid-cols-2 gap-12 justify-between grid">
          <div className="space-y-4">
            <p className="text-base font-bold text-[#1F2937] leading-6">
              company
            </p>
            <ul className="font-medium text-sm text-[#374151] space-y-4  ">
              <li>
                <Link href="">About Vaultly</Link>
              </li>
              <li>
                <Link href="">Our Stor</Link>
              </li>
              <li>
                <Link href="">Top Raises</Link>
              </li>
              <li>
                <Link href="">Why We Built This</Link>
              </li>
              <li>
                <Link href="">
                  Careers{" "}
                  <span className="text-[#2563EB]"> (We're Hiring!)</span>
                </Link>
              </li>
              <li>
                <Link href="">Press Kit</Link>
              </li>
              <li>
                <Link href="">Brand Assets</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-base font-bold text-[#1F2937] leading-6">
              Product
            </p>
            <ul className="font-medium text-sm text-[#374151] space-y-4  ">
              <li>
                <Link href="">How It Works</Link>
              </li>
              <li>
                <Link href="">Features</Link>
              </li>
              <li>
                <Link href="">Pricing</Link>
              </li>
              <li>
                <Link href="">Supported Countries</Link>
              </li>
              <li>
                <Link href="">Roadmap</Link>
              </li>
              <li>
                <Link href="">Coming Soon</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-base font-bold text-[#1F2937] leading-6">
              Support
            </p>
            <ul className="font-medium text-sm text-[#374151] space-y-4  ">
              <li>
                <Link href="">Help Center </Link>
              </li>
              <li>
                <Link href="">Contact Us </Link>
              </li>
              <li>
                <p>
                  Email: <br />{" "}
                  <span className="text-[#5A42DE] items-center flex gap-2 font-medium">
                    hello@vaultly.app{" "}
                    <button>
                      <CopyIcon />
                    </button>{" "}
                  </span>{" "}
                </p>
              </li>
              <li>
                <p>
                  WhatsApp Support: <br />{" "}
                  <span className="text-[#5A42DE] items-center flex gap-2 font-medium">
                    {" "}
                    +234 8112345678{" "}
                    <button>
                      <CopyIcon />
                    </button>
                  </span>
                </p>
              </li>
              <li>
                <Link href="">FAQ</Link>
              </li>
              <li>
                <Link href="">Report an Issue</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-base font-bold text-[#1F2937] leading-6">
              Legal
            </p>
            <ul className="font-medium text-nowrap hover:opacity-95 text-sm text-[#374151] space-y-4  ">
              <li>
                <Link href="">Terms of Service </Link>
              </li>
              <li>
                <Link href="">Privacy Policy </Link>
              </li>
              <li>
                <Link href="">Security & Safety</Link>
              </li>
              <li>
                <Link href="">Refund Policy</Link>
              </li>
              <li>
                <Link href="">Roadmap</Link>
              </li>
              <li>
                <Link href="">Cookie Policy</Link>
              </li>
              <li>
                <Link href="">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 hidden xl:block">
          <p className="text-base font-bold text-[#1F2937] leading-6">
            Community
          </p>
          <div className="flex md:max-w-40 gap-2 flex-wrap">
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <MessageIcon />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <Telegram />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <WhatsAppIcon />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <Instagram />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <TicTokIcon />
            </Link>
            <Link
              href=""
              className="bg-[#5A42DE] hover:opacity-85 transition-all ease-in-out duration-300 hover:scale-110 size-8 rounded-full flex items-center justify-center"
            >
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}