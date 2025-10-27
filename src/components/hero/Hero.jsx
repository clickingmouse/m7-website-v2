import React from "react";
import Image from "next/image";
//import Button from "next/Button";
const IMAGE_PATH = "/images/home-hero-tst.jpg";
//import styles from "./hero.css";
import Link from "next/link";
//const { heroContent, heroWrapper, imageWrapper } = styles;

//todo
// hero banner - family Cardo
// - color
//- placement
// - addd button

// hero image size
//background-image: url(&quot;https://cdn.durable.co/covers/29mRoVDSTnpcnBPAcO8PivXew8K98dpUCZH9AB4T57OcEXDd80oj1JG7iaIV1KdH.jpg&quot;); background-position: center center; background-size: cover;

// add overlay visocity - done
// solid text - done
// move text ...

//background-color: rgb(62, 139, 166); opacity: 0.7;

// hero content
//relative z-10 flex justify-center flex-none break-word transition-all duration-300 pointer-events-none items-center fix-safari-flickering
//absolute inset-0 z-5 transition-all duration-300
//relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-12 lg:pt-40 pb-12 lg:pb-40

export default function Hero() {
  return (
    <>
      <div
        className="heroWrapper z-10  relative  flex flex-col bg-white "
        style={{ height: "60vh" }}
      >
        <div className=" imageWrapper bg-red overflow-hidden ">
          <Image
            priority
            src={IMAGE_PATH}
            //layout="fill"

            objectFit="cover"
            objectPosition="center"
            fill
            // width={0}
            // height={0}
            // sizes="100vw"
            // style={{ width: '100%', height: 'auto',  zIndex: "-1" }} // optional
            className="object-contain  max-w-full b z-0"
            style={{ clipPath: "ellipse(120% 90% at 50% 0)" }}
            alt="hero image example "
          />
        </div>

        {/**overlay */}
        <div
          className="  absolute w-full h-full z-10"
          style={{
            backgroundColor: "#3E8BA6",
            opacity: "0.7",
            clipPath: "ellipse(120% 90% at 50% 0)",
          }}
        ></div>

        <div className="flex flex-wrap flex-col justify-center items-start content-start  absolute w-full h-full  heroContent  z-50  mx-auto px-5 md:px-6 transition-all duration-300 pt-12 lg:pt-40 pb-12 lg:pb-40 ">
          <div className="flex flex-row justify-center content-center">
            <Link
              href="https://hotels.cloudbeds.com/reservation/IOlzSh"
              //passHref={true}
              el="noopener noreferrer"
              target="_blank"
              className=" rounded-full py-2 px-3 uppercase text-4xl font-bold cursor-pointer tracking-wide text-white
          border-orange-600 border-2 bg-orange-700 pointer-events-auto
          "
            >
              Book
            </Link>
            <h2
              className="mx-1 text-white text-5xl font-semibold font-bold "
              style={{ opacity: "1" }}
            >
              {" "}
              a stay with us!
            </h2>
          </div>
          <p className=" self-start text-white text-2xl font-semibold font-hero-700 ">
            {" "}
            & experience the vibe of Tsim Sha Tsui
          </p>
        </div>
      </div>
    </>
  );
}

//gap-40

{
  /* <div className='z-30' style={{
  width: "100%",
  height: "250px",
  background: "linear-gradient(to bottom,blue 50%,red 0px)",
  //padding: 20px 0";
  overflow: "hidden",
  //paddingBottom:"20px",

  //<path d="M0 0 C676 82 676 82 1352 0 L1352 0 L0 0" transform="translate(0, 629)" fill="transparent"></path>
}}>
<div className='z-40'style={{
//#ellipse {
float: "",
width: "100%",
height: "15%",
//margin: "20px",
shapeOutside: "ellipse(80% 90% at 50% 0)",
clipPath: "ellipse(80% 90% at 50% 0)",
background: "lightblue"
//}

}}></div>

</div> */
}
