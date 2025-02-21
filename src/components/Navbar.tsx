import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';

const Navbar = () => {
  
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">MD28</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
          {session ? (
            <>
              <span>Welcome, {session.user?.name}</span>
              <button onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
