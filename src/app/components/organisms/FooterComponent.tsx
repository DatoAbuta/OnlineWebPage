import React from "react";

export const FooterButtons = () => {
  return (
    <div className="flex flex-col gap-4 pr-[80px]">
      <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg w-[210px] text-xl transition-all border-2 border-[#91C6EA] box-border z-10 hover:bg-gray-200">
        დეტალურად
      </button>
      <button className="bg-[#91C6EA] font-semibold py-2 px-4 rounded-lg text-xl transition-all border-2 border-[#91C6EA] box-border hover:bg-transparent hover:text-[#91C6EA]">
        მოითხოვე კონსულტაცია
      </button>
    </div>
  );
};
