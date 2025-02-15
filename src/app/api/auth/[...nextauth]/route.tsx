// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
   
        const user = { email: "msa@gmail.com", password: "password123" };

        if (credentials?.email === user.email && credentials?.password === user.password) {
          return { id: 1, name: "User", email: user.email };
        }
        return null; // Invalid credentials
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT tokens for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // Define custom login page
    error: "/auth/error",  // Optional: Custom error page
  },
});

export { handler as GET, handler as POST };
