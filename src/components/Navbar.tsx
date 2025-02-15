"use client"; 

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
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
    </nav>
  );
};

export default Navbar;
