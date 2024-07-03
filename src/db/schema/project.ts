import {
  index,
  pgTable,
  text,
  timestamp,
  vector,
  serial,
} from 'drizzle-orm/pg-core';

export const project = pgTable(
  'Projects',
  {
    id: serial('id')
      .primaryKey()
      .notNull(),
    name: text('name').notNull(),
    description: text('type1').notNull(),
    features: text('features'),
    techstack: text('techstack'),
    links: text('links'),
    embedding: vector('embedding', { dimensions: 1536 }),
    dateCreated: timestamp('dateCreated', { mode: 'date' }).notNull().defaultNow(),
    dateModified: timestamp('dateModified', { mode: 'date' }).notNull().defaultNow(),
  },
  (table) => ({
    embeddingIndex: index().using(
      'hnsw',
      table.embedding.op('vector_cosine_ops')
    ),
  })
)

export type SelectProject = typeof project.$inferSelect
