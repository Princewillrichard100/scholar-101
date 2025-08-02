
import { pgTable, serial, text, varchar,boolean } from "drizzle-orm/pg-core";


export const USER_TABLE = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  isMember:boolean().default(false),
  email: varchar({ length: 255 }).notNull().unique(),
});    
