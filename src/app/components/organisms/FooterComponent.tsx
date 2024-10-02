import React from "react";

export const FooterButtons = () => {
  return (
    <div className="pr-[82px] gap-5 flex flex-col">
      <h2 className="bg-white text-black cursor-pointer py-2 px-4 rounded-[10px] w-[215px] text-[24px] leading-normal duration-300 font-medium border-2 border-[#91C6EA] box-border z-10">
        დეტალურად
      </h2>
      <h2 className="bg-[#91C6EA] cursor-pointer py-2 px-4 rounded-[10px] text-[24px] leading-normal font-medium duration-300 hover:bg-transparent border-2 border-[#91C6EA] box-border">
        მოითხოვე კონსულტაცია
      </h2>
    </div>
  );
};
