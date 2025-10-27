import {pgTable, serial, varchar, boolean, timestamp, integer, text, PgEnum, PgBinaryVector,} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm/relations';

export const guests = pgTable('guests', {
    id: serial('id').primaryKey(),
    firstName: varchar('first_name', {length: 100}).notNull(),
    lastName: varchar('last_name', {length: 100}).notNull(),
    email: varchar('email', {length: 255}).notNull().unique(),
    phoneNumber: varchar('phone_number', {length: 20}),
    country: varchar('country', {length: 100}),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull().$onUpdate(()=> new Date()),
    //
    bookingChannel : varchar('booking_channel', {length:20}),
});

export const tips = pgTable("tips", {
    id:serial("id").primaryKey(),
    guestId: integer("guest_id)").notNull().references(()=>guests.id),

    title:varchar("title").notNull(),
    description: text("description"),
    approved:boolean("approveed").notNull().default(false),
    likes:integer("likes").notNull().default(0),


    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull().$onUpdate(()=> new Date()),
    //
})

export const guestsTips = relations(guests, 
    ({many}) =>({
        tips: many(tips ),
    })
)

export const tipsRelations = relations(tips,
    ({one}) =>({
        guest: one(guests,{
            fields:[tips.guestId],
            references: [guests.id]
        })
    })
)
