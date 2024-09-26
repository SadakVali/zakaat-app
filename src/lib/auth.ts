import { prisma } from "@/db";
import env from "@/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.github.AUTH_GITHUB_ID,
      clientSecret: env.github.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: env.google.AUTH_GOOGLE_ID,
      clientSecret: env.google.AUTH_GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: env.twitter.AUTH_TWITTER_ID,
      clientSecret: env.twitter.AUTH_TWITTER_SECRET,
    }),
  ],
  secret: env.jwtToken.AUTH_SECRET,
};
