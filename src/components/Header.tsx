import {HomeIcon, File, UsersRound, Map, MapPin, Lightbulb, LogOut} from  'lucide-react'
import Link from 'next/link'
import { NavButton } from '@/components/ui/NavButton'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Button  } from '@/components/ui/button'    



export function Header() {
    return (
        <header className='navbar animate-slide h-20 p-2 border-b sticky top-0 z-20'>
            <div className='flex h-8 items-center justify-between w-full'>
                <div className=' flex items center gap-2'>
                    <NavButton href="/"
                    label="Home"
                    icon={HomeIcon} />
                    <Link href="/home" className="flex justify-ceneter items-center gap-2 ml-0" title="home">
                    <h1 className='hiddent sm:block text-xl font-bold m-0 mt-1'>Majestic7Guesthouse</h1>
                    </Link>
                    </div>
                <div className='flex items-center '>
                    <NavButton href="/getting-here"
                    label="Getting Here"
                    icon={MapPin} />

                    <NavButton href="/tips-and-guides"
                    label="Tips & Guides"
                    icon={Lightbulb} />

                    <NavButton href="/guests"
                    label="Guests"
                    icon={UsersRound} />

                    <Button 
                    variant="ghost"
                    size = "icon"
                    aria-label="LogOut"
                    title="LogOut"
                    className='rounded=full' 
                    asChild>
                    <LogoutLink>
                        <LogOut />
                    </LogoutLink>

                        </Button>


                </div>

            </div>
        </header>
    )
}