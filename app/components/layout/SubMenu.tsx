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
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div   className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200">
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
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu: any) => (
          <li key={menu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <Link
              href={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize"
            >
              {menu}
            </Link>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
