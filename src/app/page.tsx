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
        className={`absolute inset-0 transition-all duration-1000 ease-in-out z-10 ${
          isHovered ? "clip-path-full" : "clip-path-initial"
        }`}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: "white",
          clipPath: isHovered
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(65% 49%, 86% 80%, 100% 100%, 75% 100%)",
        }}
      />
    </section>
  );
}
