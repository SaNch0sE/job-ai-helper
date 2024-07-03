import type { NextAuthConfig } from "next-auth"
import oidcProvider from "./services/auth/oidc-provider"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [oidcProvider],
} satisfies NextAuthConfig