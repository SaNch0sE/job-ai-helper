import {
  integer,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'

export const history = pgTable(
  'History',
  {
    id: integer('id')
      .primaryKey()
      .notNull(),
    prompt: text('prompt').notNull(),
    response: text('response').notNull(),
    dateCreated: timestamp('dateCreated', { mode: 'date' }).notNull().defaultNow(),
  }
)

export type SelectHistory = typeof history.$inferSelect
