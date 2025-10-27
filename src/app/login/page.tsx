import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


import { Button } from "@/components/ui/button";


{/* <LoginLink>Sign in</LoginLink>

<RegisterLink>Sign up</RegisterLink> */}

export default function LoginPage() {
    return(
        <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
            <h1>Majestic 7 Guesthouse</h1>
            <Button asChild>
                <LoginLink>Sign in</LoginLink>
            </Button>

        </main>
    )}