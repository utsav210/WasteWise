import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma), 
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
callbacks: {
  async signIn({ user, account, profile }) {
    try {
      if (!user?.email) return false; // Ensure the user has an email

      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        // Create a new user if not exists
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
            // provider: account?.provider,
          },
        });
      }

      return true; // Allow login
    } catch (e) {
      console.log(e);
      return false; // Deny login on error
    }
  },
  async session({ session, user }) {
    try {
      if (session?.user && user?.id) {
        session.user.id = user.id; // Attach user ID to session
      }
      return session;
    } catch (e) {
      console.log(e);
      return session; // Return session even on error
    }
  },
},
});
