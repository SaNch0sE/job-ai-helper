import { drizzle } from "drizzle-orm/node-postgres"
import { project } from "./schema/project";
import { history } from "./schema/history";
import { user } from "./schema/user";
import { account } from "./schema/account";
import { sessions } from "./schema/session";
import { verificationTokens } from "./schema/verification-token";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL as string,
});

export const dbService = drizzle(pool, {
  schema: {
    project,
    history,
    user,
    account,
    sessions,
    verificationTokens,
  }
})