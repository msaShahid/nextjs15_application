// pages/dashboard.js
"use client"
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      // Redirect to login if no session exists
      router.push("/auth/login");
    }
  }, [session, router]); 

  if (!session) {
    return <div>Loading...</div>; // You can show a loading state while the session is being checked
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
