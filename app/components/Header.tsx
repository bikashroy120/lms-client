"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import NavItem from "../utils/NavItem";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "./Modal/CustomModal";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Verification from "./auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import Container from "../utils/Container";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = (props) => {
  const { open, setOpen, activeItem, route, setRoute } = props;
  const [active, setActive] = useState(false);
  const [openSideber, setOpenSideber] = useState(false);

  const { user } = useSelector((state: any) => state.auth);

  console.log(user);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  console.log(route);

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSideber(false);
    }
  };

  return (
    <>
      
        <div
          className={`${
            active
              ? " fixed bg-white top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
              : "w-full absolute top-0 left-0 z-[80] h-[80px] dark:shadow"
          }`}
        >
          <Container>
          <div className=" py-2 h-full">
            <div className=" w-full h-[80px] flex items-center justify-between p-3">
              <div>
                <Link
                  href={"/"}
                  className=" text-[28px] font-Poppins font-[500] text-black dark:text-white"
                >
                  Elearing
                </Link>
              </div>
              <div className=" flex items-center">
                <NavItem activeItem={activeItem} isMobile={false} />
                <ThemeSwitcher />
                {/* ======only for mobile===== */}
                <div className=" 800px:hidden">
                  <HiOutlineMenuAlt3
                    size={25}
                    className=" cursor-pointer dark:text-white text-black"
                    onClick={() => setOpenSideber(true)}
                  />
                </div>

                {user ? (
                  <Link href={"/profile"}>
                    <Image
                      src={user?.avater ? user?.avater : "/user.png"}
                      width={50}
                      height={50}
                      alt="logo"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </Link>
                ) : (
                  <HiOutlineUserCircle
                    size={25}
                    className=" cursor-pointer dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                )}
              </div>
            </div>
          </div>
          </Container>
          {/* =====mobile sideber==== */}
          {openSideber && (
            <div
              className=" fixed w-full h-screen top-0 left-0 z-[9999] dark:bg-[unset] bg-[#00000024]"
              onClick={handleClose}
              id="screen"
            >
              <div className=" w-[70%] fixed h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                <div>
                  <Link
                    href={"/"}
                    className=" text-[28px] font-Poppins font-[500] text-black dark:text-white"
                  >
                    Elearing
                  </Link>
                </div>
                <NavItem activeItem={activeItem} isMobile={true} />
                <div className="px-6">
                  <HiOutlineUserCircle
                    size={25}
                    className=" cursor-pointer dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                </div>
                <br />
                <br />
                <p className=" text-[16px] px-6 text-black dark:text-white">
                  Copyright @ 2023 Elearning
                </p>
              </div>
            </div>
          )}
          {route === "Login" && (
            <>
              {open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  active={active}
                  component={Login}
                />
              )}
            </>
          )}
          {route === "sign-up" && (
            <>
              {open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  active={active}
                  component={Signup}
                />
              )}
            </>
          )}
          {route === "verify-otp" && (
            <>
              {open && (
                <CustomModal
                  open={open}
                  setOpen={setOpen}
                  setRoute={setRoute}
                  active={active}
                  component={Verification}
                />
              )}
            </>
          )}
        </div>
    </>
  );
};

export default Header;
