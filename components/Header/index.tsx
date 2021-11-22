import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
// import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="">
        <nav className="container items-center py-3 sm:my-5 ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <p className="font-semibold text-blue-900 cursor-pointer">Mahendar Blog</p>
            </Link>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-port-blue uppercase text-xs ">
              <Link href="/users">
                <li className="cursor-pointer bg-white text-blue-900 font-bold px-5 py-3 hover:bg-gray-600 hover:text-port-white rounded-md">
                  My Profile
                </li>
              </Link>
              <Link href="/users">
                <li className="cursor-pointer bg-white text-blue-900 font-bold px-5 py-3 hover:bg-gray-600 hover:text-port-white rounded-md">
                  My Application
                </li>
              </Link>
              <Link href="/blog">
                <li className="cursor-pointer bg-white text-blue-900 font-bold px-5 py-3 hover:bg-gray-600 hover:text-port-white rounded-md">
                  Contact Me
                </li>
              </Link>
              <button
                className="bg-port-dark text-white font-bold rounded-md px-7 py-3"
                type="button"
              >
                Login
              </button>
            </ul>
            <div className="flex sm:hidden flex-1 justify-end">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
