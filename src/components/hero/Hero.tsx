import React from "react";
import Image from "next/image";
const IMAGE_PATH = "/images/home-hero-tst.jpg";
import Link from "next/link";

export function Hero () {
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
            objectFit="cover"
            objectPosition="center"
            fill
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
              target="_blank"
              className=" rounded-full py-2 px-3 uppercase text-4xl font-bold cursor-pointer tracking-wide text-white
          border-orange-600 border-2 bg-orange-700 pointer-events-auto
          "
            >
              Book
            </Link>
            <h2
              className="mx-1 text-white text-5xl  font-bold "
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