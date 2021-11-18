import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <nav className="container items-center py-4 mt-4 sm:mt-12 ">
          <div className="flex justify-between">
            <Link href="/">
              <p className="font-semibold text-gray-600 cursor-pointer">Mahend's Blog </p>
            </Link>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-port-blue uppercase text-xs ">
              <Link href="/users">
                <li className="cursor-pointer">My Profile</li>
              </Link>
              <Link href="/users">
                <li className="cursor-pointer">My Application</li>
              </Link>
              <Link href="/blog">
                <li className="cursor-pointer">Contact Me</li>
              </Link>
              <button className="bg-port-red text-white rounded-md px-7 py-3" type="button">
                Login
              </button>
            </ul>
            <div className="flex sm:hidden flex-1 justify-end">
              <i className="text-2xl fas fa-bars"> </i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
