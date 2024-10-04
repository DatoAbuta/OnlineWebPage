import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React from "react";

export const IconCard = ({
  imgSrc,
  altText,
  title,
  subTitle,
  widthClass,
}: {
  imgSrc: StaticImageData;
  altText: string;
  title: string;
  subTitle: string;
  widthClass?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: 15 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center text-center"
    >
      <Image src={imgSrc} width={32} height={32} alt={altText} />
      <h2 className="mt-3 text-lg font-semibold">{title}</h2>
      <h3 className={`${widthClass || ""} mt-1 text-xs font-medium uppercase`}>
        {subTitle}
      </h3>
    </motion.div>
  );
};
