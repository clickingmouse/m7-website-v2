import React from "react";
import TeaserCard from "./TeaserCard";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
interface Teaser{
    id: string,
    title: string,
    image:string,
    //description:string,
    subtitle:string,
    link:string
} 

async function fetchTeaser(): Promise<Teaser[]> {
    const res = await fetch('http://localhost:4000/teasers');
    //const data = await res.json();
    //console.log(res);
    return res.json();    
}

export default async function  Teaser() {
    const teasers = await fetchTeaser();
    
    console.log(teasers);

    return (
        <>
        <section className="">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
                {teasers.map((teaser) => (
                    <TeaserCard key ={teaser.id}
                    title={teaser.title}
                    image={`/images/teasers/${teaser.image}`  }
                    //description={teaser.description}
                    subtitle={teaser.subtitle}
                    link={teaser.link}
                    />

                ))}
            </div>
        </section>
        </>
    )
}