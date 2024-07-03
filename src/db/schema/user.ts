import {
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'
import { randomUUID } from 'crypto'

export const user = pgTable(
  'User',
  {
    id: text('id')
      .primaryKey()
      .notNull()
      .$defaultFn(() => randomUUID()),
    name: text('name'),
    email: text('email').unique().notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
    createdAt: timestamp('createdAt', { mode: 'date' }).notNull().defaultNow(),
    updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull().defaultNow(),
  }
)

export type SelectUser = typeof user.$inferSelect
