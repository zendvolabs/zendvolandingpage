import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
            <div className="max-w-[1197px] mx-auto px-6 h-20 flex items-center justify-between mt-4 shadow-lg rounded-lg">
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

                <button className="px-4 h-[40px] text-[18px] flex items-center justify-center bg-[#5A42DE] text-white rounded-[8px] font-br-firma font-bold transition-colors">
                    Join the wait list
                </button>
            </div>
        </header>
    );
}
