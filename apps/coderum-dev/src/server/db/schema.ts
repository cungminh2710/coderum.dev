// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm';
import { int, sqliteTableCreator, text } from 'drizzle-orm/sqlite-core';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `coderum-dev_${name}`);

export const userTable = createTable('user', {
	id: text('id').notNull().primaryKey(),
	githubId: int('githubId').unique(),
	username: text('username', { mode: 'text', length: 64 }).notNull().unique(),
	createdAt: int('createdAt', { mode: 'timestamp' }).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: int('updatedAt', { mode: 'timestamp' }),
});

export const sessionTable = createTable('session', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id),
	expiresAt: int('expires_at').notNull(),
});
