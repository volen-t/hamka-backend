import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const shelves = pgTable("shelves", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const yarns = pgTable("yarns", {
  id: serial("id").primaryKey(),
  brand: text("brand").notNull(),
  code: text("code").notNull(),,
  thickness: text("thickness").notNull(),
  quantity: integer("quantity").notNull(),
  shelfId: integer("shelf_id")
    .references(() => shelves.id)
    .notNull(),
});
