import {getGuest} from "@/lib/queries/getGuests"
import { BackButton } from "@/components/ui/BackButton";

export default async function GuestFormPage({
    params
}: {
    params: Promise <{[key: string]: string | undefined}>
}){
    try {
        const {guestId} = await params;
        // edit form
        if (guestId) {
            const guest = await getGuest(parseInt(guestId));

            if (!guest) {
                return <h2>Guest not found</h2>;
                <BackButton title="Go Back" variant="default"/>;
            }
        }
        console.log("Guest ID:", guestId);
        //const guestId = id ? parseInt(id) : null;
}catch (e ) {
    if (e instanceof Error) {
        console.error("Error in GuestFormPage:", e.message);
    }}
    return (
        <div>
            Guest Form Page
        </div>
    )
}
    
 