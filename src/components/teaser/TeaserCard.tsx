import React from "react"
import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface TeaserCardProps{
    title: string,
    image:string,
    //description:string,
    subtitle:string,
    link:string
} 

export default function TeaserCard({
    title,
    image,
    //description,
    subtitle,
    link
}: TeaserCardProps) {
    return (
        <Card className="  flex flex-col justify-start pt-0 mt-0">
            <CardHeader className="hidden">

            </CardHeader>
            <CardContent className="px-0" >
                <Image 
                src={image} 
                alt={title}
                 width={500}
                 height={500}
                 quality={80}
                //fill
                style={{
            objectFit: 'cover', // cover, contain, none
            width: '100%',
            //borderRadius: '0.375rem, 0.375rem, 0 0' // Tailwind's rounded-md
            borderRadius: '15px 15px 0 0'
          }}
                //className="w-full h-48 object-cover rounded-md"
                />
            </CardContent>
            <CardFooter className="flex flex-col justify-start" >
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>

            </CardFooter>
        </Card>
    )
}   

//        <Card className="hover:scale-105 transition-transform flex flex-col">