"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineContactMail, MdOutlineDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { FaJediOrder, FaRegUser } from "react-icons/fa";
import { RiBuilding3Line } from "react-icons/ri";
import SubMenu from "./SubMenu";
import { SiCoursera } from "react-icons/si";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addMobile } from "@/redux/features/auth/authSlice";

type Props = {};

const Sidebar_animation = {
  open: {
    width: "16rem",
    transition: {
      damping: 40,
    },
  },
  closed: {
    width: "6rem",
    transition: {
      damping: 40,
    },
  },
};

const text_hedin = {
  open_text: {
    display: "block",
    transition: {
      damping: 40,
    },
  },
  closed_text: {
    display: "none",
    transition: {
      damping: 40,
    },
  },
};

const subMenusList = [
  {
    name: "Courses",
    icon: SiCoursera,
    active: 13,
    activeData: "/admin/course",
    menus: [
      {
        title: "Category",
        link: "/admin/course/tags",
      },
      {
        title: "Add Course",
        link: "/admin/course/add",
      },
      {
        title: "All Course",
        link: "/admin/course/all",
      },
    ],
  },
];

const AdminSidber = (props: Props) => {
  const mobile = true;
  const { user } = useSelector((state: any) => state.auth);
  const pathname = usePathname();
  const isActive = (href: any) => {
    return pathname === href;
  };
  const dispatch = useDispatch();

  const activeStyle = {
    // your active style

    color: "rgb(0, 106, 60)",
    background: "rgba(0, 106, 60, 0.08)",
    borderRight: "3px solid rgb(0, 106, 60)",
  };

  return (
    <div className=" w-[16rem] max-w-[16rem] bg-white text-gray border-r border-r-gray-300 h-screen relative">
      <div className=" p-5 flex items-center justify-between">
        <Link
          href={"/"}
          className=" text-[28px] font-Poppins font-[500] text-black dark:text-white"
        >
          Elearing
        </Link>
        <div>
          <button className=" md:hidden text-[25px] bg-primary w-[35px] text-white h-[35px] rounded-lg flex items-center justify-center" onClick={() => dispatch(addMobile(false))}>
            <IoClose />
          </button>
        </div>
      </div>

      {user && (
        <div className=" m-2 p-4 rounded-md bg-gray-200 flex items-center gap-5 ">
          {user?.avater && (
            <Image
              src={user?.avater ? user?.avater : "/user.png"}
              width={40}
              height={40}
              alt="user"
              className=" rounded-full min-w-max"
            />
          )}
          {mobile && (
            <div>
              <h3 className="text-sm font-semibold whitespace-pre">
                {user?.name}
              </h3>
              <h3 className="text-sm font-normal whitespace-pre">
                Roll : Admin
              </h3>
            </div>
          )}
        </div>
      )}

      <div>
        <ul className=" mt-6">
          {mobile && (
            <div className=" px-8 py-1 mb-3">
              <p className=" text-sm font-bold text-gray-500">MANAGEMENT</p>
            </div>
          )}
          <li>
            <Link
              style={isActive("/admin") ? activeStyle : undefined}
              href={"/admin"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <MdOutlineDashboard size={20} className={" min-w-max"} />
              <span
                className={`${
                  !mobile
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                DashBoard
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/admin/user") ? activeStyle : undefined}
              href={"/admin/user"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <FaRegUser size={20} className={" min-w-max"} />
              <span
                className={`${
                  !mobile
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                User
              </span>
            </Link>
          </li>
          {mobile && (
            <div className=" px-8 py-1 my-4">
              <p className=" text-sm font-bold text-gray-500">MANAGEMENT</p>
            </div>
          )}

          {subMenusList?.map((menu) => (
            <div key={menu.name} className="flex flex-col gap-1">
              <SubMenu data={menu} />
            </div>
          ))}

          <li>
            <Link
              style={isActive("/admin/order") ? activeStyle : undefined}
              href={"/admin/order"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <FaJediOrder size={20} className={" min-w-max"} />
              <span
                className={`${
                  !mobile
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                Order
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/admin/contact") ? activeStyle : undefined}
              href={"/admin/contact"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <MdOutlineContactMail size={20} className={" min-w-max"} />
              <span
                className={`${
                  !mobile
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={isActive("/admin/setting") ? activeStyle : undefined}
              href={"/admin/setting"}
              className=" flex items-center py-3 relative group  text-slate-500 font-semibold px-8 gap-6 hover:bg-gray-200"
            >
              <IoSettingsOutline size={20} className={" min-w-max"} />
              <span
                className={`${
                  !mobile
                    ? "absolute top-[3px] hidden group-hover:flex  bg-gray-200 rounded-md p-2 left-[100px]"
                    : ""
                }`}
              >
                Setting
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidber;
