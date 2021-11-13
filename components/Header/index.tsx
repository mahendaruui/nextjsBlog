import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <nav className="container items-center py-4 mt-4 sm:mt-12 ">
          <div className="flex justify-between">
            <Link href="/">
              <Image className="" src="/imgs/logo-bookmark.svg" width="100%" height="100%" layout="intrinsic" objectFit="contain" />
            </Link>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-port-blue uppercase text-xs ">
              <Link href="/users" ><li className="cursor-pointer">Feature</li></Link>
              <Link href="/users"><li className="cursor-pointer">Pricing</li></Link>
              <Link href="/blog"><li className="cursor-pointer">Contact</li></Link>
              <button className="bg-port-red text-white rounded-md px-7 py-3" type="button">
                Login
              </button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
