import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-[30px] text-tsoft">
      <div className="font-bold">Leonardo Cunha</div>
      <div className="text-[12px]">
        {new Date().getFullYear()} - © All rights reserved
      </div>
    </div>
  );
};

export default Footer;
