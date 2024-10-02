"use client";
import React, { useState } from "react";
import Image from "next/image";
import LaptopImage from "./img/laptop.svg";
import { CourseHeader } from "./components/organisms/HeaderComponent";
import { CourseDetailsList } from "./components/organisms/DetailList";
import { IconsSection } from "./components/organisms/IconsSection";
import { FooterButtons } from "./components/organisms/FooterComponent";
import { motion } from "framer-motion";

export default function AnimationDiv() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`relative overflow-hidden pt-6 pl-[60px] pb-[65px] bg-black transition-colors duration-300 ${
        isHovered ? "text-black" : "text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <section className="flex justify-between relative z-20">
        <div>
          <CourseHeader />
          <CourseDetailsList />
        </div>
        <div>
          <Image src={LaptopImage} width={302} height={329} alt="img" />
        </div>
      </section>

      <section className="flex justify-between pt-[72px] relative z-20">
        <IconsSection isHovered={isHovered} />
        <FooterButtons />
      </section>

      <motion.div
        className={`absolute bottom-0 left-0 w-full h-full transition-all duration-1000 ease-in-out z-10 ${
          isHovered ? "clip-path-full" : "clip-path-initial"
        }`}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: "white",
          clipPath: isHovered
            ? "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)"
            : "polygon(68% 49%, 89% 83%, 100% 100%, 76% 100%)",
        }}
      />
    </section>
  );
}
