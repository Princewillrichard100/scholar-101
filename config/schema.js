
import { pgTable, serial, varchar, boolean, timestamp, json } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  isMember:boolean().default(true),
  email: varchar({ length: 255 }).notNull().unique(),
});    

export const STUDY_MATERIAL_TABLE = pgTable("study_material", {
  id: serial().primaryKey(),
  courseID: varchar({ length: 255 }).notNull(),
  courseType: varchar(),
  topic: varchar().notNull(),
  difficultyLevel: varchar().default("Easy"), 
  courseLayout:json(),
  createdBy: varchar().notNull(),
  status: varchar().default("Generating"),

});


