import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
            <div className="max-w-[1197px] mx-auto px-6 h-20 flex items-center justify-between lg:mt-4 shadow-none lg:shadow-lg rounded-lg">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                        <Image src="/img/logo.svg" alt="Zendvo Logo" width={32} height={32} />
                        <span className="text-gray-900">Zendvo</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8 font-work-sans font-medium text-[#1F2937]">
                    <Link href="#">Community</Link>
                    <Link href="#">How it works</Link>
                    <Link href="#">Contact</Link>
                </nav>

                <button className="hidden md:flex px-4 h-[40px] text-[18px] items-center justify-center bg-[#5A42DE] text-white rounded-[8px] font-br-firma font-bold transition-colors">
                    Join the wait list
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-[#1F2937]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
