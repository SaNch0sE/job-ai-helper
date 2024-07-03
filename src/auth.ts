import NextAuth from "next-auth"
import authConfig from "./auth.config";
import dbAdapter from "./services/auth/db-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: dbAdapter,
  session: { strategy: 'jwt' },
  ...authConfig,
});
