import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import calendar from "../../img/calendar.svg";
import clock from "../../img/clock.svg";
import aim from "../../img/scope.svg";
import pricetag from "../../img/cost.svg";

export const IconsSection = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className={`flex gap-5 transition-transform duration-300 ${isHovered ? "transform translate-y-[-20px]" : ""}`}>
      <motion.div whileHover={{ translateY: 20 }} transition={{ duration: 0.3 }}>
        <Image src={calendar} width={30} height={30} alt="calendar" />
        <h2 className="pt-[10px] text-[16px] leading-normal font">
          კურსის ხანგრძლივობა<br />
          <span className="text-[12px] leading-normal font-medium uppercase">10 თვე</span>
        </h2>
      </motion.div>
      <motion.div whileHover={{ translateY: 20 }} transition={{ duration: 0.3 }}>
        <Image src={clock} width={30} height={30} alt="clock" />
        <h2 className="pt-[10px] text-[16px] leading-normal font-medium">შეხვედრების რაოდენობა</h2>
        <h3 className="text-[12px] leading-normal font-medium">100 შეხვედრა</h3>
      </motion.div>
      <motion.div whileHover={{ translateY: 20 }} transition={{ duration: 0.3 }}>
        <Image src={aim} width={30} height={30} alt="aim" />
        <h2 className="pt-[10px] text-[16px] leading-normal font-medium">კურსის მიზანი</h2>
        <h3 className="w-[300px] text-[12px] leading-normal font-medium">
          კურსის მიზანია მსმენელი გახდეს Junior Full Stack დეველოპერი
        </h3>
      </motion.div>
      <motion.div whileHover={{ translateY: 20 }} transition={{ duration: 0.3 }}>
        <Image src={pricetag} width={30} height={30} alt="pricetag" />
        <h2 className="pt-[10px] text-[16px] leading-normal font-medium">საფასური</h2>
        <h3 className="text-[12px] leading-normal font-medium">700 ₾</h3>
      </motion.div>
    </div>
  );
};
