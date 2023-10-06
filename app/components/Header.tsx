"use client"

import Link from 'next/link';
import React, { FC, useState } from 'react'
import NavItem from '../utils/NavItem';
import ThemeSwitcher from '../utils/ThemeSwitcher';
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi"

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
}

const Header: FC<Props> = (props) => {
  const { open, setOpen, activeItem } = props
  const [active, setActive] = useState(false)
  const [openSideber, setOpenSideber] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSideber(false)
    }
  }

  return (
    <div
      className={`${active ? " dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500" : "w-full border-b dark:border-[#ffffff1c] z-[80] h-[80px] dark:shadow"}`}
    >
      <div className=' w-[90%] 800px:w-[92%] m-auto py-2 h-full'>
        <div className=' w-full h-[80px] flex items-center justify-between p-3'>
          <div>
            <Link href={"/"} className=' text-[28px] font-Poppins font-[500] text-black dark:text-white'>
              Elearing
            </Link>
          </div>
          <div className=' flex items-center'>
            <NavItem activeItem={activeItem} isMobile={false} />
            <ThemeSwitcher />
            {/* ======only for mobile===== */}
            <div className=' 800px:hidden'>
              <HiOutlineMenuAlt3
                size={25}
                className=" cursor-pointer dark:text-white text-black"
                onClick={() => setOpenSideber(true)}
              />
            </div>
            <HiOutlineUserCircle
              size={25}
              className=" cursor-pointer dark:text-white text-black"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* =====mobile sideber==== */}
      {
        openSideber && (
          <div
            className=' fixed w-full h-screen top-0 left-0 z-[9999] dark:bg-[unset] bg-[#00000024]'
            onClick={handleClose}
            id='screen'
          >
            <div className=' w-[70%] fixed h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'>
              <div>
                <Link href={"/"} className=' text-[28px] font-Poppins font-[500] text-black dark:text-white'>
                  Elearing
                </Link>
              </div>
              <NavItem activeItem={activeItem} isMobile={true} />
              <div className='px-6'>
                <HiOutlineUserCircle
                  size={25}
                  className=" cursor-pointer dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              </div>
              <br />
              <br />
              <p className=' text-[16px] px-6 text-black dark:text-white'>
                Copyright @ 2023 Elearning
              </p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Header