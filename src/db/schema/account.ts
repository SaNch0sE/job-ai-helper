import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'
import { user } from './user'
import { AdapterAccountType } from 'next-auth/adapters'

export const account = pgTable(
  'Account',
  {
    userid: text('id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provoder').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),

    createdAt: timestamp('dateCreated', { mode: 'date' }).notNull().defaultNow(),
    updatedAt: timestamp('dateModified', { mode: 'date' }).notNull().defaultNow(),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)
