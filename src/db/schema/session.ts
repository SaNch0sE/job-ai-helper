import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const sessions = pgTable(
  "Session",
  {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  }
)