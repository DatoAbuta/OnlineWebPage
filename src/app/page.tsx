"use client";
import React, { useState } from "react";
import Image from "next/image";
import LaptopImage from './img/laptop.svg';
import { CourseHeader } from "./components/organisms/HeaderComponent";
import { CourseDetailsList } from "./components/organisms/DetailList";
import { IconsSection } from "./components/organisms/IconsSection";
import { FooterButtons } from "./components/organisms/FooterComponent";
import { motion } from "framer-motion";

export default function InteractiveSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`relative overflow-hidden py-6 px-16 bg-black transition-colors ease-in-out duration-300 ${
        isHovered ? "text-black" : "text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between relative z-20">
        <div>
          <CourseHeader />
          <CourseDetailsList />
        </div>
        <div>
          <Image src={LaptopImage} width={302} height={329} alt="Laptop Image" />
        </div>
      </div>

      <div className="flex justify-between pt-16 relative z-20">
        <IconsSection isHovered={isHovered} />
        <FooterButtons />
      </div>

      <motion.div
        className={`absolute inset-0 transition-all duration-500 ease-in-out z-10`}
        initial={{ clipPath: "polygon(69% 47%, 100% 91%, 100% 100%, 78% 100%)" }}
        animate={{
          clipPath: isHovered
            ? [
                "polygon(69% 47%, 100% 91%, 100% 100%, 78% 100%)",
                "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              ]
            : "polygon(69% 47%, 100% 91%, 100% 100%, 78% 100%)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1]
        }}
        style={{
          backgroundColor: "white",
        }}
      />
    </section>
  );
}
