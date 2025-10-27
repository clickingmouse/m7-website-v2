import Image from "next/image";
import Hero from "@/components/Hero/Hero";
export default function Home() {
return (<>     
{/*<div className="bg-[image:var(--home-hero)] bg-cover bg-center">*/}
<div>
  <Hero/>

<main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

  
  <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/70 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
    <h1 className="text-4xl font-bold">Welcom</h1>
  </div>
</main>
</div>
</>)

}
