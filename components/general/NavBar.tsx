import Image from "next/image";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";
import HamburgerMenu from "./HamburgerMenu";

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-7 py-5 lg:px-15 lg:py-10">
      <div className="flex items-center justify-between relative z-40">
        {/* Logo */}
        <Image src="/logowhite.webp" alt="Logo" height={320} width={300} />

        {/* Desktop Links */}
        <div
          className={`hidden sm:flex gap-6 mt-[-25px] text-white ${sourceSansPro.className}`}
        >
          <Link className="text-md font-medium link-hover-underline" href="/">
            HOME
          </Link>
          <Link className="text-md font-medium link-hover-underline" href="/">
            LISTINGS
          </Link>
          <Link className="text-md font-medium link-hover-underline" href="/">
            LET'S MOVE
          </Link>
          <Link className="text-md font-medium link-hover-underline" href="/">
            ABOUT US
          </Link>
        </div>
      </div>

      <HamburgerMenu />
    </nav>
  );
};

export default NavBar;
