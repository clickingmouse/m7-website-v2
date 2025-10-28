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
        <Card className="  flex flex-col justify-between">
            <CardHeader>

            </CardHeader>
            <CardContent>
                <Image 
                src={image} 
                alt={title}
                 width={500}
                 height={500}
                 quality={80}
                //fill
                style={{
            objectFit: 'cover', // cover, contain, none
            width: '100%'
          }}
                //className="w-full h-48 object-cover rounded-md"
                />
            </CardContent>
            <CardFooter>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>

            </CardFooter>
        </Card>
    )
}   

//        <Card className="hover:scale-105 transition-transform flex flex-col">