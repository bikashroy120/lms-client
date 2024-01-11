"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SubMenu = ({ data }: any) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: any) => {
    return pathname.slice(0,data?.active) === href;
  };

  const isActive2 = (href: any) => {
    return pathname === href;
  };

  const activeStyle = {
    // your active style

    color: "rgb(0, 106, 60)",
    background: "rgba(0, 106, 60, 0.08)",
    borderRight : "3px solid rgb(0, 106, 60)"
  };


  return (
    <>
      <li
        onClick={() => setSubMenuOpen((pre)=>!pre)}
      >
        <div style={isActive(data?.activeData) ? activeStyle : undefined}   className=" flex items-center cursor-pointer py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200">
          <data.icon size={23} className="min-w-max" />
          <p className="flex-1 capitalize">{data.name}</p>
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        </div>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col font-normal overflow-hidden"
      >
        {data.menus?.map((menu: any) => (
          <li key={menu} onClick={()=>setSubMenuOpen(true)}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <Link
              href={ menu?.link? menu?.link : "/" }
              className={`flex items-center pl-10 py-3 relative group  text-slate-500 px-9 gap-6 hover:bg-gray-200 ${isActive2(menu?.link) ? " font-bold" : " font-normal"}`}
            > 
              <div className=" h-[6px] w-[6px] rounded-full bg-gray-500"></div>
              {menu?.title}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
