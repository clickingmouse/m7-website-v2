import {db} from "@/db"
import {guests} from "@/db/schema"
import {eq} from "drizzle-orm"

export async function getGuest(id: number) {
    const guest = await db.select()
        .from(guests)
        .where(eq(guests.id, id))
    return guest[0]
}