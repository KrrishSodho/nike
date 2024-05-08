"use client";

import { arrowRight } from "../assets/icons";
import Button from "@/components/Button";
import { shoes, statistics } from "@/constants.ts";
import Image from "next/image";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className=" w-full flex 
      xl:flex-row flex-col 
      justify-center min-h-screen 
      gap-10 max-container
      "
    >
      <div
        className="relative 
      xl:w-2/5 flex flex-col 
      justify-center items-start 
      w-full max-xl:padding-x pt-28"
      >
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>
        <p className="font-montserrat leading-8 sm:max-w-sm text-slate-gray text-lg mt-6 mb-14">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-16">
          {statistics.map((stats, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stats.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          alt="Header Shoe Image"
          src={bigShoeImg}
          height={502}
          width={610}
          className=" relative z-10 object-contain"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imageURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
