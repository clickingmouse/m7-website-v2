import {db} from "@/db"
import {tips} from "@/db/schema"
import {eq} from "drizzle-orm"

export async function getTip(id: number) {
    const tip = await db.select()
        .from(tips)
        .where(eq(tips.id, id))
    return tip[0]
}