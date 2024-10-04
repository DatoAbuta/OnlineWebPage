import React from "react";
import calendar from "../../img/calendar.svg";
import clock from "../../img/clock.svg";
import aim from "../../img/scope.svg";
import pricetag from "../../img/cost.svg";
import { IconCard } from "../molecules/IconCard";

export const IconsSection = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className={`flex gap-6 transform transition-all duration-300 ${isHovered ? "translate-y-[-15px]" : ""}`}>
      <IconCard imgSrc={calendar} altText="კალენდარი" title="კურსის ხანგრძლივობა" subTitle="10 თვე" />
      <IconCard imgSrc={clock} altText="საათი" title="შეხვედრების რაოდენობა" subTitle="100 შეხვედრა" />
      <IconCard
        imgSrc={aim}
        altText="მიზანი"
        title="კურსის მიზანი"
        subTitle="კურსის მიზანია მსმენელი გახდეს Junior Full Stack დეველოპერი"
        widthClass="w-[320px]"
      />
      <IconCard imgSrc={pricetag} altText="ფასის ნიშნული" title="საფასური" subTitle="700 ₾" />
    </div>
  );
};