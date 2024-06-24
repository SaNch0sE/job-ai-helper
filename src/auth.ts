import NextAuth from "next-auth"
import oidcProvider from "./services/auth/oidc-provider"
import prismaAdapter from "./services/auth/prisma-adapter"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: prismaAdapter,
  providers: [oidcProvider],
});
