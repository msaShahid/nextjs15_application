"use client";
//import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
 // const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            MD28
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={isActive("/") ? "text-gray-400 font-bold" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about") ? "text-gray-400 font-bold" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link href="/service" className={isActive("/service") ? "text-gray-400 font-bold" : ""}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact") ? "text-gray-400 font-bold" : ""}>
              Contact
            </Link>
          </li>
          {/* <li>
            {session ? (
              <>
                <span className="mr-4">Welcome, {session.user?.name || "User"}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className={isActive("/login") ? "text-gray-400 font-bold" : ""}>
                Login
              </Link>
            )}
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
