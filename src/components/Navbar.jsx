import React from "react";
import logo from "../assets/logos/Meubel House_Logos-05.png";
import { NavbarLinks } from "../data/navBarLinks";
import { NavbarIcons } from "../data/navBarIcons";

const navBar = () => {
  return (
    <div className="flex bg-white h-14 w-full items-center  justify-around">
      <div className="  flex ">
        <img src={logo} alt="Logo" width={50} height={32} loading="lazy" />
        <p className="text-black">Furniro</p>
      </div>

      <div className="text-black flex gap-8">
        {NavbarLinks.map((link, index) => (
          <p>{link.title}</p>
        ))}
      </div>

      <div className="text-black flex gap-8">
        {NavbarIcons.map((icon, index) => (
          <img src={icon.image} alt="" width={28} height={28} loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default navBar;
